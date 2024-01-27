export const isBase64Image = (imageData: string): boolean => {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
};

export enum Network {
  Facebook = "Facebook",
  Instagram = "Instagram",
  Github = "Github",
  Linkedin = "Linkedin",
  Twitter = "Twitter",
  Youtube = "Youtube",
}
