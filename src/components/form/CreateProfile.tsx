import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Edit3,
  Facebook,
  Github,
  Instagram,
  Link,
  Linkedin,
  Upload,
  X,
  Youtube,
} from "lucide-react";
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
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { profile } from "./actions";
import { networks } from "@/constants";
import { TNetwork } from "@/utils";
import slug from "slug";

export type TUserSchema = z.infer<typeof userSchema>;

const CreateProfile = () => {
  const [isPending, startTransition] = useTransition();
  const isUpload = false;

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
  const router = useRouter();

  /** onsubmit handler */
  const onSubmit = (value: TUserSchema) => {
    startTransition(async () => {
      try {
        await profile(value);
        // alert("success!")
        console.log("success");
      } catch (error) {
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
            <div className="rounded-full bg-blue-400 w-full h-full" />
            <Label
              htmlFor="file"
              className="group absolute bottom-[15px] -right-[5px] rounded-full w-10 h-10 bg-red-300 flex-center cursor-pointer"
            >
              {isUpload ? (
                <Upload className="group-hover:cursor-pointer" />
              ) : (
                <Edit3 className="group-hover:cursor-pointer cursor-pointer" />
              )}
              <Input
                name="file"
                type="file"
                placeholder="Name"
                className="w-full h-full opacity-0 absolute"
                aria-hidden
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
          <Button type="submit" className="font-semibold">
            Add Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateProfile;
