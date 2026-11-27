import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-B2IzzTDQ.mjs";
import { t as archiveHead } from "./archive-data-8EPjNiyy.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$24 } from "../_collection-7AIn39fl.mjs";
import { C as Menu, I as Heart, dt as ArrowRight, et as ChevronDown, t as X, ut as ArrowUpRight, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as Route$25 } from "./alumni._slug-ChjWlmY6.mjs";
import { t as Route$26 } from "./events._slug-DMaUBNQR.mjs";
import { t as Route$27 } from "./events.index-CzLaSDB1.mjs";
import { t as Route$28 } from "./gallery._categorySlug-D_CSN-Za.mjs";
import { n as useLanguage, t as LanguageContext } from "./useLanguage-CSYcsC10.mjs";
import { t as Route$29 } from "./leadership._slug-C9bo2xlH.mjs";
import { t as Route$30 } from "./our-history._slug-8juz9Rh0.mjs";
import { n as Route$31, t as GlobalSearchButton } from "./search-Csfr9hFs.mjs";
import { t as Route$32 } from "./timeline.index-BffR9_SB.mjs";
import { t as Route$33 } from "./timeline._year-D1NCOwTu.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BEHvY6HX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B0zBXELt.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var archiveStructuredData = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "WebSite",
		name: "GSP Historical Archive",
		alternateName: "Groupe Scolaire des Parents Historical Archive",
		publisher: {
			"@type": "Organization",
			name: "Groupe Scolaire des Parents",
			logo: {
				"@type": "ImageObject",
				url: "/logo.png"
			}
		}
	}]
};
var languageNames = {
	en: "English",
	rw: "Kinyarwanda",
	fr: "Français"
};
var translations = {
	en: {
		skipToContent: "Skip to content",
		openNavigation: "Open navigation",
		closeNavigation: "Close navigation",
		openSearch: "Open search",
		closeSearch: "Close search",
		search: "Search",
		searchPlaceholder: "Search the GSP Historical Archive...",
		clearSearch: "Clear search",
		language: "Language",
		home: "Home",
		ourHistory: "Our History",
		timeline: "Timeline",
		leadership: "Leadership",
		importantEvents: "Important Events",
		alumni: "Alumni",
		gallery: "Gallery",
		documents: "Documents",
		aboutArchive: "About Archive",
		searchResults: "Search Results",
		searchFor: "Results for",
		noResultsTitle: "No archive records found",
		noResultsText: "No verified or collection-preview content matches this search.",
		tryAnother: "Try another keyword",
		categories: "Archive categories",
		footerTagline: "A shared heritage. A lasting record.",
		footerDescription: "Preserving GSP’s story for generations to come.",
		exploreArchive: "Explore the archive",
		keepStoryAlive: "Keep our story alive",
		historicalTimeline: "Historical Timeline",
		alumniHistory: "Alumni History",
		photoGallery: "Photo Gallery",
		contributeMemory: "Contribute a memory",
		contributionNote: "Contact details will be added when verified.",
		footerRights: "GSP Historical Archive. All rights reserved.",
		footerPurpose: "Preserved with care. Shared with purpose.",
		historicalStories: "Historical Stories",
		timelineEvents: "Timeline Events",
		leaders: "Former and Current Leaders",
		teachersStaff: "Teachers and Staff",
		galleryCollections: "Gallery Collections",
		historicalDocuments: "Historical Documents",
		viewRecord: "View record",
		resultCount: "results",
		searchHint: "Press Enter to search",
		contentType: "Content type",
		allContentTypes: "All content types",
		year: "Year",
		allYears: "All years",
		noConfirmedYears: "No confirmed years",
		sortBy: "Sort by",
		relevance: "Relevance",
		newestFirst: "Newest first",
		clearFilters: "Clear filters",
		matchingRecords: "matching records",
		matchingRecord: "matching record",
		enterKeyword: "Enter a keyword to search the archive",
		searchPageTitle: "Search the Archive",
		searchPageDescription: "Find a story, person, event, or record in the archive.",
		resultsFor: "Results for",
		noMatchingRecords: "No matching archive records were found.",
		noMatchHelp: "Try another keyword or clear the filters. Archive records are shown only when they exist in the current collection.",
		beginSearch: "What would you like to discover?",
		beginSearchHelp: "Search historical stories, timeline previews, leadership records, and important events.",
		noMatchingRecordsEyebrow: "No matching records",
		beginSearchEyebrow: "Begin your search",
		exploreCollection: "Explore a collection",
		searchHistorySuggestion: "Our History",
		searchTimelineSuggestion: "Timeline",
		searchLeadershipSuggestion: "Leadership",
		searchEventsSuggestion: "Important Events",
		searchAlumniSuggestion: "Alumni",
		searchGallerySuggestion: "Gallery",
		searchDocumentsSuggestion: "Documents",
		searchArchiveAccessible: "Search the archive",
		searchResultFilters: "Search result filters",
		filterContentType: "Filter by content type",
		filterYear: "Filter by year",
		sortSearchResults: "Sort search results",
		readRecord: "Read record",
		matchingRecordsShown: "shown after filters",
		breadcrumb: "Breadcrumb",
		searchKeyboardHint: "Press Ctrl + K to open search",
		returnToArchive: "Return to the archive",
		originalLanguageFallback: "Historical content appears in its available source language.",
		pageNotFound: "This Page Could Not Be Found",
		notFoundDescription: "The page may have moved, or the address may not be part of the archive. Let’s help you find your way back.",
		returnHome: "Return Home",
		preservingHeritage: "PRESERVING OUR HERITAGE",
		heroTitleLine1: "The Story of GSP,",
		heroTitleLine2: "Preserved for",
		heroTitleEmphasis: "Generations.",
		heroDescription1: "A school’s history is more than a collection of dates.",
		heroDescription2: "It is the people, the memories, and the journey we share.",
		heroDescription3: "Welcome to the GSP Historical Archive.",
		exploreOurHistory: "Explore Our History",
		discoverArchive: "Discover the Archive",
		huyeRwanda: "HUYE, RWANDA",
		schoolHistoryCollection: "School history collection",
		scrollToIntroduction: "Scroll to archive introduction",
		sharedHeritageLastingRecord: "A SHARED HERITAGE. A LASTING RECORD.",
		heritagePast: "Honouring our past. Connecting our generations.",
		heritageMemory: "Rooted in memory. Guided by truth.",
		welcomeDigitalArchive: "WELCOME TO OUR DIGITAL ARCHIVE",
		introTitle1: "Some stories deserve",
		introTitleEmphasis: "to be remembered.",
		introText1: "Every school leaves a mark. At Groupe Scolaire des Parents, that story belongs to the students, educators, families, and community who have been part of its journey.",
		introText2: "This archive is a home for that shared memory — a place to collect, safeguard, and share the verified history of GSP, in Huye, Rwanda.",
		archivePurposeLink: "The purpose behind the archive",
		preservingIntegrity: "Preserving with care. Documenting with integrity.",
		storiesEyebrow: "STORIES FROM THE ARCHIVE",
		storiesTitle: "A history made of many stories.",
		viewAllStories: "View all stories",
		journeyEyebrow: "OUR JOURNEY THROUGH TIME",
		journeyTitle: "Looking back. Moving forward.",
		exploreFullTimeline: "Explore Full Timeline",
		periodToBeVerified: "PERIOD TO BE VERIFIED",
		beginningTitle: "Our beginnings",
		beginningText: "The foundation of a shared vision.",
		growingTitle: "Growing together",
		growingText: "The development of our school community.",
		continuingTitle: "A continuing journey",
		continuingText: "Preserving our heritage for those to come.",
		datesVerifiedNote: "Dates and milestones will be added after historical verification.",
		collectionsEyebrow: "EXPLORE THE COLLECTIONS",
		collectionsTitle: "Many windows into our past.",
		schoolHistoryTitle: "School History",
		schoolHistoryText: "The roots of our shared journey.",
		leadershipTitle: "Leadership",
		leadershipText: "The people who helped guide GSP.",
		alumniTitle: "Alumni",
		alumniText: "A community beyond the classroom.",
		documentsTitle: "Historical Documents",
		documentsText: "The records that hold our history.",
		eventsTitle: "Important Events",
		eventsText: "Moments to be remembered.",
		windowEyebrow: "A WINDOW INTO THE ARCHIVE",
		memoriesTitle: "Memories, in focus.",
		memoriesText: "Photographs and moving images can bring a shared past closer. This space is reserved for verified visual records of GSP.",
		exploreGallery: "Explore the gallery",
		movingMemories: "A space for our moving memories.",
		videoForthcoming: "Video collection forthcoming · No video available yet",
		museumCollection: "MUSEUM COLLECTION",
		everyMemoryMatters: "EVERY MEMORY MATTERS",
		sharedHistoryTitle: "Our history is a story we share.",
		sharedHistoryText: "Have a photograph, document, or memory of GSP? Help preserve it for the next generation.",
		contributeArchive: "Contribute to the Archive",
		archiveCollection: "ARCHIVE COLLECTION",
		periodUnconfirmed: "Period unconfirmed",
		readStory: "Read Story",
		readFullStory: "Read Full Story",
		sampleNotice: "Collection previews only. Verified historical information will appear here. Supplied archive images are presented for visual context.",
		pageDidNotLoad: "This page didn't load",
		unexpectedError: "Something went wrong on our end. You can try refreshing or head back home.",
		tryAgain: "Try again",
		goHome: "Go home"
	},
	rw: {
		skipToContent: "Simbukira ku birimo",
		openNavigation: "Fungura urubuga",
		closeNavigation: "Funga urubuga",
		openSearch: "Fungura ubushakashatsi",
		closeSearch: "Funga ubushakashatsi",
		search: "Shakisha",
		searchPlaceholder: "Shakisha mu Bubiko bwa GSP...",
		clearSearch: "Siba ijambo ry'ubushakashatsi",
		language: "Ururimi",
		home: "Ahabanza",
		ourHistory: "Amateka Yacu",
		timeline: "Ibihe by'Amateka",
		leadership: "Ubuyobozi",
		importantEvents: "Ibikorwa by'Ingenzi",
		alumni: "Abanyeshuri Bahize",
		gallery: "Amafoto n'Amashusho",
		documents: "Inyandiko",
		aboutArchive: "Ibyerekeye Ububiko",
		searchResults: "Ibisubizo by'Ubushakashatsi",
		searchFor: "Ibisubizo kuri",
		noResultsTitle: "Nta nyandiko z'ububiko zabonetse",
		noResultsText: "Nta mateka yemejwe cyangwa ibirebana n'ububiko bihuye n'ubushakashatsi.",
		tryAnother: "Gerageza irindi jambo",
		categories: "Ibyiciro by'ububiko",
		footerTagline: "Umurage dusangiye. Igitabo gihoraho.",
		footerDescription: "Turinda amateka ya GSP kugira ngo azagerereho ibisekuruza.",
		exploreArchive: "Shakisha ububiko",
		keepStoryAlive: "Tugume ku mateka yacu",
		historicalTimeline: "Ibihe by'Amateka",
		alumniHistory: "Amateka y'Abanyeshuri Bahize",
		photoGallery: "Amafoto",
		contributeMemory: "Tanga ububiko bw'icyibutso",
		contributionNote: "Amakuru y'itumanaho azongerwaho amaze kugenzurwa.",
		footerRights: "GSP Historical Archive. Uburenganzira bwose bwubahirijwe.",
		footerPurpose: "Bikozwe neza. Bisangirwa n'intumbero.",
		historicalStories: "Inkuru z'Amateka",
		timelineEvents: "Ibihe by'Amateka",
		leaders: "Abayobozi Baheze n'Ab'iki Gihe",
		teachersStaff: "Abarimu n'Abakozi",
		galleryCollections: "Ibyegeranyo by'Amafoto",
		historicalDocuments: "Inyandiko z'Amateka",
		viewRecord: "Reba inyandiko",
		resultCount: "ibisubizo",
		searchHint: "Kanda Enter ushakishe",
		contentType: "Ubwoko bw'ibiri mu bubiko",
		allContentTypes: "Ubwoko bwose",
		year: "Umwaka",
		allYears: "Imyaka yose",
		noConfirmedYears: "Nta myaka yemejwe",
		sortBy: "Tondeka uko",
		relevance: "Ibijyanye n'ijambo",
		newestFirst: "Ibishya mbere",
		clearFilters: "Kuraho amatoranya",
		matchingRecords: "inyandiko zihuye",
		matchingRecord: "inyandiko ihuye",
		enterKeyword: "Andika ijambo ushaka mu bubiko",
		searchPageTitle: "Shakisha mu Bubiko",
		searchPageDescription: "Shakisha inkuru, umuntu, igikorwa cyangwa inyandiko mu bubiko.",
		resultsFor: "Ibisubizo kuri",
		noMatchingRecords: "Nta nyandiko z'ububiko zihuye zabonetse.",
		noMatchHelp: "Gerageza irindi jambo cyangwa ukureho amatoranya. Herekanwa gusa inyandiko zibitse muri iki cyiciro.",
		beginSearch: "Ni iki wifuza kumenya?",
		beginSearchHelp: "Shakisha inkuru z'amateka, ibihe, abayobozi n'ibikorwa by'ingenzi.",
		noMatchingRecordsEyebrow: "Nta nyandiko zihuye",
		beginSearchEyebrow: "Tangira gushakisha",
		exploreCollection: "Shakisha icyegeranyo",
		searchHistorySuggestion: "Amateka Yacu",
		searchTimelineSuggestion: "Ibihe by'Amateka",
		searchLeadershipSuggestion: "Ubuyobozi",
		searchEventsSuggestion: "Ibikorwa by'Ingenzi",
		searchAlumniSuggestion: "Abanyeshuri Bahize",
		searchGallerySuggestion: "Amafoto n'Amashusho",
		searchDocumentsSuggestion: "Inyandiko",
		searchArchiveAccessible: "Shakisha mu bubiko",
		searchResultFilters: "Amatoranya y'ibisubizo",
		filterContentType: "Tandukanya ukurikije ubwoko",
		filterYear: "Tandukanya ukurikije umwaka",
		sortSearchResults: "Tondeka ibisubizo",
		readRecord: "Soma inyandiko",
		matchingRecordsShown: "bigaragara nyuma y'amatoranya",
		breadcrumb: "Aho uri",
		searchKeyboardHint: "Kanda Ctrl + K ufungure ubushakashatsi",
		returnToArchive: "Subira mu bubiko",
		originalLanguageFallback: "Amateka agaragazwa mu rurimi abitsweho.",
		pageNotFound: "Iyi paji ntiyabonetse",
		notFoundDescription: "Iyi paji ishobora kuba yarimuwe cyangwa aderesi yayo itari mu bubiko. Reka tugufashe gusubira inyuma.",
		returnHome: "Subira Ahabanza",
		preservingHeritage: "TURINDA UMURAGE WACU",
		heroTitleLine1: "Inkuru ya GSP,",
		heroTitleLine2: "Bikozwe kugira",
		heroTitleEmphasis: "Ibyiciro bizaza.",
		heroDescription1: "Amateka y’ishuri arenze urutonde rw’amatariki.",
		heroDescription2: "Ni abantu, ububiko bw’ibyo twibuka n’urugendo dusangiye.",
		heroDescription3: "Murakaza neza mu Bubiko bw’Amateka bwa GSP.",
		exploreOurHistory: "Shakisha Amateka Yacu",
		discoverArchive: "Menya Ububiko",
		huyeRwanda: "HUYE, RWANDA",
		schoolHistoryCollection: "Icyegeranyo cy’amateka y’ishuri",
		scrollToIntroduction: "Manuka ujye ku ntangiriro y’ububiko",
		sharedHeritageLastingRecord: "UMURAGE DUSANGIYE. IGITABO GIHORAHO.",
		heritagePast: "Tugira icyubahiro amateka yacu. Tuhuza ibisekuruza.",
		heritageMemory: "Tuganje mu muco. Tuyobowe n’ukuri.",
		welcomeDigitalArchive: "MURAKAZA MU BUBIKO BW’AMATEKA BWIJIMBO",
		introTitle1: "Hari inkuru zikwiye",
		introTitleEmphasis: "kwibukwa.",
		introText1: "Buri shuri isiga uruhare. Ku Ishuri Ryisumbuye des Parents, iyo nkuru ni iy’abanyeshuri, abarimu, imiryango n’abaturage bagize urugendo rwayo.",
		introText2: "Ubu bubiko ni urwuri rw’iyo ntego dusangiye — ahantu ho gukusanya, kurinda no gusangiza amateka ya GSP yemejwe, i Huye mu Rwanda.",
		archivePurposeLink: "Impamvu y’ububiko",
		preservingIntegrity: "Turinda dufitanye umutima. Turandika mu budahemuka.",
		storiesEyebrow: "INKURU ZIVA MU BUBIKO",
		storiesTitle: "Amateka akozwe mu nkuru nyinshi.",
		viewAllStories: "Reba inkuru zose",
		journeyEyebrow: "URUGENDO RWACU MU BIHE",
		journeyTitle: "Dusubire inyuma. Tugende imbere.",
		exploreFullTimeline: "Shakisha Ibihe byose",
		periodToBeVerified: "IGIHE CY’AMATEKA NTICYAKWEMERWA",
		beginningTitle: "Intangiriro yacu",
		beginningText: "Urufatiro rw’icyerekezo dusangiye.",
		growingTitle: "Tukura hamwe",
		growingText: "Iterambere ry’umuryango w’ishuri ryacu.",
		continuingTitle: "Urugendo rurakomeza",
		continuingText: "Turinda umurage wacu ku bazaza.",
		datesVerifiedNote: "Amatariki n’ibirango bizongerwaho nyuma yo kugenzura amateka.",
		collectionsEyebrow: "SHAKISHA IBYEGERANYO",
		collectionsTitle: "Amadirishya menshi y’amateka yacu.",
		schoolHistoryTitle: "Amateka y’ishuri",
		schoolHistoryText: "Imizi y’urugendo dusangiye.",
		leadershipTitle: "Ubuyobozi",
		leadershipText: "Abafashije kuyobora GSP.",
		alumniTitle: "Abanyeshuri bahize",
		alumniText: "Umuryango urenze icyumba cy’ishuri.",
		documentsTitle: "Inyandiko z’Amateka",
		documentsText: "Inyandiko zibika amateka yacu.",
		eventsTitle: "Ibikorwa by’ingenzi",
		eventsText: "Ibihe bikwiye kwibukwa.",
		windowEyebrow: "IDIRISHYA MU BUBIKO",
		memoriesTitle: "Ibyibutso, bigaragara neza.",
		memoriesText: "Amafoto n’amashusho ashobora kwegereza amateka dusangiye. Uyu mwanya urinzwe inyandiko zemejwe z’ibyerekana GSP.",
		exploreGallery: "Shakisha amafoto",
		movingMemories: "Aho twakumira ibyibutso byacu.",
		videoForthcoming: "Icyegeranyo cy’amashusho kirateganywa · Nta mashusho ahari",
		museumCollection: "ICYEGERANYO CY’IKIGO CY’UBUHANZI",
		everyMemoryMatters: "BURI CYIBUTSO GIFITE AGACIRO",
		sharedHistoryTitle: "Amateka yacu ni inkuru dusangira.",
		sharedHistoryText: "Ufite ifoto, inyandiko cyangwa icyibutso cya GSP? Dufashe kubisigasira ibisekuruza bizaza.",
		contributeArchive: "Tanga ku Bubiko",
		archiveCollection: "ICYEGERANYO CY’UBUBIKO",
		periodUnconfirmed: "Igihe nticyemejwe",
		readStory: "Soma Inkuru",
		readFullStory: "Soma Inkuru Yose",
		sampleNotice: "Ibyerekanwa gusa. Amateka yemejwe azagaragazwa hano. Amafoto atanzwe agaragaza gusa ibirimo.",
		pageDidNotLoad: "Iyi paji ntiyabonetse",
		unexpectedError: "Habaye ikibazo. Gerageza kongera gufungura cyangwa subira ahabanza.",
		tryAgain: "Gerageza",
		goHome: "Subira Ahabanza"
	},
	fr: {
		skipToContent: "Aller au contenu",
		openNavigation: "Ouvrir la navigation",
		closeNavigation: "Fermer la navigation",
		openSearch: "Ouvrir la recherche",
		closeSearch: "Fermer la recherche",
		search: "Rechercher",
		searchPlaceholder: "Rechercher dans les archives historiques du GSP...",
		clearSearch: "Effacer la recherche",
		language: "Langue",
		home: "Accueil",
		ourHistory: "Notre Histoire",
		timeline: "Chronologie",
		leadership: "Direction",
		importantEvents: "Événements Importants",
		alumni: "Anciens Élèves",
		gallery: "Galerie",
		documents: "Documents",
		aboutArchive: "À Propos des Archives",
		searchResults: "Résultats de recherche",
		searchFor: "Résultats pour",
		noResultsTitle: "Aucune archive trouvée",
		noResultsText: "Aucun contenu vérifié ou aperçu de collection ne correspond à cette recherche.",
		tryAnother: "Essayez un autre mot-clé",
		categories: "Catégories des archives",
		footerTagline: "Un patrimoine partagé. Une mémoire durable.",
		footerDescription: "Préserver l’histoire du GSP pour les générations futures.",
		exploreArchive: "Explorer les archives",
		keepStoryAlive: "Faisons vivre notre histoire",
		historicalTimeline: "Chronologie historique",
		alumniHistory: "Histoire des anciens élèves",
		photoGallery: "Galerie photos",
		contributeMemory: "Partager un souvenir",
		contributionNote: "Les coordonnées seront ajoutées après vérification.",
		footerRights: "GSP Historical Archive. Tous droits réservés.",
		footerPurpose: "Préservé avec soin. Partagé avec raison.",
		historicalStories: "Histoires historiques",
		timelineEvents: "Événements chronologiques",
		leaders: "Anciens dirigeants et direction actuelle",
		teachersStaff: "Enseignants et personnel",
		galleryCollections: "Collections photographiques",
		historicalDocuments: "Documents historiques",
		viewRecord: "Voir la notice",
		resultCount: "résultats",
		searchHint: "Appuyez sur Entrée pour rechercher",
		contentType: "Type de contenu",
		allContentTypes: "Tous les types",
		year: "Année",
		allYears: "Toutes les années",
		noConfirmedYears: "Aucune année confirmée",
		sortBy: "Trier par",
		relevance: "Pertinence",
		newestFirst: "Plus récent d'abord",
		clearFilters: "Effacer les filtres",
		matchingRecords: "résultats correspondants",
		matchingRecord: "résultat correspondant",
		enterKeyword: "Saisissez un mot-clé pour rechercher dans les archives",
		searchPageTitle: "Rechercher dans les archives",
		searchPageDescription: "Trouvez une histoire, une personne, un événement ou une notice.",
		resultsFor: "Résultats pour",
		noMatchingRecords: "Aucune notice d'archive correspondante.",
		noMatchHelp: "Essayez un autre mot-clé ou effacez les filtres. Seules les notices présentes dans la collection sont affichées.",
		beginSearch: "Que souhaitez-vous découvrir ?",
		beginSearchHelp: "Recherchez des récits, des chronologies, des dirigeants et des événements.",
		noMatchingRecordsEyebrow: "Aucun résultat correspondant",
		beginSearchEyebrow: "Commencez votre recherche",
		exploreCollection: "Explorer une collection",
		searchHistorySuggestion: "Notre Histoire",
		searchTimelineSuggestion: "Chronologie",
		searchLeadershipSuggestion: "Direction",
		searchEventsSuggestion: "Événements Importants",
		searchAlumniSuggestion: "Anciens Élèves",
		searchGallerySuggestion: "Galerie",
		searchDocumentsSuggestion: "Documents",
		searchArchiveAccessible: "Rechercher dans les archives",
		searchResultFilters: "Filtres des résultats",
		filterContentType: "Filtrer par type de contenu",
		filterYear: "Filtrer par année",
		sortSearchResults: "Trier les résultats",
		readRecord: "Consulter la notice",
		matchingRecordsShown: "affichés après les filtres",
		breadcrumb: "Fil d’Ariane",
		searchKeyboardHint: "Appuyez sur Ctrl + K pour ouvrir la recherche",
		returnToArchive: "Retour aux archives",
		originalLanguageFallback: "Le contenu historique est affiché dans sa langue source disponible.",
		pageNotFound: "Cette page est introuvable",
		notFoundDescription: "Cette page a peut-être été déplacée ou son adresse ne fait pas partie des archives. Retrouvons ensemble votre chemin.",
		returnHome: "Retour à l’accueil",
		preservingHeritage: "PRÉSERVER NOTRE PATRIMOINE",
		heroTitleLine1: "L’histoire du GSP,",
		heroTitleLine2: "Préservée pour",
		heroTitleEmphasis: "Les générations.",
		heroDescription1: "L’histoire d’une école dépasse une simple liste de dates.",
		heroDescription2: "Ce sont les personnes, les souvenirs et le parcours que nous partageons.",
		heroDescription3: "Bienvenue aux archives historiques du GSP.",
		exploreOurHistory: "Explorer notre histoire",
		discoverArchive: "Découvrir les archives",
		huyeRwanda: "HUYE, RWANDA",
		schoolHistoryCollection: "Collection historique de l’école",
		scrollToIntroduction: "Faire défiler vers la présentation",
		sharedHeritageLastingRecord: "UN PATRIMOINE PARTAGÉ. UNE MÉMOIRE DURABLE.",
		heritagePast: "Honorer notre passé. Relier nos générations.",
		heritageMemory: "Ancrés dans la mémoire. Guidés par la vérité.",
		welcomeDigitalArchive: "BIENVENUE À NOS ARCHIVES NUMÉRIQUES",
		introTitle1: "Certaines histoires méritent",
		introTitleEmphasis: "d’être rappelées.",
		introText1: "Chaque école laisse une empreinte. Au Groupe Scolaire des Parents, cette histoire appartient aux élèves, enseignants, familles et communautés qui ont participé à son parcours.",
		introText2: "Ces archives abritent cette mémoire commune — un lieu pour recueillir, protéger et partager l’histoire vérifiée du GSP, à Huye au Rwanda.",
		archivePurposeLink: "La raison d’être des archives",
		preservingIntegrity: "Préserver avec soin. Documenter avec intégrité.",
		storiesEyebrow: "HISTOIRES DES ARCHIVES",
		storiesTitle: "Une histoire faite de nombreux récits.",
		viewAllStories: "Voir toutes les histoires",
		journeyEyebrow: "NOTRE PARCOURS À TRAVERS LE TEMPS",
		journeyTitle: "Regarder derrière. Avancer ensemble.",
		exploreFullTimeline: "Explorer toute la chronologie",
		periodToBeVerified: "PÉRIODE À VÉRIFIER",
		beginningTitle: "Nos débuts",
		beginningText: "Les fondations d’une vision commune.",
		growingTitle: "Grandir ensemble",
		growingText: "Le développement de notre communauté scolaire.",
		continuingTitle: "Un parcours qui continue",
		continuingText: "Préserver notre patrimoine pour ceux qui suivront.",
		datesVerifiedNote: "Les dates et jalons seront ajoutés après vérification historique.",
		collectionsEyebrow: "EXPLORER LES COLLECTIONS",
		collectionsTitle: "Plusieurs fenêtres sur notre passé.",
		schoolHistoryTitle: "Histoire de l’école",
		schoolHistoryText: "Les racines de notre parcours commun.",
		leadershipTitle: "Direction",
		leadershipText: "Les personnes qui ont guidé le GSP.",
		alumniTitle: "Anciens élèves",
		alumniText: "Une communauté au-delà de la classe.",
		documentsTitle: "Documents historiques",
		documentsText: "Les archives qui racontent notre histoire.",
		eventsTitle: "Événements importants",
		eventsText: "Des moments à retenir.",
		windowEyebrow: "UNE FENÊTRE SUR LES ARCHIVES",
		memoriesTitle: "Les souvenirs, en lumière.",
		memoriesText: "Photographies et images animées rapprochent un passé partagé. Cet espace est réservé aux documents visuels vérifiés du GSP.",
		exploreGallery: "Explorer la galerie",
		movingMemories: "Un espace pour nos souvenirs animés.",
		videoForthcoming: "Collection vidéo à venir · aucune vidéo disponible",
		museumCollection: "COLLECTION DU MUSÉE",
		everyMemoryMatters: "CHAQUE SOUVENIR COMPTE",
		sharedHistoryTitle: "Notre histoire est un récit partagé.",
		sharedHistoryText: "Vous avez une photographie, un document ou un souvenir du GSP ? Aidez-nous à le préserver pour la prochaine génération.",
		contributeArchive: "Contribuer aux archives",
		archiveCollection: "COLLECTION DES ARCHIVES",
		periodUnconfirmed: "Période non confirmée",
		readStory: "Lire l’histoire",
		readFullStory: "Lire l’histoire complète",
		sampleNotice: "Aperçus de collection uniquement. Les informations historiques vérifiées apparaîtront ici. Les images sont présentées à titre contextuel.",
		pageDidNotLoad: "Cette page n’a pas pu charger",
		unexpectedError: "Une erreur est survenue. Vous pouvez actualiser la page ou revenir à l’accueil.",
		tryAgain: "Réessayer",
		goHome: "Retour à l’accueil"
	}
};
var nav = [
	{
		key: "timeline",
		to: "/timeline"
	},
	{
		key: "leadership",
		to: "/leadership"
	},
	{
		key: "importantEvents",
		to: "/events"
	},
	{
		key: "alumni",
		to: "/alumni"
	},
	{
		key: "gallery",
		to: "/gallery"
	},
	{
		key: "documents",
		to: "/documents"
	},
	{
		key: "aboutArchive",
		to: "/about-archive"
	}
];
function Wordmark() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "wordmark",
		"aria-label": `GSP Historical Archive ${t("home")}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "brand-logo",
			src: "/logo.png",
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["GSP ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Historical Archive" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "GROUPE SCOLAIRE DES PARENTS" })] })]
	});
}
function ArchiveHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [languageOpen, setLanguageOpen] = (0, import_react.useState)(false);
	const { language, setLanguage, t } = useLanguage();
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const chooseLanguage = (next) => {
		setLanguage(next);
		setLanguageOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#main-content",
			children: t("skipToContent")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "site-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Main navigation",
						className: "main-nav",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								activeOptions: { exact: true },
								activeProps: { className: "active" },
								children: t("home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/our-history",
								activeProps: { className: "active" },
								children: t("ourHistory")
							}),
							nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeProps: { className: "active" },
								children: t(item.key)
							}, item.key))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSearchButton, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "language-switcher",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "language-button",
									"aria-haspopup": "listbox",
									"aria-expanded": languageOpen,
									onClick: () => setLanguageOpen(!languageOpen),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language.toUpperCase() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 13 })]
								}), languageOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "language-menu",
									role: "listbox",
									"aria-label": t("language"),
									children: [
										"en",
										"rw",
										"fr"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "option",
										"aria-selected": language === item,
										onClick: () => chooseLanguage(item),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.toUpperCase() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: languageNames[item] })]
									}, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mobile-menu",
								variant: "ghost",
								size: "icon",
								"aria-label": open ? t("closeNavigation") : t("openNavigation"),
								"aria-expanded": open,
								onClick: () => setOpen(!open),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						]
					})
				]
			})
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mobile-nav-backdrop",
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mobile-nav-drawer",
				"aria-label": "Mobile navigation",
				onClick: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-drawer-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("categories") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": t("closeNavigation"),
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						activeOptions: { exact: true },
						onClick: () => setOpen(false),
						children: t("home")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-history",
						onClick: () => setOpen(false),
						children: t("ourHistory")
					}),
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						children: t(item.key)
					}, item.key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-language",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("language") }), [
							"en",
							"rw",
							"fr"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: language === item ? "active" : "",
							onClick: () => chooseLanguage(item),
							children: [
								item.toUpperCase(),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: languageNames[item] })
							]
						}, item))]
					})
				]
			})
		})
	] });
}
function ArchiveFooter() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container footer-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t("footerTagline"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t("footerDescription")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "location",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }), " Huye, Rwanda"]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t("exploreArchive").toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/our-history",
							children: t("ourHistory")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/timeline",
							children: t("historicalTimeline")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/alumni",
							children: t("alumniHistory")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							children: t("photoGallery")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t("keepStoryAlive").toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about-archive",
							children: t("aboutArchive")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/archive/$collection",
							params: { collection: "contribute" },
							children: [
								t("contributeMemory"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "footer-note",
							children: t("contributionNote")
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container footer-bottom",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				t("footerRights")
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				t("footerPurpose"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 11 })
			] })]
		})]
	});
}
var wordTranslations = {
	en: {},
	rw: {
		the: "ih",
		a: "imwe",
		an: "imwe",
		and: "na",
		or: "cyangwa",
		of: "by'",
		to: "kuri",
		for: "kugira",
		from: "uva",
		with: "hamwe na",
		in: "mu",
		at: "i",
		our: "byacu",
		your: "byawe",
		we: "twebwe",
		they: "bo",
		is: "ni",
		are: "ni",
		was: "yari",
		were: "wari",
		has: "ifite",
		have: "bifite",
		be: "kuba",
		been: "byabaye",
		will: "bizaba",
		can: "ishobora",
		not: "ntabwo",
		no: "oya",
		all: "byose",
		only: "gusa",
		more: "birenze",
		after: "nyuma ya",
		before: "imbere ya",
		every: "buri",
		history: "amateka",
		historical: "by'amateka",
		story: "inkuru",
		stories: "inkuru",
		school: "ishuri",
		archive: "ububiko",
		archives: "ububiko",
		record: "inyandiko",
		records: "inyandiko",
		collection: "icyegeranyo",
		collections: "ibyegeranyo",
		document: "inyandiko",
		documents: "inyandiko",
		search: "shakisha",
		view: "reba",
		read: "soma",
		explore: "shakisha",
		home: "ahabanza",
		page: "paji",
		about: "ibyerekeye",
		people: "abantu",
		memory: "icyibutso",
		memories: "ibyo twibuka",
		community: "umuryango",
		shared: "dusangiye",
		past: "amateka",
		present: "iki gihe",
		future: "ejo hazaza",
		generations: "ibisekuruza",
		year: "umwaka",
		years: "imyaka",
		date: "itariki",
		dates: "amatariki",
		name: "izina",
		title: "umutwe",
		description: "ibasobanuro",
		verified: "yemejwe",
		verification: "igenzura",
		unconfirmed: "nticyemejwe",
		available: "ihari",
		unavailable: "ntihari",
		public: "rusange",
		private: "bwite",
		internal: "imbere",
		restricted: "iburenganzira",
		clear: "kuraho",
		reset: "gusubizaho",
		filters: "amatoranya",
		category: "icyiciro",
		categories: "ibyiciro",
		period: "igihe",
		newest: "bishya",
		oldest: "bishaje",
		relevance: "ubusabane",
		next: "ikurikira",
		previous: "ibibanziriza",
		back: "inyuma",
		continue: "komeza",
		close: "funga",
		open: "fungura",
		language: "ururimi",
		english: "Icyongereza",
		french: "Igifaransa",
		kinyarwanda: "Ikinyarwanda",
		leadership: "ubuyobozi",
		leader: "umuyobozi",
		alumni: "abanyeshuri bahize",
		events: "ibikorwa",
		event: "igikorwa",
		important: "by'ingenzi",
		gallery: "amafoto",
		photo: "ifoto",
		photos: "amafoto",
		video: "amashusho",
		media: "ibitangira",
		welcome: "murakaza neza",
		preserving: "kurinda",
		heritage: "umurage",
		preserve: "gusigasira",
		care: "ubwitondo",
		true: "ukuri",
		truth: "ukuri",
		purpose: "intumbero",
		contact: "itumanaho",
		details: "amakuru",
		contribute: "utange",
		contribution: "umusanzu",
		featured: "bishyizwe mbere",
		click: "kanda",
		enter: "injiza",
		loading: "biratunganywa",
		error: "ikosa",
		success: "byagenze neza"
	},
	fr: {
		the: "le",
		a: "un",
		an: "un",
		and: "et",
		or: "ou",
		of: "de",
		to: "à",
		for: "pour",
		from: "de",
		with: "avec",
		in: "dans",
		at: "à",
		our: "notre",
		your: "votre",
		we: "nous",
		they: "ils",
		is: "est",
		are: "sont",
		was: "était",
		were: "étaient",
		has: "a",
		have: "avoir",
		be: "être",
		been: "été",
		will: "sera",
		can: "peut",
		not: "pas",
		no: "non",
		all: "tout",
		only: "seul",
		more: "plus",
		after: "après",
		before: "avant",
		every: "chaque",
		history: "histoire",
		historical: "historique",
		story: "histoire",
		stories: "histoires",
		school: "école",
		archive: "archive",
		archives: "archives",
		record: "notice",
		records: "notices",
		collection: "collection",
		collections: "collections",
		document: "document",
		documents: "documents",
		search: "rechercher",
		view: "voir",
		read: "lire",
		explore: "explorer",
		home: "accueil",
		page: "page",
		about: "à propos",
		people: "personnes",
		memory: "souvenir",
		memories: "souvenirs",
		community: "communauté",
		shared: "partagé",
		past: "passé",
		present: "présent",
		future: "avenir",
		generations: "générations",
		year: "année",
		years: "années",
		date: "date",
		dates: "dates",
		name: "nom",
		title: "titre",
		description: "description",
		verified: "vérifié",
		verification: "vérification",
		unconfirmed: "non confirmé",
		available: "disponible",
		unavailable: "indisponible",
		public: "public",
		private: "privé",
		internal: "interne",
		restricted: "restreint",
		clear: "effacer",
		reset: "réinitialiser",
		filters: "filtres",
		category: "catégorie",
		categories: "catégories",
		period: "période",
		newest: "plus récent",
		oldest: "plus ancien",
		relevance: "pertinence",
		next: "suivant",
		previous: "précédent",
		back: "retour",
		continue: "continuer",
		close: "fermer",
		open: "ouvrir",
		language: "langue",
		english: "anglais",
		french: "français",
		kinyarwanda: "kinyarwanda",
		leadership: "direction",
		leader: "dirigeant",
		alumni: "anciens élèves",
		events: "événements",
		event: "événement",
		important: "important",
		gallery: "galerie",
		photo: "photo",
		photos: "photos",
		video: "vidéo",
		media: "médias",
		welcome: "bienvenue",
		preserving: "préservation",
		heritage: "patrimoine",
		preserve: "préserver",
		care: "soin",
		true: "vrai",
		truth: "vérité",
		purpose: "objectif",
		contact: "contact",
		details: "détails",
		contribute: "contribuer",
		contribution: "contribution",
		featured: "à la une",
		click: "cliquer",
		enter: "entrer",
		loading: "chargement",
		error: "erreur",
		success: "succès"
	}
};
function LanguageProvider({ children }) {
	const [language, setLanguageState] = (0, import_react.useState)("en");
	const originalTextNodes = (0, import_react.useState)(() => /* @__PURE__ */ new WeakMap())[0];
	const originalAttributes = (0, import_react.useState)(() => /* @__PURE__ */ new WeakMap())[0];
	const translateText = (text, targetLanguage) => {
		if (!text.trim() || /^[\d\s\p{P}]+$/u.test(text)) return text;
		const exact = translations[targetLanguage];
		const matchingKey = Object.keys(translations.en).find((key) => translations.en[key] === text);
		if (matchingKey) return exact[matchingKey];
		if (targetLanguage === "en") return text;
		return text.replace(/\b[\p{L}'’-]+\b/gu, (word) => {
			const lower = word.toLocaleLowerCase();
			const translated = wordTranslations[targetLanguage][lower];
			if (!translated) return word;
			return translated;
		});
	};
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("gsp-language");
		if (saved === "en" || saved === "rw" || saved === "fr") setLanguageState(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = language;
		const translateHead = () => {
			const exactText = (text) => translateText(text, language);
			const title = document.querySelector("title");
			if (title) {
				if (!title.dataset.gspOriginalText) title.dataset.gspOriginalText = title.textContent ?? "";
				title.textContent = exactText(title.dataset.gspOriginalText);
			}
			document.querySelectorAll("meta[name=\"description\"], meta[property=\"og:description\"], meta[property=\"og:title\"]").forEach((meta) => {
				const current = meta.getAttribute("content");
				if (!current) return;
				if (!meta.dataset.gspOriginalContent) meta.dataset.gspOriginalContent = current;
				meta.setAttribute("content", exactText(meta.dataset.gspOriginalContent));
			});
		};
		translateHead();
		const translateAttributes = (root) => {
			root.querySelectorAll("[placeholder], [aria-label], [title], [alt]").forEach((element) => {
				let values = originalAttributes.get(element);
				if (!values) {
					values = /* @__PURE__ */ new Map();
					originalAttributes.set(element, values);
				}
				[
					"placeholder",
					"aria-label",
					"title",
					"alt"
				].forEach((attribute) => {
					const current = element.getAttribute(attribute);
					if (!current) return;
					if (!values.has(attribute)) values.set(attribute, current);
					element.setAttribute(attribute, translateText(values.get(attribute), language));
				});
			});
		};
		const translateNode = (node) => {
			if (node.nodeType !== Node.TEXT_NODE) return;
			const textNode = node;
			const parent = textNode.parentElement;
			if (!parent || parent.closest("script, style, code, pre, [aria-hidden='true']")) return;
			if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, textNode.nodeValue ?? "");
			const original = originalTextNodes.get(textNode) ?? "";
			const translated = translateText(original, language);
			if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
		};
		const translateTree = (root) => {
			const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
			let node = walker.nextNode();
			while (node) {
				translateNode(node);
				node = walker.nextNode();
			}
			translateAttributes(root);
		};
		translateTree(document.body);
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.target instanceof HTMLHeadElement || mutation.target.closest?.("head")) translateHead();
				mutation.addedNodes.forEach((addedNode) => {
					if (addedNode.nodeType === Node.ELEMENT_NODE) translateTree(addedNode);
					else translateNode(addedNode);
				});
				if (mutation.type === "characterData") translateNode(mutation.target);
				if (mutation.type === "attributes") {
					const element = mutation.target;
					if (element instanceof HTMLMetaElement) translateHead();
					translateAttributes(element.parentElement ?? document.body);
				}
			});
		});
		observer.observe(document.documentElement, {
			subtree: true,
			childList: true,
			characterData: true,
			attributes: true,
			attributeFilter: [
				"placeholder",
				"aria-label",
				"title",
				"alt",
				"content"
			]
		});
		return () => observer.disconnect();
	}, [
		language,
		originalAttributes,
		originalTextNodes
	]);
	const setLanguage = (nextLanguage) => {
		setLanguageState(nextLanguage);
		window.localStorage.setItem("gsp-language", nextLanguage);
	};
	const t = (key) => translations[language][key] ?? translations.en[key];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			language,
			setLanguage,
			t
		},
		children
	});
}
function NotFoundComponent() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container archive-not-found",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "breadcrumb archive-not-found-breadcrumb",
			"aria-label": t("breadcrumb"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: t("home")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-current": "page",
					children: t("pageNotFound")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "archive-not-found-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "archive-not-found-mark",
					"aria-hidden": "true",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), " GSP HISTORICAL ARCHIVE"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("pageNotFound") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("notFoundDescription") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "archive-not-found-home",
					to: "/",
					children: [
						t("returnHome"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "archive-not-found-links",
					"aria-label": t("exploreArchive"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/our-history",
						children: [
							t("ourHistory"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/timeline",
						children: [
							t("historicalTimeline"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
						]
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	const { t } = useLanguage();
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t("pageDidNotLoad")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("unexpectedError")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("tryAgain")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t("goHome")
					})]
				})
			]
		})
	});
}
var Route$23 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "application-name",
				content: "GSP Historical Archive"
			},
			{ title: "GSP Historical Archive" },
			{
				name: "description",
				content: "Preserving the history and shared memory of Groupe Scolaire des Parents, Huye, Rwanda."
			},
			{
				property: "og:title",
				content: "GSP Historical Archive"
			},
			{
				property: "og:site_name",
				content: "GSP Historical Archive"
			},
			{
				property: "og:description",
				content: "The heritage of Groupe Scolaire des Parents, preserved for generations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{ "script:ld+json": archiveStructuredData }
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$23.useRouteContext();
	const isAdminRoute = useRouterState({ select: (state) => state.location.pathname.startsWith("/admin") });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveFooter, {})
		]
	}) });
}
var $$splitComponentImporter$22 = () => import("./routes-CjR0hBUe.mjs");
var Route$22 = createFileRoute("/")({
	head: () => {
		const homeHead = archiveHead("Home", "Explore the shared heritage of Groupe Scolaire des Parents in Huye, Rwanda. A digital archive preserving history, memories, and records for future generations.");
		return {
			...homeHead,
			meta: [...homeHead.meta, ...[]],
			links: []
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./about-archive-CQHBlbCy.mjs");
var Route$21 = createFileRoute("/about-archive")({
	head: () => archiveHead("About This Archive", "Learn how the GSP Historical Archive preserves, verifies, and shares the institution’s heritage responsibly."),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./documents--zNTgYFF.mjs");
var Route$20 = createFileRoute("/documents")({
	head: () => archiveHead("Documents Archive", "Explore the GSP Historical Archive document collections. Documents will be listed only after verification and access review."),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./events-BIkp57ao.mjs");
var Route$19 = createFileRoute("/events")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./gallery-CJgghy47.mjs");
var Route$18 = createFileRoute("/gallery")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./leadership-DgDwDkwr.mjs");
var Route$17 = createFileRoute("/leadership")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./our-history-DEMFRQ44.mjs");
var Route$16 = createFileRoute("/our-history")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./timeline-i0n5Qbx4.mjs");
var Route$15 = createFileRoute("/timeline")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.alumni-staff-DapB5dCU.mjs");
var Route$14 = createFileRoute("/admin/alumni-staff")({
	head: () => ({ meta: [{ title: "Alumni & Staff Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage demonstration alumni, former teacher and former staff records."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./admin.dashboard-CFf6StZM.mjs");
var Route$13 = createFileRoute("/admin/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard Overview | GSP Historical Archive" }, {
		name: "description",
		content: "GSP Historical Archive administration dashboard overview."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./admin.documents-D8OIZ7I1.mjs");
var Route$12 = createFileRoute("/admin/documents")({
	head: () => ({ meta: [{ title: "Documents Management | GSP Historical Archive" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./admin.events-Ck7oKuPu.mjs");
var Route$11 = createFileRoute("/admin/events")({
	head: () => ({ meta: [{ title: "Events Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage and preserve important events in GSP history."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./admin.gallery-D7G3_CkO.mjs");
var Route$10 = createFileRoute("/admin/gallery")({
	head: () => ({ meta: [{ title: "Gallery & Media Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage GSP historical photographs, videos and media collections."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./admin.history-DqmdqWP-.mjs");
var Route$9 = createFileRoute("/admin/history")({
	head: () => ({ meta: [{ title: "History Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage demonstration historical stories in the GSP Historical Archive."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./admin.leadership-CKrWKO9l.mjs");
var Route$8 = createFileRoute("/admin/leadership")({
	head: () => ({ meta: [{ title: "Leadership Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage and preserve the history of GSP school leadership."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.login-CQOcxoOB.mjs");
var Route$7 = createFileRoute("/admin/login")({
	head: () => ({ meta: [{ title: "Admin Sign In | GSP Historical Archive" }, {
		name: "description",
		content: "Administration sign-in for the GSP Historical Archive."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admin.settings-DO3PGhoT.mjs");
var Route$6 = createFileRoute("/admin/settings")({
	head: () => ({ meta: [{ title: "Administration Settings | GSP Historical Archive" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin.sources--jFgAV9s.mjs");
var Route$5 = createFileRoute("/admin/sources")({
	head: () => ({ meta: [{ title: "Sources & Verification | GSP Historical Archive" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admin.timeline-BCzlp7RP.mjs");
var Route$4 = createFileRoute("/admin/timeline")({
	head: () => ({ meta: [{ title: "Timeline Management | GSP Historical Archive" }, {
		name: "description",
		content: "Manage GSP historical timeline events and verification states."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./alumni.index-CWa9TyBV.mjs");
var Route$3 = createFileRoute("/alumni/")({
	head: () => archiveHead("Alumni History", "Explore GSP alumni history through profiles and achievements published only after verification."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery.index-B-WhA5j2.mjs");
var Route$2 = createFileRoute("/gallery/")({
	head: () => archiveHead("Gallery", "Explore GSP's historical photo and video collections. Archive media is published only when verified and appropriately contributed."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./leadership.index-CTyPUz0o.mjs");
var Route$1 = createFileRoute("/leadership/")({
	head: () => archiveHead("Leadership Through Generations", "Explore GSP leadership history through records and biographical details published only after verification."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./our-history.index-DM81HAUO.mjs");
var Route = createFileRoute("/our-history/")({
	head: () => archiveHead("Our History", "Discover the story collections of Groupe Scolaire des Parents: its beginnings, educational journey, school community, and shared heritage."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$23
});
var AboutArchiveRoute = Route$21.update({
	id: "/about-archive",
	path: "/about-archive",
	getParentRoute: () => Route$23
});
var DocumentsRoute = Route$20.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => Route$23
});
var EventsRoute = Route$19.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$23
});
var GalleryRoute = Route$18.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$23
});
var LeadershipRoute = Route$17.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => Route$23
});
var OurHistoryRoute = Route$16.update({
	id: "/our-history",
	path: "/our-history",
	getParentRoute: () => Route$23
});
var SearchRoute = Route$31.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$23
});
var TimelineRoute = Route$15.update({
	id: "/timeline",
	path: "/timeline",
	getParentRoute: () => Route$23
});
var AdminAlumniStaffRoute = Route$14.update({
	id: "/admin/alumni-staff",
	path: "/admin/alumni-staff",
	getParentRoute: () => Route$23
});
var AdminDashboardRoute = Route$13.update({
	id: "/admin/dashboard",
	path: "/admin/dashboard",
	getParentRoute: () => Route$23
});
var AdminDocumentsRoute = Route$12.update({
	id: "/admin/documents",
	path: "/admin/documents",
	getParentRoute: () => Route$23
});
var AdminEventsRoute = Route$11.update({
	id: "/admin/events",
	path: "/admin/events",
	getParentRoute: () => Route$23
});
var AdminGalleryRoute = Route$10.update({
	id: "/admin/gallery",
	path: "/admin/gallery",
	getParentRoute: () => Route$23
});
var AdminHistoryRoute = Route$9.update({
	id: "/admin/history",
	path: "/admin/history",
	getParentRoute: () => Route$23
});
var AdminLeadershipRoute = Route$8.update({
	id: "/admin/leadership",
	path: "/admin/leadership",
	getParentRoute: () => Route$23
});
var AdminLoginRoute = Route$7.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$23
});
var AdminSettingsRoute = Route$6.update({
	id: "/admin/settings",
	path: "/admin/settings",
	getParentRoute: () => Route$23
});
var AdminSourcesRoute = Route$5.update({
	id: "/admin/sources",
	path: "/admin/sources",
	getParentRoute: () => Route$23
});
var AdminTimelineRoute = Route$4.update({
	id: "/admin/timeline",
	path: "/admin/timeline",
	getParentRoute: () => Route$23
});
var AlumniIndexRoute = Route$3.update({
	id: "/alumni/",
	path: "/alumni/",
	getParentRoute: () => Route$23
});
var AlumniSlugRoute = Route$25.update({
	id: "/alumni/$slug",
	path: "/alumni/$slug",
	getParentRoute: () => Route$23
});
var ArchiveCollectionRoute = Route$24.update({
	id: "/archive/$collection",
	path: "/archive/$collection",
	getParentRoute: () => Route$23
});
var EventsIndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => EventsRoute
});
var EventsSlugRoute = Route$26.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EventsRoute
});
var GalleryIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => GalleryRoute
});
var GalleryCategorySlugRoute = Route$28.update({
	id: "/$categorySlug",
	path: "/$categorySlug",
	getParentRoute: () => GalleryRoute
});
var LeadershipIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => LeadershipRoute
});
var LeadershipSlugRoute = Route$29.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => LeadershipRoute
});
var OurHistoryIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => OurHistoryRoute
});
var OurHistorySlugRoute = Route$30.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => OurHistoryRoute
});
var TimelineIndexRoute = Route$32.update({
	id: "/",
	path: "/",
	getParentRoute: () => TimelineRoute
});
var TimelineYearRoute = Route$33.update({
	id: "/$year",
	path: "/$year",
	getParentRoute: () => TimelineRoute
});
var EventsRouteChildren = {
	EventsSlugRoute,
	EventsIndexRoute
};
var EventsRouteWithChildren = EventsRoute._addFileChildren(EventsRouteChildren);
var GalleryRouteChildren = {
	GalleryCategorySlugRoute,
	GalleryIndexRoute
};
var GalleryRouteWithChildren = GalleryRoute._addFileChildren(GalleryRouteChildren);
var LeadershipRouteChildren = {
	LeadershipSlugRoute,
	LeadershipIndexRoute
};
var LeadershipRouteWithChildren = LeadershipRoute._addFileChildren(LeadershipRouteChildren);
var OurHistoryRouteChildren = {
	OurHistorySlugRoute,
	OurHistoryIndexRoute
};
var OurHistoryRouteWithChildren = OurHistoryRoute._addFileChildren(OurHistoryRouteChildren);
var TimelineRouteChildren = {
	TimelineYearRoute,
	TimelineIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutArchiveRoute,
	DocumentsRoute,
	EventsRoute: EventsRouteWithChildren,
	GalleryRoute: GalleryRouteWithChildren,
	LeadershipRoute: LeadershipRouteWithChildren,
	OurHistoryRoute: OurHistoryRouteWithChildren,
	SearchRoute,
	TimelineRoute: TimelineRoute._addFileChildren(TimelineRouteChildren),
	AdminAlumniStaffRoute,
	AdminDashboardRoute,
	AdminDocumentsRoute,
	AdminEventsRoute,
	AdminGalleryRoute,
	AdminHistoryRoute,
	AdminLeadershipRoute,
	AdminLoginRoute,
	AdminSettingsRoute,
	AdminSourcesRoute,
	AdminTimelineRoute,
	AlumniSlugRoute,
	ArchiveCollectionRoute,
	AlumniIndexRoute
};
var routeTree = Route$23._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
