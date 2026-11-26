import { createFileRoute } from "@tanstack/react-router";
import { AdminTimelinePage } from "@/components/admin/timeline-page";

export const Route = createFileRoute("/admin/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage GSP historical timeline events and verification states.",
      },
    ],
  }),
  component: AdminTimelinePage,
});
