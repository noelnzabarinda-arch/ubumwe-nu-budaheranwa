import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline.index-BffR9_SB.js
var $$splitComponentImporter = () => import("./timeline.index-TxcKlJl0.mjs");
var Route = createFileRoute("/timeline/")({
	validateSearch: (search) => ({
		...typeof search["q"] === "string" && search["q"] ? { q: search["q"] } : {},
		...typeof search["category"] === "string" && search["category"] ? { category: search["category"] } : {},
		...search["order"] === "newest" ? { order: "newest" } : {}
	}),
	head: () => archiveHead("Historical Timeline", "Follow the historical journey of GSP through carefully sourced records. Explore text-only collection previews while verified dates and events are gathered."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
