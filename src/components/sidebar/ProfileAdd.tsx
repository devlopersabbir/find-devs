"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CreateProfile from "../form/CreateProfile";

const ProfileAdd = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="font-semibold mt-5">
          Add My Profile
        </Button>
      </DialogTrigger>

      {/* diolog content */}
      <DialogContent className="sm:max-w-[640px] p-0 overflow-y-scroll h-[70vh]">
        <DialogHeader className="p-5">
          <DialogTitle>Add Profile</DialogTitle>
        </DialogHeader>
        {/* form */}
        <CreateProfile />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileAdd;
