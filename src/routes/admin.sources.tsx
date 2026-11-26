import { createFileRoute } from "@tanstack/react-router";
import { SourcesManagementPage } from "@/components/admin/sources-management-page";

export const Route = createFileRoute("/admin/sources")({
  head: () => ({ meta: [{ title: "Sources & Verification | GSP Historical Archive" }] }),
  component: SourcesManagementPage,
});
