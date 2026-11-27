import { K as FileBadge, T as Mail, W as FileText, h as ScrollText, i as UsersRound, ot as BookOpen, x as Newspaper } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-data-C1252Jv1.js
var documentCategories = [
	{
		slug: "historical-records",
		name: "Historical Records",
		description: "Institutional records that document GSP’s story and development.",
		icon: ScrollText
	},
	{
		slug: "school-reports",
		name: "Old School Reports",
		description: "Reports and reviews preserved with their dates and provenance verified.",
		icon: BookOpen
	},
	{
		slug: "certificates-records",
		name: "Certificates & Official Records",
		description: "Official materials shared only with appropriate permission and access.",
		icon: FileBadge
	},
	{
		slug: "historical-letters",
		name: "Historical Letters",
		description: "Correspondence considered for the archive with care for privacy and context.",
		icon: Mail
	},
	{
		slug: "meeting-records",
		name: "Meeting Records",
		description: "Minutes and related records, subject to access and privacy review.",
		icon: UsersRound
	},
	{
		slug: "publications",
		name: "Publications & Newsletters",
		description: "Published materials and newsletters with ownership and source information.",
		icon: Newspaper
	},
	{
		slug: "research-testimonies",
		name: "Research & Testimonies",
		description: "Research and community testimony presented with transparent sourcing.",
		icon: FileText
	}
];
var documentRecords = [];
function filterDocuments(records, filters) {
	const query = filters.query.trim().toLocaleLowerCase();
	return records.filter((record) => record.access === "public" && (!query || `${record.title} ${record.description} ${record.type} ${record.source ?? ""}`.toLocaleLowerCase().includes(query)) && (filters.category === "all" || record.category === filters.category) && (filters.year === "all" || (filters.year === "undated" ? record.year === null : record.year === Number(filters.year))) && (filters.type === "all" || record.type === filters.type)).sort((a, b) => {
		if (a.year === null) return b.year === null ? 0 : 1;
		if (b.year === null) return -1;
		return filters.order === "newest" ? b.year - a.year : a.year - b.year;
	});
}
//#endregion
export { documentRecords as n, filterDocuments as r, documentCategories as t };
