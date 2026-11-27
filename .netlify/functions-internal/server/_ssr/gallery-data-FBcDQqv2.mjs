import { t as archiveImages } from "./images-B-wAPziI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-data-FBcDQqv2.js
var galleryCategories = [
	{
		slug: "school-history",
		title: "School History",
		description: "Photographs documenting GSP's buildings, learning spaces, and development.",
		related: [
			"students-school-life",
			"historical-documents",
			"events-celebrations"
		],
		coverImage: archiveImages.schoolCourtyard
	},
	{
		slug: "students-school-life",
		title: "Students & School Life",
		description: "Everyday moments and shared experiences from the GSP student community.",
		related: [
			"school-history",
			"teachers-staff",
			"alumni-reunions"
		],
		coverImage: "/images/student/pexels-andy-barbour-6683885.jpg"
	},
	{
		slug: "teachers-staff",
		title: "Teachers & Staff",
		description: "A place for verified records of the people who taught and served at GSP.",
		related: [
			"students-school-life",
			"former-leaders",
			"school-history"
		]
	},
	{
		slug: "former-leaders",
		title: "Former Leaders",
		description: "Documented portraits and records of GSP's former institutional leaders.",
		related: [
			"teachers-staff",
			"school-history",
			"historical-documents"
		]
	},
	{
		slug: "events-celebrations",
		title: "Events & Celebrations",
		description: "School gatherings and milestones, dated and described when verified.",
		related: [
			"students-school-life",
			"school-history",
			"alumni-reunions"
		]
	},
	{
		slug: "remembrance-memorial",
		title: "Remembrance & Memorial",
		description: "A respectful space for carefully verified memorial records and remembrance.",
		related: [
			"historical-documents",
			"former-leaders",
			"alumni-reunions"
		]
	},
	{
		slug: "alumni-reunions",
		title: "Alumni & Reunions",
		description: "Shared alumni memories and reunion records, published with permission.",
		related: [
			"students-school-life",
			"events-celebrations",
			"teachers-staff"
		]
	},
	{
		slug: "historical-documents",
		title: "Historical Documents",
		description: "Photographs of records and materials whose provenance can be established.",
		related: [
			"school-history",
			"former-leaders",
			"remembrance-memorial"
		]
	},
	{
		slug: "videos-documentaries",
		title: "Videos & Documentaries",
		description: "Moving-image records and documentaries supplied to the archive.",
		related: [
			"events-celebrations",
			"alumni-reunions",
			"school-history"
		]
	}
];
var studentIllustrations = [
	"/images/student/pexels-andy-barbour-6683885.jpg",
	"/images/student/pexels-andy-barbour-6684067.jpg",
	"/images/student/pexels-cottonbro-6209589.jpg",
	"/images/student/pexels-max-fischer-5211472.jpg",
	"/images/student/pexels-rdne-8419209.jpg",
	"/images/student/pexels-saeed-chembea-1063286943-32719717.jpg",
	"/images/student/pexels-tosin-olowoleni-2148141635-34211747.jpg",
	"/images/student/pexels-yankrukov-8197510.jpg"
];
var galleryMedia = [];
function filterGalleryMedia(items, query, year, type, order) {
	const term = query.trim().toLocaleLowerCase();
	return items.filter((item) => item.verified && (!term || `${item.title} ${item.description} ${item.caption} ${item.categorySlug}`.toLocaleLowerCase().includes(term)) && (year === "all" || (year === "unconfirmed" ? item.year === null : item.year === Number(year))) && (type === "all" || item.type === type)).sort((a, b) => {
		const aYear = a.year ?? (order === "newest" ? -Infinity : Infinity);
		const bYear = b.year ?? (order === "newest" ? -Infinity : Infinity);
		return order === "newest" ? bYear - aYear : aYear - bYear;
	});
}
function getVerifiedCategoryMedia(categorySlug) {
	return galleryMedia.filter((item) => item.categorySlug === categorySlug && item.verified);
}
//#endregion
export { studentIllustrations as a, getVerifiedCategoryMedia as i, galleryCategories as n, galleryMedia as r, filterGalleryMedia as t };
