import styles from "../../../styles/landing.module.scss";
import Image from "next/image";

export const ResultSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Results</h3>
        <hr className="mt-2 my-4" />
        <div className="flex items-center">
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-1.jpg"
              width={719}
              height={340}
              layout="intrinsic"
            />
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-2.jpg"
              width={851}
              height={389}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-3.jpg"
              width={787}
              height={351}
              layout="intrinsic"
            />
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-4.jpg"
              width={746}
              height={323}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-5.jpg"
              width={912}
              height={310}
              layout="intrinsic"
            />
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/images/results/result-6.jpg"
              width={660}
              height={228}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
