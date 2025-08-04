import { networks } from "@/utils";
import { z } from "zod";

export const roles = ["SYSTEM_ADMIN", "DEVELOPER", "ADMIN"] as const;
export const userSchema = z.object({
  name: z.string().min(2).max(50).trim(),
  location: z.string().min(2).max(120),
  skills: z.array(z.string()),
  role: z.enum(roles).default("DEVELOPER").optional(),
  description: z.string().min(10).max(500),
  social: z.array(
    z.object({
      network: z.enum(networks),
      link: z.string(),
    }),
  ),
  portfolio: z.string().nonempty({ message: "Profile is required!" }),
  profileImage: z.string(),
});
