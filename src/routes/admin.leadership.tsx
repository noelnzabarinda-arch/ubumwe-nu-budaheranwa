import { createFileRoute } from "@tanstack/react-router";
import { LeadershipManagementPage } from "@/components/admin/leadership-management-page";

export const Route = createFileRoute("/admin/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage and preserve the history of GSP school leadership.",
      },
    ],
  }),
  component: LeadershipManagementPage,
});
