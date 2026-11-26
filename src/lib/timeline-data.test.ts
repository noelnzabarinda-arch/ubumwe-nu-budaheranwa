import { describe, expect, it } from "vitest";
import {
  filterTimeline,
  storyNeighbours,
  timelineEntries,
  type TimelineEntry,
} from "./timeline-data";

describe("Phase 02 historical integrity", () => {
  it("keeps every supplied timeline preview undated", () => {
    expect(timelineEntries).toHaveLength(6);
    expect(timelineEntries.map((entry) => entry.year)).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
  it("never marks sample topics as verified events", () => {
    expect(timelineEntries.filter((entry) => entry.verified)).toEqual([]);
  });
  it("does not turn a year search into invented historical evidence", () => {
    expect(filterTimeline(timelineEntries, "1994", "all", "oldest")).toEqual([]);
  });
  it("combines category and case-insensitive keyword searches", () => {
    expect(
      filterTimeline(timelineEntries, " KNOWLEDGE ", "Educational Milestones", "oldest").map(
        (entry) => entry.slug,
      ),
    ).toEqual(["educational-journey"]);
    expect(filterTimeline(timelineEntries, "knowledge", "School Development", "oldest")).toEqual(
      [],
    );
  });
  it("sorts synthetic dated fixtures in both directions and leaves undated entries last", () => {
    const base = timelineEntries[0];
    if (!base) throw new Error("Missing test fixture");
    // Fictional test-only dates, never displayed or included in application data.
    const fixtures: TimelineEntry[] = [
      { ...base, slug: "undated", year: null },
      { ...base, slug: "later", year: 2020 },
      { ...base, slug: "earlier", year: 2000 },
    ];
    expect(filterTimeline(fixtures, "", "all", "oldest").map((entry) => entry.slug)).toEqual([
      "earlier",
      "later",
      "undated",
    ]);
    expect(filterTimeline(fixtures, "", "all", "newest").map((entry) => entry.slug)).toEqual([
      "later",
      "earlier",
      "undated",
    ]);
    expect(fixtures[0]?.slug).toBe("undated");
  });
  it("searches dates when a dated record exists", () => {
    const base = timelineEntries[0];
    if (!base) throw new Error("Missing test fixture");
    expect(filterTimeline([{ ...base, year: 2020 }], "2020", "all", "oldest")).toHaveLength(1);
  });
  it("offers three other stories and only valid adjacent story destinations", () => {
    expect(storyNeighbours("the-beginning").previous).toBeUndefined();
    expect(storyNeighbours("the-beginning").next?.slug).toBe("a-place-to-grow");
    expect(storyNeighbours("the-beginning").related.map((story) => story.slug)).toEqual([
      "a-place-to-grow",
      "shared-school-life",
      "educational-journey",
    ]);
    expect(storyNeighbours("remembrance-and-resilience").next).toBeUndefined();
    expect(storyNeighbours("missing").next).toBeUndefined();
  });
});
