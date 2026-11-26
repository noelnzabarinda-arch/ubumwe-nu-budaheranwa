export const categories = [
  "Foundation and Establishment",
  "School Development",
  "Educational Journey",
  "Community and School Life",
  "Historical Milestones",
  "Remembrance and Resilience",
] as const;
export type Story = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image:
    | "books"
    | "pages"
    | "hero"
    | "library"
    | "documents"
    | "manuscript"
    | "desk"
    | "reading"
    | "notebooks"
    | "schoolBuilding"
    | "schoolCampus"
    | "schoolCourtyard"
    | "schoolFacade"
    | "documentsDesk"
    | "documentsTable"
    | "documentsArchive"
    | "documentsRecords"
    | "documentsPhotos";
  period: string | null;
};
export const stories: Story[] = [
  {
    slug: "the-beginning",
    title: "Where our story begins",
    category: categories[0],
    description:
      "A place for the records and recollections that will document the beginnings of GSP.",
    image: "schoolBuilding",
    period: null,
  },
  {
    slug: "a-place-to-grow",
    title: "A place to learn. A place to grow.",
    category: categories[1],
    description:
      "Tracing the spaces, ideas, and shared commitment behind the school’s development.",
    image: "schoolCampus",
    period: null,
  },
  {
    slug: "shared-school-life",
    title: "The memories we carry together",
    category: categories[3],
    description: "Making room for the everyday experiences that connect a school community.",
    image: "documentsArchive",
    period: null,
  },
  {
    slug: "educational-journey",
    title: "The pursuit of knowledge",
    category: categories[2],
    description: "A future collection of verified records reflecting teaching and learning at GSP.",
    image: "documentsTable",
    period: null,
  },
  {
    slug: "historical-milestones",
    title: "Marking the journey",
    category: categories[4],
    description: "Important moments will be documented here when sources and dates are verified.",
    image: "schoolFacade",
    period: null,
  },
  {
    slug: "remembrance-and-resilience",
    title: "Remembering with care",
    category: categories[5],
    description:
      "A space reserved for carefully verified accounts, remembrance, and respectful reflection.",
    image: "documentsPhotos",
    period: null,
  },
];
export function filterStories(items: Story[], query: string, category: string, period: string) {
  const term = query.trim().toLocaleLowerCase();
  return items.filter(
    (story) =>
      (!term ||
        `${story.title} ${story.description} ${story.category}`
          .toLocaleLowerCase()
          .includes(term)) &&
      (category === "all" || story.category === category) &&
      (period === "all" ||
        (period === "unconfirmed" ? story.period === null : story.period === period)),
  );
}
export const collectionNames: Record<string, string> = {
  timeline: "Timeline",
  leadership: "Leadership",
  events: "Important Events",
  alumni: "Alumni",
  gallery: "Gallery",
  documents: "Documents",
  about: "About the Archive",
  contribute: "Contribute to the Archive",
};
export function archiveHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | GSP Historical Archive` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | GSP Historical Archive` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
