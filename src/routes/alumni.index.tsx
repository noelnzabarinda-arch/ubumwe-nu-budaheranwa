import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { AlumniFilters, AlumniGrid } from "@/components/archive/alumni";
import { archiveHead } from "@/lib/archive-data";
import { alumniProfiles, alumniStories, filterAlumni } from "@/lib/alumni-data";

export const Route = createFileRoute("/alumni/")({
  head: () =>
    archiveHead(
      "Alumni History",
      "Explore GSP alumni history through profiles and achievements published only after verification.",
    ),
  component: AlumniHistory,
});

function AlumniHistory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | "former-student" | "former-staff">("all");
  const [year, setYear] = useState<"all" | "unverified" | string>("all");
  const [program, setProgram] = useState<"all" | "unverified" | string>("all");
  const [order, setOrder] = useState<"alphabetical" | "chronological">("alphabetical");

  const verifiedProfiles = alumniProfiles.filter((profile) => profile.verified);
  const results = filterAlumni(verifiedProfiles, query, category, year, program, order);
  const formerStudents = results.filter((profile) => profile.category === "former-student");
  const formerStaff = results.filter((profile) => profile.category === "former-staff");
  const years = Array.from(new Set(verifiedProfiles.map((profile) => profile.graduationYear).filter((value): value is number => value !== null))).map(String).sort();
  const programs = Array.from(new Set(verifiedProfiles.map((profile) => profile.program).filter((value): value is string => Boolean(value)))).sort();

  const reset = () => {
    setQuery("");
    setCategory("all");
    setYear("all");
    setProgram("all");
    setOrder("alphabetical");
  };

  return (
    <div className="alumni-page">
      <header className="alumni-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={12} />
            <span aria-current="page">Alumni</span>
          </nav>
          <span className="eyebrow"><span className="gold-rule" /> GSP HISTORICAL ARCHIVE</span>
          <h1>The People Who Shaped Our History</h1>
          <p>
            Preserving the stories and contributions of the GSP community—former students,
            teachers, and staff who are part of our shared history.
          </p>
          <span className="alumni-hero-caption">Verified records only · Privacy and accuracy respected</span>
        </div>
      </header>

      <section className="container alumni-featured section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="gold-rule" /> FEATURED ALUMNI</span>
            <h2>Selected verified profiles.</h2>
          </div>
          <span className="collection-status"><span className="location-dot" /> Verification in progress</span>
        </div>
        <AlumniGrid profiles={verifiedProfiles.filter((profile) => Boolean(profile.portrait)).slice(0, 4)} />
      </section>

      <section className="container alumni-directory section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="gold-rule" /> ALUMNI DIRECTORY</span>
            <h2>People and records.</h2>
          </div>
          <span className="collection-status">{results.length} verified profiles</span>
        </div>
        <AlumniFilters
          query={query}
          category={category}
          year={year}
          program={program}
          order={order}
          years={years}
          programs={programs}
          onQueryChange={setQuery}
          onCategoryChange={(value) => {
            if (value === "all" || value === "former-student" || value === "former-staff") setCategory(value);
          }}
          onYearChange={setYear}
          onProgramChange={setProgram}
          onOrderChange={(value) => {
            if (value === "alphabetical" || value === "chronological") setOrder(value);
          }}
          onReset={reset}
        />
      </section>

      <section className="former-students-section section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span className="gold-rule" /> FORMER STUDENTS</span>
              <h2>Those who learned at GSP.</h2>
            </div>
            <span className="collection-status">{formerStudents.length} verified profiles</span>
          </div>
          <AlumniGrid profiles={formerStudents} />
        </div>
      </section>

      <section className="former-staff-section section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span className="gold-rule" /> FORMER TEACHERS &amp; STAFF</span>
              <h2>Those who served GSP.</h2>
            </div>
            <span className="collection-status">{formerStaff.length} verified profiles</span>
          </div>
          <AlumniGrid profiles={formerStaff} />
        </div>
      </section>

      <section className="container alumni-stories section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="gold-rule" /> ALUMNI ACHIEVEMENTS &amp; STORIES</span>
            <h2>Documented journeys and contributions.</h2>
          </div>
        </div>
        {alumniStories.length ? (
          <div className="alumni-story-grid">
            {alumniStories.map((story) => (
              <Link key={story.slug} to="/alumni/$slug" params={{ slug: story.slug }} className="alumni-story-card">
                <span className="eyebrow">{story.category.toUpperCase()}</span>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="alumni-empty" role="status">
            <ShieldCheck size={25} strokeWidth={1.3} />
            <h3>No verified achievement stories</h3>
            <p>Professional, educational, and community achievements will be published only with credible support.</p>
          </div>
        )}
      </section>

      <section className="alumni-verification-strip">
        <div className="container">
          <ShieldCheck size={22} strokeWidth={1.3} />
          <div>
            <h2>History recorded with care</h2>
            <p>Names, dates, photographs, and achievements are not displayed until sufficiently verified. Statistics are omitted when verified records do not exist.</p>
          </div>
        </div>
      </section>

      <nav className="container alumni-bottom-nav" aria-label="Alumni archive navigation">
        <Link to="/" className="text-link"><ArrowLeft className="back-arrow" size={14} /> Back to Home</Link>
        <Link to="/leadership" className="text-link">Leadership <ArrowRight size={14} /></Link>
        <Link to="/events" className="text-link">Important Events <ArrowRight size={14} /></Link>
      </nav>
    </div>
  );
}
