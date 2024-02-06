import dotenv from "dotenv";
import { z } from "zod";
dotenv.config({
  path: "./.env",
});

export const configType = z.object({
  DATABASE_URI: z.string().nonempty({ message: "DATABASE_URL is missing" }),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z
    .string()
    .nonempty({ message: "Cloudinary cloud name is missing" }),
  NEXT_PUBLIC_CLOUDINARY_API_KEY: z
    .string()
    .nonempty({ message: "Cloudinary API key missing" }),
});
type TConfig = z.infer<typeof configType>;

export const config: TConfig = {
  DATABASE_URI: process.env.DATABASE_URI as string,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env
    .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
  NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env
    .NEXT_PUBLIC_CLOUDINARY_API_KEY as string,
};
