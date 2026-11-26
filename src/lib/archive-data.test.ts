import { describe, expect, it } from "vitest";
import { categories, filterStories, stories } from "./archive-data";
describe("Archive integrity and filtering", () => {
  it("never assigns an unverified date to sample stories", () => {
    expect(stories.length).toBe(6);
    expect(stories.every((s) => s.period === null)).toBe(true);
  });
  it("searches title and keywords without case sensitivity", () => {
    expect(filterStories(stories, "  KNOWLEDGE ", "all", "all").map((s) => s.slug)).toEqual([
      "educational-journey",
    ]);
  });
  it("filters by historical category", () => {
    expect(filterStories(stories, "", categories[0], "all").map((s) => s.slug)).toEqual([
      "the-beginning",
    ]);
  });
  it("combines keyword and category filters", () => {
    expect(filterStories(stories, "knowledge", categories[0], "all")).toEqual([]);
  });
  it("returns an empty state for no matches", () => {
    expect(filterStories(stories, "zzzz-not-in-archive", "all", "all")).toEqual([]);
  });
  it("does not invent records for a year filter", () => {
    expect(filterStories(stories, "", "all", "2000")).toEqual([]);
    expect(filterStories(stories, "", "all", "unconfirmed")).toHaveLength(6);
  });
});
