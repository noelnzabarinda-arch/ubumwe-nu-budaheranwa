import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./_ssr/button-B2IzzTDQ.mjs";
import { r as collectionNames } from "./_ssr/archive-data-8EPjNiyy.mjs";
import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_collection-7AIn39fl.mjs";
import { f as ShieldCheck, ft as ArrowLeft, gt as Archive } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_collection-CTJ62Kdj.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionPlaceholder() {
	const { collection } = Route.useParams();
	const title = collectionNames[collection];
	const contribute = collection === "contribute";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container placeholder-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "placeholder-icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
					size: 34,
					strokeWidth: 1.2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "GSP HISTORICAL ARCHIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title ?? "Collection not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contribute ? "Your memories belong in our shared story. We welcome verified photographs, documents, and personal recollections from former students, teachers, and community members." : collection === "about" ? "A dedicated digital archive for the verified history of Groupe Scolaire des Parents, Huye, Rwanda. Our purpose is to preserve records, honour shared memories, and connect generations through carefully sourced history." : title ? "This collection is being prepared. Verified historical records and materials will appear here as they are reviewed." : "This collection is not available. Return home to explore the archive." }),
			contribute ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contribution-guidance",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Preserve with care" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Only share materials you have permission to contribute. Personal information will not be made public without consent." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Contribution submissions are not open yet. Verified contact details will be added here when available." })
				] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "placeholder-status",
				children: "Collection in preparation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Return to the archive"]
				})
			})
		]
	});
}
//#endregion
export { CollectionPlaceholder as component };
