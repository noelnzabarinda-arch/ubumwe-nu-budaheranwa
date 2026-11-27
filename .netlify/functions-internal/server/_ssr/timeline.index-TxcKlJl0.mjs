import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as SlidersHorizontal, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, gt as Archive, it as CalendarDays, m as Search, t as X } from "../_libs/lucide-react.mjs";
import { i as timelineEntries, r as timelineCategories, t as filterTimeline } from "./timeline-data-CrM1oIMm.mjs";
import { n as RecordBreadcrumb } from "./record-details-CQYzQIyb.mjs";
import { t as Route } from "./timeline.index-BffR9_SB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline.index-TxcKlJl0.js
var import_jsx_runtime = require_jsx_runtime();
function HistoricalTimeline() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const query = search.q ?? "";
	const category = search.category ?? "all";
	const order = search.order === "newest" ? "newest" : "oldest";
	const results = filterTimeline(timelineEntries, query, category, order);
	const hasFilters = Boolean(query || category !== "all" || order !== "oldest");
	const reset = () => void navigate({
		to: ".",
		search: {},
		replace: true,
		resetScroll: false
	});
	const update = (value) => void navigate({
		to: ".",
		search: (prev) => ({
			...prev,
			...value
		}),
		replace: true,
		resetScroll: false
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "timeline-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "timeline-page-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordBreadcrumb, { timeline: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "timeline-title-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"The Journey",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Through Time" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A shared history, carefully documented. Bringing together the dates, records, and recollections that will trace the journey of Groupe Scolaire des Parents." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "timeline-header-status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }), " Guided by sources. Preserved with care."]
						})] })]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container timeline-workspace",
			"aria-label": "Historical timeline",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "filter-bar timeline-filters",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "search-field",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Search timeline by year or keyword",
									placeholder: "Search by year or keyword…",
									value: query,
									onChange: (e) => update({ q: e.target.value })
								}),
								query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": "Clear timeline search",
									onClick: () => update({ q: "" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "filter-select",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								"aria-label": "Filter timeline by category",
								value: category,
								onChange: (e) => update({ category: e.target.value }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All categories"
								}), timelineCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item
								}, item))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "period-select",
							"aria-label": "Chronological order",
							value: order,
							onChange: (e) => update({ order: e.target.value }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "oldest",
								children: "Oldest to newest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "newest",
								children: "Newest to oldest"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "results-bar",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							results.length,
							" collection ",
							results.length === 1 ? "preview" : "previews",
							" · 0 verified events"
						] }),
						hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "link",
							size: "sm",
							onClick: reset,
							children: ["Reset filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 12 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Undated previews are not placed in historical order" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "timeline-main-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "timeline-context",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "THE HISTORICAL RECORD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Every date",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" needs a source."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Verified dates and events are not yet available. These collection topics show where future records may belong; they are not historical milestones." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verified events" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "00" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Collection previews" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "06" })] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/our-history",
								className: "text-link",
								children: ["Explore our stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "timeline-awaiting",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
							size: 23,
							strokeWidth: 1.3
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The timeline is taking shape." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Historical records are being collected and verified. No founding year, event date, or leadership period is confirmed here." })] })]
					}), results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "vertical-timeline",
						children: results.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "chronicle-entry",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "chronicle-period",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UNDATED" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "To be verified" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "chronicle-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "chronicle-meta",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: entry.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PREVIEW ", String(index + 1).padStart(2, "0")] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: entry.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: entry.description }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										className: "text-link",
										to: "/timeline/$year",
										params: { year: entry.slug },
										children: ["Explore Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
									})
								]
							})]
						}, entry.slug))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
								size: 30,
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No matching collection previews" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified events are available for this search. Try a different keyword or category." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "editorial",
								onClick: reset,
								children: ["Clear filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })]
							})
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "timeline-bottom-nav",
					"aria-label": "Timeline navigation",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "text-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Home"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: "leadership" },
						className: "text-link",
						children: ["Leadership History ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { HistoricalTimeline as component };
