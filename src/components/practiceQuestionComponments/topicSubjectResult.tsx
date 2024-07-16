import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import TopicContainer from "../topicContainer";

interface TopicSubjectResultProps {
  subject: string | string[] | undefined;
  subjectData: Array<{
    id: React.Key | null | undefined | string;
    name: string;
    course_id: string;
  }>;
  subjectString: string;
  asPath: string;
}
export default function TopicSubjectResult({
  subject,
  subjectData,
  subjectString,
  asPath,
}: TopicSubjectResultProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">{subject}</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for topics"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex gap-2">
          <div className="flex gap-2 rounded-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Tab view</p>
            <RiArrowDropDownLine />
          </div>

          <p className="rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
            View analysis
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-md bg-white p-3">
        {subjectData.map(
          (item: {
            id: React.Key | null | undefined | string;
            name: string;
            course_id: string;
          }) => (
            <TopicContainer
              key={item.id}
              topic={item.name}
              topicId={item.id as string}
              subject={subjectString}
              path={asPath}
              subjectId={item.course_id}
              test="Take Test"
            />
          ),
        )}
      </div>
    </div>
  );
}
