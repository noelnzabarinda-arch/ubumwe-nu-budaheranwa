import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, it as CalendarDays } from "../_libs/lucide-react.mjs";
import { i as timelineEntries } from "./timeline-data-CrM1oIMm.mjs";
import { i as VerificationSection, n as RecordBreadcrumb, t as MissingRecord } from "./record-details-CQYzQIyb.mjs";
import { t as Route } from "./timeline._year-D1NCOwTu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline._year-BmUw_pIH.js
var import_jsx_runtime = require_jsx_runtime();
function TimelineDetails() {
	const { year } = Route.useParams();
	const entry = timelineEntries.find((item) => item.slug === year);
	if (!entry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingRecord, { timeline: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container timeline-detail history-record",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordBreadcrumb, {
				timeline: true,
				children: entry.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "record-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), entry.category]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: entry.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "record-deck",
						children: entry.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "record-metadata",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }), " Period unconfirmed"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Undated collection preview"] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "timeline-detail-prose record-prose",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "verification-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 19 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Not a verified historical event." }), " This is a collection topic reserved for future records. No year or period has been assigned."] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "THE HISTORICAL CONTEXT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What the record can tell us" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified explanation of events at GSP during a particular period has been supplied for this collection. Historical context and a detailed account will be added only when supporting records have been reviewed." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School developments & leadership" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No school development or leader has been confirmed for this preview. Names, dates, and leadership periods are intentionally omitted rather than inferred." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "RELATED COLLECTION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Continue with the story" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The related history collection provides space for future source material, context, and verified recollections." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-history/$slug",
							params: { slug: entry.storySlug },
							className: "text-link",
							children: ["Read history collection preview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "timeline-bottom-nav",
				"aria-label": "Timeline entry navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "editorial",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/timeline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Timeline"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/archive/$collection",
					params: { collection: "leadership" },
					className: "text-link",
					children: ["Leadership History ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			})
		]
	});
}
//#endregion
export { TimelineDetails as component };
