"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { type DirectionProps } from "./Direction.d";
import Image from "next/image";
import React from "react";

export const Direction = ({
  id,
  image,
  title,
  description,
}: DirectionProps): JSX.Element => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <div className="flex w-full flex-col items-center justify-center gap-4 font-grotesk uppercase text-white">
          <Image src={image} alt={title} width={600} height={300} />
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll bg-gray-950 text-white">
        <DialogTitle className="text-3xl uppercase">{title}</DialogTitle>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <Image
            src={image}
            alt={title}
            sizes="100vw"
            className="h-auto w-full object-cover md:w-1/2"
            
            width={600}
            height={300}
          />
          <DialogDescription className="text-lg text-white">
            {description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};
