import { userSchema } from "@/lib/validations";
import { Network, networks } from "@/utils";
import { config } from "@/lib/validations";
import { LucideProps } from "lucide-react";
import { z } from "zod";

export type TUserSchema = z.infer<typeof userSchema>;
export type TRole = "SYSTEM_ADMIN" | "DEVELOPER" | "ADMIN";
export type TNet = (typeof networks)[number];
export type TNetwork = {
  network: TNet;
  link: string;
  icon?: LucideProps;
};
const s: TNetwork = {
  network: "",
};
