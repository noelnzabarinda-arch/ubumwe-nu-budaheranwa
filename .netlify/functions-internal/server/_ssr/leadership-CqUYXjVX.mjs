import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { W as FileText, a as UserRound, dt as ArrowRight, f as ShieldCheck, ft as ArrowLeft, it as CalendarDays, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as leaderPeriodLabel } from "./leadership-data-_gPLGaIT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-CqUYXjVX.js
var import_jsx_runtime = require_jsx_runtime();
function LeaderPortrait({ leader, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: large ? "leader-portrait leader-portrait-large" : "leader-portrait",
		children: leader.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: leader.portrait,
			alt: `${leader.name} portrait`,
			loading: "lazy"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-label": "Portrait not yet available",
			role: "img",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
				size: large ? 54 : 34,
				strokeWidth: 1,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PORTRAIT AWAITING VERIFICATION" })]
		})
	});
}
function CurrentLeaderCard({ leader }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "current-leader-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderPortrait, {
			leader,
			large: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "current-leader-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " CURRENT HEADMASTER"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: leader.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leader-position",
					children: leader.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: leader.introduction }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leader-card-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }),
						" ",
						leaderPeriodLabel(leader)
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Name and dates not provided"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "text-link",
					to: "/leadership/$slug",
					params: { slug: leader.slug },
					children: ["View Full Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})
			]
		})]
	});
}
function FormerLeaderCard({ leader }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "former-leader-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderPortrait, { leader }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "former-leader-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "FORMER LEADER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: leader.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leader-position",
					children: leader.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: leader.introduction }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "leader-period",
					children: leaderPeriodLabel(leader)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "text-link",
					to: "/leadership/$slug",
					params: { slug: leader.slug },
					children: ["View Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
				})
			]
		})]
	});
}
function LeaderGrid({ leaders }) {
	if (leaders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "leadership-empty",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
				size: 25,
				strokeWidth: 1.3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No matching former leaders" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No former leader portraits match these filters." })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "leader-grid",
		children: leaders.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormerLeaderCard, { leader }, leader.slug))
	});
}
function LeaderFilters({ query, status, period, order, onQueryChange, onStatusChange, onPeriodChange, onOrderChange, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "filter-bar leadership-filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "search-field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Search leaders by name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Search leaders by name",
					placeholder: "Search leaders by name…",
					value: query,
					onChange: (event) => onQueryChange(event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by leadership status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by leadership status",
					value: status,
					onChange: (event) => onStatusChange(event.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "Current & former"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "current",
							children: "Current"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "former",
							children: "Former"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Filter by leadership period"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by leadership period",
					value: period,
					onChange: (event) => onPeriodChange(event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All periods"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "unverified",
						children: "Period unverified"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "filter-select",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Sort leadership periods"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Sort leadership periods",
					value: order,
					onChange: (event) => onOrderChange(event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "oldest",
						children: "Oldest to newest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "newest",
						children: "Newest to oldest"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "leadership-reset",
				type: "button",
				onClick: onReset,
				children: "Reset filters"
			})
		]
	});
}
function LeaderProfileHeader({ leader }) {
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
				to: "/leadership",
				children: "Leadership"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-current": "page",
				children: leader.name
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "leader-profile-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderPortrait, {
			leader,
			large: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " PROFILE AWAITING VERIFICATION"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: leader.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leader-position",
				children: leader.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: leader.introduction }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leader-card-meta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }),
					" ",
					leaderPeriodLabel(leader)
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Verification pending"] })]
			})
		] })]
	})] });
}
function BiographySection({ leader }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leadership-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "01 / BIOGRAPHY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A biography to be documented" }),
			leader.biography.length ? leader.biography.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No verified biographical, educational, or professional information has been provided. Personal details will be added only when supported by appropriate public sources." })
		]
	});
}
function LeadershipContributions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leadership-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "02 / LEADERSHIP CONTRIBUTIONS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Developments & contributions" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No institutional developments, decisions, initiatives, or achievements have been verified for this leadership record." })
		]
	});
}
function LeadershipTimeline({ leader }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leadership-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "03 / SERVICE TIMELINE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Service, in the historical record" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leadership-timeline-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [leaderPeriodLabel(leader), ". No appointment date or service events are documented on this profile."] })]
			})
		]
	});
}
function RelatedEvents() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leadership-detail-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "04 / RELATED HISTORICAL EVENTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Events connected to this period" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"No verified historical events are currently linked to this leadership period. Explore the",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/timeline",
					className: "inline-archive-link",
					children: "Historical Timeline"
				}),
				" ",
				"for dated archive records as they become available."
			] })
		]
	});
}
function LeadershipSources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leadership-detail-section leadership-sources",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 14 }), " DOCUMENTS & REFERENCES"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sources behind this profile" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No official records, historical reports, institutional publications, or permission-cleared photographs have been supplied for this profile." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leader-period",
				children: "Source review pending · No materials cited"
			})
		]
	});
}
function LeaderNavigation({ previous, next, related }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "leader-navigation-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leader-neighbour-links",
				children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/leadership/$slug",
					params: { slug: previous.slug },
					className: "text-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Previous leader"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "leader-period",
					children: "No previous verified profile"
				}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/leadership/$slug",
					params: { slug: next.slug },
					className: "text-link",
					children: ["Next leader ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "leader-period",
					children: "No next verified profile"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Other leaders" }),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "leader-related-list",
				children: related.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/leadership/$slug",
					params: { slug: leader.slug },
					children: [
						leader.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })
					]
				}, leader.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No other verified leader profiles are available yet." })
		]
	});
}
//#endregion
export { LeaderNavigation as a, LeadershipSources as c, LeaderGrid as i, LeadershipTimeline as l, CurrentLeaderCard as n, LeaderProfileHeader as o, LeaderFilters as r, LeadershipContributions as s, BiographySection as t, RelatedEvents as u };
