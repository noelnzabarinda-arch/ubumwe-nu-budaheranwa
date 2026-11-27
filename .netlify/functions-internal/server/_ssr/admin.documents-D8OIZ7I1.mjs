import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { V as Funnel, W as FileText, b as Pencil, c as Trash2, m as Search, o as Upload, q as Eye, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { n as AdminLayout } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.documents-D8OIZ7I1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var demoDocuments = [
	{
		id: 1,
		title: "Demonstration — Historical register scan",
		category: "Historical Records",
		type: "PDF",
		creator: "Creator not supplied",
		year: "Year pending",
		access: "Public",
		verification: "Verified",
		published: true
	},
	{
		id: 2,
		title: "Demonstration — School report record",
		category: "Old School Reports",
		type: "Image",
		creator: "Source pending",
		year: "Year pending",
		access: "Restricted",
		verification: "Pending",
		published: false
	},
	{
		id: 3,
		title: "Demonstration — Official certificate scan",
		category: "Certificates & Official Records",
		type: "Image",
		creator: "Source pending",
		year: "Year pending",
		access: "Internal",
		verification: "Needs Correction",
		published: false
	}
];
function DocumentsManagementPage() {
	const [records, setRecords] = (0, import_react.useState)(demoDocuments);
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const [access, setAccess] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const filtered = records.filter((record) => `${record.title} ${record.category} ${record.creator}`.toLowerCase().includes(search.toLowerCase()) && (category === "All" || record.category === category) && (access === "All" || record.access === access));
	const openEdit = (record) => {
		setSelected(record);
		setModal("edit");
	};
	const openPreview = (record) => {
		setSelected(record);
		setModal("preview");
	};
	function saveRecord(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const title = String(form.get("title") || "").trim();
		if (!title) return;
		const next = {
			id: selected?.id ?? Date.now(),
			title,
			category: String(form.get("category")),
			type: String(form.get("type")),
			creator: String(form.get("creator") || "Creator not supplied"),
			year: String(form.get("year") || "Year pending"),
			access: String(form.get("access")),
			verification: String(form.get("verification")),
			published: selected?.published ?? false
		};
		setRecords((current) => selected ? current.map((item) => item.id === selected.id ? next : item) : [next, ...current]);
		setModal(null);
		setSelected(null);
		setSelectedFile(null);
		setNotice(selected ? "Document updated in local frontend state." : "Document added to local frontend state.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminLayout, {
		pageTitle: "Documents Management",
		activePage: "Documents Management",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-module-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Documents Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manage and preserve GSP historical documents." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "admin-primary-button",
					onClick: () => {
						setSelected(null);
						setModal("add");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Document"]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-stats-grid admin-module-stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "admin-stat-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-label",
								children: "Total Documents"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: records.length })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "admin-stat-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-label",
								children: "Public Documents"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: records.filter((item) => item.access === "Public").length })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "admin-stat-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-label",
								children: "Restricted Documents"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: records.filter((item) => item.access !== "Public").length })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "admin-stat-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "admin-stat-label",
								children: "Pending Verification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: records.filter((item) => item.verification !== "Verified").length })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-panel admin-management-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-records-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "admin-inline-search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Search documents",
							placeholder: "Search documents...",
							value: search,
							onChange: (event) => setSearch(event.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-filter-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Filter document category",
							value: category,
							onChange: (event) => setCategory(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }), [
								"Historical Records",
								"Old School Reports",
								"Certificates & Official Records",
								"Historical Letters",
								"Meeting Records",
								"Publications & Newsletters",
								"Research & Testimonies"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Filter access level",
							value: access,
							onChange: (event) => setAccess(event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Public" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Restricted" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Internal" })
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "admin-table-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "admin-records-table admin-management-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Document Title" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Creator" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Year" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Access" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: record.title }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.category }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.type }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.creator }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: record.year }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `admin-status ${record.access === "Public" ? "is-published" : "is-pending"}`,
								children: record.access
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `admin-status ${record.verification === "Verified" ? "is-published" : record.verification === "Pending" ? "is-pending" : "is-draft"}`,
								children: record.verification
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `admin-status ${record.published ? "is-published" : "is-draft"}`,
								children: record.published ? "Published" : "Draft"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-row-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: "Preview",
										onClick: () => openPreview(record),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: "Edit",
										onClick: () => openEdit(record),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 15 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										title: record.published ? "Unpublish" : "Publish",
										onClick: () => setRecords((current) => current.map((item) => item.id === record.id ? {
											...item,
											published: !item.published
										} : item)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 })
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
				role: "presentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": modal === "preview" ? "Document preview" : "Document form",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-modal-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "DOCUMENT RECORD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: modal === "preview" ? selected?.title : modal === "edit" ? "Edit Document" : "Add New Document" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setModal(null),
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), modal === "preview" && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-preview-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.category })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Historical Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.year })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Source not supplied" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Access" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.access })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Verification" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.verification })] })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admin-file-preview",
								children: selectedFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedFile.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No valid file selected" })
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "admin-form-grid",
						onSubmit: saveRecord,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Document Title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "title",
									required: true,
									defaultValue: selected?.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Short Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "description",
									placeholder: "Describe this record without making historical claims."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "category",
								defaultValue: selected?.category ?? "Historical Records",
								children: [
									"Historical Records",
									"Old School Reports",
									"Certificates & Official Records",
									"Historical Letters",
									"Meeting Records",
									"Publications & Newsletters",
									"Research & Testimonies"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Document Type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "type",
								defaultValue: selected?.type ?? "PDF",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "PDF" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Image" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Scanned Record" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Historical Year", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "year",
								defaultValue: selected?.year,
								placeholder: "Year pending"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Author / Creator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "creator",
								defaultValue: selected?.creator
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Original Source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "source",
								placeholder: "Original source or institution"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Copyright Information", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { name: "copyright" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Access Level", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "access",
								defaultValue: selected?.access ?? "Public",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Public" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Restricted" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Internal" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Verification Status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "verification",
								defaultValue: selected?.verification ?? "Pending",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs Correction" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Full Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { name: "fullDescription" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Verification Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { name: "notes" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["File Upload", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".pdf,image/*",
									onChange: (event) => setSelectedFile(event.target.files?.[0] ?? null)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "admin-full",
								children: ["Cover Image", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*"
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
									children: "Save Document"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
var SplitComponent = DocumentsManagementPage;
//#endregion
export { SplitComponent as component };
