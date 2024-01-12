import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2).max(50).trim(),
  location: z.string().min(2).max(120),
  skill: z.array(z.string()),
  role: z.enum(["SYSTEM_ADMIN", "DEVELOPER", "ADMIN"]).default("DEVELOPER"),
  description: z.string().min(10).max(40),
  social: z.array(
    z.object({
      network: z.string(),
      link: z.string(),
    })
  ),
  portfolio: z.string(),
});
