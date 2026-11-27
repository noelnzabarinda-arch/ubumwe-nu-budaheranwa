import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { P as ImagePlus, W as FileText, X as Clock3, c as Trash2, et as ChevronDown, f as ShieldCheck, ft as ArrowLeft, l as SquarePen, m as Search, ot as BookOpen, q as Eye, t as X, tt as Check, v as Plus } from "../_libs/lucide-react.mjs";
import { n as AdminLayout } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.history-DqmdqWP-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"School Foundation",
	"Institutional Development",
	"Education History",
	"School Leadership",
	"Important Milestones",
	"Historical Remembrance",
	"Community History"
];
var demoStories = [
	{
		id: "demo-1",
		title: "Demonstration story — school foundation",
		slug: "demonstration-school-foundation",
		description: "Placeholder record; verified historical details have not been supplied.",
		content: "",
		category: "School Foundation",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		verificationNotes: "",
		verifiedBy: "",
		updatedAt: "2026-11-24"
	},
	{
		id: "demo-2",
		title: "Demonstration story — institutional development",
		slug: "demonstration-institutional-development",
		description: "Placeholder record; institutional details require documentary sources.",
		content: "",
		category: "Institutional Development",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		verificationNotes: "Demonstration verification note.",
		verifiedBy: "Verifier not recorded",
		updatedAt: "2026-11-20"
	},
	{
		id: "demo-3",
		title: "Demonstration story — education history",
		slug: "demonstration-education-history",
		description: "Placeholder record; add a short description when verified information is available.",
		content: "",
		category: "Education History",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Needs Correction",
		publicationStatus: "Draft",
		verificationNotes: "Demonstration note: source details are needed.",
		verifiedBy: "",
		updatedAt: "2026-11-16"
	},
	{
		id: "demo-4",
		title: "Demonstration story — leadership record",
		slug: "demonstration-leadership-record",
		description: "Placeholder record; leadership information has not been verified.",
		content: "",
		category: "School Leadership",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Draft",
		publicationStatus: "Draft",
		verificationNotes: "",
		verifiedBy: "",
		updatedAt: "2026-11-12"
	},
	{
		id: "demo-5",
		title: "Demonstration story — community history",
		slug: "demonstration-community-history",
		description: "Placeholder record for a future, properly sourced community account.",
		content: "",
		category: "Community History",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		verificationNotes: "",
		verifiedBy: "",
		updatedAt: "2026-11-08"
	},
	{
		id: "demo-6",
		title: "Demonstration story — historical remembrance",
		slug: "demonstration-historical-remembrance",
		description: "Placeholder record; details require confirmation from reliable references.",
		content: "",
		category: "Historical Remembrance",
		period: "",
		coverImage: "",
		imageCaption: "",
		imageCredit: "",
		contributor: "",
		sources: "",
		verificationStatus: "Pending Verification",
		publicationStatus: "Draft",
		verificationNotes: "",
		verifiedBy: "Verifier not recorded",
		updatedAt: "2026-11-02"
	}
];
var emptyStory = () => ({
	title: "",
	slug: "",
	description: "",
	content: "",
	category: "School Foundation",
	period: "",
	coverImage: "",
	imageCaption: "",
	imageCredit: "",
	contributor: "",
	sources: "",
	verificationStatus: "Draft",
	publicationStatus: "Draft",
	verificationNotes: "",
	verifiedBy: ""
});
function slugify(value) {
	return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function formatUpdatedAt(value) {
	return new Intl.DateTimeFormat("en", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(/* @__PURE__ */ new Date(`${value}T12:00:00`));
}
function hasPublishingRequirements(story) {
	return [
		story.title,
		story.slug,
		story.description,
		story.content,
		story.period,
		story.contributor,
		story.sources
	].every((value) => value.trim().length > 0);
}
function VerificationBadge({ status }) {
	const statusClass = status.toLowerCase().replaceAll(" ", "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `history-status history-verification ${statusClass}`,
		children: status
	});
}
function PublicationBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `history-status history-publication ${status.toLowerCase()}`,
		children: status
	});
}
function StoryForm({ story, mode, onCancel, onSave }) {
	const [values, setValues] = (0, import_react.useState)(() => ({
		...emptyStory(),
		...story,
		id: story?.id ?? "",
		updatedAt: story?.updatedAt ?? ""
	}));
	const [slugEdited, setSlugEdited] = (0, import_react.useState)(mode !== "create");
	const [errors, setErrors] = (0, import_react.useState)([]);
	const readOnly = mode === "view";
	const canPublish = values.verificationStatus === "Verified" && hasPublishingRequirements(values);
	const update = (key, value) => {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	};
	const updateTitle = (title) => {
		setValues((current) => ({
			...current,
			title,
			...!slugEdited ? { slug: slugify(title) } : {}
		}));
	};
	const handleImage = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setErrors(["Choose a valid image file."]);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => update("coverImage", typeof reader.result === "string" ? reader.result : "");
		reader.onerror = () => setErrors(["The selected image could not be read."]);
		reader.readAsDataURL(file);
	};
	const submit = (action) => {
		const missing = (action === "draft" ? [["Story title", values.title], ["URL slug", values.slug]] : [
			["Story title", values.title],
			["URL slug", values.slug],
			["Short description", values.description],
			["Full historical story", values.content],
			["Historical period or year", values.period],
			["Author or contributor", values.contributor],
			["Historical sources and references", values.sources]
		]).filter(([, value]) => !value.trim()).map(([label]) => label);
		if (action === "publish" && values.verificationStatus !== "Verified") missing.push("Verified status");
		if (missing.length) {
			setErrors(missing);
			return;
		}
		setErrors([]);
		onSave(values, action);
	};
	const fieldDisabled = readOnly;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "admin-panel history-form-panel",
		"aria-label": mode === "view" ? "Story details" : "Story editor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "history-form-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "history-back-link",
						onClick: onCancel,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Back to stories"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "create" ? "Add New Story" : mode === "edit" ? "Edit History Story" : "Story Details" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Enter verified information and its supporting references. Changes remain in this frontend preview." })
				] }), mode !== "create" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { status: values.verificationStatus })]
			}),
			errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "history-validation",
				role: "alert",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Complete or correct these fields:" }),
					" ",
					errors.join(", ")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "history-form-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field history-field-wide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Story Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.title,
							onChange: (event) => updateTitle(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["URL Slug ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.slug,
							onChange: (event) => {
								setSlugEdited(true);
								update("slug", slugify(event.target.value));
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Historical Category ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: fieldDisabled,
							value: values.category,
							onChange: (event) => update("category", event.target.value),
							children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Historical Year or Period ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.period,
							placeholder: "e.g. Enter a verified period",
							onChange: (event) => update("period", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Author or Contributor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.contributor,
							onChange: (event) => update("contributor", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field history-field-wide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Short Description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							disabled: fieldDisabled,
							rows: 2,
							value: values.description,
							onChange: (event) => update("description", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field history-field-wide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Full Historical Story Content ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							disabled: fieldDisabled,
							rows: 7,
							value: values.content,
							onChange: (event) => update("content", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-field history-field-wide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cover Image" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `history-upload${readOnly ? " is-disabled" : ""}`,
							children: [
								values.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: values.coverImage,
									alt: values.imageCaption || "Story cover preview"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 23 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: values.coverImage ? "Image selected" : "Choose a cover image" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Image preview only; not uploaded to a server." }),
								!readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									onChange: handleImage
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Image Caption" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.imageCaption,
							onChange: (event) => update("imageCaption", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Image Source / Credit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.imageCredit,
							onChange: (event) => update("imageCredit", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field history-field-wide",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Historical Sources and References ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "*" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							disabled: fieldDisabled,
							rows: 3,
							value: values.sources,
							onChange: (event) => update("sources", event.target.value),
							placeholder: "List archival references, documents, or oral-history sources."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							disabled: fieldDisabled,
							value: values.verificationStatus,
							onChange: (event) => update("verificationStatus", event.target.value),
							children: [
								"Draft",
								"Pending Verification",
								"Verified",
								"Needs Correction"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publication Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: true,
							value: values.publicationStatus
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verification Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							disabled: fieldDisabled,
							rows: 3,
							value: values.verificationNotes,
							onChange: (event) => update("verificationNotes", event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "history-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified By (if recorded)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							disabled: fieldDisabled,
							value: values.verifiedBy,
							onChange: (event) => update("verifiedBy", event.target.value),
							placeholder: "Not recorded"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "history-form-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "history-button secondary",
					onClick: onCancel,
					children: readOnly ? "Close" : "Cancel"
				}), !readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "history-button secondary",
						onClick: () => submit("draft"),
						children: "Save as Draft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "history-button secondary",
						onClick: () => submit("verify"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }), " Submit for Verification"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "history-button primary",
						disabled: !canPublish,
						title: !canPublish ? "Complete required fields and mark the story verified to publish." : void 0,
						onClick: () => submit("publish"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Publish"]
					})
				] })]
			})
		]
	});
}
function HistoryManagementPage() {
	const [stories, setStories] = (0, import_react.useState)(demoStories);
	const [search, setSearch] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [publicationFilter, setPublicationFilter] = (0, import_react.useState)("all");
	const [verificationFilter, setVerificationFilter] = (0, import_react.useState)("all");
	const [sortOrder, setSortOrder] = (0, import_react.useState)("newest");
	const [page, setPage] = (0, import_react.useState)(1);
	const [activeStory, setActiveStory] = (0, import_react.useState)(null);
	const [formMode, setFormMode] = (0, import_react.useState)(null);
	const [feedback, setFeedback] = (0, import_react.useState)("");
	const pageSize = 5;
	const filteredStories = (0, import_react.useMemo)(() => {
		return stories.filter((story) => story.title.toLowerCase().includes(search.trim().toLowerCase()) && (categoryFilter === "all" || story.category === categoryFilter) && (publicationFilter === "all" || story.publicationStatus === publicationFilter) && (verificationFilter === "all" || story.verificationStatus === verificationFilter)).sort((left, right) => {
			if (sortOrder === "title") return left.title.localeCompare(right.title);
			return sortOrder === "newest" ? right.updatedAt.localeCompare(left.updatedAt) : left.updatedAt.localeCompare(right.updatedAt);
		});
	}, [
		stories,
		search,
		categoryFilter,
		publicationFilter,
		verificationFilter,
		sortOrder
	]);
	const pageCount = Math.max(1, Math.ceil(filteredStories.length / pageSize));
	const visibleStories = filteredStories.slice((page - 1) * pageSize, page * pageSize);
	const startCreate = () => {
		setActiveStory(null);
		setFormMode("create");
		setFeedback("");
	};
	const startEdit = (story, mode) => {
		setActiveStory(story);
		setFormMode(mode);
		setFeedback("");
	};
	const closeForm = () => {
		setFormMode(null);
		setActiveStory(null);
	};
	const saveStory = (value, action) => {
		if (action === "publish" && value.verificationStatus !== "Verified") {
			setFeedback("A story must be verified before it can be published.");
			return;
		}
		if (value.publicationStatus === "Published" && action !== "publish" && !window.confirm("Save these changes and unpublish this story?")) return;
		if (action === "publish" && !window.confirm("Publish this verified story?")) return;
		const next = {
			...value,
			id: value.id || `story-${Date.now()}`,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			verificationStatus: action === "verify" ? "Pending Verification" : value.verificationStatus,
			publicationStatus: action === "publish" ? "Published" : "Draft"
		};
		setStories((current) => value.id ? current.map((story) => story.id === value.id ? next : story) : [next, ...current]);
		setFeedback(action === "publish" ? "Story published in this frontend preview." : action === "verify" ? "Story submitted for verification." : "Draft saved in this frontend preview.");
		setPage(1);
		closeForm();
	};
	const deleteStory = (story) => {
		if (!window.confirm(`Delete "${story.title}" from this frontend preview?`)) return;
		setStories((current) => current.filter((item) => item.id !== story.id));
		setFeedback("Story deleted from this frontend preview.");
	};
	const togglePublication = (story) => {
		const nextStatus = story.publicationStatus === "Published" ? "Draft" : "Published";
		if (nextStatus === "Published" && (story.verificationStatus !== "Verified" || !hasPublishingRequirements(story))) {
			setFeedback("A story must be verified and have complete required content and references before it can be published.");
			return;
		}
		const action = nextStatus === "Published" ? "Publish" : "Unpublish";
		if (!window.confirm(`${action} "${story.title}"?`)) return;
		setStories((current) => current.map((item) => item.id === story.id ? {
			...item,
			publicationStatus: nextStatus,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		} : item));
		setFeedback(`Story ${nextStatus === "Published" ? "published" : "unpublished"} in this frontend preview.`);
	};
	const clearFilters = () => {
		setSearch("");
		setCategoryFilter("all");
		setPublicationFilter("all");
		setVerificationFilter("all");
		setSortOrder("newest");
		setPage(1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {
		pageTitle: "History Management",
		activePage: "History Management",
		showGlobalSearch: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "history-page",
			children: formMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryForm, {
				story: activeStory,
				mode: formMode,
				onCancel: closeForm,
				onSave: saveStory
			}, `${formMode}-${activeStory?.id ?? "new"}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "history-page-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "history-eyebrow",
							children: "GSP HISTORICAL ARCHIVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "History Management" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manage and preserve the historical stories of GSP." })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "history-button primary",
						onClick: startCreate,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Story"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "history-demo-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demonstration records" }), " — sample placeholders only; no verified GSP historical details are represented or permanently stored."] })]
				}),
				feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "history-feedback",
					role: "status",
					children: [feedback, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Dismiss message",
						onClick: () => setFeedback(""),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "history-stat-grid",
					"aria-label": "History story statistics",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Stories" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.length }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 18 })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Published Stories" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.filter((story) => story.publicationStatus === "Published").length }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Draft Stories" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.filter((story) => story.publicationStatus === "Draft").length }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pending Verification" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.filter((story) => story.verificationStatus === "Pending Verification").length }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 18 })
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-panel history-list-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-list-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Historical Stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Review story content, sources, and publication readiness." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "history-demo-tag",
								children: "FRONTEND PREVIEW"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-filters",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "history-search",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Search by story title"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											placeholder: "Search story titles...",
											value: search,
											onChange: (event) => {
												setSearch(event.target.value);
												setPage(1);
											}
										}),
										search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Clear search",
											onClick: () => {
												setSearch("");
												setPage(1);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Filter by category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: categoryFilter,
										onChange: (event) => {
											setCategoryFilter(event.target.value);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All categories"
										}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Filter by publication status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: publicationFilter,
										onChange: (event) => {
											setPublicationFilter(event.target.value);
											setPage(1);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: "All publication statuses"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Filter by verification status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: verificationFilter,
										onChange: (event) => {
											setVerificationFilter(event.target.value);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All verification statuses"
										}), [
											"Draft",
											"Pending Verification",
											"Verified",
											"Needs Correction"
										].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Sort stories"
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "history-clear-button",
									onClick: clearFilters,
									children: "Clear filters"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-table-scroll",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "history-table",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cover Image" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Story Title" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Historical Period / Year" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Author / Contributor" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Verification" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Publication" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Last Updated" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
								] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visibleStories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: story.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "history-cover",
										src: story.coverImage,
										alt: story.imageCaption || "Story cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "history-cover-placeholder",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 17 })
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "history-story-title",
										children: story.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["/", story.slug] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: story.category }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: story.period }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: story.contributor }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationBadge, { status: story.verificationStatus }), story.verifiedBy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
										className: "history-verified-by",
										children: ["By ", story.verifiedBy]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationBadge, { status: story.publicationStatus }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: formatUpdatedAt(story.updatedAt) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "history-row-actions",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `View ${story.title}`,
												title: "View",
												onClick: () => startEdit(story, "view"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `Edit ${story.title}`,
												title: "Edit",
												onClick: () => startEdit(story, "edit"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { size: 15 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `${story.publicationStatus === "Published" ? "Unpublish" : "Publish"} ${story.title}`,
												title: story.publicationStatus === "Published" ? "Unpublish" : story.verificationStatus === "Verified" && hasPublishingRequirements(story) ? "Publish" : "Complete references and verify before publishing",
												disabled: story.publicationStatus !== "Published" && (story.verificationStatus !== "Verified" || !hasPublishingRequirements(story)),
												onClick: () => togglePublication(story),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `Delete ${story.title}`,
												title: "Delete",
												onClick: () => deleteStory(story),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
											})
										]
									}) })
								] }, story.id)) })]
							}), visibleStories.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-empty",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 20 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No stories match these filters" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try different keywords or clear the filters." })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-table-footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Showing ",
								filteredStories.length ? (page - 1) * pageSize + 1 : 0,
								"–",
								Math.min(page * pageSize, filteredStories.length),
								" of ",
								filteredStories.length,
								" ",
								"demonstration stories"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: page === 1,
									onClick: () => setPage((current) => Math.max(1, current - 1)),
									children: "Previous"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Page ",
									page,
									" of ",
									pageCount
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: page >= pageCount,
									onClick: () => setPage((current) => Math.min(pageCount, current + 1)),
									children: "Next"
								})
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "history-storage-note",
					children: "Changes are held in page state for this preview only and are not permanently stored."
				})
			] })
		})
	});
}
var SplitComponent = HistoryManagementPage;
//#endregion
export { SplitComponent as component };
