import { a as stories } from "./archive-data-8EPjNiyy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-data-CJ-uNyqA.js
var eventCategories = [
	{
		slug: "foundation-and-establishment",
		title: "Foundation and Establishment",
		description: "A place for verified records about the school’s beginnings."
	},
	{
		slug: "historical-milestones",
		title: "Historical Milestones",
		description: "Documented moments that help explain GSP’s changing story."
	},
	{
		slug: "genocide-remembrance",
		title: "Genocide Against the Tutsi Remembrance",
		description: "A respectful space for carefully sourced remembrance and learning."
	},
	{
		slug: "school-development",
		title: "School Development",
		description: "Records of the school’s development, when reliable sources are available."
	},
	{
		slug: "educational-achievements",
		title: "Educational Achievements",
		description: "Verified records of educational work and achievement at GSP."
	},
	{
		slug: "anniversaries-and-celebrations",
		title: "Anniversaries and Celebrations",
		description: "A future home for documented anniversaries and school celebrations."
	},
	{
		slug: "community-activities",
		title: "Community Activities",
		description: "Records reflecting the wider GSP community, once documented."
	},
	{
		slug: "institutional-activities",
		title: "Institutional Activities",
		description: "A place for verified records of institutional life and activity."
	}
];
var categoryForStory = {
	"the-beginning": "foundation-and-establishment",
	"a-place-to-grow": "school-development",
	"shared-school-life": "community-activities",
	"educational-journey": "educational-achievements",
	"historical-milestones": "historical-milestones",
	"remembrance-and-resilience": "genocide-remembrance"
};
var eventRecords = stories.flatMap((story) => {
	const category = eventCategories.find((item) => item.slug === categoryForStory[story.slug]);
	if (!category) return [];
	return [{
		slug: story.slug,
		title: story.title,
		category,
		description: story.description,
		year: null,
		verified: false,
		kind: "topic-preview"
	}];
});
function filterEventRecords(records, query, category, year, order) {
	const term = query.trim().toLocaleLowerCase();
	return records.filter((record) => (!term || `${record.title} ${record.description} ${record.category.title} ${record.year ?? ""}`.toLocaleLowerCase().includes(term)) && (category === "all" || record.category.slug === category) && (year === "all" || (year === "undated" ? record.year === null : record.year?.toString() === year))).sort((a, b) => {
		if (a.year === null) return b.year === null ? 0 : 1;
		if (b.year === null) return -1;
		return order === "newest" ? b.year - a.year : a.year - b.year;
	});
}
function eventNeighbours(slug) {
	const index = eventRecords.findIndex((record) => record.slug === slug);
	return {
		previous: index > 0 ? eventRecords[index - 1] : void 0,
		next: index >= 0 ? eventRecords[index + 1] : void 0
	};
}
//#endregion
export { filterEventRecords as i, eventNeighbours as n, eventRecords as r, eventCategories as t };
