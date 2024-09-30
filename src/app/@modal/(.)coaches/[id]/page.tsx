import { Modal } from "./modal";

export default function CoachModal({
  params: { id: coachId },
}: {
  params: { id: string };
}) {
  return <Modal coachId={Number(coachId)}></Modal>;
}
