"use client";

import { Input } from "../ui/input";
import { Facebook, Github, Linkedin, UploadCloud } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState, useTransition } from "react";
import { networks } from "@/constants";
import Image from "next/image";
import { TNetwork, TUserSchema } from "@/types";
import { userSchema } from "@/lib/validations";
import { isBase64Image, useUploadThing } from "@/utils";
import { User } from "@/schemas";
import { createProfile } from "@/lib/actions";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const CreateProfile = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isPending, startTransition] = useTransition();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");
  const pathname = usePathname();

  /** use form hooks with resolver */
  const form = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      location: "",
      portfolio: "",
      role: "DEVELOPER",
      social: [
        {
          link: "",
          network: "",
        },
      ],
      skill: [],
      description: "",
      profileImage: "",
    },
  });

  /** image handler */
  const handleImage = (
    event: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    event.preventDefault();
    /** File reader */
    const fileReader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      setFiles(Array.from(event.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (e) => {
        const imageDataUrl = e.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      /** file reader locally */
      fileReader.readAsDataURL(file);
    }
  };

  /** onsubmit handler */
  const onSubmit = async (values: User) => {
    startTransition(async () => {
      const isBase64 = isBase64Image(values.profileImage);
      if (isBase64) {
        const imageRes = await startUpload(files);
        console.log("image res: ", imageRes);
        if (imageRes && imageRes[0].url) {
          values.profileImage = imageRes[0]?.url;
        }
      }

      /** submit form with server actions */
      try {
        await createProfile(values, pathname);
        form.reset();
        setOpen(false);
        toast.success("Developer Profile created successfully!");
      } catch (error) {
        toast.error("Fail to create developer profile");
      }
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-center flex-col md:flex-row-reverse gap-5 px-5 pb-5"
      >
        <div className="w-[30%] flex-center flex-col gap-3">
          <h1 className="text-base font-semibold hidden md:visible">
            Upload Profile
          </h1>
          {/* form image uplaod */}
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem className="flex-center w-40 h-40 relative cursor-pointer">
                {field.value ? (
                  <Image
                    src={field.value}
                    width={160}
                    height={160}
                    alt="profile photo"
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <div className="flex-center w-full h-full rounded-full border-2 bg-zinc-100">
                    <UploadCloud size={40} className="text-red-600" />
                  </div>
                )}
                <FormControl className="w-40 h-40 border-2 border-red-400 absolute rounded-full opacity-0">
                  <Input
                    type="file"
                    accept="image/*"
                    className="w-full h-full"
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-[80%] space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Enter your name</FormLabel>
                <FormControl>
                  <Input placeholder="Jhon deo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Enter your location
                </FormLabel>
                <FormControl>
                  <Input placeholder="Dhaka, Bangladesh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Portfolio url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://github.com/devlopersabbir"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skill"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Add your skills</FormLabel>
                <FormControl>
                  <Input
                    placeholder="TypeScript, Rust, C, Python"
                    onChange={(e) => {
                      form.setValue("skill", e.target.value.split(", "));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="social"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="link" className="font-semibold">
                  Add your social links
                </FormLabel>
                {networks.map((net: TNetwork, i: number) => (
                  <div className="relative flex-center" key={i}>
                    {net.network === "Github" ? (
                      <Github className="absolute left-2" />
                    ) : net.network === "Facebook" ? (
                      <Facebook className="absolute left-2" />
                    ) : net.network === "Linkedin" ? (
                      <Linkedin className="absolute left-2" />
                    ) : null}
                    <Input
                      type="url"
                      className="pl-10"
                      id="link"
                      onChange={(e) => {
                        const newSocial = [...(field.value as any)];
                        newSocial[i] = {
                          network: net.network,
                          link: e.target.value,
                        };
                        form.setValue("social", newSocial);
                      }}
                    />
                  </div>
                ))}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">About your self</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="font-semibold transition-all ease-out duration-300"
            disabled={isPending}
          >
            {isPending ? (
              <svg
                className="transition-all ease-out duration-300 animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            ) : null}
            Add Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateProfile;
