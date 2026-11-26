import { createFileRoute } from "@tanstack/react-router";
import { HistoryManagementPage } from "@/components/admin/history-management-page";

export const Route = createFileRoute("/admin/history")({
  head: () => ({
    meta: [
      { title: "History Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage demonstration historical stories in the GSP Historical Archive.",
      },
    ],
  }),
  component: HistoryManagementPage,
});
