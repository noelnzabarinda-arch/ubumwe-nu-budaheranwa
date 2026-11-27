import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LockKeyhole, W as FileText, dt as ArrowRight, f as ShieldCheck, gt as Archive, m as Search, mt as ArrowDownToLine, ot as BookOpen, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-B0JGVOUV.mjs";
import { n as documentRecords, r as filterDocuments, t as documentCategories } from "./documents-data-C1252Jv1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents--zNTgYFF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DocumentCategoryCard({ category, count, selected, onSelect }) {
	const Icon = category.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `document-category-card${selected ? " is-selected" : ""}`,
		onClick: () => onSelect(category.slug),
		"aria-pressed": selected,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "document-category-icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 20,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "document-category-title",
				children: category.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "document-category-description",
				children: category.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "document-category-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count === null ? "Count not available" : `${count} documents` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-link",
					children: ["Explore collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
				})]
			})
		]
	});
}
function AccessLevelBadge({ access }) {
	const label = access === "internal" ? "Internal archive" : access;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `access-badge access-${access}`,
		children: [access === "public" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 12 }), label]
	});
}
function DocumentCard({ document, onPreview }) {
	if (document.access !== "public") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "document-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "document-card-cover",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				size: 28,
				strokeWidth: 1.2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: document.format ?? "DOCUMENT" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "document-card-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "document-card-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: document.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: document.year ?? "Date not verified" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: document.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: document.description }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "document-card-source",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Source: ", document.source ?? "Not verified"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessLevelBadge, { access: document.access })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "document-card-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "link",
						size: "sm",
						onClick: () => onPreview(document),
						children: ["View document ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					}), document.fileUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "document-download-link",
						href: document.fileUrl,
						download: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { size: 14 }),
							" Download ",
							document.format ?? "file"
						]
					})]
				})
			]
		})]
	});
}
function FeaturedDocument({ onPreview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "featured-document",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "featured-document-cover",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
				size: 34,
				strokeWidth: 1.1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COLLECTION PREVIEW" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "featured-document-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FEATURED DOCUMENT"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No verified document is featured yet" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Authentic documents are still being gathered and reviewed. No title, date, author, or source has been supplied for a featured item." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "editorial",
					onClick: onPreview,
					children: ["View document ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "featured-document-caption",
					children: "Preview status: no file available"
				})
			]
		})]
	});
}
function DocumentFilters({ query, category, year, type, order, categories, years, types, onChange, onClear, hasFilters }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "documents-filter-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "documents-filter-bar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "documents-search",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 16,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search documents by title or keyword"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (event) => onChange("query", event.target.value),
							placeholder: "Search title or keyword"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Clear search",
							onClick: () => onChange("query", ""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: category,
					onChange: (event) => onChange("category", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All categories"
					}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.slug,
						children: item.name
					}, item.slug))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: year,
					onChange: (event) => onChange("year", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All years"
					}), years.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item === "undated" ? "Date not verified" : item
					}, item))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by document type"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: type,
					onChange: (event) => onChange("type", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All document types"
					}), types.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item
					}, item))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Sort documents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: order,
					onChange: (event) => onChange("order", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "newest",
						children: "Newest to oldest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "oldest",
						children: "Oldest to newest"
					})]
				})] })
			]
		}), hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "link",
			size: "sm",
			onClick: onClear,
			children: ["Clear filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })]
		})]
	});
}
function DocumentPreview({ document, open, onOpenChange }) {
	const [failedPreview, setFailedPreview] = (0, import_react.useState)(false);
	const publicFile = document?.access === "public" && document.fileUrl && !failedPreview;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (nextOpen) => {
			if (!nextOpen) setFailedPreview(false);
			onOpenChange(nextOpen);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "document-preview-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "document-preview-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "DOCUMENT PREVIEW"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: document?.title ?? "Document preview unavailable" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: document?.description ?? "No verified document or file has been supplied to the archive." })
					]
				}),
				publicFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					className: "document-preview-frame",
					title: `Preview of ${document.title}`,
					src: document.fileUrl,
					onError: () => setFailedPreview(true)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "document-preview-placeholder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 34,
							strokeWidth: 1.2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No public preview is available" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: document?.access !== "public" ? "This material is not available for public access." : "A verified file has not been deposited for this item." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "document-preview-details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: document?.source ?? "Not verified" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: document?.year ?? "Not verified" })] }),
						document && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Access" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessLevelBadge, { access: document.access }) })] })
					]
				}),
				document?.access === "public" && document.fileUrl && !failedPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "document-preview-download",
					href: document.fileUrl,
					download: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { size: 15 }), " Download approved public document"]
				})
			]
		})
	});
}
var documentTypes = [
	"Official record",
	"Report",
	"Certificate",
	"Letter",
	"Meeting record",
	"Publication",
	"Research"
];
function DocumentsArchive() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [year, setYear] = (0, import_react.useState)("all");
	const [type, setType] = (0, import_react.useState)("all");
	const [order, setOrder] = (0, import_react.useState)("newest");
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [previewDocument, setPreviewDocument] = (0, import_react.useState)(null);
	const results = (0, import_react.useMemo)(() => filterDocuments(documentRecords, {
		query,
		category,
		year,
		type,
		order
	}), [
		query,
		category,
		year,
		type,
		order
	]);
	const hasFilters = Boolean(query || category !== "all" || year !== "all" || type !== "all" || order !== "newest");
	const changeFilter = (field, value) => {
		if (field === "query") setQuery(value);
		if (field === "category") setCategory(value);
		if (field === "year") setYear(value);
		if (field === "type") setType(value);
		if (field === "order") setOrder(value === "oldest" ? "oldest" : "newest");
	};
	const clearFilters = () => {
		setQuery("");
		setCategory("all");
		setYear("all");
		setType("all");
		setOrder("newest");
	};
	const showPreview = (document = null) => {
		setPreviewDocument(document);
		setPreviewOpen(true);
	};
	const years = Array.from(new Set(documentRecords.map((record) => record.year?.toString() ?? "undated"))).sort((a, b) => {
		if (a === "undated") return 1;
		if (b === "undated") return -1;
		return Number(b) - Number(a);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "documents-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "archive-page-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "archive-breadcrumb",
							"aria-label": "Breadcrumb",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Documents Archive" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "archive-page-title-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "The Records That Preserve Our History" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A careful home for the documents and institutional records that illuminate GSP’s history. Each item will be reviewed for provenance, accuracy, permissions, and access before it is shared." })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container documents-feature-section",
				"aria-label": "Featured document",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedDocument, { onPreview: () => showPreview() })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "documents-categories-section section-space",
				"aria-labelledby": "document-categories-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " BROWSE THE COLLECTION"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "document-categories-title",
							children: "Document categories"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Counts reflect documents listed here"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "document-category-grid",
						children: documentCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentCategoryCard, {
							category: item,
							count: documentRecords.filter((record) => record.category === item.slug && record.access === "public").length,
							selected: category === item.slug,
							onSelect: (slug) => {
								setCategory((current) => current === slug ? "all" : slug);
								document.getElementById("document-collection")?.scrollIntoView({ behavior: "smooth" });
							}
						}, item.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "documents-collection-section section-space",
				id: "document-collection",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " THE COLLECTION"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Search the documents" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "collection-status",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Publicly approved material only"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentFilters, {
							query,
							category,
							year,
							type,
							order,
							categories: documentCategories,
							years,
							types: documentTypes,
							onChange: changeFilter,
							onClear: clearFilters,
							hasFilters
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "documents-results-bar",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									results.length,
									" publicly available ",
									results.length === 1 ? "document" : "documents"
								] }),
								hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "link",
									size: "sm",
									onClick: clearFilters,
									children: "Clear filters"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Restricted and internal records are not listed" })
							]
						}),
						results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "document-list",
							children: results.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentCard, {
								document: record,
								onPreview: showPreview
							}, record.id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "documents-empty-state",
							role: "status",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "documents-empty-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										size: 24,
										strokeWidth: 1.3
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "VERIFIED COLLECTION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: hasFilters ? "No documents match these filters" : "No verified documents are available yet" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No public documents have been supplied and approved for this collection. We will publish records only when their source, description, and access permissions have been reviewed." }),
								hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "editorial",
									onClick: clearFilters,
									children: ["Clear filters ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "documents-access-note",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "access-badge access-public",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }), " Public"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Approved for general visitors. Download links appear only when a public file is available." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "access-badge access-restricted",
									children: "Restricted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "access-badge access-internal",
									children: "Internal archive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Restricted and internal materials are withheld and cannot be previewed or downloaded here." })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container documents-contribute section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " HELP PRESERVE THE RECORD"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Have a document to share?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Read the archive’s contribution guidance before sharing materials or personal information." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "text-link",
					to: "/archive/$collection",
					params: { collection: "contribute" },
					children: ["Contribution guidance ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPreview, {
				document: previewDocument,
				open: previewOpen,
				onOpenChange: setPreviewOpen
			})
		]
	});
}
//#endregion
export { DocumentsArchive as component };
