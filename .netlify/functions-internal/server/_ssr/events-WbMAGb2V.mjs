import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as GraduationCap, M as Landmark, R as HandHeart, W as FileText, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, it as CalendarDays, k as LibraryBig, m as Search, ot as BookOpen, r as Users, t as X, u as Sparkles, ut as ArrowUpRight, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { t as eventCategories } from "./events-data-CJ-uNyqA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-WbMAGb2V.js
var import_jsx_runtime = require_jsx_runtime();
var categoryIcons = [
	Landmark,
	Sparkles,
	HandHeart,
	BookOpen,
	GraduationCap,
	CalendarDays,
	Users,
	LibraryBig
];
function EventsPageHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "events-page-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "breadcrumb events-breadcrumb",
					"aria-label": "Breadcrumb",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-current": "page",
							children: "Important Events"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "GSP HISTORICAL ARCHIVE"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-title-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Important Events in GSP History" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Preserving documented institutional events with care. Each date and account belongs alongside the reliable sources that support it." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "events-header-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }), " Historical accuracy comes before chronology."]
				})
			]
		})
	});
}
function EventHeader({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "breadcrumb record-breadcrumb event-detail-breadcrumb",
		"aria-label": "Breadcrumb",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				children: "Important Events"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-current": "page",
				children: event.title
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "record-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), event.category.title]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: event.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "record-deck",
				children: event.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "record-metadata",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }), " Date or period unconfirmed"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Collection topic · not a verified event"] })]
			})
		]
	})] });
}
function FeaturedEvent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "featured-event",
		"aria-labelledby": "featured-event-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "featured-event-mark",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: archiveImages.museumGallery,
					alt: "",
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "featured-event-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "FEATURED EVENT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "featured-event-title",
						children: "A featured event is yet to be verified."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No event with confirmed source material is available to feature. We’ll share a record here when its history and supporting evidence have been reviewed." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "text-link",
						href: "#event-records",
						children: ["Explore collection topics ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "featured-event-status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " No verified featured event"]
			})
		]
	});
}
function EventCategoryCard({ category, index, selected, onSelect }) {
	const Icon = categoryIcons[index] ?? CalendarDays;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: `event-category-card${selected ? " is-selected" : ""}`,
		type: "button",
		"aria-pressed": selected,
		onClick: () => onSelect(selected ? "all" : category.slug),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "event-category-icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 22,
					strokeWidth: 1.4
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "event-category-title",
				children: category.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "event-category-description",
				children: category.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "event-category-action",
				children: ["Browse topic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
			})
		]
	});
}
function EventCard({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "event-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/events/$slug",
			params: { slug: event.slug },
			className: "event-card-link",
			"aria-label": `Read collection preview: ${event.title}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "event-card-image",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.category.slug === "genocide-remembrance" ? archiveImages.museumExhibit : event.category.slug === "historical-milestones" ? archiveImages.museumHall : archiveImages.museumArchive,
					alt: "",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MUSEUM COLLECTION" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "event-card-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event-card-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "event-category-badge",
							children: event.category.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.year ?? "Date unconfirmed" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.description }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "event-preview-label",
						children: "Collection topic · not a verified event"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-link",
						children: ["Read collection preview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			})]
		})
	});
}
function EventGrid({ events, page, pageSize, onPageChange }) {
	const pageCount = Math.ceil(events.length / pageSize);
	const visibleEvents = events.slice((page - 1) * pageSize, page * pageSize);
	if (!events.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state event-empty-state",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
				size: 31,
				strokeWidth: 1.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No matching collection topics" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There are no verified event records for this selection. Try another category or search." })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "event-grid",
		children: visibleEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event }, event.slug))
	}), pageCount > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "event-pagination",
		"aria-label": "Collection topic pages",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "editorial",
				size: "sm",
				disabled: page === 1,
				onClick: () => onPageChange(page - 1),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Previous"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-live": "polite",
				children: [
					"Page ",
					page,
					" of ",
					pageCount
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "editorial",
				size: "sm",
				disabled: page === pageCount,
				onClick: () => onPageChange(page + 1),
				children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
			})
		]
	})] });
}
function EventFilters({ query, category, year, order, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "filter-bar event-filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "search-field",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Search events by title or keyword",
						placeholder: "Search events or keywords…",
						value: query,
						onChange: (event) => onChange({ q: event.target.value })
					}),
					query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						"aria-label": "Clear event search",
						onClick: () => onChange({ q: "" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter events by category",
					value: category,
					onChange: (event) => onChange({ category: event.target.value }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All categories"
					}), eventCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.slug,
						children: item.title
					}, item.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "period-select",
				"aria-label": "Filter events by year",
				value: year,
				onChange: (event) => onChange({ year: event.target.value }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "all",
					children: "All years"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "undated",
					children: "Year unconfirmed"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "period-select event-sort",
				"aria-label": "Sort events by date",
				value: order,
				onChange: (event) => onChange({ order: event.target.value === "oldest" ? "oldest" : "newest" }),
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
function EventStory({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "record-prose event-story",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "verification-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 19 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Collection topic only — not a verified historical event." }), " No event account, date, participants, or outcomes have been confirmed for this topic."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "event-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "01 / EVENT BACKGROUND"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A topic awaiting historical records" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"“",
						event.title,
						"” is a collection topic reserved for future research in",
						" ",
						event.category.title.toLocaleLowerCase(),
						". It does not confirm that a particular event occurred."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "historical-context",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "02 / HISTORICAL CONTEXT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Context will follow the evidence" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified historical context has been supplied. The archive will add an account only after relevant records have been identified and reviewed." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "what-happened",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "03 / WHAT HAPPENED"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No event details confirmed" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What happened, when it happened, and who was involved are not established in the materials currently available. No quotation or testimony is presented here." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "importance-to-gsp",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "04 / IMPORTANCE TO GSP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Why reliable documentation matters" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Documenting institutional history requires clear provenance and careful verification. This placeholder makes room for that work without treating an unverified topic as fact." })
				]
			})
		]
	});
}
function EventInformation({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "event-information",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "EVENT INFORMATION"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Date or period" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.year ?? "Not confirmed" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.category.title })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not documented" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Related period" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not established" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Leadership period" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not verified" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Topic preview · sources pending" })] })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), " No event location has been verified."] })
		]
	});
}
function EventMediaGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "event-detail-section",
		id: "related-media",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "RELATED PHOTOGRAPHS & VIDEOS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No verified media available" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No photographs or videos have been supplied for this topic. Illustrative archive images are not used as historical evidence." })
		]
	});
}
function RelatedDocuments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "event-detail-section",
		id: "related-documents",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "RELATED DOCUMENTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Supporting records" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No reports, official records, publications, or letters are currently available for this topic." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "event-empty-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 15 }), " Documents awaiting review"]
			})
		]
	});
}
function EventSources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "record-sources",
		id: "sources",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), " SOURCES & REFERENCES"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The record behind the event" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No historical sources have been supplied for this collection topic." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "source-register",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not yet supplied" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not established" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Institution or contributor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not identified" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Document date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Not available" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Awaiting source review" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Reference link" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "No verified reference available" })] })
				]
			})
		]
	});
}
function RelatedEvents() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "related-events",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "RELATED EVENTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No verified related events yet" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Related events will appear here only when their historical connection is documented." })
		]
	});
}
function ArchiveCollectionLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "related-collections section-space",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "section-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "CONTINUE EXPLORING"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Related archive collections" })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "related-collection-links",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history",
						children: ["Our History ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/timeline",
						children: ["Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: "leadership" },
						children: ["Leadership History ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: "gallery" },
						children: ["Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/documents",
						children: ["Documents Archive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
					})
				]
			})]
		})
	});
}
//#endregion
export { EventHeader as a, EventSources as c, FeaturedEvent as d, RelatedDocuments as f, EventGrid as i, EventStory as l, EventCategoryCard as n, EventInformation as o, RelatedEvents as p, EventFilters as r, EventMediaGallery as s, ArchiveCollectionLinks as t, EventsPageHeader as u };
