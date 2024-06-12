import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-[#D32D4426] mt-6 rounded-full h-[25px]"
      style={{
        // Fix overflow clipping in Safari
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      {/* Position the <p> tag absolutely to overlay on top of the progress indicator */}
      <div className="absolute inset-x-0 flex items-center justify-center h-full">
        <p className="text-sm z-10">10 / 50</p>
      </div>

      <Progress.Indicator
        className="bg-[#D32D44] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] z-0"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
