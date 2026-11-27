import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useLanguage } from "./useLanguage-CSYcsC10.mjs";
import { a as SearchInput, c as filterArchiveSearch, i as SearchFilters, l as searchArchive, n as Route, o as SearchResultGroup, r as SearchEmptyState, s as archiveSearchYears, u as searchTypeTranslationKeys } from "./search-Csfr9hFs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BAdoWXTc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchiveSearchPage() {
	const { t } = useLanguage();
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const query = search.q ?? "";
	const type = search.type ?? "all";
	const year = search.year ?? "all";
	const sort = search.sort === "newest" ? "newest" : "relevance";
	const [draft, setDraft] = (0, import_react.useState)(query);
	const matchingItems = (0, import_react.useMemo)(() => searchArchive(query), [query]);
	const years = (0, import_react.useMemo)(() => archiveSearchYears(matchingItems), [matchingItems]);
	const results = (0, import_react.useMemo)(() => filterArchiveSearch(matchingItems, type, year, sort, query), [
		matchingItems,
		type,
		year,
		sort,
		query
	]);
	const hasFilters = type !== "all" || year !== "all" || sort !== "relevance";
	(0, import_react.useEffect)(() => setDraft(query), [query]);
	const update = (patch) => void navigate({
		to: ".",
		search: (previous) => ({
			...previous,
			...patch
		}),
		replace: true,
		resetScroll: false
	});
	const resetFilters = () => void navigate({
		to: ".",
		search: (previous) => ({ q: previous.q }),
		replace: true,
		resetScroll: false
	});
	const submitSearch = (event) => {
		event.preventDefault();
		navigate({
			to: ".",
			search: (previous) => ({
				...previous,
				q: draft.trim() || void 0
			}),
			replace: false
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "archive-search-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "archive-search-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "breadcrumb archive-search-breadcrumb",
						"aria-label": t("breadcrumb"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: t("home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-current": "page",
								children: t("searchResults")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("searchPageTitle") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: query ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						t("resultsFor"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
							"“",
							query,
							"”"
						] })
					] }) : t("searchPageDescription") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "archive-search-page-form",
						onSubmit: submitSearch,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchInput, {
							value: draft,
							onChange: setDraft
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "heritage",
							children: [
								t("search"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
							]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container archive-search-content",
			"aria-label": t("searchResults"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "archive-search-summary",
					"aria-live": "polite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: query ? `${matchingItems.length} ${t(matchingItems.length === 1 ? "matchingRecord" : "matchingRecords")}` : t("enterKeyword") }), query && hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						results.length,
						" ",
						t("matchingRecordsShown")
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchFilters, {
					type,
					year,
					sort,
					years,
					onTypeChange: (value) => update({ type: value === "all" ? void 0 : value }),
					onYearChange: (value) => update({ year: value === "all" ? void 0 : value }),
					onSortChange: (value) => update({ sort: value === "relevance" ? void 0 : value }),
					onClear: resetFilters,
					hasFilters
				}),
				results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "archive-search-groups",
					children: [
						"stories",
						"timeline",
						"leadership",
						"events",
						"alumni",
						"gallery",
						"documents"
					].map((groupType) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultGroup, {
						label: t(searchTypeTranslationKeys[groupType]),
						items: results.filter((item) => item.type === groupType),
						query
					}, groupType))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchEmptyState, { hasQuery: Boolean(query) })
			]
		})]
	});
}
//#endregion
export { ArchiveSearchPage as component };
