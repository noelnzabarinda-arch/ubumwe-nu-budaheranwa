import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as leaders } from "./leadership-data-_gPLGaIT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership._slug-C9bo2xlH.js
var $$splitComponentImporter = () => import("./leadership._slug-Ds9UGk8j.mjs");
var Route = createFileRoute("/leadership/$slug")({
	head: ({ params }) => archiveHead(leaders.find((leader) => leader.slug === params.slug)?.name ?? "Leader profile unavailable", "A GSP leadership profile prepared for verified biographical and institutional records."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
