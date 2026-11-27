import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { $ as ChevronLeft, G as FileImage, P as ImagePlus, Q as ChevronRight, c as Trash2, f as ShieldCheck, it as CalendarDays, lt as ArrowUp, m as Search, o as Upload, pt as ArrowDown, q as Eye, s as TriangleAlert, t as X, tt as Check, v as Plus } from "../_libs/lucide-react.mjs";
import { t as AdminDashboardPage } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.events-Ck7oKuPu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"School Foundation",
	"Historical Milestones",
	"School Development",
	"Educational Achievements",
	"Anniversaries",
	"Community Activities",
	"Institutional Activities",
	"Historical Remembrance"
];
var blankEvent = () => ({
	id: "",
	title: "",
	slug: "",
	shortDescription: "",
	description: "",
	category: "",
	datePeriod: "",
	location: "",
	locationVerified: false,
	organizer: "",
	organizerVerified: false,
	people: "",
	peoplePermission: false,
	significance: "",
	relatedStory: "",
	relatedTimeline: "",
	coverImage: "",
	images: [],
	sources: "",
	verificationNotes: "",
	verification: "Pending verification",
	publication: "Draft",
	documents: "",
	updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
	demo: false
});
var sampleEvents = [
	{
		...blankEvent(),
		id: "sample-foundation",
		title: "Demonstration record: School foundation topic",
		slug: "demonstration-school-foundation-topic",
		shortDescription: "Sample record only. No foundation event or date is asserted.",
		description: "This is a demonstration entry for the administration interface, not a historical account. Add a sourced event narrative only after records have been reviewed.",
		category: "School Foundation",
		verification: "Pending verification",
		updatedAt: "2026-11-25T10:00:00.000Z",
		demo: true
	},
	{
		...blankEvent(),
		id: "sample-community",
		title: "Demonstration record: Community activities topic",
		slug: "demonstration-community-activities-topic",
		shortDescription: "Sample record only. Details remain unconfirmed.",
		description: "This sample demonstrates a draft event entry. No event, location, participants, date, or outcome is being presented as fact.",
		category: "Community Activities",
		verification: "Needs correction",
		updatedAt: "2026-11-24T10:00:00.000Z",
		demo: true
	},
	{
		...blankEvent(),
		id: "sample-remembrance",
		title: "Demonstration record: Historical remembrance topic",
		slug: "demonstration-historical-remembrance-topic",
		shortDescription: "Sample placeholder only; no testimony or event details are included.",
		description: "This respectful placeholder is not an account of a specific event. Add remembrance content only with reliable historical references and appropriate permissions. Do not include graphic imagery or unverified personal details.",
		category: "Historical Remembrance",
		verification: "Pending verification",
		updatedAt: "2026-11-23T10:00:00.000Z",
		demo: true
	}
];
var pageSize = 6;
function getYear(datePeriod) {
	return datePeriod.match(/\b\d{3,4}\b/)?.[0] ?? "";
}
function formatUpdated(value) {
	return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));
}
function createSlug(value) {
	return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function StatusBadge({ children, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `events-status is-${kind}`,
		children
	});
}
function EventCover({ event }) {
	return event.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className: "events-cover-image",
		src: event.coverImage,
		alt: ""
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "events-cover-placeholder",
		"aria-label": "No event image supplied",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileImage, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No image" })]
	});
}
function EventPreview({ event }) {
	const sources = event.sources.split("\n").map((source) => source.trim()).filter(Boolean);
	const documents = event.documents.split("\n").map((item) => item.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "events-preview",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "events-preview-cover",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCover, { event }), event.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "events-preview-demo",
				children: "DEMONSTRATION ONLY"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "events-preview-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "events-preview-category",
					children: event.category || "Event category"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: event.title || "Event title preview" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "events-preview-date",
					children: event.datePeriod || "Date or period not confirmed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.shortDescription || "A short event description will appear here." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-preview-story",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Event story" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.description || "The full event story will appear here after it is added." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "events-preview-info",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.location && event.locationVerified ? event.location : "Not verified" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Organizer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.organizer && event.organizerVerified ? event.organizer : "Not verified" })] }),
						event.peoplePermission && event.people && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "People involved" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.people })] }),
						event.significance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Significance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: event.significance })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "events-preview-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Related photographs" }), event.images.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "events-preview-gallery",
						children: event.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image.src,
							alt: image.caption || "Event photograph preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: image.caption || "Caption not supplied" })] }, `${image.src}-${index}`))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No related photographs supplied." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "events-preview-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Related documents" }), documents.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: documents.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No related documents supplied." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "events-preview-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Historical references" }), sources.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: sources.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Historical references are not yet supplied." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "events-preview-video-note",
					children: "Related videos will be shown only after a real video source has been reviewed."
				})
			]
		})]
	});
}
function AdminEventsManagementPage() {
	const [events, setEvents] = (0, import_react.useState)(sampleEvents);
	const [query, setQuery] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("all");
	const [verificationFilter, setVerificationFilter] = (0, import_react.useState)("all");
	const [publicationFilter, setPublicationFilter] = (0, import_react.useState)("all");
	const [sortOrder, setSortOrder] = (0, import_react.useState)("newest");
	const [page, setPage] = (0, import_react.useState)(1);
	const [formEvent, setFormEvent] = (0, import_react.useState)(null);
	const [previewEvent, setPreviewEvent] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const formRef = (0, import_react.useRef)(null);
	const coverInputRef = (0, import_react.useRef)(null);
	const photosInputRef = (0, import_react.useRef)(null);
	const titleWasManuallyChanged = (0, import_react.useRef)(false);
	const filteredEvents = (0, import_react.useMemo)(() => {
		const term = query.trim().toLocaleLowerCase();
		return events.filter((event) => {
			const matchesQuery = !term || `${event.title} ${event.category} ${event.shortDescription}`.toLocaleLowerCase().includes(term);
			const matchesCategory = categoryFilter === "all" || event.category === categoryFilter;
			const matchesYear = yearFilter === "all" || (yearFilter === "undated" ? !getYear(event.datePeriod) : getYear(event.datePeriod) === yearFilter);
			const matchesVerification = verificationFilter === "all" || event.verification === verificationFilter;
			const matchesPublication = publicationFilter === "all" || event.publication === publicationFilter;
			return matchesQuery && matchesCategory && matchesYear && matchesVerification && matchesPublication;
		}).sort((a, b) => {
			if (sortOrder === "alphabetical") return a.title.localeCompare(b.title);
			const aYear = Number(getYear(a.datePeriod)) || 0;
			const bYear = Number(getYear(b.datePeriod)) || 0;
			if (aYear !== bYear) return sortOrder === "newest" ? bYear - aYear : aYear - bYear;
			return sortOrder === "newest" ? b.updatedAt.localeCompare(a.updatedAt) : a.updatedAt.localeCompare(b.updatedAt);
		});
	}, [
		categoryFilter,
		events,
		publicationFilter,
		query,
		sortOrder,
		verificationFilter,
		yearFilter
	]);
	const pageCount = Math.max(1, Math.ceil(filteredEvents.length / pageSize));
	const visibleEvents = filteredEvents.slice((page - 1) * pageSize, page * pageSize);
	const years = [...new Set(events.map((event) => getYear(event.datePeriod)).filter(Boolean))].sort((a, b) => Number(b) - Number(a));
	const counts = {
		total: events.length,
		published: events.filter((event) => event.publication === "Published").length,
		drafts: events.filter((event) => event.publication === "Draft").length,
		pending: events.filter((event) => event.verification === "Pending verification").length
	};
	const startNewEvent = () => {
		titleWasManuallyChanged.current = false;
		setFormEvent(blankEvent());
		setNotice("");
	};
	const startEdit = (event) => {
		titleWasManuallyChanged.current = true;
		setFormEvent({
			...event,
			images: event.images.map((image) => ({ ...image }))
		});
		setNotice("");
	};
	const updateForm = (updates) => {
		setFormEvent((current) => current ? {
			...current,
			...updates
		} : current);
	};
	const updateCover = (event) => {
		const file = event.target.files?.[0];
		if (!file || !formEvent) return;
		if (!file.type.startsWith("image/")) {
			setNotice("Choose an image file for the event cover.");
			event.target.value = "";
			return;
		}
		if (formEvent.coverImage.startsWith("blob:")) URL.revokeObjectURL(formEvent.coverImage);
		updateForm({ coverImage: URL.createObjectURL(file) });
	};
	const addPhotos = (event) => {
		const files = Array.from(event.target.files ?? []);
		const validFiles = files.filter((file) => file.type.startsWith("image/"));
		if (validFiles.length !== files.length) setNotice("Only image files can be added as photographs.");
		if (validFiles.length) updateForm({ images: [...formEvent?.images ?? [], ...validFiles.map((file) => ({
			src: URL.createObjectURL(file),
			caption: "",
			source: ""
		}))] });
		event.target.value = "";
	};
	const removePhoto = (index) => {
		if (!formEvent) return;
		const image = formEvent.images[index];
		if (image?.src.startsWith("blob:")) URL.revokeObjectURL(image.src);
		updateForm({ images: formEvent.images.filter((_, photoIndex) => photoIndex !== index) });
	};
	const saveEvent = (intent) => {
		if (!formEvent || !formRef.current?.reportValidity()) return;
		const sources = formEvent.sources.split("\n").map((source) => source.trim()).filter(Boolean);
		if (intent !== "draft" && !sources.length) {
			setNotice("Add at least one historical source or reference before submitting or publishing.");
			return;
		}
		if (intent === "publish" && formEvent.verification !== "Verified") {
			setNotice("Only verified events with historical references can be published.");
			return;
		}
		const nextEvent = {
			...formEvent,
			slug: formEvent.slug || createSlug(formEvent.title),
			people: formEvent.peoplePermission ? formEvent.people : "",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			publication: intent === "publish" ? "Published" : "Draft",
			verification: intent === "verification" ? "Pending verification" : formEvent.verification,
			demo: false
		};
		setEvents((current) => {
			return current.some((event) => event.id === nextEvent.id) ? current.map((event) => event.id === nextEvent.id ? nextEvent : event) : [{
				...nextEvent,
				id: crypto.randomUUID()
			}, ...current];
		});
		setPage(1);
		setNotice(`${intent === "verification" ? "Submitted for verification" : intent === "publish" ? "Published" : "Saved as draft"} in this browser session only. No permanent storage is connected.`);
		setFormEvent(null);
	};
	const deleteEvent = (event) => {
		if (!window.confirm(`Delete “${event.title}” from this browser session?`)) return;
		setEvents((current) => current.filter((item) => item.id !== event.id));
		if (previewEvent?.id === event.id) setPreviewEvent(null);
		setNotice("The demonstration record was removed from this browser session.");
	};
	const togglePublication = (event) => {
		if (event.publication === "Published") {
			setEvents((current) => current.map((item) => item.id === event.id ? {
				...item,
				publication: "Draft",
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : item));
			setNotice("Event unpublished and returned to draft.");
			return;
		}
		if (event.verification !== "Verified" || !event.sources.trim()) {
			setNotice("Verify the event and add historical references before publishing.");
			return;
		}
		setEvents((current) => current.map((item) => item.id === event.id ? {
			...item,
			publication: "Published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : item));
		setNotice("Event published in this browser session only.");
	};
	const clearFilters = () => {
		setQuery("");
		setCategoryFilter("all");
		setYearFilter("all");
		setVerificationFilter("all");
		setPublicationFilter("all");
		setSortOrder("newest");
		setPage(1);
	};
	const closeForm = () => {
		if (formEvent?.coverImage.startsWith("blob:")) URL.revokeObjectURL(formEvent.coverImage);
		formEvent?.images.forEach((image) => {
			if (image.src.startsWith("blob:")) URL.revokeObjectURL(image.src);
		});
		setFormEvent(null);
	};
	const formTitleChange = (value) => {
		if (!titleWasManuallyChanged.current && formEvent) updateForm({
			title: value,
			slug: createSlug(value)
		});
		else updateForm({ title: value });
	};
	const updateImage = (index, updates) => {
		if (!formEvent) return;
		updateForm({ images: formEvent.images.map((image, imageIndex) => imageIndex === index ? {
			...image,
			...updates
		} : image) });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminDashboardPage, {
		pageTitle: "Events Management",
		activePage: "Events Management",
		showGlobalSearch: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "events-admin-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "events-admin-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "events-admin-eyebrow",
							children: "ADMIN / EVENTS MANAGEMENT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Manage and preserve important events in GSP history." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maintain carefully sourced records. Sample entries below are interface demonstrations only." })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "events-primary-button",
						onClick: startNewEvent,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Add New Event"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-admin-notice",
					role: "note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Frontend demonstration only." }), " Sample records do not represent verified GSP history. Changes and image previews are held in this browser session, not permanently saved."] })]
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-action-notice",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Dismiss message",
						onClick: () => setNotice(""),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "events-stat-grid",
					"aria-label": "Event statistics",
					children: [
						{
							label: "Total Events",
							value: counts.total,
							icon: CalendarDays
						},
						{
							label: "Published Events",
							value: counts.published,
							icon: Check
						},
						{
							label: "Draft Events",
							value: counts.drafts,
							icon: FileImage
						},
						{
							label: "Pending Verification",
							value: counts.pending,
							icon: ShieldCheck
						}
					].map(({ label, value, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "events-stat-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "events-stat-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Demo data" })
						]
					}, label))
				}),
				formEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "events-form-panel",
					"aria-labelledby": "event-form-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "events-panel-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "events-admin-eyebrow",
							children: formEvent.id ? "EDIT RECORD" : "NEW RECORD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "event-form-title",
							children: formEvent.id ? "Edit event" : "Add a new event"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "events-icon-button",
							"aria-label": "Close event form",
							onClick: closeForm,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "events-editor-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							ref: formRef,
							className: "events-form",
							onSubmit: (event) => event.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Basic information" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										"Event title ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											value: formEvent.title,
											onChange: (event) => formTitleChange(event.target.value),
											placeholder: "Enter a source-supported event title"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["URL slug", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: formEvent.slug,
										onChange: (event) => {
											titleWasManuallyChanged.current = true;
											updateForm({ slug: createSlug(event.target.value) });
										},
										placeholder: "event-url-slug"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Short description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: formEvent.shortDescription,
										onChange: (event) => updateForm({ shortDescription: event.target.value }),
										placeholder: "A brief, factual summary"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Full event description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 5,
										value: formEvent.description,
										onChange: (event) => updateForm({ description: event.target.value }),
										placeholder: "Write only what reliable sources support"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
											"Event category ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: "*"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												required: true,
												value: formEvent.category,
												onChange: (event) => updateForm({ category: event.target.value }),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select a category"
												}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item,
													children: item
												}, item))]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Event date or historical period", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: formEvent.datePeriod,
											onChange: (event) => updateForm({ datePeriod: event.target.value }),
											placeholder: "Only enter a period supported by sources"
										})] })]
									}),
									formEvent.category === "Historical Remembrance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "events-remembrance-note",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 15 }), "Remembrance records require reliable references. Use dignified language; never add graphic imagery, unverified names, dates, quotations, or testimony."]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Event details" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Event location", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: formEvent.location,
											onChange: (event) => updateForm({ location: event.target.value }),
											placeholder: "Not shown publicly until verified"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Event organizer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: formEvent.organizer,
											onChange: (event) => updateForm({ organizer: event.target.value }),
											placeholder: "Only include a verified organizer"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-check-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "events-checkbox",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: formEvent.locationVerified,
												onChange: (event) => updateForm({ locationVerified: event.target.checked })
											}), "Location has been verified"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "events-checkbox",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: formEvent.organizerVerified,
												onChange: (event) => updateForm({ organizerVerified: event.target.checked })
											}), "Organizer has been verified"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "events-checkbox events-permission-check",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: formEvent.peoplePermission,
											onChange: (event) => updateForm({
												peoplePermission: event.target.checked,
												people: event.target.checked ? formEvent.people : ""
											})
										}), "I have appropriate permission to include people’s names"]
									}),
									formEvent.peoplePermission && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["People involved (permission confirmed)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: formEvent.people,
										onChange: (event) => updateForm({ people: event.target.value }),
										placeholder: "Use only verified information with permission"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Event significance", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: formEvent.significance,
										onChange: (event) => updateForm({ significance: event.target.value }),
										placeholder: "Describe significance supported by historical evidence"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Related historical story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: formEvent.relatedStory,
											onChange: (event) => updateForm({ relatedStory: event.target.value })
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Related timeline event", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: formEvent.relatedTimeline,
											onChange: (event) => updateForm({ relatedTimeline: event.target.value })
										})] })]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Media" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-upload-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "events-upload-preview",
											children: formEvent.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: formEvent.coverImage,
												alt: "Event cover preview"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 22 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Event cover image" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use an authentic event image only when its source is known." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: coverInputRef,
												className: "events-file-input",
												type: "file",
												accept: "image/*",
												onChange: updateCover,
												"aria-label": "Upload event cover image"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "events-secondary-button",
												onClick: () => coverInputRef.current?.click(),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 14 }), " Upload cover"]
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-upload-row events-additional-upload",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Additional photographs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Attach captions and image sources or credits to every image." })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: photosInputRef,
												className: "events-file-input",
												type: "file",
												accept: "image/*",
												multiple: true,
												onChange: addPhotos,
												"aria-label": "Upload additional photographs"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "events-secondary-button",
												onClick: () => photosInputRef.current?.click(),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add photographs"]
											})
										]
									}),
									formEvent.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-photo-editor",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: image.src,
												alt: `Additional photograph ${index + 1} preview`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Image caption", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: image.caption,
												onChange: (event) => updateImage(index, { caption: event.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Image source / credit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: image.source,
												onChange: (event) => updateImage(index, { source: event.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "events-icon-button is-danger",
												"aria-label": `Remove photograph ${index + 1}`,
												onClick: () => removePhoto(index),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
											})
										]
									}, `${image.src}-${index}`)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Related documents (one title per line)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: formEvent.documents,
										onChange: (event) => updateForm({ documents: event.target.value }),
										placeholder: "Add reviewed document titles or references"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "events-video-note",
										children: "Related videos are not available in this frontend preview. Add them only after a real, valid video source has been reviewed."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Verification and publication" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										"Historical sources and references ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "*"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 4,
											value: formEvent.sources,
											onChange: (event) => updateForm({ sources: event.target.value }),
											placeholder: "Add reliable references, one per line. Required for verification and publication."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Verification notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: formEvent.verificationNotes,
										onChange: (event) => updateForm({ verificationNotes: event.target.value })
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Verification status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formEvent.verification,
											onChange: (event) => updateForm({ verification: event.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending verification" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs correction" })
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Publication status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formEvent.publication,
											onChange: (event) => updateForm({ publication: event.target.value }),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
										})] })]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "events-form-actions",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "events-secondary-button",
											onClick: () => saveEvent("draft"),
											children: "Save as Draft"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "events-secondary-button",
											onClick: () => saveEvent("verification"),
											children: "Submit for Verification"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "events-primary-button",
											onClick: () => saveEvent("publish"),
											children: "Publish"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "events-cancel-button",
											onClick: closeForm,
											children: "Cancel"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "events-live-preview",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "events-live-preview-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Public page preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Preview only · not published" })] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPreview, { event: formEvent })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "events-list-panel",
					"aria-label": "Manage event records",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "events-list-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Event records" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sample records are clearly identified and make no historical claims." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "events-demo-tag",
								children: "DEMO DATA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "events-filter-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "events-search",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Search events by title",
										placeholder: "Search event titles...",
										value: query,
										onChange: (event) => {
											setQuery(event.target.value);
											setPage(1);
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Filter by category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by category",
									value: categoryFilter,
									onChange: (event) => {
										setCategoryFilter(event.target.value);
										setPage(1);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All categories"
									}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Filter by historical year"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by historical year",
									value: yearFilter,
									onChange: (event) => {
										setYearFilter(event.target.value);
										setPage(1);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All years"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "undated",
											children: "Period unconfirmed"
										}),
										years.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: year }, year))
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Filter by verification status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by verification status",
									value: verificationFilter,
									onChange: (event) => {
										setVerificationFilter(event.target.value);
										setPage(1);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All verification"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pending verification" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Verified" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Needs correction" })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Filter by publication status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by publication status",
									value: publicationFilter,
									onChange: (event) => {
										setPublicationFilter(event.target.value);
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
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Sort event records"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Sort event records",
									value: sortOrder,
									onChange: (event) => {
										setSortOrder(event.target.value);
										setPage(1);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "newest",
											children: "Newest to oldest"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "oldest",
											children: "Oldest to newest"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "alphabetical",
											children: "Alphabetical"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "events-clear-button",
									onClick: clearFilters,
									children: "Clear filters"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "events-table-scroll",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "events-table",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Event title"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Date / period"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Location"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Verification"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Publication"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Last updated"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Actions"
									})
								] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [visibleEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCover, { event }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "events-title-cell",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: event.title }), event.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Demonstration record · not historical evidence" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.category || "Uncategorized" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.datePeriod || "Unconfirmed" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.location && event.locationVerified && event.verification === "Verified" ? event.location : "Not verified" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										kind: event.verification === "Verified" ? "verified" : event.verification === "Needs correction" ? "correction" : "pending",
										children: event.verification
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										kind: event.publication === "Published" ? "published" : "draft",
										children: event.publication
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: formatUpdated(event.updatedAt) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-row-actions",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `View ${event.title}`,
												title: "View",
												onClick: () => setPreviewEvent(event),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `Edit ${event.title}`,
												title: "Edit",
												onClick: () => startEdit(event),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "events-action-edit",
													children: "Edit"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `${event.publication === "Published" ? "Unpublish" : "Publish"} ${event.title}`,
												title: event.publication === "Published" ? "Unpublish" : "Publish",
												onClick: () => togglePublication(event),
												children: event.publication === "Published" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 15 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 15 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "is-danger",
												"aria-label": `Delete ${event.title}`,
												title: "Delete",
												onClick: () => deleteEvent(event),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
											})
										]
									}) })
								] }, event.id)), !visibleEvents.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 9,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "events-empty-state",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 21 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No matching events" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Adjust your search or filters to see records." })
										]
									})
								}) })] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "events-table-footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Showing ",
								filteredEvents.length ? (page - 1) * pageSize + 1 : 0,
								"–",
								Math.min(page * pageSize, filteredEvents.length),
								" of ",
								filteredEvents.length,
								" records"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous page",
									disabled: page <= 1,
									onClick: () => setPage((current) => Math.max(1, current - 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 15 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Page ",
									page,
									" of ",
									pageCount
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next page",
									disabled: page >= pageCount,
									onClick: () => setPage((current) => Math.min(pageCount, current + 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 15 })
								})
							] })]
						})
					]
				})
			]
		}), previewEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "events-modal-backdrop",
			role: "presentation",
			onMouseDown: (event) => {
				if (event.target === event.currentTarget) setPreviewEvent(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "events-preview-modal",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "events-preview-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "events-modal-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "events-admin-eyebrow",
						children: "EVENT DETAIL PREVIEW"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "events-preview-title",
						children: "Public Events page preview"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "events-icon-button",
						"aria-label": "Close preview",
						onClick: () => setPreviewEvent(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPreview, { event: previewEvent })]
			})
		})]
	});
}
var SplitComponent = AdminEventsManagementPage;
//#endregion
export { SplitComponent as component };
