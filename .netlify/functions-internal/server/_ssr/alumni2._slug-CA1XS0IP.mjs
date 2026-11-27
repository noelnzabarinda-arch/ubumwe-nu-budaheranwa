import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as getAlumniNeighbours, t as alumniProfiles } from "./alumni-data-BGZKf5CU.mjs";
import { a as AlumniProfileHeader, i as AlumniMediaGallery, o as AlumniProfileNavigation, s as AlumniSources, t as AlumniDetailSection } from "./alumni-lyS6B-4T.mjs";
import { t as Route } from "./alumni._slug-ChjWlmY6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni2._slug-CA1XS0IP.js
var import_jsx_runtime = require_jsx_runtime();
function AlumniProfile() {
	const { slug } = Route.useParams();
	const profile = alumniProfiles.find((item) => item.slug === slug);
	const neighbours = getAlumniNeighbours(slug);
	if (!profile || !neighbours.exists) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container placeholder-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "GSP HISTORICAL ARCHIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Alumni profile not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This profile is not part of the verified alumni archive." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/alumni",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Alumni History"]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container alumni-detail-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniProfileHeader, { profile }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "alumni-detail-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "alumni-verification-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "RECORD STATUS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This page is a non-personal placeholder. Identity, years, biography, and achievements are awaiting verification and are not presented as facts." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniDetailSection, {
						number: "01",
						eyebrow: "BIOGRAPHY",
						title: "Background & GSP journey",
						paragraphs: ["No verified background or educational journey has been provided.", "Information is omitted until supported by credible institutional or archival sources."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniDetailSection, {
						number: "02",
						eyebrow: "ACHIEVEMENTS & CONTRIBUTIONS",
						title: "Milestones and impact",
						items: profile.achievements
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniDetailSection, {
						number: "03",
						eyebrow: "CONNECTION TO GSP",
						title: "Relationship with GSP",
						paragraphs: ["The person’s documented relationship with GSP, including studies or service and contribution, cannot be stated until verified."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniDetailSection, {
						number: "04",
						eyebrow: "PROFESSIONAL JOURNEY",
						title: "Professional and community journey",
						paragraphs: ["No verified professional journey or community contribution is available."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniMediaGallery, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniSources, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniProfileNavigation, {
						previous: neighbours.previous,
						next: neighbours.next,
						related: neighbours.related
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "alumni-return-nav",
				"aria-label": "Alumni profile navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "editorial",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/alumni",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Alumni History"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					className: "text-link",
					children: ["Related Historical Events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			})
		]
	});
}
//#endregion
export { AlumniProfile as component };
