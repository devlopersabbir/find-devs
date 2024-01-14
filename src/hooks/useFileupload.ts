import { useState } from "react";

export const useFileuplaod = (): {
  loading: boolean;
  upload: any;
  url: string;
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const upload = async (file: File | undefined) => {
    if (!file) throw new Error("No file found!");
    setLoading(true);
    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
      const imageUrl = await res.json();
      setUrl(imageUrl?.url);
    } catch (error) {
      console.log("fail file upload: ", error);
      throw new Error("Fail to upload files!");
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
