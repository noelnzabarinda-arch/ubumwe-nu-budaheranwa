import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/admin/settings-page";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Administration Settings | GSP Historical Archive" }] }),
  component: SettingsPage,
});
