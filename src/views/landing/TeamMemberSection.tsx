import styles from "../../../styles/landing.module.scss";
import { MemberCard } from "../../components/MemberCard";
import { members } from "../../constants/members";

export const TeamMemberSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Team Members</h3>
        <hr className="mt-2 my-4" />
        <div className="flex justify-between">
          {members.map((member) => (
            <MemberCard member={member} key={member.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
