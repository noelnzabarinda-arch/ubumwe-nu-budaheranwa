import { r as collectionNames, t as archiveHead } from "./_ssr/archive-data-8EPjNiyy.mjs";
import { Ht as redirect, _ as lazyRouteComponent, v as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_collection-7AIn39fl.js
var $$splitComponentImporter = () => import("./_collection-CTJ62Kdj.mjs");
var Route = createFileRoute("/archive/$collection")({
	beforeLoad: ({ params }) => {
		if (params.collection === "timeline") throw redirect({
			to: "/timeline",
			statusCode: 301
		});
		if (params.collection === "leadership") throw redirect({
			to: "/leadership",
			statusCode: 301
		});
		if (params.collection === "alumni") throw redirect({
			to: "/alumni",
			statusCode: 301
		});
		if (params.collection === "gallery") throw redirect({
			to: "/gallery",
			statusCode: 301
		});
		if (params.collection === "documents") throw redirect({
			to: "/documents",
			statusCode: 301
		});
		if (params.collection === "about") throw redirect({
			to: "/about-archive",
			statusCode: 301
		});
	},
	head: ({ params }) => archiveHead(collectionNames[params.collection] ?? "Collection unavailable", "GSP Historical Archive collections are being prepared with care and historical verification."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
