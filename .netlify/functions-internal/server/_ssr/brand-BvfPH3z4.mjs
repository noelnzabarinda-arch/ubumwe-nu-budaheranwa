import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-BvfPH3z4.js
var import_jsx_runtime = require_jsx_runtime();
function AdminBrand({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `admin-brand${compact ? " admin-brand-compact" : ""}`,
		"aria-label": "GSP Historical Archive home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "GSP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Historical Archive" })] })]
	});
}
//#endregion
export { AdminBrand as t };
