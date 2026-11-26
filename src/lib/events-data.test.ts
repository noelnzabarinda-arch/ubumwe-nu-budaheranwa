import { describe, expect, it } from "vitest";
import {
  eventCategories,
  eventNeighbours,
  eventRecords,
  filterEventRecords,
  type EventRecord,
} from "./events-data";

describe("Phase 04 event archive integrity", () => {
  it("keeps all supplied event collection entries explicitly unverified and undated", () => {
    expect(eventRecords.length).toBeGreaterThan(0);
    expect(eventRecords.every((event) => event.kind === "topic-preview")).toBe(true);
    expect(eventRecords.every((event) => !event.verified && event.year === null)).toBe(true);
    expect(eventCategories).toHaveLength(8);
  });

  it("filters event topics by category, year status, and case-insensitive keywords", () => {
    expect(
      filterEventRecords(
        eventRecords,
        " KNOWLEDGE ",
        "educational-achievements",
        "undated",
        "newest",
      ).map((event) => event.slug),
    ).toEqual(["educational-journey"]);
    expect(
      filterEventRecords(eventRecords, "knowledge", "school-development", "all", "newest"),
    ).toEqual([]);
    expect(filterEventRecords(eventRecords, "", "all", "2024", "newest")).toEqual([]);
  });

  it("sorts verified years in both directions while leaving undated topics last", () => {
    const base = eventRecords[0];
    if (!base) throw new Error("Missing event topic fixture");
    const fixtures: EventRecord[] = [
      { ...base, slug: "undated", year: null },
      { ...base, slug: "later", year: 2020, verified: true },
      { ...base, slug: "earlier", year: 2000, verified: true },
    ];
    expect(
      filterEventRecords(fixtures, "", "all", "all", "oldest").map((event) => event.slug),
    ).toEqual(["earlier", "later", "undated"]);
    expect(
      filterEventRecords(fixtures, "", "all", "all", "newest").map((event) => event.slug),
    ).toEqual(["later", "earlier", "undated"]);
  });

  it("provides adjacent topic previews without suggesting historical relations", () => {
    expect(eventNeighbours("the-beginning").previous).toBeUndefined();
    expect(eventNeighbours("the-beginning").next?.slug).toBe("a-place-to-grow");
    expect(eventNeighbours("remembrance-and-resilience").next).toBeUndefined();
    expect(eventNeighbours("missing").next).toBeUndefined();
  });
});
