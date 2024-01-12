"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowRight, Github, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { trpc } from "@/tRPC/client";

const ProfileCard = () => {
  return (
    <Card className="w-full backdrop-blur-3xl shadow flex flex-col dark:bg-zinc-700 border-none">
      {/* header */}
      <CardHeader
        id="fuck"
        className="flex justify-between items-stretch flex-row gap-4 overflow-hidden"
      >
        <Avatar className="w-24 h-24 object-cover">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/82939905?v=4"
            className="object-fill"
            alt="profile photo"
          />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div className="flex-start w-full overflow-hidden flex-col gap-1">
          <h2 className="text-2xl font-semibold text-gray-700">
            Sabbir Hossain Shuvo
          </h2>
          <p className="flex-center gap-2 text-base">
            <MapPin size={20} />
            Bangladesh
          </p>
          <div className="flex overflow-x-auto gap-2 mt-2.5">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-sm cursor-all-scroll select-none"
              >
                JavaScript
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex-end w-52">
          <Link
            href="/"
            className="hover:underline text-green-600 flex-start gap-2"
          >
            View Profile
            <ArrowRight size={20} />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-serif text-lg">
          Passionate software developer with expertise in PHP, Java, and .NET
          and C# Enthusiastic problem solver and lifelong learner, dedicated to
          crafting innovative solutions.
        </p>
        <div className="flex-start mt-3 gap-4">
          {[0, 1, 2, 3].map((_, i) => (
            <Link
              key={i}
              href="/"
              className="group scale-100 duration-300 ease-out bg-red-600 hover:bg-transparent rounded-md hover:rounded-full p-1.5 text-white"
            >
              <Github
                size={25}
                className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
              />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
