import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { n as eventNeighbours, r as eventRecords } from "./events-data-CJ-uNyqA.mjs";
import { t as Route } from "./events._slug-DMaUBNQR.mjs";
import { a as EventHeader, c as EventSources, f as RelatedDocuments, l as EventStory, o as EventInformation, p as RelatedEvents, s as EventMediaGallery, t as ArchiveCollectionLinks } from "./events-WbMAGb2V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._slug-DzKspImL.js
var import_jsx_runtime = require_jsx_runtime();
function EventDetails() {
	const { slug } = Route.useParams();
	const event = eventRecords.find((item) => item.slug === slug);
	if (!event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingEvent, {});
	const { previous, next } = eventNeighbours(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "container event-detail-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventHeader, { event }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "event-detail-cover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event-detail-cover-placeholder",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: archiveImages.museumHall,
							alt: "Museum exhibition hall",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MUSEUM COLLECTION · CONTEXT IMAGE" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No event photograph has been supplied for this topic." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Illustrative imagery is not used as historical evidence." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "event-detail-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "record-aside event-detail-aside",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "ON THIS PAGE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#event-background",
								children: "Event background"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#historical-context",
								children: "Historical context"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#what-happened",
								children: "What happened"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#importance-to-gsp",
								children: "Importance to GSP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#related-media",
								children: "Related media"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#related-documents",
								children: "Related documents"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#sources",
								children: "Sources & references"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aside-note",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									size: 22,
									strokeWidth: 1.3
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Historical accounts belong beside the sources that support them." })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event-detail-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventInformation, { event }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventStory, { event }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventMediaGallery, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedDocuments, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventSources, {})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "event-navigation",
					"aria-label": "Event topic navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "event-navigation-neighbor",
							children: previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events/$slug",
								params: { slug: previous.slug },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Previous topic"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previous.title })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quiet-note",
								children: "First collection topic"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "event-navigation-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "editorial",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/events",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Important Events"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/timeline",
								className: "text-link",
								children: ["View Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "event-navigation-neighbor event-navigation-next",
							children: next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events/$slug",
								params: { slug: next.slug },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Next topic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: next.title })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quiet-note",
								children: "Last collection topic"
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedEvents, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveCollectionLinks, {})
	] });
}
function MissingEvent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container placeholder-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
				size: 34,
				className: "text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "GSP HISTORICAL ARCHIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Event record not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This event is not part of the current collection topics. No event has been inferred." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Back to Important Events"]
				})
			})
		]
	});
}
//#endregion
export { EventDetails as component };
