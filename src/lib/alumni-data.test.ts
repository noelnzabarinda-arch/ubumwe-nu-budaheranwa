import { describe, expect, it } from "vitest";
import { filterAlumni, type AlumniProfile } from "./alumni-data";

const records: AlumniProfile[] = [
  {
    slug: "student-a",
    name: "Archive Student A",
    category: "former-student",
    graduationYear: 2001,
    servicePeriod: null,
    program: "Science",
    position: null,
    portrait: null,
    introduction: "",
    biography: [],
    achievements: [],
    contributions: [],
    verified: true,
  },
  {
    slug: "staff-b",
    name: "Archive Staff B",
    category: "former-staff",
    graduationYear: null,
    servicePeriod: "2004 - 2012",
    program: null,
    position: "Archivist",
    portrait: null,
    introduction: "",
    biography: [],
    achievements: [],
    contributions: [],
    verified: true,
  },
];

describe("alumni filters", () => {
  it("searches names and distinguishes former students from staff", () => {
    expect(filterAlumni(records, "student a", "former-student", "all", "all", "alphabetical").map((item) => item.slug))
      .toEqual(["student-a"]);
    expect(filterAlumni(records, "", "former-staff", "all", "all", "alphabetical").map((item) => item.slug))
      .toEqual(["staff-b"]);
  });

  it("filters year and program and supports chronological sorting", () => {
    expect(filterAlumni(records, "", "all", "2001", "Science", "chronological").map((item) => item.slug))
      .toEqual(["student-a"]);
  });
});
