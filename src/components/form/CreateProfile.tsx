import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Facebook, Github, Linkedin, Loader2, Upload } from "lucide-react";
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
import { userSchema } from "@/validators/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { networks } from "@/constants";
import { TNetwork } from "@/utils";
import { trpc } from "@/tRPC/client";
import { toast } from "sonner";
import { useFileuplaod } from "@/hooks";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export type TUserSchema = z.infer<typeof userSchema>;

const CreateProfile = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const profiles = trpc.index.useQuery();
  const mutation = trpc.store.useMutation({
    onSettled: () => {
      profiles.refetch();
    },
  });
  const [isPending, startTransition] = useTransition();
  const { loading, upload, url } = useFileuplaod();

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
    },
  });
  const router = useRouter();

  /** onsubmit handler */
  const onSubmit = (value: TUserSchema) => {
    console.log("before: ", value);
    const data = { ...value, profileImage: url };
    console.log("pore: ", data);
    startTransition(async () => {
      try {
        await mutation.mutate(data);
        form.reset();
        setOpen(false);
        toast.success("Developer Profile created successfully!");
        revalidatePath("/");
      } catch (error) {
        toast.error("Fail to create developer profile");
        throw new Error("Fail to submit form");
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
          <div className="flex-center relative w-40 h-40 rounded-full border-2">
            {url ? (
              <Image
                src={url}
                alt="profiles"
                className="w-full h-full rounded-full"
                width={160}
                height={160}
              />
            ) : (
              <div className="rounded-full bg-blue-400 w-full h-full" />
            )}
            <Label
              htmlFor="file"
              className="z-50 group absolute bottom-[15px] -right-[5px] rounded-full w-10 h-10 bg-red-300 flex-center cursor-pointer"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin group-hover:cursor-pointer bg-transparent" />
              ) : (
                <Upload className="bg-transparent group-hover:cursor-pointer" />
              )}
              <Input
                disabled={loading}
                onChange={(e) => {
                  if (e.target.files) {
                    upload(e.target.files[0]);
                  }
                }}
                name="file"
                type="file"
                placeholder="Name"
                className="w-full h-full opacity-0 absolute"
                aria-hidden
                multiple={false}
              />
            </Label>
          </div>
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
            disabled={isPending ? true : false}
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
