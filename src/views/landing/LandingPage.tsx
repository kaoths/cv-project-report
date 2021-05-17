import styles from "../../../styles/landing.module.scss";
import { ProblemStatementSection } from "./ProblemStatementSection";
import { TechnicalChallengeSection } from "./TechnicalChallengeSection";
import { RelatedWorkSection } from "./RelatedWorkSection";
import { TeamMemberSection } from "./TeamMemberSection";
import { MethodologySection } from "./MethodologySection";
import { ResultSection } from "./ResultSection";

const arr = Array.from(Array(12).keys());
const chars = ["C", "O", "N", "F", "I", "D", "E", "N", "T", "I", "A", "L"];
export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center py-4">
      {arr.map((n, i) => {
        return (
          <div
            className={`${styles.bubble} ${styles[`bubble-${i + 1}`]}`}
            key={`bubble_${i}`}
          />
        );
      })}
      <div className={`${styles.bubble} ${styles["bubble-1"]}`} />
      <div className="flex flex-col w-11/12">
        <div className="flex flex-col items-center my-1">
          <div className={`${styles.projectNameWrapper}`}>
            {chars.map((c, i) => (
              <span key={`char_${i}`}>{c}</span>
            ))}
            <div className={`flex justify-center items-end ${styles.fade}`}>
              <p className="relative">Portrait photo caricature</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-8 w-full overflow-hidden">
          <hr className={`w-full ${styles.headDivider}`} />
        </div>
        <div className={`flex flex-col ${styles.fade}`}>
          <ProblemStatementSection />
          <TechnicalChallengeSection />
          <RelatedWorkSection />
          <MethodologySection />
          <ResultSection />
          <TeamMemberSection />
        </div>
      </div>
    </div>
  );
};
