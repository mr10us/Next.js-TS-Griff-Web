"use client";

import { shimmer, toBase64 } from "@/app/helpers/shimmer";

import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import coaches from "../../../../../coaches.json";
import { useRef, MouseEvent } from "react";

/**
 * A modal that displays information about a coach.
 *
 * @param {{ coachId: number }} props The props object.
 * @param {number} props.coachId The ID of the coach to display.
 * @returns {JSX.Element | null} The modal content.
 */
export const Modal = ({ coachId }: { coachId: number }): JSX.Element | null => {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement | null>(null);

  const coach = coaches.find((coach) => coach.id === coachId);

  const handleToggle = (isOpened: boolean): void => {
    if (router) if (!isOpened) router.back();
  };
  const handleTrigger = (e: MouseEvent<HTMLButtonElement>): void => {
    const content = contentRef.current;

    if (content && content.contains(e.target as Node)) {
      e.preventDefault();
    }
  };

  if (!coach) return null;
  return (
    <Dialog open onOpenChange={handleToggle}>
      <DialogContent
        ref={contentRef}
        className="modal-content w-[80%] overflow-y-scroll bg-gray-950"
      >
        <DialogTrigger onClick={handleTrigger}>
          <DialogTitle className="mb-8 max-w-[70%] text-left text-3xl uppercase text-white">
            {coach.title}
          </DialogTitle>
          <div className="flex w-full gap-8 flex-col-reverse sm:flex-row">
            <Image
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(600, 300),
              )}`}
              src={coach.image}
              alt={coach.title}
              className="h-auto w-full object-contain mr-6 float-none sm:float-left sm:mr-6 sm:w-1/3"
              width={600}
              height={300}
            />
            <DialogDescription className="text-left text-lg text-white">
              {coach.description}
            </DialogDescription>
          </div>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};
