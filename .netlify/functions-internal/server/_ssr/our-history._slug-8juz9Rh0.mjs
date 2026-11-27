import { a as stories, t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-history._slug-8juz9Rh0.js
var $$splitComponentImporter = () => import("./our-history._slug-BKIZgzSn.mjs");
var Route = createFileRoute("/our-history/$slug")({
	head: ({ params }) => archiveHead(stories.find((s) => s.slug === params.slug)?.title ?? "Story unavailable", "A historical story collection awaiting verified GSP records and source material."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
