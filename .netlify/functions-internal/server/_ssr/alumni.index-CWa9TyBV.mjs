import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as filterAlumni, n as alumniStories, t as alumniProfiles } from "./alumni-data-BGZKf5CU.mjs";
import { n as AlumniFilters, r as AlumniGrid } from "./alumni-lyS6B-4T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni.index-CWa9TyBV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AlumniHistory() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [year, setYear] = (0, import_react.useState)("all");
	const [program, setProgram] = (0, import_react.useState)("all");
	const [order, setOrder] = (0, import_react.useState)("alphabetical");
	const verifiedProfiles = alumniProfiles.filter((profile) => profile.verified);
	const results = filterAlumni(verifiedProfiles, query, category, year, program, order);
	const formerStudents = results.filter((profile) => profile.category === "former-student");
	const formerStaff = results.filter((profile) => profile.category === "former-staff");
	const years = Array.from(new Set(verifiedProfiles.map((profile) => profile.graduationYear).filter((value) => value !== null))).map(String).sort();
	const programs = Array.from(new Set(verifiedProfiles.map((profile) => profile.program).filter((value) => Boolean(value)))).sort();
	const reset = () => {
		setQuery("");
		setCategory("all");
		setYear("all");
		setProgram("all");
		setOrder("alphabetical");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "alumni-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "alumni-hero",
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
									children: "Alumni"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "The People Who Shaped Our History" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Preserving the stories and contributions of the GSP community—former students, teachers, and staff who are part of our shared history." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "alumni-hero-caption",
							children: "Verified records only · Privacy and accuracy respected"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container alumni-featured section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FEATURED ALUMNI"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Selected verified profiles." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "collection-status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "location-dot" }), " Verification in progress"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniGrid, { profiles: verifiedProfiles.filter((profile) => Boolean(profile.portrait)).slice(0, 4) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container alumni-directory section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " ALUMNI DIRECTORY"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "People and records." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "collection-status",
						children: [results.length, " verified profiles"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniFilters, {
					query,
					category,
					year,
					program,
					order,
					years,
					programs,
					onQueryChange: setQuery,
					onCategoryChange: (value) => {
						if (value === "all" || value === "former-student" || value === "former-staff") setCategory(value);
					},
					onYearChange: setYear,
					onProgramChange: setProgram,
					onOrderChange: (value) => {
						if (value === "alphabetical" || value === "chronological") setOrder(value);
					},
					onReset: reset
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "former-students-section section-space",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FORMER STUDENTS"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Those who learned at GSP." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [formerStudents.length, " verified profiles"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniGrid, { profiles: formerStudents })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "former-staff-section section-space",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FORMER TEACHERS & STAFF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Those who served GSP." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "collection-status",
							children: [formerStaff.length, " verified profiles"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniGrid, { profiles: formerStaff })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container alumni-stories section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " ALUMNI ACHIEVEMENTS & STORIES"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Documented journeys and contributions." })] })
				}), alumniStories.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "alumni-story-grid",
					children: alumniStories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/alumni/$slug",
						params: { slug: story.slug },
						className: "alumni-story-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: story.category.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: story.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: story.summary })
						]
					}, story.slug))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "alumni-empty",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 25,
							strokeWidth: 1.3
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No verified achievement stories" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Professional, educational, and community achievements will be published only with credible support." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "alumni-verification-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						size: 22,
						strokeWidth: 1.3
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "History recorded with care" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Names, dates, photographs, and achievements are not displayed until sufficiently verified. Statistics are omitted when verified records do not exist." })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container alumni-bottom-nav",
				"aria-label": "Alumni archive navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "text-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "back-arrow",
							size: 14
						}), " Back to Home"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/leadership",
						className: "text-link",
						children: ["Leadership ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events",
						className: "text-link",
						children: ["Important Events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			})
		]
	});
}
//#endregion
export { AlumniHistory as component };
