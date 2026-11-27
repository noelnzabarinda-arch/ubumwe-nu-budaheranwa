import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LayoutDashboard, C as Menu, E as LogOut, N as Image, W as FileText, X as Clock3, Y as Ellipsis, Z as CircleQuestionMark, a as UserRound, et as ChevronDown, f as ShieldCheck, gt as Archive, ht as ArrowDownRight, i as UsersRound, it as CalendarDays, m as Search, ot as BookOpen, p as Settings, t as X, tt as Check, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as AdminBrand } from "./brand-BvfPH3z4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-page-BJoqVRH2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navigation = [
	{
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		label: "History Management",
		icon: BookOpen
	},
	{
		label: "Timeline Management",
		icon: CalendarDays
	},
	{
		label: "Leadership Management",
		icon: UsersRound
	},
	{
		label: "Events Management",
		icon: CalendarDays
	},
	{
		label: "Alumni & Staff Management",
		icon: UserRound
	},
	{
		label: "Gallery & Media Management",
		icon: Image
	},
	{
		label: "Documents Management",
		icon: FileText
	},
	{
		label: "Sources & Verification",
		icon: ShieldCheck
	},
	{
		label: "Settings",
		icon: Settings
	}
];
var navigationTargets = {
	Dashboard: "/admin/dashboard",
	"History Management": "/admin/history",
	"Timeline Management": "/admin/timeline",
	"Leadership Management": "/admin/leadership",
	"Events Management": "/admin/events",
	"Alumni & Staff Management": "/admin/alumni-staff",
	"Gallery & Media Management": "/admin/gallery",
	"Documents Management": "/admin/documents",
	"Sources & Verification": "/admin/sources",
	Settings: "/admin/settings"
};
var globalSearchRecords = [
	{
		title: "Historical Story Collection",
		group: "Historical Stories",
		to: "/admin/history"
	},
	{
		title: "Timeline Record",
		group: "Timeline Events",
		to: "/admin/timeline"
	},
	{
		title: "Leadership Register",
		group: "Leaders",
		to: "/admin/leadership"
	},
	{
		title: "Important Events",
		group: "Important Events",
		to: "/admin/events"
	},
	{
		title: "Alumni and Staff Directory",
		group: "Alumni & Staff",
		to: "/admin/alumni-staff"
	},
	{
		title: "Gallery Media",
		group: "Gallery Media",
		to: "/admin/gallery"
	},
	{
		title: "Demonstration Document",
		group: "Documents",
		to: "/admin/documents"
	},
	{
		title: "Archive Source Record",
		group: "Sources",
		to: "/admin/sources"
	}
];
var statistics = [
	{
		label: "Historical Stories",
		value: "38",
		icon: BookOpen,
		change: "6 drafts",
		positive: true
	},
	{
		label: "Timeline Events",
		value: "24",
		icon: CalendarDays,
		change: "4 this month",
		positive: true
	},
	{
		label: "Leaders",
		value: "12",
		icon: UserRound,
		change: "2 pending",
		positive: true
	},
	{
		label: "Important Events",
		value: "16",
		icon: Archive,
		change: "3 drafts",
		positive: true
	},
	{
		label: "Alumni & Staff Records",
		value: "86",
		icon: UsersRound,
		change: "8 pending",
		positive: true
	},
	{
		label: "Gallery Media",
		value: "142",
		icon: Image,
		change: "12 new",
		positive: true
	},
	{
		label: "Documents",
		value: "53",
		icon: FileText,
		change: "5 drafts",
		positive: true
	},
	{
		label: "Pending Verification",
		value: "25",
		icon: ShieldCheck,
		change: "Needs attention",
		positive: false
	}
];
var demoRecords = [
	{
		title: "Demonstration: School archive collection",
		type: "Historical story",
		date: "May 16, 2025",
		status: "Draft"
	},
	{
		title: "Demonstration: Community gathering record",
		type: "Important event",
		date: "May 14, 2025",
		status: "Pending review"
	},
	{
		title: "Demonstration: Campus photograph set",
		type: "Gallery media",
		date: "May 12, 2025",
		status: "Published"
	},
	{
		title: "Demonstration: Staff profile record",
		type: "Alumni & staff",
		date: "May 09, 2025",
		status: "Pending review"
	},
	{
		title: "Demonstration: Archive source note",
		type: "Document",
		date: "May 06, 2025",
		status: "Published"
	}
];
var activityItems = [
	{
		title: "Demonstration story record",
		action: "Updated draft",
		date: "Today, 10:42 AM",
		status: "Draft"
	},
	{
		title: "Demonstration photo collection",
		action: "Submitted for review",
		date: "Yesterday, 3:18 PM",
		status: "Pending review"
	},
	{
		title: "Demonstration archive document",
		action: "Published record",
		date: "May 14, 2025",
		status: "Published"
	},
	{
		title: "Demonstration timeline entry",
		action: "Added as draft",
		date: "May 12, 2025",
		status: "Draft"
	}
];
var contentCategories = [
	{
		label: "Historical stories",
		draft: 6,
		published: 24,
		pending: 8,
		total: 38
	},
	{
		label: "Timeline events",
		draft: 4,
		published: 16,
		pending: 4,
		total: 24
	},
	{
		label: "Leaders & staff",
		draft: 3,
		published: 13,
		pending: 8,
		total: 24
	},
	{
		label: "Events & documents",
		draft: 7,
		published: 20,
		pending: 5,
		total: 32
	}
];
var quickActions = [
	{
		label: "Add Historical Story",
		icon: BookOpen,
		target: "History Management"
	},
	{
		label: "Add Timeline Event",
		icon: CalendarDays,
		target: "Timeline Management"
	},
	{
		label: "Add Leader",
		icon: UserRound,
		target: "Leadership Management"
	},
	{
		label: "Add Important Event",
		icon: Archive,
		target: "Events Management"
	},
	{
		label: "Upload Media",
		icon: Image,
		target: "Gallery & Media Management"
	},
	{
		label: "Add Document",
		icon: FileText,
		target: "Documents Management"
	}
];
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `admin-status ${status === "Published" ? "is-published" : status === "Draft" ? "is-draft" : "is-pending"}`,
		children: status
	});
}
function AdminDashboardPage({ children, pageTitle = "Dashboard Overview", activePage = "Dashboard", showGlobalSearch = true }) {
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const [profileOpen, setProfileOpen] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [demoNoticeVisible, setDemoNoticeVisible] = (0, import_react.useState)(true);
	const filteredRecords = demoRecords.filter((record) => {
		const matchesSearch = `${record.title} ${record.type}`.toLowerCase().includes(search.toLowerCase());
		const matchesStatus = statusFilter === "all" || record.status === statusFilter;
		return matchesSearch && matchesStatus;
	});
	const openPlaceholder = (destination) => {
		if (destination === "Leadership Management") {
			navigate({ to: "/admin/leadership" });
			setSidebarOpen(false);
			return;
		}
		setNotice(`${destination} is not available yet. This dashboard preview is frontend-only.`);
		setSidebarOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-dashboard",
		children: [
			sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "admin-sidebar-backdrop",
				"aria-label": "Close admin navigation",
				onClick: () => setSidebarOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `admin-sidebar${sidebarOpen ? " is-open" : ""}`,
				"aria-label": "Admin navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-sidebar-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBrand, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "admin-mobile-close",
							"aria-label": "Close navigation",
							onClick: () => setSidebarOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "admin-sidebar-label",
						children: "WORKSPACE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "admin-nav",
						children: navigation.map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: navigationTargets[label],
							className: `admin-nav-link${activePage === label ? " is-active" : ""}`,
							onClick: () => setSidebarOpen(false),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
							]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-sidebar-bottom",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-sidebar-help",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Need help?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Admin tools are in preview." })] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin/login",
								className: "admin-nav-link admin-logout-link",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 17 }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admin-sidebar-version",
								children: "GSP ARCHIVE · ADMIN PREVIEW"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-main",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "admin-topbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-topbar-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "admin-mobile-menu",
							"aria-label": "Open admin navigation",
							"aria-expanded": sidebarOpen,
							onClick: () => setSidebarOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "admin-breadcrumb",
							children: [
								"Admin ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
								" ",
								pageTitle
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: pageTitle })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-topbar-actions",
						children: [showGlobalSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-global-search-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-global-search",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										size: 16,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "search",
										"aria-label": "Search admin records",
										placeholder: "Search records...",
										value: search,
										onChange: (event) => setSearch(event.target.value)
									}),
									search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Clear search",
										onClick: () => setSearch(""),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
									})
								]
							}), search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admin-global-results",
								role: "region",
								"aria-label": "Global search results",
								children: globalSearchRecords.filter((record) => `${record.title} ${record.group}`.toLowerCase().includes(search.toLowerCase())).map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: record.to,
									onClick: () => setSearch(""),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: record.group }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: record.title })]
								}, `${record.group}-${record.title}`))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-profile-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "admin-profile-button",
								"aria-haspopup": "menu",
								"aria-expanded": profileOpen,
								onClick: () => setProfileOpen(!profileOpen),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "admin-avatar",
										children: "GA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "admin-profile-copy",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Archive Admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Administrator" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 15 })
								]
							}), profileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-profile-menu",
								role: "menu",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "admin-profile-menu-label",
										children: "DEMO PROFILE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin/settings",
										role: "menuitem",
										onClick: () => setProfileOpen(false),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 15 }), " Admin Profile"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin/settings",
										role: "menuitem",
										onClick: () => setProfileOpen(false),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 15 }), " Settings"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "menuitem",
										onClick: () => openPlaceholder("Help / Documentation"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 15 }), " Help / Documentation"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin/login",
										role: "menuitem",
										onClick: () => setProfileOpen(false),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 15 }), " Return to sign in"]
									})
								]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-dashboard-content",
					children: [
						demoNoticeVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-demo-banner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demonstration data" }), " — all counts and records below are sample content, not live archive statistics."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Dismiss demonstration data notice",
									onClick: () => setDemoNoticeVisible(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
								})
							]
						}),
						notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-action-notice",
							role: "status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Dismiss message",
								onClick: () => setNotice(""),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
							})]
						}),
						children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								className: "admin-stats-grid",
								"aria-label": "Demonstration overview statistics",
								children: statistics.map(({ label, value, icon: Icon, change, positive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "admin-stat-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-stat-top",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "admin-stat-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
												size: 17,
												className: "admin-stat-more"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "admin-stat-label",
											children: label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-stat-bottom",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: positive ? "admin-stat-change" : "admin-stat-change is-alert",
												children: [
													positive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { size: 13 }),
													" ",
													change
												]
											})]
										})
									]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-overview-grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "admin-panel admin-activity-panel",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-panel-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Recent Activity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Latest actions across sample records" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "admin-text-button",
											onClick: () => openPlaceholder("Activity history"),
											children: "View all"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "admin-activity-list",
										children: activityItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "admin-activity-item",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "admin-activity-mark",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 15 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "admin-activity-copy",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.action })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: item.date }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: item.status })
											]
										}, item.title))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "admin-panel admin-verification-panel",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-panel-heading",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Verification Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sample records by review state" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
												size: 18,
												className: "admin-panel-heading-icon"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-verification-total",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "demonstration records" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-verification-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "verification-dot pending" }), " Pending review"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "25" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-verification-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "verification-dot verified" }), " Verified"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "73" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-verification-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "verification-dot correction" }), " Needs correction"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "admin-review-button",
											onClick: () => openPlaceholder("Sources & Verification"),
											children: ["Review records ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-overview-grid admin-lower-grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "admin-panel admin-content-panel",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-panel-heading",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Content Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sample status breakdown by category" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "admin-demo-mini-tag",
												children: "DEMO"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-content-legend",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "content-dot published" }), " Published"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "content-dot draft" }), " Draft"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "content-dot pending" }), " Pending review"] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "admin-category-list",
											children: contentCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "admin-category-row",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "admin-category-info",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: category.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [category.total, " sample records"] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "admin-category-bars",
														"aria-label": `${category.published} published, ${category.draft} drafts, ${category.pending} pending review`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "published",
																style: { width: `${category.published / category.total * 100}%` }
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "draft",
																style: { width: `${category.draft / category.total * 100}%` }
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "pending",
																style: { width: `${category.pending / category.total * 100}%` }
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "admin-category-count",
														children: category.total
													})
												]
											}, category.label))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-content-totals",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "20" }), " Draft records"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "73" }), " Published records"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "25" }), " Pending verification"] })
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "admin-panel admin-quick-actions-panel",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "admin-panel-heading",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Quick Actions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Management pages are future placeholders" })] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "admin-quick-actions",
										children: quickActions.map(({ label, icon: Icon, target }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => openPlaceholder(target),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: label }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 14,
													className: "admin-quick-arrow"
												})
											]
										}, label))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "admin-panel admin-records-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-panel-heading admin-records-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Recently Added Records" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Example records for interface preview only" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "admin-status-filter",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only",
													children: "Filter records by status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: statusFilter,
													onChange: (event) => setStatusFilter(event.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "all",
															children: "All statuses"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Draft",
															children: "Draft"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Published",
															children: "Published"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Pending review",
															children: "Pending review"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-table-scroll",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "admin-records-table",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Record title" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Content type" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date created" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
											] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filteredRecords.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: record.title }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.type }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.date }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: record.status }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "admin-record-action",
													onClick: () => openPlaceholder(`View/edit: ${record.title}`),
													children: "View / edit"
												}) })
											] }, record.title)) })]
										}), filteredRecords.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "admin-records-empty",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 19 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No matching demonstration records" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try another search or status filter." })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-records-footer",
										children: [
											"Showing ",
											filteredRecords.length,
											" of ",
											demoRecords.length,
											" sample records",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/",
												className: "admin-public-link",
												children: ["View public archive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "admin-dashboard-footer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GSP Historical Archive · Administration preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }), " Frontend demonstration only"] })]
							})
						] })
					]
				})]
			})
		]
	});
}
var AdminLayout = AdminDashboardPage;
//#endregion
export { AdminLayout as n, AdminDashboardPage as t };
