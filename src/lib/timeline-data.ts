import { stories } from "./archive-data";

export const timelineCategories = [
  "Foundation and Establishment",
  "School Development",
  "Educational Milestones",
  "Leadership Changes",
  "Historical Challenges",
  "Historical Milestones",
  "Remembrance and Resilience",
  "Community and Institutional Growth",
] as const;

export type TimelineEntry = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: number | null;
  verified: boolean;
  storySlug: string;
};

// These are collection topics, not claims that historical events occurred.
export const timelineEntries: TimelineEntry[] = stories.map((story) => ({
  slug: story.slug,
  title: story.title,
  category:
    story.category === "Educational Journey"
      ? "Educational Milestones"
      : story.category === "Community and School Life"
        ? "Community and Institutional Growth"
        : story.category,
  description: story.description,
  year: null,
  verified: false,
  storySlug: story.slug,
}));

export function filterTimeline(
  entries: TimelineEntry[],
  query: string,
  category: string,
  order: string,
) {
  const term = query.trim().toLocaleLowerCase();
  return entries
    .filter(
      (entry) =>
        (category === "all" || entry.category === category) &&
        (!term ||
          `${entry.year ?? ""} ${entry.title} ${entry.description} ${entry.category}`
            .toLocaleLowerCase()
            .includes(term)),
    )
    .sort((a, b) => {
      // Undated previews always follow dated records, in stable collection order.
      if (a.year === null) return b.year === null ? 0 : 1;
      if (b.year === null) return -1;
      return order === "newest" ? b.year - a.year : a.year - b.year;
    });
}

export function storyNeighbours(slug: string) {
  const index = stories.findIndex((story) => story.slug === slug);
  return {
    previous: index > 0 ? stories[index - 1] : undefined,
    next: index >= 0 ? stories[index + 1] : undefined,
    related: stories.filter((story) => story.slug !== slug).slice(0, 3),
  };
}
