import { archiveImages } from "@/components/archive/images";
import { alumniProfiles } from "./alumni-data";
import { stories } from "./archive-data";
import { eventRecords } from "./events-data";
import { documentCategories } from "./documents-data";
import { galleryCategories } from "./gallery-data";
import { leaders } from "./leadership-data";
import { timelineEntries } from "./timeline-data";

export const searchTypes = [
  { value: "stories", label: "Historical Stories" },
  { value: "timeline", label: "Timeline" },
  { value: "leadership", label: "Leadership" },
  { value: "events", label: "Important Events" },
  { value: "alumni", label: "Alumni & Former Staff" },
  { value: "gallery", label: "Gallery" },
  { value: "documents", label: "Documents" },
] as const;

export type SearchType = (typeof searchTypes)[number]["value"];
export function isSearchType(value: unknown): value is SearchType {
  return typeof value === "string" && searchTypes.some((type) => type.value === value);
}

export type ArchiveSearchItem = {
  id: string;
  type: SearchType;
  title: string;
  category: string;
  description: string;
  year: number | null;
  href: string;
  image?: string;
};

export const archiveSearchItems: ArchiveSearchItem[] = [
  ...stories.map((story) => ({
    id: `story-${story.slug}`,
    type: "stories" as const,
    title: story.title,
    category: story.category,
    description: story.description,
    year: story.period ? Number(story.period.match(/\d{4}/)?.[0]) || null : null,
    href: `/our-history/${story.slug}`,
    image: archiveImages[story.image],
  })),
  ...timelineEntries.map((entry) => ({
    id: `timeline-${entry.slug}`,
    type: "timeline" as const,
    title: entry.title,
    category: entry.category,
    description: entry.description,
    year: entry.year,
    href: `/timeline/${entry.slug}`,
  })),
  ...leaders.map((leader) => ({
    id: `leadership-${leader.slug}`,
    type: "leadership" as const,
    title: leader.name,
    category: leader.title,
    description: leader.introduction,
    year: leader.startYear,
    href: `/leadership/${leader.slug}`,
  })),
  ...eventRecords.map((event) => ({
    id: `event-${event.slug}`,
    type: "events" as const,
    title: event.title,
    category: event.category.title,
    description: event.description,
    year: event.year,
    href: `/events/${event.slug}`,
  })),
  ...alumniProfiles
    .filter((profile) => profile.verified)
    .map((profile) => ({
      id: `alumni-${profile.slug}`,
      type: "alumni" as const,
      title: profile.name,
      category:
        profile.category === "former-student"
          ? "Former Student"
          : profile.category === "former-staff"
            ? "Former Teacher & Staff"
            : "Alumni",
      description: profile.introduction,
      year: profile.graduationYear,
      href: `/alumni/${profile.slug}`,
    })),
  ...galleryCategories.map((category) => ({
    id: `gallery-${category.slug}`,
    type: "gallery" as const,
    title: category.title,
    category: "Gallery Collection",
    description: category.description,
    year: null,
    href: `/gallery/${category.slug}`,
  })),
  ...documentCategories.map((category) => ({
    id: `document-${category.slug}`,
    type: "documents" as const,
    title: category.name,
    category: "Historical Documents",
    description: category.description,
    year: null,
    href: "/documents",
  })),
];

function normalizedText(value: string) {
  return value.trim().toLocaleLowerCase();
}

function searchScore(item: ArchiveSearchItem, query: string) {
  const title = normalizedText(item.title);
  const category = normalizedText(item.category);
  const typeAliases: Record<SearchType, string> = {
    stories: "history histories story stories",
    timeline: "timeline historical events",
    leadership: "leaders leadership",
    events: "important events",
    alumni: "alumni former students teachers staff",
    gallery: "gallery galleries photographs photos collections",
    documents: "documents records archive",
  };
  const typeLabel = searchTypes.find((type) => type.value === item.type)?.label ?? "";
  const text = normalizedText(
    `${item.title} ${item.category} ${item.description} ${item.year ?? ""} ${typeLabel} ${typeAliases[item.type]}`,
  );
  const term = normalizedText(query);
  const tokens = term.split(/\s+/).filter(Boolean);

  if (!term || (!text.includes(term) && !tokens.every((token) => text.includes(token)))) return 0;
  if (title === term) return 5;
  if (title.includes(term) || tokens.some((token) => title.includes(token))) return 4;
  if (category.includes(term) || tokens.some((token) => category.includes(token))) return 3;
  return 1;
}

export function searchArchive(query: string, items = archiveSearchItems) {
  const term = query.trim();
  if (!term) return [];

  return items
    .map((item, index) => ({ item, index, score: searchScore(item, term) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ item }) => item);
}

export function filterArchiveSearch(
  items: ArchiveSearchItem[],
  type: SearchType | "all",
  year: string,
  sort: "relevance" | "newest",
  query: string,
) {
  return items
    .filter(
      (item) =>
        (type === "all" || item.type === type) && (year === "all" || item.year === Number(year)),
    )
    .sort((a, b) => {
      if (sort === "newest") {
        if (a.year === null) return b.year === null ? 0 : 1;
        if (b.year === null) return -1;
        return b.year - a.year;
      }
      return searchScore(b, query) - searchScore(a, query);
    });
}

export function archiveSearchYears(items: ArchiveSearchItem[]) {
  return Array.from(new Set(items.flatMap((item) => (item.year === null ? [] : [item.year]))))
    .sort((a, b) => b - a)
    .map(String);
}
