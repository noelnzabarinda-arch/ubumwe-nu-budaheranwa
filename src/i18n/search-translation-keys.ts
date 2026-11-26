import type { TranslationKey } from "./translations";
import type { SearchType } from "@/lib/search-data";

export const searchTypeTranslationKeys: Record<SearchType, TranslationKey> = {
  stories: "historicalStories",
  timeline: "timelineEvents",
  leadership: "leaders",
  events: "importantEvents",
  alumni: "alumni",
  gallery: "galleryCollections",
  documents: "historicalDocuments",
};
