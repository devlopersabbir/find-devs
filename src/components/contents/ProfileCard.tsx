import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { TUserSchema } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getIconComponent } from "@/constants";

type User = {
  id: number;
  uuid: string | null;
  createdAt: Date;
  updatedAt: Date;
};
type Props = {
  profile: TUserSchema & User;
};
const ProfileCard = ({ profile }: Props) => {
  return (
    <Card className="w-full backdrop-blur-3xl shadow flex flex-col dark:bg-zinc-700 border-none transition-all ease-out duration-300">
      {/* header */}
      <CardHeader className="flex justify-between items-stretch flex-row lg:gap-4 md:gap-2 gap-1 overflow-hidden">
        <Avatar className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16 object-cover transition-all ease-out duration-300">
          <AvatarImage
            src={profile.profileImage}
            className="object-fill"
            alt={profile.name}
          />
          <AvatarFallback>
            {profile.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-start w-full overflow-hidden flex-col lg:gap-1 gap-0.5">
          <h2 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-gray-700 dark:text-zinc-200 ">
            {profile.name}
          </h2>
          <p className="flex-center lg:gap-2 md:gap-1 gap-0 lg:text-xl md:text-lg sm:text-base text-xs">
            <MapPin size={16} />
            {profile.location}
          </p>
          <Carousel className="w-full lg:mt-1.5 md:mt-0.5 mt-0">
            <CarouselContent
              id="skills"
              className="flex justify-start items-center"
            >
              {profile.skills.map((skill: string, i: number) => (
                <CarouselItem key={i} className="w-auto basis-[-29-px]">
                  <Badge
                    variant="secondary"
                    className="lg:text-sm text-xs cursor-all-scroll select-none"
                  >
                    {skill}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div>
          <Link
            href={profile.portfolio ?? "https://github.com/devlopersabbir"}
            target="_blank"
            className="hover:underline text-green-600 flex gap-2 font-semibold"
          >
            <span className="lg:text-lg md:text-md sm:text-base text-xs">
              Profile
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <p className="font-thin lg:text-lg md:text-base text-xs">
          {profile.description}
        </p>
        <div className="flex-start mt-3 gap-4">
          {profile.social?.map((social, i) => (
            <Link
              key={i}
              href={social.link}
              className="group scale-100 duration-300 ease-out bg-red-600 hover:bg-transparent rounded-md hover:rounded-full p-1.5 text-white"
            >
              {getIconComponent(social.network)}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
