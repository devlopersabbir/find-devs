"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRight, Github, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { TNetwork, TUserSchema } from "@/types";
import CldImage from "@/cloud/CldImage";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileCard = ({
  description,
  location,
  name,
  portfolio,
  skill,
  profileImage,
  social,
}: TUserSchema) => {
  return (
    <Card className="w-full backdrop-blur-3xl shadow flex flex-col dark:bg-zinc-700 border-none">
      {/* header */}
      <CardHeader className="flex justify-between items-stretch flex-row gap-4 overflow-hidden">
        <Avatar className="w-24 h-24 object-cover">
          <AvatarImage
            src={profileImage}
            className="object-fill"
            alt="profile photo"
          />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-start w-full overflow-hidden flex-col gap-1">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-zinc-200">
            {name}
          </h2>
          <p className="flex-center gap-2 text-base">
            <MapPin size={20} />
            {location}
          </p>
          <Carousel className="w-full mt-1.5">
            <CarouselContent
              id="skills"
              className="flex justify-start items-center"
            >
              {skill.map((sk: string, index: number) => (
                <CarouselItem key={index} className="w-auto basis-[-29-px]">
                  <Badge
                    variant="secondary"
                    className="text-sm cursor-all-scroll select-none"
                  >
                    {sk}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex-end w-52">
          <Link
            href={portfolio ?? "https://github.com/devlopersabbir"}
            className="hover:underline text-green-600 flex-start gap-2"
          >
            View Profile
            <ArrowRight size={20} />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-serif text-lg">{description}</p>
        <div className="flex-start mt-3 gap-4">
          {social?.map((net: TNetwork, i: number) => (
            <Link
              key={i}
              href={net.link}
              className="group scale-100 duration-300 ease-out bg-red-600 hover:bg-transparent rounded-md hover:rounded-full p-1.5 text-white"
            >
              <Github className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
