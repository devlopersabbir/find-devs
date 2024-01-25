import Image from "next/image";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex-center flex-col gap-4">
      <Image src="/sorry.png" alt="not found" width={160} height={213} />
      <div className="flex-center flex-col gap-1">
        <h1 className="font-bold text-3xl">No Developers Founds!</h1>
        <p className="font-light text-base">
          We couldn't find any developers 🥲
        </p>
      </div>
    </div>
  );
};

export default Notfound;
