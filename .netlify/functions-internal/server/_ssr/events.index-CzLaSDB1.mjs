import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.index-CzLaSDB1.js
var $$splitComponentImporter = () => import("./events.index-CdHxuITO.mjs");
var Route = createFileRoute("/events/")({
	validateSearch: (search) => ({
		...typeof search["q"] === "string" && search["q"] ? { q: search["q"] } : {},
		...typeof search["category"] === "string" && search["category"] ? { category: search["category"] } : {},
		...typeof search["year"] === "string" && search["year"] ? { year: search["year"] } : {},
		...search["order"] === "oldest" ? { order: "oldest" } : {},
		...typeof search["page"] === "number" && search["page"] > 1 ? { page: Math.floor(search["page"]) } : {}
	}),
	head: () => archiveHead("Important Events", "Explore GSP event collection topics. Historical dates and event accounts appear only when supported by verified records."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
