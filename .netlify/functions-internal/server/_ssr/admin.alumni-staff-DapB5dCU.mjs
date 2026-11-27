import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { B as GraduationCap, a as UserRound, at as BriefcaseBusiness, b as Pencil, c as Trash2, ct as Award, f as ShieldCheck, i as UsersRound, m as Search, q as Eye, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-B0JGVOUV.mjs";
import { t as AdminDashboardPage } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.alumni-staff-DapB5dCU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialRecords = [
	{
		id: 1,
		name: "Demonstration — Former Student 01",
		category: "Former Student",
		portrait: "",
		shortBiography: "Placeholder alumni record; verified historical information has not been supplied.",
		fullBiography: "",
		gspConnection: "",
		contributions: "",
		relatedEvents: "",
		sources: "",
		verificationNotes: "Requires documentary evidence and portrait permission.",
		verification: "Pending Verification",
		publication: "Draft",
		graduationYear: "",
		classProgram: "",
		educationalJourney: "",
		achievements: "",
		schoolContributions: "",
		subjects: "",
		department: "",
		serviceStart: "",
		serviceEnd: "",
		teachingContributions: "",
		formerPosition: "",
		responsibilities: "",
		updated: "Nov 26, 2026"
	},
	{
		id: 2,
		name: "Demonstration — Former Teacher 01",
		category: "Former Teacher",
		portrait: "",
		shortBiography: "Placeholder teacher record; no historical name or service claim is confirmed.",
		fullBiography: "",
		gspConnection: "",
		contributions: "",
		relatedEvents: "",
		sources: "",
		verificationNotes: "",
		verification: "Draft",
		publication: "Draft",
		graduationYear: "",
		classProgram: "",
		educationalJourney: "",
		achievements: "",
		schoolContributions: "",
		subjects: "",
		department: "",
		serviceStart: "",
		serviceEnd: "",
		teachingContributions: "",
		formerPosition: "",
		responsibilities: "",
		updated: "Nov 24, 2026"
	},
	{
		id: 3,
		name: "Demonstration — Former Staff 01",
		category: "Former Staff",
		portrait: "",
		shortBiography: "Placeholder staff record pending authorized historical sources.",
		fullBiography: "",
		gspConnection: "",
		contributions: "",
		relatedEvents: "",
		sources: "",
		verificationNotes: "Personal information must remain restricted.",
		verification: "Needs Correction",
		publication: "Unpublished",
		graduationYear: "",
		classProgram: "",
		educationalJourney: "",
		achievements: "",
		schoolContributions: "",
		subjects: "",
		department: "",
		serviceStart: "",
		serviceEnd: "",
		teachingContributions: "",
		formerPosition: "",
		responsibilities: "",
		updated: "Nov 20, 2026"
	}
];
var emptyRecord = (category) => ({
	id: 0,
	name: "",
	category,
	portrait: "",
	shortBiography: "",
	fullBiography: "",
	gspConnection: "",
	contributions: "",
	relatedEvents: "",
	sources: "",
	verificationNotes: "",
	verification: "Draft",
	publication: "Draft",
	graduationYear: "",
	classProgram: "",
	educationalJourney: "",
	achievements: "",
	schoolContributions: "",
	subjects: "",
	department: "",
	serviceStart: "",
	serviceEnd: "",
	teachingContributions: "",
	formerPosition: "",
	responsibilities: "",
	updated: "Nov 26, 2026"
});
function statusClass(status) {
	if (status === "Verified" || status === "Published") return "is-published";
	if (status === "Draft" || status === "Pending Verification" || status === "Unpublished") return "is-pending";
	return "is-draft";
}
function recordPeriod(record) {
	if (record.category === "Former Student") return record.graduationYear ? `Graduated ${record.graduationYear}` : "Year unverified";
	if (record.serviceStart || record.serviceEnd) return `${record.serviceStart || "Unknown"} – ${record.serviceEnd || "Present"}`;
	return "Period unverified";
}
function AlumniStaffManagementPage() {
	const [records, setRecords] = (0, import_react.useState)(initialRecords);
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("all");
	const [periodFilter, setPeriodFilter] = (0, import_react.useState)("all");
	const [departmentFilter, setDepartmentFilter] = (0, import_react.useState)("all");
	const [verificationFilter, setVerificationFilter] = (0, import_react.useState)("all");
	const [publicationFilter, setPublicationFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("name");
	const [page, setPage] = (0, import_react.useState)(1);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(emptyRecord("Former Student"));
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return [...records.filter((record) => {
			if (term && !`${record.name} ${record.department} ${record.formerPosition}`.toLowerCase().includes(term)) return false;
			if (categoryFilter !== "all" && record.category !== categoryFilter) return false;
			if (activeCategory !== "All" && record.category !== activeCategory) return false;
			if (yearFilter !== "all" && record.graduationYear !== yearFilter) return false;
			if (periodFilter === "provided" && !record.serviceStart && !record.serviceEnd) return false;
			if (periodFilter === "unverified" && (record.serviceStart || record.serviceEnd)) return false;
			if (departmentFilter !== "all" && record.department !== departmentFilter) return false;
			if (verificationFilter !== "all" && record.verification !== verificationFilter) return false;
			if (publicationFilter !== "all" && record.publication !== publicationFilter) return false;
			return true;
		})].sort((a, b) => {
			if (sort === "year") return (Number(a.graduationYear || a.serviceStart) || 9999) - (Number(b.graduationYear || b.serviceStart) || 9999);
			return a.name.localeCompare(b.name);
		});
	}, [
		records,
		query,
		categoryFilter,
		activeCategory,
		yearFilter,
		periodFilter,
		departmentFilter,
		verificationFilter,
		publicationFilter,
		sort
	]);
	const pageSize = 6;
	const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(page, pageCount);
	const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);
	const departments = (0, import_react.useMemo)(() => Array.from(new Set(records.map((record) => record.department).filter(Boolean))), [records]);
	const graduationYears = (0, import_react.useMemo)(() => Array.from(new Set(records.map((record) => record.graduationYear).filter(Boolean))).sort(), [records]);
	const openNew = (category = "Former Student") => {
		setEditing(emptyRecord(category));
		setIsEditing(false);
		setFormOpen(true);
	};
	const openEdit = (record) => {
		setEditing({ ...record });
		setIsEditing(true);
		setFormOpen(true);
	};
	const handlePortrait = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => setEditing((current) => ({
			...current,
			portrait: String(reader.result ?? "")
		}));
		reader.readAsDataURL(file);
	};
	const update = (field, value) => setEditing((current) => ({
		...current,
		[field]: value
	}));
	const save = (publication, submitVerification = false) => {
		if (!editing.name.trim()) {
			setNotice("Full Name is required.");
			return;
		}
		if (publication === "Published" && editing.verification !== "Verified") {
			setNotice("Only a verified record with reliable sources can be published.");
			return;
		}
		if (editing.category === "Former Student" && editing.graduationYear && !/^\d{4}$/.test(editing.graduationYear)) {
			setNotice("Enter a valid four-digit graduation year.");
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
		setRecords((current) => isEditing ? current.map((item) => item.id === saved.id ? saved : item) : [saved, ...current]);
		setFormOpen(false);
		setNotice(isEditing ? "Alumni or staff record updated in this frontend session." : "New record added to this frontend session.");
	};
	const deleteRecord = (record) => {
		if (!window.confirm(`Delete "${record.name}"? This action cannot be undone in this preview.`)) return;
		setRecords((current) => current.filter((item) => item.id !== record.id));
		setNotice("Record deleted from this frontend session.");
	};
	const togglePublication = (record) => {
		if (record.verification !== "Verified" && record.publication !== "Published") {
			setNotice("Only a verified record can be published.");
			return;
		}
		setRecords((current) => current.map((item) => item.id === record.id ? {
			...item,
			publication: item.publication === "Published" ? "Unpublished" : "Published",
			updated: "Nov 26, 2026"
		} : item));
	};
	const clearFilters = () => {
		setQuery("");
		setCategoryFilter("all");
		setYearFilter("all");
		setPeriodFilter("all");
		setDepartmentFilter("all");
		setVerificationFilter("all");
		setPublicationFilter("all");
		setSort("name");
		setActiveCategory("All");
		setPage(1);
	};
	const alumniCount = records.filter((record) => record.category === "Former Student").length;
	const teacherCount = records.filter((record) => record.category === "Former Teacher").length;
	const staffCount = records.filter((record) => record.category === "Former Staff").length;
	const pendingCount = records.filter((record) => record.verification === "Pending Verification").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminDashboardPage, {
		pageTitle: "Alumni & Staff Management",
		activePage: "Alumni & Staff Management",
		showGlobalSearch: false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "alumni-admin-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "admin-page-kicker",
						children: "ADMIN / ALUMNI & STAFF MANAGEMENT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Alumni & Staff Management" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Preserve the stories and contributions of GSP former students, teachers and staff." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "admin-primary-button",
					onClick: () => openNew(activeCategory === "All" ? "Former Student" : activeCategory),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Record"]
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
				className: "alumni-admin-stats",
				"aria-label": "Alumni and staff statistics",
				children: [
					{
						label: "Total Alumni Records",
						value: alumniCount,
						icon: GraduationCap
					},
					{
						label: "Former Teachers",
						value: teacherCount,
						icon: UserRound
					},
					{
						label: "Former Staff",
						value: staffCount,
						icon: BriefcaseBusiness
					},
					{
						label: "Pending Verification",
						value: pendingCount,
						icon: ShieldCheck
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
				className: "admin-panel alumni-directory",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "alumni-category-tabs",
						role: "tablist",
						"aria-label": "Record categories",
						children: [
							"All",
							"Former Student",
							"Former Teacher",
							"Former Staff"
						].map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeCategory === category,
							className: activeCategory === category ? "is-active" : "",
							onClick: () => {
								setActiveCategory(category);
								setPage(1);
							},
							children: category === "All" ? "All Records" : category === "Former Student" ? "Former Students" : category
						}, category))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "alumni-directory-toolbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "alumni-search",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								value: query,
								onChange: (event) => {
									setQuery(event.target.value);
									setPage(1);
								},
								placeholder: "Search by full name...",
								"aria-label": "Search by full name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "alumni-filters",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: categoryFilter,
									onChange: (event) => setCategoryFilter(event.target.value),
									"aria-label": "Filter record category",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All categories"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Student" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Teacher" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Staff" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: yearFilter,
									onChange: (event) => setYearFilter(event.target.value),
									"aria-label": "Filter graduation year",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All graduation years"
									}), graduationYears.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: year }, year))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: periodFilter,
									onChange: (event) => setPeriodFilter(event.target.value),
									"aria-label": "Filter service period",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All service periods"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "provided",
											children: "Period provided"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "unverified",
											children: "Period unverified"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: departmentFilter,
									onChange: (event) => setDepartmentFilter(event.target.value),
									"aria-label": "Filter department",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All departments"
									}), departments.map((department) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: department }, department))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: verificationFilter,
									onChange: (event) => setVerificationFilter(event.target.value),
									"aria-label": "Filter verification",
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
									"aria-label": "Filter publication",
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
									"aria-label": "Sort records",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "name",
										children: "Sort alphabetically"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "year",
										children: "Sort by year"
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
							className: "admin-records-table alumni-directory-table",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Portrait" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Full Name" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Record Category" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Year / Service Period" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Class / Department" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Biography" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Last Updated" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visible.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "alumni-table-portrait",
									children: record.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: record.portrait,
										alt: ""
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 20 })
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: record.name }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.category }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: recordPeriod(record) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.category === "Former Student" ? record.classProgram || "Class unverified" : record.department || "Department unverified" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${record.fullBiography ? "is-published" : "is-draft"}`,
									children: record.fullBiography ? "Complete" : "Incomplete"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${statusClass(record.verification)}`,
									children: record.verification
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `admin-status ${statusClass(record.publication)}`,
									children: record.publication
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.updated }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "alumni-row-actions",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "View profile",
											"aria-label": `View ${record.name}`,
											onClick: () => {
												setPreview(record);
												setPreviewOpen(true);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "Edit",
											"aria-label": `Edit ${record.name}`,
											onClick: () => openEdit(record),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											title: "Delete",
											"aria-label": `Delete ${record.name}`,
											onClick: () => deleteRecord(record),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "publish-action",
											onClick: () => togglePublication(record),
											children: record.publication === "Published" ? "Unpublish" : "Publish"
										})
									]
								}) })
							] }, record.id)) })]
						}), visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "alumni-empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No alumni or staff records match these filters" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "alumni-pagination",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Showing ",
							filtered.length ? (safePage - 1) * pageSize + 1 : 0,
							"–",
							Math.min(safePage * pageSize, filtered.length),
							" of ",
							filtered.length,
							" records"
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
					className: "alumni-form-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isEditing ? "Edit Record" : "Add New Record" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Use only verified, permission-cleared information. Personal contact details must not be stored or published." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "alumni-form-layout",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "alumni-form-fields",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Common Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alumni-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Name *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.name,
												onChange: (event) => update("name", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Record Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: editing.category,
												onChange: (event) => update("category", event.target.value),
												disabled: isEditing,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Student" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Teacher" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Former Staff" })
												]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Portrait Upload" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: "image/jpeg,image/png,image/webp",
													onChange: handlePortrait
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Short Biography" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.shortBiography,
													onChange: (event) => update("shortBiography", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Biography" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 5,
													value: editing.fullBiography,
													onChange: (event) => update("fullBiography", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GSP Connection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 2,
													value: editing.gspConnection,
													onChange: (event) => update("gspConnection", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												value: editing.contributions,
												onChange: (event) => update("contributions", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Historical Events" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												value: editing.relatedEvents,
												onChange: (event) => update("relatedEvents", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Sources and References" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.sources,
													onChange: (event) => update("sources", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.verificationNotes,
													onChange: (event) => update("verificationNotes", event.target.value)
												})]
											})
										]
									})] }),
									editing.category === "Former Student" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Former Student Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alumni-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Graduation Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: "1900",
												max: "2100",
												value: editing.graduationYear,
												onChange: (event) => update("graduationYear", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Class or Program" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.classProgram,
												onChange: (event) => update("classProgram", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Educational Journey at GSP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.educationalJourney,
													onChange: (event) => update("educationalJourney", event.target.value)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Achievements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												value: editing.achievements,
												onChange: (event) => update("achievements", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "School or Community Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												value: editing.schoolContributions,
												onChange: (event) => update("schoolContributions", event.target.value)
											})] })
										]
									})] }),
									editing.category === "Former Teacher" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Former Teacher Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alumni-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Teaching Subjects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.subjects,
												onChange: (event) => update("subjects", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.department,
												onChange: (event) => update("department", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service Start Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: "1900",
												max: "2100",
												value: editing.serviceStart,
												onChange: (event) => update("serviceStart", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service End Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: "1900",
												max: "2100",
												value: editing.serviceEnd,
												onChange: (event) => update("serviceEnd", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Teaching Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 3,
													value: editing.teachingContributions,
													onChange: (event) => update("teachingContributions", event.target.value)
												})]
											})
										]
									})] }),
									editing.category === "Former Staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Former Staff Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alumni-form-grid",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Former Position" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.formerPosition,
												onChange: (event) => update("formerPosition", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editing.department,
												onChange: (event) => update("department", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service Start Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: "1900",
												max: "2100",
												value: editing.serviceStart,
												onChange: (event) => update("serviceStart", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service End Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: "1900",
												max: "2100",
												value: editing.serviceEnd,
												onChange: (event) => update("serviceEnd", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Responsibilities and Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													rows: 4,
													value: editing.responsibilities,
													onChange: (event) => update("responsibilities", event.target.value)
												})]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Verification and Publication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "alumni-form-grid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: editing.verification,
											onChange: (event) => update("verification", event.target.value),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Verification" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" })
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: editing.publication,
											onChange: (event) => update("publication", event.target.value),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Unpublished" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
											]
										})] })]
									})] })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "alumni-form-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "alumni-button-outline",
									onClick: () => setFormOpen(false),
									children: "Cancel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "alumni-button-secondary",
									onClick: () => save("Draft"),
									children: "Save as Draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "alumni-button-secondary",
									onClick: () => save("Draft", true),
									children: "Submit for Verification"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "alumni-button-primary",
									onClick: () => save("Published"),
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "alumni-preview-dialog",
					children: preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Public Profile Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Preview of how this record could appear on the public Alumni History page." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "alumni-profile-preview",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "alumni-preview-portrait",
							children: preview.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: preview.portrait,
								alt: ""
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 48 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "alumni-preview-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: preview.category.toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: preview.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "alumni-preview-period",
									children: recordPeriod(preview)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.shortBiography || "Biography awaiting verification." }),
								preview.fullBiography && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.fullBiography }),
								preview.gspConnection && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "GSP Connection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.gspConnection })] }),
								(preview.achievements || preview.contributions || preview.teachingContributions || preview.responsibilities) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Achievements or Contributions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.achievements || preview.contributions || preview.teachingContributions || preview.responsibilities })] }),
								(preview.relatedEvents || preview.sources) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Historical Records and Sources" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.relatedEvents }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: preview.sources || "Reliable sources pending." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "alumni-preview-demo",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 14 }), " Demonstration record — public release requires verification"]
								})
							]
						})]
					})] })
				})
			})
		]
	});
}
var SplitComponent = AlumniStaffManagementPage;
//#endregion
export { SplitComponent as component };
