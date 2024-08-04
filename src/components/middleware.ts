// import { NextRequest, NextResponse } from "next/server";
// import { getCookie, hasCookie } from "cookies-next";

// export const middleware = async (req: NextRequest) => {
//   const url = req.nextUrl.clone();

//   let authUser: { status: string; token: string } | undefined;

//   if (hasCookie("userAuth")) {
//     authUser = JSON.parse(getCookie("userAuth") as string);
//   } else {
//     authUser = undefined;
//   }

//   // Define allowed routes for each user type
//   const routes = {
//     student: ["/"],
//     institution: ["/institution"],
//     educator: ["/educator"],
//     guardians: ["/guardians"],
//     institutionPages: ["/institutionPages"],
//   };

//   // Exclude login path from the redirect logic to avoid an infinite loop
//   if (url.pathname === "/login") {
//     return NextResponse.next();
//   }

//   // Check if the current path is allowed for the user status
//   const isAllowed = Object.entries(routes).some(([status, paths]) => {
//     return (
//       authUser?.status === status &&
//       paths.some((path) => url.pathname.startsWith(path))
//     );
//   });

//   // If not allowed, redirect to login page
//   if (!isAllowed) {
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };

import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();

  // Extract the 'userAuth' cookie directly from the request
  const userAuth = req.cookies.get("userAuth");
  let authUser: { status: string; token: string } | undefined;

  if (userAuth) {
    try {
      authUser = userAuth;
    } catch (error) {
      console.error("Failed to parse userAuth cookie:", error);
    }
  }

  // Define allowed routes for each user type
  const routes = {
    student: ["/student", "/dashboard"],
    institution: ["/institution"],
    educator: ["/educator"],
    guardians: ["/guardians"],
    institutionPages: ["/institutionPages"],
  };

  // Check if the current path is allowed for the user status
  const isAllowed = Object.entries(routes).some(([status, paths]) => {
    return (
      authUser?.status === status &&
      paths.some((path) => url.pathname.startsWith(path))
    );
  });

  // Exclude login path from the redirect logic to avoid an infinite loop
  if (url.pathname === "/login") {
    return NextResponse.next();
  }

  // If not allowed, redirect to login page
  if (!isAllowed) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (["/login"].includes(req.nextUrl.pathname)) {
    if (authUser && authUser.status) {
      // Redirect to dashboard if authenticated and trying to access login/register
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.next(); // Allow access to login/register
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
