import { createFileRoute } from "@tanstack/react-router";
import { AdminEventsManagementPage } from "@/components/admin/events-management-page";

export const Route = createFileRoute("/admin/events")({
  head: () => ({
    meta: [
      { title: "Events Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage and preserve important events in GSP history.",
      },
    ],
  }),
  component: AdminEventsManagementPage,
});
