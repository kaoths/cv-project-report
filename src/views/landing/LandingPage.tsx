import styles from "../../../styles/landing.module.scss";

const arr = Array.from(Array(12).keys());
const chars = ["C", "O", "N", "F", "I", "D", "E", "N", "T", "I", "A", "L"];
export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 flex justify-center">
      {arr.map((n, i) => {
        return (
          <div className={`${styles.bubble} ${styles[`bubble-${i + 1}`]}`} key={`bubble_${i}`} />
        );
      })}
      <div className={`${styles.bubble} ${styles["bubble-1"]}`} />
      <div className="flex flex-col w-11/12">
        <div className="flex flex-col items-center mt-4 my-1">
          <div className={`${styles.projectNameWrapper}`}>
            {chars.map((c,i) => (
              <span key={`char_${i}`}>{c}</span>
            ))}
            <div className={`flex justify-center items-end ${styles.fade}`}>
              <p>Project</p>
              &nbsp;
              {/*<span>(2110433 CV@Chula)</span>*/}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-6 w-full overflow-hidden">
          <hr className={`w-full ${styles.headDivider}`} />
        </div>
        <div className={`flex flex-col ${styles.fade}`}>
          <div className={styles.glassContainer}>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
