import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ChevronLeft, N as Image, Q as ChevronRight, U as Film, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, m as Search, rt as Camera, t as X, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as studentIllustrations, i as getVerifiedCategoryMedia, n as galleryCategories, t as filterGalleryMedia } from "./gallery-data-FBcDQqv2.mjs";
import { t as Route } from "./gallery._categorySlug-D_CSN-Za.mjs";
import { t as GalleryCover } from "./gallery-cover-BhjqE10D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery._categorySlug-D0EJ0R2l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionPlaceholder({ icon = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gallery-placeholder gallery-detail-placeholder",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gallery-placeholder-mark",
			children: icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
				size: 35,
				strokeWidth: 1.1
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				size: 35,
				strokeWidth: 1.1
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NO VERIFIED MEDIA AVAILABLE" })]
	});
}
function CollectionHeader({ category, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "gallery-detail-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "breadcrumb",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						children: "Gallery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-current": "page",
						children: category.title
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery-detail-header-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-detail-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL COLLECTION"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: category.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "gallery-detail-count",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }),
								" ",
								count ? `${count} verified ${count === 1 ? "item" : "items"}` : "No verified items available yet"
							]
						})
					]
				}), category.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCover, { imageUrl: category.coverImage }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionPlaceholder, { icon: category.slug === "videos-documentaries" })]
			})]
		})
	});
}
function MediaFilters({ query, year, type, order, years, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gallery-media-filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "search-field",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Search media by title or description",
						placeholder: "Search titles or descriptions",
						value: query,
						onChange: (event) => onChange("query", event.target.value)
					}),
					query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						"aria-label": "Clear media search",
						onClick: () => onChange("query", ""),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "period-select",
				"aria-label": "Filter media by year",
				value: year,
				onChange: (event) => onChange("year", event.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All years"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "unconfirmed",
						children: "Year unconfirmed"
					}),
					years.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item
					}, item))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "period-select",
				"aria-label": "Filter by media type",
				value: type,
				onChange: (event) => onChange("type", event.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "Photos & videos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "photo",
						children: "Photos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "video",
						children: "Videos"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "period-select",
				"aria-label": "Sort media by date",
				value: order,
				onChange: (event) => onChange("order", event.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "newest",
					children: "Newest to oldest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "oldest",
					children: "Oldest to newest"
				})]
			})
		]
	});
}
function MediaInformation({ media }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "gallery-media-information",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Original title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: media.title })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Historical period" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: media.historicalPeriod ?? "Not confirmed" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: galleryCategories.find((item) => item.slug === media.categorySlug)?.title ?? "Not recorded" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Contributor or source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: media.source ?? "Not identified" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: media.verified ? "Reviewed for archive publication" : "Awaiting review" })] })
		]
	});
}
function PhotoCard({ media, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "gallery-media-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "gallery-photo-button",
			type: "button",
			onClick: onOpen,
			"aria-label": `View ${media.title}`,
			children: media.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: media.imageUrl,
				alt: media.title,
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionPlaceholder, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gallery-media-card-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "gallery-media-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 13 }),
						" ",
						media.year ?? "Date unconfirmed",
						media.source ? ` · ${media.source}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: media.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: media.caption || media.description }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaInformation, { media })
			]
		})]
	});
}
function VideoCard({ media }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "gallery-video-card",
		children: [media.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
			controls: true,
			preload: "metadata",
			poster: media.imageUrl ?? void 0,
			"aria-label": media.title,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", { src: media.videoUrl }), "Your browser does not support the video element."]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gallery-video-placeholder",
			children: [media.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: media.imageUrl,
				alt: "",
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionPlaceholder, { icon: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { size: 15 }), " Video file not supplied"] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gallery-media-card-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "gallery-media-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { size: 13 }),
						" ",
						media.year ?? "Date unconfirmed",
						media.duration ? ` · ${media.duration}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: media.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: media.description }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaInformation, { media })
			]
		})]
	});
}
function PhotoLightbox({ items, index, onClose, onNavigate }) {
	const media = items[index];
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onClose();
			if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
			if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [
		index,
		items.length,
		onClose,
		onNavigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gallery-lightbox",
		role: "presentation",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "gallery-lightbox-panel",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": media.title,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "gallery-lightbox-close",
					size: "icon",
					variant: "ghost",
					"aria-label": "Close photo viewer",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-lightbox-image",
					children: media.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: media.imageUrl,
						alt: media.title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionPlaceholder, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "gallery-lightbox-prev",
					size: "icon",
					variant: "ghost",
					"aria-label": "Previous photo",
					onClick: () => onNavigate((index - 1 + items.length) % items.length),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "gallery-lightbox-next",
					size: "icon",
					variant: "ghost",
					"aria-label": "Next photo",
					onClick: () => onNavigate((index + 1) % items.length),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-lightbox-caption",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [media.year ?? "Date unconfirmed", media.source ? ` · ${media.source}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: media.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: media.caption || media.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaInformation, { media }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "gallery-lightbox-position",
							children: [
								index + 1,
								" / ",
								items.length
							]
						})
					]
				})
			]
		})
	});
}
function RelatedCollections({ category }) {
	const related = category.related.map((slug) => galleryCategories.find((item) => item.slug === slug)).filter((item) => Boolean(item)).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container gallery-related-section section-space",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " CONTINUE EXPLORING"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Related collections" })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gallery-related-grid",
			children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery/$categorySlug",
				params: { categorySlug: item.slug },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
			}, item.slug))
		})]
	});
}
function GalleryDetailsPage() {
	const { categorySlug } = Route.useParams();
	const category = galleryCategories.find((item) => item.slug === categorySlug);
	const [query, setQuery] = (0, import_react.useState)("");
	const [year, setYear] = (0, import_react.useState)("all");
	const [type, setType] = (0, import_react.useState)("all");
	const [order, setOrder] = (0, import_react.useState)("newest");
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const allItems = getVerifiedCategoryMedia(categorySlug);
	const years = (0, import_react.useMemo)(() => Array.from(new Set(allItems.map((item) => item.year).filter((value) => value !== null))).sort((a, b) => b - a), [allItems]);
	const results = (0, import_react.useMemo)(() => filterGalleryMedia(allItems, query, year, type, order), [
		allItems,
		query,
		year,
		type,
		order
	]);
	const photos = results.filter((item) => item.type === "photo");
	const videos = results.filter((item) => item.type === "video");
	const resetFilters = () => {
		setQuery("");
		setYear("all");
		setType("all");
		setOrder("newest");
	};
	const updateFilter = (field, value) => {
		if (field === "query") setQuery(value);
		if (field === "year") setYear(value);
		if (field === "type" && (value === "all" || value === "photo" || value === "video")) setType(value);
		if (field === "order" && (value === "newest" || value === "oldest")) setOrder(value);
	};
	if (!category) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container gallery-not-found",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				size: 32,
				strokeWidth: 1.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Collection not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This gallery collection is not available." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/gallery",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Gallery"]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gallery-detail-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionHeader, {
				category,
				count: allItems.length
			}),
			category.slug === "students-school-life" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container gallery-illustrations section-space",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " STUDENTS & SCHOOL LIFE"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Illustrative student photos" })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gallery-illustrations-note",
						children: "These example images are illustrative only; they are not verified photographs of GSP or part of the historical archive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-illustration-grid",
						children: studentIllustrations.map((imageUrl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "gallery-illustration-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: imageUrl,
								alt: "",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Illustrative image · not verified GSP archive media" })]
						}, imageUrl))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container gallery-detail-content section-space",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " COLLECTION MEDIA"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Photographs & videos" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [
								results.length,
								" verified ",
								results.length === 1 ? "item" : "items"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFilters, {
						query,
						year,
						type,
						order,
						years,
						onChange: updateFilter
					}),
					(query || year !== "all" || type !== "all" || order !== "newest") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-filter-summary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							results.length,
							" matching verified ",
							results.length === 1 ? "item" : "items"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							size: "sm",
							onClick: resetFilters,
							children: "Clear filters"
						})]
					}),
					results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-media-grid",
						children: [photos.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
							media: item,
							onOpen: () => setLightboxIndex(photos.findIndex((photo) => photo.id === item.id))
						}, item.id)), videos.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, { media: item }, item.id))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-detail-empty",
						role: "status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gallery-empty-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
									size: 26,
									strokeWidth: 1.2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "COLLECTION IN PREPARATION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: allItems.length ? "No media matches these filters" : "Historical materials are being collected" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: allItems.length ? "Try a different title, year, or media type." : "There are no verified photographs or videos in this collection yet. Materials will appear here after their source, context, and publication permission have been reviewed." }),
							allItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "editorial",
								onClick: resetFilters,
								children: "Clear filters"
							})
						]
					}),
					lightboxIndex !== null && photos[lightboxIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoLightbox, {
						items: photos,
						index: lightboxIndex,
						onClose: () => setLightboxIndex(null),
						onNavigate: setLightboxIndex
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedCollections, { category }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container gallery-detail-bottom-nav",
				"aria-label": "Related archive sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery",
						className: "text-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Gallery"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history",
						className: "text-link",
						children: ["Related Historical Stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events",
						className: "text-link",
						children: ["Related Events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/timeline",
						className: "text-link",
						children: ["Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			})
		]
	});
}
//#endregion
export { GalleryDetailsPage as component };
