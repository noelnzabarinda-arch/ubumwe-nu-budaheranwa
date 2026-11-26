import { describe, expect, it } from "vitest";
import {
  archiveSearchItems,
  archiveSearchYears,
  filterArchiveSearch,
  searchArchive,
  type ArchiveSearchItem,
} from "./search-data";

describe("archive search", () => {
  it("finds partial, case-insensitive matches across archive titles and descriptions", () => {
    expect(searchArchive("KNOW").map((item) => item.title)).toContain("The pursuit of knowledge");
    expect(searchArchive("school development").map((item) => item.type)).toContain("timeline");
    expect(searchArchive("history").map((item) => item.type)).toContain("stories");
    expect(searchArchive("  ").map((item) => item.id)).toEqual([]);
  });

  it("excludes unverified alumni identities while indexing published collection categories", () => {
    expect(archiveSearchItems.filter((item) => item.type === "alumni")).toEqual([]);
    expect(archiveSearchItems.filter((item) => item.type === "gallery")).toHaveLength(9);
    expect(archiveSearchItems.filter((item) => item.type === "documents")).toHaveLength(7);
    expect(searchArchive("gallery").map((item) => item.type)).toEqual(Array(9).fill("gallery"));
    expect(searchArchive("documents").filter((item) => item.type === "documents")).toHaveLength(7);
  });

  it("filters by content type and year, and sorts dated records newest first", () => {
    const base = archiveSearchItems[0];
    if (!base) throw new Error("Missing archive search fixture");
    const fixtures: ArchiveSearchItem[] = [
      { ...base, id: "undated", year: null },
      { ...base, id: "old", year: 2000 },
      { ...base, id: "new", year: 2020 },
    ];
    expect(
      filterArchiveSearch(fixtures, "stories", "all", "newest", "story").map((item) => item.id),
    ).toEqual(["new", "old", "undated"]);
    expect(
      filterArchiveSearch(fixtures, "stories", "2000", "relevance", "story").map((item) => item.id),
    ).toEqual(["old"]);
    expect(archiveSearchYears(fixtures)).toEqual(["2020", "2000"]);
  });
});
