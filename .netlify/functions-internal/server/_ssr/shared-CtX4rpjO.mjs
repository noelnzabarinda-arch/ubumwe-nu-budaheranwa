import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as HandHeart, dt as ArrowRight, gt as Archive, ut as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { n as useLanguage } from "./useLanguage-CSYcsC10.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shared-CtX4rpjO.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eyebrow",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), eyebrow]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })] }), children]
	});
}
function StoryCard({ story, full = false }) {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/our-history/$slug",
		params: { slug: story.slug },
		className: "story-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: archiveImages[story.image],
						alt: "GSP school history or historical document",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "image-note",
						children: t("archiveCollection")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "story-image-arrow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-meta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: story.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("periodUnconfirmed") })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: story.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: story.description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-link",
				children: [
					full ? t("readFullStory") : t("readStory"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
				]
			})
		]
	});
}
function Contribution() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "contribution",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container contribution-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "contribution-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, {
						size: 34,
						strokeWidth: 1.2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: t("everyMemoryMatters")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("sharedHistoryTitle") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("sharedHistoryText") })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "heritage",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: "contribute" },
						children: [
							t("contributeArchive"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
						]
					})
				})
			]
		})
	});
}
function SampleNotice() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "sample-notice",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("sampleNotice") })]
	});
}
//#endregion
export { StoryCard as i, SampleNotice as n, SectionHeading as r, Contribution as t };
