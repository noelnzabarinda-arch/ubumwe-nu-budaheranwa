import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as eventRecords } from "./events-data-CJ-uNyqA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._slug-DMaUBNQR.js
var $$splitComponentImporter = () => import("./events._slug-DzKspImL.mjs");
var Route = createFileRoute("/events/$slug")({
	head: ({ params }) => archiveHead(eventRecords.find((event) => event.slug === params.slug)?.title ?? "Event unavailable", "A GSP event collection topic awaiting verified historical records and source material."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
