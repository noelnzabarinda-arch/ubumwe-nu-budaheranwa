import { createFileRoute } from "@tanstack/react-router";
import { AlumniStaffManagementPage } from "@/components/admin/alumni-staff-management-page";

export const Route = createFileRoute("/admin/alumni-staff")({
  head: () => ({
    meta: [
      { title: "Alumni & Staff Management | GSP Historical Archive" },
      {
        name: "description",
        content: "Manage demonstration alumni, former teacher and former staff records.",
      },
    ],
  }),
  component: AlumniStaffManagementPage,
});
