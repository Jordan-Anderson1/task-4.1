import React from "react";

const HeadingImage = () => {
  return (
    <>
      <div className="relative w-full h-[400px]">
        <img
          src="/headerImage.png"
          alt="code on a screen"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-gray-500 px-2">
          <p>
            Image by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://pixabay.com/users/boskampi-3788146/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854"
            >
              Boskampi
            </a>{" "}
            from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854"
            >
              Pixabay
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeadingImage;

//headerImage Image by <a href="https://pixabay.com/users/boskampi-3788146/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854">Boskampi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1873854">Pixabay</a>