import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export const middleware = async (req: NextRequest) => {
  const url = req.nextUrl.clone();
  const userStatus = getCookie("userStatus", { req });

  // Define allowed routes for each user type
  const routes = {
    student: ["/student"],
    institution: ["/institution"],
    educator: ["/educator"],
    guardians: ["/guardians"],
    institutionPages: ["/institutionPages"],
  };

  // Exclude login path from the redirect logic to avoid an infinite loop
  if (url.pathname === "/login") {
    return NextResponse.next();
  }

  // Check if the current path is allowed for the user status
  const isAllowed = Object.entries(routes).some(([status, paths]) => {
    return (
      userStatus === status &&
      paths.some((path) => url.pathname.startsWith(path))
    );
  });

  // If not allowed, redirect to login page
  if (!isAllowed) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
