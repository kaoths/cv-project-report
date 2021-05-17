import styles from "../../../styles/landing.module.scss";
import Image from "next/image";

export const MethodologySection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Methodology</h3>
        <hr className="mt-2 my-4" />
        <h5 className="text-lg font-medium">There are 3 main steps:</h5>
        <ol className="list-decimal list-inside">
          <li className="font-light">Face Detection & Alignment</li>
          <li className="font-light">Face Transfer</li>
          <li className="font-light">Alignment back</li>
        </ol>
        {/*Step 1*/}
        <h5 className="text-lg font-medium mt-12">
          (1) Face Detection & Alignment
        </h5>
        <div className="flex mt-4">
          <div className="flex-1">
            <h5 className="text-lg font-medium">Face Detection</h5>
            <ul className="list-disc list-inside font-light">
              <li>MTCNN Face Detector</li>
              <li>Bounding box: [x, y, width, height]</li>
              <li>
                5 keypoints: [right_eye, left_eye, nose, mouth_right,
                mouth_left]
              </li>
            </ul>
            <div className="mt-2 pr-12">
              <Image
                src="/images/face-detector.jpg"
                alt="blending method"
                width={1137}
                height={550}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-lg font-medium">Face Alignment</h5>
            <ol className="list-decimal list-inside font-light">
              <li>
                Determine a{" "}
                <u>
                  <i>reference point</i>
                </u>{" "}
                (5 keypoints).
              </li>
              <li>
                Find{" "}
                <u>
                  <i>transformation matrix</i>
                </u>{" "}
                from the source point to the reference point.
              </li>
              <li>
                Use{" "}
                <u>
                  <i>cv2.warpAffine</i>
                </u>{" "}
                to transform the image
              </li>
            </ol>
            <div className="mt-2 pr-20">
              <Image
                src="/images/alignment.jpg"
                alt="blending method"
                width={1053}
                height={534}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        {/*Step 2*/}
        <hr className="my-6" />
        <h5 className="text-lg font-medium">(2) Face Transfer</h5>
        <div>
          <h6 className="text-md font-medium mt-4">
            (2.1) WarpGAN: Automatic Caricature Generation (2019)
          </h6>
          <ul className="list-disc list-inside font-light">
            <li>
              Pretrained weights: Dataset consists of{" "}
              <u>
                <i>6,042 caricatures</i>
              </u>{" "}
              and{" "}
              <u>
                <i>5,974 photos</i>
              </u>{" "}
              from{" "}
              <u>
                <i>252 identities</i>
              </u>
            </li>
            <li>
              Input dimension: <i>[256 x 256 x 3]</i>
            </li>
            <li>
              <u>
                <i>Generator</i>
              </u>{" "}
              is trained to fool the discriminator.
            </li>
            <li>
              <u>
                <i>Discriminator</i>
              </u>{" "}
              is trained to tell the differences.
            </li>
            <li>
              Decouples the{" "}
              <u>
                <i>shape deformation</i>
              </u>{" "}
              and{" "}
              <u>
                <i>texture rendering</i>
              </u>{" "}
              into two tasks.
            </li>
          </ul>
          <div className="p-4">
            <Image
              src="/images/face-transfer-1.jpg"
              width={709 * 0.8}
              height={377 * 0.8}
              layout="intrinsic"
            />
          </div>
          <h6 className="text-md font-medium mt-4">(2.2) Generator</h6>
          <ul className="list-disc list-inside font-light">
            <li>Content encoder (Ec)</li>
            <li>
              Decoder(R) - takes Ec(x) and latent random style code (s ~ N(0,I))
              for{" "}
              <u>
                <i>texture rendering</i>
              </u>
            </li>
            <li>
              Warp controller - estimates the control point and displacements
              for{" "}
              <u>
                <i>shape deformation</i>
              </u>
            </li>
          </ul>
          <div className="p-4">
            <Image
              src="/images/face-transfer-2.jpg"
              width={1158 * 0.7}
              height={433 * 0.7}
              layout="intrinsic"
            />
          </div>
          <h6 className="text-md font-medium mt-4">(2.3) Discriminator</h6>
          <ul className="list-disc list-inside font-light mt-4">
            (a) <b>Patch Adversarial Loss</b>{" "}
            <span className="text-sm text-red-500">
              <i>(*We tried, but didn't use)</i>
            </span>
            <li>
              3-class classifier (real photo, real caricature, fake caricature)
            </li>
            <li>
              learning style transfer but fails to capture distinguish features
              of different identities
            </li>
          </ul>
          <ul className="list-disc list-inside font-light mt-4">
            (b) <b>Identity-Preservation Adversarial Loss</b>{" "}
            <span className="text-sm text-blue-500">
              <i>(*We used this)</i>
            </span>
            <li>
              <u>
                <i>3M-class</i>
              </u>{" "}
              classifier, where{" "}
              <u>
                <i>M</i>
              </u>{" "}
              is the number of identities
            </li>
            <li>
              This discriminator is trained to tell:{" "}
              <span className="font-mono">
                [real photos, real caricatures, fake caricatures] + [identities]
              </span>
            </li>
            <li>
              Combine the{" "}
              <u>
                <i>identity-preservation</i>
              </u>{" "}
              and{" "}
              <u>
                <i>identity specific style learning</i>
              </u>
            </li>
          </ul>
        </div>
        {/*Step 3*/}
        <hr className="my-6" />
        <h5 className="text-lg font-medium">(3) Alignment back</h5>
        <div className="mt-4">
          <ol className="list-decimal list-inside font-light">
            Traditional method
            <li>
              Use{" "}
              <u>
                <i>cv2.warpAffine</i>
              </u>{" "}
              to invert the transformation from face alignment phase
            </li>
            <li>
              <u>
                <i>Overlay with alpha channel</i>
              </u>{" "}
              to smooth the edge
            </li>
          </ol>
          <p className="font-light text-sm">
            *Alpha channel matrix represents the weight of foreground and
            background
          </p>
          <div className="p-4">
            <Image
              src="/images/alignment-back.jpg"
              width={838 * 0.7}
              height={577 * 0.7}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
