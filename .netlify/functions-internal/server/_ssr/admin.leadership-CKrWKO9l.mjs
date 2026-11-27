import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as UserRound, b as Pencil, c as Trash2, i as UsersRound, it as CalendarDays, m as Search, q as Eye, st as BadgeCheck, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-B0JGVOUV.mjs";
import { t as AdminDashboardPage } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.leadership-CKrWKO9l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialLeaders = [
	{
		id: 1,
		name: "Demonstration — Current Leader",
		position: "Headmaster (awaiting verified name)",
		startYear: "",
		endYear: "",
		current: false,
		shortBiography: "Placeholder for verified public leadership information.",
		fullBiography: "",
		contributions: "",
		achievements: "",
		events: "",
		stories: "",
		reference: "",
		sourceTitle: "",
		sourceUrl: "",
		verificationNotes: "",
		verification: "Draft",
		publication: "Draft",
		portrait: "",
		updated: "Nov 26, 2026"
	},
	{
		id: 2,
		name: "Demonstration — Former Leader 01",
		position: "Headmaster (role to be verified)",
		startYear: "",
		endYear: "",
		current: false,
		shortBiography: "Placeholder record — no historical details have been invented.",
		fullBiography: "",
		contributions: "",
		achievements: "",
		events: "",
		stories: "",
		reference: "",
		sourceTitle: "",
		sourceUrl: "",
		verificationNotes: "Portrait and service period require an authorized source.",
		verification: "Needs Correction",
		publication: "Unpublished",
		portrait: "",
		updated: "Nov 24, 2026"
	},
	{
		id: 3,
		name: "Demonstration — Former Leader 02",
		position: "Headmaster (role to be verified)",
		startYear: "",
		endYear: "",
		current: false,
		shortBiography: "Placeholder record pending source review.",
		fullBiography: "",
		contributions: "",
		achievements: "",
		events: "",
		stories: "",
		reference: "",
		sourceTitle: "",
		sourceUrl: "",
		verificationNotes: "",
		verification: "Pending Verification",
		publication: "Draft",
		portrait: "",
		updated: "Nov 20, 2026"
	}
];
var emptyLeader = () => ({
	id: 0,
	name: "",
	position: "",
	startYear: "",
	endYear: "",
	current: false,
	shortBiography: "",
	fullBiography: "",
	contributions: "",
	achievements: "",
	events: "",
	stories: "",
	reference: "",
	sourceTitle: "",
	sourceUrl: "",
	verificationNotes: "",
	verification: "Draft",
	publication: "Draft",
	portrait: "",
	updated: "Nov 26, 2026"
});
function statusClass(status) {
	const value = status.toLowerCase();
	if (value.includes("published") || value === "verified") return "is-published";
	if (value.includes("pending") || value.includes("draft") || value === "unpublished") return "is-pending";
	return "is-draft";
}
function LeadershipManagementPage() {
	const [leaders, setLeaders] = (0, import_react.useState)(initialLeaders);
	const [query, setQuery] = (0, import_react.useState)("");
	const [positionFilter, setPositionFilter] = (0, import_react.useState)("all");
	const [periodFilter, setPeriodFilter] = (0, import_react.useState)("all");
	const [leaderStatus, setLeaderStatus] = (0, import_react.useState)("all");
	const [verificationFilter, setVerificationFilter] = (0, import_react.useState)("all");
	const [publicationFilter, setPublicationFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("name");
	const [page, setPage] = (0, import_react.useState)(1);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [previewLeader, setPreviewLeader] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(emptyLeader());
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const positions = (0, import_react.useMemo)(() => Array.from(new Set(leaders.map((leader) => leader.position))), [leaders]);
	const filteredLeaders = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return [...leaders.filter((leader) => {
			if (term && !`${leader.name} ${leader.position}`.toLowerCase().includes(term)) return false;
			if (positionFilter !== "all" && leader.position !== positionFilter) return false;
			if (leaderStatus !== "all" && leaderStatus === "current" !== leader.current) return false;
			if (verificationFilter !== "all" && leader.verification !== verificationFilter) return false;
			if (publicationFilter !== "all" && leader.publication !== publicationFilter) return false;
			if (periodFilter === "unverified" && (leader.startYear || leader.endYear)) return false;
			if (periodFilter === "verified" && (!leader.startYear || leader.startYear === "")) return false;
			return true;
		})].sort((a, b) => {
			if (sort === "startYear") return (Number(a.startYear) || 9999) - (Number(b.startYear) || 9999);
			return a.name.localeCompare(b.name);
		});
	}, [
		leaders,
		query,
		positionFilter,
		leaderStatus,
		verificationFilter,
		publicationFilter,
		periodFilter,
		sort
	]);
	const pageSize = 5;
	const pageCount = Math.max(1, Math.ceil(filteredLeaders.length / pageSize));
	const safePage = Math.min(page, pageCount);
	const visibleLeaders = filteredLeaders.slice((safePage - 1) * pageSize, safePage * pageSize);
	const openNew = () => {
		setEditing(emptyLeader());
		setIsEditing(false);
		setFormOpen(true);
	};
	const openEdit = (leader) => {
		setEditing({ ...leader });
		setIsEditing(true);
		setFormOpen(true);
	};
	const openPreview = (leader) => {
		setPreviewLeader(leader);
		setPreviewOpen(true);
	};
	const updateEditing = (field, value) => {
		setEditing((current) => ({
			...current,
			[field]: value
		}));
	};
	const handlePortrait = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => updateEditing("portrait", String(reader.result ?? ""));
		reader.readAsDataURL(file);
	};
	const saveLeader = (publication, submitVerification = false) => {
		if (!editing.name.trim() || !editing.position.trim()) {
			setNotice("Full Name and Position / Leadership Role are required.");
			return;
		}
		if (editing.current && editing.verification !== "Verified") {
			setNotice("A leader can be marked current only after the record is verified.");
			return;
		}
		if (editing.startYear && editing.endYear && Number(editing.endYear) < Number(editing.startYear)) {
			setNotice("The leadership end year cannot be earlier than the start year.");
			return;
		}
		if (publication === "Published" && editing.verification !== "Verified") {
			setNotice("Only a verified leadership record can be published.");
			return;
		}
		if (leaders.find((leader) => leader.id !== editing.id && leader.current && editing.current)) {
			setNotice("There is already a current leader record. Review it before changing leadership.");
			return;
		}
		const verification = submitVerification ? "Pending Verification" : editing.verification;
		const saved = {
			...editing,
			id: isEditing ? editing.id : Date.now(),
			verification,
			publication,
			updated: "Nov 26, 2026"
		};
		setLeaders((current) => isEditing ? current.map((leader) => leader.id === saved.id ? saved : leader) : [saved, ...current]);
		setFormOpen(false);
		setNotice(isEditing ? "Leadership record updated in this frontend session." : "New leadership record added to this frontend session.");
	};
	const deleteLeader = (leader) => {
		if (!window.confirm(`Delete "${leader.name}"? This action cannot be undone in this preview.`)) return;
		setLeaders((current) => current.filter((item) => item.id !== leader.id));
		setNotice("Leadership record deleted from this frontend session.");
	};
	const togglePublication = (leader) => {
		if (leader.verification !== "Verified" && leader.publication !== "Published") {
			setNotice("Only a verified leadership record can be published.");
			return;
		}
		setLeaders((current) => current.map((item) => item.id === leader.id ? {
			...item,
			publication: item.publication === "Published" ? "Unpublished" : "Published",
			updated: "Nov 26, 2026"
		} : item));
	};
	const clearFilters = () => {
		setQuery("");
		setPositionFilter("all");
		setPeriodFilter("all");
		setLeaderStatus("all");
		setVerificationFilter("all");
		setPublicationFilter("all");
		setSort("name");
		setPage(1);
	};
	const totalLeaders = leaders.length;
	const currentCount = leaders.filter((leader) => leader.current).length;
	const formerCount = leaders.filter((leader) => !leader.current).length;
	const pendingCount = leaders.filter((leader) => leader.verification === "Pending Verification").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminDashboardPage, {
		pageTitle: "Leadership Management",
		activePage: "Leadership Management",
		showGlobalSearch: false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leadership-admin-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "admin-page-kicker",
						children: "ADMIN / LEADERSHIP MANAGEMENT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Leadership Management" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manage and preserve the history of GSP school leadership." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "admin-primary-button",
					onClick: openNew,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Leader"]
				})]
			}),
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-action-notice leadership-admin-notice",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Dismiss message",
					onClick: () => setNotice(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "leadership-admin-stats",
				"aria-label": "Leadership statistics",
				children: [
					{
						label: "Total Leaders",
						value: totalLeaders,
						icon: UsersRound
					},
					{
						label: "Current Leadership Records",
						value: currentCount,
						icon: BadgeCheck
					},
					{
						label: "Former Leaders",
						value: formerCount,
						icon: UserRound
					},
					{
						label: "Pending Verification",
						value: pendingCount,
						icon: CalendarDays
					}
				].map(({ label, value, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "admin-stat-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "admin-stat-top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-stat-label",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-stat-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Demonstration" })]
						})
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-panel leadership-directory",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leadership-directory-toolbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "leadership-search",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								value: query,
								onChange: (event) => {
									setQuery(event.target.value);
									setPage(1);
								},
								placeholder: "Search by full name...",
								"aria-label": "Search leaders by full name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leadership-filters",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: positionFilter,
									onChange: (event) => setPositionFilter(event.target.value),
									"aria-label": "Filter by position",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All positions"
									}), positions.map((position) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: position,
										children: position
									}, position))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: periodFilter,
									onChange: (event) => setPeriodFilter(event.target.value),
									"aria-label": "Filter by leadership period",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All periods"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "verified",
											children: "Period provided"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "unverified",
											children: "Period unverified"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: leaderStatus,
									onChange: (event) => setLeaderStatus(event.target.value),
									"aria-label": "Filter current or former",
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
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: verificationFilter,
									onChange: (event) => setVerificationFilter(event.target.value),
									"aria-label": "Filter verification status",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All verification"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Verification" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: publicationFilter,
									onChange: (event) => setPublicationFilter(event.target.value),
									"aria-label": "Filter publication status",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All publication"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Unpublished" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sort,
									onChange: (event) => setSort(event.target.value),
									"aria-label": "Sort leaders",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "name",
										children: "Sort alphabetically"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "startYear",
										children: "Leadership start year"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: clearFilters,
									children: "Clear filters"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-table-scroll",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "admin-records-table leadership-directory-table",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Portrait" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Full Name" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Position" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Leadership Period" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Biography" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Last Updated" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visibleLeaders.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "leadership-table-portrait",
									children: leader.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: leader.portrait,
										alt: ""
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 20 })
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: leader.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: leader.current ? "Current leader" : "Former leader" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: leader.position }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: leader.startYear ? `${leader.startYear}${leader.endYear ? ` – ${leader.endYear}` : " – Present"}` : "Dates unverified" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${leader.fullBiography ? "is-published" : "is-draft"}`,
									children: leader.fullBiography ? "Complete" : "Incomplete"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${statusClass(leader.verification)}`,
									children: leader.verification
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${statusClass(leader.publication)}`,
									children: leader.publication
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: leader.updated }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "leadership-row-actions",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `View ${leader.name}`,
											title: "View profile",
											onClick: () => openPreview(leader),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Edit ${leader.name}`,
											title: "Edit",
											onClick: () => openEdit(leader),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Delete ${leader.name}`,
											title: "Delete",
											onClick: () => deleteLeader(leader),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "publish-action",
											onClick: () => togglePublication(leader),
											children: leader.publication === "Published" ? "Unpublish" : "Publish"
										})
									]
								}) })
							] }, leader.id)) })]
						}), visibleLeaders.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leadership-empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No leadership records match these filters" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leadership-pagination",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Showing ",
							filteredLeaders.length ? (safePage - 1) * pageSize + 1 : 0,
							"–",
							Math.min(safePage * pageSize, filteredLeaders.length),
							" of ",
							filteredLeaders.length,
							" ",
							"records"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: safePage === 1,
								onClick: () => setPage(safePage - 1),
								children: "Previous"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								safePage,
								" / ",
								pageCount
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: safePage === pageCount,
								onClick: () => setPage(safePage + 1),
								children: "Next"
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: formOpen,
				onOpenChange: setFormOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "leadership-form-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isEditing ? "Edit Leader" : "Add New Leader" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Use only verified, permission-cleared information. Demonstration fields are not populated with invented history." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leadership-form-layout",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leadership-form-fields",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Personal Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "leadership-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Name *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.name,
													onChange: (event) => updateEditing("name", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Position / Leadership Role *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.position,
													onChange: (event) => updateEditing("position", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Portrait Upload" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: "image/jpeg,image/png,image/webp",
													onChange: handlePortrait
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Short Biography" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.shortBiography,
													onChange: (event) => updateEditing("shortBiography", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Biography" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 5,
													value: editing.fullBiography,
													onChange: (event) => updateEditing("fullBiography", event.target.value)
												})]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Leadership Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "leadership-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leadership Start Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													min: "1900",
													max: "2100",
													value: editing.startYear,
													onChange: (event) => updateEditing("startYear", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leadership End Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													min: "1900",
													max: "2100",
													disabled: editing.current,
													value: editing.endYear,
													onChange: (event) => updateEditing("endYear", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-checkbox",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: editing.current,
														disabled: editing.verification !== "Verified",
														onChange: (event) => updateEditing("current", event.target.checked)
													}),
													" ",
													"Current Leader ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Available only after verification" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leadership Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.contributions,
													onChange: (event) => updateEditing("contributions", event.target.value)
												})]
											}),
											editing.verification === "Verified" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Major Achievements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.achievements,
													onChange: (event) => updateEditing("achievements", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Historical Events" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.events,
													onChange: (event) => updateEditing("events", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Historical Stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.stories,
													onChange: (event) => updateEditing("stories", event.target.value)
												})]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sources and Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "leadership-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical References" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 2,
													value: editing.reference,
													onChange: (event) => updateEditing("reference", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.sourceTitle,
													onChange: (event) => updateEditing("sourceTitle", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source URL or Document Reference" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: editing.sourceUrl,
													onChange: (event) => updateEditing("sourceUrl", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field leadership-field-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.verificationNotes,
													onChange: (event) => updateEditing("verificationNotes", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: editing.verification,
													onChange: (event) => updateEditing("verification", event.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Verification" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "leadership-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: editing.publication,
													onChange: (event) => updateEditing("publication", event.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Unpublished" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
													]
												})]
											})
										]
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "leadership-live-preview",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-page-kicker",
									children: "PUBLIC ARCHIVE PREVIEW"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "leadership-preview-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "leadership-preview-portrait",
											children: editing.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: editing.portrait,
												alt: ""
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
												size: 48,
												strokeWidth: 1
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: editing.current ? "CURRENT LEADER" : "FORMER LEADER"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: editing.name || "Leader name awaiting verification" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leadership-preview-position",
											children: editing.position || "Position awaiting verification"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "leadership-preview-period",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }),
												" ",
												editing.startYear ? `${editing.startYear}${editing.endYear ? ` – ${editing.endYear}` : " – Present"}` : "Leadership period awaiting verification"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.shortBiography || editing.fullBiography || "Biography information is not yet verified." }),
										editing.contributions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.contributions })] }),
										editing.achievements && editing.verification === "Verified" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Major Achievements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.achievements })] }),
										(editing.events || editing.stories) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Related Archive Records" }),
										editing.events && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.events }),
										editing.stories && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.stories }),
										(editing.reference || editing.sourceTitle || editing.sourceUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Sources and References" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: editing.reference || editing.sourceTitle || editing.sourceUrl })] })
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "leadership-form-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => setFormOpen(false),
									children: "Cancel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => saveLeader("Draft"),
									children: "Save as Draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => saveLeader("Unpublished", true),
									children: "Submit for Verification"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-primary-button",
									onClick: () => saveLeader("Published"),
									children: "Publish"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: previewOpen,
				onOpenChange: setPreviewOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "leadership-profile-dialog",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Public Leadership Profile Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Historical archive presentation" })] }), previewLeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leadership-profile-preview",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "leadership-preview-portrait",
								children: previewLeader.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: previewLeader.portrait,
									alt: ""
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									size: 58,
									strokeWidth: 1
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: previewLeader.current ? "CURRENT LEADER" : "FORMER LEADER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: previewLeader.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leadership-preview-position",
								children: previewLeader.position
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leadership-preview-period",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 14 }),
									" ",
									previewLeader.startYear ? `${previewLeader.startYear}${previewLeader.endYear ? ` – ${previewLeader.endYear}` : " – Present"}` : "Leadership period awaiting verification"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Biography" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewLeader.fullBiography || previewLeader.shortBiography || "Biography information is not yet verified." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Leadership Contributions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewLeader.contributions || "Contributions are awaiting verified documentation." }),
							previewLeader.verification === "Verified" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Major Achievements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewLeader.achievements || "No achievements have been provided." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Related Historical Events" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewLeader.events || "No related events have been supplied." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sources and References" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewLeader.reference || previewLeader.sourceTitle || previewLeader.sourceUrl || "Historical sources are awaiting verification." })
						]
					})]
				})
			})
		]
	});
}
var SplitComponent = LeadershipManagementPage;
//#endregion
export { SplitComponent as component };
