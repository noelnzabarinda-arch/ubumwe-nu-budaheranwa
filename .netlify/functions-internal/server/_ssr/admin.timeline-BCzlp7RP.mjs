import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LayoutDashboard, C as Menu, E as LogOut, N as Image, W as FileText, Z as CircleQuestionMark, a as UserRound, b as Pencil, c as Trash2, dt as ArrowRight, et as ChevronDown, f as ShieldCheck, ft as ArrowLeft, gt as Archive, i as UsersRound, it as CalendarDays, m as Search, ot as BookOpen, p as Settings, q as Eye, t as X, tt as Check, v as Plus } from "../_libs/lucide-react.mjs";
import { t as AdminBrand } from "./brand-BvfPH3z4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.timeline-BCzlp7RP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navigation = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		to: "/admin/dashboard"
	},
	{
		label: "History Management",
		icon: BookOpen
	},
	{
		label: "Timeline Management",
		icon: CalendarDays,
		to: "/admin/timeline"
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
var categories = [
	"School Foundation",
	"Institutional Development",
	"Educational Milestones",
	"Leadership Changes",
	"School Events",
	"Community Activities",
	"Historical Remembrance",
	"Anniversaries"
];
var demoEvents = [
	{
		id: 1,
		title: "[Demonstration] Archive collection placeholder",
		slug: "demo-archive-collection",
		year: "2025",
		month: "May",
		day: "16",
		description: "A placeholder record used to demonstrate timeline presentation.",
		fullDescription: "Demonstration only. Replace with a sourced historical record.",
		category: "Institutional Development",
		relatedStory: "[Demo] Historical story record",
		sources: "[Demo] Source or reference to be supplied",
		verificationNotes: "No source has been confirmed.",
		verificationStatus: "Needs Correction",
		publicationStatus: "Draft",
		updatedAt: "May 16, 2025"
	},
	{
		id: 2,
		title: "[Demonstration] Community archive milestone",
		slug: "demo-community-milestone",
		year: "2024",
		month: "",
		day: "",
		description: "Text-only preview of a possible community-related timeline entry.",
		fullDescription: "Demonstration only. This entry does not assert a historical fact.",
		category: "Community Activities",
		relatedStory: "[Demo] Community story record",
		sources: "[Demo] Source register entry",
		verificationNotes: "Reference details require review.",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		updatedAt: "May 14, 2025"
	},
	{
		id: 3,
		title: "[Demonstration] Educational record preview",
		slug: "demo-educational-record",
		year: "2023",
		month: "September",
		day: "",
		description: "A demonstration record for the educational milestones category.",
		fullDescription: "Demonstration only. Historical claims must remain unconfirmed until sourced.",
		category: "Educational Milestones",
		relatedStory: "[Demo] Educational history record",
		sources: "Source: [to be verified]",
		verificationNotes: "Awaiting independent source confirmation.",
		verificationStatus: "Verified",
		publicationStatus: "Published",
		updatedAt: "May 12, 2025"
	},
	{
		id: 4,
		title: "[Demonstration] Leadership archive entry",
		slug: "demo-leadership-entry",
		year: "2022",
		month: "",
		day: "",
		description: "A placeholder for a future sourced leadership-related record.",
		fullDescription: "Demonstration only. No real person or historical period is represented.",
		category: "Leadership Changes",
		relatedStory: "[Demo] Leadership history record",
		sources: "[Demo] Leadership reference file",
		verificationNotes: "Verified in demonstration workflow.",
		verificationStatus: "Verified",
		publicationStatus: "Published",
		updatedAt: "May 09, 2025"
	},
	{
		id: 5,
		title: "[Demonstration] School event record",
		slug: "demo-school-event",
		year: "2021",
		month: "November",
		day: "20",
		description: "An example used to test year, category and status filters.",
		fullDescription: "Demonstration only and not a claim about an actual GSP event.",
		category: "School Events",
		relatedStory: "[Demo] School event story",
		sources: "",
		verificationNotes: "Draft source details are incomplete.",
		verificationStatus: "Draft",
		publicationStatus: "Draft",
		updatedAt: "May 06, 2025"
	}
];
var emptyDraft = {
	title: "",
	slug: "",
	year: "",
	month: "",
	day: "",
	description: "",
	fullDescription: "",
	category: "",
	relatedStory: "",
	sources: "",
	verificationNotes: "",
	verificationStatus: "Draft",
	publicationStatus: "Draft"
};
function StatusBadge({ status, publication = false }) {
	const normalized = status.toLowerCase().replaceAll(" ", "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `admin-status ${publication ? "publication-" : ""}${normalized}`,
		children: status
	});
}
function AdminTimelinePage() {
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const [profileOpen, setProfileOpen] = (0, import_react.useState)(false);
	const [events, setEvents] = (0, import_react.useState)(demoEvents);
	const [search, setSearch] = (0, import_react.useState)("");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("all");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [verificationFilter, setVerificationFilter] = (0, import_react.useState)("all");
	const [publicationFilter, setPublicationFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("oldest");
	const [page, setPage] = (0, import_react.useState)(1);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft);
	const [viewEvent, setViewEvent] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [demoVisible, setDemoVisible] = (0, import_react.useState)(true);
	const years = (0, import_react.useMemo)(() => Array.from(new Set(events.map((event) => event.year).filter(Boolean))).sort(), [events]);
	const filteredEvents = (0, import_react.useMemo)(() => {
		const normalized = search.trim().toLowerCase();
		return [...events.filter((event) => {
			return (!normalized || `${event.title} ${event.description} ${event.relatedStory}`.toLowerCase().includes(normalized)) && (yearFilter === "all" || event.year === yearFilter) && (categoryFilter === "all" || event.category === categoryFilter) && (verificationFilter === "all" || event.verificationStatus === verificationFilter) && (publicationFilter === "all" || event.publicationStatus === publicationFilter);
		})].sort((a, b) => {
			if (sort === "alphabetical") return a.title.localeCompare(b.title);
			const yearDifference = Number(a.year) - Number(b.year);
			if (Number.isNaN(yearDifference)) return a.title.localeCompare(b.title);
			return sort === "newest" ? -yearDifference : yearDifference;
		});
	}, [
		events,
		search,
		yearFilter,
		categoryFilter,
		verificationFilter,
		publicationFilter,
		sort
	]);
	const pageSize = 5;
	const pageCount = Math.max(1, Math.ceil(filteredEvents.length / pageSize));
	const safePage = Math.min(page, pageCount);
	const pagedEvents = filteredEvents.slice((safePage - 1) * pageSize, safePage * pageSize);
	const previewEvents = [...events].filter((event) => event.publicationStatus === "Published").sort((a, b) => Number(a.year) - Number(b.year));
	const publishedCount = events.filter((event) => event.publicationStatus === "Published").length;
	const draftCount = events.filter((event) => event.verificationStatus === "Draft").length;
	const pendingCount = events.filter((event) => event.verificationStatus === "Pending Verification").length;
	const openAdd = () => {
		setEditingId(null);
		setDraft(emptyDraft);
		setFormOpen(true);
	};
	const openEdit = (event) => {
		setEditingId(event.id);
		setDraft({
			title: event.title,
			slug: event.slug,
			year: event.year,
			month: event.month,
			day: event.day,
			description: event.description,
			fullDescription: event.fullDescription,
			category: event.category,
			relatedStory: event.relatedStory,
			sources: event.sources,
			verificationNotes: event.verificationNotes,
			verificationStatus: event.verificationStatus,
			publicationStatus: event.publicationStatus
		});
		setFormOpen(true);
	};
	const setDraftField = (field, value) => setDraft((current) => ({
		...current,
		[field]: value
	}));
	const saveDraft = (action) => {
		if (!draft.title.trim()) {
			setNotice("Event title is required.");
			return;
		}
		if (!draft.year.trim()) {
			setNotice("Historical year is required.");
			return;
		}
		if (action === "verification" && !draft.sources.trim()) {
			setNotice("Historical sources are required before submitting for verification.");
			return;
		}
		if (action === "publish") {
			if (!draft.sources.trim()) {
				setNotice("Historical sources are required before publishing.");
				return;
			}
			if (draft.verificationStatus !== "Verified") {
				setNotice("Only a verified event can be published.");
				return;
			}
		}
		const nextStatus = action === "draft" ? "Draft" : action === "verification" ? "Pending Verification" : "Verified";
		const nextPublication = action === "publish" ? "Published" : "Draft";
		const slug = draft.slug.trim() || draft.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
		if (editingId !== null) {
			setEvents((current) => current.map((event) => event.id === editingId ? {
				...event,
				...draft,
				slug,
				verificationStatus: nextStatus,
				publicationStatus: nextPublication,
				updatedAt: "Just now"
			} : event));
			setNotice("Demonstration timeline event updated.");
		} else {
			setEvents((current) => [...current, {
				...draft,
				id: Math.max(0, ...current.map((event) => event.id)) + 1,
				slug,
				verificationStatus: nextStatus,
				publicationStatus: nextPublication,
				updatedAt: "Just now"
			}]);
			setNotice("Demonstration timeline event saved.");
		}
		setFormOpen(false);
	};
	const deleteEvent = (event) => {
		if (window.confirm(`Delete "${event.title}"? This removes the timeline event only; related history stories are not deleted.`)) {
			setEvents((current) => current.filter((item) => item.id !== event.id));
			setNotice("Timeline event deleted. Related historical stories were left unchanged.");
		}
	};
	const togglePublication = (event) => {
		if (event.publicationStatus === "Draft") {
			if (!event.sources.trim()) {
				setNotice("Add historical sources before publishing this event.");
				return;
			}
			if (event.verificationStatus !== "Verified") {
				setNotice("Only verified events can be published.");
				return;
			}
			setEvents((current) => current.map((item) => item.id === event.id ? {
				...item,
				publicationStatus: "Published",
				updatedAt: "Just now"
			} : item));
			setNotice("Demonstration event published.");
		} else {
			setEvents((current) => current.map((item) => item.id === event.id ? {
				...item,
				publicationStatus: "Draft",
				updatedAt: "Just now"
			} : item));
			setNotice("Demonstration event unpublished.");
		}
	};
	const clearFilters = () => {
		setSearch("");
		setYearFilter("all");
		setCategoryFilter("all");
		setVerificationFilter("all");
		setPublicationFilter("all");
		setSort("oldest");
		setPage(1);
	};
	const placeholderNavigation = (label) => {
		setNotice(`${label} is not available on this page yet.`);
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
						children: navigation.map(({ label, icon: Icon, to }) => to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							className: `admin-nav-link${label === "Timeline Management" ? " is-active" : ""}`,
							onClick: () => setSidebarOpen(false),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
							]
						}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "admin-nav-link",
							onClick: () => placeholderNavigation(label),
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Need help?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Timeline tools are in preview." })] })]
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
					className: "admin-topbar admin-timeline-topbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-topbar-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "admin-mobile-menu",
							"aria-label": "Open admin navigation",
							onClick: () => setSidebarOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "admin-breadcrumb",
							children: [
								"Admin ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
								" Timeline Management"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Timeline Management" })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-topbar-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-global-search",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "search",
										"aria-label": "Search timeline events",
										placeholder: "Search timeline events...",
										value: search,
										onChange: (event) => {
											setSearch(event.target.value);
											setPage(1);
										}
									}),
									search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Clear search",
										onClick: () => setSearch(""),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "admin-add-button",
								onClick: openAdd,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 }), " Add Timeline Event"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-profile-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "admin-profile-button",
									"aria-haspopup": "menu",
									"aria-expanded": profileOpen,
									onClick: () => setProfileOpen((current) => !current),
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											role: "menuitem",
											onClick: () => setNotice("Profile settings are not available yet."),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 15 }), " Profile settings"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/admin/login",
											role: "menuitem",
											onClick: () => setProfileOpen(false),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 15 }), " Return to sign in"]
										})
									]
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "admin-dashboard-content admin-timeline-content",
					children: [
						demoVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-demo-banner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demonstration data" }), " — placeholder records only. No historical fact or date is confirmed."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Dismiss demonstration notice",
									onClick: () => setDemoVisible(false),
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							className: "admin-timeline-page-intro",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Timeline Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organize and manage important moments in GSP history." })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							className: "admin-stats-grid admin-timeline-stats",
							"aria-label": "Timeline statistics",
							children: [
								{
									label: "Total Timeline Events",
									value: events.length,
									icon: CalendarDays
								},
								{
									label: "Published Events",
									value: publishedCount,
									icon: Check
								},
								{
									label: "Draft Events",
									value: draftCount,
									icon: FileText
								},
								{
									label: "Pending Verification",
									value: pendingCount,
									icon: ShieldCheck
								}
							].map(({ label, value, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "admin-stat-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-stat-top",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "admin-stat-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "admin-demo-mini-tag",
											children: "DEMO"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "admin-stat-label",
										children: label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "admin-stat-bottom",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value })
									})
								]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-timeline-table-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "admin-timeline-filterbar",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-timeline-filter-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: yearFilter,
												onChange: (event) => {
													setYearFilter(event.target.value);
													setPage(1);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All years"
												}), years.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: year,
													children: year
												}, year))]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: categoryFilter,
												onChange: (event) => {
													setCategoryFilter(event.target.value);
													setPage(1);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All categories"
												}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: verificationFilter,
												onChange: (event) => {
													setVerificationFilter(event.target.value);
													setPage(1);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All statuses"
												}), [
													"Draft",
													"Pending Verification",
													"Verified",
													"Needs Correction"
												].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: publicationFilter,
												onChange: (event) => {
													setPublicationFilter(event.target.value);
													setPage(1);
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "all",
														children: "All statuses"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
												]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sort" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: sort,
												onChange: (event) => {
													setSort(event.target.value);
													setPage(1);
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "oldest",
														children: "Oldest to newest"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "newest",
														children: "Newest to oldest"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "alphabetical",
														children: "Alphabetically"
													})
												]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "admin-clear-button",
												onClick: clearFilters,
												children: "Clear filters"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-table-scroll",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "admin-records-table admin-timeline-table",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Event Title" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Historical Year" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Short Description" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Related Story" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Last Updated" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
										] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: pagedEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: event.title }) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.year || "Undated" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.category || "Uncategorized" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "admin-timeline-description",
												children: event.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.relatedStory || "None" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: event.verificationStatus }) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
												status: event.publicationStatus,
												publication: true
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.updatedAt }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "admin-timeline-actions",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": `View ${event.title}`,
														title: "View",
														onClick: () => setViewEvent(event),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": `Edit ${event.title}`,
														title: "Edit",
														onClick: () => openEdit(event),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 15 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": `Delete ${event.title}`,
														title: "Delete",
														onClick: () => deleteEvent(event),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "admin-publish-action",
														onClick: () => togglePublication(event),
														children: event.publicationStatus === "Published" ? "Unpublish" : "Publish"
													})
												]
											}) })
										] }, event.id)) })]
									}), !pagedEvents.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-records-empty",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { size: 24 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No timeline events match these filters" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Clear filters or add a demonstration event." })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-records-footer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Showing ",
										filteredEvents.length ? (safePage - 1) * pageSize + 1 : 0,
										"–",
										Math.min(safePage * pageSize, filteredEvents.length),
										" of ",
										filteredEvents.length,
										" ",
										"events"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "admin-pagination",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: safePage === 1,
												onClick: () => setPage((current) => Math.max(1, current - 1)),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												safePage,
												" / ",
												pageCount
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: safePage === pageCount,
												onClick: () => setPage((current) => Math.min(pageCount, current + 1)),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-timeline-preview",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-panel-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Public Timeline Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chronological, text-only preview of published demonstration events" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/timeline",
									className: "admin-public-link",
									children: ["Open public timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
								})]
							}), previewEvents.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "admin-vertical-timeline",
								children: previewEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "admin-timeline-year",
									children: event.year || "Undated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: event.category }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.description })
								] })] }, event.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-records-empty",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 24 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No published events to preview" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish a verified event to show it here." })
								]
							})]
						})
					]
				})]
			}),
			formOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setFormOpen(false);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-timeline-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "timeline-form-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-modal-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-breadcrumb",
							children: "Admin / Timeline Management"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "timeline-form-title",
							children: editingId !== null ? "Edit Timeline Event" : "Add Timeline Event"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close form",
							onClick: () => setFormOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-timeline-form",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-form-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field admin-form-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Event Title *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.title,
										onChange: (event) => setDraftField("title", event.target.value),
										placeholder: "[Demonstration] Enter an event title"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "URL Slug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.slug,
										onChange: (event) => setDraftField("slug", event.target.value),
										placeholder: "demo-event-title"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Year *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.year,
										onChange: (event) => setDraftField("year", event.target.value),
										placeholder: "Enter a verified year"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Optional Month" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.month,
										onChange: (event) => setDraftField("month", event.target.value),
										placeholder: "Month"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Optional Day" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.day,
										onChange: (event) => setDraftField("day", event.target.value),
										placeholder: "Day"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field admin-form-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Short Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: draft.description,
										onChange: (event) => setDraftField("description", event.target.value),
										placeholder: "Brief, text-only summary"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field admin-form-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Event Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 5,
										value: draft.fullDescription,
										onChange: (event) => setDraftField("fullDescription", event.target.value),
										placeholder: "Describe only what can be supported by verified sources"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: draft.category,
										onChange: (event) => setDraftField("category", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select category"
										}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Historical Story" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: draft.relatedStory,
										onChange: (event) => setDraftField("relatedStory", event.target.value),
										placeholder: "[Optional demonstration story]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field admin-form-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Sources and References *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: draft.sources,
										onChange: (event) => setDraftField("sources", event.target.value),
										placeholder: "Add reliable source titles, references or archive records"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field admin-form-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: draft.verificationNotes,
										onChange: (event) => setDraftField("verificationNotes", event.target.value),
										placeholder: "Record verification findings and unresolved concerns"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: draft.verificationStatus,
										onChange: (event) => setDraftField("verificationStatus", event.target.value),
										children: [
											"Draft",
											"Pending Verification",
											"Verified",
											"Needs Correction"
										].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-form-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: draft.publicationStatus,
										onChange: (event) => setDraftField("publicationStatus", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-modal-footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "admin-cancel-button",
								onClick: () => setFormOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => saveDraft("draft"),
									children: "Save as Draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => saveDraft("verification"),
									children: "Submit for Verification"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-publish-button",
									onClick: () => saveDraft("publish"),
									children: "Publish"
								})
							] })]
						})]
					})]
				})
			}),
			viewEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setViewEvent(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-timeline-modal admin-timeline-view",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "timeline-view-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-modal-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-breadcrumb",
							children: "Timeline Event Preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "timeline-view-title",
							children: viewEvent.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close preview",
							onClick: () => setViewEvent(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-timeline-view-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admin-timeline-view-year",
								children: viewEvent.year || "Undated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: viewEvent.category || "Uncategorized" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Related Story" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: viewEvent.relatedStory || "None" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: viewEvent.verificationStatus }) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Publication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									status: viewEvent.publicationStatus,
									publication: true
								}) })] })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Short Description" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: viewEvent.description || "No short description supplied." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Full Event Description" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: viewEvent.fullDescription || "No full description supplied." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sources and References" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: viewEvent.sources || "No source has been supplied." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Verification Notes" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: viewEvent.verificationNotes || "No verification notes supplied." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "admin-publish-button",
								onClick: () => {
									setViewEvent(null);
									openEdit(viewEvent);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 14 }), " Edit Event"]
							})
						]
					})]
				})
			})
		]
	});
}
var SplitComponent = AdminTimelinePage;
//#endregion
export { SplitComponent as component };
