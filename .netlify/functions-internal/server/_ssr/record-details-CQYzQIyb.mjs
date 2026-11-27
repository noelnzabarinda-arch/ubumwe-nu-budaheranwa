import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Q as ChevronRight, W as FileText, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/record-details-CQYzQIyb.js
var import_jsx_runtime = require_jsx_runtime();
function RecordBreadcrumb({ children, timeline = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "breadcrumb record-breadcrumb",
		"aria-label": "Breadcrumb",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 }),
			timeline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/timeline",
				children: "Timeline"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/our-history",
				children: "Our History"
			}),
			children && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-current": "page",
				children
			})] })
		]
	});
}
function VerificationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "record-sources",
		id: "sources",
		"aria-labelledby": "sources-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), " SOURCES & VERIFICATION"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "sources-heading",
				children: "The record behind the story"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No historical sources have been supplied for this collection preview. It must not be used as a factual account of GSP history." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "source-register",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not yet supplied" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not yet established" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Contributor / institution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not yet identified" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Awaiting source review" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Document reference" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "No reference available" })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "source-footnote",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 15 }), " Source links will appear only when genuine records are available."]
			})
		]
	});
}
function MissingRecord({ timeline = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container placeholder-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				size: 34,
				className: "text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "GSP HISTORICAL ARCHIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: timeline ? "Timeline entry not found" : "Story not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This record is not part of the archive. Browse the available collection previews instead." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: timeline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/timeline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Back to Timeline"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/our-history",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Back to Our History"]
				})
			})
		]
	});
}
function TimelineTextLink({ slug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/timeline/$year",
		params: { year: slug },
		className: "text-link",
		children: ["View timeline preview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
	});
}
//#endregion
export { VerificationSection as i, RecordBreadcrumb as n, TimelineTextLink as r, MissingRecord as t };
