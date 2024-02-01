import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events:id",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthig",
  ],
  ignoredRoutes: [
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthig",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
