"use client";

import { shimmer, toBase64 } from "@/app/helpers/shimmer";
import {
  Dialog,
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
        <div className="grid w-full items-center justify-center gap-4 font-grotesk uppercase text-white">
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
            src={image}
            alt={title}
            width={600}
            height={300}
          />
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll bg-gray-950 text-white">
        <DialogTitle className="text-3xl uppercase">{title}</DialogTitle>
        <div className="w-full">
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
            src={image}
            alt={title}
            className="h-auto object-cover float-left mr-6 md:w-1/3"
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
