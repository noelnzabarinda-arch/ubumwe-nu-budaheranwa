import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { H as FolderPlus, N as Image, O as List, c as Trash2, et as ChevronDown, f as ShieldCheck, j as Layers, l as SquarePen, m as Search, n as Video, o as Upload, q as Eye, t as X, tt as Check, v as Plus, z as Grid2x2 } from "../_libs/lucide-react.mjs";
import { n as AdminLayout } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.gallery-D7G3_CkO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"School History",
	"Students & School Life",
	"Teachers & Staff",
	"Former Leaders",
	"Events & Celebrations",
	"Remembrance & Memorial",
	"Alumni & Reunions",
	"Historical Documents",
	"Videos & Documentaries"
];
var demoMedia = [
	{
		id: "media-1",
		title: "Demonstration — School archive photograph",
		description: "Sample record; the original historical photograph and metadata have not been supplied.",
		type: "Photo",
		category: "School History",
		period: "Period not yet verified",
		uploadDate: "2026-11-24",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		caption: "[Demonstration caption]",
		creator: "[Creator not recorded]",
		source: "[Source not recorded]",
		permission: "[Permission status not recorded]",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: "",
		previewUrl: ""
	},
	{
		id: "media-2",
		title: "Demonstration — Student life image",
		description: "Placeholder media record for frontend demonstration only.",
		type: "Photo",
		category: "Students & School Life",
		period: "Period not yet verified",
		uploadDate: "2026-11-21",
		verificationStatus: "Verified",
		publicationStatus: "Published",
		caption: "[Caption pending source review]",
		creator: "[Creator not recorded]",
		source: "[Original source pending]",
		permission: "[Permission confirmed only with a real record]",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: "[Demonstration verification note]",
		previewUrl: ""
	},
	{
		id: "media-3",
		title: "Demonstration — Historical staff record",
		description: "Sample record. No real person or historical claim is represented.",
		type: "Photo",
		category: "Teachers & Staff",
		period: "Period not yet verified",
		uploadDate: "2026-11-18",
		verificationStatus: "Needs Correction",
		publicationStatus: "Draft",
		caption: "[Caption pending]",
		creator: "[Photographer unknown]",
		source: "[Source pending]",
		permission: "[Permission pending]",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: "[Metadata requires review]",
		previewUrl: ""
	},
	{
		id: "media-4",
		title: "Demonstration — Memorial documentary",
		description: "Placeholder video metadata. Add an actual local file only when properly authorized.",
		type: "Video",
		category: "Remembrance & Memorial",
		period: "Period not yet verified",
		uploadDate: "2026-11-13",
		verificationStatus: "Draft",
		publicationStatus: "Draft",
		caption: "[Respectful caption pending]",
		creator: "[Creator not recorded]",
		source: "[Source not recorded]",
		permission: "[Permission not recorded]",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: "",
		previewUrl: ""
	},
	{
		id: "media-5",
		title: "Demonstration — Event programme scan",
		description: "Sample historical document image. Replace with a verified archival record.",
		type: "Photo",
		category: "Historical Documents",
		period: "Period not yet verified",
		uploadDate: "2026-11-08",
		verificationStatus: "Verified",
		publicationStatus: "Draft",
		caption: "[Document caption pending]",
		creator: "[Creator not recorded]",
		source: "[Source pending]",
		permission: "[Permission pending]",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: "[Demonstration verification]",
		previewUrl: ""
	}
];
var demoCollections = [{
	id: "collection-1",
	title: "Demonstration — School Archive",
	slug: "demonstration-school-archive",
	description: "A placeholder collection for future sourced GSP media.",
	category: "School History",
	period: "Period not yet verified",
	sources: "[References pending]",
	verificationStatus: "Pending Verification",
	publicationStatus: "Draft",
	mediaIds: ["media-1"],
	coverImage: ""
}];
function formatDate(value) {
	return new Intl.DateTimeFormat("en", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(/* @__PURE__ */ new Date(`${value}T12:00:00`));
}
function slugify(value) {
	return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function StatusBadge({ status, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `gallery-status ${kind} ${status.toLowerCase().replaceAll(" ", "-")}`,
		children: status
	});
}
function emptyMedia() {
	return {
		title: "",
		description: "",
		category: "School History",
		period: "",
		verificationStatus: "Draft",
		publicationStatus: "Draft",
		caption: "",
		creator: "",
		source: "",
		permission: "",
		relatedStory: "",
		relatedEvent: "",
		verificationNotes: ""
	};
}
function MediaDetailsModal({ record, mode, onClose, onSave }) {
	const [values, setValues] = (0, import_react.useState)(record);
	const [errors, setErrors] = (0, import_react.useState)([]);
	const readOnly = mode === "preview";
	const update = (key, value) => setValues((current) => ({
		...current,
		[key]: value
	}));
	const save = () => {
		const missing = [
			["Media title", values.title],
			["Historical year or period", values.period],
			["Description", values.description]
		].filter(([, value]) => !value.trim()).map(([label]) => label);
		if (missing.length) {
			setErrors(missing);
			return;
		}
		onSave(values);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gallery-modal-backdrop",
		role: "presentation",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "gallery-modal gallery-details-modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Media details",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-modal-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin / Gallery & Media Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "create" ? "New Media Details" : mode === "edit" ? "Edit Media Details" : "Media Details" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-validation",
					role: "alert",
					children: ["Complete: ", errors.join(", ")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-details-grid",
					children: [
						values.previewUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-details-preview",
							children: values.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: values.previewUrl,
								controls: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: values.previewUrl,
								alt: values.caption || values.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Media Title *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.title,
							onChange: (event) => update("title", event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Media Category *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: readOnly,
							value: values.category,
							onChange: (event) => update("category", event.target.value),
							children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Year or Period *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.period,
							placeholder: "Enter a verified period",
							onChange: (event) => update("period", event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Photographer / Creator" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.creator,
							onChange: (event) => update("creator", event.target.value),
							placeholder: "[Not recorded]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Description *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								disabled: readOnly,
								rows: 3,
								value: values.description,
								onChange: (event) => update("description", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Caption" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								disabled: readOnly,
								rows: 2,
								value: values.caption,
								onChange: (event) => update("caption", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Original Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.source,
							onChange: (event) => update("source", event.target.value),
							placeholder: "[Source pending]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copyright / Permission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.permission,
							onChange: (event) => update("permission", event.target.value),
							placeholder: "[Permission pending]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Historical Story" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.relatedStory,
							onChange: (event) => update("relatedStory", event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related Event" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.relatedEvent,
							onChange: (event) => update("relatedEvent", event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: readOnly,
							value: values.verificationStatus,
							onChange: (event) => update("verificationStatus", event.target.value),
							children: [
								"Draft",
								"Pending Verification",
								"Verified",
								"Needs Correction"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							disabled: readOnly,
							value: values.publicationStatus,
							onChange: (event) => update("publicationStatus", event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								disabled: readOnly,
								rows: 3,
								value: values.verificationNotes,
								onChange: (event) => update("verificationNotes", event.target.value)
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-modal-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "gallery-button secondary",
						onClick: onClose,
						children: readOnly ? "Close" : "Cancel"
					}), !readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "gallery-button primary",
						onClick: save,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Save Details"]
					})]
				})
			]
		})
	});
}
function CollectionModal({ collection, media, mode, onClose, onSave }) {
	const [values, setValues] = (0, import_react.useState)(collection);
	const [errors, setErrors] = (0, import_react.useState)([]);
	const readOnly = mode === "preview";
	const update = (key, value) => setValues((current) => ({
		...current,
		[key]: value
	}));
	const toggleMedia = (id) => setValues((current) => ({
		...current,
		mediaIds: current.mediaIds.includes(id) ? current.mediaIds.filter((item) => item !== id) : [...current.mediaIds, id]
	}));
	const save = () => {
		const missing = [
			["Collection title", values.title],
			["Description", values.description],
			["Historical period", values.period],
			["Sources and references", values.sources]
		].filter(([, value]) => !value.trim()).map(([label]) => label);
		if (missing.length) {
			setErrors(missing);
			return;
		}
		onSave(values);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gallery-modal-backdrop",
		role: "presentation",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "gallery-modal gallery-collection-modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Collection editor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-modal-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin / Gallery & Media Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "create" ? "Create Collection" : mode === "edit" ? "Edit Collection" : "Collection Preview" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-validation",
					role: "alert",
					children: ["Complete: ", errors.join(", ")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-details-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collection Title *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.title,
							onChange: (event) => setValues((current) => ({
								...current,
								title: event.target.value,
								slug: current.id ? current.slug : slugify(event.target.value)
							}))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "URL Slug *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.slug,
							onChange: (event) => update("slug", slugify(event.target.value))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Description *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								disabled: readOnly,
								rows: 3,
								value: values.description,
								onChange: (event) => update("description", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: readOnly,
							value: values.category,
							onChange: (event) => update("category", event.target.value),
							children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Period *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: readOnly,
							value: values.period,
							onChange: (event) => update("period", event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sources and References *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								disabled: readOnly,
								rows: 3,
								value: values.sources,
								onChange: (event) => update("sources", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "gallery-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cover Image" }),
								values.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "gallery-collection-cover-preview",
									src: values.coverImage,
									alt: "Collection cover preview"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gallery-collection-cover-empty",
									children: "No cover image selected"
								}),
								!readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp",
									onChange: (event) => {
										const file = event.target.files?.[0];
										if (!file) return;
										if (![
											"image/jpeg",
											"image/png",
											"image/webp"
										].includes(file.type) || file.size > 10485760) return;
										const reader = new FileReader();
										reader.onload = () => setValues((current) => ({
											...current,
											coverImage: typeof reader.result === "string" ? reader.result : ""
										}));
										reader.readAsDataURL(file);
									}
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: readOnly,
							value: values.verificationStatus,
							onChange: (event) => update("verificationStatus", event.target.value),
							children: [
								"Draft",
								"Pending Verification",
								"Verified",
								"Needs Correction"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							disabled: readOnly,
							value: values.publicationStatus,
							onChange: (event) => update("publicationStatus", event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-media-selector gallery-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Select Media Items" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: media.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: values.mediaIds.includes(item.id) ? "is-selected" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										disabled: readOnly,
										checked: values.mediaIds.includes(item.id),
										onChange: () => toggleMedia(item.id)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gallery-selector-thumb",
										children: item.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 16 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.category })] })
								]
							}, item.id)) })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-modal-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "gallery-button secondary",
						onClick: onClose,
						children: readOnly ? "Close" : "Cancel"
					}), !readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "gallery-button primary",
						onClick: save,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Save Collection"]
					})]
				})
			]
		})
	});
}
function GalleryManagementPage() {
	const [media, setMedia] = (0, import_react.useState)(demoMedia);
	const [collections, setCollections] = (0, import_react.useState)(demoCollections);
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [mediaType, setMediaType] = (0, import_react.useState)("all");
	const [period, setPeriod] = (0, import_react.useState)("all");
	const [verification, setVerification] = (0, import_react.useState)("all");
	const [publication, setPublication] = (0, import_react.useState)("all");
	const [sortOrder, setSortOrder] = (0, import_react.useState)("newest");
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const [page, setPage] = (0, import_react.useState)(1);
	const [feedback, setFeedback] = (0, import_react.useState)("");
	const [uploadOpen, setUploadOpen] = (0, import_react.useState)(false);
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)("");
	const [uploadProgress, setUploadProgress] = (0, import_react.useState)(0);
	const [uploadErrors, setUploadErrors] = (0, import_react.useState)([]);
	const [uploadType, setUploadType] = (0, import_react.useState)("Photo");
	const [detailsRecord, setDetailsRecord] = (0, import_react.useState)(null);
	const [detailsMode, setDetailsMode] = (0, import_react.useState)(null);
	const [previewRecord, setPreviewRecord] = (0, import_react.useState)(null);
	const [collectionRecord, setCollectionRecord] = (0, import_react.useState)(null);
	const [collectionMode, setCollectionMode] = (0, import_react.useState)(null);
	const pageSize = 6;
	(0, import_react.useEffect)(() => {
		return () => {
			if (previewUrl) URL.revokeObjectURL(previewUrl);
		};
	}, [previewUrl]);
	const periods = (0, import_react.useMemo)(() => Array.from(new Set(media.map((item) => item.period))).filter(Boolean), [media]);
	const filteredMedia = (0, import_react.useMemo)(() => {
		return [...media.filter((item) => item.title.toLowerCase().includes(search.trim().toLowerCase()) && (category === "all" || item.category === category) && (mediaType === "all" || item.type === mediaType) && (period === "all" || item.period === period) && (verification === "all" || item.verificationStatus === verification) && (publication === "all" || item.publicationStatus === publication))].sort((left, right) => {
			if (sortOrder === "title") return left.title.localeCompare(right.title);
			return sortOrder === "newest" ? right.uploadDate.localeCompare(left.uploadDate) : left.uploadDate.localeCompare(right.uploadDate);
		});
	}, [
		media,
		search,
		category,
		mediaType,
		period,
		verification,
		publication,
		sortOrder
	]);
	const pageCount = Math.max(1, Math.ceil(filteredMedia.length / pageSize));
	const visibleMedia = filteredMedia.slice((page - 1) * pageSize, page * pageSize);
	const clearFilters = () => {
		setSearch("");
		setCategory("all");
		setMediaType("all");
		setPeriod("all");
		setVerification("all");
		setPublication("all");
		setSortOrder("newest");
		setPage(1);
	};
	const handleFile = (file) => {
		if (!file) return;
		const allowedImages = [
			"image/jpeg",
			"image/png",
			"image/webp"
		];
		const allowedTypes = [...allowedImages, "video/mp4"];
		const maxSize = 104857600;
		const errors = [];
		if (!allowedTypes.includes(file.type)) errors.push("Only JPG, JPEG, PNG, WEBP and MP4 files are supported.");
		if (file.size > maxSize) errors.push("The selected file exceeds the 100 MB frontend demo limit.");
		setUploadErrors(errors);
		if (errors.length) {
			setSelectedFile(null);
			if (previewUrl) URL.revokeObjectURL(previewUrl);
			setPreviewUrl("");
			setUploadProgress(0);
			return;
		}
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		const url = URL.createObjectURL(file);
		setSelectedFile(file);
		setPreviewUrl(url);
		setUploadType(allowedImages.includes(file.type) ? "Photo" : "Video");
		setUploadProgress(0);
	};
	const handleDrop = (event) => {
		event.preventDefault();
		handleFile(event.dataTransfer.files?.[0]);
	};
	const removeSelectedFile = () => {
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		setPreviewUrl("");
		setSelectedFile(null);
		setUploadProgress(0);
		setUploadErrors([]);
	};
	const closeUpload = () => {
		removeSelectedFile();
		setUploadOpen(false);
	};
	const startUploadDemo = () => {
		if (!selectedFile) {
			setUploadErrors(["Select a valid photo or MP4 file before continuing."]);
			return;
		}
		setUploadErrors([]);
		setUploadProgress(8);
		const timer = window.setInterval(() => {
			setUploadProgress((current) => {
				const next = Math.min(100, current + 13);
				if (next === 100) window.clearInterval(timer);
				return next;
			});
		}, 180);
	};
	const continueToDetails = () => {
		if (!selectedFile || uploadProgress !== 100) {
			setUploadErrors(["Run the frontend upload simulation until it reaches 100% first."]);
			return;
		}
		setDetailsRecord({
			...emptyMedia(),
			id: "",
			title: selectedFile.name.replace(/\.[^.]+$/, ""),
			type: uploadType,
			uploadDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			previewUrl
		});
		setDetailsMode("create");
		setUploadOpen(false);
	};
	const saveMediaDetails = (record) => {
		const next = {
			...record,
			id: record.id || `media-${Date.now()}`,
			previewUrl: record.previewUrl || previewUrl
		};
		setMedia((current) => record.id ? current.map((item) => item.id === record.id ? next : item) : [next, ...current]);
		setFeedback(record.id ? "Media details updated in this frontend preview." : "Media record created in this frontend preview.");
		setDetailsMode(null);
		setDetailsRecord(null);
	};
	const deleteMedia = (record) => {
		if (!window.confirm(`Delete "${record.title}" from this frontend preview?`)) return;
		setMedia((current) => current.filter((item) => item.id !== record.id));
		setCollections((current) => current.map((collection) => ({
			...collection,
			mediaIds: collection.mediaIds.filter((id) => id !== record.id)
		})));
		setFeedback("Media deleted from this frontend preview.");
	};
	const togglePublication = (record) => {
		if (record.verificationStatus !== "Verified") {
			setFeedback("This media must be verified before it can be published.");
			return;
		}
		const next = record.publicationStatus === "Published" ? "Draft" : "Published";
		if (!window.confirm(`${next === "Published" ? "Publish" : "Unpublish"} "${record.title}"?`)) return;
		setMedia((current) => current.map((item) => item.id === record.id ? {
			...item,
			publicationStatus: next
		} : item));
		setFeedback(`Media ${next === "Published" ? "published" : "unpublished"} in this frontend preview.`);
	};
	const saveCollection = (record) => {
		const next = {
			...record,
			id: record.id || `collection-${Date.now()}`,
			slug: slugify(record.slug || record.title)
		};
		setCollections((current) => record.id ? current.map((item) => item.id === record.id ? next : item) : [next, ...current]);
		setFeedback(record.id ? "Collection updated in this frontend preview." : "Collection created in this frontend preview.");
		setCollectionMode(null);
		setCollectionRecord(null);
	};
	const deleteCollection = (record) => {
		if (!window.confirm(`Delete collection "${record.title}"?`)) return;
		setCollections((current) => current.filter((item) => item.id !== record.id));
		setFeedback("Collection deleted from this frontend preview.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminLayout, {
		pageTitle: "Gallery & Media Management",
		activePage: "Gallery & Media Management",
		showGlobalSearch: false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-page-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "gallery-eyebrow",
								children: "GSP HISTORICAL ARCHIVE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Gallery & Media Management" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organize and preserve GSP historical photographs, videos and media collections." })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-heading-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "gallery-button secondary",
								onClick: () => setUploadOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), " Upload Media"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "gallery-button primary",
								onClick: () => {
									setCollectionRecord({
										id: "",
										title: "",
										slug: "",
										description: "",
										category: "School History",
										period: "",
										sources: "",
										verificationStatus: "Draft",
										publicationStatus: "Draft",
										mediaIds: [],
										coverImage: ""
									});
									setCollectionMode("create");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { size: 15 }), " Create Collection"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-demo-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demonstration data" }), " — sample placeholders only. Actual publication requires reviewed metadata and appropriate permission."] })]
					}),
					feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-feedback",
						role: "status",
						children: [feedback, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Dismiss message",
							onClick: () => setFeedback(""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "gallery-stat-grid",
						"aria-label": "Media statistics",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Photos" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: media.filter((item) => item.type === "Photo").length }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 18 })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Videos" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: media.filter((item) => item.type === "Video").length }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 18 })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Collections" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: collections.length }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 18 })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pending Verification" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: media.filter((item) => item.verificationStatus === "Pending Verification").length }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 })
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gallery-category-strip",
						"aria-label": "Media category filters",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: category === "all" ? "is-active" : "",
							onClick: () => {
								setCategory("all");
								setPage(1);
							},
							children: "All Media"
						}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: category === item ? "is-active" : "",
							onClick: () => {
								setCategory(item);
								setPage(1);
							},
							children: item
						}, item))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "admin-panel gallery-library",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-list-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Media Library" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manage image and video records, verification and publication." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gallery-view-toggle",
									"aria-label": "Library view",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: viewMode === "grid" ? "is-active" : "",
										"aria-label": "Grid view",
										onClick: () => setViewMode("grid"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { size: 16 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: viewMode === "list" ? "is-active" : "",
										"aria-label": "List view",
										onClick: () => setViewMode("list"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { size: 16 })
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-filters",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "gallery-search",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 15 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: search,
												onChange: (event) => {
													setSearch(event.target.value);
													setPage(1);
												},
												placeholder: "Search media titles..."
											}),
											search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Clear search",
												onClick: () => setSearch(""),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Media type"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: mediaType,
											onChange: (event) => {
												setMediaType(event.target.value);
												setPage(1);
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All types"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Photo" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Video" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Historical year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: period,
											onChange: (event) => {
												setPeriod(event.target.value);
												setPage(1);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: "All periods"
											}), periods.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Verification"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: verification,
											onChange: (event) => {
												setVerification(event.target.value);
												setPage(1);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: "All verification"
											}), [
												"Draft",
												"Pending Verification",
												"Verified",
												"Needs Correction"
											].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Publication"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: publication,
											onChange: (event) => {
												setPublication(event.target.value);
												setPage(1);
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All publication"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Sort"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: sortOrder,
											onChange: (event) => {
												setSortOrder(event.target.value);
												setPage(1);
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "newest",
													children: "Newest first"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "oldest",
													children: "Oldest first"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "title",
													children: "Title A–Z"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "gallery-clear",
										onClick: clearFilters,
										children: "Clear filters"
									})
								]
							}),
							visibleMedia.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-empty",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 22 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No media matches these filters" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try other keywords or clear the filters." })
								]
							}) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "gallery-media-grid",
								children: visibleMedia.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "gallery-media-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "gallery-media-preview",
										onClick: () => setPreviewRecord(item),
										"aria-label": `Preview ${item.title}`,
										children: [item.previewUrl ? item.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: item.previewUrl,
											muted: true
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.previewUrl,
											alt: item.caption || item.title
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "gallery-placeholder",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 28 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "[Demonstration placeholder]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gallery-type-tag",
											children: item.type
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "gallery-media-card-body",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: item.title }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												item.category,
												" · ",
												item.period
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "gallery-card-badges",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
													status: item.verificationStatus,
													kind: "verification"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
													status: item.publicationStatus,
													kind: "publication"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["Uploaded ", formatDate(item.uploadDate)] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "gallery-card-actions",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": "Preview",
														title: "Preview",
														onClick: () => setPreviewRecord(item),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 14 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": "Edit details",
														title: "Edit Details",
														onClick: () => {
															setDetailsRecord(item);
															setDetailsMode("edit");
														},
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { size: 14 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": item.publicationStatus === "Published" ? "Unpublish" : "Publish",
														title: item.publicationStatus === "Published" ? "Unpublish" : "Publish",
														onClick: () => togglePublication(item),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": "Delete",
														title: "Delete",
														onClick: () => deleteMedia(item),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
													})
												]
											})
										]
									})]
								}, item.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "gallery-table-scroll",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "gallery-table",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Media" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Title" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Type" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Period" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Uploaded" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
									] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visibleMedia.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "gallery-table-thumb",
											onClick: () => setPreviewRecord(item),
											children: item.previewUrl ? item.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
												src: item.previewUrl,
												muted: true
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.previewUrl,
												alt: ""
											}) : item.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 16 })
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: item.type }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: item.category }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: item.period }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: formatDate(item.uploadDate) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											status: item.verificationStatus,
											kind: "verification"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											status: item.publicationStatus,
											kind: "publication"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "gallery-row-actions",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													title: "Preview",
													onClick: () => setPreviewRecord(item),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 14 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													title: "Edit Details",
													onClick: () => {
														setDetailsRecord(item);
														setDetailsMode("edit");
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { size: 14 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													title: "Change Publication",
													onClick: () => togglePublication(item),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													title: "Delete",
													onClick: () => deleteMedia(item),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
												})
											]
										}) })
									] }, item.id)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-table-footer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Showing ",
									visibleMedia.length ? (page - 1) * pageSize + 1 : 0,
									"–",
									Math.min(page * pageSize, filteredMedia.length),
									" of ",
									filteredMedia.length,
									" media records"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: page === 1,
										onClick: () => setPage((current) => Math.max(1, current - 1)),
										children: "Previous"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: page }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: page === pageCount,
										onClick: () => setPage((current) => Math.min(pageCount, current + 1)),
										children: "Next"
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "admin-panel gallery-collections",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-list-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Media Collections" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Create themed galleries and organize selected media." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "gallery-button primary",
								onClick: () => {
									setCollectionRecord({
										id: "",
										title: "",
										slug: "",
										description: "",
										category: "School History",
										period: "",
										sources: "",
										verificationStatus: "Draft",
										publicationStatus: "Draft",
										mediaIds: [],
										coverImage: ""
									});
									setCollectionMode("create");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 }), " New Collection"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-collection-grid",
							children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-collection-cover",
								children: [collection.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: collection.coverImage,
									alt: ""
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [collection.mediaIds.length, " media"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-collection-body",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: collection.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										collection.category,
										" · ",
										collection.period
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "gallery-card-badges",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											status: collection.verificationStatus,
											kind: "verification"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											status: collection.publicationStatus,
											kind: "publication"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "gallery-card-actions",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												title: "Preview",
												onClick: () => {
													setCollectionRecord(collection);
													setCollectionMode("preview");
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												title: "Edit Collection",
												onClick: () => {
													setCollectionRecord(collection);
													setCollectionMode("edit");
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												title: "Delete Collection",
												onClick: () => deleteCollection(collection),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
											})
										]
									})
								]
							})] }, collection.id))
						})]
					})
				]
			}),
			uploadOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery-modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) closeUpload();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "gallery-modal gallery-upload-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Upload media",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-modal-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin / Gallery & Media Management" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Upload Media" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close",
								onClick: closeUpload,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})]
						}),
						uploadErrors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-validation",
							role: "alert",
							children: uploadErrors.join(" ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `gallery-dropzone${selectedFile ? " has-file" : ""}`,
							onDragOver: (event) => event.preventDefault(),
							onDrop: handleDrop,
							children: [previewUrl ? uploadType === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: previewUrl,
								controls: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: previewUrl,
								alt: "Selected file preview"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 28 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Drag and drop a photo or MP4 here" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "JPG, JPEG, PNG, WEBP or MP4 · Maximum 100 MB" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Browse Files" })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: ".jpg,.jpeg,.png,.webp,.mp4,image/jpeg,image/png,image/webp,video/mp4",
								onChange: (event) => handleFile(event.target.files?.[0])
							})]
						}),
						selectedFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-selected-file",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [uploadType === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selectedFile.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								selectedFile.type || "Unknown type",
								" ·",
								" ",
								(selectedFile.size / 1024 / 1024).toFixed(2),
								" MB"
							] })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: removeSelectedFile,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 }), " Remove"]
							})]
						}),
						uploadProgress > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-upload-progress",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Frontend demo progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [uploadProgress, "%"] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "gallery-progress-track",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${uploadProgress}%` } })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "No file is permanently uploaded to a server." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-modal-footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "gallery-button secondary",
								onClick: closeUpload,
								children: "Cancel"
							}), uploadProgress < 100 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "gallery-button primary",
								onClick: startUploadDemo,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), " Simulate Upload"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "gallery-button primary",
								onClick: continueToDetails,
								children: "Continue to Details"
							})]
						})
					]
				})
			}),
			detailsRecord && detailsMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaDetailsModal, {
				record: detailsRecord,
				mode: detailsMode,
				onClose: () => {
					setDetailsRecord(null);
					setDetailsMode(null);
				},
				onSave: saveMediaDetails
			}),
			collectionRecord && collectionMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionModal, {
				collection: collectionRecord,
				media,
				mode: collectionMode,
				onClose: () => {
					setCollectionRecord(null);
					setCollectionMode(null);
				},
				onSave: saveCollection
			}),
			previewRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery-modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setPreviewRecord(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "gallery-modal gallery-preview-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Media preview",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-modal-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Media Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: previewRecord.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close",
								onClick: () => setPreviewRecord(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-preview-content",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "gallery-preview-media",
								children: previewRecord.previewUrl ? previewRecord.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: previewRecord.previewUrl,
									controls: true
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: previewRecord.previewUrl,
									alt: previewRecord.caption || previewRecord.title
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gallery-placeholder large",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: previewRecord.type === "Video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 36 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 36 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "[Demonstration media placeholder — no authentic archive image supplied]" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gallery-preview-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.type })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.category })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Period" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.period })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Creator" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.creator || "[Not recorded]" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.source || "[Not recorded]" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Permission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previewRecord.permission || "[Not recorded]" })] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-preview-description",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Caption & Description" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewRecord.caption || "[Caption pending]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: previewRecord.description })
							]
						})
					]
				})
			})
		]
	});
}
var SplitComponent = GalleryManagementPage;
//#endregion
export { SplitComponent as component };
