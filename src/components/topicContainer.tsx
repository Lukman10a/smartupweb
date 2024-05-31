import React from "react";

interface TopicContainerProps {
  topic: String; // Add other properties as needed
}

export default function TopicContainer({ topic }: TopicContainerProps) {
  console.log(topic);
  return (
    <div className="flex justify-between p-2 my-2 items-center bg-[#F8F9FB] rounded-md">
      <p className="text-[#74595D]">{topic}</p>
      <div className="bg-[#D32D44] rounded-md text-white p-2">Take Test</div>
    </div>
  );
}
