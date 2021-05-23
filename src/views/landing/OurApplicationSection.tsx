import styles from "../../../styles/landing.module.scss";

export const OurApplicationSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Our Application</h3>
        <hr className="mt-2 my-4" />
        <h4 className="text-xl font-semibold">
          About this application (video)
        </h4>
        <iframe
          width="835"
          height="470"
          src="https://www.youtube.com/embed/xkeUHwi33LQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h4 className="text-xl font-semibold mt-4">
          Application website:{" "}
          <a
            target="_blank"
            href="https://cv-project-caricature.vercel.app/"
            className="text-blue-500 hover:underline"
          >
            https://cv-project-caricature.vercel.app/
          </a>
        </h4>
      </div>
    </div>
  );
};
