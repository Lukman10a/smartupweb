// import { NextRequest, NextResponse } from "next/server";

// export const middleware = (req: NextRequest) => {
//   const url = req.nextUrl.clone();

//   // Extract the 'userAuth' cookie directly from the request
//   const userAuth = req.cookies.get("userAuth");
//   let authUser: { status: string; token: string } | undefined;

//   if (userAuth) {
//     try {
//       authUser = JSON.parse(userAuth.value); // Correctly parse the JSON cookie
//     } catch (error) {
//       console.error("Failed to parse userAuth cookie:", error);
//     }
//   }

//   // Define allowed routes for each user type
//   const routes = {
//     student: ["/student"],
//     institution: ["/institution"],
//     // guardian: ["/guardian"],
//   };

//   // Allow unauthenticated users to access the login page
//   if (url.pathname === "/login") {
//     if (authUser) {
//       const redirectPath =
//         authUser.status === "student"
//           ? "/student/dashboard"
//           : "/institution/dashboard";
//       return NextResponse.redirect(new URL(redirectPath, req.url));
//     }
//     return NextResponse.next();
//   }

//   // Redirect authenticated users trying to access the login page to their dashboard
//   if (url.pathname === "/login" && authUser) {
//     const redirectPath =
//       authUser.status === "student"
//         ? "/student/dashboard"
//         : "/institution/dashboard";
//     return NextResponse.redirect(new URL(redirectPath, req.url));
//   }

//   // Redirect authenticated users trying to access the home page to their dashboard
//   if (url.pathname === "/" && authUser) {
//     const redirectPath =
//       authUser.status === "student"
//         ? "/student/dashboard"
//         : "/institution/dashboard";
//     return NextResponse.redirect(new URL(redirectPath, req.url));
//   }

//   // Check if the current path is allowed for the user's status
//   const isStudentStatus = authUser?.status === "student";
//   const isInstitutionStatus = authUser?.status === "institution";

//   const isAllowed =
//     authUser &&
//     (isStudentStatus ? routes["student"] : routes["institution"])?.some(
//       (path: string) => url.pathname.startsWith(path),
//     );

//   // Redirect to the appropriate dashboard if the route is not allowed
//   if (!isAllowed && authUser) {
//     const redirectPath =
//       authUser.status === "student"
//         ? "/student/dashboard"
//         : "/institution/dashboard";
//     return NextResponse.redirect(new URL(redirectPath, req.url));
//   }

//   // Redirect unauthenticated users trying to access protected routes back to home
//   if (!authUser && url.pathname !== "/") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$).*)",
//   ],
// };

// Define a type for the routes object
type RouteMap = {
  student: string[];
  institution: string[];
  educator: string[];
  guardian: string[];
};

const routes: RouteMap = {
  student: ["/student"],
  institution: ["/institution"],
  educator: ["/educator"],
  guardian: ["/guardian"],
};

import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();

  // Extract the 'userAuth' cookie directly from the request
  const userAuth = req.cookies.get("userAuth");
  let authUser: { status: string; token: string } | undefined;

  if (userAuth) {
    try {
      authUser = JSON.parse(userAuth.value); // Correctly parse the JSON cookie
    } catch (error) {
      console.error("Failed to parse userAuth cookie:", error);
    }
  }

  // Define allowed routes for each user type
  const routes = {
    student: ["/student"],
    institution: ["/institution"],
    educator: ["/educator"],
    guardian: ["/guardian"],
  };

  // Allow unauthenticated users to access the login page
  if (url.pathname === "/login") {
    if (authUser) {
      const redirectPath = getRedirectPath(authUser.status);
      return NextResponse.redirect(new URL(redirectPath, req.url));
    }
    return NextResponse.next();
  }

  // Redirect authenticated users trying to access the login page to their dashboard
  if (url.pathname === "/login" && authUser) {
    const redirectPath = getRedirectPath(authUser.status);
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // Redirect authenticated users trying to access the home page to their dashboard
  if (url.pathname === "/" && authUser) {
    const redirectPath = getRedirectPath(authUser.status);
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // Check if the current path is allowed for the user's status
  // const isAllowed = authUser && routes[authUser.status]?.some(
  //   (path: string) => url.pathname.startsWith(path),
  // );

  const isAllowed =
    authUser &&
    (routes as any)[authUser.status]?.some((path: string) =>
      url.pathname.startsWith(path),
    );

  // Redirect to the appropriate dashboard if the route is not allowed
  if (!isAllowed && authUser) {
    const redirectPath = getRedirectPath(authUser.status);
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // Redirect unauthenticated users trying to access protected routes back to home
  if (!authUser && url.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

// Helper function to get redirect path based on user status
const getRedirectPath = (status: string) => {
  switch (status) {
    case "student":
      return "/student/dashboard";
    case "institution":
      return "/institution/dashboard";
    case "educator":
      return "/educator/dashboard";
    case "guardian":
      return "/guardian/dashboard";
    default:
      return "/";
  }
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$).*)",
  ],
};
