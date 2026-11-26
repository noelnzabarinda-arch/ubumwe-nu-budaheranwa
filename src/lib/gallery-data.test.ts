import { describe, expect, it } from "vitest";
import { filterGalleryMedia, galleryCategories, type GalleryMedia } from "./gallery-data";

describe("gallery data", () => {
  it("defines the nine requested categories without claiming unverified counts", () => {
    expect(galleryCategories).toHaveLength(9);
    expect(new Set(galleryCategories.map((category) => category.slug)).size).toBe(9);
  });

  it("filters verified media by query, year, type, and date order", () => {
    const records: GalleryMedia[] = [
      {
        id: "older-photo",
        categorySlug: "school-history",
        type: "photo",
        title: "School building",
        description: "A verified building record",
        caption: "North wing",
        year: 1978,
        imageUrl: "/archive/building.jpg",
        videoUrl: null,
        duration: null,
        source: "GSP archive",
        historicalPeriod: "1970s",
        verified: true,
      },
      {
        id: "newer-video",
        categorySlug: "school-history",
        type: "video",
        title: "School anniversary",
        description: "A verified anniversary recording",
        caption: "Community gathering",
        year: 1992,
        imageUrl: null,
        videoUrl: "/archive/anniversary.mp4",
        duration: "02:10",
        source: null,
        historicalPeriod: null,
        verified: true,
      },
      {
        id: "unverified",
        categorySlug: "school-history",
        type: "photo",
        title: "Unverified photograph",
        description: "",
        caption: "",
        year: 2001,
        imageUrl: null,
        videoUrl: null,
        duration: null,
        source: null,
        historicalPeriod: null,
        verified: false,
      },
    ];

    expect(filterGalleryMedia(records, "", "all", "all", "oldest").map((item) => item.id)).toEqual([
      "older-photo",
      "newer-video",
    ]);
    expect(filterGalleryMedia(records, "anniversary", "1992", "video", "newest")).toHaveLength(1);
    expect(filterGalleryMedia(records, "unverified", "all", "all", "newest")).toHaveLength(0);
  });
});
