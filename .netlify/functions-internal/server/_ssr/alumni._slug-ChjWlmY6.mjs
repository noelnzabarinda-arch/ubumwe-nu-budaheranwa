import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as alumniProfiles } from "./alumni-data-BGZKf5CU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni._slug-ChjWlmY6.js
var $$splitComponentImporter = () => import("./alumni2._slug-CA1XS0IP.mjs");
var Route = createFileRoute("/alumni/$slug")({
	head: ({ params }) => archiveHead(alumniProfiles.find((profile) => profile.slug === params.slug)?.name ?? "Alumni profile unavailable", "A GSP alumni profile prepared for verified biographical records."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
