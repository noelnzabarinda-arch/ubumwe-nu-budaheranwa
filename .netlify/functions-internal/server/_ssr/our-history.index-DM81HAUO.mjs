import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { a as stories, i as filterStories, n as categories } from "./archive-data-8EPjNiyy.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as SlidersHorizontal, dt as ArrowRight, m as Search, ot as BookOpen, t as X } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { i as StoryCard, n as SampleNotice, t as Contribution } from "./shared-CtX4rpjO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-history.index-DM81HAUO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OurHistory() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [period, setPeriod] = (0, import_react.useState)("all");
	const results = filterStories(stories, query, category, period);
	const reset = () => {
		setQuery("");
		setCategory("all");
		setPeriod("all");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "hero-image",
					src: archiveImages.museumExterior,
					alt: "Museum exterior"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container page-hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "breadcrumb",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our History" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "THE JOURNEY THAT CONNECTS US"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Our History" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A shared past. Many voices. One story worth preserving." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "banner-caption",
							children: "Museum and archive collection"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container history-introduction section-space",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "OUR PAST, THOUGHTFULLY PRESERVED"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Understanding where we began.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Remembering who we are." })
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The history of Groupe Scolaire des Parents belongs to its whole community. This collection is being created to bring its records, memories, and stories together with care." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each account will be grounded in verified sources. Until those materials are available, the collections below offer a preview of the stories the archive hopes to preserve." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: archiveImages.books,
					alt: "Illustrative bound books awaiting archival care",
					loading: "lazy"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "history-stories section-space",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "EXPLORE OUR SHARED PAST"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The story collection" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "location-dot" }), " An archive in the making"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "filter-bar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "search-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Search historical stories",
										placeholder: "Search stories, memories, keywords…",
										value: query,
										onChange: (e) => setQuery(e.target.value)
									}),
									query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Clear search",
										onClick: () => setQuery(""),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "filter-select",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by category",
									value: category,
									onChange: (e) => setCategory(e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All categories"
									}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item,
										children: item
									}, item))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "period-select",
								"aria-label": "Filter by period",
								value: period,
								onChange: (e) => setPeriod(e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All periods"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "unconfirmed",
									children: "Period unconfirmed"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "results-bar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								results.length,
								" collection ",
								results.length === 1 ? "preview" : "previews"
							] }),
							(query || category !== "all" || period !== "all") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "link",
								size: "sm",
								onClick: reset,
								children: ["Reset filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 12 })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified dates coming as sources are confirmed" })
						]
					}),
					results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "story-grid history-grid",
						children: results.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
							story,
							full: true
						}, story.slug))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
								size: 32,
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No stories found" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No collection previews match your search. Try another word or category." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "editorial",
								onClick: reset,
								children: ["Clear filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleNotice, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contribution, {})
	] });
}
//#endregion
export { OurHistory as component };
