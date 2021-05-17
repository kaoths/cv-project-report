import Image from "next/image";
import { Member } from "../constants/members";

type Props = {
  member: Member;
};

export const MemberCard = ({ member }: Props) => {
  const { src, name, id, nickname } = member;
  return (
    <div className="bg-white bg-opacity-10 rounded p-6 flex flex-col items-center">
      <Image src={src} width={256} height={256} layout="intrinsic" />
      <p className="my-2">
        {name} ({nickname})
      </p>
      <p>{id}</p>
    </div>
  );
};
