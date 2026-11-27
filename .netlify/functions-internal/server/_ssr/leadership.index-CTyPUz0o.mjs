import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, f as ShieldCheck, ot as BookOpen } from "../_libs/lucide-react.mjs";
import { i as leaders, t as filterLeaders } from "./leadership-data-_gPLGaIT.mjs";
import { i as LeaderGrid, n as CurrentLeaderCard, r as LeaderFilters } from "./leadership-CqUYXjVX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership.index-CTyPUz0o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadershipHistory() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [period, setPeriod] = (0, import_react.useState)("all");
	const [order, setOrder] = (0, import_react.useState)("oldest");
	const currentLeader = leaders.find((leader) => leader.status === "current");
	const results = filterLeaders(leaders, query, status, period, order);
	const currentMatches = currentLeader && results.some((leader) => leader.slug === currentLeader.slug);
	const formerLeaders = results.filter((leader) => leader.status === "former");
	const reset = () => {
		setQuery("");
		setStatus("all");
		setPeriod("all");
		setOrder("oldest");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "leadership-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "leadership-hero",
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
									children: "Leadership"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Leadership Through Generations" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leadership is part of an institution’s story. This archive will honour the people who have served GSP by preserving their records with care and historical integrity." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "leadership-hero-caption",
							children: "A record built from verified sources · No unconfirmed names or dates"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container leadership-current section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " CURRENT HEADMASTER"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Meet our current headmaster." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "collection-status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "location-dot" }), " Name and service dates not provided"]
					})]
				}), currentLeader && currentMatches ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentLeaderCard, { leader: currentLeader }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "leadership-empty",
					role: "status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: currentLeader ? "No current leadership record matches these filters." : "Current leader information is awaiting verification." })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "former-leaders-section section-space",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " FORMER LEADERS"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Those who shaped our shared story." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "collection-status",
								children: [
									formerLeaders.length,
									" former ",
									formerLeaders.length === 1 ? "leader" : "leaders"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderFilters, {
							query,
							status,
							period,
							order,
							onQueryChange: setQuery,
							onStatusChange: (value) => {
								if (value === "all" || value === "current" || value === "former") setStatus(value);
							},
							onPeriodChange: setPeriod,
							onOrderChange: (value) => {
								if (value === "oldest" || value === "newest") setOrder(value);
							},
							onReset: reset
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "results-bar",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									formerLeaders.length,
									" matching former",
									" ",
									formerLeaders.length === 1 ? "leader" : "leaders"
								] }),
								currentMatches && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current profile shown above" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Undated records are not placed in historical order" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderGrid, { leaders: formerLeaders })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container leadership-summary section-space",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " THE LEADERSHIP JOURNEY"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "History is recorded, not assumed." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leadership names, roles, and service periods will be added only when supported by verifiable institutional records or credible historical sources. Until then, the archive leaves the historical sequence open rather than infer a timeline." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "leadership-summary-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), " Former leader names and service dates were not provided."]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "leadership-sources-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						size: 22,
						strokeWidth: 1.3
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sources & verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Staff portraits are shown with role-based descriptions. Names and service periods can be added when those details are provided." })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container leadership-bottom-nav",
				"aria-label": "Leadership archive navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "text-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "back-arrow",
							size: 14
						}), " Back to Home"]
					}),
					currentLeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/leadership/$slug",
						params: { slug: currentLeader.slug },
						className: "text-link",
						children: ["View leader profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
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
export { LeadershipHistory as component };
