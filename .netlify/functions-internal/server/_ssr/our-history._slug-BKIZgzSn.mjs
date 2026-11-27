import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { a as stories } from "./archive-data-8EPjNiyy.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, it as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { i as StoryCard, r as SectionHeading } from "./shared-CtX4rpjO.mjs";
import { n as storyNeighbours } from "./timeline-data-CrM1oIMm.mjs";
import { t as Route } from "./our-history._slug-8juz9Rh0.mjs";
import { i as VerificationSection, n as RecordBreadcrumb, r as TimelineTextLink, t as MissingRecord } from "./record-details-CQYzQIyb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-history._slug-BKIZgzSn.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryDetails() {
	const { slug } = Route.useParams();
	const story = stories.find((item) => item.slug === slug);
	if (!story) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingRecord, {});
	const { previous, next, related } = storyNeighbours(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container history-record",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordBreadcrumb, { children: story.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "record-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), story.category]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: story.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "record-deck",
						children: story.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "record-metadata",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }), " Period unconfirmed"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Collection preview · Not a verified account"] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "record-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: archiveImages[story.image],
					alt: "Illustrative archival books and papers, not a historical GSP photograph",
					fetchPriority: "high"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Objects of memory · Illustrative archival still life" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Archive illustration · Not historical evidence" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "record-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "record-aside",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "IN THIS COLLECTION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#account",
							children: "The historical account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#records",
							children: "Records & recollections"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#sources",
							children: "Sources & verification"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aside-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 22,
								strokeWidth: 1.3
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shared memory deserves a carefully verified record." })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "record-prose",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "verification-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 19 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "A collection in preparation." }), " This page introduces a future collection, not confirmed GSP history. Dates, names, and historical accounts are awaiting verification."] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "account",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "01 / THE HISTORICAL ACCOUNT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A story waiting to be documented" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"“",
									story.title,
									"” is a proposed collection within ",
									story.category.toLocaleLowerCase(),
									". It provides a place to bring together relevant records and recollections from the Groupe Scolaire des Parents community."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified historical account has been supplied for this topic. The archive does not yet establish what happened, when it happened, or who was involved. Those details will be published only after the supporting material has been reviewed." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "records",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "02 / RECORDS & RECOLLECTIONS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Preserving context, not assumptions" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "School records, dated documents, photographs with known provenance, and consented personal recollections may help document this collection. None are currently available here as evidence." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Quotations, leadership names, school developments, and related historical dates are intentionally left unrecorded until reliable sources can support them." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineTextLink, { slug: story.slug })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSection, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "article-navigation",
				"aria-label": "Story navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history/$slug",
						params: { slug: previous.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Previous Story"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previous.title })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "quiet-note",
						children: "Beginning of the collection"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "editorial",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-history",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Our History"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history/$slug",
						params: { slug: next.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Next Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: next.title })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "quiet-note",
						children: "End of the collection"
					}) })
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "record-related section-space",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "CONTINUE EXPLORING",
				title: "More from our shared story",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/our-history",
					className: "text-link",
					children: ["All stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "story-grid",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story: item }, item.slug))
			})]
		})
	})] });
}
//#endregion
export { HistoryDetails as component };
