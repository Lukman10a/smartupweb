// // PerformanceAnalysis.tsx

// import React, { useState, useEffect } from "react";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Image from "next/image";
// import cancel from "../../../../../../public/assets/cancel.svg";
// import { useRouter } from "next/router";
// import BarChart from "@/components/barChat"; // Adjust the path based on your project structure

// export default function PerformanceAnalysis() {
//   const { query, asPath } = useRouter();
//   const [selectedTopic, setSelectedTopic] = useState(query.topic);
//   const [startDate, setStartDate] = useState("march 01, 2020");
//   const [endDate, setEndDate] = useState("july 30, 2020");
//   const [backgroundColor, setBackgroundColor] = useState("#D32D441A");

//   useEffect(() => {
//     console.log({ myquerry: query });
//   }, [query]);

//   const dateOptions = [
//     "march 01, 2020",
//     "April 05, 2020",
//     "April 10, 2020",

//     "April 05, 2020",
//     "April 10, 2020",
//     "june 15, 2020",
//     "April 20, 2020",
//     "july 30, 2020",
//   ];

//   const data = {
//     labels: dateOptions.slice(
//       dateOptions.indexOf(startDate),
//       dateOptions.indexOf(endDate) + 1,
//     ),
//     datasets: [
//       {
//         label: "Scores",
//         backgroundColor: "#D32D44",
//         borderRadius: 5,
//         data: [65, 59, 80, 81, 56, 55, 30, 60, 80].slice(
//           dateOptions.indexOf(startDate),
//           dateOptions.indexOf(endDate) + 1,
//         ),
//       },
//     ],
//   };

//   const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedTopic(event.target.value);
//   };

//   const handleStartDateChange = (
//     event: React.ChangeEvent<HTMLSelectElement>,
//   ) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setEndDate(event.target.value);
//   };

//   const handleBackgroundColorChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setBackgroundColor(event.target.value);
//   };

//   return (
//     <div>
//       <div className="mb-3 flex items-center justify-between">
//         <p className="font-dm_sans text-2xl font-medium">{query.subject}</p>
//         <div className="flex items-center gap-2">
//           <IoNotificationsCircleOutline size={40} />
//         </div>
//       </div>

//       <div className="mx-auto rounded-md bg-white p-4">
//         <div className="flex items-center justify-between gap-2">
//           <p>Performance analysis</p>
//           <Image src={cancel} alt="" />
//         </div>

//         <div className="my-8 flex justify-between">
//           <div className="flex gap-2">
//             <select
//               value={selectedTopic}
//               onChange={handleTopicChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               <option value="Algebra">Algebra</option>
//               <option value="Geometry">Geometry</option>
//               <option value="Calculus">Calculus</option>
//             </select>
//             <select
//               value={startDate}
//               onChange={handleStartDateChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               {dateOptions.map((date) => (
//                 <option key={date} value={date}>
//                   From {date}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={endDate}
//               onChange={handleEndDateChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               {dateOptions.map((date) => (
//                 <option key={date} value={date}>
//                   To {date}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <button className="button-2 rounded-md bg-[#D32D44] p-2 text-white">
//               Download Analysis
//             </button>
//           </div>
//         </div>

//         {/* <div className="mb-4">
//           <label htmlFor="backgroundColor">Background Color: </label>
//           <input
//             type="color"
//             id="backgroundColor"
//             value={backgroundColor}
//             onChange={handleBackgroundColorChange}
//           />
//         </div> */}

//         <BarChart data={data} backgroundColor={backgroundColor} />
//       </div>
//     </div>
//   );
// }

// const data = [
//     {
//       id: "044d5005-f490-4627-a4ac-4db853ca7402",
//       created_at: "2024-07-02T21:17:36.773Z",
//       updated_at: "2024-07-02T21:17:36.773Z",
//       errors: {},
//       user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//       score: "9.0",
//     },
//     {
//       id: "044d5005-f490-4627-a4ac-4db853ca7402",
//       created_at: "2024-07-02T21:17:36.773Z",
//       score: "9.0",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//     {
//       id: "024d4005-f490-4627-a4ac-4db853ca7403",
//       created_at: "2024-07-03T14:21:12.773Z",
//       score: "7.5",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//     {
//       id: "034d6005-f490-4627-a4ac-4db853ca7404",
//       created_at: "2024-07-04T19:32:45.773Z",
//       score: "8.0",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//     {
//       id: "054d8005-f490-4627-a4ac-4db853ca7405",
//       created_at: "2024-07-05T16:47:21.773Z",
//       score: "15",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//     {
//       id: "064d9005-f490-4627-a4ac-4db853ca7406",
//       created_at: "2024-07-06T11:25:36.773Z",
//       score: "10",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//     {
//       id: "074d7005-f490-4627-a4ac-4db853ca7407",
//       created_at: "2024-07-07T10:40:22.773Z",
//       score: "22",
//       test: {
//         id: "754287a9-6a21-4949-a413-167551227647",
//         course_id: "74db1ee4-efa4-4582-8e46-728537b2f042",
//         user_id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//         topic_id: "ba30722b-17aa-48f7-8568-e527f21bc612",
//         institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//         name: "Depreciation-iz-jos",
//         question_ids: [
//           "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//           "47232e2b-4f33-4242-b7fd-a37bb686d053",
//           "433299e6-b37c-4968-b38a-f3667ca19fce",
//           "d9ea5477-94bb-427b-8deb-912e6dd5d6fd",
//           "7e1ff211-9ac9-48ef-b954-3d524d9c194b",
//           "18293b02-6491-499a-9136-d2b3fed52d9f",
//           "366c7f8e-7256-45f1-8c0e-f04cd5e5a662",
//           "2f7761cb-a853-4314-ab14-acf428690e45",
//           "88c61cce-877f-429b-bc68-f408f1990b1b",
//           "3a8753e4-fa1e-446b-8dff-27fa0dd7f42e",
//           "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//           "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//           "e9b548c0-2359-4d0f-b5fd-f7f7d2e8db91",
//           "154333ae-9ac7-4200-abb4-3431469f9f6e",
//           "84bba906-b5a2-442c-a75d-7482b923a22e",
//           "9cda6674-0ef5-4dcc-ae7c-22cdb839920b",
//           "f6aa8eef-e723-41ef-a1e2-e971464facf2",
//           "2f0de2c0-7dee-4f61-b2b0-8056aff862e7",
//           "dcc9f38f-bbe1-4665-a597-b07e0191d206",
//           "d54f6664-513a-46e7-b949-80d14a54f3e9",
//         ],
//         created_at: "2024-07-02T21:17:36.624Z",
//         updated_at: "2024-07-02T21:17:36.624Z",
//       },
//     },
//   ];
