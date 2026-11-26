import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  HandHeart,
  Landmark,
  LibraryBig,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { archiveImages } from "@/components/archive/images";
import { eventCategories, type EventCategory, type EventRecord } from "@/lib/events-data";

const categoryIcons = [
  Landmark,
  Sparkles,
  HandHeart,
  BookOpen,
  GraduationCap,
  CalendarDays,
  Users,
  LibraryBig,
];

export function EventsPageHeader() {
  return (
    <header className="events-page-header">
      <div className="container">
        <nav className="breadcrumb events-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ArrowRight size={12} />
          <span aria-current="page">Important Events</span>
        </nav>
        <span className="eyebrow">
          <span className="gold-rule" />
          GSP HISTORICAL ARCHIVE
        </span>
        <div className="events-title-row">
          <h1>Important Events in GSP History</h1>
          <p>
            Preserving documented institutional events with care. Each date and account belongs
            alongside the reliable sources that support it.
          </p>
        </div>
        <span className="events-header-note">
          <ShieldCheck size={15} /> Historical accuracy comes before chronology.
        </span>
      </div>
    </header>
  );
}

export function EventHeader({ event }: { event: EventRecord }) {
  return (
    <>
      <nav className="breadcrumb record-breadcrumb event-detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ArrowRight size={12} />
        <Link to="/events">Important Events</Link>
        <ArrowRight size={12} />
        <span aria-current="page">{event.title}</span>
      </nav>
      <header className="record-header">
        <span className="eyebrow">
          <span className="gold-rule" />
          {event.category.title}
        </span>
        <h1>{event.title}</h1>
        <p className="record-deck">{event.description}</p>
        <div className="record-metadata">
          <span>
            <CalendarDays size={14} /> Date or period unconfirmed
          </span>
          <span>
            <ShieldCheck size={14} /> Collection topic · not a verified event
          </span>
        </div>
      </header>
    </>
  );
}

export function FeaturedEvent() {
  return (
    <section className="featured-event" aria-labelledby="featured-event-title">
      <div className="featured-event-mark" aria-hidden="true">
        <img src={archiveImages.museumGallery} alt="" loading="lazy" />
      </div>
      <div className="featured-event-copy">
        <span className="eyebrow">FEATURED EVENT</span>
        <h2 id="featured-event-title">A featured event is yet to be verified.</h2>
        <p>
          No event with confirmed source material is available to feature. We’ll share a record here
          when its history and supporting evidence have been reviewed.
        </p>
        <a className="text-link" href="#event-records">
          Explore collection topics <ArrowRight size={14} />
        </a>
      </div>
      <span className="featured-event-status">
        <ShieldCheck size={14} /> No verified featured event
      </span>
    </section>
  );
}

export function EventCategoryCard({
  category,
  index,
  selected,
  onSelect,
}: {
  category: EventCategory;
  index: number;
  selected: boolean;
  onSelect: (slug: string) => void;
}) {
  const Icon = categoryIcons[index] ?? CalendarDays;
  return (
    <button
      className={`event-category-card${selected ? " is-selected" : ""}`}
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(selected ? "all" : category.slug)}
    >
      <span className="event-category-icon">
        <Icon size={22} strokeWidth={1.4} />
      </span>
      <span className="event-category-title">{category.title}</span>
      <span className="event-category-description">{category.description}</span>
      <span className="event-category-action">
        Browse topic <ArrowUpRight size={13} />
      </span>
    </button>
  );
}

export function EventCard({ event }: { event: EventRecord }) {
  return (
    <article className="event-card">
      <Link
        to="/events/$slug"
        params={{ slug: event.slug }}
        className="event-card-link"
        aria-label={`Read collection preview: ${event.title}`}
      >
        <div className="event-card-image" aria-hidden="true">
          <img
            src={
              event.category.slug === "genocide-remembrance"
                ? archiveImages.museumExhibit
                : event.category.slug === "historical-milestones"
                  ? archiveImages.museumHall
                  : archiveImages.museumArchive
            }
            alt=""
            loading="lazy"
          />
          <span>MUSEUM COLLECTION</span>
        </div>
        <div className="event-card-body">
          <div className="event-card-meta">
            <span className="event-category-badge">{event.category.title}</span>
            <span>{event.year ?? "Date unconfirmed"}</span>
          </div>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <span className="event-preview-label">Collection topic · not a verified event</span>
          <span className="text-link">
            Read collection preview <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function EventGrid({
  events,
  page,
  pageSize,
  onPageChange,
}: {
  events: EventRecord[];
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) {
  const pageCount = Math.ceil(events.length / pageSize);
  const visibleEvents = events.slice((page - 1) * pageSize, page * pageSize);
  if (!events.length) {
    return (
      <div className="empty-state event-empty-state">
        <CalendarDays size={31} strokeWidth={1.2} />
        <h2>No matching collection topics</h2>
        <p>
          There are no verified event records for this selection. Try another category or search.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="event-grid">
        {visibleEvents.map((event) => (
          <EventCard event={event} key={event.slug} />
        ))}
      </div>
      {pageCount > 1 && (
        <nav className="event-pagination" aria-label="Collection topic pages">
          <Button
            variant="editorial"
            size="sm"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ArrowLeft size={14} /> Previous
          </Button>
          <span aria-live="polite">
            Page {page} of {pageCount}
          </span>
          <Button
            variant="editorial"
            size="sm"
            disabled={page === pageCount}
            onClick={() => onPageChange(page + 1)}
          >
            Next <ArrowRight size={14} />
          </Button>
        </nav>
      )}
    </>
  );
}

export function EventFilters({
  query,
  category,
  year,
  order,
  onChange,
}: {
  query: string;
  category: string;
  year: string;
  order: "newest" | "oldest";
  onChange: (value: {
    q?: string;
    category?: string;
    year?: string;
    order?: "newest" | "oldest";
  }) => void;
}) {
  return (
    <div className="filter-bar event-filters">
      <label className="search-field">
        <Search size={17} />
        <input
          aria-label="Search events by title or keyword"
          placeholder="Search events or keywords…"
          value={query}
          onChange={(event) => onChange({ q: event.target.value })}
        />
        {query && (
          <Button
            size="icon"
            variant="ghost"
            aria-label="Clear event search"
            onClick={() => onChange({ q: "" })}
          >
            <X size={14} />
          </Button>
        )}
      </label>
      <label className="filter-select">
        <CalendarDays size={15} />
        <select
          aria-label="Filter events by category"
          value={category}
          onChange={(event) => onChange({ category: event.target.value })}
        >
          <option value="all">All categories</option>
          {eventCategories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <select
        className="period-select"
        aria-label="Filter events by year"
        value={year}
        onChange={(event) => onChange({ year: event.target.value })}
      >
        <option value="all">All years</option>
        <option value="undated">Year unconfirmed</option>
      </select>
      <select
        className="period-select event-sort"
        aria-label="Sort events by date"
        value={order}
        onChange={(event) =>
          onChange({ order: event.target.value === "oldest" ? "oldest" : "newest" })
        }
      >
        <option value="newest">Newest to oldest</option>
        <option value="oldest">Oldest to newest</option>
      </select>
    </div>
  );
}

export function EventStory({ event }: { event: EventRecord }) {
  return (
    <div className="record-prose event-story">
      <div className="verification-note">
        <ShieldCheck size={19} />
        <p>
          <strong>Collection topic only — not a verified historical event.</strong> No event
          account, date, participants, or outcomes have been confirmed for this topic.
        </p>
      </div>
      <section id="event-background">
        <span className="eyebrow">01 / EVENT BACKGROUND</span>
        <h2>A topic awaiting historical records</h2>
        <p>
          “{event.title}” is a collection topic reserved for future research in{" "}
          {event.category.title.toLocaleLowerCase()}. It does not confirm that a particular event
          occurred.
        </p>
      </section>
      <section id="historical-context">
        <span className="eyebrow">02 / HISTORICAL CONTEXT</span>
        <h2>Context will follow the evidence</h2>
        <p>
          No verified historical context has been supplied. The archive will add an account only
          after relevant records have been identified and reviewed.
        </p>
      </section>
      <section id="what-happened">
        <span className="eyebrow">03 / WHAT HAPPENED</span>
        <h2>No event details confirmed</h2>
        <p>
          What happened, when it happened, and who was involved are not established in the materials
          currently available. No quotation or testimony is presented here.
        </p>
      </section>
      <section id="importance-to-gsp">
        <span className="eyebrow">04 / IMPORTANCE TO GSP</span>
        <h2>Why reliable documentation matters</h2>
        <p>
          Documenting institutional history requires clear provenance and careful verification. This
          placeholder makes room for that work without treating an unverified topic as fact.
        </p>
      </section>
    </div>
  );
}

export function EventInformation({ event }: { event: EventRecord }) {
  return (
    <aside className="event-information">
      <span className="eyebrow">EVENT INFORMATION</span>
      <dl>
        <div>
          <dt>Date or period</dt>
          <dd>{event.year ?? "Not confirmed"}</dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{event.category.title}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>Not documented</dd>
        </div>
        <div>
          <dt>Related period</dt>
          <dd>Not established</dd>
        </div>
        <div>
          <dt>Leadership period</dt>
          <dd>Not verified</dd>
        </div>
        <div>
          <dt>Verification</dt>
          <dd>Topic preview · sources pending</dd>
        </div>
      </dl>
      <p>
        <MapPin size={14} /> No event location has been verified.
      </p>
    </aside>
  );
}

export function EventMediaGallery() {
  return (
    <section className="event-detail-section" id="related-media">
      <span className="eyebrow">RELATED PHOTOGRAPHS & VIDEOS</span>
      <h2>No verified media available</h2>
      <p>
        No photographs or videos have been supplied for this topic. Illustrative archive images are
        not used as historical evidence.
      </p>
    </section>
  );
}

export function RelatedDocuments() {
  return (
    <section className="event-detail-section" id="related-documents">
      <span className="eyebrow">RELATED DOCUMENTS</span>
      <h2>Supporting records</h2>
      <p>
        No reports, official records, publications, or letters are currently available for this
        topic.
      </p>
      <span className="event-empty-note">
        <FileText size={15} /> Documents awaiting review
      </span>
    </section>
  );
}

export function EventSources() {
  return (
    <section className="record-sources" id="sources">
      <span className="eyebrow">
        <ShieldCheck size={16} /> SOURCES & REFERENCES
      </span>
      <h2>The record behind the event</h2>
      <p>No historical sources have been supplied for this collection topic.</p>
      <dl className="source-register">
        <div>
          <dt>Source title</dt>
          <dd>Not yet supplied</dd>
        </div>
        <div>
          <dt>Source type</dt>
          <dd>Not established</dd>
        </div>
        <div>
          <dt>Institution or contributor</dt>
          <dd>Not identified</dd>
        </div>
        <div>
          <dt>Document date</dt>
          <dd>Not available</dd>
        </div>
        <div>
          <dt>Verification information</dt>
          <dd>Awaiting source review</dd>
        </div>
        <div>
          <dt>Reference link</dt>
          <dd>No verified reference available</dd>
        </div>
      </dl>
    </section>
  );
}

export function RelatedEvents() {
  return (
    <section className="related-events">
      <span className="eyebrow">RELATED EVENTS</span>
      <h2>No verified related events yet</h2>
      <p>Related events will appear here only when their historical connection is documented.</p>
    </section>
  );
}

export function ArchiveCollectionLinks() {
  return (
    <section className="related-collections section-space">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" />
              CONTINUE EXPLORING
            </span>
            <h2>Related archive collections</h2>
          </div>
        </div>
        <div className="related-collection-links">
          <Link to="/our-history">
            Our History <ArrowUpRight size={14} />
          </Link>
          <Link to="/timeline">
            Historical Timeline <ArrowUpRight size={14} />
          </Link>
          <Link to="/archive/$collection" params={{ collection: "leadership" }}>
            Leadership History <ArrowUpRight size={14} />
          </Link>
          <Link to="/archive/$collection" params={{ collection: "gallery" }}>
            Gallery <ArrowUpRight size={14} />
          </Link>
          <Link to="/documents">
            Documents Archive <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
