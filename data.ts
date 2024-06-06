interface LeftDataItem {
  title: string;
  logo: string;
  slug: string;
}

export const LEFT_DATA: LeftDataItem[] = [
  { title: "Dashboard", logo: "/assets/dashboard.svg", slug: "/" },
  { title: "Profile", logo: "/assets/profile.svg", slug: "/profile" },
  { title: "Classes", logo: "/assets/class.svg", slug: "/classes" },
  { title: "Mock", logo: "/assets/mock.svg", slug: "/mock" },
  { title: "Lesson videos", logo: "/assets/video.svg", slug: "/classes" },
  { title: "SmartUp syllabus", logo: "/assets/smartup.svg", slug: "/classes" },
  {
    title: "Practice questions",
    logo: "/assets/practice.svg",
    slug: "/practiceQuestion",
  },
  {
    title: "Exam practice questions",
    logo: "/assets/exam.svg",
    slug: "/classes",
  },
];

interface PracticeDataItem {
  title: string;
  id: number;
  question: { topic: string }[];
}

export const PRACTICE_DATA: PracticeDataItem[] = [
  {
    title: "Mathematics",
    id: 1,
    question: [
      { topic: "General mathematics" },
      { topic: "Algebra" },
      { topic: "Quadratic equations" },
      { topic: "Circle geometry" },
      { topic: "Points, lines and planes" },
      { topic: "Numeric methods" },
      { topic: "Calculus" },
      { topic: "Linear programming" },
    ],
  },
  {
    title: "English",
    id: 2,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
  {
    title: "Physics",
    id: 3,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
  {
    title: "Chemistry",
    id: 4,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
];

interface AnswerDataItem {
  title: string;
  id: number;
}
export const ANSWER: AnswerDataItem[] = [
  { title: "Points, lines and planes", id: 1 },
  { title: "Points, lines and planes", id: 2 },
  { title: "Points, lines and planes", id: 3 },
  { title: "Points, lines and planes", id: 4 },
];











[
  {
      "id": "8fd5b14b-7c43-4d34-b4c6-c5d7dfdd7063",
      "created_at": "2022-09-27T03:08:29.351Z",
      "updated_at": "2022-09-27T03:08:29.351Z",
      "errors": {},
      "slug": "mathematics-primary-2",
      "questions_count": 0,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Mathematics - Primary 2",
      "category": "general",
      "rank": "primary",
      "course_image_url": null,
      "description": "Primary 2 maths contents",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "d94289c4-1766-4b55-a586-a2e1004c58b5",
              "name": "Addition with Carrying",
              "course_id": "8fd5b14b-7c43-4d34-b4c6-c5d7dfdd7063",
              "rank": null,
              "active": false,
              "description": "Adding numbers with remainder or with carrying.",
              "created_at": "2022-09-27T03:29:33.333Z",
              "updated_at": "2022-09-27T03:29:33.333Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7ab659c4-e88c-46e5-8dcf-4e19772db8de",
              "name": "Addition without Carrying",
              "course_id": "8fd5b14b-7c43-4d34-b4c6-c5d7dfdd7063",
              "rank": null,
              "active": false,
              "description": "Addition without Carrying",
              "created_at": "2022-09-27T03:09:04.519Z",
              "updated_at": "2022-09-27T03:09:04.519Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": []
  },
  {
      "id": "6132db33-de19-4c49-9517-148f295bed5f",
      "created_at": "2022-09-27T03:06:37.525Z",
      "updated_at": "2022-09-27T03:06:37.525Z",
      "errors": {},
      "slug": "mathematics-primary-4",
      "questions_count": 2,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Mathematics - Primary 4",
      "category": "general",
      "rank": "primary",
      "course_image_url": null,
      "description": "Primary 4 mathematics",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "41acc7fb-f535-4281-9a99-2bf909d73759",
              "name": "Profit and Loss",
              "course_id": "6132db33-de19-4c49-9517-148f295bed5f",
              "rank": null,
              "active": false,
              "description": "This section will cover profit and loss",
              "created_at": "2022-09-27T03:07:02.940Z",
              "updated_at": "2022-09-27T03:07:02.940Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": []
  },
  {
      "id": "74db1ee4-efa4-4582-8e46-728537b2f042",
      "created_at": "2021-02-27T16:37:44.559Z",
      "updated_at": "2021-03-13T14:53:18.798Z",
      "errors": {},
      "slug": "commerce-ea600ce3-66df-4d66-aa75-bf69b88d5739",
      "questions_count": 195,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Commerce",
      "category": "general",
      "rank": "senior",
      "course_image_url": "https://smartuptech-prod.s3.amazonaws.com/uploads/course/course_image/74db1ee4-efa4-4582-8e46-728537b2f042/file.png",
      "description": "Commerce is the activity of buying and selling, especially on a large scale.",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "f7df8ed7-0acb-44c8-bd2f-ec0431ed7c2a",
          "email": "info_ed@smartuptech.com",
          "authentication_token": "dyyWiz6_jnxVMQsUksrL",
          "string": null,
          "status": "educator",
          "admin": true,
          "created_at": "2020-05-03T17:09:16.206Z",
          "updated_at": "2022-09-26T05:06:47.836Z",
          "first_name": "info_ed",
          "surname": "info_ed",
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": {
              "id": "6a9297b0-13a8-41e0-9b54-be55f4c151b4",
              "name": "Zamfara",
              "state_code": "ZA",
              "created_at": "2020-01-14T19:25:17.096Z",
              "updated_at": "2020-01-14T19:25:17.096Z"
          },
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info_ed",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": "6a9297b0-13a8-41e0-9b54-be55f4c151b4",
          "lga_id": "7dd5c535-4ad1-42a2-bb4b-f59f50b9f1ae",
          "sid": "ZA/BKRA-0392932934",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "699b4ac3-4ee3-4138-b0ff-8d78be1ee361",
              "name": "Cash Book",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": false,
              "description": "Cash Book",
              "created_at": "2021-03-15T05:42:21.637Z",
              "updated_at": "2021-03-15T05:42:21.637Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae8dcb97-875e-42d7-9750-10a3457caf40",
              "name": "Branch Account ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": false,
              "description": "Branch Account ",
              "created_at": "2021-03-15T04:09:49.884Z",
              "updated_at": "2021-03-15T04:09:49.884Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0b0c3139-092c-4873-b4b1-774881bc2997",
              "name": "Company's Account ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": false,
              "description": "Company's Account ",
              "created_at": "2021-03-12T06:46:55.840Z",
              "updated_at": "2021-03-12T06:46:55.840Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "469a7db0-92a9-49dc-908a-38fc732188a1",
              "name": "Accounting Concepts And Conventions ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": false,
              "description": "Accounting Concepts And Conventions ",
              "created_at": "2021-03-12T06:26:11.701Z",
              "updated_at": "2021-03-13T14:53:20.566Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b4b993e4-f691-49af-8383-822bdabd9566",
              "name": "Double Entry Principles ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Double Entry Principles ",
              "created_at": "2021-03-01T14:00:23.679Z",
              "updated_at": "2021-03-13T14:53:20.607Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ba30722b-17aa-48f7-8568-e527f21bc612",
              "name": "Depreciation",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Depreciation",
              "created_at": "2021-03-01T13:56:09.752Z",
              "updated_at": "2021-03-13T14:53:20.653Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d5d0ad4a-5420-4e34-a048-ba01a5795b37",
              "name": "Banking Reconciliation Statement",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Banking Reconciliation Statement",
              "created_at": "2021-03-01T13:47:12.198Z",
              "updated_at": "2021-03-13T14:53:20.684Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8fccda27-bb98-4395-9dc6-9c90735b1d40",
              "name": "Cost Accounting ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Cost Accounting ",
              "created_at": "2021-03-01T13:43:10.341Z",
              "updated_at": "2021-03-13T14:53:20.718Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8cb8ba3a-71b9-43c1-a14f-fe177244e8d5",
              "name": "Auditing ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Auditing and Audit ",
              "created_at": "2021-03-01T13:30:29.362Z",
              "updated_at": "2021-03-13T14:53:20.772Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0a0d2a90-9fc0-44df-af81-db49a854e7e6",
              "name": "Cost Behavior ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Cost Behavior",
              "created_at": "2021-03-01T13:20:55.472Z",
              "updated_at": "2021-03-13T14:53:20.790Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3fac1447-cc49-4f03-98b9-f79dcbe9e3a1",
              "name": "Departmental Account ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Departmental Account",
              "created_at": "2021-03-01T13:11:35.129Z",
              "updated_at": "2021-03-13T14:53:20.815Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7e697081-56c2-4bca-83e0-474d44dd8d7a",
              "name": "Trial Balance ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Trial Balance ",
              "created_at": "2021-03-01T12:43:03.644Z",
              "updated_at": "2021-03-13T14:53:20.834Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "45750cc9-de5d-4e74-b149-e05d0d40104d",
              "name": "Final Account Vol2",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Final Account Vol2",
              "created_at": "2021-03-01T12:41:12.657Z",
              "updated_at": "2021-03-13T14:53:20.854Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8c6fac75-a96f-42bf-ac7c-39fbdbea53be",
              "name": "Final Account Vol1",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Final Account Vol1",
              "created_at": "2021-03-01T12:24:48.101Z",
              "updated_at": "2021-03-13T14:53:20.935Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8c9cd8a9-affc-4292-8900-1724354755b4",
              "name": "Dividend And Bonus ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Dividend And Bonus ",
              "created_at": "2021-03-01T11:47:46.595Z",
              "updated_at": "2021-03-01T12:16:54.634Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae709fa3-1219-47c2-87b3-3d5c29b4ca97",
              "name": "Formation Of Organization ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Formation Of Organization ",
              "created_at": "2021-03-01T11:26:10.606Z",
              "updated_at": "2021-03-01T12:16:54.751Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "36d8a72c-d873-4f84-8a59-9a7945369c9f",
              "name": "Partnership Account ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Partnership Account ",
              "created_at": "2021-03-01T11:18:34.321Z",
              "updated_at": "2021-03-01T12:16:54.790Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "92562d06-b8bb-42a1-90a3-6a0e74aa43e5",
              "name": "Fixed Asset",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Fixed Asset ",
              "created_at": "2021-02-27T17:34:26.487Z",
              "updated_at": "2021-03-01T12:16:54.819Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4c480dbf-d494-44e5-9dde-a136de89d677",
              "name": "Budget ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "Budgeting System ",
              "created_at": "2021-02-27T17:28:21.909Z",
              "updated_at": "2021-03-01T12:16:54.903Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d54c1e1b-a437-414d-a0a2-e1ef2d4446f8",
              "name": "Journal ",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "rank": null,
              "active": true,
              "description": "journals journals ",
              "created_at": "2021-02-27T17:03:59.232Z",
              "updated_at": "2021-03-01T12:16:54.957Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "dbec764d-5cc3-49dc-980b-94d9054a7dbe",
              "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
              "title": "2019",
              "created_at": "2021-02-27T17:24:22.699Z",
              "updated_at": "2021-03-13T14:53:47.959Z",
              "questions_count": 344
          }
      ]
  },
  {
      "id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
      "created_at": "2020-05-09T14:47:25.458Z",
      "updated_at": "2020-06-27T21:34:08.530Z",
      "errors": {},
      "slug": "english",
      "questions_count": 1182,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "English",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "English course content",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "eec1a426-6da1-43fd-b29a-5688348f4bea",
              "name": "Adjectival Order",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Adjectival Order",
              "created_at": "2020-06-20T23:39:29.367Z",
              "updated_at": "2020-06-24T14:18:40.803Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bc572622-2930-4f44-890c-20f0da77a309",
              "name": "Plurals",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "plurals",
              "created_at": "2020-06-20T23:37:33.042Z",
              "updated_at": "2020-06-24T14:18:40.815Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1d3fb168-9a0e-4d2f-b27c-daf485aeb386",
              "name": "Tenses",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Tenses",
              "created_at": "2020-06-20T23:37:20.257Z",
              "updated_at": "2020-06-24T14:18:40.827Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2bdb071f-6206-443f-aa08-81c7fa9e90a5",
              "name": "Collacation",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Collacation",
              "created_at": "2020-06-20T23:36:53.296Z",
              "updated_at": "2020-06-24T14:18:40.842Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 53,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "53db0bf2-2916-4196-8432-b72cabeb5b02",
              "name": "Gerund",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": false,
              "description": "Gerund",
              "created_at": "2020-06-20T23:31:28.796Z",
              "updated_at": "2020-06-24T14:18:40.855Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0b5d4ede-92c8-42ae-9030-c4633627d639",
              "name": " Antonyms",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "\nantonyms",
              "created_at": "2020-06-20T23:31:14.732Z",
              "updated_at": "2020-06-24T14:18:40.867Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9bcf2b3b-3c20-4c48-8911-d1c69c235c5a",
              "name": "Synonyms",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Synonyms",
              "created_at": "2020-06-20T23:30:41.703Z",
              "updated_at": "2020-06-24T14:18:40.877Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b8004a7d-2ce3-43f3-887a-146526e90540",
              "name": "Prefix",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "prefix",
              "created_at": "2020-06-20T23:30:08.655Z",
              "updated_at": "2020-06-24T14:18:40.887Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 25,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1eb4d8b1-56e3-4e41-86aa-e972a980500f",
              "name": "Question Tag",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Question Tag",
              "created_at": "2020-06-20T23:28:25.051Z",
              "updated_at": "2020-06-24T14:18:40.898Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f6bb3dd0-5662-4fd8-89cb-7812c6b39a18",
              "name": "Communication Error",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Communication Error",
              "created_at": "2020-06-20T23:26:51.244Z",
              "updated_at": "2020-06-24T14:18:40.912Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a5753b70-0eec-46b9-97ef-ae924d24aa18",
              "name": "Foreign words",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Foreign words",
              "created_at": "2020-06-20T23:26:31.218Z",
              "updated_at": "2020-06-24T14:18:40.922Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1c5826f4-b56b-4329-a7e6-15693d325f82",
              "name": "Concord",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": false,
              "description": "Concord",
              "created_at": "2020-06-20T01:50:39.800Z",
              "updated_at": "2020-06-24T14:18:40.934Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 37,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "71326082-2cc8-489d-aaf2-12af5dc470d6",
              "name": "Pronouns",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Pronouns",
              "created_at": "2020-06-20T01:50:22.113Z",
              "updated_at": "2020-06-24T14:18:40.948Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "92ff8590-95b2-44f8-bab3-b18a87a7d258",
              "name": "Preposition",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Preposition",
              "created_at": "2020-06-20T01:49:44.465Z",
              "updated_at": "2020-06-24T14:18:40.962Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "254442e6-2e5c-4a4f-8b10-772e70f31985",
              "name": "Stress",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "stress",
              "created_at": "2020-06-20T01:49:16.174Z",
              "updated_at": "2020-06-24T14:18:40.974Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 35,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b194612f-cdab-4463-8944-d00fb62f5909",
              "name": "Homophones",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Homophones",
              "created_at": "2020-06-20T01:36:01.901Z",
              "updated_at": "2020-06-24T14:18:40.984Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6078415f-c337-4eca-b6f9-2f6930e4eb25",
              "name": "Correlatives",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Correlatives",
              "created_at": "2020-06-20T01:33:56.379Z",
              "updated_at": "2020-06-24T14:18:40.996Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f6cc7aaf-21f0-4f6d-b6cf-19eaa90331d1",
              "name": "Register",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Register",
              "created_at": "2020-06-20T01:14:11.379Z",
              "updated_at": "2020-06-24T14:18:41.011Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cdb065ae-e28b-4822-86f4-6f7ede14cb9f",
              "name": "Spelling",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": false,
              "description": "Spelling",
              "created_at": "2020-06-20T01:13:48.171Z",
              "updated_at": "2020-06-24T14:18:41.023Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 42,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2b382c0d-1576-4d31-8e54-639792340a9a",
              "name": "Grammatical Name",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Grammatical Name",
              "created_at": "2020-06-20T01:08:20.591Z",
              "updated_at": "2020-06-24T14:18:41.036Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d62808a9-4e3d-4fa2-9ca1-cc3d0fb30a3b",
              "name": "Grammatical Function",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Grammatical Function",
              "created_at": "2020-06-20T01:08:01.836Z",
              "updated_at": "2020-06-24T14:18:41.046Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cdad6f19-773c-493f-9def-71e66ea498f2",
              "name": "Grammar 2",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Grammar 2",
              "created_at": "2020-06-20T01:07:46.555Z",
              "updated_at": "2020-06-24T14:18:41.057Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fbfd8d95-9009-4ec6-8713-108ab86b433c",
              "name": "Grammar",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Grammar",
              "created_at": "2020-06-20T01:07:32.611Z",
              "updated_at": "2020-06-24T14:18:41.069Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "88b15e9d-d0e0-4b02-b5d2-623d702e0891",
              "name": "Emphatic Stress",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Emphatic Stress",
              "created_at": "2020-06-20T01:05:42.403Z",
              "updated_at": "2020-06-24T14:18:41.081Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "10ff7bca-dcf3-4ce0-a46a-6ae341955f25",
              "name": "Figure of Speech",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Figure of Speech",
              "created_at": "2020-06-20T01:05:23.213Z",
              "updated_at": "2020-06-24T14:18:41.092Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "35fcfeab-ae30-404c-bf0e-6106567131fc",
              "name": "Lexis and Structure 3",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Lexis and Structure 3",
              "created_at": "2020-06-20T01:00:09.235Z",
              "updated_at": "2020-06-24T14:18:41.103Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "46ffd3ca-a4cb-4139-a092-d16e718feb01",
              "name": "Lexis and Structure 2",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Lexis and Structure 2",
              "created_at": "2020-06-20T00:59:55.192Z",
              "updated_at": "2020-06-24T14:18:41.115Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 1,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8cf31691-ae61-42bd-b09a-7782b7001e7f",
              "name": "Lexis and Structure",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Lexis and Structure",
              "created_at": "2020-06-20T00:57:32.256Z",
              "updated_at": "2020-06-24T14:18:41.129Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e7b062b2-a0cc-46e2-8dff-3b1850c7603b",
              "name": "Idioms and meanings 2",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Idioms and meanings 2",
              "created_at": "2020-06-20T00:57:19.211Z",
              "updated_at": "2020-06-24T14:18:41.144Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "769c2e61-e6dd-4286-bc1d-efdc982ebbd1",
              "name": "Idioms and meanings",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Idioms and meanings",
              "created_at": "2020-06-20T00:57:06.864Z",
              "updated_at": "2020-06-24T14:18:41.155Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ac0c03b5-e653-4d8e-9098-10f0a3f3bb8d",
              "name": "Sentence Structure",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Sentence Structure",
              "created_at": "2020-06-20T00:45:19.617Z",
              "updated_at": "2020-06-24T14:18:41.171Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8c3d40a5-18c5-4328-8a12-90bbf8fba087",
              "name": "Sentence Interpretation",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": false,
              "description": "Sentence Interpretation",
              "created_at": "2020-06-20T00:44:58.655Z",
              "updated_at": "2020-06-24T14:18:41.184Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5e7e8132-9126-4010-a6d7-b59d1b7c7c31",
              "name": "Sentence Function",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Sentence Function",
              "created_at": "2020-06-20T00:44:20.333Z",
              "updated_at": "2020-06-24T14:18:41.197Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 25,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e95a69cd-a482-4e9b-88b8-888193289f11",
              "name": "Oral 2",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "oral 2",
              "created_at": "2020-06-20T00:41:58.390Z",
              "updated_at": "2020-06-24T14:18:41.213Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0ff96dd9-4b95-48c1-9e16-31806f674ef1",
              "name": "Oral ",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Oral ",
              "created_at": "2020-06-20T00:41:44.877Z",
              "updated_at": "2020-06-24T14:18:41.225Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f1528f3d-6431-46be-95be-d7db9a704c3e",
              "name": "Word Class",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Word Class",
              "created_at": "2020-06-20T00:36:13.481Z",
              "updated_at": "2020-06-24T14:18:41.235Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9cfc20ae-b876-4c57-a359-20dc319ecdcd",
              "name": "Test1",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "tests1",
              "created_at": "2020-06-16T14:42:45.919Z",
              "updated_at": "2020-06-24T14:18:41.338Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "14e85912-35c9-4737-bb27-bc2a0dd1b45f",
              "name": "Summary",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Summary",
              "created_at": "2020-05-09T15:10:28.405Z",
              "updated_at": "2020-05-21T16:04:30.768Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "92fb6c17-c4ae-4814-ae05-1a1d07b2d133",
              "name": "Writing",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Writing",
              "created_at": "2020-05-09T14:57:29.759Z",
              "updated_at": "2020-05-21T16:04:30.779Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "601d20af-97b0-4eed-a562-caef0287d9cf",
              "name": "Comprehension",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Comprehension",
              "created_at": "2020-05-09T14:55:52.738Z",
              "updated_at": "2020-05-21T16:04:30.790Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8af8ef69-54a0-4873-846f-3bb017baf342",
              "name": "Structures",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Structures",
              "created_at": "2020-05-09T14:54:45.059Z",
              "updated_at": "2020-05-21T16:04:30.803Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ed6749f2-0d3f-4588-9e9b-3e1aae41d589",
              "name": "Vocabulary Development",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "Vocabulary",
              "created_at": "2020-05-09T14:51:45.105Z",
              "updated_at": "2020-06-24T14:18:42.666Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0844c907-9971-43d3-8179-a2d45fcf0fa5",
              "name": "Speech",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "rank": null,
              "active": true,
              "description": "speech ",
              "created_at": "2020-05-09T14:49:11.932Z",
              "updated_at": "2020-05-21T16:04:30.836Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "e8c5f351-18a3-4dd4-be7c-3a4d703a368e",
              "course_id": "a5bd08ca-ce34-4ec2-a788-4bece39b9959",
              "title": "2019",
              "created_at": "2020-06-20T01:49:27.826Z",
              "updated_at": "2020-06-24T14:18:49.017Z",
              "questions_count": 318
          }
      ]
  },
  {
      "id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
      "created_at": "2020-04-27T14:35:32.151Z",
      "updated_at": "2020-05-27T14:15:47.393Z",
      "errors": {},
      "slug": "computer-science-8d8c250b-b229-478c-ace6-b93ec5bbf79c",
      "questions_count": 525,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Computer Science ",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Computer Science ",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "7caba56e-fc9a-4b56-a010-eb08be0b03b9",
              "name": "computer network vol 3",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "computer network vol 3",
              "created_at": "2020-05-19T16:22:52.770Z",
              "updated_at": "2020-05-21T16:04:29.158Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9e3683ef-afe0-4670-9eff-27066273c964",
              "name": "Computer Network Vol2",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Network Vol2",
              "created_at": "2020-05-19T13:52:35.702Z",
              "updated_at": "2020-05-21T16:04:29.172Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "37ab3d7c-5e6b-4e68-9ca6-bb2445ad5af0",
              "name": "Computer Software ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Software ",
              "created_at": "2020-05-05T18:44:57.026Z",
              "updated_at": "2020-05-21T16:04:30.846Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bd910c86-f821-4ace-9668-203762f8967c",
              "name": "Evolution of Computers ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Evolution of Computers ",
              "created_at": "2020-05-03T22:47:28.210Z",
              "updated_at": "2020-05-21T16:04:30.856Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a4585d91-6183-472c-bb4a-bb865a259e12",
              "name": "Computer Security ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Security ",
              "created_at": "2020-05-03T22:41:35.898Z",
              "updated_at": "2020-05-21T16:04:30.865Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7b8f8763-2a41-41ee-b826-462602edbaad",
              "name": "Computer Network vol 1",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Network vol 1",
              "created_at": "2020-05-02T15:00:45.668Z",
              "updated_at": "2020-05-21T16:04:30.876Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3170812a-c058-4f64-ad90-9db6d403db33",
              "name": "Computer Memory",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Memory",
              "created_at": "2020-05-02T10:51:55.868Z",
              "updated_at": "2020-05-21T16:04:30.907Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8219f8db-c1ef-4ca9-90fb-da1748f64b0d",
              "name": "Computer Hardware vol 2",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Hardware vol 2",
              "created_at": "2020-05-01T20:46:53.434Z",
              "updated_at": "2020-05-21T16:04:30.919Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "009ca598-7f06-409b-9406-a04a83c36497",
              "name": "Computer Hardware vol 1",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Hardware vol 1",
              "created_at": "2020-05-01T10:34:26.317Z",
              "updated_at": "2020-05-21T16:04:30.930Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6aa8efd1-9933-41eb-bb26-0bc475d61201",
              "name": "Basic Computing Vol 2",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Basic Computing Vol 2",
              "created_at": "2020-05-01T02:15:47.395Z",
              "updated_at": "2020-05-21T16:04:30.940Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "784638eb-d8fa-44fb-8c94-e4dcb9832b87",
              "name": "Basic Computing vol 1",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Basic Computing vol 1",
              "created_at": "2020-04-30T15:05:49.925Z",
              "updated_at": "2020-05-21T16:04:30.950Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3fa992b7-ff29-4b1e-8500-49a9fee8e729",
              "name": "Spreadsheet Packages ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Spreadsheet Packages ",
              "created_at": "2020-04-29T12:55:56.924Z",
              "updated_at": "2020-05-21T16:04:31.123Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b7e3786d-b2a0-4878-94be-d06b636fadbc",
              "name": "Computer Ethics",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Ethics",
              "created_at": "2020-04-28T12:39:39.438Z",
              "updated_at": "2020-05-21T16:04:31.137Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e24bdb95-2859-4e11-984a-62b839d1580b",
              "name": "Data Management ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Data Management ",
              "created_at": "2020-04-28T12:23:22.277Z",
              "updated_at": "2020-05-21T16:04:31.148Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1ba18e71-930b-4d7a-bf89-ceab99ee9cba",
              "name": "Computer Architecture ",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "rank": null,
              "active": true,
              "description": "Computer Architecture ",
              "created_at": "2020-04-27T15:10:20.309Z",
              "updated_at": "2020-05-21T16:04:31.159Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "64e2f530-b745-49e7-8e2b-932549eba7e8",
              "course_id": "17f61dc3-7c7e-47d5-becb-760286ff9519",
              "title": "2019",
              "created_at": "2020-04-27T14:36:48.060Z",
              "updated_at": "2020-05-21T16:03:53.186Z",
              "questions_count": 0
          }
      ]
  },
  {
      "id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
      "created_at": "2020-04-21T02:53:45.584Z",
      "updated_at": "2020-06-27T21:34:08.556Z",
      "errors": {},
      "slug": "basic-science",
      "questions_count": 1593,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Basic Science",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Basic science",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "baf086d4-47cd-43fd-a52f-647eafc2bdbf",
              "name": "Nutrition",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "nutrition",
              "created_at": "2020-06-18T16:36:53.202Z",
              "updated_at": "2020-06-24T14:18:41.271Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "465d2eab-74e5-4ad9-abcb-e1110866a678",
              "name": "Reproduction",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "reproduction",
              "created_at": "2020-06-18T16:31:34.008Z",
              "updated_at": "2020-06-18T16:31:34.008Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "50fd4781-2071-47a5-9dd2-dee5d71d3c4a",
              "name": "Chemicals vol 3",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Chemicals vol 3",
              "created_at": "2020-06-18T16:20:05.113Z",
              "updated_at": "2020-06-24T14:18:41.293Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c97657b6-8eda-4438-a86d-94bb897a0560",
              "name": "Environmental Pollution 2",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Environmental Pollution 2",
              "created_at": "2020-06-18T14:15:58.671Z",
              "updated_at": "2020-06-24T14:18:41.305Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 43,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0580e042-9765-4bd9-96f6-089b0fe8ae49",
              "name": "Environmental Pollution",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Environmental Pollution",
              "created_at": "2020-06-18T14:15:40.480Z",
              "updated_at": "2020-06-24T14:18:41.316Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2221f11f-3471-4426-b4a5-2c5a53f66a57",
              "name": "Elements",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "elements",
              "created_at": "2020-06-15T12:13:57.911Z",
              "updated_at": "2020-06-16T12:28:29.914Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a86be05f-272f-4f1f-95b7-02de94f83aab",
              "name": "Diseases",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Diseases",
              "created_at": "2020-06-11T12:25:04.103Z",
              "updated_at": "2020-06-16T12:28:29.924Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "92cbf9de-201c-4563-a0b7-309192fabf19",
              "name": "Chemicals vol 2",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Chemicals vol 2",
              "created_at": "2020-06-03T09:21:45.167Z",
              "updated_at": "2020-06-24T14:18:41.398Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 52,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7c18b480-fb34-4368-a3fc-45f46ab1a71b",
              "name": "Separation Techniques ",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Separation Techniques",
              "created_at": "2020-05-19T08:24:14.193Z",
              "updated_at": "2020-05-21T16:04:29.198Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d33351c-bba3-422b-8d62-f6a261277bcf",
              "name": "Food Chain",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Food Chain",
              "created_at": "2020-05-18T19:00:08.206Z",
              "updated_at": "2020-05-21T16:04:29.210Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ffde8c85-a502-489c-a773-d2c976c0db38",
              "name": "Drugs",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Drugs",
              "created_at": "2020-05-16T04:26:34.317Z",
              "updated_at": "2020-05-21T16:04:29.236Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "439b6f4e-0f4f-4949-a7e5-572cd5cd60f8",
              "name": "Skeletal System",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Skeletal System",
              "created_at": "2020-05-16T03:49:15.965Z",
              "updated_at": "2020-05-21T16:04:29.260Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "71f6801d-205f-4782-be79-801435da05ff",
              "name": "Digestive and Excretary System",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Digestive and Excretory System",
              "created_at": "2020-05-16T03:43:26.274Z",
              "updated_at": "2020-05-21T16:04:29.287Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 45,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "feeb33ac-0b7d-4906-aad7-f147fb191439",
              "name": "Acid, Base and Salt",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Acid, Base and Salt",
              "created_at": "2020-05-15T11:58:17.575Z",
              "updated_at": "2020-05-21T16:04:29.304Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6b5b4368-45fc-474f-8a23-6ed605b7ed5a",
              "name": "Ethical issues in science and development",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Ethical issues in science and development",
              "created_at": "2020-04-21T03:14:19.878Z",
              "updated_at": "2020-06-16T12:28:31.563Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "18a8f207-c59c-4f63-a107-65ce696e78c1",
              "name": "Skill acquisition",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "skills acquisition",
              "created_at": "2020-04-21T03:13:53.967Z",
              "updated_at": "2020-05-21T16:04:31.558Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a89ccb69-b336-465a-80b9-5db1fbe07d0f",
              "name": "Radioactivity",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "radioactivity",
              "created_at": "2020-04-21T03:13:35.674Z",
              "updated_at": "2020-05-21T16:04:31.571Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1a4bb217-9ffe-48b8-8a6d-bc0d8a5b6b5d",
              "name": "Electrical energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "electrical energy",
              "created_at": "2020-04-21T03:13:17.290Z",
              "updated_at": "2020-05-21T16:04:31.582Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9c5b3b8d-ce9c-4c5e-8ad6-0574a914c6ae",
              "name": "Magnetism",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "magnetism",
              "created_at": "2020-04-21T03:12:58.453Z",
              "updated_at": "2020-06-24T14:18:43.311Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "25ef4f8e-a99c-4f26-b972-03537e560b02",
              "name": "Sound energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "sound energy",
              "created_at": "2020-04-21T03:12:45.479Z",
              "updated_at": "2020-05-21T16:04:31.606Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a5309ed0-212b-4a02-9a2e-2cb580d6c2b4",
              "name": "Light energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Light energy",
              "created_at": "2020-04-21T03:12:22.499Z",
              "updated_at": "2020-05-21T16:04:31.617Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f94666b6-9b94-4067-be4b-fd37d11b5099",
              "name": "Resources from non-living things",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Resources from non-living things",
              "created_at": "2020-04-21T03:12:03.693Z",
              "updated_at": "2020-06-24T14:18:43.358Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "82c3a56a-3641-4965-924a-44988ac0c311",
              "name": "Resources from living things",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Resources from living things",
              "created_at": "2020-04-21T03:11:45.001Z",
              "updated_at": "2020-06-24T14:18:43.371Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "402141e3-962d-467a-8f0e-ba722c21b39a",
              "name": "Drug and susbstance abuse",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Drug and substance abuse",
              "created_at": "2020-04-21T03:11:25.389Z",
              "updated_at": "2020-06-16T12:28:31.669Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "29f78625-16b0-410c-9b97-7752bf49b04c",
              "name": "Environmental Hazards III (Desertification)",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Environmental Hazards III (Desertification)",
              "created_at": "2020-04-21T03:10:58.725Z",
              "updated_at": "2020-05-21T16:04:31.663Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2a640016-d93b-4ca1-b255-af4a7530de06",
              "name": "Environmental Hazards II (Bush burning)",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Environmental Hazards II (Bush burning)",
              "created_at": "2020-04-21T03:10:29.146Z",
              "updated_at": "2020-05-21T16:04:31.673Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "29ace51e-dfe7-4e1a-99f4-1f6b62b4bea3",
              "name": "Environmental hazards I (soil erosion)",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Environmental hazards I (soil erosion)",
              "created_at": "2020-04-21T03:10:03.206Z",
              "updated_at": "2020-05-21T16:04:31.684Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "34bc2321-a222-48b3-99d7-872dede94078",
              "name": "Family traits",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Family traits",
              "created_at": "2020-04-21T03:09:23.201Z",
              "updated_at": "2020-05-21T16:04:31.694Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ac7278b6-6bf2-4037-995b-c5b793951366",
              "name": "Crude oil and petrochemicals",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Crude oil and petrochemicals",
              "created_at": "2020-04-21T03:09:03.182Z",
              "updated_at": "2020-05-21T16:04:31.705Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bc47bd88-84b7-474e-ae65-988c27a6819a",
              "name": "Thermal energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Thermal energy",
              "created_at": "2020-04-21T03:08:39.355Z",
              "updated_at": "2020-06-16T12:28:31.723Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "69c69531-5824-433c-9688-b3daf3b2ef3f",
              "name": "Work, energy and power",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Work, energy and power",
              "created_at": "2020-04-21T03:08:22.337Z",
              "updated_at": "2020-06-16T12:28:31.737Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "75b970a9-1b68-443b-ba14-70fd416d51af",
              "name": "Chemicals",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "chemicals",
              "created_at": "2020-04-21T03:07:58.296Z",
              "updated_at": "2020-06-16T12:28:31.752Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a0bc0eb1-000f-4fcc-b85b-068e0afe7429",
              "name": "Living things (Habitat)",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Living things (Habitat)",
              "created_at": "2020-04-21T03:07:38.134Z",
              "updated_at": "2020-05-21T16:04:31.752Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 53,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d7ad8d9-4827-4daa-b548-488c18cadde2",
              "name": "Gravitation and weightlessness",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Gravitation and weightlessness",
              "created_at": "2020-04-21T03:07:04.564Z",
              "updated_at": "2020-06-16T12:28:31.786Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d6e94b5-a263-4589-bd62-58ad32594623",
              "name": "Forces",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "forces",
              "created_at": "2020-04-21T03:06:45.659Z",
              "updated_at": "2020-05-21T16:04:31.773Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d6ed3391-c1ce-4b0b-884d-6fac84aa1208",
              "name": "Renewable and non-renewable energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "Renewable and non-renewable energy",
              "created_at": "2020-04-21T03:06:33.105Z",
              "updated_at": "2020-05-21T16:04:31.783Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6141238d-645f-4fca-846a-37a8afc4a584",
              "name": "Energy",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Energy",
              "created_at": "2020-04-21T03:06:08.251Z",
              "updated_at": "2020-06-24T14:18:43.513Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 41,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "de5d3ebe-1f8f-4a18-9a22-c1e7ac8ebd9c",
              "name": "Living and non-living things",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": false,
              "description": "Living and non-living things",
              "created_at": "2020-04-21T03:05:54.278Z",
              "updated_at": "2020-06-16T12:28:31.843Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7f8f9723-2162-440a-91f8-de0381272f7e",
              "name": "Family health",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "rank": null,
              "active": true,
              "description": "family health",
              "created_at": "2020-04-21T03:05:04.507Z",
              "updated_at": "2020-06-24T14:18:43.533Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 47,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "7ecbf607-4d72-4c0c-9f1b-38b22fb015ee",
              "course_id": "181b4586-aa14-4bfa-9faf-6a32d80a1ff9",
              "title": "2019",
              "created_at": "2020-05-15T11:59:15.499Z",
              "updated_at": "2020-06-24T14:18:49.025Z",
              "questions_count": 740
          }
      ]
  },
  {
      "id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
      "created_at": "2020-03-31T21:34:12.031Z",
      "updated_at": "2020-05-27T14:15:47.441Z",
      "errors": {},
      "slug": "mathematics-jss",
      "questions_count": 434,
      "plan_ids": [],
      "plans": [],
      "videos_count": 69,
      "name": "Mathematics JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Mathematics JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "b2eac9ff-8a6c-4c8e-8dc4-4498c9771931",
              "name": "Bearing and Distance",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Bearing and Distance",
              "created_at": "2020-05-02T12:52:14.886Z",
              "updated_at": "2020-05-21T16:04:30.896Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fc54e642-290a-421d-ad8f-9ad4648beb11",
              "name": "Basic Operations ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Basic Operations ",
              "created_at": "2020-04-16T14:47:20.614Z",
              "updated_at": "2020-05-21T16:04:32.489Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8d28bf92-d2f9-4a8e-b21a-a460cf296c50",
              "name": "Expansion And Factorization ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Expansion And Factorization ",
              "created_at": "2020-04-16T14:21:11.510Z",
              "updated_at": "2020-05-21T16:04:32.502Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 41,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "495e6365-f09e-4269-85da-dafe151ac4ad",
              "name": "Linear Inequality - One Variable  ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Linear Inequality in One Variable ",
              "created_at": "2020-04-14T14:04:15.131Z",
              "updated_at": "2020-05-21T16:04:32.525Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 4,
              "plan_ids": []
          },
          {
              "id": "55761614-4ef1-46f1-9f05-a38180e81b8c",
              "name": "Numbers And Numeration vol1",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Numbers And Numeration Vol1 ",
              "created_at": "2020-04-12T14:10:32.976Z",
              "updated_at": "2020-05-21T16:04:32.770Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 35,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "91d2c8eb-6c74-400d-aed6-439666bd2df7",
              "name": "Geometry And Applications ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Geometry And Applications ",
              "created_at": "2020-04-12T08:08:59.757Z",
              "updated_at": "2020-05-21T16:04:32.781Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 37,
              "videos_count": 7,
              "plan_ids": []
          },
          {
              "id": "5080b555-e5b7-49bf-bb34-e84e555d9fdc",
              "name": "Approximation And Estimate ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Approximation And Estimate ",
              "created_at": "2020-04-05T17:12:57.636Z",
              "updated_at": "2020-05-21T16:04:33.045Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "90b1194a-f5e3-4939-8df2-5ddee221409e",
              "name": "Working with Fractions ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Fractions ",
              "created_at": "2020-04-05T16:30:36.357Z",
              "updated_at": "2020-05-21T16:04:33.059Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 18,
              "plan_ids": []
          },
          {
              "id": "29c98cd8-90d6-4131-b9d2-0d70e7701b0a",
              "name": "Household And Commercial Maths",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Household And Commercial Maths",
              "created_at": "2020-04-05T12:01:45.477Z",
              "updated_at": "2020-05-21T16:04:33.073Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 9,
              "plan_ids": []
          },
          {
              "id": "521f7a6b-0f72-4b3f-8dca-4cbee1dfab72",
              "name": "Algebraic Processes Vol1",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Algebraic Processes Vol1",
              "created_at": "2020-04-05T11:37:35.569Z",
              "updated_at": "2020-05-21T16:04:33.085Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 4,
              "plan_ids": []
          },
          {
              "id": "57374d22-6e78-4516-a8b2-542714fceec5",
              "name": "Linear Equations",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Linear Equations\n",
              "created_at": "2020-04-05T10:53:10.964Z",
              "updated_at": "2020-05-21T16:04:33.098Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "07cf52c3-7447-4514-a021-b714c2eb7de7",
              "name": "Whole Numbers ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Whole Numbers ",
              "created_at": "2020-04-03T09:43:28.487Z",
              "updated_at": "2020-05-21T16:04:33.582Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 4,
              "plan_ids": []
          },
          {
              "id": "a4d8ffdf-cd04-412f-88ce-47f385d6cd18",
              "name": "Standard Form And Indices ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Standard Form And Indices ",
              "created_at": "2020-04-03T02:06:12.580Z",
              "updated_at": "2020-05-21T16:04:33.598Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 12,
              "plan_ids": []
          },
          {
              "id": "459a531d-433b-486e-8c14-4c7d55fc44d6",
              "name": "Statistics and Probability ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Statistics  and Probability ",
              "created_at": "2020-04-02T15:42:16.033Z",
              "updated_at": "2020-05-21T16:04:33.611Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d534c830-2a3f-416d-9386-7b68954a3201",
              "name": "Mensuration",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Mensuration \n",
              "created_at": "2020-04-01T20:16:47.574Z",
              "updated_at": "2020-05-21T16:04:33.622Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 11,
              "plan_ids": []
          },
          {
              "id": "78a45028-1dba-4bf1-b230-f82f4508ec0d",
              "name": "Trigonometry And Applications ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Trigonometry And Applications ",
              "created_at": "2020-04-01T19:31:10.414Z",
              "updated_at": "2020-05-21T16:04:33.635Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "906a8771-7ed1-4f16-84f4-a1e1a8cdd3af",
              "name": "Algebra ",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "Algebra ",
              "created_at": "2020-04-01T19:19:01.119Z",
              "updated_at": "2020-05-21T16:04:33.657Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d5ce2aa-e25b-45e2-a269-b7a9030a5383",
              "name": "World Problem",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "rank": null,
              "active": true,
              "description": "World Problem",
              "created_at": "2020-03-31T22:05:56.727Z",
              "updated_at": "2020-05-21T16:04:33.670Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "1c34da00-533e-428d-ae55-36a0c17f82eb",
              "course_id": "b42d9a9d-d179-4b08-a6b3-6767450eba2f",
              "title": "2019",
              "created_at": "2020-03-31T22:07:57.341Z",
              "updated_at": "2020-05-21T16:03:53.507Z",
              "questions_count": 0
          }
      ]
  },
  {
      "id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
      "created_at": "2020-03-13T16:58:54.952Z",
      "updated_at": "2020-05-27T14:15:47.475Z",
      "errors": {},
      "slug": "basic-technology",
      "questions_count": 1760,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Basic Technology JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Basic Technology JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "52a00e09-e9f3-44b1-98e0-01639cd1ba71",
              "name": "Work, energy and power",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Work, energy and power",
              "created_at": "2020-04-21T01:51:59.531Z",
              "updated_at": "2020-05-21T16:04:31.837Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "68dc58d7-2568-4c42-87d6-3a4034f601b8",
              "name": "Uses of bronze, brass, rubber and plastic",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Uses of bronze, brass, rubber and plastic",
              "created_at": "2020-04-21T01:51:34.982Z",
              "updated_at": "2020-05-21T16:04:31.850Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 27,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "afcd6851-40c9-4bbc-92a3-9cbfd6932b6c",
              "name": "Tools, machines and processing",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Tools, machines and processing",
              "created_at": "2020-04-21T01:51:04.232Z",
              "updated_at": "2020-05-21T16:04:31.862Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "30af3ad8-51f0-425a-acdd-1e52db7b8a89",
              "name": "Soldering and brazing",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Soldering and brazing",
              "created_at": "2020-04-21T01:50:32.248Z",
              "updated_at": "2020-05-21T16:04:31.875Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b5bb665d-56a2-40ea-aebb-2603c8dad5cf",
              "name": "Site preparation",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "site preparation",
              "created_at": "2020-04-21T01:50:08.248Z",
              "updated_at": "2020-05-21T16:04:31.888Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c5bcfc36-ec46-44ef-8da9-5e5af16f3f8c",
              "name": "Processing, properties and uses of metals",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Processing, properties and uses of metals",
              "created_at": "2020-04-21T01:49:46.241Z",
              "updated_at": "2020-05-21T16:04:31.900Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 42,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "72f0504a-8db4-48d1-9049-bf01a3c0db47",
              "name": "Processing of timber",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "processing of timber",
              "created_at": "2020-04-21T01:49:19.015Z",
              "updated_at": "2020-05-21T16:04:31.918Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e103f5d2-c20b-4dcd-b83e-1a870bab38db",
              "name": "Processing of clay, ceramics and glass",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Processing of clay, ceramics and glass",
              "created_at": "2020-04-21T01:48:35.029Z",
              "updated_at": "2020-05-21T16:04:31.930Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "926720be-5cab-4a76-9260-2e5b6e8bcc14",
              "name": "Planes, figures and quidrilateral",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Planes, figures and quidrilateral",
              "created_at": "2020-04-21T01:48:04.873Z",
              "updated_at": "2020-05-21T16:04:31.944Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 52,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "baf70f38-c3a8-4bc0-841c-00f2753678df",
              "name": "Metalwork Projects",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "metalwork projects",
              "created_at": "2020-04-21T01:43:14.201Z",
              "updated_at": "2020-05-21T16:04:31.959Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d37855d-9f15-4093-ac6c-bb8000b5898e",
              "name": "Measuring instruments",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "measuring instruments",
              "created_at": "2020-04-21T01:39:40.477Z",
              "updated_at": "2020-05-21T16:04:31.972Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d81f8834-741c-44e5-9d50-072b871ae6fa",
              "name": "Materials, Processing and uses",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Materials, Processing and uses",
              "created_at": "2020-04-21T01:25:24.544Z",
              "updated_at": "2020-05-21T16:04:31.986Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "dd902646-dc35-4c5b-b1c1-917ae8e003fa",
              "name": "Machines motion",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "machines motion",
              "created_at": "2020-04-21T01:24:16.421Z",
              "updated_at": "2020-05-21T16:04:32.001Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65d78a13-67bb-45fd-b58b-2c4078444d0a",
              "name": "Machines",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "machines",
              "created_at": "2020-04-21T01:21:34.677Z",
              "updated_at": "2020-05-21T16:04:32.018Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "84de04fb-aad6-43b6-a030-0190f6eb9c3c",
              "name": "Hydraulic and Pneumatic systems",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Hydraulic and Pneumatic systems",
              "created_at": "2020-04-21T00:59:11.657Z",
              "updated_at": "2020-05-21T16:04:32.031Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "047e29d4-728c-4e40-8dee-f18c70dbc725",
              "name": "Gear, Ratio and Speed Conversion",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Gear, Ratio and Speed Conversion",
              "created_at": "2020-04-21T00:57:28.391Z",
              "updated_at": "2020-05-21T16:04:32.044Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7accc5ee-f744-42fb-9adb-f46d1be2862c",
              "name": "Drawings",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "drawings",
              "created_at": "2020-04-21T00:53:25.857Z",
              "updated_at": "2020-05-21T16:04:32.058Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "adb575d9-4f21-41c1-b4db-60bf223fa7df",
              "name": "Belt chain and drive",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Belt chain and drive",
              "created_at": "2020-04-21T00:51:03.667Z",
              "updated_at": "2020-05-21T16:04:32.074Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 42,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2b0ca379-f3cf-4ba6-8db4-3ca9193b245e",
              "name": "Workshop Safety",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Workshop Safety",
              "created_at": "2020-04-21T00:46:56.806Z",
              "updated_at": "2020-05-21T16:04:32.092Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c8ed2e7b-7207-404f-ae81-4deafe979053",
              "name": "Woodwork machines and projects",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Woodwork machines and projects",
              "created_at": "2020-04-21T00:44:44.842Z",
              "updated_at": "2020-05-21T16:04:32.109Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "139ee3ce-dfde-4d4c-905d-7e4246a84daf",
              "name": "Understanding technology",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Understanding technology",
              "created_at": "2020-04-21T00:35:02.591Z",
              "updated_at": "2020-05-21T16:04:32.122Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 43,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65e1e18a-d777-4b17-a64b-7cfb42aadb95",
              "name": "Forms of Metals",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Forms of Metals",
              "created_at": "2020-04-21T00:19:40.444Z",
              "updated_at": "2020-05-21T16:04:32.146Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ee88cfb6-aeb1-42c6-b4b9-556eba69ed00",
              "name": "First Aid",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "first aid",
              "created_at": "2020-04-20T01:50:08.110Z",
              "updated_at": "2020-05-21T16:04:32.159Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c251eb97-f936-4d09-aace-4b1e18d3b056",
              "name": "Electronics",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Electronics",
              "created_at": "2020-03-17T14:34:01.505Z",
              "updated_at": "2020-05-21T16:04:33.813Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "76d5b3d7-3557-4290-bd5b-80b93acb2c93",
              "name": "Energy conversion",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Energy conversion",
              "created_at": "2020-03-16T16:08:43.577Z",
              "updated_at": "2020-05-21T16:04:33.864Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 25,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65aea28f-e51f-4333-aa96-7cbc77d4fe1d",
              "name": "Energy",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "energy",
              "created_at": "2020-03-16T16:08:28.912Z",
              "updated_at": "2020-05-21T16:04:33.874Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1d27710a-5822-44cd-90a7-1ce6177cd7fc",
              "name": "Electrical and magnetic field",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Electrical and magnetic field",
              "created_at": "2020-03-16T16:08:12.570Z",
              "updated_at": "2020-05-21T16:04:33.886Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8bd841b6-4742-42c3-bcbf-a340dc11b963",
              "name": "Drawing practices",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Drawing practices",
              "created_at": "2020-03-16T16:07:45.445Z",
              "updated_at": "2020-05-21T16:04:33.899Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "46afbb4e-8276-4bf2-a048-f405dc7621ac",
              "name": "Concept of technology",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Concept of technology",
              "created_at": "2020-03-16T16:07:25.883Z",
              "updated_at": "2020-05-21T16:04:33.913Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4e49f14e-c533-4926-8efa-ad012c26c7fb",
              "name": "Classification of metals",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Classification of metals",
              "created_at": "2020-03-16T16:07:08.412Z",
              "updated_at": "2020-05-21T16:04:33.925Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae47eb2a-411d-4534-beac-c48a8ab9c4c4",
              "name": "Circle",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "circle",
              "created_at": "2020-03-16T16:06:50.686Z",
              "updated_at": "2020-05-21T16:04:33.935Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8d9f9f32-a38e-4a7f-a5dd-d8591ba6fcb4",
              "name": "Change of state",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Change of state",
              "created_at": "2020-03-16T16:06:35.712Z",
              "updated_at": "2020-05-21T16:04:33.948Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f71112c7-1ab5-4372-913b-810808180e70",
              "name": "Career in technology",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Career in technology",
              "created_at": "2020-03-16T16:06:22.606Z",
              "updated_at": "2020-05-21T16:04:33.967Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "27f7f421-49a5-468b-9058-be4f4ba67031",
              "name": "Care and maintenance of woodwork machines",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": false,
              "description": "Care and maintenance of woodwork machines",
              "created_at": "2020-03-16T16:06:03.591Z",
              "updated_at": "2020-05-21T16:04:33.977Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "526a3b26-52d5-4d94-b885-e8ad5e0f362b",
              "name": "Care and maintenance of metalwork machines",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": false,
              "description": "Care and maintenance of metalwork machines",
              "created_at": "2020-03-16T16:05:46.541Z",
              "updated_at": "2020-05-21T16:04:33.991Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1c440ef8-4033-412c-b6a5-c1ab58c8f14e",
              "name": "Building materials",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": false,
              "description": "Building materials",
              "created_at": "2020-03-16T16:05:20.332Z",
              "updated_at": "2020-05-21T16:04:34.002Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f621488d-a3a5-48bd-ae0e-457ab51df6be",
              "name": "Board practice",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "rank": null,
              "active": true,
              "description": "Board practice",
              "created_at": "2020-03-16T16:05:02.635Z",
              "updated_at": "2020-05-21T16:04:34.014Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "2714706b-14ff-47be-a99a-8b8fb64a6d2e",
              "course_id": "e7d151dd-f9be-4061-863b-d7ea5698120f",
              "title": "2019",
              "created_at": "2020-03-16T16:08:59.802Z",
              "updated_at": "2020-05-21T16:03:53.791Z",
              "questions_count": 878
          }
      ]
  },
  {
      "id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
      "created_at": "2020-03-13T12:23:10.632Z",
      "updated_at": "2021-03-13T14:53:19.121Z",
      "errors": {},
      "slug": "further-mathematics",
      "questions_count": 425,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Further Mathematics ",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Further Mathematics ",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "09f47d33-1773-4051-a93a-f790f18c69a0",
              "name": "Partial Fractions ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Partial Fractions ",
              "created_at": "2020-06-29T14:30:38.935Z",
              "updated_at": "2021-03-01T12:16:55.520Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "85b30c5c-f0cb-4123-937c-a3878aad1077",
              "name": "Number Base ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Number Base ",
              "created_at": "2020-06-29T13:08:23.081Z",
              "updated_at": "2021-03-01T12:16:55.570Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "578dd5d6-700d-438f-82b0-65029b0cbd90",
              "name": "Midpoint And Coordinates ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Midpoint And Coordinates ",
              "created_at": "2020-06-29T12:15:12.768Z",
              "updated_at": "2021-03-01T12:16:55.593Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d23c2631-9b13-4f79-9011-ee0e969ef916",
              "name": "Mean ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Mean ",
              "created_at": "2020-06-29T11:54:41.931Z",
              "updated_at": "2021-03-01T12:16:55.627Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 1,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "abec2308-c25e-452b-ab35-6ac836024f35",
              "name": "Matrix ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Matrix ",
              "created_at": "2020-06-29T11:16:22.705Z",
              "updated_at": "2021-03-01T12:16:55.709Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b929e438-70d6-43d3-b4c9-c222ebce6968",
              "name": "Logical",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Logical ",
              "created_at": "2020-06-29T10:32:48.564Z",
              "updated_at": "2021-03-01T12:16:55.760Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f13e38c2-fa72-4c9d-88bf-b9ef226735c0",
              "name": "Limit ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Limit ",
              "created_at": "2020-06-29T10:20:07.838Z",
              "updated_at": "2021-03-01T12:16:55.791Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0189121a-f6c5-4514-aa63-9c7de703f133",
              "name": "Locus",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Locus",
              "created_at": "2020-06-28T16:19:54.705Z",
              "updated_at": "2021-03-01T12:16:55.841Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fb7b6267-9ebd-4e3a-abdd-56d5b8227399",
              "name": "Lines ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Lines ",
              "created_at": "2020-06-28T15:29:04.446Z",
              "updated_at": "2021-03-01T12:16:55.922Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4568415b-4d0c-4e58-ac67-2ceb764400eb",
              "name": "Isosceles",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Isosceles",
              "created_at": "2020-06-27T23:02:42.304Z",
              "updated_at": "2021-03-01T12:16:55.984Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 1,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "20c5094f-fe42-43cb-b62d-4b085ff9e3b8",
              "name": "Inverse ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Inverse ",
              "created_at": "2020-06-27T22:48:26.910Z",
              "updated_at": "2021-03-01T12:16:56.034Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f6e898ba-c30e-4883-85f5-8096310c947f",
              "name": "Integration ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Integration",
              "created_at": "2020-06-27T22:41:21.497Z",
              "updated_at": "2021-03-01T12:16:56.062Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2177cc2e-84d4-4c36-a466-e4489e6d24f7",
              "name": "Inequality ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Inequality ",
              "created_at": "2020-06-27T21:45:32.176Z",
              "updated_at": "2021-03-01T12:16:56.108Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7eaa1cc9-3835-4506-9173-65bd58582d7e",
              "name": "Harmonic Progression",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Harmonic Progression ",
              "created_at": "2020-06-27T20:53:59.168Z",
              "updated_at": "2020-06-27T21:34:09.012Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "87d3fdc5-7baf-4f51-9919-7cd91d436ad7",
              "name": "Geometric Progression ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Geometric Progression ",
              "created_at": "2020-06-26T15:55:20.484Z",
              "updated_at": "2020-06-27T21:34:09.022Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2e8e234a-d618-4bfe-8718-3f92c62e0254",
              "name": "Functions",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Functions",
              "created_at": "2020-06-26T15:45:14.429Z",
              "updated_at": "2020-06-27T21:34:09.032Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "20d9a220-108d-4996-a6c5-34872fe16ca8",
              "name": "Factorization ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Factorization ",
              "created_at": "2020-06-26T15:31:18.469Z",
              "updated_at": "2020-06-27T21:34:09.043Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "68a71f4f-772d-4930-ae7d-c9843698d2e7",
              "name": "Elevation",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Elevation ",
              "created_at": "2020-06-26T15:01:54.274Z",
              "updated_at": "2020-06-27T21:34:09.053Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "19144366-c4b8-4740-b523-3721d9e7c8f6",
              "name": "Dimension ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Dimension ",
              "created_at": "2020-06-26T14:52:46.888Z",
              "updated_at": "2020-06-27T21:34:09.066Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f0c96304-79ec-478a-9a56-d37992c6073f",
              "name": "Bearing",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Bearing",
              "created_at": "2020-06-26T12:03:41.027Z",
              "updated_at": "2020-06-27T21:34:09.081Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "570386f7-125b-4de1-a1fa-d595b62834b6",
              "name": "Arrangement ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Arrangement ",
              "created_at": "2020-06-26T11:14:15.118Z",
              "updated_at": "2020-06-27T21:34:09.093Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fa3e9c5a-1554-4061-9f94-274e4121e78a",
              "name": "Arc of a Sector ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Arc of a Sector",
              "created_at": "2020-06-26T10:57:38.084Z",
              "updated_at": "2020-06-27T21:34:09.105Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "07f372e1-232c-490c-ae06-e5d14a8ee6c9",
              "name": "Acute Angle",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Acute Angle",
              "created_at": "2020-06-26T05:41:58.896Z",
              "updated_at": "2020-06-27T21:34:09.117Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c68bfa6c-8a0a-4a0a-b5ee-760e65fc647e",
              "name": "Coefficient",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Coefficient",
              "created_at": "2020-06-25T21:36:03.003Z",
              "updated_at": "2020-06-25T21:36:03.003Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5b4f025a-c112-4812-aad4-e5aede6cd16a",
              "name": "Compound Interest ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Compound Interest ",
              "created_at": "2020-06-25T21:06:55.198Z",
              "updated_at": "2020-06-27T21:34:09.158Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "60d5f4c0-b0e9-48d9-911f-ebdbe22fd1c2",
              "name": "Variable And Velocity",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Variable And Velocity",
              "created_at": "2020-06-19T13:11:40.967Z",
              "updated_at": "2020-06-24T14:18:41.246Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "be721bdf-3c06-4ce2-921b-0dd3f27226ae",
              "name": "Binary And Binomial Expansions ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Binary And Binomial Expansions ",
              "created_at": "2020-06-19T11:41:04.218Z",
              "updated_at": "2020-06-24T14:18:41.259Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3176b4b2-d37d-43ba-9c8e-c72a7e5008b8",
              "name": "Cone",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Cone",
              "created_at": "2020-06-18T13:12:36.928Z",
              "updated_at": "2020-06-24T14:18:41.326Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "79b04c69-f352-4b24-aaf0-7f265fcb60db",
              "name": "Motion",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Motion ",
              "created_at": "2020-06-16T12:05:31.439Z",
              "updated_at": "2020-06-24T14:18:41.349Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5b9fc3ce-fe1e-448b-9b16-da13b75d2f70",
              "name": "Indices and Logarithmic Functions ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Logarithm\n",
              "created_at": "2020-03-29T19:36:36.528Z",
              "updated_at": "2020-05-21T16:04:33.686Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "857c4b1e-f1b7-4882-9c36-9d279b3a150d",
              "name": "Gradient ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Gradient ",
              "created_at": "2020-03-27T23:19:00.611Z",
              "updated_at": "2020-05-21T16:04:33.699Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "edb59146-7190-474f-a1fb-e939665dedb3",
              "name": "Velocity",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Velocity",
              "created_at": "2020-03-27T22:09:52.451Z",
              "updated_at": "2020-05-21T16:04:33.713Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "91a14fc6-7a33-40e6-a2ac-8612ff7e77c8",
              "name": "Curve",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Curve",
              "created_at": "2020-03-27T16:46:59.443Z",
              "updated_at": "2020-05-21T16:04:33.727Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "093154c3-bffc-4f33-bbc4-2d9d94bae50c",
              "name": "Variance",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Variance",
              "created_at": "2020-03-27T14:02:17.165Z",
              "updated_at": "2020-05-21T16:04:33.738Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "920e5097-a757-4212-bb40-1cf4bdbea670",
              "name": "Forces And Magnitude ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Forces And Magnitude ",
              "created_at": "2020-03-27T12:45:17.884Z",
              "updated_at": "2021-03-01T12:17:20.975Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6454616d-f369-432e-b2c6-20cd9ba7b427",
              "name": "Surd ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Surd ",
              "created_at": "2020-03-27T12:17:00.878Z",
              "updated_at": "2020-05-21T16:04:33.762Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2e968fc4-6f8f-4be4-9cda-2e782a0ed475",
              "name": "Differentiation ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Differentiation ",
              "created_at": "2020-03-19T12:44:49.790Z",
              "updated_at": "2020-05-21T16:04:33.775Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4a11c872-0e77-4ee6-97f6-f51a54968323",
              "name": "World Problem",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "World Problems",
              "created_at": "2020-03-19T10:15:03.447Z",
              "updated_at": "2020-05-21T16:04:33.789Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "83e1ae3c-3274-4f7b-b5bc-d33e17ff6d5c",
              "name": "Circle",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Circle",
              "created_at": "2020-03-18T10:14:43.559Z",
              "updated_at": "2020-05-21T16:04:33.800Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 1,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cada8454-f37e-470f-ad78-3aa9794127e8",
              "name": "Arrangement",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Arrangement",
              "created_at": "2020-03-17T13:59:25.372Z",
              "updated_at": "2020-05-21T16:04:33.825Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "83757b0c-cf43-4cbb-b656-73e9da08aa09",
              "name": "Arithmetic Progression ",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Arithmetic Progression ",
              "created_at": "2020-03-17T13:48:35.446Z",
              "updated_at": "2020-05-21T16:04:33.845Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d49664d3-c513-42f0-a3c5-78561853374d",
              "name": "Statistics and Probability",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "rank": null,
              "active": true,
              "description": "Probability",
              "created_at": "2020-03-13T13:38:08.385Z",
              "updated_at": "2020-05-21T16:04:34.034Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "efe3ba0c-e0a9-46f7-92eb-fbb5fc0ce980",
              "course_id": "f1837b37-7a36-4147-b359-bd3f7fbdbbe7",
              "title": "2019",
              "created_at": "2020-03-13T12:24:24.490Z",
              "updated_at": "2020-05-21T16:03:53.812Z",
              "questions_count": 61
          }
      ]
  },
  {
      "id": "560c5682-64ca-4772-a508-0649d4424f32",
      "created_at": "2020-02-17T14:30:52.100Z",
      "updated_at": "2021-03-13T14:53:19.245Z",
      "errors": {},
      "slug": "mathematics-54851c73-9ed8-4c1c-92d1-998423909a53",
      "questions_count": 308,
      "plan_ids": [],
      "plans": [],
      "videos_count": 134,
      "name": "Mathematics",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "mathematics",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "15d36f20-034f-43b6-a0f1-3cf28c4163b9",
              "name": "Bearing",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": false,
              "description": "bearing",
              "created_at": "2020-06-29T11:22:42.745Z",
              "updated_at": "2021-03-01T12:16:55.676Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e5e7bb19-f366-43ce-b726-3007cc2e901a",
              "name": "Numbers",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "numbers",
              "created_at": "2020-06-29T10:58:41.405Z",
              "updated_at": "2021-03-01T12:16:55.735Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a92d0141-76f6-4b7e-bdb9-2a7fabcc52e3",
              "name": "The Earth as a Sphere",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "The earth as a sphere",
              "created_at": "2020-05-10T19:03:34.061Z",
              "updated_at": "2020-05-21T16:04:30.642Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ac90a636-a402-48b2-8105-c0c210b3879e",
              "name": "Surface Area and Volume of Sphere",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Surface area and volume of sphere",
              "created_at": "2020-05-10T18:52:39.809Z",
              "updated_at": "2020-05-21T16:04:30.654Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8e955a0f-0baf-4c16-8bf2-80c9d8bdca05",
              "name": "Application of Linear and Quadratic Equation",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Application of linear and quadratic equation",
              "created_at": "2020-05-10T18:37:13.286Z",
              "updated_at": "2020-05-21T16:04:30.665Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7fa4fb8d-c346-461a-a1bc-b26702547e92",
              "name": "Arithmetic of Finance",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Arithmetic of finance",
              "created_at": "2020-05-10T18:30:16.847Z",
              "updated_at": "2020-05-21T16:04:30.677Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f4ef5d59-bc20-4b20-94bd-32aa69311904",
              "name": "Matrices",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "MATRICES",
              "created_at": "2020-05-10T18:07:00.102Z",
              "updated_at": "2020-05-21T16:04:30.688Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9f05dadf-65ee-4806-ba26-5085a8e3aa9c",
              "name": "Mensuration of Solid Shapes",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Mensuration of solid shapes",
              "created_at": "2020-05-09T22:20:04.108Z",
              "updated_at": "2021-03-01T12:17:03.336Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 1,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "54b41309-7122-4f75-9b90-ac3af90d895a",
              "name": "Logical Reasoning",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Logical reasoning",
              "created_at": "2020-05-09T22:16:00.755Z",
              "updated_at": "2020-05-21T16:04:30.708Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7c8213f0-2049-4a44-9b09-a39f59fc0fdd",
              "name": "Approximation",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Approximation",
              "created_at": "2020-05-09T22:07:45.903Z",
              "updated_at": "2020-05-21T16:04:30.720Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d4fcb781-c001-4b3d-bb6e-0618b16010e5",
              "name": "Quadratic Equations",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Quadratic Equations",
              "created_at": "2020-05-09T22:00:49.685Z",
              "updated_at": "2021-03-01T12:17:03.479Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e3a8bbf8-9b9e-48ef-b899-8e0123719a36",
              "name": "Simple Equations and Variations",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "SIMPLE EQUATIONS",
              "created_at": "2020-05-09T21:48:07.465Z",
              "updated_at": "2021-03-01T12:17:03.535Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4091d619-d0c6-4244-850e-152a722c6a40",
              "name": "Standard Form",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "STANDARD FORM ",
              "created_at": "2020-05-09T17:45:26.552Z",
              "updated_at": "2020-05-21T16:04:30.750Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b21ad78d-106b-4857-9e18-6255b63f9e30",
              "name": "Modular Arithmetic",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "MODULAR ARITHMETIC",
              "created_at": "2020-05-09T17:40:55.269Z",
              "updated_at": "2020-05-21T16:04:30.759Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ad7039fc-cc4c-4615-8988-a0eb90820b3e",
              "name": "Coordinate Geometry",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Coordinate Geometry",
              "created_at": "2020-05-02T14:36:14.744Z",
              "updated_at": "2021-03-01T12:17:04.089Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d097de2f-e9f5-40be-9d37-0980cb5f7965",
              "name": "Trigonometry",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Trigonometry",
              "created_at": "2020-04-17T03:04:31.453Z",
              "updated_at": "2021-03-01T12:17:12.600Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 24,
              "plan_ids": []
          },
          {
              "id": "c7bd0dff-9c85-4815-ac72-ac565be7a9ad",
              "name": "Vectors",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Vectors",
              "created_at": "2020-04-17T02:50:09.247Z",
              "updated_at": "2020-05-21T16:04:32.465Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 5,
              "plan_ids": []
          },
          {
              "id": "20ff0624-3099-4def-9a35-cc3a14205938",
              "name": "Euclidean Geometry",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Euclidean Geometry",
              "created_at": "2020-04-16T20:24:36.477Z",
              "updated_at": "2020-05-21T16:04:32.477Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 12,
              "plan_ids": []
          },
          {
              "id": "cc0f16bb-4888-4286-b22c-c735a1004836",
              "name": "Mensuration",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Covers lengths, areas, volumes of solid shapes",
              "created_at": "2020-04-15T11:14:57.872Z",
              "updated_at": "2020-05-21T16:04:32.513Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 11,
              "plan_ids": []
          },
          {
              "id": "ba351fc1-cc10-4751-9676-94c0f5e1b106",
              "name": "Geometrical Ratios",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Geometrical Ratios",
              "created_at": "2020-04-14T00:30:43.854Z",
              "updated_at": "2020-05-21T16:04:32.753Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 4,
              "plan_ids": []
          },
          {
              "id": "258023f6-635a-4f54-9866-abfcca5a9c02",
              "name": "Shapes",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Shapes",
              "created_at": "2020-03-16T12:27:33.059Z",
              "updated_at": "2021-03-01T12:17:22.595Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3079b9a7-89cd-434f-afe0-42d34dfe0751",
              "name": "Word Problems",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Word Problems",
              "created_at": "2020-03-10T16:03:16.757Z",
              "updated_at": "2020-05-21T16:04:34.164Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ff018885-e6d9-411d-82dc-4e8325b51f8e",
              "name": "Sequence And Series ",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Sequence And Series ",
              "created_at": "2020-03-10T16:02:59.064Z",
              "updated_at": "2020-05-21T16:04:34.175Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 17,
              "plan_ids": []
          },
          {
              "id": "ec827d81-f6ea-4e47-ac7b-32848f77f55d",
              "name": "Simple interest",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Simple interest",
              "created_at": "2020-03-10T15:59:32.949Z",
              "updated_at": "2020-05-21T16:04:34.188Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "00fc1a55-8c89-408f-87a4-64f7d6fe1701",
              "name": "Loci",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Loci",
              "created_at": "2020-02-25T10:51:37.433Z",
              "updated_at": "2020-05-21T16:04:34.787Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "649a3e29-8480-44b1-8588-7a1ceecc2e89",
              "name": "Profit and loss",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Profit and loss",
              "created_at": "2020-02-25T10:45:45.808Z",
              "updated_at": "2020-05-21T16:04:34.799Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5fbb6cb3-3e4c-40b9-a3ae-1af745e9b888",
              "name": "Indices, Logarithms and Surds",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Indices, Logarithms and Surds",
              "created_at": "2020-02-25T10:27:20.550Z",
              "updated_at": "2021-03-01T12:17:27.844Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 12,
              "plan_ids": []
          },
          {
              "id": "afc27f4f-44ad-4406-861b-5f31588cd8b5",
              "name": "Algebra",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Algebra",
              "created_at": "2020-02-24T14:38:52.187Z",
              "updated_at": "2021-03-01T12:17:28.246Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5357bcab-b924-4695-ba7c-6b9cc3c36397",
              "name": "Set Theory",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Set theory",
              "created_at": "2020-02-24T14:19:32.076Z",
              "updated_at": "2020-05-21T16:04:34.856Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 11,
              "plan_ids": []
          },
          {
              "id": "b26b587b-bfde-48e9-80ee-6fcd55153368",
              "name": "Numerical Processes",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Numerical Processes",
              "created_at": "2020-02-24T13:50:53.190Z",
              "updated_at": "2020-05-21T16:04:34.871Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "dc563de9-1f1a-4555-908a-6acc52b5eebd",
              "name": "Lines and polygons",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Lines and polygons",
              "created_at": "2020-02-24T13:39:12.971Z",
              "updated_at": "2020-05-21T16:04:34.884Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "33f5acf3-d49a-4163-9c0f-b02ffe640dc7",
              "name": "Area and perimeter",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Area and perimeter",
              "created_at": "2020-02-24T13:12:13.940Z",
              "updated_at": "2020-05-21T16:04:34.895Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fdc0e438-b6b6-4260-9f6a-0aa4fd650a4e",
              "name": "Number bases",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "number bases",
              "created_at": "2020-02-21T15:34:08.398Z",
              "updated_at": "2021-03-01T12:17:28.948Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "690e2ef3-92ba-41d4-ad90-d495f7113156",
              "name": "Statistics And Probability",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Statistics And Probability",
              "created_at": "2020-02-21T13:23:31.661Z",
              "updated_at": "2021-03-01T12:17:29.136Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 11,
              "plan_ids": []
          },
          {
              "id": "a0ca2589-7fcd-46b1-845d-b5864a6dbe68",
              "name": "Polynomials ",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "Polynomials ",
              "created_at": "2020-02-21T12:01:38.096Z",
              "updated_at": "2020-05-21T16:04:34.936Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 27,
              "plan_ids": []
          },
          {
              "id": "daf3c727-4cfc-4e70-bfdc-2761151369ff",
              "name": "Calculus",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "rank": null,
              "active": true,
              "description": "calculus",
              "created_at": "2020-02-17T14:33:26.025Z",
              "updated_at": "2020-05-21T16:04:34.949Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "2b25c4b4-2753-40e0-81f2-7c71b65c942b",
              "course_id": "560c5682-64ca-4772-a508-0649d4424f32",
              "title": "2019",
              "created_at": "2020-02-17T14:33:41.478Z",
              "updated_at": "2020-05-21T16:03:53.853Z",
              "questions_count": 63
          }
      ]
  },
  {
      "id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
      "created_at": "2020-02-10T15:50:56.680Z",
      "updated_at": "2020-05-27T14:15:47.549Z",
      "errors": {},
      "slug": "christian-religious-studies-c87a827f-8cde-431a-907a-1d1f11f82294",
      "questions_count": 2026,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Christian Religious Studies",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Christian Religious Studies",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "5af2ea28-1c41-4013-bb84-df1a64e4fb3c",
              "name": "Triumphant entry",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Triumphant entry",
              "created_at": "2020-02-17T10:08:31.413Z",
              "updated_at": "2020-05-21T16:04:34.964Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3d452c2d-0608-4ba1-9ed4-1ddfdef90336",
              "name": "Trial, crucifixion and death of Jesus",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Trial, crucifixion and death of Jesus",
              "created_at": "2020-02-17T10:08:15.583Z",
              "updated_at": "2020-05-21T16:04:34.978Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7af2f346-6626-42fe-8edd-932fec9f9114",
              "name": "Transfiguration and pentecost",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Transfiguration and pentecost",
              "created_at": "2020-02-17T10:06:23.674Z",
              "updated_at": "2020-05-21T16:04:34.991Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b28fd4b9-22ef-4a8f-8632-e6e9d1879391",
              "name": "The new covanant",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "The new covanant",
              "created_at": "2020-02-17T09:52:31.010Z",
              "updated_at": "2020-05-21T16:04:35.003Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5550fa6a-ea49-4594-9f78-cfe387e78aff",
              "name": "The mission of Paul",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "The mission of Paul",
              "created_at": "2020-02-17T09:52:02.778Z",
              "updated_at": "2020-05-21T16:04:35.019Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 35,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2d0f652e-6975-4161-b4ce-7f49d1246f70",
              "name": "The martyredom of Stephen",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "The martyredom of Stephen",
              "created_at": "2020-02-17T09:51:42.525Z",
              "updated_at": "2020-05-21T16:04:35.033Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "77674c49-2062-407d-a451-4330035f71c7",
              "name": "The HolySpirit and the mission of the church",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "The HolySpirit and the mission of the church",
              "created_at": "2020-02-17T09:50:37.465Z",
              "updated_at": "2020-05-21T16:04:35.049Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "68947a43-19e9-4131-a217-b20525140442",
              "name": "Supremacy of God",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Supremacy of God",
              "created_at": "2020-02-17T09:50:12.655Z",
              "updated_at": "2020-05-21T16:04:35.073Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "20131d4f-dc95-4324-b238-1125b9d063c5",
              "name": "Spiritual gifts",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": false,
              "description": "Spiritual gifts",
              "created_at": "2020-02-17T09:49:52.759Z",
              "updated_at": "2020-05-21T16:04:35.092Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "66c0af47-b6bd-4a8f-a5b8-41c6d1219759",
              "name": "Solomon",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": false,
              "description": "Solomon",
              "created_at": "2020-02-17T09:49:34.917Z",
              "updated_at": "2020-05-21T16:04:35.105Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6741dea5-0a74-43dd-bc8a-a0dd493ee200",
              "name": "Social justice and true religion",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Social justice and true religion",
              "created_at": "2020-02-17T09:49:21.815Z",
              "updated_at": "2020-05-21T16:04:35.118Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "59d24110-c345-433f-a180-3d82789ace54",
              "name": "Sermon on the mount",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Sermon on the mount",
              "created_at": "2020-02-17T09:47:57.377Z",
              "updated_at": "2020-05-21T16:04:35.132Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 25,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b234c764-3a99-4356-9b85-de12c783304b",
              "name": "Second coming of Jesus",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Second coming of Jesus",
              "created_at": "2020-02-17T09:47:40.411Z",
              "updated_at": "2020-05-21T16:04:35.145Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3a085256-ad75-470d-8a0d-6d24e6df6f5a",
              "name": "Resurrection, appearance and ascension of Jesus",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Resurrection, appearance and ascension of Jesus",
              "created_at": "2020-02-17T09:47:20.758Z",
              "updated_at": "2020-05-21T16:04:35.165Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6543b467-818c-4c71-a72d-075106395b86",
              "name": "Religious Tension",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Religious Tension",
              "created_at": "2020-02-17T09:46:13.111Z",
              "updated_at": "2020-05-21T16:04:35.180Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8fbc9f3b-193a-424c-a4b4-2ab0bb284ee8",
              "name": "Punishment and hope",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Punishment and hope",
              "created_at": "2020-02-17T09:45:49.144Z",
              "updated_at": "2020-05-21T16:04:35.196Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "38cbd6d4-a909-47ca-91f0-79c8548280ad",
              "name": "Prayer",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Prayer",
              "created_at": "2020-02-13T15:21:05.497Z",
              "updated_at": "2020-05-21T16:04:35.210Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "dba0582c-21b3-4de6-b240-acb3bc5adbcd",
              "name": "Persecution",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "persecution",
              "created_at": "2020-02-13T15:19:56.436Z",
              "updated_at": "2020-05-21T16:04:35.220Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e7f2d1fc-364d-4da4-b648-f0f8c1ffe878",
              "name": "Parental responsibilities",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Parental responsibilities",
              "created_at": "2020-02-13T15:19:37.323Z",
              "updated_at": "2020-05-21T16:04:35.231Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8d4c7d2d-12c0-4d42-b80f-b12911f3da89",
              "name": "Parables",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Parables",
              "created_at": "2020-02-13T15:19:16.681Z",
              "updated_at": "2020-05-21T16:04:35.244Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4bbc8c01-2a54-47c5-9e09-7feb25b1d98a",
              "name": "Repentance and forgiveness",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Repentance and forgiveness",
              "created_at": "2020-02-13T15:14:32.824Z",
              "updated_at": "2020-05-21T16:04:35.254Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9ace8a06-2569-44d2-9caa-46dcd214178e",
              "name": "Noah and the flood",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Noah and the flood",
              "created_at": "2020-02-13T15:12:37.187Z",
              "updated_at": "2020-05-21T16:04:35.265Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "86ea877d-7527-4c57-b1e7-8bfdfdacadcf",
              "name": "New life in Christ",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "New life in Christ",
              "created_at": "2020-02-13T15:12:10.796Z",
              "updated_at": "2020-05-21T16:04:35.277Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6ac0c4cd-c2a2-4c4f-b5d2-f5a2644b9c0f",
              "name": "Mission of the church",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Mission of the church",
              "created_at": "2020-02-13T15:11:53.042Z",
              "updated_at": "2020-05-21T16:04:35.289Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bce274a1-e7b0-4d57-af8b-00b784dd3860",
              "name": "Miracles",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "miracles",
              "created_at": "2020-02-13T15:11:26.157Z",
              "updated_at": "2020-05-21T16:04:35.302Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1ad19c1e-fa37-4f29-ad82-1b978cae1c6c",
              "name": "The message",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "The message",
              "created_at": "2020-02-13T15:11:13.284Z",
              "updated_at": "2020-05-21T16:04:35.317Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b2db2b95-6938-4b22-a840-c4ade8e10c91",
              "name": "Leadership qualities vol 2",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Leadership qualities vol 2",
              "created_at": "2020-02-13T15:10:00.601Z",
              "updated_at": "2020-05-21T16:04:35.335Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b3743f18-5dca-4f6e-83d6-256f9d4fcdc8",
              "name": "Leadership qualities vol 1",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Leadership qualities vol 1",
              "created_at": "2020-02-13T15:07:39.992Z",
              "updated_at": "2020-05-21T16:04:35.347Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "14fff6fc-ee30-447c-b73c-30eea6b3305f",
              "name": "Law and grace",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Law and grace",
              "created_at": "2020-02-13T15:07:05.857Z",
              "updated_at": "2020-05-21T16:04:35.359Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b6004be3-21c5-4ecb-85d3-0165492ad6e2",
              "name": "Last supper",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Last supper",
              "created_at": "2020-02-13T15:06:50.728Z",
              "updated_at": "2020-05-21T16:04:35.369Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "30e2aa81-6e3d-44b8-ae02-252acff2189d",
              "name": "Justification by faith",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Justification by faith",
              "created_at": "2020-02-13T15:06:34.566Z",
              "updated_at": "2020-05-21T16:04:35.380Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aeb0f920-196d-418b-979e-cec8a9e1d3ea",
              "name": "Judah",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "judah",
              "created_at": "2020-02-13T15:06:17.959Z",
              "updated_at": "2020-05-21T16:04:35.393Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "de65a4e6-4d05-4d1b-8da1-f05154247ee0",
              "name": "Jesus teachings",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Jesus teachings",
              "created_at": "2020-02-13T15:06:01.839Z",
              "updated_at": "2020-05-21T16:04:35.406Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0d30af01-4f52-44ea-a1f9-0fd4e3571834",
              "name": "Jerusalem",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Jerusalem",
              "created_at": "2020-02-13T15:05:32.003Z",
              "updated_at": "2020-05-21T16:04:35.419Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e7f1c3a1-723c-433a-808c-cc028901eb54",
              "name": "Impartiality and humility",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Impartiality and humility",
              "created_at": "2020-02-13T15:05:12.330Z",
              "updated_at": "2020-05-21T16:04:35.434Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "454c0ecf-f6b3-4885-b19c-7159c02f8365",
              "name": "Holiness and divine call",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Holiness and divine call",
              "created_at": "2020-02-13T15:04:40.141Z",
              "updated_at": "2020-05-21T16:04:35.471Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 59,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6998d091-4346-43f6-8e6a-15613b77243a",
              "name": "God's covenant with Israel",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "God's covenant with Israel",
              "created_at": "2020-02-13T15:04:04.237Z",
              "updated_at": "2020-05-21T16:04:35.486Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 42,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9606d319-9ffe-4f32-9dbe-377ea992046a",
              "name": "God's covenant with Abraham",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "God's covenant with Abraham",
              "created_at": "2020-02-13T15:03:44.042Z",
              "updated_at": "2020-05-21T16:04:35.501Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7ab5f9f6-6b8c-4807-97d5-0ca513195cd0",
              "name": "Fellowship in the early church",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Fellowship in the early church",
              "created_at": "2020-02-13T15:03:23.817Z",
              "updated_at": "2020-05-21T16:04:35.513Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "66fe87f9-70e0-468a-93c1-00da4cda8129",
              "name": "Early life of Jesus",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Early life of Jesus",
              "created_at": "2020-02-13T15:03:02.762Z",
              "updated_at": "2020-05-21T16:04:35.524Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6f234148-725d-4dd1-acd4-9d76bcccd37d",
              "name": "Divine Providence",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Divine Providence",
              "created_at": "2020-02-13T15:02:45.148Z",
              "updated_at": "2020-05-21T16:04:35.536Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f3200753-364d-4ff0-9556-5f9deb35da0c",
              "name": "Divine love",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "divine love",
              "created_at": "2020-02-13T15:02:20.773Z",
              "updated_at": "2020-05-21T16:04:35.549Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a40f7291-a660-444f-bc25-16d3aff2fb88",
              "name": "Obedience and disobedience",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "obedience and disobedience",
              "created_at": "2020-02-13T15:02:05.907Z",
              "updated_at": "2020-05-21T16:04:35.561Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1b74da16-bfcb-4e12-ae62-4e4990152911",
              "name": "David",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "david",
              "created_at": "2020-02-13T15:01:40.277Z",
              "updated_at": "2020-05-21T16:04:35.578Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 27,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e0d8111c-a5c8-46f9-a88b-bbd5cb348b80",
              "name": "Discipleship",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Discipleship",
              "created_at": "2020-02-13T15:01:20.682Z",
              "updated_at": "2020-05-21T16:04:35.602Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 27,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d6508fb9-30d6-4ac5-8c77-d0748566f37e",
              "name": "Creation",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "creation",
              "created_at": "2020-02-13T15:00:58.866Z",
              "updated_at": "2020-05-21T16:04:35.616Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c4558c70-80cf-44e3-a620-b5a80c7a8a3b",
              "name": "Conversions",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Conversions",
              "created_at": "2020-02-13T15:00:41.043Z",
              "updated_at": "2020-05-21T16:04:35.630Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bab141f2-d289-4619-a6e4-5d7da57ba74b",
              "name": "Communal living",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Communal living",
              "created_at": "2020-02-13T15:00:22.576Z",
              "updated_at": "2020-05-21T16:04:35.642Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4166aeee-dc15-4840-bae4-3f283661ace8",
              "name": "Civic responsibility",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Civic responsibility",
              "created_at": "2020-02-13T15:00:02.095Z",
              "updated_at": "2020-05-21T16:04:35.654Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4f34332c-5af5-4c9f-bfeb-a9ecdec8a6d2",
              "name": "Christians",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Christians",
              "created_at": "2020-02-13T14:59:17.259Z",
              "updated_at": "2020-05-21T16:04:35.666Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "974f25bc-3711-4c3a-a929-0f3e485caebb",
              "name": "Giving",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Christian giving",
              "created_at": "2020-02-13T14:58:59.330Z",
              "updated_at": "2020-05-21T16:04:35.677Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "23579c40-b7e6-41dc-8a4e-2e1c099ef45c",
              "name": "Arrest and imprisonment of Peter and John",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "Arrest and imprisonment of Peter and John",
              "created_at": "2020-02-13T14:58:29.127Z",
              "updated_at": "2020-05-21T16:04:35.687Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "513a9ab4-e90f-41cb-8419-3a070f1018a3",
              "name": "John the forerunner of Jesus",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "rank": null,
              "active": true,
              "description": "John the forerunner of Jesus",
              "created_at": "2020-02-10T16:00:33.526Z",
              "updated_at": "2020-05-21T16:04:35.699Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "6dfc851a-8fd6-4b6a-a410-55248c70138c",
              "course_id": "06f5bc8a-11c0-4db7-a665-830b9dedef27",
              "title": "2019",
              "created_at": "2020-02-10T15:59:54.377Z",
              "updated_at": "2020-05-21T16:03:53.866Z",
              "questions_count": 1005
          }
      ]
  },
  {
      "id": "857013d0-ff73-434a-a966-c9f32f268faf",
      "created_at": "2020-02-04T14:05:03.411Z",
      "updated_at": "2021-03-13T14:53:19.387Z",
      "errors": {},
      "slug": "hausa",
      "questions_count": 982,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Hausa ",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Hausa course",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "82a372e9-2cf7-4752-9aba-2e9714938e34",
              "name": "Inshai",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": false,
              "description": "Inshai",
              "created_at": "2020-08-27T16:36:57.961Z",
              "updated_at": "2021-03-01T12:16:55.077Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bc1859f5-7a66-4917-89d6-271ee5fc02fa",
              "name": "Fassara Vol 2",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Fassara Vol 2",
              "created_at": "2020-08-27T16:32:20.427Z",
              "updated_at": "2021-03-01T12:16:55.243Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "97ca64be-10dd-4860-b898-f60f7480777d",
              "name": "Fassara vol 1",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Fassara vol 1",
              "created_at": "2020-08-27T16:31:44.356Z",
              "updated_at": "2021-03-01T12:16:55.327Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 52,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "98066b96-b985-44a0-91c1-33455b726769",
              "name": "Alada vol 2",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Alada vol 2",
              "created_at": "2020-08-27T16:21:42.660Z",
              "updated_at": "2021-03-01T12:16:55.424Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 57,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f99b9739-786c-4d4b-b50a-3a4e2489421c",
              "name": "Alada Vol 1",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": false,
              "description": "Alada Vol 1",
              "created_at": "2020-08-27T16:07:01.820Z",
              "updated_at": "2021-03-01T12:16:55.461Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6b1917a9-9069-4a9c-ab20-ceeec2528b34",
              "name": "Nahawu vol 2",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Nahawu vol 2",
              "created_at": "2020-02-26T12:38:26.049Z",
              "updated_at": "2020-05-21T16:04:34.741Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 114,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aef6d33d-7885-497f-ad7f-745329e76d48",
              "name": "Nahawu",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Nahawu",
              "created_at": "2020-02-26T12:37:45.637Z",
              "updated_at": "2020-05-21T16:04:34.752Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 55,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3f9f297a-adb5-4683-afd9-2e49b75c3ef1",
              "name": "Tsarin Sauti Vol 3",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": false,
              "description": "Tsarin Sauti Vol 3",
              "created_at": "2020-02-26T11:06:26.652Z",
              "updated_at": "2020-05-21T16:04:34.763Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6820305e-5994-49ef-90a2-e4e6f603f083",
              "name": "Tsarin Sauti Vol 2",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Tsarin Sauti Vol 2",
              "created_at": "2020-02-26T11:06:07.875Z",
              "updated_at": "2020-05-21T16:04:34.775Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 61,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3d4b0bdd-b785-438e-b9f2-ad6d0e84e10a",
              "name": "Tsarin Sauti",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "rank": null,
              "active": true,
              "description": "Tsarin Sauti",
              "created_at": "2020-02-04T14:16:19.830Z",
              "updated_at": "2020-05-21T16:04:36.028Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "d1104087-756a-48b5-af11-68ba1f2453a2",
              "course_id": "857013d0-ff73-434a-a966-c9f32f268faf",
              "title": "2019",
              "created_at": "2020-02-04T14:16:27.353Z",
              "updated_at": "2021-03-01T12:17:54.442Z",
              "questions_count": 464
          }
      ]
  },
  {
      "id": "672c9666-743a-40e3-b783-dfb6513d7126",
      "created_at": "2020-02-04T14:04:34.832Z",
      "updated_at": "2020-05-27T14:15:47.577Z",
      "errors": {},
      "slug": "islamic-studies",
      "questions_count": 460,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Islamic Studies",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Islamic Studies",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": false,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "1806dcee-5b46-4363-a842-fbb337e8ac05",
              "name": "Quran vol 4",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Quran vol 4",
              "created_at": "2020-08-27T17:07:14.556Z",
              "updated_at": "2020-08-27T17:07:14.556Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b63f4a5c-701e-4d89-9537-6e3bb3534a31",
              "name": "Tawhid",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Tawhid",
              "created_at": "2020-02-04T14:12:52.945Z",
              "updated_at": "2020-05-21T16:04:36.039Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "04727719-b2e5-4e3a-92c4-9073ec8dfd16",
              "name": "Tafsir",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Tafsir",
              "created_at": "2020-02-04T14:12:33.971Z",
              "updated_at": "2020-05-21T16:04:36.060Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "864ed602-a3d6-4864-bec1-751b5af4c04f",
              "name": "Sirah",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "sirah",
              "created_at": "2020-02-04T14:12:13.932Z",
              "updated_at": "2020-05-21T16:04:36.073Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "090ccf08-4d44-4c6f-a846-41a25d4791e9",
              "name": "Quran vol 3",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Quran vol 3",
              "created_at": "2020-02-04T14:11:54.241Z",
              "updated_at": "2020-05-21T16:04:36.084Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 53,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "eb16bbb2-8e3f-48ec-b478-bb8ec0c58c14",
              "name": "Quran vol 2",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Quran vol 2",
              "created_at": "2020-02-04T14:11:39.833Z",
              "updated_at": "2020-05-21T16:04:36.097Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 55,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "431eb0a0-1cf7-4d85-88c1-0130bc5b5c6f",
              "name": "Quran vol 1",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Quran vol 1",
              "created_at": "2020-02-04T14:11:26.411Z",
              "updated_at": "2020-05-21T16:04:36.107Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 55,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6b1d0023-a70e-4d25-9a3a-3f005b88a207",
              "name": "Ihsan",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Ihsan",
              "created_at": "2020-02-04T14:11:03.994Z",
              "updated_at": "2020-05-21T16:04:36.126Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d9a3912-24e8-45ac-9979-98f3f3c37200",
              "name": "Hadith",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "Hadith",
              "created_at": "2020-02-04T14:10:47.757Z",
              "updated_at": "2020-05-21T16:04:36.137Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d387faa-f5d8-4fd2-ab28-3974239e15f2",
              "name": "fiqh",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "rank": null,
              "active": true,
              "description": "fiqh",
              "created_at": "2020-02-04T14:10:30.670Z",
              "updated_at": "2020-05-21T16:04:36.149Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "67a115f4-e715-45b8-9102-bcce1f6e8dee",
              "course_id": "672c9666-743a-40e3-b783-dfb6513d7126",
              "title": "2019",
              "created_at": "2020-02-04T14:10:04.272Z",
              "updated_at": "2020-05-21T16:03:53.911Z",
              "questions_count": 230
          }
      ]
  },
  {
      "id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
      "created_at": "2020-02-03T13:13:52.053Z",
      "updated_at": "2020-05-27T14:15:47.596Z",
      "errors": {},
      "slug": "agricultural-science-8a9c7865-a4c9-4b4b-9d67-2bd00ec69e4d",
      "questions_count": 1502,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Agricultural Science",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Agricultural Science SS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "fd0bc6fa-0845-4566-9f94-2033e8b6bcbf",
              "name": "Weeds And Grasses ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Weeds And Grasses ",
              "created_at": "2020-04-04T12:22:25.692Z",
              "updated_at": "2020-05-21T16:04:33.112Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4fa9884e-ed2a-4dfc-8c1b-f4c616ae2c4b",
              "name": "Vegetation",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Vegetation",
              "created_at": "2020-04-04T12:21:09.044Z",
              "updated_at": "2020-05-21T16:04:33.122Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "12fbe222-c251-4696-ad7f-71fb2f123ac0",
              "name": "Soil Vol 2",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Soil Vol 2",
              "created_at": "2020-04-04T12:18:53.216Z",
              "updated_at": "2020-05-21T16:04:33.132Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 59,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "59a1d460-9d30-40d6-8689-89c96977e634",
              "name": "Rocks",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Rocks",
              "created_at": "2020-04-04T12:17:47.994Z",
              "updated_at": "2020-05-21T16:04:33.142Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9268ab82-7fcb-4354-a07d-8c79fee9aafe",
              "name": "Reproduction in Farm Animals ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Reproduction in Farm Animals ",
              "created_at": "2020-04-04T12:16:17.894Z",
              "updated_at": "2020-05-21T16:04:33.153Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3e4f7283-0f0e-4498-981b-28ba68520aeb",
              "name": "Poultry",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Poultry",
              "created_at": "2020-04-04T12:14:59.248Z",
              "updated_at": "2020-05-21T16:04:33.164Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c1f90f3f-936b-4b43-bdf7-4ddbcbec002b",
              "name": "Pollination",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Pollination",
              "created_at": "2020-04-04T12:13:40.447Z",
              "updated_at": "2020-05-21T16:04:33.174Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d592375b-e9b9-4a23-acbe-92c6baf48472",
              "name": "Plants",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Plants",
              "created_at": "2020-04-04T12:12:02.850Z",
              "updated_at": "2020-05-21T16:04:33.187Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c231b70b-0fb1-4546-ab40-69f93323cb6e",
              "name": "Pig Farming ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Pig Farming ",
              "created_at": "2020-04-04T12:10:05.989Z",
              "updated_at": "2020-05-21T16:04:33.201Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cc1d205c-83aa-4c53-836c-caeae4517c19",
              "name": "Pests",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Pests",
              "created_at": "2020-04-04T12:08:02.711Z",
              "updated_at": "2020-05-21T16:04:33.214Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "76e1af33-71e4-47f3-bc4c-39783fd39a9e",
              "name": "Parasites ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Parasites ",
              "created_at": "2020-04-04T12:06:24.891Z",
              "updated_at": "2020-05-21T16:04:33.225Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7eb91fa4-b196-4da7-a3a6-29d06ff376c2",
              "name": "Nutrition",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Nutrition ",
              "created_at": "2020-04-04T12:05:04.024Z",
              "updated_at": "2020-05-21T16:04:33.237Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b969be6c-28bc-4d77-9052-f0af488d750b",
              "name": "Nitrogen Cycle ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Nitrogen Cycle ",
              "created_at": "2020-04-04T12:03:48.304Z",
              "updated_at": "2020-05-21T16:04:33.246Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3a59a015-85d0-47de-93c2-c7b4f336bf6d",
              "name": "Leguminous Plants",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Leguminous Plants",
              "created_at": "2020-04-04T12:00:53.154Z",
              "updated_at": "2020-05-21T16:04:33.257Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cd6c76af-7ab7-4562-8985-e2e3c01f6d93",
              "name": "Land",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Land",
              "created_at": "2020-04-04T11:54:33.775Z",
              "updated_at": "2020-05-21T16:04:33.268Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 43,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f30355d1-4c0a-4f8f-88ab-cdadcd31f3f0",
              "name": "Land vol 2",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Land And Animal Management",
              "created_at": "2020-04-04T11:53:00.669Z",
              "updated_at": "2020-05-21T16:04:33.280Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 43,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65994f2a-f8fd-464b-9ff9-770dd5726357",
              "name": "Grazing ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Grazing ",
              "created_at": "2020-04-04T11:51:03.722Z",
              "updated_at": "2020-05-21T16:04:33.296Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "749cbc7d-2d3a-4f6a-a50f-7f36d4cbe23f",
              "name": "Government Policies And Regulations ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Government Policies And Regulations ",
              "created_at": "2020-04-04T11:48:10.621Z",
              "updated_at": "2020-05-21T16:04:33.312Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c3dff4db-5891-4012-9a9a-6c8678b887dd",
              "name": "Forestry",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Forestry",
              "created_at": "2020-04-04T11:45:59.804Z",
              "updated_at": "2020-05-21T16:04:33.325Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b1e69196-eeed-4272-8d88-317a0a190ecb",
              "name": "Forage",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Forage",
              "created_at": "2020-04-04T11:44:30.455Z",
              "updated_at": "2020-05-21T16:04:33.337Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2ed127d5-99de-4ae6-a433-80ab2bb81ae4",
              "name": "Food Processing And Preservation ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Food Processing And Preservation ",
              "created_at": "2020-04-04T11:41:21.978Z",
              "updated_at": "2020-05-21T16:04:33.349Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0adcad5a-d219-41aa-8aad-899c33a437d6",
              "name": "Fertilizers ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Fertilizers ",
              "created_at": "2020-04-04T11:40:07.678Z",
              "updated_at": "2020-05-21T16:04:33.361Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "99cc51f4-deed-4239-92d4-f1ba4ac64947",
              "name": "Disease Vol 1",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Disease Vol 1",
              "created_at": "2020-04-04T11:38:44.151Z",
              "updated_at": "2020-05-21T16:04:33.373Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d6b6be8b-4fac-4d10-bfda-5d08ed36a52a",
              "name": "Disease Vol 2",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Disease Vol 2",
              "created_at": "2020-04-04T11:37:04.347Z",
              "updated_at": "2020-05-21T16:04:33.386Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5fe1372a-7a0e-4bf9-a2c8-4ef6cb56687c",
              "name": "Digestive System ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Digestive System ",
              "created_at": "2020-04-04T11:31:34.421Z",
              "updated_at": "2020-05-21T16:04:33.398Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "75c22e1c-4cd5-4649-bbdb-01d0dc4d9520",
              "name": "Cultivation ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Cultivation",
              "created_at": "2020-04-04T11:20:19.759Z",
              "updated_at": "2020-05-21T16:04:33.411Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1889040b-858f-42a2-9fd7-f09e9cc0edb0",
              "name": "Crops Vol 2",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Crops Vol 2",
              "created_at": "2020-04-04T11:17:20.748Z",
              "updated_at": "2020-05-21T16:04:33.424Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8f419ef9-09d5-4dc8-a893-3db2ba12d0bd",
              "name": "Crops Vol 1",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Crops Vol 1",
              "created_at": "2020-04-04T11:15:59.523Z",
              "updated_at": "2020-05-21T16:04:33.442Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d0079e89-0a91-4967-b084-2ebb0fa741f0",
              "name": "Cotton",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Cotton",
              "created_at": "2020-04-04T11:15:12.548Z",
              "updated_at": "2020-05-21T16:04:33.452Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5fd7618e-0ced-4220-a701-bcc8e30445f2",
              "name": "Bush Burning ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Bush Burning",
              "created_at": "2020-04-04T11:14:21.652Z",
              "updated_at": "2020-05-21T16:04:33.465Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8647ae6d-6019-484e-93c5-85891f43eafd",
              "name": "Animal Husbandry ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Animal Husbandry ",
              "created_at": "2020-04-04T11:12:58.535Z",
              "updated_at": "2020-05-21T16:04:33.480Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "83dce040-64b3-4a46-96cc-1df1a164d383",
              "name": "Animal Hormones System ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Animal Hormones System ",
              "created_at": "2020-04-04T11:10:10.766Z",
              "updated_at": "2020-05-21T16:04:33.490Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8056f075-c144-4d0d-b95a-4d818176eeaf",
              "name": "Animal Feeds",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Animal Feeds",
              "created_at": "2020-04-04T11:08:27.063Z",
              "updated_at": "2020-05-21T16:04:33.500Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "29677141-d250-4ecc-895f-d81a3dbccbf4",
              "name": "Animal Breeding ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Animal Breeding",
              "created_at": "2020-04-04T11:07:35.973Z",
              "updated_at": "2020-05-21T16:04:33.510Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2c4ec81b-61fd-424b-9a64-3a2be3611ae9",
              "name": "Agriculture Vol 2",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Agriculture Vol 2",
              "created_at": "2020-04-04T11:06:23.295Z",
              "updated_at": "2020-05-21T16:04:33.522Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fa5c04b0-417e-446f-83f2-b4c447a9f3a5",
              "name": "Agriculture Vol 1",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Agriculture Vol 1",
              "created_at": "2020-04-04T11:05:07.148Z",
              "updated_at": "2020-05-21T16:04:33.532Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3a1494a6-a032-41ad-8723-e346c1ad88ae",
              "name": "Agriculture And Farm Credit",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Agriculture And Farm Credit",
              "created_at": "2020-04-04T11:01:46.161Z",
              "updated_at": "2020-05-21T16:04:33.543Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "934bf1dc-a7bf-4809-bfe9-5787fa072246",
              "name": "Agricultural Development ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Agricultural Development ",
              "created_at": "2020-04-04T11:00:01.704Z",
              "updated_at": "2020-05-21T16:04:33.555Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "82a0931a-b22c-4553-8b41-fd29361a2f3e",
              "name": "Afforestation ",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "rank": null,
              "active": true,
              "description": "Afforestation ",
              "created_at": "2020-04-03T10:52:14.114Z",
              "updated_at": "2020-05-21T16:04:33.567Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "937b22d0-f9f1-4656-bc96-acdf963fa0a0",
              "course_id": "71346d89-0fd9-4b63-b909-9ba3f7bc2e80",
              "title": "2019",
              "created_at": "2020-04-03T10:53:42.354Z",
              "updated_at": "2020-05-21T16:03:53.480Z",
              "questions_count": 751
          }
      ]
  },
  {
      "id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
      "created_at": "2020-01-28T09:04:31.289Z",
      "updated_at": "2020-05-27T14:15:47.612Z",
      "errors": {},
      "slug": "physical-and-health-education",
      "questions_count": 1308,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Physical and Health Education JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Physical and Health Education JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "2aac49ca-9af9-4ff7-b7a4-2296ca21dec8",
              "name": "Track events",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "track events",
              "created_at": "2020-04-22T01:50:50.244Z",
              "updated_at": "2020-05-21T16:04:31.260Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "16a403cb-db8c-41fd-b854-5f5f916ecaf8",
              "name": "Sources of water",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "sources of water",
              "created_at": "2020-04-22T01:50:13.893Z",
              "updated_at": "2020-05-21T16:04:31.276Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4f3774ba-d19e-4109-a5fe-5ba88c4afdc2",
              "name": "Scope and Objectives of Physical Education",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Scope and Objectives of Physical Education",
              "created_at": "2020-04-22T01:49:19.424Z",
              "updated_at": "2020-05-21T16:04:31.289Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3f66180a-f101-41aa-9a0b-921daab9b5ac",
              "name": "Race",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "race",
              "created_at": "2020-04-22T01:46:42.975Z",
              "updated_at": "2020-05-21T16:04:31.302Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "da8d37ed-09c9-4bdd-a199-2c364bdc1b6d",
              "name": "Public health",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Public health",
              "created_at": "2020-04-22T01:44:23.741Z",
              "updated_at": "2020-05-21T16:04:31.313Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "43334e25-e63f-483b-b0b1-07aacc086daf",
              "name": "Posture",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "posture",
              "created_at": "2020-04-22T01:39:52.837Z",
              "updated_at": "2020-05-21T16:04:31.326Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "11539fea-9d94-43bf-a71b-94cd2cef1a68",
              "name": "Physical fitness and body condition vol 2",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Physical fitness and body condition vol 2",
              "created_at": "2020-04-22T01:37:10.733Z",
              "updated_at": "2020-05-21T16:04:31.340Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "32e9241f-a3da-42b0-b750-8fcf2cae1871",
              "name": "Physical fitness and body condition vol 1",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Physical fitness and body condition vol 1",
              "created_at": "2020-04-22T01:36:55.444Z",
              "updated_at": "2020-05-21T16:04:31.353Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "44a370c3-c3f8-4f4b-945b-d5c9752d0b8b",
              "name": "Pathogen, diseases and prevention",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Pathogen, diseases and prevention",
              "created_at": "2020-04-22T01:24:00.474Z",
              "updated_at": "2020-05-21T16:04:31.364Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "08b47624-729b-4da5-b390-ccd00d9394cb",
              "name": "Longjump and Highjump events",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Longjump and Highjump events",
              "created_at": "2020-04-22T01:20:55.362Z",
              "updated_at": "2020-05-21T16:04:31.375Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d23cde38-b93b-47a0-8725-46bda9017352",
              "name": "Field events",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "field events",
              "created_at": "2020-04-22T01:19:46.811Z",
              "updated_at": "2020-05-21T16:04:31.386Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ab6b4716-3dc0-448f-9ad4-41a70342b9b7",
              "name": "Combined events",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "combined events",
              "created_at": "2020-04-22T01:14:10.038Z",
              "updated_at": "2020-05-21T16:04:31.397Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e188da02-6d69-4018-97f4-6bc9b4a3d94a",
              "name": "Career and branches of physical education",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Career and branches of physical education",
              "created_at": "2020-04-22T01:10:39.986Z",
              "updated_at": "2020-05-21T16:04:31.411Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ce559949-39e3-4faa-b0e7-8ea93b751ea4",
              "name": "Body system",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "body system",
              "created_at": "2020-04-22T01:07:53.547Z",
              "updated_at": "2020-05-21T16:04:31.425Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "39ec3914-d6c2-4f59-8968-e4943620ff4c",
              "name": "Basketball and Hockey",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Basketball and Hockey",
              "created_at": "2020-04-22T00:49:22.799Z",
              "updated_at": "2020-05-21T16:04:31.441Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0db00745-3e39-437b-9d23-5216c4dce4e0",
              "name": "Family life education",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Family life education",
              "created_at": "2020-01-30T11:13:26.963Z",
              "updated_at": "2020-05-21T16:04:36.161Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1a7f31f7-3c84-4971-9838-03c7e459f4a2",
              "name": "Volleyball",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "volleyball",
              "created_at": "2020-01-28T09:13:48.097Z",
              "updated_at": "2020-05-21T16:04:36.561Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 43,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c3598e73-5cad-48e4-90d1-d487a464fad0",
              "name": "Tennis",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "tennis",
              "created_at": "2020-01-28T09:13:28.911Z",
              "updated_at": "2020-05-21T16:04:36.578Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "459fc8d3-4c04-4f3a-a0a6-a487c76edaac",
              "name": "Recreation and leisure vol 2",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Recreation and leisure vol 2",
              "created_at": "2020-01-28T09:13:12.060Z",
              "updated_at": "2020-05-21T16:04:36.607Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 34,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ccbed15d-7213-4086-b698-564bf211e295",
              "name": "Recreation and leisure vol 1",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Recreation and leisure vol 1",
              "created_at": "2020-01-28T09:12:58.946Z",
              "updated_at": "2020-05-21T16:04:36.625Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ce992e67-8ce7-4bbf-bc12-7be314f72019",
              "name": "Hockey",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "hockey",
              "created_at": "2020-01-28T09:12:21.491Z",
              "updated_at": "2020-05-21T16:04:36.640Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d7d7186-aa85-4fa9-a934-83206889d6c3",
              "name": "Handball game",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Handball game",
              "created_at": "2020-01-28T09:11:44.359Z",
              "updated_at": "2020-05-21T16:04:36.651Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "03e2f6ca-ebfc-4e54-ba3d-de4f2b0cb455",
              "name": "Gymnastics",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Gymnastics",
              "created_at": "2020-01-28T09:11:22.045Z",
              "updated_at": "2020-05-21T16:04:36.667Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9aa6c2fe-640a-40e6-83c4-d38384c3af72",
              "name": "Football",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "football",
              "created_at": "2020-01-28T09:11:08.366Z",
              "updated_at": "2020-05-21T16:04:36.681Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f53e96e4-9396-434c-b18f-23f819cdf94c",
              "name": "Food nutrient and Health",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Food nutrient and Health",
              "created_at": "2020-01-28T09:10:48.958Z",
              "updated_at": "2020-05-21T16:04:36.695Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 69,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4c384114-3186-487d-9f2f-3babf473e2d4",
              "name": "Badminton and Discus",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": false,
              "description": "Badminton and Discus",
              "created_at": "2020-01-28T09:09:43.784Z",
              "updated_at": "2020-05-21T16:04:36.712Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aea0f0b0-ead2-468e-a331-b2e6468f9452",
              "name": "Athletics",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "athletics",
              "created_at": "2020-01-28T09:09:22.780Z",
              "updated_at": "2020-05-21T16:04:36.726Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 27,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "69475438-8a62-49d1-be05-d3c7539ce695",
              "name": "Aquatic sports",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "rank": null,
              "active": true,
              "description": "Aquatic sports",
              "created_at": "2020-01-28T09:08:58.713Z",
              "updated_at": "2020-05-21T16:04:36.739Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "91b9a4f7-ba97-4c26-8d94-685e4d9fa92b",
              "course_id": "d5e14152-ffe9-43b3-8533-b7e13a1c29d5",
              "title": "2019",
              "created_at": "2020-01-28T09:08:36.190Z",
              "updated_at": "2020-05-21T16:03:53.989Z",
              "questions_count": 651
          }
      ]
  },
  {
      "id": "5823574a-acce-479c-a931-e36e1f699810",
      "created_at": "2020-01-27T15:11:34.732Z",
      "updated_at": "2020-05-27T14:15:47.628Z",
      "errors": {},
      "slug": "fine-art-jss",
      "questions_count": 1243,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Fine Art JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Fine Art JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": false,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "c90624a6-a55c-4a8c-8bd3-6eb432064558",
              "name": "Traditional art and culture",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Traditional art and culture",
              "created_at": "2020-04-20T01:34:55.817Z",
              "updated_at": "2020-05-21T16:04:32.170Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c9203489-9c44-424c-833f-229f3da2845e",
              "name": "Texture and Textile",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "texture and textile",
              "created_at": "2020-04-20T01:32:09.848Z",
              "updated_at": "2020-05-21T16:04:32.182Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2835d1ad-645f-43f2-87cb-da0d3e2f9692",
              "name": "Still Life",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "still life",
              "created_at": "2020-04-20T01:30:53.639Z",
              "updated_at": "2020-05-21T16:04:32.194Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "44609a0f-3789-464a-b41a-2a6859b0d152",
              "name": "Sculpting",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "sculpting",
              "created_at": "2020-04-20T01:28:52.063Z",
              "updated_at": "2020-05-21T16:04:32.209Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e8f365c2-8fb2-4a35-b6d4-508eceef3412",
              "name": "Print Making",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "print making",
              "created_at": "2020-04-20T01:25:43.145Z",
              "updated_at": "2020-05-21T16:04:32.223Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d480231c-a2a3-4ea0-9c64-5c7195a8bbbf",
              "name": "Paper",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "paper",
              "created_at": "2020-04-20T01:08:22.490Z",
              "updated_at": "2020-05-21T16:04:32.235Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3f012ae8-ff1a-4f32-b9da-94f941c635ff",
              "name": "Painting",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "painting",
              "created_at": "2020-04-20T01:06:10.931Z",
              "updated_at": "2020-05-21T16:04:32.247Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "530ba542-95e3-42c5-8d49-4e75804c2b65",
              "name": "Object",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "object",
              "created_at": "2020-04-20T01:04:32.056Z",
              "updated_at": "2020-05-21T16:04:32.262Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae6510cc-2363-4455-8254-f62d39701353",
              "name": "Materials",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "materials",
              "created_at": "2020-04-20T00:57:26.939Z",
              "updated_at": "2020-05-21T16:04:32.273Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a9b3fcaa-a4fb-46eb-a556-3d64ed401c00",
              "name": "Line",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "line",
              "created_at": "2020-04-20T00:55:14.516Z",
              "updated_at": "2020-05-21T16:04:32.285Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "49a84569-5743-4af1-8dbc-f0c2a837c26e",
              "name": "Knitting",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "knitting",
              "created_at": "2020-04-20T00:52:44.575Z",
              "updated_at": "2020-05-21T16:04:32.297Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ee0c3c2e-bd71-4092-b857-17450515e583",
              "name": "Figure drawing",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "figure drawing",
              "created_at": "2020-04-20T00:51:11.224Z",
              "updated_at": "2020-05-21T16:04:32.311Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "18158842-2515-40bc-a8ff-e120226acb52",
              "name": "Element of art and music",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "element of art and music",
              "created_at": "2020-04-20T00:47:44.841Z",
              "updated_at": "2020-05-21T16:04:32.323Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9adc4202-398f-43c6-bfc9-8e1747fe70e9",
              "name": "Drawing",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "drawing",
              "created_at": "2020-04-20T00:42:50.193Z",
              "updated_at": "2020-05-21T16:04:32.335Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 48,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a8f45c8f-c6c5-47bb-b475-9343953feb69",
              "name": "Drama",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "drama",
              "created_at": "2020-04-20T00:41:01.885Z",
              "updated_at": "2020-05-21T16:04:32.346Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f939d676-1954-4ced-be6e-44a7b66fe52e",
              "name": "Color",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "color",
              "created_at": "2020-04-20T00:35:07.600Z",
              "updated_at": "2020-05-21T16:04:32.361Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 46,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "46b4f4ee-b62b-4606-a3f6-283413a27842",
              "name": "Collage",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "collage",
              "created_at": "2020-04-20T00:26:14.919Z",
              "updated_at": "2020-05-21T16:04:32.374Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bb606c4b-b6e1-44c9-bd92-92d9461d6ac3",
              "name": "Clay Modeling",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Clay Modeling",
              "created_at": "2020-04-20T00:24:29.099Z",
              "updated_at": "2020-05-21T16:04:32.387Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "11b1fc2b-6f72-41ef-b978-f370690eb564",
              "name": "Calabash Decoration",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Calabash Decoration",
              "created_at": "2020-04-20T00:19:14.639Z",
              "updated_at": "2020-05-21T16:04:32.402Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4f8b116d-932d-4c21-a39c-70ef8d99b0a0",
              "name": "Branches of Art",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Branches of Art",
              "created_at": "2020-04-20T00:12:05.357Z",
              "updated_at": "2020-05-21T16:04:32.414Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4decbf10-30f9-44e9-b4b6-55b06dac4770",
              "name": "Bead Making and Blacksmithing",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "Bead Making and Blacksmithing",
              "created_at": "2020-04-20T00:09:37.539Z",
              "updated_at": "2020-05-21T16:04:32.426Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4c8244ed-b61a-4393-ad40-81a9d28d0e00",
              "name": "Batik, Tie and Dye",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "Batik, Tie and Dye",
              "created_at": "2020-04-20T00:06:02.346Z",
              "updated_at": "2020-05-21T16:04:32.439Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "00d088fe-0ff1-495a-99a4-a8365810c195",
              "name": "Two and Three dimensional art",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Two and Three dimensional art",
              "created_at": "2020-01-28T11:33:56.260Z",
              "updated_at": "2020-05-21T16:04:36.246Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0d0e54fd-eb35-42f4-b227-aa121ab02498",
              "name": "Motifs and mosaic",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Motifs and mosaic",
              "created_at": "2020-01-28T11:26:42.998Z",
              "updated_at": "2020-05-21T16:04:36.265Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2bee1161-f446-4d18-bcc8-11ffc033c914",
              "name": "Fabric decorators",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Fabric decorators",
              "created_at": "2020-01-28T11:24:35.126Z",
              "updated_at": "2020-05-21T16:04:36.284Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "19c8036f-8cf6-429a-8f65-87730799fdc2",
              "name": "Designs",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "designs",
              "created_at": "2020-01-28T11:24:19.173Z",
              "updated_at": "2020-05-21T16:04:36.293Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 89,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b094b969-d534-430b-ad6f-0af81de8ae57",
              "name": "Nigerian artists",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Nigerian artists",
              "created_at": "2020-01-28T11:24:04.895Z",
              "updated_at": "2020-05-21T16:04:36.310Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c695fb6d-8d15-430f-a32e-f5fda6b5e0ff",
              "name": "Weaving",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "weaving",
              "created_at": "2020-01-28T09:20:39.741Z",
              "updated_at": "2020-05-21T16:04:36.443Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fa551249-9631-4bde-86df-eb2bd39b55e9",
              "name": "Wax",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "wax",
              "created_at": "2020-01-28T09:20:24.233Z",
              "updated_at": "2020-05-21T16:04:36.457Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "48d9725d-cfaf-4f26-8327-7994d51e478f",
              "name": "Patterns in design",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "Patterns in design",
              "created_at": "2020-01-28T09:20:12.122Z",
              "updated_at": "2020-05-21T16:04:36.471Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fdd70147-b1fe-4655-8a8a-6b2eb275cba4",
              "name": "Curator",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "curator",
              "created_at": "2020-01-28T09:19:55.318Z",
              "updated_at": "2020-05-21T16:04:36.482Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "70fc60bf-68bd-480a-b2fa-4baaa226b6a7",
              "name": "Craft",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "craft",
              "created_at": "2020-01-28T09:19:34.876Z",
              "updated_at": "2020-05-21T16:04:36.492Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "54ea46de-6b1c-41c0-813d-c3290f061178",
              "name": "Cave painting",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "cave painting",
              "created_at": "2020-01-28T09:19:20.547Z",
              "updated_at": "2020-05-21T16:04:36.502Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a29c3d8c-8d1b-4ad0-8504-719682ffb8ae",
              "name": "Carving",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "carving",
              "created_at": "2020-01-28T09:18:28.311Z",
              "updated_at": "2020-05-21T16:04:36.512Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8d61ee32-eabb-4d92-8e12-ca0726e9337e",
              "name": "Calabash decoration",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Calabash decoration",
              "created_at": "2020-01-28T09:18:01.449Z",
              "updated_at": "2020-05-21T16:04:36.526Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "77cd976d-ab03-482a-93ce-6d540e3c40d3",
              "name": "Ancient art",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": true,
              "description": "Ancient art",
              "created_at": "2020-01-28T09:17:42.693Z",
              "updated_at": "2020-05-21T16:04:36.537Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 101,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cc664288-260c-4ab3-a9d4-16231306b3af",
              "name": "Abstract designs",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "rank": null,
              "active": false,
              "description": "Abstract designs",
              "created_at": "2020-01-28T09:17:25.448Z",
              "updated_at": "2020-05-21T16:04:36.547Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "ff291c88-5674-4317-a77a-deebf6b37c8d",
              "course_id": "5823574a-acce-479c-a931-e36e1f699810",
              "title": "2019",
              "created_at": "2020-01-28T09:16:55.379Z",
              "updated_at": "2020-05-21T16:03:53.928Z",
              "questions_count": 621
          }
      ]
  },
  {
      "id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
      "created_at": "2020-01-27T13:58:19.510Z",
      "updated_at": "2020-05-27T14:15:47.643Z",
      "errors": {},
      "slug": "civic-education-jss",
      "questions_count": 1112,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Civic Education JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Civic Education JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": false,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "851194cd-da30-4e33-92cf-f22a73d8ea72",
              "name": "Values",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "values",
              "created_at": "2020-04-22T02:47:13.534Z",
              "updated_at": "2020-05-21T16:04:31.169Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "971dc886-b3d2-4648-b681-02ef0d1ff3cf",
              "name": "Traffic rules and regulation",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "Traffic rules and regulation",
              "created_at": "2020-04-22T02:47:01.300Z",
              "updated_at": "2020-05-21T16:04:31.180Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "43beff1e-d2c7-43a9-86fd-760f1ee166c0",
              "name": "Political parties",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "Political parties",
              "created_at": "2020-04-22T02:46:39.111Z",
              "updated_at": "2020-05-21T16:04:31.190Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d80d5992-3033-4510-902a-6a97855a106b",
              "name": "Human rights vol 2",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "Human rights vol 2",
              "created_at": "2020-04-22T02:46:16.022Z",
              "updated_at": "2020-05-21T16:04:31.200Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "14f87037-93fc-4271-af11-dcc7a37815c7",
              "name": "Human rights vol 1",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "Human rights vol 1",
              "created_at": "2020-04-22T02:46:02.927Z",
              "updated_at": "2020-05-21T16:04:31.213Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "84836d64-b6bd-47e3-84f1-c4ae6c5b100b",
              "name": "Election",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "election",
              "created_at": "2020-04-22T02:41:27.678Z",
              "updated_at": "2020-05-21T16:04:31.225Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6225c5d3-93ff-4d11-a662-3d667111d3a6",
              "name": "Crime",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "crime",
              "created_at": "2020-04-22T02:38:19.263Z",
              "updated_at": "2020-05-21T16:04:31.238Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "416fe98c-957d-419a-a2df-93097e5702d7",
              "name": "Agencies",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "agencies",
              "created_at": "2020-04-22T02:36:36.755Z",
              "updated_at": "2020-05-21T16:04:31.248Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "76f17f95-2c26-45dc-b4f8-c416b736b445",
              "name": "Population census",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Population census",
              "created_at": "2020-01-27T14:03:53.987Z",
              "updated_at": "2020-05-21T16:04:36.756Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "542640c5-398f-4dc4-9cba-15d2f8f2092c",
              "name": "Drugs abuse",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Drugs abuse",
              "created_at": "2020-01-27T14:03:39.119Z",
              "updated_at": "2020-05-21T16:04:36.771Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9401f1fc-50f1-41b9-871a-9b6d5e34979d",
              "name": "Democracy vol 2",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Democracy vol 2",
              "created_at": "2020-01-27T14:03:19.659Z",
              "updated_at": "2020-05-21T16:04:36.786Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 61,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "12647f56-9638-45f1-91d8-90190d06f047",
              "name": "Democracy vol 1",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Democracy vol 1",
              "created_at": "2020-01-27T14:03:08.268Z",
              "updated_at": "2020-05-21T16:04:36.801Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 79,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fa450ed1-208a-4a9d-a7bd-5eededd22b64",
              "name": "Cultism",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "cultism",
              "created_at": "2020-01-27T14:02:47.953Z",
              "updated_at": "2020-05-21T16:04:36.814Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e98f759f-0eaa-4e19-8801-025c30722f1f",
              "name": "Constitution",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Constitution",
              "created_at": "2020-01-27T14:02:33.348Z",
              "updated_at": "2020-05-21T16:04:36.827Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "709cc4f5-8c80-4424-97ed-a3a3740768d0",
              "name": "Conflict",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Conflict",
              "created_at": "2020-01-27T14:02:19.248Z",
              "updated_at": "2020-05-21T16:04:36.842Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7ea96fbd-4db8-49c7-9070-74bc50f11a3a",
              "name": "Community Development",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Community Development",
              "created_at": "2020-01-27T14:02:06.704Z",
              "updated_at": "2020-05-21T16:04:36.853Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 41,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ac25b154-5c87-4097-8862-f20e74365f66",
              "name": "Common crime",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Common crime",
              "created_at": "2020-01-27T14:01:48.984Z",
              "updated_at": "2020-05-21T16:04:36.866Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "13ee3adf-3f48-4266-8483-a392c6720f93",
              "name": "Civil society",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Civil society",
              "created_at": "2020-01-27T14:01:31.535Z",
              "updated_at": "2020-05-21T16:04:36.881Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 35,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6b7b4746-f1ef-4b6b-85ec-8312902a81f8",
              "name": "Civil responsibility",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Civil responsibility",
              "created_at": "2020-01-27T14:01:14.349Z",
              "updated_at": "2020-05-21T16:04:36.893Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8c99cf67-9cec-4e5a-9990-62537758feeb",
              "name": "Citizenship",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Citizenship",
              "created_at": "2020-01-27T14:00:52.047Z",
              "updated_at": "2020-05-21T16:04:36.906Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "66cf06da-233d-444d-845d-1eb5608d3a7a",
              "name": "Citizenship Education",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Citizenship Education",
              "created_at": "2020-01-27T14:00:33.207Z",
              "updated_at": "2020-05-21T16:04:36.920Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fb0360c7-3951-4534-84ab-50598cc2465f",
              "name": "Checks and Balances",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": true,
              "description": "Checks and Balances",
              "created_at": "2020-01-27T14:00:17.602Z",
              "updated_at": "2020-05-21T16:04:36.931Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "29e125c0-0c7c-42b2-9ac2-c25681bfae00",
              "name": "British colonial",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "British colonial",
              "created_at": "2020-01-27T13:59:56.703Z",
              "updated_at": "2020-05-21T16:04:36.941Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d46d407a-a107-4d89-96c2-80cb8f7271be",
              "name": "Bicameralism",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Bicameralism",
              "created_at": "2020-01-27T13:59:33.553Z",
              "updated_at": "2020-05-21T16:04:36.956Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4c71eb3b-51f3-4cc4-9e7d-bab5cd30a591",
              "name": "Authority",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "rank": null,
              "active": false,
              "description": "Authority",
              "created_at": "2020-01-27T13:59:13.668Z",
              "updated_at": "2020-05-21T16:04:36.998Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "e2f51db5-f947-49e0-aaca-f9667e5594a4",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "title": "2019",
              "created_at": "2020-01-28T09:14:39.394Z",
              "updated_at": "2020-05-21T16:03:53.979Z",
              "questions_count": 556
          },
          {
              "id": "6b3cdfdf-1274-4956-a919-ee81be47ced8",
              "course_id": "fe40fac4-be70-4333-965e-9d1b5fa9c0d5",
              "title": "2016",
              "created_at": "2020-01-27T13:58:51.243Z",
              "updated_at": "2020-05-21T16:03:53.999Z",
              "questions_count": 0
          }
      ]
  },
  {
      "id": "9dec7449-47bb-4896-9660-d741b9bd049c",
      "created_at": "2020-01-27T09:42:25.581Z",
      "updated_at": "2020-05-27T14:15:47.659Z",
      "errors": {},
      "slug": "business-studies-jss",
      "questions_count": 1254,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Business Studies JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Business Studies JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "2e12eb61-07c0-42d4-a8aa-20134b01818e",
          "email": "jamb@smartuptech.com",
          "authentication_token": "m3b77kvDkFHYazsAbxFt",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:18:51.696Z",
          "updated_at": "2021-03-15T23:52:20.708Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "jamb",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "2778d9d9-9b1a-4ae7-871b-5b972a1269f9",
              "name": "Petty Cashbook",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Petty Cashbook",
              "created_at": "2020-01-29T11:32:17.534Z",
              "updated_at": "2020-05-21T16:04:36.208Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9f07304f-b8de-4f02-8055-c4e9c2fac03e",
              "name": "Trial Balance ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Trial Balance ",
              "created_at": "2020-01-29T11:23:31.762Z",
              "updated_at": "2020-05-21T16:04:36.218Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ecbda36b-06ba-4dd0-abba-4c6623ec6e8c",
              "name": "Assets ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Assets ",
              "created_at": "2020-01-29T11:15:33.418Z",
              "updated_at": "2020-05-21T16:04:36.229Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c254d410-86c4-4187-b54a-9977322c671f",
              "name": "Retailer",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Retailer Topic",
              "created_at": "2020-01-28T11:33:03.035Z",
              "updated_at": "2020-05-21T16:04:36.256Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "54a10822-fc70-4901-b31a-43373974db3e",
              "name": "Office Practice ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Office Practice ",
              "created_at": "2020-01-28T11:25:49.183Z",
              "updated_at": "2020-05-21T16:04:36.274Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9747cf92-1997-4026-a74e-52eb19ecb55b",
              "name": "Receptionist",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Receptionist",
              "created_at": "2020-01-28T11:21:25.847Z",
              "updated_at": "2020-05-21T16:04:36.322Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 37,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "885c5175-ea2f-495e-b21a-5d5051c874bb",
              "name": "Keyboard Vol2",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Keyboard Vol2",
              "created_at": "2020-01-28T11:11:43.952Z",
              "updated_at": "2020-05-21T16:04:36.334Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 64,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1fa76f2a-e39b-4bc9-af9a-a3794bdca1b5",
              "name": "Cheque",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Cheque Topic",
              "created_at": "2020-01-28T11:02:07.304Z",
              "updated_at": "2020-05-21T16:04:36.346Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1c21a99a-4553-430d-9a1e-11ac8981addb",
              "name": "Partnership",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Partnership",
              "created_at": "2020-01-28T10:44:15.049Z",
              "updated_at": "2020-05-21T16:04:36.359Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "62ccee77-e51e-4a96-8068-fe5d40fce780",
              "name": "Keyboard Vol1",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Keyboard Vol1",
              "created_at": "2020-01-28T10:32:59.109Z",
              "updated_at": "2020-05-21T16:04:36.370Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "46073412-dafe-476d-88dd-dde2d766a0fd",
              "name": "Business ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Business",
              "created_at": "2020-01-28T10:21:53.873Z",
              "updated_at": "2020-05-21T16:04:36.383Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 134,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "16e27fb6-5ecb-41ef-b79a-13ba963b31c2",
              "name": "Short Hand Vol2",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Short Hand Vol2",
              "created_at": "2020-01-28T10:16:22.535Z",
              "updated_at": "2020-05-21T16:04:36.409Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 116,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d14f0402-818c-44ce-ac9a-a298567584fd",
              "name": "Short Hand Vol1",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Short Hand Vol1",
              "created_at": "2020-01-28T09:48:21.620Z",
              "updated_at": "2020-05-21T16:04:36.423Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9e0e9001-2ccb-4c4d-9406-113af786f329",
              "name": "Ledger",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Ledger Topic",
              "created_at": "2020-01-27T11:05:04.085Z",
              "updated_at": "2020-05-21T16:04:37.025Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ceaf8167-443d-4a2b-9f75-e2a884b8d57e",
              "name": "Computer Devices ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Computer Devices ",
              "created_at": "2020-01-27T10:47:04.229Z",
              "updated_at": "2020-05-21T16:04:37.037Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2750d139-28a1-4d43-9b4a-213942cf90a3",
              "name": "Book Keeping",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Book Keeping",
              "created_at": "2020-01-27T10:12:38.651Z",
              "updated_at": "2020-05-21T16:04:37.054Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2dfe2e03-d1a9-4f4d-80a6-11adff24314a",
              "name": "Aid to Trade ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Aid to Trade ",
              "created_at": "2020-01-27T10:11:43.410Z",
              "updated_at": "2020-05-21T16:04:37.069Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a76e06c0-8f87-4b84-a4ba-1cd07bddf7d3",
              "name": "Advertising ",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Advertising ",
              "created_at": "2020-01-27T10:01:10.157Z",
              "updated_at": "2020-05-21T16:04:37.084Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1b620df0-62e4-4faa-aad0-10d2fba8eda9",
              "name": "Account",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "rank": null,
              "active": true,
              "description": "Account",
              "created_at": "2020-01-27T09:43:37.929Z",
              "updated_at": "2020-05-21T16:04:37.098Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "3fc10939-6853-4c7c-adfe-0faa2251f968",
              "course_id": "9dec7449-47bb-4896-9660-d741b9bd049c",
              "title": "2019",
              "created_at": "2020-01-27T09:44:19.280Z",
              "updated_at": "2020-05-21T16:03:54.082Z",
              "questions_count": 627
          }
      ]
  },
  {
      "id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
      "created_at": "2020-01-24T13:30:38.601Z",
      "updated_at": "2020-05-27T14:15:47.741Z",
      "errors": {},
      "slug": "basic-electronics-jss",
      "questions_count": 346,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Basic Electronics",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Basic Electronics",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "1bdd3d26-af05-40b5-94b4-193784af7f69",
              "name": "Measuring Instrument ",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Measuring Instrument ",
              "created_at": "2020-01-29T12:33:25.176Z",
              "updated_at": "2020-05-21T16:04:36.173Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ac41af89-99ef-49aa-a536-a450b765f766",
              "name": "Woodwork",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Woodwork",
              "created_at": "2020-01-29T12:24:33.555Z",
              "updated_at": "2020-05-21T16:04:36.184Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 34,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8e1abe79-3288-47d9-ad2b-0b089df42ae2",
              "name": "Electrical And Magnetic Field ",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Electrical And Magnetic Field ",
              "created_at": "2020-01-29T12:00:55.412Z",
              "updated_at": "2020-05-21T16:04:36.195Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "98e5ddee-fa85-4903-ace4-0c67cbade0b1",
              "name": "Career in Technology ",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Career in Technology ",
              "created_at": "2020-01-27T09:19:40.270Z",
              "updated_at": "2020-05-21T16:04:37.113Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a8ab484d-6799-447b-af9b-ca46e37c1748",
              "name": "Free Hand Sketching ",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Free Hand Sketching",
              "created_at": "2020-01-24T16:23:54.360Z",
              "updated_at": "2020-05-21T16:04:37.127Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "33efa280-a5a6-41d0-9b27-3e8f894573c9",
              "name": "Classification Of Metals",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Classification Of Metals ",
              "created_at": "2020-01-24T16:13:00.411Z",
              "updated_at": "2020-05-21T16:04:37.152Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ef8d8743-8972-4597-8d2c-a72b6268b9b3",
              "name": "Drawing Practice ",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Drawing Practice",
              "created_at": "2020-01-24T15:59:49.928Z",
              "updated_at": "2020-05-21T16:04:37.171Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1539c86a-af96-4743-9360-b34ef50ea3e7",
              "name": "Workshop",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Workshop Topic",
              "created_at": "2020-01-24T15:53:02.029Z",
              "updated_at": "2020-05-21T16:04:37.183Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "55a8da20-34a1-4c30-a93e-d67b5d388417",
              "name": "Metals",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Metals Topic",
              "created_at": "2020-01-24T15:51:28.881Z",
              "updated_at": "2020-05-21T16:04:37.197Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "615000fd-6b0a-45c7-a217-8fdabf230f66",
              "name": "Energy",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Energy Topic",
              "created_at": "2020-01-24T15:50:12.679Z",
              "updated_at": "2020-05-21T16:04:37.211Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "34a31858-a426-4da4-aeb4-24d42f2ded47",
              "name": "Building",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Building Topic",
              "created_at": "2020-01-24T15:47:39.988Z",
              "updated_at": "2020-05-21T16:04:37.224Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "af9b77f1-75d1-46c9-a2e3-51ca5b5ca359",
              "name": "Board Practice",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "rank": null,
              "active": true,
              "description": "Board Practice",
              "created_at": "2020-01-24T13:36:09.213Z",
              "updated_at": "2020-05-21T16:04:37.236Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "b8bfb300-92a9-488f-a24b-7a04292d415e",
              "course_id": "99d1219f-eaaf-45c3-b6b9-b3d107463a4e",
              "title": "2019",
              "created_at": "2020-01-24T13:36:27.583Z",
              "updated_at": "2020-05-21T16:03:54.327Z",
              "questions_count": 173
          }
      ]
  },
  {
      "id": "535d7f29-7be0-406c-ab00-69c627c288d4",
      "created_at": "2020-01-22T15:56:53.769Z",
      "updated_at": "2020-05-27T14:15:47.783Z",
      "errors": {},
      "slug": "literature-in-english",
      "questions_count": 2004,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Literature in English JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": null,
      "description": "Literature in English JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "873cd89b-b196-4100-8d03-7a2b79b28ae6",
              "name": "Prose vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Prose vol 3",
              "created_at": "2020-01-22T16:04:47.421Z",
              "updated_at": "2020-05-21T16:04:37.267Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 55,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4aa76d39-df4e-4724-908f-be7839337a95",
              "name": "Prose vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Prose vol 2",
              "created_at": "2020-01-22T16:04:36.378Z",
              "updated_at": "2020-05-21T16:04:37.281Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0b2ef2b7-4770-406d-abf0-7fd36fa1693c",
              "name": "Prose vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Prose vol 1",
              "created_at": "2020-01-22T16:04:24.569Z",
              "updated_at": "2020-05-21T16:04:37.297Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 52,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9110c5f0-db52-4187-89f5-1cc89acc592c",
              "name": "Peotry vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Peotry vol 3",
              "created_at": "2020-01-22T16:04:05.822Z",
              "updated_at": "2020-05-21T16:04:37.311Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 41,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b36a25e2-cff5-4b43-b1e6-d4c375e101c7",
              "name": "Peotry vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Peotry vol 2",
              "created_at": "2020-01-22T16:03:54.987Z",
              "updated_at": "2020-05-21T16:04:37.328Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "155b3f56-2a26-466d-87e4-6f0c13e2a31b",
              "name": "Peotry vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Peotry vol 1",
              "created_at": "2020-01-22T16:03:44.369Z",
              "updated_at": "2020-05-21T16:04:37.348Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6c456c76-4664-496e-8d7f-92a0f0f5780c",
              "name": "Literary device vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Literary device vol 3",
              "created_at": "2020-01-22T16:03:10.949Z",
              "updated_at": "2020-05-21T16:04:37.362Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 62,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ddd1b6b5-986d-48f7-83d9-f3b7b489f77e",
              "name": "Literary device vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Literary device vol 2",
              "created_at": "2020-01-22T16:02:59.230Z",
              "updated_at": "2020-05-21T16:04:37.375Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "703806a6-6ef8-499c-b3fd-ddc40c0b37b8",
              "name": "Literary device vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Literary device vol 1",
              "created_at": "2020-01-22T16:01:39.481Z",
              "updated_at": "2020-05-21T16:04:37.385Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ebb953a7-0714-460a-8d10-21e1fec29d65",
              "name": "General literature vol 4",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "General literature vol 4",
              "created_at": "2020-01-22T16:01:03.817Z",
              "updated_at": "2020-05-21T16:04:37.397Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c7f2be7c-9486-4d41-9f5e-6c5d62883af7",
              "name": "General literature vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "General literature vol 3",
              "created_at": "2020-01-22T16:00:50.777Z",
              "updated_at": "2020-05-21T16:04:37.416Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65da5d99-05cf-4686-9911-560ae1fc7f89",
              "name": "General literature vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "General literature vol 2",
              "created_at": "2020-01-22T16:00:40.339Z",
              "updated_at": "2020-05-21T16:04:37.428Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6c97557d-9048-4372-a6bb-a036a765b8ae",
              "name": "General literature vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "General literature vol 1",
              "created_at": "2020-01-22T16:00:28.919Z",
              "updated_at": "2020-05-21T16:04:37.447Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5c14ace2-611b-4ef7-b009-368634e84ab6",
              "name": "Figure of speech vol 4",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Figure of speech vol 4",
              "created_at": "2020-01-22T15:59:49.634Z",
              "updated_at": "2020-05-21T16:04:37.458Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "90f4dc82-bd0d-4e29-8f9b-249bb4b72fcc",
              "name": "Figure of speech vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Figure of speech vol 3",
              "created_at": "2020-01-22T15:59:29.581Z",
              "updated_at": "2020-05-21T16:04:37.473Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2d318ed3-6c80-41a9-8333-7abbb5d5d246",
              "name": "Figure of speech vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Figure of speech vol 2",
              "created_at": "2020-01-22T15:59:16.433Z",
              "updated_at": "2020-05-21T16:04:37.487Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f32165ac-89c9-43fa-a146-bdb40fe8964c",
              "name": "Figure of speech vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Figure of speech vol 1",
              "created_at": "2020-01-22T15:58:20.240Z",
              "updated_at": "2020-05-21T16:04:37.503Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a714f017-f14b-42ef-be27-18b0d29aaf2e",
              "name": "Drama vol 3",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Drama vol 3",
              "created_at": "2020-01-22T15:58:20.238Z",
              "updated_at": "2020-05-21T16:04:37.515Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 60,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e27bc05d-69df-456b-9a0b-4d60ff81cfcc",
              "name": "Drama vol 2",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Drama vol 2",
              "created_at": "2020-01-22T15:58:05.133Z",
              "updated_at": "2020-05-21T16:04:37.527Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 56,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "22a48c39-9fe8-49fc-b8d9-9707b0471dcf",
              "name": "Drama vol 1",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "rank": null,
              "active": true,
              "description": "Drama vol 1",
              "created_at": "2020-01-22T15:57:32.681Z",
              "updated_at": "2020-05-21T16:04:37.542Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 55,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "e6346be3-e223-4918-91a9-cd3c945ecea0",
              "course_id": "535d7f29-7be0-406c-ab00-69c627c288d4",
              "title": "2019",
              "created_at": "2020-01-22T15:57:42.197Z",
              "updated_at": "2020-05-21T16:03:54.445Z",
              "questions_count": 1002
          }
      ]
  },
  {
      "id": "f99b2102-1182-4f3d-928f-b7b91381056c",
      "created_at": "2020-01-22T11:08:45.765Z",
      "updated_at": "2020-05-27T14:15:47.798Z",
      "errors": {},
      "slug": "chemistry",
      "questions_count": 1202,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Chemistry",
      "category": "general",
      "rank": "senior",
      "course_image_url": "https://smartuptech-prod.s3.amazonaws.com/uploads/course/course_image/f99b2102-1182-4f3d-928f-b7b91381056c/chemistry.png",
      "description": "Chemistry course",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "9fecff09-c118-4fb2-9732-925280d72a4a",
              "name": "Ethical, Legal & Social Issues",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Ethical, Legal & Social Issues",
              "created_at": "2020-05-11T09:29:55.328Z",
              "updated_at": "2020-05-21T16:04:29.787Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "964fd116-2542-4647-9cae-a4dbcb3d8f47",
              "name": "Giant Molecules",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Giant Molecules",
              "created_at": "2020-05-11T09:23:58.426Z",
              "updated_at": "2020-05-21T16:04:29.804Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b6f89da4-4ee2-4043-9130-39b4a818998c",
              "name": "Soap & Detergents",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Soap & Detergents",
              "created_at": "2020-05-11T09:14:06.909Z",
              "updated_at": "2020-05-21T16:04:29.820Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "680ee42d-0e19-4422-ab97-23017566a880",
              "name": "Fats & Oil",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Fats & Oil",
              "created_at": "2020-05-11T08:17:47.874Z",
              "updated_at": "2020-05-21T16:04:29.838Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "99e88967-dbab-4210-9894-a248b60f56f0",
              "name": "Iron",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Iron",
              "created_at": "2020-05-11T08:15:55.567Z",
              "updated_at": "2020-05-21T16:04:29.853Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3002b3cb-7517-4812-beca-1476402405b5",
              "name": "Metals and Their Compounds",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Metals and Their Compounds",
              "created_at": "2020-05-11T08:09:20.524Z",
              "updated_at": "2020-05-21T16:04:29.870Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ddd234bb-a6cb-49de-ad9d-331277df4aed",
              "name": "Ionic Theory",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Ionic Theory",
              "created_at": "2020-05-11T07:55:37.197Z",
              "updated_at": "2020-05-21T16:04:29.884Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "91c872eb-254f-4fcf-bbe4-23d7dad0e1d7",
              "name": "Oxidation-Reduction (Redox) Reactions",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Oxidation-Reduction (Redox) Reactions",
              "created_at": "2020-05-11T07:53:28.923Z",
              "updated_at": "2020-05-21T16:04:29.897Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5a6a04b6-4c81-443e-800d-946081c8730f",
              "name": "Sulphur",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Sulphur",
              "created_at": "2020-05-11T07:49:56.456Z",
              "updated_at": "2020-05-21T16:04:29.913Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "96b2f9d7-257a-480b-ac72-98e4542230e5",
              "name": "Nitrogen",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Nitrogen",
              "created_at": "2020-05-11T07:47:33.518Z",
              "updated_at": "2020-05-21T16:04:29.927Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "db630662-53ea-4ca8-bfb5-12fe31e9832e",
              "name": "Halogen",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Halogen",
              "created_at": "2020-05-11T07:40:56.701Z",
              "updated_at": "2020-05-21T16:04:29.940Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "818303d8-33f4-40a2-a49c-0a0a94ad0efd",
              "name": "Oxygen",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Oxygen",
              "created_at": "2020-05-11T07:37:18.835Z",
              "updated_at": "2020-05-21T16:04:29.955Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "dfb4d18a-60cd-4f9e-a791-45028dec23cf",
              "name": "Hydrogen",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Hydrogen",
              "created_at": "2020-05-11T07:34:36.188Z",
              "updated_at": "2020-05-21T16:04:29.977Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2989b427-f533-4599-9501-c6d5ec89d81e",
              "name": "Air",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Air",
              "created_at": "2020-05-11T07:33:19.847Z",
              "updated_at": "2020-05-21T16:04:29.998Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5ecfe8e9-836c-451d-a31a-772ed56ef488",
              "name": "Mass Volume Relationship",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Mass Volume Relationship",
              "created_at": "2020-05-11T07:28:19.141Z",
              "updated_at": "2020-05-21T16:04:30.025Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9c45545c-4061-405d-b7da-eee856d8aebe",
              "name": "Chemical Reactions",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Chemical Reactions",
              "created_at": "2020-05-11T07:24:47.976Z",
              "updated_at": "2020-05-21T16:04:30.049Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "30a9f01e-5aec-44d9-9cce-a6151d14c615",
              "name": "Alkanols",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "ALKANOLS",
              "created_at": "2020-05-11T07:19:24.440Z",
              "updated_at": "2020-05-21T16:04:30.065Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7e9411cd-fe9a-457c-b98b-af92ec64a345",
              "name": "Petroleum or Crude Oil",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Petroleum or Crude Oil",
              "created_at": "2020-05-11T03:14:36.147Z",
              "updated_at": "2020-05-21T16:04:30.082Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d7548893-35f3-4708-b818-bebf901608f9",
              "name": "Hydrocarbons",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Hydrocarbon",
              "created_at": "2020-05-11T03:11:14.580Z",
              "updated_at": "2020-05-21T16:04:30.104Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1da6e07c-a666-4778-9f1e-89ad191b8a1d",
              "name": "Carbon",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Carbon",
              "created_at": "2020-05-11T03:05:41.092Z",
              "updated_at": "2020-05-21T16:04:30.121Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f7e452ca-17f0-49b6-94d4-e063a5c1797c",
              "name": "Water",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "WATER",
              "created_at": "2020-05-11T03:02:51.823Z",
              "updated_at": "2020-05-21T16:04:30.139Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a713f2ad-2a97-4f0f-a0e3-ae74f215cea0",
              "name": "Symbols, Formulae & Equation",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Symbols, Formulae and Equation",
              "created_at": "2020-05-11T02:52:24.845Z",
              "updated_at": "2020-05-21T16:04:30.151Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "28e654b1-4dfc-4cf5-9783-7b919fe396eb",
              "name": "Particular Nature of Matter",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Particular Nature of Matter",
              "created_at": "2020-05-11T02:44:42.353Z",
              "updated_at": "2020-05-21T16:04:30.165Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7f5b58a9-91dc-4854-ba22-4e4f181fec7b",
              "name": "Standard Seperation Techniques for Mixtures",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Standard Seperation Techniques for Mixtures",
              "created_at": "2020-05-11T02:40:44.507Z",
              "updated_at": "2020-05-21T16:04:30.180Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3d9378bc-ec44-4fad-a8cd-653a5e7c6dec",
              "name": "Chemical Industries",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Chemical Industries",
              "created_at": "2020-05-11T02:38:26.760Z",
              "updated_at": "2020-05-21T16:04:30.197Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "379e569d-1362-4650-aa98-53241ab360e9",
              "name": "Intro to Chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Intro to Chemistry",
              "created_at": "2020-05-11T02:35:10.378Z",
              "updated_at": "2020-05-21T16:04:30.212Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "517b7bb2-29e4-4815-988b-9bd69a08397f",
              "name": "Stoichiometry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Stoichiometry",
              "created_at": "2020-01-22T11:18:59.452Z",
              "updated_at": "2020-05-21T16:04:37.556Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d935c81-9ecb-4dc9-8701-8ef9b855f4bb",
              "name": "Reactions",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Rate kinetics",
              "created_at": "2020-01-22T11:18:07.745Z",
              "updated_at": "2020-05-21T16:04:37.567Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "637ede52-6ad3-4e50-b751-e360d3b3fe11",
              "name": "Rate kinetics",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Rate kinetics",
              "created_at": "2020-01-22T11:17:53.849Z",
              "updated_at": "2020-05-21T16:04:37.579Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "41cf8651-f1e0-4b86-b848-adc10bd9d435",
              "name": "Periodicity of elements vol 5",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Periodicity of elements vol 5",
              "created_at": "2020-01-22T11:17:32.373Z",
              "updated_at": "2020-05-21T16:04:37.593Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 63,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "eba6ccec-11c6-473b-a375-c4728bd841e8",
              "name": "Periodicity of elements vol 4",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Periodicity of elements vol 4",
              "created_at": "2020-01-22T11:17:16.119Z",
              "updated_at": "2020-05-21T16:04:37.610Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bbd9df91-943e-4f05-8840-a7f7af9ab474",
              "name": "Periodicity of elements vol 3",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Periodicity of elements vol 3",
              "created_at": "2020-01-22T11:17:02.171Z",
              "updated_at": "2020-05-21T16:04:37.629Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "abef225a-61a0-4a7e-b443-457f2ed169f0",
              "name": "Periodicity of elements vol 2",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Periodicity of elements vol 2",
              "created_at": "2020-01-22T11:16:44.421Z",
              "updated_at": "2020-05-21T16:04:37.644Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "86d915f9-28bf-416a-bea7-a83ad5956a3d",
              "name": "Periodicity of elements vol 1",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Periodicity of elements vol 1",
              "created_at": "2020-01-22T11:16:28.153Z",
              "updated_at": "2020-05-21T16:04:37.657Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a2caaec6-b907-4f3e-a601-75f8a717547c",
              "name": "Organic chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Organic chemistry",
              "created_at": "2020-01-22T11:16:05.999Z",
              "updated_at": "2020-05-21T16:04:37.670Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 71,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "af7228db-e194-45e8-a053-44d9f7496b99",
              "name": "Nuclear chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Nuclear chemistry",
              "created_at": "2020-01-22T11:15:45.598Z",
              "updated_at": "2020-05-21T16:04:37.684Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "22370331-289d-4d9c-8c56-e50781fe3683",
              "name": "Matter",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Matter",
              "created_at": "2020-01-22T11:15:26.829Z",
              "updated_at": "2020-05-21T16:04:37.700Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "39ca270c-2e47-43fc-a7a9-73e840e115a9",
              "name": "Kinetic theory of matter",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Kinetic theory of matter",
              "created_at": "2020-01-22T11:15:13.013Z",
              "updated_at": "2020-05-21T16:04:37.718Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "60667658-e3e7-4c32-886b-1d486762492b",
              "name": "Industrial chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Industrial chemistry",
              "created_at": "2020-01-22T11:14:52.814Z",
              "updated_at": "2020-05-21T16:04:37.731Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3c52a992-4035-4725-b101-82967b265901",
              "name": "General chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "General chemistry",
              "created_at": "2020-01-22T11:14:33.885Z",
              "updated_at": "2020-05-21T16:04:37.745Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a8c0cf33-1496-47c7-acc4-fa8e951cfefb",
              "name": "Gas laws",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Gas laws",
              "created_at": "2020-01-22T11:14:08.705Z",
              "updated_at": "2020-05-21T16:04:37.762Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "918837f0-682b-4beb-845e-b7ae40873362",
              "name": "Experimental chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Experimental chemistry",
              "created_at": "2020-01-22T11:13:52.233Z",
              "updated_at": "2020-05-21T16:04:37.775Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 41,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "711aa5a7-1c51-4367-9dfc-1965cd3f55cd",
              "name": "Environmental chemistry",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Environmental chemistry",
              "created_at": "2020-01-22T11:13:34.747Z",
              "updated_at": "2020-05-21T16:04:37.788Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "69ba7efa-3c34-4006-ba01-0034473a455d",
              "name": "Electrolysis",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Electrolysis",
              "created_at": "2020-01-22T11:12:53.819Z",
              "updated_at": "2020-05-21T16:04:37.803Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f854073d-645a-4cdb-a8a9-06385ff18249",
              "name": "Descriptive chemistry vol 2",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": false,
              "description": "Descriptive chemistry vol 2",
              "created_at": "2020-01-22T11:12:34.742Z",
              "updated_at": "2020-05-21T16:04:37.817Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 31,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c4400e26-7d34-4eb3-b0b8-e9c41855b28a",
              "name": "Descriptive chemistry vol 1",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Descriptive chemistry vol 1",
              "created_at": "2020-01-22T11:12:21.690Z",
              "updated_at": "2020-05-21T16:04:37.831Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "48c29963-e9de-4f50-989c-c3e16aecc62f",
              "name": "Chemical equilibrium",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Chemical equilibrium",
              "created_at": "2020-01-22T11:11:56.956Z",
              "updated_at": "2020-05-21T16:04:37.843Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b8aaf375-d0a9-413b-9eb7-a3169569b1a4",
              "name": "Chemical Combination",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Chemical bonding",
              "created_at": "2020-01-22T11:11:39.079Z",
              "updated_at": "2020-05-21T16:04:37.855Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f3f072a5-4602-4c97-92f4-35bf25f05715",
              "name": "Atomic structure",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Atomic structure",
              "created_at": "2020-01-22T11:11:22.117Z",
              "updated_at": "2020-05-21T16:04:37.867Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "79e5d1b3-02c9-4307-8490-daec94a04aa4",
              "name": "Acid, bases and salt",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "rank": null,
              "active": true,
              "description": "Acid, bases and salt",
              "created_at": "2020-01-22T11:11:01.621Z",
              "updated_at": "2020-05-21T16:04:37.879Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "7f58aae0-6cd2-4baa-aab2-c8788c32621d",
              "course_id": "f99b2102-1182-4f3d-928f-b7b91381056c",
              "title": "2019",
              "created_at": "2020-01-22T11:10:27.959Z",
              "updated_at": "2020-05-21T16:03:54.457Z",
              "questions_count": 601
          }
      ]
  },
  {
      "id": "241e6657-d666-48db-8386-f76919806e74",
      "created_at": "2020-01-21T09:43:20.400Z",
      "updated_at": "2020-05-27T14:15:47.817Z",
      "errors": {},
      "slug": "commerce-98130168-a4ea-40bf-9481-11ca240db4b8",
      "questions_count": 886,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Accounts",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "commerce questions",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "382235a8-1196-4011-8ebc-4f19e230b3cc",
              "name": "Financial statement",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": false,
              "description": "Financial statement",
              "created_at": "2020-05-20T00:36:58.719Z",
              "updated_at": "2020-05-21T16:04:29.145Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aaca1712-63b6-4f3a-95d4-31033b052dc9",
              "name": "Ledgers",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "ledgers",
              "created_at": "2020-04-22T00:42:03.183Z",
              "updated_at": "2020-05-21T16:04:31.456Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "418620e5-fdee-4383-a168-cc04d6c246b1",
              "name": "Intro to acounting",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Intro to acounting",
              "created_at": "2020-04-22T00:41:27.412Z",
              "updated_at": "2020-05-21T16:04:31.467Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "711d74cf-6038-43d5-accf-890e206a536b",
              "name": "Expenditure",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "expenditure",
              "created_at": "2020-04-22T00:40:51.956Z",
              "updated_at": "2020-05-21T16:04:31.483Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ccfcd7fd-f380-4c09-b47f-c5185dc57880",
              "name": "Depreciation of assets",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Depreciation of assets",
              "created_at": "2020-04-22T00:38:18.532Z",
              "updated_at": "2020-05-21T16:04:31.501Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b8a03f32-cbfc-486e-80f3-fcba5ef57e56",
              "name": "Control accounts",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "control accounts",
              "created_at": "2020-04-22T00:34:37.850Z",
              "updated_at": "2020-05-21T16:04:31.515Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "24210194-6bb0-46b7-84e2-0ba1189e7a37",
              "name": "Bank reconciliation statement",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Bank reconciliation statement",
              "created_at": "2020-04-22T00:33:54.933Z",
              "updated_at": "2020-05-21T16:04:31.525Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "815a49d1-dea4-49d9-8ab9-ddb0b768e438",
              "name": "Accounting equation",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Accounting equation",
              "created_at": "2020-04-22T00:33:05.414Z",
              "updated_at": "2020-05-21T16:04:31.536Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "19e468df-907f-433a-b622-dafa6f98b017",
              "name": "single entry account",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": false,
              "description": "single entry account",
              "created_at": "2020-01-21T09:49:09.205Z",
              "updated_at": "2020-05-21T16:04:38.377Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "70722fc6-c43e-417f-bac0-3f163f28038e",
              "name": "reserves and provision",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": false,
              "description": "reserves and provision",
              "created_at": "2020-01-21T09:48:54.008Z",
              "updated_at": "2020-05-21T16:04:38.389Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d4ebac2-e29d-4d5d-9c00-0a9054459056",
              "name": "real estate",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "real estate",
              "created_at": "2020-01-21T09:48:38.957Z",
              "updated_at": "2020-05-21T16:04:38.403Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2db5bdd6-d24c-48ec-a2d5-705b56e29fc8",
              "name": "partnership",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "partnership",
              "created_at": "2020-01-21T09:48:23.482Z",
              "updated_at": "2020-05-21T16:04:38.415Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2d93c183-59fa-43b4-92fd-df8660443b53",
              "name": "partnership accounts",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": false,
              "description": "partnership accounts",
              "created_at": "2020-01-21T09:48:07.327Z",
              "updated_at": "2020-05-21T16:04:38.428Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 38,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8723122f-4805-4595-bee1-4325f6b15406",
              "name": "manufacturing accounts",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": false,
              "description": "manufacturing accounts",
              "created_at": "2020-01-21T09:47:52.012Z",
              "updated_at": "2020-05-21T16:04:38.442Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3e39f74a-df00-4463-8938-2021d6dcf32f",
              "name": "final accounts vol 2",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "final accounts vol 2",
              "created_at": "2020-01-21T09:47:17.264Z",
              "updated_at": "2020-05-21T16:04:38.453Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 64,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "26adecbc-1722-4563-bc20-a6dfc1405700",
              "name": "final accounts vol 1",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "final accounts vol 1",
              "created_at": "2020-01-21T09:47:03.080Z",
              "updated_at": "2020-05-21T16:04:38.469Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 52,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0ef70665-aedb-4020-9ff3-ea8a6bb0c40b",
              "name": "company account",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "company account",
              "created_at": "2020-01-21T09:46:42.618Z",
              "updated_at": "2020-05-21T16:04:38.482Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "630019d2-19a2-487b-b1c2-d78f679ad54b",
              "name": "cash/petty cash book",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "cash/petty cash book",
              "created_at": "2020-01-21T09:46:21.436Z",
              "updated_at": "2020-05-21T16:04:38.497Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "12642e51-19b5-4e92-a5b3-653bbea93fe1",
              "name": "capital and revenue expenditure",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "capital and revenue expenditure",
              "created_at": "2020-01-21T09:45:49.895Z",
              "updated_at": "2020-05-21T16:04:38.513Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ded015d3-c23d-4413-bff1-e89e8750c9e2",
              "name": "Branch accounts",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Branch accounts",
              "created_at": "2020-01-21T09:45:30.691Z",
              "updated_at": "2020-05-21T16:04:38.527Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4974a8f4-09b4-454c-8b9c-a55d6d245f80",
              "name": "Balance sheet",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Balance sheet",
              "created_at": "2020-01-21T09:45:14.659Z",
              "updated_at": "2020-05-21T16:04:38.547Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4cfcda0d-a899-4ce9-b84e-fa785fdc772a",
              "name": "Accounting Basics",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "rank": null,
              "active": true,
              "description": "Accounting Basics",
              "created_at": "2020-01-21T09:44:20.677Z",
              "updated_at": "2020-05-21T16:04:38.565Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 38,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "9f3b88e2-89a8-49ed-b979-228cd60dc0c9",
              "course_id": "241e6657-d666-48db-8386-f76919806e74",
              "title": "2019",
              "created_at": "2020-01-21T09:49:22.359Z",
              "updated_at": "2020-05-21T16:03:54.474Z",
              "questions_count": 443
          }
      ]
  },
  {
      "id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
      "created_at": "2020-01-20T12:37:39.151Z",
      "updated_at": "2020-05-27T14:15:47.837Z",
      "errors": {},
      "slug": "biology-bd645259-0d98-4a82-9535-e5b59f8d290c",
      "questions_count": 2008,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Biology",
      "category": "general",
      "rank": "senior",
      "course_image_url": "https://smartuptech-prod.s3.amazonaws.com/uploads/course/course_image/85ce3713-a1a8-43f9-a3da-8a5fb01be67c/biology.png",
      "description": "Biology questions",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "934d0a17-15eb-4c05-87eb-bc22a1da9b1d",
              "name": "Biology of Heredity",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Biology of Heredity",
              "created_at": "2020-05-11T16:23:11.749Z",
              "updated_at": "2020-05-21T16:04:29.358Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3bb2f795-f243-42fd-bc80-23f51dc5af2b",
              "name": "Development of Seeds And Fruits",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Development Of Seeds And Fruits",
              "created_at": "2020-05-11T16:19:30.738Z",
              "updated_at": "2020-05-21T16:04:29.371Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c347b10e-3ca8-4ecf-9136-d2209417c153",
              "name": "Balance in Nature",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Balance in Nature",
              "created_at": "2020-05-11T15:51:01.625Z",
              "updated_at": "2020-05-21T16:04:29.383Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f4985dd4-5ff2-49e1-8684-5bb42668e8d0",
              "name": "Ecology of population",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "ecology of population",
              "created_at": "2020-05-11T15:47:26.391Z",
              "updated_at": "2020-05-21T16:04:29.399Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b873da0f-72f0-48f7-a8ec-e80b534a9620",
              "name": "Sense organs",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "sense organs",
              "created_at": "2020-05-11T15:43:59.529Z",
              "updated_at": "2020-05-21T16:04:29.411Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f87e0201-55af-4773-ab60-43138fa3dcdc",
              "name": "Structure And Function of A Neurone",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Structure And Function Of A Neurone",
              "created_at": "2020-05-11T15:42:55.683Z",
              "updated_at": "2020-05-21T16:04:29.423Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7ccd2032-1a3f-4f2f-a8be-05229b51a615",
              "name": "The Skin",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "The Skin",
              "created_at": "2020-05-11T15:39:47.749Z",
              "updated_at": "2020-05-21T16:04:29.435Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "da75ecb3-802a-4d4c-90c5-bc39b2ff16e4",
              "name": "Regulation Of Internal Environment ",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Regulation Of Internal Environment Continues Endocrine Glands\n",
              "created_at": "2020-05-11T15:38:58.948Z",
              "updated_at": "2020-05-21T16:04:29.447Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "18d4cb2d-331f-42aa-9883-fb650ebe6b46",
              "name": "Plant Hormones",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "plant hormones",
              "created_at": "2020-05-11T15:36:43.041Z",
              "updated_at": "2020-05-21T16:04:29.458Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "683445a5-5d88-4283-b5e3-90f90f5680fe",
              "name": "The Liver",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "The liver ",
              "created_at": "2020-05-11T15:34:12.744Z",
              "updated_at": "2020-05-21T16:04:29.470Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "823a91a9-d43f-4e15-8ef6-2010fc130f1e",
              "name": "Regulation of Internal Environment",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Regulation Of Internal Environment",
              "created_at": "2020-05-11T15:32:39.558Z",
              "updated_at": "2020-05-21T16:04:29.479Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "03c0db3f-c18e-4424-a6e3-bf5da8b2d641",
              "name": "Conservation of Natural Resources",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Conservation Of Natural Resources",
              "created_at": "2020-05-11T15:16:22.053Z",
              "updated_at": "2020-05-21T16:04:29.491Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1f1e0e3f-e91a-42d3-8bd1-706843f6e9d8",
              "name": "Pollution",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "pollution",
              "created_at": "2020-05-11T15:14:25.556Z",
              "updated_at": "2020-05-21T16:04:29.504Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "98c1e090-9843-46f9-9ac5-25b75e43fe57",
              "name": "Decomposition In Nature ",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Decomposition In Nature Ecological Management",
              "created_at": "2020-05-11T14:07:55.262Z",
              "updated_at": "2020-05-21T16:04:29.515Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2b820111-61e2-45b3-af17-b31647b1de27",
              "name": "Transport System",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Transport System",
              "created_at": "2020-05-11T13:43:04.196Z",
              "updated_at": "2020-05-21T16:04:29.526Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "503b4439-855b-4a36-8b2f-03ebc71556bc",
              "name": "Terrestrial Habitat",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Terrestrial Habitat",
              "created_at": "2020-05-11T13:33:38.669Z",
              "updated_at": "2020-05-21T16:04:29.537Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d1f2075-24c7-459b-b713-17059bbfac1f",
              "name": "Aquatic Habitat",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Aquatic Habitat",
              "created_at": "2020-05-11T13:31:48.104Z",
              "updated_at": "2020-05-21T16:04:29.549Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6df63336-671c-403e-a41b-4f9457a61534",
              "name": "Pest & Diseases of Agricultural Importance.",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Pest & Diseases of Agricultural Importance.",
              "created_at": "2020-05-11T13:04:28.502Z",
              "updated_at": "2020-05-21T16:04:29.563Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f8fbdd64-74dc-4d7a-822a-c752b72ca4e8",
              "name": "Effects of Agricultural Activities on Ecological System",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Effects of Agricultural Activities on Ecological System",
              "created_at": "2020-05-11T13:03:22.694Z",
              "updated_at": "2020-05-21T16:04:29.573Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1c03d352-79a1-4063-a5e3-c87615667a09",
              "name": "Relevance of Biology To Agriculture.",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Relevance of Biology To Agriculture.",
              "created_at": "2020-05-11T13:01:20.951Z",
              "updated_at": "2020-05-21T16:04:29.583Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b57fb19f-b242-492f-912b-6bbaaeb4ff68",
              "name": "Energy Transformation In Nature",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Energy Transformation In Nature",
              "created_at": "2020-05-11T12:41:27.145Z",
              "updated_at": "2020-05-21T16:04:29.593Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "245d3105-c073-446e-b27e-2886fc20816a",
              "name": "Trophic Levels",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Trophic Levels",
              "created_at": "2020-05-11T12:39:11.562Z",
              "updated_at": "2020-05-21T16:04:29.604Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bb2cd92f-2cd2-4f9d-b7c9-fdfb3396d873",
              "name": "Enzymes",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Enzymes",
              "created_at": "2020-05-11T10:40:18.029Z",
              "updated_at": "2020-05-21T16:04:29.627Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f79dc6ed-4150-4ec6-9065-524d109fe9d4",
              "name": "Mammalian Teeth",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Mammalian Teeth",
              "created_at": "2020-05-11T10:35:21.844Z",
              "updated_at": "2020-05-21T16:04:29.637Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "62bf736f-e0e1-4039-86b6-1a37c15a6a67",
              "name": "Mode of Nutrition",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Mode of Nutrition",
              "created_at": "2020-05-11T10:34:26.174Z",
              "updated_at": "2020-05-21T16:04:29.649Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "97e5009f-bfbc-4c91-8300-a0ed33a15331",
              "name": "Nutrition in Animals",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Nutrition in Animals",
              "created_at": "2020-05-11T10:32:40.521Z",
              "updated_at": "2020-05-21T16:04:29.662Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "faf13071-d8f1-4383-9602-6984e688ee1f",
              "name": "Supporting Tissue In Plants",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Supporting Tissue In Plants",
              "created_at": "2020-05-11T10:28:16.917Z",
              "updated_at": "2020-05-21T16:04:29.674Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c3a2e729-5728-4334-988c-5758b5b67566",
              "name": "Vertebrate Skeleton",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Vertebrate Skeleton",
              "created_at": "2020-05-11T10:25:14.916Z",
              "updated_at": "2020-05-21T16:04:29.686Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5d19aaa8-0d58-447e-bf8c-f7bd38c09c7b",
              "name": "Tissue & Supporting System",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Tissue and Supporting System",
              "created_at": "2020-05-11T10:23:19.583Z",
              "updated_at": "2020-05-21T16:04:29.701Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fd2b4037-9209-4bd6-a067-4aacf5fee848",
              "name": "Movement",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Movement",
              "created_at": "2020-05-11T10:08:42.634Z",
              "updated_at": "2020-05-21T16:04:29.715Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "86425db7-7e65-48d1-8320-af00aa3b4020",
              "name": "Irritability",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Irritability",
              "created_at": "2020-05-11T10:07:08.756Z",
              "updated_at": "2020-05-21T16:04:29.729Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "781a150c-be78-4e83-9da0-d0216c93cceb",
              "name": "Growth",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Growth",
              "created_at": "2020-05-11T10:05:23.019Z",
              "updated_at": "2020-05-21T16:04:29.745Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "de387da0-d1f8-4253-aba8-333f408f2b21",
              "name": "Classification of Living Things ",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Classification of Living Things\n",
              "created_at": "2020-05-11T09:45:30.999Z",
              "updated_at": "2020-05-21T16:04:29.760Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4abb0eed-f988-46c9-ab8e-02086e40a576",
              "name": "Recognizing Living Things",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Recognizing Living Things",
              "created_at": "2020-05-11T09:44:18.623Z",
              "updated_at": "2020-05-21T16:04:29.774Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6e865d84-ce34-48a3-adc0-25803f83c1de",
              "name": "Variation",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "variation",
              "created_at": "2020-01-21T14:48:36.632Z",
              "updated_at": "2020-05-21T16:04:37.891Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1f809fa3-41a2-44cc-bdc2-da83b1ee25a3",
              "name": "Unicellular and multicellular organisms",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Unicellular and multicellular organisms",
              "created_at": "2020-01-21T14:48:22.750Z",
              "updated_at": "2020-05-21T16:04:37.903Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 64,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "badc05bf-4030-4196-bd45-ae224dc324ff",
              "name": "The five senses",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "The five senses",
              "created_at": "2020-01-21T14:47:53.533Z",
              "updated_at": "2020-05-21T16:04:37.916Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 30,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b1754d40-f229-4f9e-84d5-be477caa8819",
              "name": "Soil",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "soil",
              "created_at": "2020-01-21T14:47:31.986Z",
              "updated_at": "2020-05-21T16:04:37.927Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9d1e05d9-0882-4a4d-9fcb-532d92b2bfa5",
              "name": "Skeletal system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Skeletal system",
              "created_at": "2020-01-21T14:47:19.563Z",
              "updated_at": "2020-05-21T16:04:37.939Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cfb9a630-74d7-4248-9c94-e270e6e659e5",
              "name": "Respiratory system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": false,
              "description": "Respiratory system",
              "created_at": "2020-01-21T14:45:33.797Z",
              "updated_at": "2020-05-21T16:04:37.952Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 20,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "84d0faff-9a1f-4462-aa0d-c109144a1272",
              "name": "Reproduction",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Reproductory system",
              "created_at": "2020-01-21T14:45:18.348Z",
              "updated_at": "2020-05-21T16:04:37.992Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 37,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "854e02f7-8d39-4ed2-9491-635b3839f75e",
              "name": "Plant biology vol 2",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Plant biology vol 2",
              "created_at": "2020-01-21T14:44:50.990Z",
              "updated_at": "2020-05-21T16:04:38.030Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 59,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4fe29e83-98ff-4d76-a58c-4999e0951dc8",
              "name": "Plant biology vol 1",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Plant biology vol 1",
              "created_at": "2020-01-21T14:44:32.707Z",
              "updated_at": "2020-05-21T16:04:38.048Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 57,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e7afa244-4120-4852-99e8-252302f08ff7",
              "name": "Photosynthesis",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Photosynthesis",
              "created_at": "2020-01-21T14:43:59.363Z",
              "updated_at": "2020-05-21T16:04:38.060Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2def1ab8-3f46-464a-ab4a-2f533c92eb55",
              "name": "Micro Organisms Around Us",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "organisms",
              "created_at": "2020-01-21T14:43:36.291Z",
              "updated_at": "2020-05-21T16:04:38.073Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3d0193ba-5096-4dab-b735-7fc2b8bae1c0",
              "name": "NUTRIENT CYCLING IN NATURE",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Nutrients",
              "created_at": "2020-01-21T14:42:54.436Z",
              "updated_at": "2020-05-21T16:04:38.099Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "24a91c52-e17c-47f2-bfb8-ea7c3c96f59d",
              "name": "Nervous system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Nervous system",
              "created_at": "2020-01-21T14:42:26.115Z",
              "updated_at": "2020-05-21T16:04:38.116Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "28c42762-c870-44f0-845f-4d0b24bcb780",
              "name": "Muscular system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Muscular system",
              "created_at": "2020-01-21T14:25:36.617Z",
              "updated_at": "2020-05-21T16:04:38.147Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bbb33ebb-3ee9-4d7c-99f2-af0cd7344b6f",
              "name": "Metabolism",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "metabolism",
              "created_at": "2020-01-21T13:54:52.357Z",
              "updated_at": "2020-05-21T16:04:38.172Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f60d53cd-4f21-4e36-9e38-5c3bcb689326",
              "name": "Immune system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Immune system",
              "created_at": "2020-01-21T13:54:33.318Z",
              "updated_at": "2020-05-21T16:04:38.185Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "52db8088-5148-485b-a2c4-9d5005bcceee",
              "name": "Genetics",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "genetics",
              "created_at": "2020-01-21T13:54:15.706Z",
              "updated_at": "2020-05-21T16:04:38.220Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8953be0e-e19f-40b7-a60c-2d3ed393a8ea",
              "name": "Food chain",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "food chain",
              "created_at": "2020-01-21T13:53:02.316Z",
              "updated_at": "2020-05-21T16:04:38.249Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 56,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5a99813c-8a49-4c1a-abb1-58df1bdae26a",
              "name": "Excretory system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Excretory system",
              "created_at": "2020-01-21T13:52:31.731Z",
              "updated_at": "2020-05-21T16:04:38.263Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2e2d5af8-76fa-4983-a0bf-7383049a41d2",
              "name": "Evolution and Adaptation",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Evolution and Adaptation",
              "created_at": "2020-01-21T13:51:27.737Z",
              "updated_at": "2020-05-21T16:04:38.279Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f74aff00-444e-427f-972a-a50e6c073353",
              "name": "Endocrine system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Endocrine system",
              "created_at": "2020-01-21T13:50:41.688Z",
              "updated_at": "2020-05-21T16:04:38.299Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "690c3628-e97d-4809-aadd-6d15ff6da012",
              "name": "Ecosystem vol 3",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Ecosystem vol 3",
              "created_at": "2020-01-21T13:50:11.502Z",
              "updated_at": "2020-05-21T16:04:38.310Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 38,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b8f50c20-e66e-4881-bac5-82762f093831",
              "name": "Ecosystem vol 2",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Ecosystem vol 2",
              "created_at": "2020-01-21T13:49:57.841Z",
              "updated_at": "2020-05-21T16:04:38.322Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ab96c0a1-646a-48d2-a1bc-0715025a4298",
              "name": "Ecosystem",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Ecosystem vol 1",
              "created_at": "2020-01-21T13:49:44.919Z",
              "updated_at": "2020-05-21T16:04:38.337Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "86baacd2-e3ab-40fd-84ab-53d14f4f7638",
              "name": "Ecology and Adaptation",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Ecology and Adaptation",
              "created_at": "2020-01-21T13:49:12.744Z",
              "updated_at": "2020-05-21T16:04:38.353Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "93d5aa40-27cd-4cf0-8de9-c4281579b4ff",
              "name": "Cycles",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Cycles",
              "created_at": "2020-01-21T13:48:44.821Z",
              "updated_at": "2020-05-21T16:04:38.367Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0a4486be-cad8-432b-8695-95d924c81b3b",
              "name": "Diseases and Pests",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Diseases",
              "created_at": "2020-01-20T15:59:20.844Z",
              "updated_at": "2020-05-21T16:04:38.588Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "adb64bb6-b6ef-4ddc-ba25-5826651105fc",
              "name": "Digestive system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Digestive system",
              "created_at": "2020-01-20T15:59:03.868Z",
              "updated_at": "2020-05-21T16:04:38.600Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e36341af-9d46-451e-88a4-0a562f91a523",
              "name": "Circulatory system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Circulatory system",
              "created_at": "2020-01-20T15:58:41.070Z",
              "updated_at": "2020-05-21T16:04:38.613Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bb80f21d-19af-4047-a72e-3ad0d4423fcb",
              "name": "Cell Biology vol 3",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Cell Biology vol 3",
              "created_at": "2020-01-20T15:58:18.556Z",
              "updated_at": "2020-05-21T16:04:38.634Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 62,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7be314b5-a871-4540-afe8-1cf7d6e46fef",
              "name": "Cell Biology vol 2",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Cell Biology vol 2",
              "created_at": "2020-01-20T15:57:57.924Z",
              "updated_at": "2020-05-21T16:04:38.647Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "46af22c1-e616-4d66-8755-7f516740accf",
              "name": "Cell Biology",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Cell Biology vol 1",
              "created_at": "2020-01-20T15:57:39.526Z",
              "updated_at": "2020-05-21T16:04:38.663Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "20560672-a822-42b1-9b3b-e83ef16e949e",
              "name": "Cardiac system",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Cardiac system",
              "created_at": "2020-01-20T15:57:17.547Z",
              "updated_at": "2020-05-21T16:04:38.677Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a41f01a2-8350-42f6-aa1e-34275d70cf4c",
              "name": "Carbohydrate",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Carbohydrate",
              "created_at": "2020-01-20T15:56:52.981Z",
              "updated_at": "2020-05-21T16:04:38.689Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0f46e204-c11c-45f3-a87a-fb8e80984f5d",
              "name": "Blood group and genotype",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "Blood group and genotype",
              "created_at": "2020-01-20T15:56:02.971Z",
              "updated_at": "2020-05-21T16:04:38.701Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "213c6323-cd15-4f98-bd3a-6a6090462cf9",
              "name": "Biology",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "rank": null,
              "active": true,
              "description": "biology",
              "created_at": "2020-01-20T15:55:32.588Z",
              "updated_at": "2020-05-21T16:04:38.716Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "b9aabfda-bbc7-4781-a7fc-5fa713a0fa3e",
              "course_id": "85ce3713-a1a8-43f9-a3da-8a5fb01be67c",
              "title": "2019",
              "created_at": "2020-01-20T15:55:41.246Z",
              "updated_at": "2020-05-21T16:03:54.488Z",
              "questions_count": 1004
          }
      ]
  },
  {
      "id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
      "created_at": "2020-01-20T10:17:49.921Z",
      "updated_at": "2020-05-27T14:15:47.854Z",
      "errors": {},
      "slug": "physics",
      "questions_count": 460,
      "plan_ids": [],
      "plans": [],
      "videos_count": 25,
      "name": "Physics",
      "category": "general",
      "rank": "senior",
      "course_image_url": "https://smartuptech-prod.s3.amazonaws.com/uploads/course/course_image/af01f6d1-4ab3-4373-91f8-7dd04f3fde4a/physics.png",
      "description": "Physics questions",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "83c4686c-400e-4281-99b6-dc79ea683779",
              "name": "NIGERIAN SATELLITE",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "NIGERIAN SATELLITE",
              "created_at": "2020-05-11T02:30:16.873Z",
              "updated_at": "2020-05-21T16:04:30.226Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "81bd6887-fb79-4a1a-aa20-da7a6a89a618",
              "name": "ROCKETS AND SATELLITES",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ROCKETS AND SATELLITES",
              "created_at": "2020-05-11T02:29:18.043Z",
              "updated_at": "2020-05-21T16:04:30.242Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4c6c3601-79e9-4e82-b376-e82f970d0865",
              "name": "ENERGY AND SOCIETY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ENERGY AND SOCIETY",
              "created_at": "2020-05-11T02:28:21.807Z",
              "updated_at": "2020-05-21T16:04:30.260Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "edc5ed55-98d5-48a7-9233-73a9645d00d0",
              "name": "PHYSICS IN TECHNOLOGY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "PHYSICS IN TECHNOLOGY",
              "created_at": "2020-05-11T02:25:08.825Z",
              "updated_at": "2020-05-21T16:04:30.273Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "12cda5d2-b03c-4b9c-8e0d-4ee9f8f41e88",
              "name": "DUALITY OF MATTER",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "DUALITY OF MATTER",
              "created_at": "2020-05-11T02:23:04.597Z",
              "updated_at": "2020-05-21T16:04:30.287Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "62c6f7a6-b473-45eb-ae2c-30a82f4f63bf",
              "name": "ENERGY QUANTIZATION",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ENERGY QUANTIZATION",
              "created_at": "2020-05-11T02:20:26.464Z",
              "updated_at": "2020-05-21T16:04:30.305Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "da85b5d3-e97b-4c3d-8595-0f7da715702c",
              "name": "NUCLEUS",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "NUCLEUS",
              "created_at": "2020-05-11T02:13:20.060Z",
              "updated_at": "2020-05-21T16:04:30.322Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fbc3616c-0eb3-4821-a061-aba90111f437",
              "name": "ELECTROMAGNETIC FIELD ",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ELECTROMAGNETIC FIELD ",
              "created_at": "2020-05-11T02:05:43.240Z",
              "updated_at": "2020-05-21T16:04:30.336Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7a449983-f98b-4f5b-9bee-4890ff6ac147",
              "name": "ELECTROMAGNETIC WAVES",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ELECTROMAGNETIC WAVES",
              "created_at": "2020-05-11T01:42:57.431Z",
              "updated_at": "2020-05-21T16:04:30.351Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c8c1a372-d2a2-4ac1-b9dd-d65d6ad3f393",
              "name": "MOLECULAR THEORY OF MATTER",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "MOLECULAR THEORY OF MATTER",
              "created_at": "2020-05-11T01:40:12.461Z",
              "updated_at": "2020-05-21T16:04:30.373Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5450db78-d739-497e-a8c2-45de6243105a",
              "name": "SOUND WAVES",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "SOUND WAVES",
              "created_at": "2020-05-11T01:32:04.933Z",
              "updated_at": "2020-05-21T16:04:30.392Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4f90c6df-51d9-4345-b424-68b1144517c2",
              "name": "GAS LAWS",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "GAS LAWS",
              "created_at": "2020-05-11T01:25:36.749Z",
              "updated_at": "2020-05-21T16:04:30.403Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4d8be85a-abd4-4e1c-b4f3-ea570be8352d",
              "name": "SIMPLE HARMONIC MOTION",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "SIMPLE HARMONIC MOTION",
              "created_at": "2020-05-11T01:16:48.033Z",
              "updated_at": "2020-05-21T16:04:30.413Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3954f2d9-1f4f-4e73-aed4-9e2789ed727d",
              "name": "CIRCULAR MOTION",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "CIRCULAR MOTION",
              "created_at": "2020-05-11T01:14:58.025Z",
              "updated_at": "2020-05-21T16:04:30.426Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a545d167-f8b0-4460-9ed8-8cc72dd7a4b8",
              "name": "Projectiles",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "PROJECTILES",
              "created_at": "2020-05-11T01:13:07.153Z",
              "updated_at": "2020-05-21T16:04:30.437Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 7,
              "plan_ids": []
          },
          {
              "id": "7d43bc7c-7f56-4f4d-b928-a51676d29b40",
              "name": "MECHANICAL ENERGY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "MECHANICAL ENERGY",
              "created_at": "2020-05-11T01:09:41.230Z",
              "updated_at": "2020-05-21T16:04:30.452Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "38e1aaf9-8beb-4e9a-a0cc-7e6e6f4de561",
              "name": "CENTRE OF GRAVITY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "CENTRE OF GRAVITY",
              "created_at": "2020-05-11T01:04:06.199Z",
              "updated_at": "2020-05-21T16:04:30.465Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9761e1b2-60ce-4335-8193-27a77e41107c",
              "name": "PHYSICS IN TECHNOLOGY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "PHYSICS IN TECHNOLOGY",
              "created_at": "2020-05-11T01:00:52.629Z",
              "updated_at": "2020-05-21T16:04:30.478Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0a7ac4b8-32e0-432b-ac2d-55f8e4da01b1",
              "name": "FLUIDS AT REST AND IN MOTION",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "FLUIDS AT REST AND IN MOTION",
              "created_at": "2020-05-11T00:57:15.551Z",
              "updated_at": "2020-05-21T16:04:30.490Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "508fe19c-e838-462a-9bc8-da93ad34b0d5",
              "name": "ELASTIC PROPERTIES OF SOLID",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ELASTIC PROPERTIES OF SOLID",
              "created_at": "2020-05-11T00:54:42.869Z",
              "updated_at": "2020-05-21T16:04:30.502Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d7fc0a8c-2acd-4057-8569-dcab8d407d9c",
              "name": "CRYSTAL STRUCTURE",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "CRYSTAL STRUCTURE",
              "created_at": "2020-05-11T00:53:01.578Z",
              "updated_at": "2020-05-21T16:04:30.514Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7f9b9ff8-a6a9-4ef4-88e5-793e16f3a93b",
              "name": "PARTICLE NATURE OF MATTER",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "PARTICLE NATURE OF MATTER",
              "created_at": "2020-05-11T00:49:24.015Z",
              "updated_at": "2020-05-21T16:04:30.527Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ec55b2d0-7136-4546-9485-c16900d51732",
              "name": "ELECTRIC FIELD",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "ELECTRIC FIELD",
              "created_at": "2020-05-11T00:45:18.543Z",
              "updated_at": "2020-05-21T16:04:30.537Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0a6d1543-00bd-4618-809d-c2bb16fbac49",
              "name": "GRAVITATIONAL FIELD",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "GRAVITATIONAL FIELD",
              "created_at": "2020-05-11T00:44:18.243Z",
              "updated_at": "2020-05-21T16:04:30.548Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae0971cc-888d-4212-9d4e-85488668cf5b",
              "name": "DESCRIPTION AND PROPERTIES OF FIELDS",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "DESCRIPTION AND PROPERTIES OF FIELDS",
              "created_at": "2020-05-11T00:40:59.069Z",
              "updated_at": "2020-05-21T16:04:30.561Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1eb21883-9b14-4188-8151-114dbc9f8cc1",
              "name": "TRANSFER OF HEAT ENERGY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "TRANSFER OF HEAT ENERGY",
              "created_at": "2020-05-11T00:36:44.421Z",
              "updated_at": "2020-05-21T16:04:30.573Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a3470701-6919-4749-aed7-ae9b1fd59fc6",
              "name": "WORK, ENERGY AND POWER",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "WORK, ENERGY AND POWER",
              "created_at": "2020-05-11T00:24:02.715Z",
              "updated_at": "2020-05-21T16:04:30.585Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ad870479-21c7-4aea-b270-8006b985025c",
              "name": "SCALARS AND VECTORS",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "SCALARS AND VECTORS",
              "created_at": "2020-05-11T00:21:07.730Z",
              "updated_at": "2020-05-21T16:04:30.596Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aa4ddb92-f725-48f0-aeff-3f14bff7431a",
              "name": "TIME",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "TIME",
              "created_at": "2020-05-11T00:14:27.642Z",
              "updated_at": "2020-05-21T16:04:30.607Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cbeae8cf-e26a-4203-a536-f509f0d55ebd",
              "name": "POSITION, DISTANCE, AND DISPLACEMENT",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "POSITION, DISTANCE, AND DISPLACEMENT",
              "created_at": "2020-05-11T00:12:59.578Z",
              "updated_at": "2020-05-21T16:04:30.618Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e9e41d7c-9599-45da-842c-7915a3dcf04c",
              "name": "INTRODUCTION TO PHYSICS",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "INTRODUCTION TO PHYSICS",
              "created_at": "2020-05-11T00:09:29.177Z",
              "updated_at": "2020-05-21T16:04:30.630Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2930b36b-2418-4e55-8c75-92904e7f1351",
              "name": "Linear Momentum",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "momemtum",
              "created_at": "2020-04-30T02:32:18.426Z",
              "updated_at": "2020-05-21T16:04:30.961Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3fbd20a8-991e-4811-8679-cf86abc9c5be",
              "name": "Mirror and reflection",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Mirror and reflection",
              "created_at": "2020-04-30T02:31:19.264Z",
              "updated_at": "2020-05-21T16:04:30.973Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5661685a-6112-4b1d-891e-d0b0a44c0047",
              "name": "Mass and mirage",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Mass and mirage",
              "created_at": "2020-04-30T02:30:36.527Z",
              "updated_at": "2020-05-21T16:04:30.985Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a2964266-5a60-45d5-872e-09f636fd6744",
              "name": "Lens",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "lens",
              "created_at": "2020-04-30T02:29:54.171Z",
              "updated_at": "2020-05-21T16:04:30.997Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "87817451-8b2e-4ac8-b72a-622935c2119a",
              "name": "Images",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "images",
              "created_at": "2020-04-30T01:28:17.658Z",
              "updated_at": "2020-05-21T16:04:31.007Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b968915e-f87b-4f6b-b423-51ed75a356a6",
              "name": "Heat Energy",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "heat",
              "created_at": "2020-04-30T01:10:44.084Z",
              "updated_at": "2020-05-21T16:04:31.019Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f7fc236f-f3b0-473a-8846-1e5f180352fe",
              "name": "Fusion",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "fusion",
              "created_at": "2020-04-30T01:07:12.560Z",
              "updated_at": "2020-05-21T16:04:31.030Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b131ff09-2d6d-4556-94fe-29c5e6781edd",
              "name": "Frequency",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "frequency",
              "created_at": "2020-04-30T01:05:45.072Z",
              "updated_at": "2020-05-21T16:04:31.041Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c20df752-b2c8-4c8e-b0f1-f31ce0a0c274",
              "name": "THERMAL EXPANSIVITY",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "THERMAL EXPANSIVITY",
              "created_at": "2020-04-30T01:03:40.224Z",
              "updated_at": "2020-05-21T16:04:31.054Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0e739afb-b7d1-4210-b742-ae70281535b2",
              "name": "Equilibrium",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "equilibrium",
              "created_at": "2020-04-30T00:58:00.954Z",
              "updated_at": "2020-05-21T16:04:31.064Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "06a660ed-9647-4220-9d45-f881f59d3d1f",
              "name": "Displacement",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "displacement",
              "created_at": "2020-04-30T00:47:58.062Z",
              "updated_at": "2020-05-21T16:04:31.075Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "d5b42025-f5d3-4d30-8690-dfd9e9c0946f",
              "name": "Current",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "current",
              "created_at": "2020-04-30T00:43:26.172Z",
              "updated_at": "2020-05-21T16:04:31.085Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9f726327-2670-4976-8746-a84594bb2e56",
              "name": "ELECTRIC CHARGES",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "charge",
              "created_at": "2020-04-30T00:42:06.085Z",
              "updated_at": "2020-05-21T16:04:31.097Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "07ff1638-8a50-4fb4-8e96-fd6625fe8f5e",
              "name": "Cathode Ray",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Cathode Ray",
              "created_at": "2020-04-30T00:41:00.496Z",
              "updated_at": "2020-05-21T16:04:31.110Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2eafbf88-82d6-4c5d-93cf-ddf78b7ab350",
              "name": "Atoms",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Atoms",
              "created_at": "2020-03-13T11:24:00.297Z",
              "updated_at": "2020-05-21T16:04:34.045Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "80b51486-88de-4f25-916f-635af44c7e33",
              "name": "Current",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Current",
              "created_at": "2020-03-13T11:13:52.737Z",
              "updated_at": "2020-05-21T16:04:34.063Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5e7f0f22-8891-4553-84d6-db9791103dec",
              "name": "Battery And Cells",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Battery And Cells",
              "created_at": "2020-03-13T11:11:11.957Z",
              "updated_at": "2020-05-21T16:04:34.085Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "424dcd09-974a-4802-ab1a-c9c31654a79f",
              "name": "Energy ",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Energy",
              "created_at": "2020-03-13T10:59:17.381Z",
              "updated_at": "2020-05-21T16:04:34.096Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "76a8e073-6f04-45f6-ab9c-1782f02234fc",
              "name": "Rectilinear Acceleration",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Acceleration ",
              "created_at": "2020-03-13T10:57:59.891Z",
              "updated_at": "2020-05-21T16:04:34.107Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 4,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f8d9f13f-10f2-4a07-b0c6-f742f2286adb",
              "name": "Charges ",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Charges ",
              "created_at": "2020-03-13T10:56:14.683Z",
              "updated_at": "2020-05-21T16:04:34.119Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c444a2bf-1c9d-4fe0-b54b-ca5d1de1d549",
              "name": "Metal",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Metal",
              "created_at": "2020-03-13T10:51:28.122Z",
              "updated_at": "2020-05-21T16:04:34.131Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "496dd47e-1708-48fd-923a-288712a0e052",
              "name": "Conductors ",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Conductors ",
              "created_at": "2020-03-13T10:45:36.631Z",
              "updated_at": "2020-05-21T16:04:34.143Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 22,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "74445fe2-f3ac-479e-8cbc-1f55b6b2ada7",
              "name": "Laws",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Laws",
              "created_at": "2020-03-13T10:37:31.842Z",
              "updated_at": "2020-05-21T16:04:34.153Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8f3c8f65-d452-4192-8069-a79704a8537c",
              "name": "Speed and Velocity",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "speed",
              "created_at": "2020-01-20T10:26:56.495Z",
              "updated_at": "2020-05-21T16:04:38.967Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 18,
              "plan_ids": []
          },
          {
              "id": "a067b558-86de-49df-a27c-fc4eadea1367",
              "name": "Light",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "light",
              "created_at": "2020-01-20T10:26:45.261Z",
              "updated_at": "2020-05-21T16:04:38.982Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c94ee16a-626f-4243-964a-d75ff5be004b",
              "name": "Motion",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Motion",
              "created_at": "2020-01-20T10:26:01.421Z",
              "updated_at": "2020-05-21T16:04:38.994Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "75121d0b-1b26-435d-a47b-b9c4f62d6961",
              "name": "Magnetic field",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "Magnetic force",
              "created_at": "2020-01-20T10:25:44.920Z",
              "updated_at": "2020-05-21T16:04:39.005Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "73aeb449-0d44-4f00-bee4-bbc2caa66c40",
              "name": "Frequency",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": false,
              "description": "frequency",
              "created_at": "2020-01-20T10:25:20.471Z",
              "updated_at": "2020-05-21T16:04:39.019Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "41408cc2-68e5-4faf-8cfc-3b0b95297153",
              "name": "Waves",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "waves",
              "created_at": "2020-01-20T10:24:35.505Z",
              "updated_at": "2020-05-21T16:04:39.030Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "da541f48-c8c4-43a7-b790-23117e94baff",
              "name": "AC and DC circuits",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "rank": null,
              "active": true,
              "description": "AC and DC circuits",
              "created_at": "2020-01-20T10:24:08.016Z",
              "updated_at": "2020-05-21T16:04:39.045Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "d2eb6457-a8df-49e9-9f41-caed4aa5984e",
              "course_id": "af01f6d1-4ab3-4373-91f8-7dd04f3fde4a",
              "title": "2019",
              "created_at": "2020-01-20T10:27:21.547Z",
              "updated_at": "2020-05-21T16:03:54.507Z",
              "questions_count": 219
          }
      ]
  },
  {
      "id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
      "created_at": "2020-01-16T10:44:30.342Z",
      "updated_at": "2020-05-27T14:15:47.928Z",
      "errors": {},
      "slug": "government",
      "questions_count": 1835,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Government",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Government",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "b4efbcb1-2f98-4d8e-8b87-38fae7b058cc",
              "name": "The Military in Nigerian Politics",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "The Military in Nigerian Politics",
              "created_at": "2020-04-14T04:59:25.610Z",
              "updated_at": "2020-05-21T16:04:32.537Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 24,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bd5250e3-687d-4396-a6fc-2b6a8745de15",
              "name": "The British Colonial Policy",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "The British Colonial Policy",
              "created_at": "2020-04-14T04:53:37.935Z",
              "updated_at": "2020-05-21T16:04:32.548Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3c674801-9679-4b98-b2f8-799a784b1a85",
              "name": "Systems of Government",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Systems of Government",
              "created_at": "2020-04-14T04:51:49.332Z",
              "updated_at": "2020-05-21T16:04:32.565Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 45,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2d91275b-5e7d-46d7-a262-2f3ed82a95bd",
              "name": "Structures of Governance",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Structures of Governance",
              "created_at": "2020-04-14T04:50:37.686Z",
              "updated_at": "2020-05-21T16:04:32.577Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "dc4b25c4-dc3f-4bf1-922f-46fa0e138c40",
              "name": "State",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "state",
              "created_at": "2020-04-14T04:43:53.163Z",
              "updated_at": "2020-05-21T16:04:32.590Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b5f5332c-f361-4e9c-b51b-79b15c653cb0",
              "name": "Sovereignty ",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Sovereignty ",
              "created_at": "2020-04-14T04:43:21.626Z",
              "updated_at": "2020-05-21T16:04:32.603Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "654799ec-08b0-4076-83b5-97f9d20b31d2",
              "name": "Separation of powers",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Separation of powers",
              "created_at": "2020-04-14T04:39:55.568Z",
              "updated_at": "2020-05-21T16:04:32.615Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "65eb8d76-ee1a-4ea4-9147-67070c369828",
              "name": "Rule of law",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Rule of law",
              "created_at": "2020-04-14T04:39:06.377Z",
              "updated_at": "2020-05-21T16:04:32.628Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "446ae3b0-0ff0-46b5-bd2b-35574fab950b",
              "name": "Relations with major powers",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Relations with major powers",
              "created_at": "2020-04-14T04:38:03.690Z",
              "updated_at": "2020-05-21T16:04:32.641Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f769884c-d067-4069-9fc7-bb25c048bcc3",
              "name": "Relations with African Countries",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Relations with African Countries",
              "created_at": "2020-04-14T04:37:18.791Z",
              "updated_at": "2020-05-21T16:04:32.653Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "aec97cf6-bdd3-41ad-a84f-fc31cc164346",
              "name": "Public opinions",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Public opinions",
              "created_at": "2020-04-14T04:35:33.229Z",
              "updated_at": "2020-05-21T16:04:32.665Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0efacb29-a069-42cd-bf4a-de508339a384",
              "name": "Public coporations and parastatals",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Public corporations and parastatals",
              "created_at": "2020-04-14T04:34:47.240Z",
              "updated_at": "2020-05-21T16:04:32.677Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "385327fc-7f58-4107-99c3-0c29f5e419fa",
              "name": "Public Commissions",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Public Commissions",
              "created_at": "2020-04-14T04:33:33.307Z",
              "updated_at": "2020-05-21T16:04:32.693Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c7d8de59-0188-4f34-9992-45742bc33b0c",
              "name": "Processes of Legislation",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Processes of Legislation",
              "created_at": "2020-04-14T04:31:53.597Z",
              "updated_at": "2020-05-21T16:04:32.715Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 23,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b515c06e-9137-4265-a824-ed5c08a8e19d",
              "name": "Pressure Groups",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Pressure Groups",
              "created_at": "2020-04-14T04:30:51.881Z",
              "updated_at": "2020-05-21T16:04:32.729Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c941c573-d7f4-49d7-a4e9-7095edc02432",
              "name": "Pre-colonial Politics",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Pre-colonial Politics",
              "created_at": "2020-04-14T04:29:01.771Z",
              "updated_at": "2020-05-21T16:04:32.740Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 42,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0525f6ae-f3bc-41c3-aceb-3f1212a80f25",
              "name": "Political Parties",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Political Parties",
              "created_at": "2020-04-12T01:37:32.853Z",
              "updated_at": "2020-05-21T16:04:32.793Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ccc5ac3f-2784-4a82-b90d-527a7ab1be8b",
              "name": "Power",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "power",
              "created_at": "2020-04-12T01:35:16.968Z",
              "updated_at": "2020-05-21T16:04:32.809Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 11,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a50e6186-691c-4c7b-8abb-92c723b5652f",
              "name": "Political Ideologies",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Political Ideologies",
              "created_at": "2020-04-12T01:34:05.749Z",
              "updated_at": "2020-05-21T16:04:32.824Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ea258d9e-9f0a-4a82-8273-7640b3ae16eb",
              "name": "Party Systems",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Party Systems",
              "created_at": "2020-04-12T01:33:05.007Z",
              "updated_at": "2020-05-21T16:04:32.835Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c5f5538c-8eff-40bc-8171-030b62e8cf3d",
              "name": "Nigerian Federalism",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Nigerian Federalism",
              "created_at": "2020-04-12T01:32:18.563Z",
              "updated_at": "2020-05-21T16:04:32.849Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "23f0ab3f-443b-425d-b63d-b1e53f15969f",
              "name": "Nationalist Movement",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Nationalist Movement",
              "created_at": "2020-04-12T01:31:32.374Z",
              "updated_at": "2020-05-21T16:04:32.861Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 35,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f354b589-a19b-4a49-8f53-ef8056695cce",
              "name": "Local Government",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Local Government",
              "created_at": "2020-04-12T01:30:17.194Z",
              "updated_at": "2020-05-21T16:04:32.873Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a04738e8-02fd-4854-85c1-4b8e687a869a",
              "name": "International Organization vol 2",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "International Organization vol 2",
              "created_at": "2020-04-12T01:28:52.197Z",
              "updated_at": "2020-05-21T16:04:32.883Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 64,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "956f8dff-b4ae-448e-8812-958759360178",
              "name": "International Organization",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "International Organization",
              "created_at": "2020-04-12T01:23:07.004Z",
              "updated_at": "2020-05-21T16:04:32.893Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8179cae9-3bd7-48d0-8275-6afba4c5c9f1",
              "name": "Institutions of Government in the Post Independence",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Institutions of Government in the Post Independence",
              "created_at": "2020-04-12T01:22:17.580Z",
              "updated_at": "2020-05-21T16:04:32.905Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 17,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9f7a99ee-e913-4ba1-bb34-f0a92e3c8cd4",
              "name": "Indirect Rule",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Indirect Rule",
              "created_at": "2020-04-12T01:21:14.793Z",
              "updated_at": "2020-05-21T16:04:32.918Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8dbe366e-6962-471b-a7f4-fc3df8fd15c4",
              "name": "Imperialist Penetration",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Imperialist Penetration",
              "created_at": "2020-04-12T01:20:28.413Z",
              "updated_at": "2020-05-21T16:04:32.931Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3761edad-36bb-4bbe-b7d8-1ab8a0145374",
              "name": "Impact of British and Military Rule",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Impact of British and Military Rule",
              "created_at": "2020-04-12T01:19:19.733Z",
              "updated_at": "2020-05-21T16:04:32.943Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 3,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "84a6e7a4-1a39-431e-96b1-cf57726e6a89",
              "name": "Forms of Government",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Forms of Government",
              "created_at": "2020-04-12T01:18:27.607Z",
              "updated_at": "2020-05-21T16:04:32.955Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 19,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0a2fc44e-fdaa-4a3a-8da1-ceccbf11b976",
              "name": "Foreign Policy",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Foreign Policy",
              "created_at": "2020-04-12T01:17:30.424Z",
              "updated_at": "2020-05-21T16:04:32.966Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9f90d741-fe4c-4706-ba8b-2f0f5bfcf5a9",
              "name": "Emergence of Nationalist Parties",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Emergence of Nationalist Parties",
              "created_at": "2020-04-12T01:15:34.459Z",
              "updated_at": "2020-05-21T16:04:32.977Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 14,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bdc20926-1e7e-4b01-97e3-43f79cc7d375",
              "name": "Electoral Processes",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Electoral processes",
              "created_at": "2020-04-12T01:08:47.629Z",
              "updated_at": "2020-05-21T16:04:32.987Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5dc24d4e-6f0b-4c31-9cc8-a364c2f53a41",
              "name": "Democracy",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Democracy",
              "created_at": "2020-04-12T01:07:45.377Z",
              "updated_at": "2020-05-21T16:04:32.998Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b99cb85c-6fdc-4402-8606-afca33ea212c",
              "name": "Creation of States",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Creation of States",
              "created_at": "2020-04-12T01:06:49.876Z",
              "updated_at": "2020-05-21T16:04:33.009Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ae439436-0ed0-4b02-9db9-48a4b3ffc98e",
              "name": "Constitutional Development",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Constitutional Development",
              "created_at": "2020-04-12T01:05:21.074Z",
              "updated_at": "2020-05-21T16:04:33.021Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 39,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "49e331fd-b707-4383-9e4d-39dae7bb7d79",
              "name": "Constitution",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Constitution",
              "created_at": "2020-04-12T00:58:54.171Z",
              "updated_at": "2020-05-21T16:04:33.033Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 34,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bd57e2fb-9939-4284-a44b-df7d167a4bbd",
              "name": "Civil service",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Civil service",
              "created_at": "2020-01-16T11:06:12.346Z",
              "updated_at": "2020-05-21T16:04:39.059Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "085d565b-2c6f-4add-b37f-ecdcffe1f2d0",
              "name": "Citizenship",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Citizenship",
              "created_at": "2020-01-16T11:05:48.516Z",
              "updated_at": "2020-05-21T16:04:39.079Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 24,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a49450c2-9b44-449d-a5a5-3139b7f6416f",
              "name": "Bodies",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Bodies",
              "created_at": "2020-01-16T11:05:26.686Z",
              "updated_at": "2020-05-21T16:04:39.094Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 24,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "421fe8c1-990d-4b53-b7dd-68211316961e",
              "name": "Authority",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Authority",
              "created_at": "2020-01-16T11:04:56.509Z",
              "updated_at": "2020-05-21T16:04:39.105Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 8,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0ff6436b-7ea2-4788-a9a0-8f093e915c3b",
              "name": "Arms of Government",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Arms of Government",
              "created_at": "2020-01-16T11:04:26.040Z",
              "updated_at": "2020-05-21T16:04:39.124Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 37,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "eaebe840-fe3c-4229-802b-aa49a5011b97",
              "name": "Africa as a center-piece",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "rank": null,
              "active": true,
              "description": "Africa as a center-piece",
              "created_at": "2020-01-16T10:58:24.397Z",
              "updated_at": "2020-05-21T16:04:39.138Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 2,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "a23b93e7-0909-430a-8a8a-19f2794dfad5",
              "course_id": "01d7a7f9-5e0e-4612-ae45-85e6bd3032ac",
              "title": "2019",
              "created_at": "2020-01-16T10:56:57.059Z",
              "updated_at": "2020-05-21T16:03:54.615Z",
              "questions_count": 880
          }
      ]
  },
  {
      "id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
      "created_at": "2020-01-16T10:43:41.550Z",
      "updated_at": "2020-05-27T14:15:47.946Z",
      "errors": {},
      "slug": "economics",
      "questions_count": 2099,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "Economics",
      "category": "general",
      "rank": "senior",
      "course_image_url": null,
      "description": "Economics questions",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "543cb3d3-9188-4b15-9dae-3794fc5eb9fe",
              "name": "International trade vol 2",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "International trade vol 2",
              "created_at": "2020-02-07T16:23:02.811Z",
              "updated_at": "2020-05-21T16:04:35.709Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 46,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "01dc0922-e191-4489-b6a0-5048b3561d66",
              "name": "Demand and Supply vol 2",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Demand and Supply vol 2",
              "created_at": "2020-02-07T16:02:07.979Z",
              "updated_at": "2020-05-21T16:04:35.719Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 46,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8d58bc09-51f9-43a8-937f-fb9e1383585e",
              "name": "Unemployment",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Unemployment",
              "created_at": "2020-02-07T15:58:03.034Z",
              "updated_at": "2020-05-21T16:04:35.728Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "22b96cdb-cbd7-49d8-95f0-7052c65586b6",
              "name": "Trade union",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Trade union",
              "created_at": "2020-02-07T15:57:46.856Z",
              "updated_at": "2020-05-21T16:04:35.738Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0b61875b-d7a2-427e-a6f8-5dd42a56d81d",
              "name": "Theory of income determinant",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Theory of income determinant",
              "created_at": "2020-02-07T15:56:26.114Z",
              "updated_at": "2020-05-21T16:04:35.747Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "63433444-04a5-4958-b38b-706f34f98dcd",
              "name": "Theory of consumer behavior",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Theory of consumer behavior",
              "created_at": "2020-02-07T15:52:09.882Z",
              "updated_at": "2020-05-21T16:04:35.759Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "13a10411-e774-417d-a659-15cb0aeb6d22",
              "name": "Tax",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "tax",
              "created_at": "2020-02-07T15:51:49.757Z",
              "updated_at": "2020-05-21T16:04:35.769Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 44,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "4a980ced-e67b-45d8-a579-368054d43398",
              "name": "Public finance",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Public finance",
              "created_at": "2020-02-07T15:51:36.718Z",
              "updated_at": "2020-05-21T16:04:35.784Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a9095759-a8d0-4d74-a70f-3499812a8a3d",
              "name": "Production vol 2",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Production vol 2",
              "created_at": "2020-02-07T15:51:23.344Z",
              "updated_at": "2020-05-21T16:04:35.795Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 32,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "add3d623-1506-4b25-846e-1b91ae4acd23",
              "name": "Production vol 1",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Production vol 1",
              "created_at": "2020-02-07T15:51:08.568Z",
              "updated_at": "2020-05-21T16:04:35.807Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "62df5bce-3742-4811-bdba-ef19dbe604cd",
              "name": "Price system",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Price system",
              "created_at": "2020-02-07T15:50:54.056Z",
              "updated_at": "2020-05-21T16:04:35.820Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "2f638185-bcab-497a-a50c-dad56611198c",
              "name": "Population",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Population",
              "created_at": "2020-02-07T15:50:39.596Z",
              "updated_at": "2020-05-21T16:04:35.833Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 28,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b9f6fc1d-208d-449b-a297-cc6410767640",
              "name": "Petroleum and other mineral resources",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Petroleum and other mineral resources",
              "created_at": "2020-02-07T15:50:27.536Z",
              "updated_at": "2020-05-21T16:04:35.849Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6993b170-c1de-4057-b617-c0b3e678ef8f",
              "name": "National income",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "National income",
              "created_at": "2020-02-07T15:50:05.284Z",
              "updated_at": "2020-05-21T16:04:35.865Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 57,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "a276f333-51aa-4ad1-b05a-c6220c8e5bdc",
              "name": "Money",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Money",
              "created_at": "2020-02-07T15:49:49.757Z",
              "updated_at": "2020-05-21T16:04:35.885Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e994f809-e90c-4427-bf68-e3de30e76963",
              "name": "Market structure",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Market structure",
              "created_at": "2020-02-07T15:49:31.214Z",
              "updated_at": "2020-05-21T16:04:35.898Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 67,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "df2fb474-d0ca-44df-ba9c-65fc4f24910a",
              "name": "International trade vol 1",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "International trade vol 1",
              "created_at": "2020-02-07T15:49:15.388Z",
              "updated_at": "2020-05-21T16:04:35.910Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 47,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "17f0c59b-345e-4896-a2e5-02db9314eb62",
              "name": "International economic organization",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "International economic organization",
              "created_at": "2020-02-07T15:48:59.759Z",
              "updated_at": "2020-05-21T16:04:35.921Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f3d2f053-306c-4c85-9932-b801a8418dd0",
              "name": "Inflation and Deflation",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Inflation and Deflation",
              "created_at": "2020-02-07T15:48:34.480Z",
              "updated_at": "2020-05-21T16:04:35.937Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 26,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b2373715-25a9-4f7d-9274-f2314f1c8c1d",
              "name": "Industrialization",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Industrialization",
              "created_at": "2020-02-07T15:48:17.878Z",
              "updated_at": "2020-05-21T16:04:35.950Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 33,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "166a1373-9ce0-4420-b4ad-bad424272463",
              "name": "Financial institution",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Financial institution",
              "created_at": "2020-02-07T15:48:02.257Z",
              "updated_at": "2020-05-21T16:04:35.970Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "1dd640a4-7678-4eb3-8573-21a5c8a4895e",
              "name": "Economic development and planning",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Economic development and planning",
              "created_at": "2020-02-07T15:47:46.104Z",
              "updated_at": "2020-05-21T16:04:35.982Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9319e753-124d-49a0-a0c2-9636a2bd24f5",
              "name": "Distribution trade",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Distribution trade",
              "created_at": "2020-02-07T15:47:24.731Z",
              "updated_at": "2020-05-21T16:04:36.006Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 9,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "f3335752-d725-42f6-a94f-a64e840b708c",
              "name": "Demand and Supply",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Demand and Supply",
              "created_at": "2020-02-07T15:46:33.429Z",
              "updated_at": "2020-05-21T16:04:36.017Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 192,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "858dd3d7-efb1-4deb-bba9-7442f2c50181",
              "name": "Business organizations",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": false,
              "description": "Business organizations",
              "created_at": "2020-01-16T10:48:19.309Z",
              "updated_at": "2020-05-21T16:04:39.152Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "9e6830fa-527e-487e-b4be-1a7675a6af0e",
              "name": "Basic tools for economic analysis",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Basic tools for economic analysis",
              "created_at": "2020-01-16T10:47:56.457Z",
              "updated_at": "2020-05-21T16:04:39.164Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c6550fda-58d7-4554-a884-e62c40600c14",
              "name": "Basic economic concepts",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Basic economic concepts",
              "created_at": "2020-01-16T10:47:23.022Z",
              "updated_at": "2020-05-21T16:04:39.181Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 24,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "91fc4468-9c31-4ed6-8f83-4b490a8e74e4",
              "name": "Basic economic system",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Basic economic system",
              "created_at": "2020-01-16T10:46:58.771Z",
              "updated_at": "2020-05-21T16:04:39.201Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 29,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cfdf061e-e319-4d74-a1de-23117e1f862d",
              "name": "Basic economic problems of the society",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Basic economic problems of the society",
              "created_at": "2020-01-16T10:46:32.204Z",
              "updated_at": "2020-05-21T16:04:39.218Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "666b2257-79fc-4075-a90e-4af12fc28df6",
              "name": "Agricultural ",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "rank": null,
              "active": true,
              "description": "Agricultural ",
              "created_at": "2020-01-16T10:45:33.747Z",
              "updated_at": "2020-05-21T16:04:39.232Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "d3eb2bed-802b-4e5b-9090-067d44e35f05",
              "course_id": "8d921f73-525a-4802-b77a-f7aad40d60b3",
              "title": "2019",
              "created_at": "2020-01-16T10:45:52.396Z",
              "updated_at": "2020-05-21T16:03:54.626Z",
              "questions_count": 1048
          }
      ]
  },
  {
      "id": "78494784-db19-41aa-8e1d-5385dc971f7c",
      "created_at": "2020-01-16T10:00:44.411Z",
      "updated_at": "2020-05-27T14:15:47.963Z",
      "errors": {},
      "slug": "english-language",
      "questions_count": 1850,
      "plan_ids": [],
      "plans": [],
      "videos_count": 0,
      "name": "English Language JSS",
      "category": "general",
      "rank": "junior",
      "course_image_url": "https://smartuptech-prod.s3.amazonaws.com/uploads/course/course_image/78494784-db19-41aa-8e1d-5385dc971f7c/english.png",
      "description": "English Language JSS",
      "institution": {
          "id": "715ddce7-48b1-4243-a329-1140195b06b8",
          "name": "SmartUpTech",
          "motto": "Education on the go",
          "logo": {
              "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/logo.png",
              "thumb": {
                  "url": "https://smartuptech-prod.s3.amazonaws.com/uploads/institution/logo/715ddce7-48b1-4243-a329-1140195b06b8/thumb_logo.png"
              }
          },
          "email": "info@smartuptech.com",
          "phone": "1234567890",
          "slug": "smartuptech",
          "owner_id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "created_at": "2020-01-15T10:15:52.377Z",
          "updated_at": "2022-08-15T03:15:26.181Z",
          "exam_body": false,
          "address": "D66 BUA Estate, Kado FCT",
          "institution_type": "PrimarySecondary"
      },
      "active": true,
      "creator": {
          "id": "8d9fef39-3503-42f6-969f-5c611f2ee1b8",
          "email": "info@smartuptech.com",
          "authentication_token": "oQtYtxVvSmdGuFpy7Mcz",
          "string": null,
          "status": "institution",
          "admin": true,
          "created_at": "2020-01-15T10:15:52.349Z",
          "updated_at": "2024-05-05T21:49:41.780Z",
          "first_name": null,
          "surname": null,
          "address": null,
          "phone": "1234567890",
          "image": {
              "url": null,
              "thumb": {
                  "url": null
              }
          },
          "state": null,
          "completed_at": null,
          "sex": null,
          "date_of_birth": null,
          "level": "1",
          "username": "info",
          "guardian_one": "",
          "guardian_two": "",
          "qualification": "",
          "cv": {
              "url": null
          },
          "state_id": null,
          "lga_id": null,
          "sid": "",
          "base_level_id": null,
          "sub_base_level_id": null,
          "category": null,
          "cleared": false,
          "jamb_year_id": null,
          "reg_no": null,
          "utme_subjects": [],
          "student_id": null
      },
      "topics": [
          {
              "id": "2200ff37-cfe0-4d75-82bc-c9ff987f5c42",
              "name": "Listening/Speaking",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Listening/Speaking",
              "created_at": "2020-05-14T20:42:08.129Z",
              "updated_at": "2020-05-21T16:04:29.317Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6deffb7f-f017-471b-99b9-ca368b18c941",
              "name": "Grammatical Accuracy",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Grammatical Accuracy",
              "created_at": "2020-05-14T16:06:49.252Z",
              "updated_at": "2020-05-21T16:04:29.330Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "c607f9a1-1025-4bed-97ca-0dfbd25572c3",
              "name": "writing",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "writing",
              "created_at": "2020-05-13T09:28:29.707Z",
              "updated_at": "2020-05-21T16:04:29.345Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "26943e32-c7da-4d5d-af0f-f8f020a0a337",
              "name": "Reading",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Reading",
              "created_at": "2020-05-11T12:13:20.686Z",
              "updated_at": "2020-05-21T16:04:29.615Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "22b1da77-5415-47ab-9f3b-1abb2f73f6f0",
              "name": "Sentence completion vol 11",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 11",
              "created_at": "2020-01-20T13:54:45.709Z",
              "updated_at": "2020-05-21T16:04:38.729Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 16,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "fd3883c6-bd67-4da0-a55a-7074cd687b88",
              "name": "Sentence completion vol 10",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 10",
              "created_at": "2020-01-20T13:54:32.539Z",
              "updated_at": "2020-05-21T16:04:38.742Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "45221e0e-f0fb-42d0-8fe9-5153990c606a",
              "name": "Sentence completion vol 9",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 9",
              "created_at": "2020-01-20T13:53:22.476Z",
              "updated_at": "2020-05-21T16:04:38.754Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "df12b3ec-8226-4f00-95b9-3f7aaef06afc",
              "name": "Sentence completion vol 8",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 8",
              "created_at": "2020-01-20T13:53:04.278Z",
              "updated_at": "2020-05-21T16:04:38.768Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "55c7fdc8-91c0-4540-88d8-96da4b23afde",
              "name": "Sentence completion vol 7",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 7",
              "created_at": "2020-01-20T13:50:41.030Z",
              "updated_at": "2020-05-21T16:04:38.779Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ed0cbea3-a58d-4f3d-9ce0-761fcbb14717",
              "name": "Sentence completion vol 6",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 6",
              "created_at": "2020-01-20T13:50:25.864Z",
              "updated_at": "2020-05-21T16:04:38.790Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "60cb7ad0-2474-4ddd-b0b3-258fd8b401bf",
              "name": "Sentence completion vol 5",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 5",
              "created_at": "2020-01-20T13:47:32.477Z",
              "updated_at": "2020-05-21T16:04:38.803Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "bb775b42-fa07-4827-b546-7df7c6b38763",
              "name": "Sentence completion vol 4",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 4",
              "created_at": "2020-01-20T13:47:17.336Z",
              "updated_at": "2020-05-21T16:04:38.822Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "8eddc1ad-2902-4837-bb9b-2651cf4b40f6",
              "name": "Sentence completion vol 3",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 3",
              "created_at": "2020-01-20T13:47:03.838Z",
              "updated_at": "2020-05-21T16:04:38.838Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "580ecd24-ae81-4524-b026-5512229ced55",
              "name": "Sentence completion vol 2",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 2",
              "created_at": "2020-01-20T13:43:44.505Z",
              "updated_at": "2020-05-21T16:04:38.853Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 49,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "080b4337-6430-41a4-a1e1-39a80156a3fb",
              "name": "Sentence completion vol 1",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Sentence completion vol 1",
              "created_at": "2020-01-20T13:43:27.768Z",
              "updated_at": "2020-05-21T16:04:38.870Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "981dc971-4e59-4126-8f74-53ed939ff197",
              "name": "Synonym vol 3",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Synonym vol 3",
              "created_at": "2020-01-20T13:35:25.006Z",
              "updated_at": "2020-05-21T16:04:38.882Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "7d1eed00-c244-473d-ac24-6e49d73b93c3",
              "name": "Synonym vol 2",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Synonym vol 2",
              "created_at": "2020-01-20T13:35:09.617Z",
              "updated_at": "2020-05-21T16:04:38.894Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 0,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e9ba83de-1cca-4bb3-bc46-ad58ddcdcde7",
              "name": "Synonym vol 1",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Synonym vol 1",
              "created_at": "2020-01-20T13:34:55.066Z",
              "updated_at": "2020-05-21T16:04:38.907Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 51,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "5ebf0dc3-3999-4969-9474-9a05fb405ac5",
              "name": "antonyms vol 2",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "antonyms vol 2",
              "created_at": "2020-01-20T13:30:13.017Z",
              "updated_at": "2020-05-21T16:04:38.926Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 54,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b95118de-f1a9-4856-93f7-0df20c04a169",
              "name": "antonyms vol 1",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "antonyms vol 1",
              "created_at": "2020-01-20T13:29:47.416Z",
              "updated_at": "2020-05-21T16:04:38.955Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 50,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "0f6440c7-47ca-40af-a9ed-8810ed5e47bb",
              "name": "Simple Past Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Simple Past Tense",
              "created_at": "2020-01-16T10:21:07.462Z",
              "updated_at": "2020-05-21T16:04:39.245Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 15,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e8d4527e-7133-4a28-af2e-fc3e4d431a8e",
              "name": "Question Tag",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": false,
              "description": "Question Tag",
              "created_at": "2020-01-16T10:20:16.504Z",
              "updated_at": "2020-05-21T16:04:39.257Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 7,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "54943aac-76d0-4bbe-a2e4-d247073ce2b7",
              "name": "Present Simple Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": false,
              "description": "Present Simple Tense",
              "created_at": "2020-01-16T10:19:58.405Z",
              "updated_at": "2020-05-21T16:04:39.269Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "cb954c5d-f285-4088-b799-7128a6930168",
              "name": "Present Perfect Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Present Perfect Tense",
              "created_at": "2020-01-16T10:19:27.768Z",
              "updated_at": "2020-05-21T16:04:39.281Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 13,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "6e1eb844-f63a-44cc-acd8-912054e0e457",
              "name": "Present Perfect Continous Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Present Perfect Continous Tense",
              "created_at": "2020-01-16T10:19:08.471Z",
              "updated_at": "2020-05-21T16:04:39.292Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 10,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "ee9c31ac-5df7-496f-814d-118d6d3f173f",
              "name": "Present Continous Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Present Continous Tense",
              "created_at": "2020-01-16T10:18:43.614Z",
              "updated_at": "2020-05-21T16:04:39.311Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 6,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "e93bb799-a2b6-4ff1-9ffc-d43e767f0857",
              "name": "Phrasal Verb",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Phrasal Verb",
              "created_at": "2020-01-16T10:18:24.587Z",
              "updated_at": "2020-05-21T16:04:39.322Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 40,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "3defe872-608a-4dbd-808d-3d357669eb69",
              "name": "Past Perfect Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Past Perfect Tense",
              "created_at": "2020-01-16T10:18:07.258Z",
              "updated_at": "2020-05-21T16:04:39.333Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 5,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b9fac0a4-5b4b-49c5-81bd-4e0a3618e33a",
              "name": "Past Continous Tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Past Continous Tense",
              "created_at": "2020-01-16T10:17:45.885Z",
              "updated_at": "2020-05-21T16:04:39.345Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 18,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "64830450-f1a2-481f-a2ce-3f3cdc1168ec",
              "name": "One Word Substitution",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "One Word Substitution",
              "created_at": "2020-01-16T10:17:26.527Z",
              "updated_at": "2020-05-21T16:04:39.356Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 64,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "64533214-5e5b-4704-9d8f-d9d435c1b0d2",
              "name": "Incorrect Words",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Incorrect Words",
              "created_at": "2020-01-16T10:17:04.325Z",
              "updated_at": "2020-05-21T16:04:39.367Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 36,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "b266cd26-97c1-4202-8c80-54c2ba65708d",
              "name": "Idioms",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Idioms",
              "created_at": "2020-01-16T10:16:46.943Z",
              "updated_at": "2020-05-21T16:04:39.378Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 21,
              "videos_count": 0,
              "plan_ids": []
          },
          {
              "id": "82dd0e82-2033-48a5-991d-49571e01d65c",
              "name": "Future tense",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "rank": null,
              "active": true,
              "description": "Future tense",
              "created_at": "2020-01-16T10:16:28.681Z",
              "updated_at": "2020-05-21T16:04:39.390Z",
              "lecture_type": "text",
              "video_url": "",
              "topic_image": {
                  "url": null,
                  "thumb": {
                      "url": null
                  }
              },
              "level": null,
              "questions_count": 12,
              "videos_count": 0,
              "plan_ids": []
          }
      ],
      "years": [
          {
              "id": "e9f00b35-6499-4ac8-938d-c25f9f964c52",
              "course_id": "78494784-db19-41aa-8e1d-5385dc971f7c",
              "title": "2019",
              "created_at": "2020-01-16T10:15:46.721Z",
              "updated_at": "2020-05-21T16:03:54.637Z",
              "questions_count": 922
          }
      ]
  }
]