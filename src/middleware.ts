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
  };

  // Allow access to the login page
  if (url.pathname === "/login") {
    return NextResponse.next(); // Let the request proceed to /login
  }

  // Redirect authenticated users trying to access the home page to their dashboard
  if (url.pathname === "/" && authUser) {
    const redirectPath =
      authUser.status === "student"
        ? "/student/dashboard"
        : "/institution/dashboard";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // Check if the current path is allowed for the user's status
  const isAllowed =
    authUser &&
    routes[authUser.status]?.some((path: string) =>
      url.pathname.startsWith(path),
    );

  // Redirect to the appropriate dashboard if the route is not allowed
  if (!isAllowed && authUser) {
    const redirectPath =
      authUser.status === "student"
        ? "/student/dashboard"
        : "/institution/dashboard";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // Redirect unauthenticated users trying to access protected routes back to home
  if (!authUser && url.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$).*)",
  ],
};