import { a as stories } from "./archive-data-8EPjNiyy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-data-CrM1oIMm.js
var timelineCategories = [
	"Foundation and Establishment",
	"School Development",
	"Educational Milestones",
	"Leadership Changes",
	"Historical Challenges",
	"Historical Milestones",
	"Remembrance and Resilience",
	"Community and Institutional Growth"
];
var timelineEntries = stories.map((story) => ({
	slug: story.slug,
	title: story.title,
	category: story.category === "Educational Journey" ? "Educational Milestones" : story.category === "Community and School Life" ? "Community and Institutional Growth" : story.category,
	description: story.description,
	year: null,
	verified: false,
	storySlug: story.slug
}));
function filterTimeline(entries, query, category, order) {
	const term = query.trim().toLocaleLowerCase();
	return entries.filter((entry) => (category === "all" || entry.category === category) && (!term || `${entry.year ?? ""} ${entry.title} ${entry.description} ${entry.category}`.toLocaleLowerCase().includes(term))).sort((a, b) => {
		if (a.year === null) return b.year === null ? 0 : 1;
		if (b.year === null) return -1;
		return order === "newest" ? b.year - a.year : a.year - b.year;
	});
}
function storyNeighbours(slug) {
	const index = stories.findIndex((story) => story.slug === slug);
	return {
		previous: index > 0 ? stories[index - 1] : void 0,
		next: index >= 0 ? stories[index + 1] : void 0,
		related: stories.filter((story) => story.slug !== slug).slice(0, 3)
	};
}
//#endregion
export { timelineEntries as i, storyNeighbours as n, timelineCategories as r, filterTimeline as t };
