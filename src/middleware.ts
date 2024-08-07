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
    student: ["/dashboard", "/student"],
    institution: ["/institution"],
    educator: ["/educator"],
    guardians: ["/guardians"],
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
    if (isAllowed) {
      // Redirect to dashboard if authenticated and trying to access login
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      return NextResponse.next(); // Allow access to login
    }
  }
  console.log({ isAllowed, userAuth });

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
