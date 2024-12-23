import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TfiCrown, TfiCup } from "react-icons/tfi";
import { BsPlayBtn } from "react-icons/bs";

// import TableContainer from "../table";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import Loading from "@/components/loading";
import LessonVideos from "@/components/lessonVideos";
import Link from "next/link";
import { fetchDashboardData } from "@/lib/api";
import { link } from "fs";
import Announcement, {
  AnnouncementCard,
} from "@/components/classComponents/announcement";

export default function Dashboard() {
  const {
    isPending: dasboardDataPending,
    error: dasboardDataError,
    data: dasboardData,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchDashboardData,
  });

  if (dasboardDataPending) return <Loading />;

  if (dasboardDataError)
    return "An error has occurred: " + dasboardDataError?.message;

  return (
    <section>
      <div className="flex items-center justify-between">
        <Link
          href={{
            pathname: `/student/dashboard/dashboardPending`,
          }}
        >
          <p className="text-2xl font-medium">Dashboard</p>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2">
            <FiRefreshCw color="#D32D44" />
            <p className="text-sm font-medium text-[#D32D44]">
              Switch Institution
            </p>
          </div>
          <Link href={"/student/notification"}>
            <IoNotificationsCircleOutline size={40} />
          </Link>
        </div>
      </div>

      <div className="my-4 flex items-center justify-between rounded-md bg-white p-4">
        <div className="flex items-center gap-3">
          <CgProfile size={30} />
          <p className="text-[18px] font-medium text-[#0F0204]">
            {dasboardData.full_name}
          </p>
        </div>
        <p className="text-[18px] font-medium capitalize text-[#0F0204]">
          {dasboardData.sex}
        </p>
        <p className="text-[18px] font-medium uppercase text-[#0F0204]">
          {dasboardData.level}
        </p>
        <p className="text-[18px] font-medium text-[#0F0204]">
          Science department
        </p>
        <div className="flex items-center gap-3 rounded-md bg-[#00A37D26] p-2 px-6">
          <TfiCrown color="#00A37D" />
          <p className="text-sm font-medium text-[#00A37D]">
            No current pending payment
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <SummaryContainer
          sectionTitle="Progress report"
          summaryAction="Take a test"
        >
          <div className="grid grid-cols-4 justify-between gap-4">
            <Card
              titlePoints={dasboardData.best_score}
              subtitle="Best score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={dasboardData.average_score}
              subtitle="Average score"
              subTitleIcon={<BsPlayBtn />}
              subscript="Points"
            />
            <Card
              titlePoints={dasboardData.videos_watched}
              subTitleIcon={<TfiCup />}
              subscript="Videos"
              subtitle="Videos Watched"
            />
            <Card
              titlePoints={dasboardData.tests_taken}
              subtitle="Test Taken"
              subTitleIcon={<TfiCup />}
              subscript="Tests"
            />
          </div>
        </SummaryContainer>

        <SummaryContainer
          sectionTitle="Announcements"
          summaryAction="All Announcements"
          link="/student/notification"
        >
          <div className="mt-4 grid grid-cols-2 gap-2">
            <AnnouncementCard
              {...{
                id: 1,
                title:
                  "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
                description:
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                time: "10 mins ago ",
                date: " 20-08-2022",
              }}
            />
            <AnnouncementCard
              {...{
                id: 1,
                title:
                  "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
                description:
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                time: "10 mins ago ",
                date: " 20-08-2022",
              }}
            />
          </div>
        </SummaryContainer>

        <SummaryContainer
          sectionTitle={"See all videos"}
          summaryAction={"Lesson videos"}
          link="/student/lessonVideos"
        >
          <div className="grid grid-cols-3 justify-between gap-4">
            <LessonVideos title={"title"} episode={"episode"} />
            <LessonVideos title={"title"} episode={"episode"} />
            <LessonVideos title={"title"} episode={"episode"} />
          </div>
        </SummaryContainer>
      </div>
      {/* <TableContainer /> */}
    </section>
  );
}
