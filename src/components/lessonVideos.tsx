import React from "react";
import Image from "next/image";
import play from "../../public/assets/play.svg";

interface LessonVideosProps {
  title: string | string[] | undefined;
  episode: string | string[] | undefined;
}

const LessonVideos: React.FC<LessonVideosProps> = ({ title, episode }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-md border-2 p-4 py-8">
        <Image src={play} alt="Play button" />
        <div className="flex w-full items-center justify-between">
          <p>{title}</p>
          <p>{episode}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonVideos;
