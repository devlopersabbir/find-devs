export enum Network {
  Facebook = "facebook",
  Instagram = "instagram",
  Github = "github",
  Linkedin = "linkedin",
  Twitter = "twitter",
  Youtube = "youtube",
}

export type TRole = "SYSTEM_ADMIN" | "DEVELOPER" | "ADMIN";
export type TNet = keyof typeof Network;
export type TNetwork = {
  network: TNet | undefined;
  link: string;
};
