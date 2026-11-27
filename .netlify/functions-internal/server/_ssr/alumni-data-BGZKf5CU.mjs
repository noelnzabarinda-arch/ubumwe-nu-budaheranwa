//#region node_modules/.nitro/vite/services/ssr/assets/alumni-data-BGZKf5CU.js
var alumniProfiles = [{
	slug: "profile-verification-pending",
	name: "Alumni profile — identity awaiting verification",
	category: "awaiting-verification",
	graduationYear: null,
	servicePeriod: null,
	program: null,
	position: null,
	portrait: null,
	introduction: "This profile page demonstrates the archive format. It is not a record of a real person and contains no biographical information.",
	biography: [],
	achievements: [],
	contributions: [],
	verified: false
}];
var alumniStories = [];
function alumniYearLabel(profile) {
	if (!profile.verified) return "Information awaiting verification";
	if (profile.category === "former-student") return profile.graduationYear ? `Graduated ${profile.graduationYear}` : "Graduation year unverified";
	return profile.servicePeriod ?? "Service period awaiting verification";
}
function filterAlumni(items, query, category, graduationYear, program, order) {
	const term = query.trim().toLocaleLowerCase();
	return items.filter((profile) => {
		const matchesQuery = !term || `${profile.name} ${profile.program ?? ""} ${profile.position ?? ""}`.toLocaleLowerCase().includes(term);
		const matchesCategory = category === "all" || profile.category === "former-student" && category === "former-student" || profile.category === "former-staff" && category === "former-staff";
		const matchesYear = graduationYear === "all" || (graduationYear === "unverified" ? !profile.verified || profile.graduationYear === null : profile.graduationYear !== null && String(profile.graduationYear) === graduationYear);
		const matchesProgram = program === "all" || (program === "unverified" ? !profile.program : profile.program === program);
		return matchesQuery && matchesCategory && matchesYear && matchesProgram;
	}).sort((a, b) => {
		if (order === "alphabetical") return a.name.localeCompare(b.name);
		if (a.graduationYear === null) return b.graduationYear === null ? 0 : 1;
		if (b.graduationYear === null) return -1;
		return b.graduationYear - a.graduationYear;
	});
}
function getAlumniNeighbours(slug) {
	const verified = alumniProfiles.filter((profile) => profile.verified);
	const index = verified.findIndex((profile) => profile.slug === slug);
	return {
		exists: alumniProfiles.some((profile) => profile.slug === slug),
		previous: index > 0 ? verified[index - 1] : void 0,
		next: index >= 0 && index < verified.length - 1 ? verified[index + 1] : void 0,
		related: verified.filter((profile) => profile.slug !== slug).slice(0, 3)
	};
}
//#endregion
export { getAlumniNeighbours as a, filterAlumni as i, alumniStories as n, alumniYearLabel as r, alumniProfiles as t };
