import styles from "../../../styles/landing.module.scss";

export const ProblemStatementSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Problem Statement</h3>
        <hr className="mt-2 my-4" />
        <p className="font-light">
          There are times that we want to share our photos, but do not want to
          expose our face directly on the photo. This project aims to solve this
          problem by changing the face portion in the image into caricature
          cartoon. <br />
          By doing this, people can keep their real face private while being
          able to share anything else in the picture. <br />
          Unlike blurring, the caricature cartoon face reflects the original
          face. Thus the audience is still able to identify who is in the image
          or able to distinguish each caricature face.
        </p>
      </div>
    </div>
  );
};
