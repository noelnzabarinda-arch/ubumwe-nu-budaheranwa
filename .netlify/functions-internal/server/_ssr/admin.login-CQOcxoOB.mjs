import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LockKeyhole, J as EyeOff, f as ShieldCheck, ft as ArrowLeft, q as Eye } from "../_libs/lucide-react.mjs";
import { t as AdminBrand } from "./brand-BvfPH3z4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.login-CQOcxoOB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLoginPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [remember, setRemember] = (0, import_react.useState)(false);
	const [passwordVisible, setPasswordVisible] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const submit = (event) => {
		event.preventDefault();
		setError("");
		setNotice("");
		if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setError("Enter a valid email address.");
			return;
		}
		if (!password) {
			setError("Enter your password to continue.");
			return;
		}
		setLoading(true);
		window.setTimeout(() => {
			setLoading(false);
			setError("Sign-in is not connected yet. Authentication requires a secure backend.");
		}, 550);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-login-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "admin-login-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBrand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "admin-return-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), " Return to public archive"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-login-main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-login-card",
					"aria-labelledby": "admin-login-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "admin-login-emblem",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {
								size: 21,
								strokeWidth: 1.6
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-login-eyebrow",
							children: "ARCHIVE ADMINISTRATION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: "admin-login-title",
							children: "Welcome back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "admin-login-intro",
							children: "Sign in to manage the GSP Historical Archive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "admin-login-form",
							onSubmit: submit,
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-email",
									children: "Email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoComplete: "username",
									id: "admin-email",
									name: "email",
									type: "email",
									placeholder: "name@example.com",
									value: email,
									onChange: (event) => {
										setEmail(event.target.value);
										setError("");
									},
									"aria-invalid": Boolean(error && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-password-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "admin-password",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "admin-forgot-link",
										onClick: () => {
											setError("");
											setNotice("Password recovery will be available when backend authentication is connected.");
										},
										children: "Forgot password?"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admin-password-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										autoComplete: "current-password",
										id: "admin-password",
										name: "password",
										type: passwordVisible ? "text" : "password",
										placeholder: "Enter your password",
										value: password,
										onChange: (event) => {
											setPassword(event.target.value);
											setError("");
										},
										"aria-invalid": Boolean(error && !password)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "admin-password-toggle",
										"aria-label": passwordVisible ? "Hide password" : "Show password",
										"aria-pressed": passwordVisible,
										onClick: () => setPasswordVisible(!passwordVisible),
										children: passwordVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 17 })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "admin-remember-option",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: remember,
										onChange: (event) => setRemember(event.target.checked)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remember me" })]
								}),
								(error || notice) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: error ? "admin-form-message admin-form-error" : "admin-form-message",
									role: "status",
									children: error || notice
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "admin-sign-in-button",
									disabled: loading,
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "admin-spinner",
										"aria-hidden": "true"
									}), " Checking…"] }) : "Sign in"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-login-security",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 17,
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Authentication is not yet configured. This interface does not verify credentials or protect admin routes." })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "admin-login-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GSP Historical Archive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preserving our shared heritage" })]
			})
		]
	});
}
var SplitComponent = AdminLoginPage;
//#endregion
export { SplitComponent as component };
