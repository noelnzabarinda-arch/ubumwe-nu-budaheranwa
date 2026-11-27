import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as UserRound, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, it as CalendarDays, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as alumniYearLabel } from "./alumni-data-BGZKf5CU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni-lyS6B-4T.js
var import_jsx_runtime = require_jsx_runtime();
function AlumniPortrait({ large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: large ? "alumni-portrait alumni-portrait-large" : "alumni-portrait",
		role: "img",
		"aria-label": "Portrait not yet available",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
			size: large ? 54 : 34,
			strokeWidth: 1,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PORTRAIT AWAITING VERIFICATION" })]
	});
}
function AlumniCard({ profile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "alumni-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniPortrait, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "alumni-card-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: profile.category === "former-student" ? "FORMER STUDENT" : "FORMER TEACHER & STAFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: profile.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "alumni-card-position",
					children: profile.category === "former-student" ? profile.program : profile.position
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.introduction }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "alumni-card-year",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 13 }),
						" ",
						alumniYearLabel(profile)
					]
				}),
				profile.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "text-link",
					to: "/alumni/$slug",
					params: { slug: profile.slug },
					children: ["View Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "alumni-unverified",
					children: "Record unverified"
				})
			]
		})]
	});
}
function AlumniGrid({ profiles }) {
	if (profiles.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "alumni-empty",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
				size: 25,
				strokeWidth: 1.3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No verified profiles available" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Names and biographies will appear here only after historical records are verified." })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "alumni-grid",
		children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniCard, { profile }, profile.slug))
	});
}
function AlumniFilters({ query, category, year, program, order, years, programs, onQueryChange, onCategoryChange, onYearChange, onProgramChange, onOrderChange, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "filter-bar alumni-filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "search-field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Search alumni by name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Search alumni by name",
					placeholder: "Search by name…",
					value: query,
					onChange: (event) => onQueryChange(event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by category",
					value: category,
					onChange: (event) => onCategoryChange(event.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All categories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "former-student",
							children: "Former Students"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "former-staff",
							children: "Former Teachers & Staff"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by graduation year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by graduation year",
					value: year,
					onChange: (event) => onYearChange(event.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All graduation years"
						}),
						years.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "unverified",
							children: "Year unverified"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by class or program"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by class or program",
					value: program,
					onChange: (event) => onProgramChange(event.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All classes & programs"
						}),
						programs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "unverified",
							children: "Program unverified"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Sort alumni"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Sort alumni",
					value: order,
					onChange: (event) => onOrderChange(event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "alphabetical",
						children: "Alphabetical"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "chronological",
						children: "Chronological"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "alumni-reset",
				type: "button",
				onClick: onReset,
				children: "Reset filters"
			})
		]
	});
}
function AlumniProfileHeader({ profile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "breadcrumb record-breadcrumb",
		"aria-label": "Breadcrumb",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/alumni",
				children: "Alumni"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-current": "page",
				children: profile.name
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "alumni-profile-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniPortrait, { large: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " PROFILE STATUS: UNVERIFIED"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: profile.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "alumni-profile-category",
				children: profile.category === "former-student" ? "Former Student" : profile.category === "former-staff" ? "Former Teacher & Staff" : "Record awaiting verification"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.introduction }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "alumni-profile-meta",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }),
						" ",
						alumniYearLabel(profile)
					] }),
					profile.program && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.program }),
					profile.position && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.position }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Verification required"] })
				]
			})
		] })]
	})] });
}
function AlumniDetailSection({ number, eyebrow, title, paragraphs, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "alumni-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [
					number,
					" / ",
					eyebrow
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			paragraphs?.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)),
			items && items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified information is currently available." })
		]
	});
}
function AlumniMediaGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "alumni-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "05 / HISTORICAL PHOTOGRAPHS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Photographs & visual records" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "alumni-media-empty",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
					size: 28,
					strokeWidth: 1.2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No permission-cleared photographs are available. Images will include captions, dates, and sources when verified." })]
			})
		]
	});
}
function AlumniSources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "alumni-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "06 / DOCUMENTS & REFERENCES"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Supporting historical records" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No supporting documents or references have been verified for this profile." })
		]
	});
}
function AlumniProfileNavigation({ previous, next, related }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "alumni-detail-section alumni-profile-navigation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "07 / RELATED PEOPLE & NAVIGATION"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Continue through the alumni archive" }),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "alumni-related-grid",
				children: related.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/alumni/$slug",
					params: { slug: profile.slug },
					children: [
						profile.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })
					]
				}, profile.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "alumni-prev-next",
				children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/alumni/$slug",
					params: { slug: previous.slug },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Previous Profile"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/alumni/$slug",
					params: { slug: next.slug },
					children: ["Next Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { AlumniProfileHeader as a, AlumniMediaGallery as i, AlumniFilters as n, AlumniProfileNavigation as o, AlumniGrid as r, AlumniSources as s, AlumniDetailSection as t };
