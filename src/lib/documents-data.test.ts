import { describe, expect, it } from "vitest";
import { filterDocuments, type ArchiveDocument } from "./documents-data";

const records: ArchiveDocument[] = [
  {
    id: "public-dated",
    title: "School report",
    category: "school-reports",
    type: "Report",
    year: 2001,
    description: "Reviewed public example",
    source: "Verified source",
    format: "PDF",
    access: "public",
    fileUrl: "/sample.pdf",
  },
  {
    id: "public-older",
    title: "Early school report",
    category: "school-reports",
    type: "Report",
    year: 1995,
    description: "Older reviewed public example",
    source: "Catalog note",
    format: "PDF",
    access: "public",
    fileUrl: null,
  },
  {
    id: "public-undated",
    title: "Letter collection",
    category: "historical-letters",
    type: "Letter",
    year: null,
    description: "Undated public example",
    source: null,
    format: null,
    access: "public",
    fileUrl: null,
  },
  {
    id: "restricted",
    title: "Confidential record",
    category: "school-reports",
    type: "Report",
    year: 2005,
    description: "Not for public display",
    source: null,
    format: null,
    access: "restricted",
    fileUrl: "/restricted.pdf",
  },
];

const defaultFilters = {
  query: "",
  category: "all",
  year: "all",
  type: "all",
  order: "newest" as const,
};

describe("filterDocuments", () => {
  it("searches public records and never returns restricted materials", () => {
    expect(
      filterDocuments(records, { ...defaultFilters, query: "verified source" }).map(
        (item) => item.id,
      ),
    ).toEqual(["public-dated"]);
    expect(filterDocuments(records, defaultFilters).map((item) => item.id)).toEqual([
      "public-dated",
      "public-older",
      "public-undated",
    ]);
  });

  it("filters by category, year, and document type", () => {
    expect(
      filterDocuments(records, {
        ...defaultFilters,
        category: "historical-letters",
        year: "undated",
        type: "Letter",
      }).map((item) => item.id),
    ).toEqual(["public-undated"]);
  });

  it("sorts dated records chronologically and leaves undated records last", () => {
    expect(
      filterDocuments(records, { ...defaultFilters, order: "oldest" }).map((item) => item.id),
    ).toEqual(["public-older", "public-dated", "public-undated"]);
  });
});
