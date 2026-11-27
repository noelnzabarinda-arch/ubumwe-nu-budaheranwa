import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowRight, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as leaders, n as getLeaderNeighbours } from "./leadership-data-_gPLGaIT.mjs";
import { t as Route } from "./leadership._slug-C9bo2xlH.mjs";
import { a as LeaderNavigation, c as LeadershipSources, l as LeadershipTimeline, o as LeaderProfileHeader, s as LeadershipContributions, t as BiographySection, u as RelatedEvents } from "./leadership-CqUYXjVX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership._slug-Ds9UGk8j.js
var import_jsx_runtime = require_jsx_runtime();
function LeaderDetails() {
	const { slug } = Route.useParams();
	const leader = leaders.find((item) => item.slug === slug);
	const neighbours = getLeaderNeighbours(slug);
	if (!leader || !neighbours.exists) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container placeholder-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "GSP HISTORICAL ARCHIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Leader profile not found" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This profile is not part of the leadership archive." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/leadership",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Leadership History"]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container leader-detail-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfileHeader, { leader }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leader-detail-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leader-verification-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "RECORD STATUS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is a profile placeholder. The leader’s identity, appointment, service period, and biography are awaiting verification and are not presented as established facts." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiographySection, { leader }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadershipContributions, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadershipTimeline, { leader }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedEvents, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadershipSources, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderNavigation, {
						previous: neighbours.previous,
						next: neighbours.next,
						related: neighbours.related
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "leader-return-nav",
				"aria-label": "Profile navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "editorial",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/leadership",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " Back to Leadership History"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/timeline",
					className: "text-link",
					children: ["Explore Historical Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			})
		]
	});
}
//#endregion
export { LeaderDetails as component };
