import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, ShieldCheck, UserRound } from "lucide-react";
import type { AlumniProfile, AlumniStory } from "@/lib/alumni-data";
import { alumniYearLabel } from "@/lib/alumni-data";

export function AlumniPortrait({ large = false }: { large?: boolean }) {
  return (
    <div
      className={large ? "alumni-portrait alumni-portrait-large" : "alumni-portrait"}
      role="img"
      aria-label="Portrait not yet available"
    >
      <UserRound size={large ? 54 : 34} strokeWidth={1} aria-hidden="true" />
      <span>PORTRAIT AWAITING VERIFICATION</span>
    </div>
  );
}

export function AlumniCard({ profile }: { profile: AlumniProfile }) {
  return (
    <article className="alumni-card">
      <AlumniPortrait />
      <div className="alumni-card-copy">
        <span className="eyebrow">
          {profile.category === "former-student" ? "FORMER STUDENT" : "FORMER TEACHER & STAFF"}
        </span>
        <h3>{profile.name}</h3>
        <p className="alumni-card-position">
          {profile.category === "former-student" ? profile.program : profile.position}
        </p>
        <p>{profile.introduction}</p>
        <span className="alumni-card-year">
          <CalendarDays size={13} /> {alumniYearLabel(profile)}
        </span>
        {profile.verified ? (
          <Link className="text-link" to="/alumni/$slug" params={{ slug: profile.slug }}>
            View Profile <ArrowUpRight size={14} />
          </Link>
        ) : (
          <span className="alumni-unverified">Record unverified</span>
        )}
      </div>
    </article>
  );
}

export function AlumniGrid({ profiles }: { profiles: AlumniProfile[] }) {
  if (profiles.length === 0) {
    return (
      <div className="alumni-empty" role="status">
        <ShieldCheck size={25} strokeWidth={1.3} />
        <h3>No verified profiles available</h3>
        <p>Names and biographies will appear here only after historical records are verified.</p>
      </div>
    );
  }
  return (
    <div className="alumni-grid">
      {profiles.map((profile) => (
        <AlumniCard key={profile.slug} profile={profile} />
      ))}
    </div>
  );
}

export function AlumniFilters({
  query,
  category,
  year,
  program,
  order,
  years,
  programs,
  onQueryChange,
  onCategoryChange,
  onYearChange,
  onProgramChange,
  onOrderChange,
  onReset,
}: {
  query: string;
  category: "all" | "former-student" | "former-staff";
  year: "all" | "unverified" | string;
  program: "all" | "unverified" | string;
  order: "alphabetical" | "chronological";
  years: string[];
  programs: string[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onProgramChange: (value: string) => void;
  onOrderChange: (value: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="filter-bar alumni-filters">
      <label className="search-field">
        <span className="sr-only">Search alumni by name</span>
        <input
          aria-label="Search alumni by name"
          placeholder="Search by name…"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <label className="filter-select">
        <span className="sr-only">Filter by category</span>
        <select aria-label="Filter by category" value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="all">All categories</option>
          <option value="former-student">Former Students</option>
          <option value="former-staff">Former Teachers & Staff</option>
        </select>
      </label>
      <label className="filter-select">
        <span className="sr-only">Filter by graduation year</span>
        <select aria-label="Filter by graduation year" value={year} onChange={(event) => onYearChange(event.target.value)}>
          <option value="all">All graduation years</option>
          {years.map((item) => <option key={item} value={item}>{item}</option>)}
          <option value="unverified">Year unverified</option>
        </select>
      </label>
      <label className="filter-select">
        <span className="sr-only">Filter by class or program</span>
        <select aria-label="Filter by class or program" value={program} onChange={(event) => onProgramChange(event.target.value)}>
          <option value="all">All classes & programs</option>
          {programs.map((item) => <option key={item} value={item}>{item}</option>)}
          <option value="unverified">Program unverified</option>
        </select>
      </label>
      <label className="filter-select">
        <span className="sr-only">Sort alumni</span>
        <select aria-label="Sort alumni" value={order} onChange={(event) => onOrderChange(event.target.value)}>
          <option value="alphabetical">Alphabetical</option>
          <option value="chronological">Chronological</option>
        </select>
      </label>
      <button className="alumni-reset" type="button" onClick={onReset}>Reset filters</button>
    </div>
  );
}

export function AlumniStoryCard({ story }: { story: AlumniStory }) {
  return (
    <article className="alumni-story-card">
      <span className="eyebrow">{story.category.toUpperCase()}</span>
      <h3>{story.title}</h3>
      <p>{story.summary}</p>
      {story.verified ? (
        <Link className="text-link" to="/alumni/$slug" params={{ slug: story.slug }}>
          Read Story <ArrowRight size={14} />
        </Link>
      ) : (
        <span className="alumni-unverified">Story awaiting verification</span>
      )}
    </article>
  );
}

export function AlumniProfileHeader({ profile }: { profile: AlumniProfile }) {
  return (
    <>
      <nav className="breadcrumb record-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ArrowRight size={12} />
        <Link to="/alumni">Alumni</Link>
        <ArrowRight size={12} />
        <span aria-current="page">{profile.name}</span>
      </nav>
      <header className="alumni-profile-header">
        <AlumniPortrait large />
        <div>
          <span className="eyebrow"><span className="gold-rule" /> PROFILE STATUS: UNVERIFIED</span>
          <h1>{profile.name}</h1>
          <p className="alumni-profile-category">
            {profile.category === "former-student"
              ? "Former Student"
              : profile.category === "former-staff"
                ? "Former Teacher & Staff"
                : "Record awaiting verification"}
          </p>
          <p>{profile.introduction}</p>
          <div className="alumni-profile-meta">
            <span><CalendarDays size={14} /> {alumniYearLabel(profile)}</span>
            {profile.program && <span>{profile.program}</span>}
            {profile.position && <span>{profile.position}</span>}
            <span><ShieldCheck size={14} /> Verification required</span>
          </div>
        </div>
      </header>
    </>
  );
}

export function AlumniDetailSection({
  number,
  eyebrow,
  title,
  paragraphs,
  items,
}: {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}) {
  return (
    <section className="alumni-detail-section">
      <span className="eyebrow">{number} / {eyebrow}</span>
      <h2>{title}</h2>
      {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {items && items.length > 0 ? (
        <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
      ) : (
        <p>No verified information is currently available.</p>
      )}
    </section>
  );
}

export function AlumniMediaGallery() {
  return (
    <section className="alumni-detail-section">
      <span className="eyebrow">05 / HISTORICAL PHOTOGRAPHS</span>
      <h2>Photographs & visual records</h2>
      <div className="alumni-media-empty">
        <UserRound size={28} strokeWidth={1.2} />
        <p>No permission-cleared photographs are available. Images will include captions, dates, and sources when verified.</p>
      </div>
    </section>
  );
}

export function AlumniSources() {
  return (
    <section className="alumni-detail-section">
      <span className="eyebrow">06 / DOCUMENTS & REFERENCES</span>
      <h2>Supporting historical records</h2>
      <p>No supporting documents or references have been verified for this profile.</p>
    </section>
  );
}

export function AlumniProfileNavigation({
  previous,
  next,
  related,
}: {
  previous?: AlumniProfile;
  next?: AlumniProfile;
  related: AlumniProfile[];
}) {
  return (
    <section className="alumni-detail-section alumni-profile-navigation">
      <span className="eyebrow">07 / RELATED PEOPLE & NAVIGATION</span>
      <h2>Continue through the alumni archive</h2>
      {related.length > 0 && (
        <div className="alumni-related-grid">
          {related.map((profile) => (
            <Link key={profile.slug} to="/alumni/$slug" params={{ slug: profile.slug }}>
              {profile.name} <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
      )}
      <div className="alumni-prev-next">
        {previous ? (
          <Link to="/alumni/$slug" params={{ slug: previous.slug }}>
            <ArrowLeft size={14} /> Previous Profile
          </Link>
        ) : <span />}
        {next ? (
          <Link to="/alumni/$slug" params={{ slug: next.slug }}>
            Next Profile <ArrowRight size={14} />
          </Link>
        ) : <span />}
      </div>
    </section>
  );
}
