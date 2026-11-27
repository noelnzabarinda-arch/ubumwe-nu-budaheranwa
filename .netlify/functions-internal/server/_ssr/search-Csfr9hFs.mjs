import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { a as stories, t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { _ as lazyRouteComponent, b as Link, v as createFileRoute, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, m as Search, t as X, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as alumniProfiles } from "./alumni-data-BGZKf5CU.mjs";
import { t as documentCategories } from "./documents-data-C1252Jv1.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { r as eventRecords } from "./events-data-CJ-uNyqA.mjs";
import { n as galleryCategories } from "./gallery-data-FBcDQqv2.mjs";
import { n as useLanguage } from "./useLanguage-CSYcsC10.mjs";
import { i as leaders } from "./leadership-data-_gPLGaIT.mjs";
import { i as timelineEntries } from "./timeline-data-CrM1oIMm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-Csfr9hFs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var searchTypeTranslationKeys = {
	stories: "historicalStories",
	timeline: "timelineEvents",
	leadership: "leaders",
	events: "importantEvents",
	alumni: "alumni",
	gallery: "galleryCollections",
	documents: "historicalDocuments"
};
var searchTypes = [
	{
		value: "stories",
		label: "Historical Stories"
	},
	{
		value: "timeline",
		label: "Timeline"
	},
	{
		value: "leadership",
		label: "Leadership"
	},
	{
		value: "events",
		label: "Important Events"
	},
	{
		value: "alumni",
		label: "Alumni & Former Staff"
	},
	{
		value: "gallery",
		label: "Gallery"
	},
	{
		value: "documents",
		label: "Documents"
	}
];
function isSearchType(value) {
	return typeof value === "string" && searchTypes.some((type) => type.value === value);
}
var archiveSearchItems = [
	...stories.map((story) => ({
		id: `story-${story.slug}`,
		type: "stories",
		title: story.title,
		category: story.category,
		description: story.description,
		year: story.period ? Number(story.period.match(/\d{4}/)?.[0]) || null : null,
		href: `/our-history/${story.slug}`,
		image: archiveImages[story.image]
	})),
	...timelineEntries.map((entry) => ({
		id: `timeline-${entry.slug}`,
		type: "timeline",
		title: entry.title,
		category: entry.category,
		description: entry.description,
		year: entry.year,
		href: `/timeline/${entry.slug}`
	})),
	...leaders.map((leader) => ({
		id: `leadership-${leader.slug}`,
		type: "leadership",
		title: leader.name,
		category: leader.title,
		description: leader.introduction,
		year: leader.startYear,
		href: `/leadership/${leader.slug}`
	})),
	...eventRecords.map((event) => ({
		id: `event-${event.slug}`,
		type: "events",
		title: event.title,
		category: event.category.title,
		description: event.description,
		year: event.year,
		href: `/events/${event.slug}`
	})),
	...alumniProfiles.filter((profile) => profile.verified).map((profile) => ({
		id: `alumni-${profile.slug}`,
		type: "alumni",
		title: profile.name,
		category: profile.category === "former-student" ? "Former Student" : profile.category === "former-staff" ? "Former Teacher & Staff" : "Alumni",
		description: profile.introduction,
		year: profile.graduationYear,
		href: `/alumni/${profile.slug}`
	})),
	...galleryCategories.map((category) => ({
		id: `gallery-${category.slug}`,
		type: "gallery",
		title: category.title,
		category: "Gallery Collection",
		description: category.description,
		year: null,
		href: `/gallery/${category.slug}`
	})),
	...documentCategories.map((category) => ({
		id: `document-${category.slug}`,
		type: "documents",
		title: category.name,
		category: "Historical Documents",
		description: category.description,
		year: null,
		href: "/documents"
	}))
];
function normalizedText(value) {
	return value.trim().toLocaleLowerCase();
}
function searchScore(item, query) {
	const title = normalizedText(item.title);
	const category = normalizedText(item.category);
	const typeAliases = {
		stories: "history histories story stories",
		timeline: "timeline historical events",
		leadership: "leaders leadership",
		events: "important events",
		alumni: "alumni former students teachers staff",
		gallery: "gallery galleries photographs photos collections",
		documents: "documents records archive"
	};
	const typeLabel = searchTypes.find((type) => type.value === item.type)?.label ?? "";
	const text = normalizedText(`${item.title} ${item.category} ${item.description} ${item.year ?? ""} ${typeLabel} ${typeAliases[item.type]}`);
	const term = normalizedText(query);
	const tokens = term.split(/\s+/).filter(Boolean);
	if (!term || !text.includes(term) && !tokens.every((token) => text.includes(token))) return 0;
	if (title === term) return 5;
	if (title.includes(term) || tokens.some((token) => title.includes(token))) return 4;
	if (category.includes(term) || tokens.some((token) => category.includes(token))) return 3;
	return 1;
}
function searchArchive(query, items = archiveSearchItems) {
	const term = query.trim();
	if (!term) return [];
	return items.map((item, index) => ({
		item,
		index,
		score: searchScore(item, term)
	})).filter((result) => result.score > 0).sort((a, b) => b.score - a.score || a.index - b.index).map(({ item }) => item);
}
function filterArchiveSearch(items, type, year, sort, query) {
	return items.filter((item) => (type === "all" || item.type === type) && (year === "all" || item.year === Number(year))).sort((a, b) => {
		if (sort === "newest") {
			if (a.year === null) return b.year === null ? 0 : 1;
			if (b.year === null) return -1;
			return b.year - a.year;
		}
		return searchScore(b, query) - searchScore(a, query);
	});
}
function archiveSearchYears(items) {
	return Array.from(new Set(items.flatMap((item) => item.year === null ? [] : [item.year]))).sort((a, b) => b - a).map(String);
}
var suggestions = [
	{
		key: "searchHistorySuggestion",
		query: "history"
	},
	{
		key: "searchTimelineSuggestion",
		query: "timeline"
	},
	{
		key: "searchLeadershipSuggestion",
		query: "leadership"
	},
	{
		key: "searchEventsSuggestion",
		query: "events"
	},
	{
		key: "searchAlumniSuggestion",
		query: "alumni"
	},
	{
		key: "searchGallerySuggestion",
		query: "gallery"
	},
	{
		key: "searchDocumentsSuggestion",
		query: "documents"
	}
];
function GlobalSearchButton() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const { t } = useLanguage();
	const triggerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleShortcut = (event) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
				event.preventDefault();
				setIsOpen((open) => !open);
			}
			if (event.key === "Escape") {
				setIsOpen(false);
				window.requestAnimationFrame(() => triggerRef.current?.focus());
			}
		};
		window.addEventListener("keydown", handleShortcut);
		return () => window.removeEventListener("keydown", handleShortcut);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "header-search-button",
		type: "button",
		"aria-label": t("openSearch"),
		"aria-haspopup": "dialog",
		"aria-expanded": isOpen,
		ref: triggerRef,
		onClick: () => setIsOpen(true),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			size: 20,
			strokeWidth: 1.7
		})
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, { onClose: () => {
		setIsOpen(false);
		window.requestAnimationFrame(() => triggerRef.current?.focus());
	} })] });
}
function SearchOverlay({ onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const searchRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const { t } = useLanguage();
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => searchRef.current?.focus(), 80);
		return () => window.clearTimeout(timer);
	}, []);
	const submitSearch = (event) => {
		event.preventDefault();
		const keyword = query.trim();
		if (!keyword) return;
		onClose();
		navigate({
			to: "/search",
			search: { q: keyword }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "search-overlay",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": t("search"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "search-overlay-backdrop",
			type: "button",
			"aria-label": t("closeSearch"),
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "search-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "search-panel-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": t("closeSearch"),
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 21 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "global-search-form",
					onSubmit: submitSearch,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 25,
							strokeWidth: 1.4
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: searchRef,
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: t("searchPlaceholder"),
							"aria-label": t("search")
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "clear-search",
							"aria-label": t("clearSearch"),
							onClick: () => setQuery(""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 17 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "submit-search",
							"aria-label": t("search"),
							disabled: !query.trim(),
							children: t("search")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "search-hint",
					children: [
						t("searchHint"),
						" · ",
						t("searchKeyboardHint")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchSuggestions, {})
			]
		})]
	});
}
function SearchSuggestions() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "search-suggestions",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: t("exploreCollection").toUpperCase()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `/search?q=${encodeURIComponent(item.query)}`,
			children: [
				t(item.key),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })
			]
		}, item.key)) })]
	});
}
function SearchInput({ value, onChange, placeholder }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "archive-search-input",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				size: 18,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: t("searchArchiveAccessible")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "search",
				value,
				placeholder: placeholder ?? t("searchPlaceholder"),
				onChange: (event) => onChange(event.target.value)
			})
		]
	});
}
function SearchFilters({ type, year, sort, years, onTypeChange, onYearChange, onSortChange, onClear, hasFilters }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "archive-search-filters",
		"aria-label": t("searchResultFilters"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("contentType") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				"aria-label": t("filterContentType"),
				value: type,
				onChange: (event) => {
					const value = event.target.value;
					onTypeChange(isSearchType(value) ? value : "all");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "all",
					children: t("allContentTypes")
				}), searchTypes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: item.value,
					children: t(searchTypeTranslationKeys[item.value])
				}, item.value))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("year") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				"aria-label": t("filterYear"),
				value: year,
				disabled: years.length === 0,
				onChange: (event) => onYearChange(event.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "all",
					children: years.length ? t("allYears") : t("noConfirmedYears")
				}), years.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: item,
					children: item
				}, item))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("sortBy") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				"aria-label": t("sortSearchResults"),
				value: sort,
				onChange: (event) => onSortChange(event.target.value === "newest" ? "newest" : "relevance"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "relevance",
					children: t("relevance")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "newest",
					children: t("newestFirst")
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "link",
				size: "sm",
				disabled: !hasFilters,
				onClick: onClear,
				children: t("clearFilters")
			})
		]
	});
}
function HighlightedText({ text, query }) {
	const terms = query.trim().split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);
	if (!terms.length) return text;
	const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
	const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
	return text.split(pattern).map((part, index) => terms.some((term) => part.toLocaleLowerCase() === term.toLocaleLowerCase()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: part }, `${part}-${index}`) : part);
}
function SearchResultCard({ item, query }) {
	const { t } = useLanguage();
	const label = t(searchTypeTranslationKeys[item.type]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "archive-search-result",
		children: [
			item.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "archive-search-result-image",
				href: item.href,
				tabIndex: -1,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "archive-search-result-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "archive-search-result-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), item.year !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.year })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HighlightedText, {
							text: item.title,
							query
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HighlightedText, {
						text: item.description,
						query
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "archive-search-result-category",
						children: item.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "archive-translation-note",
						children: t("originalLanguageFallback")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "archive-search-result-arrow",
				href: item.href,
				"aria-label": `${t("readRecord")}: ${item.title}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
			})
		]
	});
}
function SearchResultGroup({ label, items, query }) {
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "archive-search-group",
		"aria-labelledby": `search-group-${items[0]?.type}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "archive-search-group-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: `search-group-${items[0]?.type}`,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: items.length })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "archive-search-result-list",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResultCard, {
				item,
				query
			}, item.id))
		})]
	});
}
function SearchEmptyState({ hasQuery }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "archive-search-empty",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "archive-search-empty-mark",
				children: hasQuery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 23,
					strokeWidth: 1.35
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					size: 23,
					strokeWidth: 1.35
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: t(hasQuery ? "noMatchingRecordsEyebrow" : "beginSearchEyebrow").toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(hasQuery ? "noMatchingRecords" : "beginSearch") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: hasQuery ? t("noMatchHelp") : t("beginSearchHelp") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "archive-search-empty-actions",
				children: [hasQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "editorial",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [
							t("returnToArchive"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
						]
					})
				}), !hasQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchSuggestions, {})]
			})
		]
	});
}
var $$splitComponentImporter = () => import("./search-BAdoWXTc.mjs");
var Route = createFileRoute("/search")({
	validateSearch: (search) => ({
		...typeof search["q"] === "string" && search["q"].trim() ? { q: search["q"].trim() } : {},
		...isSearchType(search["type"]) ? { type: search["type"] } : {},
		...typeof search["year"] === "string" && /^\d{4}$/.test(search["year"]) ? { year: search["year"] } : {},
		...search["sort"] === "newest" ? { sort: "newest" } : {}
	}),
	head: () => archiveHead("Search the Archive", "Search the GSP Historical Archive's stories, timeline previews, leadership records, and important events."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { SearchInput as a, filterArchiveSearch as c, SearchFilters as i, searchArchive as l, Route as n, SearchResultGroup as o, SearchEmptyState as r, archiveSearchYears as s, GlobalSearchButton as t, searchTypeTranslationKeys as u };
