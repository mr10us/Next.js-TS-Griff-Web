import { Modal } from "./modal";

export default function CoachModal({
  params: { id: directionId },
}: {
  params: { id: string };
}) {
  return <Modal directionId={Number(directionId)}></Modal>;
}
