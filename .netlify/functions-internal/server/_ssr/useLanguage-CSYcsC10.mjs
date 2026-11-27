import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useLanguage-CSYcsC10.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var LanguageContext = (0, import_react.createContext)(null);
function useLanguage() {
	const context = (0, import_react.useContext)(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within LanguageProvider");
	return context;
}
//#endregion
export { useLanguage as n, LanguageContext as t };
