import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginPage } from "@/components/admin/login-page";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Sign In | GSP Historical Archive" },
      { name: "description", content: "Administration sign-in for the GSP Historical Archive." },
    ],
  }),
  component: AdminLoginPage,
});
