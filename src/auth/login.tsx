import Loading from "@/components/loading";
// import { fetchLoginData } from "@/components/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Login() {
  //   const {
  //     isPending: loginPending,
  //     error: loginError,
  //     data: loginData,
  //   } = useQuery({
  //     queryKey: ["classesData"],
  //     queryFn: fetchLoginData,
  //   });

  //   console.log({ loginData });

  //   if (loginPending) return <Loading />;

  //   if (loginError) return "An error has occurred: " + loginError?.message;

  return <div>login</div>;
}
