export const isBase64Image = (imageData: string): boolean => {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
};

export const networks = [
  "Facebook",
  "Instagram",
  "GitHub",
  "LinkedIn",
  "Twitter",
  "YouTube",
] as const;
