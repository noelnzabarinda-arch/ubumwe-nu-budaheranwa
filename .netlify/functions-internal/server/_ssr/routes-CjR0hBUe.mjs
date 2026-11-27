import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { a as stories } from "./archive-data-8EPjNiyy.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Landmark, S as MoveDown, W as FileText, dt as ArrowRight, f as ShieldCheck, it as CalendarDays, ot as BookOpen, r as Users, ut as ArrowUpRight, y as Play } from "../_libs/lucide-react.mjs";
import { t as archiveImages } from "./images-B-wAPziI.mjs";
import { n as useLanguage } from "./useLanguage-CSYcsC10.mjs";
import { i as StoryCard, n as SampleNotice, r as SectionHeading, t as Contribution } from "./shared-CtX4rpjO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CjR0hBUe.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { t } = useLanguage();
	const collections = [
		{
			title: t("schoolHistoryTitle"),
			text: t("schoolHistoryText"),
			icon: BookOpen,
			slug: "history"
		},
		{
			title: t("leadershipTitle"),
			text: t("leadershipText"),
			icon: Landmark,
			slug: "leadership"
		},
		{
			title: t("alumniTitle"),
			text: t("alumniText"),
			icon: Users,
			slug: "alumni"
		},
		{
			title: t("documentsTitle"),
			text: t("documentsText"),
			icon: FileText,
			slug: "documents"
		},
		{
			title: t("eventsTitle"),
			text: t("eventsText"),
			icon: CalendarDays,
			slug: "events"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "hero-image",
					src: archiveImages.hero,
					alt: "School history building",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), t("preservingHeritage")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							t("heroTitleLine1"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("heroTitleLine2"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("heroTitleEmphasis") })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							t("heroDescription1"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "desktop-break" }),
							" ",
							t("heroDescription2"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "desktop-break" }),
							" ",
							t("heroDescription3")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "heritage",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/our-history",
									children: [
										t("exploreOurHistory"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "inverse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about-archive",
									children: [
										t("discoverArchive"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
									]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-bottom container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinLabel, {}),
							" ",
							t("huyeRwanda")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-image-caption",
							children: t("schoolHistoryCollection")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#introduction",
							"aria-label": t("scrollToIntroduction"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveDown, { size: 16 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hero-side",
					children: t("sharedHeritageLastingRecord")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "heritage-strip",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GROUPE SCOLAIRE DES PARENTS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "strip-diamond",
						children: "◆"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("heritagePast") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "strip-est",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }),
							" ",
							t("heritageMemory")
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "introduction",
			className: "container introduction section-space",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: archiveImages.schoolCourtyard,
						alt: "School campus and courtyard",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "photo-caption",
						children: "School history · Campus view"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-corner-mark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 25,
							strokeWidth: 1
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), t("welcomeDigitalArchive")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						t("introTitle1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("introTitleEmphasis") })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("introText1") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("introText2") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "text-link",
						to: "/about-archive",
						children: [
							t("archivePurposeLink"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-footnote",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("preservingIntegrity") })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "featured-section section-space",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: t("storiesEyebrow"),
						title: t("storiesTitle"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "text-link",
							to: "/our-history",
							children: [
								t("viewAllStories"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "story-grid",
						children: stories.slice(0, 3).map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story }, story.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleNotice, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container timeline-section section-space",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("journeyEyebrow"),
					title: t("journeyTitle"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "text-link",
						to: "/archive/$collection",
						params: { collection: "timeline" },
						children: [
							t("exploreFullTimeline"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "timeline-grid",
					children: [
						{
							n: "01",
							title: t("beginningTitle"),
							text: t("beginningText")
						},
						{
							n: "02",
							title: t("growingTitle"),
							text: t("growingText")
						},
						{
							n: "03",
							title: t("continuingTitle"),
							text: t("continuingText")
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "timeline-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "timeline-label",
								children: t("periodToBeVerified")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "timeline-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "timeline-number",
								children: item.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
						]
					}, item.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "quiet-note",
					children: t("datesVerifiedNote")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "collections-section section-space",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("collectionsEyebrow"),
					title: t("collectionsTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "collection-grid",
					children: collections.map(({ icon: Icon, ...item }) => item.slug === "history" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history",
						className: "collection-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 25,
								strokeWidth: 1.3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
						]
					}, item.slug) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: item.slug },
						className: "collection-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 25,
								strokeWidth: 1.3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 17 })
						]
					}, item.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container media-section section-space",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "media-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), t("windowEyebrow")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("memoriesTitle") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("memoriesText") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/archive/$collection",
						params: { collection: "gallery" },
						className: "text-link",
						children: [
							t("exploreGallery"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "media-placeholder",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: archiveImages.museumHall,
						alt: "Museum collection hall",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "media-overlay",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "play-outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									size: 22,
									strokeWidth: 1.2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("movingMemories") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("videoForthcoming") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "image-note",
						children: t("museumCollection")
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contribution, {})
	] });
}
function MapPinLabel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "location-dot" });
}
//#endregion
export { Home as component };
