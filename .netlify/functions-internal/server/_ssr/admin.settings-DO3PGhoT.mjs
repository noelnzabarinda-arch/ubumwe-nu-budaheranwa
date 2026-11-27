import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Save, o as Upload, tt as Check } from "../_libs/lucide-react.mjs";
import { n as AdminLayout } from "./dashboard-page-BJoqVRH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-DO3PGhoT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaults = {
	archiveName: "GSP Historical Archive",
	institutionName: "Groupe Scolaire des Parents, Huye",
	description: "A digital historical archive preserving GSP history.",
	contactEmail: "",
	language: "English",
	timeZone: "Africa/Kigali",
	theme: "Light",
	density: "Comfortable",
	publicVisibility: "Visible",
	workflow: "Draft then review",
	verification: "Required",
	mediaDisplay: "Standard",
	displayName: "Archive Admin",
	profileEmail: ""
};
function SettingsPage() {
	const [settings, setSettings] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return defaults;
		try {
			return {
				...defaults,
				...JSON.parse(localStorage.getItem("gsp-admin-settings") || "{}")
			};
		} catch {
			return defaults;
		}
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.adminDensity = settings.density.toLowerCase();
	}, [settings.density]);
	function update(key, value) {
		setSettings((current) => ({
			...current,
			[key]: value
		}));
	}
	function save(event) {
		event.preventDefault();
		localStorage.setItem("gsp-admin-settings", JSON.stringify(settings));
		setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {
		pageTitle: "Settings",
		activePage: "Settings",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: save,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-module-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Administration Settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Configure frontend preferences for this workspace." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "admin-primary-button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), " Save Preferences"]
					})]
				}),
				saved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-action-notice",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preferences saved locally in this browser." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-settings-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-settings-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "General Settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-form-grid",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "admin-full",
										children: ["Archive Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: settings.archiveName,
											onChange: (event) => update("archiveName", event.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "admin-full",
										children: ["Institution Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: settings.institutionName,
											onChange: (event) => update("institutionName", event.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "admin-full",
										children: ["Archive Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: settings.description,
											onChange: (event) => update("description", event.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Contact Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: settings.contactEmail,
										onChange: (event) => update("contactEmail", event.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Default Language", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.language,
										onChange: (event) => update("language", event.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "English" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Kinyarwanda" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "French" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Time Zone", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.timeZone,
										onChange: (event) => update("timeZone", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Africa/Kigali" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UTC" })]
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-settings-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Appearance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-form-grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Admin interface theme", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: settings.theme,
									onChange: (event) => update("theme", event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "System" })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Table density", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: settings.density,
									onChange: (event) => update("density", event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Comfortable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Compact" })]
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-settings-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Archive Configuration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-form-grid",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Public archive visibility", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.publicVisibility,
										onChange: (event) => update("publicVisibility", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Visible" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Hidden" })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Default publication workflow", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.workflow,
										onChange: (event) => update("workflow", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft then review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Direct publish" })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Default verification requirement", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.verification,
										onChange: (event) => update("verification", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Required" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Optional" })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Media display", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: settings.mediaDisplay,
										onChange: (event) => update("mediaDisplay", event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Standard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Compact" })]
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "admin-panel admin-settings-section",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Account Profile" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-profile-editor",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "admin-avatar admin-avatar-large",
										children: "GA"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "admin-secondary-button",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), " Profile Image"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-form-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Administrator Display Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: settings.displayName,
										onChange: (event) => update("displayName", event.target.value)
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email Address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: settings.profileEmail,
										onChange: (event) => update("profileEmail", event.target.value)
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "admin-settings-note",
									children: "Authentication and profile security require backend implementation. This interface only saves preferences in localStorage."
								})
							]
						})
					]
				})
			]
		})
	});
}
var SplitComponent = SettingsPage;
//#endregion
export { SplitComponent as component };
