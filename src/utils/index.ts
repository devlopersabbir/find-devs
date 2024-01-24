export const isBase64Image = (imageData: string): boolean => {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
};

export enum Network {
  Facebook = "facebook",
  Instagram = "instagram",
  Github = "github",
  Linkedin = "linkedin",
  Twitter = "twitter",
  Youtube = "youtube",
}

// export also uploadting from here...
export * from "./uploadthing";
