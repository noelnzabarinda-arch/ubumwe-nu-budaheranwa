import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Image, U as Film, dt as ArrowRight, f as ShieldCheck, m as Search, rt as Camera, t as X, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { n as galleryCategories, r as galleryMedia } from "./gallery-data-FBcDQqv2.mjs";
import { t as GalleryCover } from "./gallery-cover-BhjqE10D.mjs";
import { t as Contribution } from "./shared-CtX4rpjO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery.index-B-WhA5j2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchivePlaceholder({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `gallery-placeholder${compact ? " is-compact" : ""}`,
		"aria-label": "Archive media placeholder",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gallery-placeholder-mark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				size: compact ? 23 : 34,
				strokeWidth: 1.1
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HISTORICAL MEDIA AWAITING VERIFICATION" })]
	});
}
function CategoryCard({ category }) {
	const itemCount = galleryMedia.filter((item) => item.categorySlug === category.slug && item.verified).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "gallery-category-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/gallery/$categorySlug",
			params: { categorySlug: category.slug },
			className: "gallery-category-link",
			children: [category.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCover, { imageUrl: category.coverImage }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchivePlaceholder, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery-category-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gallery-category-meta",
						children: itemCount > 0 ? `${itemCount} verified ${itemCount === 1 ? "item" : "items"}` : "Collection in preparation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: category.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category.description }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-link",
						children: ["Explore Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			})]
		})
	});
}
function GalleryPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const filteredCategories = (0, import_react.useMemo)(() => {
		const term = query.trim().toLocaleLowerCase();
		return galleryCategories.filter((category) => !term || `${category.title} ${category.description}`.toLocaleLowerCase().includes(term) || galleryMedia.some((item) => item.verified && item.categorySlug === category.slug && `${item.title} ${item.description} ${item.caption} ${item.year ?? ""}`.toLocaleLowerCase().includes(term)));
	}, [query]);
	const featuredCategory = galleryCategories[0];
	const recentMedia = galleryMedia.filter((item) => item.verified).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gallery-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "gallery-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "breadcrumb",
							"aria-label": "Breadcrumb",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-current": "page",
									children: "Gallery"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-hero-content",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Explore Our Historical Collections" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Photographs and films can hold a community's shared memory. Browse GSP's archive by collection, with every historical item published only when its source and context are verified." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-hero-seal",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
									size: 31,
									strokeWidth: 1.1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"MEMORIES",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"PRESERVED"
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "gallery-hero-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " No unverified archive media is presented as historical evidence."]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container gallery-featured-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-featured",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-featured-cover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCover, { imageUrl: archiveImages.schoolCampus })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-featured-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FEATURED COLLECTION"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "GSP: A shared history" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Begin with the School History collection. Verified photographs and their historical context will be added as materials are reviewed and permission is confirmed." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gallery-featured-count",
								children: "Collection being documented · no verified media yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "text-link",
								to: "/gallery/$categorySlug",
								params: { categorySlug: featuredCategory.slug },
								children: ["Explore Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "gallery-categories-section section-space",
				"aria-labelledby": "gallery-categories-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " BROWSE THE ARCHIVE"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "gallery-categories-title",
								children: "Choose a collection"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "collection-status",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Nine collections · verified materials only"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-search",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Search gallery collections",
									placeholder: "Search collections by category or keyword",
									value: query,
									onChange: (event) => setQuery(event.target.value)
								}),
								query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": "Clear collection search",
									onClick: () => setQuery(""),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gallery-search-hint",
							children: "Search category, title, year, or keyword. Results include verified archive records only."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-category-grid",
							"aria-live": "polite",
							children: filteredCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { category }, category.slug))
						}),
						filteredCategories.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "empty-state gallery-empty-state",
							role: "status",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									size: 28,
									strokeWidth: 1.2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No matching collections" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Try a different title or keyword." })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container gallery-recent-section section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " RECENTLY ADDED"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Newly documented media" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "collection-status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { size: 14 }), " Verified items only"]
					})]
				}), recentMedia.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-recent-grid",
					children: recentMedia.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery/$categorySlug",
						params: { categorySlug: item.categorySlug },
						className: "gallery-recent-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchivePlaceholder, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								item.type === "video" ? "VIDEO" : "PHOTOGRAPH",
								" ·",
								" ",
								item.year ?? "Date unconfirmed"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title })
						]
					}, item.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-recent-empty",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
						size: 22,
						strokeWidth: 1.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified photographs or videos have been added yet. This space will show archive items when they have been reviewed and catalogued." })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contribution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container gallery-bottom-nav",
				"aria-label": "Related archive sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history",
						children: ["Related Historical Stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events",
						children: ["Related Events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/timeline",
						children: ["Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					})
				]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
