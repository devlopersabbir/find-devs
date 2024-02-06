"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import CreateProfile from "../../forms/CreateProfile";
import { Plus } from "lucide-react";

const ProfileAdd = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <>
          <Button
            onClick={() => setOpen(true)}
            variant="default"
            className="font-semibold mt-5 lg:block hidden"
          >
            Add My Profile
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="default"
            className="rounded-full w-10 h-10 p-0 font-extrabold lg:hidden fixed bottom-5 right-5"
          >
            <Plus size={30} fontWeight={900} />
          </Button>
        </>
      </DialogTrigger>

      {/* diolog content */}
      <DialogContent className="sm:max-w-[640px] p-0 overflow-y-scroll h-[70vh]">
        <DialogHeader className="p-5">
          <DialogTitle>Add Profile</DialogTitle>
        </DialogHeader>
        {/* form */}
        <CreateProfile setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileAdd;
