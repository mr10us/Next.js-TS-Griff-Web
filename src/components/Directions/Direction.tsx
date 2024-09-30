"use client";

import { shimmer, toBase64 } from "@/app/helpers/shimmer";
import { type DirectionProps } from "./Direction.d";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Direction = ({
  id,
  image,
  title,
}: Omit<DirectionProps, "description">): JSX.Element => {
  return (
    <Link href={`/directions/${id}`}>
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
    </Link>
  );
};
