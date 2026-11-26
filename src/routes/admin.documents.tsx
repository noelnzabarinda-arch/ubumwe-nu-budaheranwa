import { createFileRoute } from "@tanstack/react-router";
import { DocumentsManagementPage } from "@/components/admin/documents-management-page";

export const Route = createFileRoute("/admin/documents")({
  head: () => ({ meta: [{ title: "Documents Management | GSP Historical Archive" }] }),
  component: DocumentsManagementPage,
});
