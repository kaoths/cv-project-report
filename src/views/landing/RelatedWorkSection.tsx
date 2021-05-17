import styles from "../../../styles/landing.module.scss";
import Image from "next/image";

export const RelatedWorkSection = () => {
  return (
    <div className="mb-8">
      <div className={styles.glassContainer}>
        <h3 className="text-2xl font-semibold">Related Works</h3>
        <hr className="mt-2 my-4" />
        <div className="px-4">
          <h5 className="text-lg font-medium">Texture Transfer</h5>
          <ul className="list-disc list-inside">
            <li>Image style transfer using CNN</li>
            <li>GANs — Cycle-GAN, StarGAN, etc</li>
            <li>
              perform poorly on caricature generation because of large spatial
              variation
            </li>
          </ul>
        </div>
        <div className="flex mt-8">
          <div className="flex-1 px-4">
            <h5 className="text-lg font-medium">
              CariGan{" "}
              <sup>
                [
                <a
                  target="_blank"
                  href="https://arxiv.org/abs/1811.00445"
                  className="text-blue-400 hover:underline"
                >
                  ref
                </a>
                ]
              </sup>
            </h5>
            <ul className="list-disc list-inside">
              <li>Weakly paired training data</li>
              <li>Image fusion</li>
              <li className="text-red-600">Requires landmark detection</li>
              <li className="text-red-600">Train warping module separately</li>
            </ul>
            <div className="mt-2">
              <Image
                src="/images/cari-gan.jpg"
                alt="blending method"
                width={487}
                height={487}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="flex-1 px-4">
            <div>
              <h5 className="text-lg font-medium">
                WarpGAN{" "}
                <sup>
                  [
                  <a
                    target="_blank"
                    href="https://arxiv.org/abs/1811.10100"
                    className="text-blue-400 hover:underline"
                  >
                    ref
                  </a>
                  ]
                </sup>
              </h5>
              <li>End-to-end</li>
              <li>Unpaired training data</li>
              <li>Better visual quality</li>
              &nbsp;
            </div>
            <div className="mt-2">
              <Image
                src="/images/warp-gan.jpg"
                alt="blending method"
                width={487}
                height={487}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
