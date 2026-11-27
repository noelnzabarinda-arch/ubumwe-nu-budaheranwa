//#region node_modules/.nitro/vite/services/ssr/assets/leadership-data-_gPLGaIT.js
var leaders = [{
	slug: "current-leadership",
	name: "Current Headmaster",
	title: "Headmaster",
	status: "current",
	portrait: "/images/staff/headmaster.jpg",
	startYear: null,
	endYear: null,
	introduction: "This portrait represents GSP's current headmaster. Their name and service dates have not been provided.",
	biography: [],
	verified: false
}, ...[
	"pexels-gustavo-fring-7156144.jpg",
	"pexels-rdne-8419197.jpg",
	"pexels-yankrukov-8199151.jpg",
	"pexels-yankrukov-8199166.jpg"
].map((filename, index) => ({
	slug: `former-leader-${index + 1}`,
	name: `Former Leader ${index + 1}`,
	title: "Former school leader",
	status: "former",
	portrait: `/images/staff/${filename}`,
	startYear: null,
	endYear: null,
	introduction: "This portrait is included as a former GSP leader. Their name and service dates have not been provided.",
	biography: [],
	verified: false
}))];
function leaderPeriodLabel(leader) {
	if (!leader.verified || leader.startYear === null) return "Service dates not provided";
	if (leader.endYear === null) return `${leader.startYear} – Present`;
	if (leader.startYear === leader.endYear) return String(leader.startYear);
	return `${leader.startYear} – ${leader.endYear}`;
}
function filterLeaders(items, query, status, period, order) {
	const term = query.trim().toLocaleLowerCase();
	return items.filter((leader) => {
		const matchesQuery = !term || `${leader.name} ${leader.title}`.toLocaleLowerCase().includes(term);
		const matchesStatus = status === "all" || leader.status === status;
		const matchesPeriod = period === "all" || (period === "unverified" ? !leader.verified || leader.startYear === null : leader.startYear !== null && String(leader.startYear) === period);
		return matchesQuery && matchesStatus && matchesPeriod;
	}).sort((a, b) => {
		if (a.startYear === null) return b.startYear === null ? 0 : 1;
		if (b.startYear === null) return -1;
		return order === "newest" ? b.startYear - a.startYear : a.startYear - b.startYear;
	});
}
function getLeaderNeighbours(slug) {
	const index = leaders.findIndex((leader) => leader.slug === slug);
	const verifiedLeaders = leaders.filter((leader) => leader.verified);
	const verifiedIndex = verifiedLeaders.findIndex((leader) => leader.slug === slug);
	return {
		previous: verifiedIndex > 0 ? verifiedLeaders[verifiedIndex - 1] : void 0,
		next: verifiedIndex >= 0 && verifiedIndex < verifiedLeaders.length - 1 ? verifiedLeaders[verifiedIndex + 1] : void 0,
		related: verifiedLeaders.filter((leader) => leader.slug !== slug).slice(0, 3),
		exists: index >= 0
	};
}
//#endregion
export { leaders as i, getLeaderNeighbours as n, leaderPeriodLabel as r, filterLeaders as t };
