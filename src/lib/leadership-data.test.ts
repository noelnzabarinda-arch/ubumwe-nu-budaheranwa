import { describe, expect, it } from "vitest";
import { filterLeaders, type Leader } from "./leadership-data";

const records: Leader[] = [
  {
    slug: "record-a",
    name: "Archive record A",
    title: "Former leader",
    status: "former",
    startYear: 2000,
    endYear: 2004,
    introduction: "",
    biography: [],
    verified: true,
  },
  {
    slug: "record-b",
    name: "Archive record B",
    title: "Former leader",
    status: "former",
    startYear: 2010,
    endYear: 2014,
    introduction: "",
    biography: [],
    verified: true,
  },
  {
    slug: "record-current",
    name: "Current record",
    title: "Current leader",
    status: "current",
    startYear: null,
    endYear: null,
    introduction: "",
    biography: [],
    verified: false,
  },
];

describe("leadership filters", () => {
  it("searches names without case sensitivity and filters status", () => {
    expect(
      filterLeaders(records, "RECORD B", "former", "all", "oldest").map((item) => item.slug),
    ).toEqual(["record-b"]);
    expect(filterLeaders(records, "", "current", "all", "oldest").map((item) => item.slug)).toEqual(
      ["record-current"],
    );
  });

  it("filters unverified periods and sorts dated records chronologically", () => {
    expect(
      filterLeaders(records, "", "all", "unverified", "oldest").map((item) => item.slug),
    ).toEqual(["record-current"]);
    expect(filterLeaders(records, "", "all", "all", "oldest").map((item) => item.slug)).toEqual([
      "record-a",
      "record-b",
      "record-current",
    ]);
    expect(filterLeaders(records, "", "all", "all", "newest").map((item) => item.slug)).toEqual([
      "record-b",
      "record-a",
      "record-current",
    ]);
  });
});
