import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ot as BookOpen } from "../_libs/lucide-react.mjs";
import { i as filterEventRecords, r as eventRecords, t as eventCategories } from "./events-data-CJ-uNyqA.mjs";
import { d as FeaturedEvent, i as EventGrid, n as EventCategoryCard, r as EventFilters, t as ArchiveCollectionLinks, u as EventsPageHeader } from "./events-WbMAGb2V.mjs";
import { t as Route } from "./events.index-CzLaSDB1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.index-CdHxuITO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pageSize = 4;
function ImportantEvents() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const query = search.q ?? "";
	const category = search.category ?? "all";
	const year = search.year ?? "all";
	const order = search.order ?? "newest";
	const page = search.page ?? 1;
	const results = (0, import_react.useMemo)(() => filterEventRecords(eventRecords, query, category, year, order), [
		query,
		category,
		year,
		order
	]);
	const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
	const currentPage = Math.min(page, pageCount);
	const hasFilters = Boolean(query || category !== "all" || year !== "all" || order !== "newest");
	const update = (value) => void navigate({
		to: ".",
		search: (previous) => {
			const next = {
				...previous,
				...value
			};
			delete next.page;
			return next;
		},
		replace: true,
		resetScroll: false
	});
	const selectCategory = (value) => {
		navigate({
			to: ".",
			search: (previous) => {
				const next = { ...previous };
				delete next.page;
				if (value === "all") delete next.category;
				else next.category = value;
				return next;
			},
			replace: true,
			resetScroll: false
		});
		document.getElementById("event-records")?.scrollIntoView({ behavior: "smooth" });
	};
	const reset = () => void navigate({
		to: ".",
		search: {},
		replace: true,
		resetScroll: false
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsPageHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container events-feature-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedEvent, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "event-categories-section section-space",
			"aria-labelledby": "event-categories-title",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "BROWSE BY SUBJECT"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "event-categories-title",
						children: "Explore event categories"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "collection-status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Categories are not event records"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "event-category-grid",
					children: eventCategories.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCategoryCard, {
						category: item,
						index,
						selected: category === item.slug,
						onSelect: selectCategory
					}, item.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "events-collection-section section-space",
			id: "event-records",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "THE COLLECTION"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Events and collection topics" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " No confirmed event records available"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventFilters, {
						query,
						category,
						year,
						order,
						onChange: update
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "results-bar",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								results.length,
								" collection",
								" ",
								results.length === 1 ? "topic preview" : "topic previews",
								" ·",
								" ",
								results.filter((item) => item.verified).length,
								" verified events"
							] }),
							hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "link",
								size: "sm",
								onClick: reset,
								children: "Clear filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Undated topics are not presented as historical events" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventGrid, {
						events: results,
						page: currentPage,
						pageSize,
						onPageChange: (nextPage) => void navigate({
							to: ".",
							search: (previous) => {
								const next = { ...previous };
								if (nextPage > 1) next.page = nextPage;
								else delete next.page;
								return next;
							},
							replace: true,
							resetScroll: false
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container events-overview section-space",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "events-overview-mark",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
					size: 26,
					strokeWidth: 1.2
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "A CAREFULLY DOCUMENTED HISTORY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Events are organized around evidence." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This collection is prepared to group records by subject, date, and documented context. Topics shown here are placeholders, not evidence that an event took place. Dates, accounts, and connections will be added only when reliable sources have been reviewed." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/timeline",
					className: "text-link",
					children: ["Explore the Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveCollectionLinks, {})
	] });
}
//#endregion
export { ImportantEvents as component };
