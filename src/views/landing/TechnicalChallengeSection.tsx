import styles from "../../../styles/landing.module.scss";
import Image from "next/image";

export const TechnicalChallengeSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Technical Challenge</h3>
        <hr className="mt-2 my-4" />
        <h5 className="text-lg font-medium">Long processing time</h5>
        <li className="font-light">
          Our model takes seconds to generate the result. Thus, making it
          realtime is a challenge
        </li>
        <h5 className="text-lg font-medium mt-12">Result image blending</h5>
        <li className="font-light">
          Our model generates the face-area only. So, blending the result image
          to the original one is not seamless
        </li>
        <div className="p-4">
          <Image
            src="/images/blending-method.jpg"
            alt="blending method"
            width={1905}
            height={360}
            layout="responsive"
          />
        </div>
        <h5 className="text-lg font-medium mt-12">Face landmark alignment</h5>
        <li className="font-light">
          We use landmarks on the face to align the generated image into
          original.
        </li>
        <li className="font-light">
          Landmarks shift on result image makes the blended image distorted.
        </li>
        <div className="p-4 max-w-3/5">
          <Image
            src="/images/distorted-result.jpg"
            alt="Distorted Result"
            width={1283}
            height={673}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
