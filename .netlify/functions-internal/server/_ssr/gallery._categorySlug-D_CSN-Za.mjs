import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as galleryCategories } from "./gallery-data-FBcDQqv2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery._categorySlug-D_CSN-Za.js
var $$splitComponentImporter = () => import("./gallery._categorySlug-D0EJ0R2l.mjs");
var Route = createFileRoute("/gallery/$categorySlug")({
	head: ({ params }) => {
		const category = galleryCategories.find((item) => item.slug === params.categorySlug);
		return archiveHead(category?.title ?? "Gallery Collection", category?.description ?? "Explore a GSP Historical Archive collection.");
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
