import { createFileRoute } from "@tanstack/react-router";
import { GalleryManagementPage } from "@/components/admin/gallery-management-page";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Media Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage GSP historical photographs, videos and media collections.",
      },
    ],
  }),
  component: GalleryManagementPage,
});
