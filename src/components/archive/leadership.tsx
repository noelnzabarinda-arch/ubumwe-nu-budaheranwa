import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { Leader } from "@/lib/leadership-data";
import { leaderPeriodLabel } from "@/lib/leadership-data";

export function LeaderPortrait({ leader, large = false }: { leader: Leader; large?: boolean }) {
  return (
    <div className={large ? "leader-portrait leader-portrait-large" : "leader-portrait"}>
      {leader.portrait ? (
        <img src={leader.portrait} alt={`${leader.name} portrait`} loading="lazy" />
      ) : (
        <div aria-label="Portrait not yet available" role="img">
          <UserRound size={large ? 54 : 34} strokeWidth={1} aria-hidden="true" />
          <span>PORTRAIT AWAITING VERIFICATION</span>
        </div>
      )}
    </div>
  );
}

export function CurrentLeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="current-leader-card">
      <LeaderPortrait leader={leader} large />
      <div className="current-leader-copy">
        <span className="eyebrow">
          <span className="gold-rule" /> CURRENT HEADMASTER
        </span>
        <h2>{leader.name}</h2>
        <p className="leader-position">{leader.title}</p>
        <p>{leader.introduction}</p>
        <div className="leader-card-meta">
          <span>
            <CalendarDays size={14} /> {leaderPeriodLabel(leader)}
          </span>
          <span>
            <ShieldCheck size={14} /> Name and dates not provided
          </span>
        </div>
        <Link className="text-link" to="/leadership/$slug" params={{ slug: leader.slug }}>
          View Full Profile <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function FormerLeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="former-leader-card">
      <LeaderPortrait leader={leader} />
      <div className="former-leader-copy">
        <span className="eyebrow">FORMER LEADER</span>
        <h3>{leader.name}</h3>
        <p className="leader-position">{leader.title}</p>
        <p>{leader.introduction}</p>
        <span className="leader-period">{leaderPeriodLabel(leader)}</span>
        <Link className="text-link" to="/leadership/$slug" params={{ slug: leader.slug }}>
          View Profile <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function LeaderGrid({ leaders }: { leaders: Leader[] }) {
  if (leaders.length === 0) {
    return (
      <div className="leadership-empty" role="status">
        <ShieldCheck size={25} strokeWidth={1.3} />
        <h3>No matching former leaders</h3>
        <p>No former leader portraits match these filters.</p>
      </div>
    );
  }
  return (
    <div className="leader-grid">
      {leaders.map((leader) => (
        <FormerLeaderCard key={leader.slug} leader={leader} />
      ))}
    </div>
  );
}

export function LeaderFilters({
  query,
  status,
  period,
  order,
  onQueryChange,
  onStatusChange,
  onPeriodChange,
  onOrderChange,
  onReset,
}: {
  query: string;
  status: string;
  period: string;
  order: string;
  onQueryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
  onOrderChange: (value: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="filter-bar leadership-filters">
      <label className="search-field">
        <span className="sr-only">Search leaders by name</span>
        <input
          aria-label="Search leaders by name"
          placeholder="Search leaders by name…"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <label className="filter-select">
        <span className="sr-only">Filter by leadership status</span>
        <select
          aria-label="Filter by leadership status"
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="all">Current & former</option>
          <option value="current">Current</option>
          <option value="former">Former</option>
        </select>
      </label>
      <label className="filter-select">
        <span className="sr-only">Filter by leadership period</span>
        <select
          aria-label="Filter by leadership period"
          value={period}
          onChange={(event) => onPeriodChange(event.target.value)}
        >
          <option value="all">All periods</option>
          <option value="unverified">Period unverified</option>
        </select>
      </label>
      <label className="filter-select">
        <span className="sr-only">Sort leadership periods</span>
        <select
          aria-label="Sort leadership periods"
          value={order}
          onChange={(event) => onOrderChange(event.target.value)}
        >
          <option value="oldest">Oldest to newest</option>
          <option value="newest">Newest to oldest</option>
        </select>
      </label>
      <button className="leadership-reset" type="button" onClick={onReset}>
        Reset filters
      </button>
    </div>
  );
}

export function LeaderProfileHeader({ leader }: { leader: Leader }) {
  return (
    <>
      <nav className="breadcrumb record-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ArrowRight size={12} />
        <Link to="/leadership">Leadership</Link>
        <ArrowRight size={12} />
        <span aria-current="page">{leader.name}</span>
      </nav>
      <header className="leader-profile-header">
        <LeaderPortrait leader={leader} large />
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> PROFILE AWAITING VERIFICATION
          </span>
          <h1>{leader.name}</h1>
          <p className="leader-position">{leader.title}</p>
          <p>{leader.introduction}</p>
          <div className="leader-card-meta">
            <span>
              <CalendarDays size={14} /> {leaderPeriodLabel(leader)}
            </span>
            <span>
              <ShieldCheck size={14} /> Verification pending
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export function BiographySection({ leader }: { leader: Leader }) {
  return (
    <section className="leadership-detail-section">
      <span className="eyebrow">01 / BIOGRAPHY</span>
      <h2>A biography to be documented</h2>
      {leader.biography.length ? (
        leader.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      ) : (
        <p>
          No verified biographical, educational, or professional information has been provided.
          Personal details will be added only when supported by appropriate public sources.
        </p>
      )}
    </section>
  );
}

export function LeadershipContributions() {
  return (
    <section className="leadership-detail-section">
      <span className="eyebrow">02 / LEADERSHIP CONTRIBUTIONS</span>
      <h2>Developments & contributions</h2>
      <p>
        No institutional developments, decisions, initiatives, or achievements have been verified
        for this leadership record.
      </p>
    </section>
  );
}

export function LeadershipTimeline({ leader }: { leader: Leader }) {
  return (
    <section className="leadership-detail-section">
      <span className="eyebrow">03 / SERVICE TIMELINE</span>
      <h2>Service, in the historical record</h2>
      <div className="leadership-timeline-note">
        <CalendarDays size={18} />
        <p>
          {leaderPeriodLabel(leader)}. No appointment date or service events are documented on this
          profile.
        </p>
      </div>
    </section>
  );
}

export function RelatedEvents() {
  return (
    <section className="leadership-detail-section">
      <span className="eyebrow">04 / RELATED HISTORICAL EVENTS</span>
      <h2>Events connected to this period</h2>
      <p>
        No verified historical events are currently linked to this leadership period. Explore the{" "}
        <Link to="/timeline" className="inline-archive-link">
          Historical Timeline
        </Link>{" "}
        for dated archive records as they become available.
      </p>
    </section>
  );
}

export function LeadershipSources() {
  return (
    <section className="leadership-detail-section leadership-sources">
      <span className="eyebrow">
        <FileText size={14} /> DOCUMENTS & REFERENCES
      </span>
      <h2>Sources behind this profile</h2>
      <p>
        No official records, historical reports, institutional publications, or permission-cleared
        photographs have been supplied for this profile.
      </p>
      <span className="leader-period">Source review pending · No materials cited</span>
    </section>
  );
}

export function LeaderNavigation({
  previous,
  next,
  related,
}: {
  previous: Leader | undefined;
  next: Leader | undefined;
  related: Leader[];
}) {
  return (
    <section className="leader-navigation-section">
      <div className="leader-neighbour-links">
        {previous ? (
          <Link to="/leadership/$slug" params={{ slug: previous.slug }} className="text-link">
            <ArrowLeft size={14} /> Previous leader
          </Link>
        ) : (
          <span className="leader-period">No previous verified profile</span>
        )}
        {next ? (
          <Link to="/leadership/$slug" params={{ slug: next.slug }} className="text-link">
            Next leader <ArrowRight size={14} />
          </Link>
        ) : (
          <span className="leader-period">No next verified profile</span>
        )}
      </div>
      <h2>Other leaders</h2>
      {related.length ? (
        <div className="leader-related-list">
          {related.map((leader) => (
            <Link key={leader.slug} to="/leadership/$slug" params={{ slug: leader.slug }}>
              {leader.name} <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No other verified leader profiles are available yet.</p>
      )}
    </section>
  );
}
