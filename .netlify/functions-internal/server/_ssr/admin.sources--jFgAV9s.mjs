import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Trash2, f as ShieldCheck, l as SquarePen, m as Search, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { n as AdminLayout } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.sources--jFgAV9s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var demoSources = [{
	id: 1,
	title: "Demonstration — Source awaiting identification",
	type: "Official School Records",
	institution: "Institution not supplied",
	creator: "Creator not supplied",
	year: "Year pending",
	reference: "Reference pending",
	related: "Related record pending",
	status: "Pending Review",
	reviewed: "Not yet reviewed",
	notes: ""
}, {
	id: 2,
	title: "Demonstration — Verified source placeholder",
	type: "Institutional References",
	institution: "Institution not supplied",
	creator: "Creator not supplied",
	year: "Year pending",
	reference: "Document reference pending",
	related: "Demonstration record",
	status: "Verified",
	reviewed: "Demo date",
	notes: "Demonstration note; supporting evidence must be supplied."
}];
function SourcesManagementPage() {
	const [records, setRecords] = (0, import_react.useState)(demoSources);
	const [search, setSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const filtered = records.filter((record) => `${record.title} ${record.type} ${record.institution} ${record.creator}`.toLowerCase().includes(search.toLowerCase()) && (status === "All" || record.status === status));
	function saveSource(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const title = String(form.get("title") || "").trim();
		if (!title) return;
		const record = {
			id: selected?.id ?? Date.now(),
			title,
			type: String(form.get("type")),
			institution: String(form.get("institution") || "Institution not supplied"),
			creator: String(form.get("creator") || "Creator not supplied"),
			year: String(form.get("year") || "Year pending"),
			reference: String(form.get("reference") || "Reference pending"),
			related: String(form.get("related") || "Related record pending"),
			status: String(form.get("status")),
			reviewed: selected?.reviewed ?? "Not yet reviewed",
			notes: String(form.get("notes") || "")
		};
		setRecords((current) => selected ? current.map((item) => item.id === selected.id ? record : item) : [record, ...current]);
		setModal(null);
		setSelected(null);
		setNotice(selected ? "Source updated in local frontend state." : "Source added in local frontend state.");
	}
	function reviewSource(event) {
		event.preventDefault();
		if (!selected) return;
		const form = new FormData(event.currentTarget);
		setRecords((current) => current.map((item) => item.id === selected.id ? {
			...item,
			status: String(form.get("status")),
			notes: String(form.get("notes") || ""),
			reviewed: "Review saved locally"
		} : item));
		setModal(null);
		setSelected(null);
		setNotice("Verification review saved in local frontend state.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminLayout, {
		pageTitle: "Sources & Verification",
		activePage: "Sources & Verification",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-module-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sources & Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maintain accuracy, credibility and transparency across the GSP Historical Archive." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "admin-primary-button",
					onClick: () => {
						setSelected(null);
						setModal("add");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Source"]
				})]
			}),
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-action-notice",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Dismiss",
					onClick: () => setNotice(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "admin-stats-grid admin-module-stats",
				children: [
					["Total Sources", records.length],
					["Verified Sources", records.filter((item) => item.status === "Verified").length],
					["Pending Review", records.filter((item) => item.status === "Pending Review").length],
					["Records Requiring Correction", records.filter((item) => item.status === "Needs Correction").length]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "admin-stat-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-stat-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-stat-label",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value })
					]
				}, String(label)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-panel admin-management-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-records-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "admin-inline-search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Search sources",
							placeholder: "Search sources...",
							value: search,
							onChange: (event) => setSearch(event.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						"aria-label": "Filter verification status",
						value: status,
						onChange: (event) => setStatus(event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Review" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Rejected" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "admin-table-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "admin-records-table admin-management-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Source Title" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Source Type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Institution / Publisher" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Creator" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Year" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Reference" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Related Record" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Last Reviewed" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: record.title }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.type }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.institution }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.creator }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.year }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.reference }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.related }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `admin-status ${record.status === "Verified" ? "is-published" : record.status === "Pending Review" ? "is-pending" : "is-draft"}`,
								children: record.status
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.reviewed }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-row-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: "Review",
										onClick: () => {
											setSelected(record);
											setModal("review");
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: "Edit",
										onClick: () => {
											setSelected(record);
											setModal("add");
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { size: 15 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: "Delete",
										onClick: () => setRecords((current) => current.filter((item) => item.id !== record.id)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
									})
								]
							}) })
						] }, record.id)) })]
					})
				})]
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-modal-backdrop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Source management",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-modal-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "SOURCE MANAGEMENT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: modal === "review" ? "Verification Detail" : selected ? "Edit Source" : "Add New Source" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Close",
							onClick: () => setModal(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), modal === "review" && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "admin-form-grid",
						onSubmit: reviewSource,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-verification-detail admin-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selected.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Associated sources and evidence must be appropriate before marking a record verified." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Review Status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "status",
								defaultValue: selected.status,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Review" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Rejected" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Reviewer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: "Front-end administrator (demo)",
								readOnly: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Verification Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									defaultValue: selected.notes
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Link To", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "relatedType",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Historical story" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Timeline event" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Leader" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Important event" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Alumni / staff" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Gallery media" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Document" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-modal-footer admin-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => setModal(null),
									children: "Close"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "admin-primary-button",
									children: "Save Review"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "admin-form-grid",
						onSubmit: saveSource,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Source Title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "title",
									required: true,
									defaultValue: selected?.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Source Type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "type",
								defaultValue: selected?.type ?? "Official School Records",
								children: [
									"Official School Records",
									"Historical Documents",
									"Books and Publications",
									"Newspaper Archives",
									"Photographs and Media",
									"Oral Histories and Testimonies",
									"Institutional References",
									"Research Publications"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Institution / Publisher", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "institution",
								defaultValue: selected?.institution
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Author / Creator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "creator",
								defaultValue: selected?.creator
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Publication Year", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "year",
								defaultValue: selected?.year
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Source URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "url",
								type: "url"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Document Reference", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "reference",
								defaultValue: selected?.reference
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Related Historical Record", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "related",
								defaultValue: selected?.related
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Verification Status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "status",
								defaultValue: selected?.status ?? "Pending Review",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending Review" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Rejected" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { name: "description" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Verification Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									defaultValue: selected?.notes
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-modal-footer admin-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "admin-secondary-button",
									onClick: () => setModal(null),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "admin-primary-button",
									children: "Save Source"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
var SplitComponent = SourcesManagementPage;
//#endregion
export { SplitComponent as component };
