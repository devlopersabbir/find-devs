"use client";
import { config } from "@/cloud";
import { useState } from "react";

export const useFileuplaod = () => {
  const api_url = `https://api.cloudinary.com/v1_1/${config.cloud_name}/image/upload`;
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const upload = async (file: File) => {
    if (!file) throw new Error("No file found!");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", config.api_key);
      formData.append("upload_preset", "profiles_preset");

      const response = await fetch(api_url, {
        method: "POST",
        credentials: "omit",
        body: formData,
      }).then((res) => res.json());
      if (response) {
        setUrl(response.secure_url);
      }
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    upload,
    url,
  };
};
