import { userSchema } from "@/lib/validations";
import { Network } from "@/utils";

export type TUserSchema = z.infer<typeof userSchema>;
export type TRole = "SYSTEM_ADMIN" | "DEVELOPER" | "ADMIN";
export type TNet = keyof typeof Network;
export type TNetwork = {
  network: TNet | undefined;
  link: string;
};

// cloudinary resource
export type CloudinaryResource = {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
};
