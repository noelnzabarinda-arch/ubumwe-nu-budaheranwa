import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as timelineEntries } from "./timeline-data-CrM1oIMm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline._year-D1NCOwTu.js
var $$splitComponentImporter = () => import("./timeline._year-BmUw_pIH.mjs");
var Route = createFileRoute("/timeline/$year")({
	head: ({ params }) => archiveHead(`${timelineEntries.find((entry) => entry.slug === params.year)?.title ?? "Entry unavailable"} — Timeline`, "A text-only GSP timeline collection preview. Historical dates, events, leadership, and references await verification."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
