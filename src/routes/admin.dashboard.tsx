import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "@/components/admin/dashboard-page";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard Overview | GSP Historical Archive" },
      { name: "description", content: "GSP Historical Archive administration dashboard overview." },
    ],
  }),
  component: AdminDashboardPage,
});
