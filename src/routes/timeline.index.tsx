import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Archive,
  CalendarDays,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecordBreadcrumb } from "@/components/archive/record-details";
import { archiveHead } from "@/lib/archive-data";
import { filterTimeline, timelineCategories, timelineEntries } from "@/lib/timeline-data";

type TimelineSearch = { q?: string; category?: string; order?: string };

export const Route = createFileRoute("/timeline/")({
  validateSearch: (search: Record<string, unknown>): TimelineSearch => ({
    ...(typeof search["q"] === "string" && search["q"] ? { q: search["q"] } : {}),
    ...(typeof search["category"] === "string" && search["category"]
      ? { category: search["category"] }
      : {}),
    ...(search["order"] === "newest" ? { order: "newest" } : {}),
  }),
  head: () =>
    archiveHead(
      "Historical Timeline",
      "Follow the historical journey of GSP through carefully sourced records. Explore text-only collection previews while verified dates and events are gathered.",
    ),
  component: HistoricalTimeline,
});

function HistoricalTimeline() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const query = search.q ?? "";
  const category = search.category ?? "all";
  const order = search.order === "newest" ? "newest" : "oldest";
  const results = filterTimeline(timelineEntries, query, category, order);
  const hasFilters = Boolean(query || category !== "all" || order !== "oldest");
  const reset = () => void navigate({ to: ".", search: {}, replace: true, resetScroll: false });
  const update = (value: TimelineSearch) =>
    void navigate({
      to: ".",
      search: (prev) => ({ ...prev, ...value }),
      replace: true,
      resetScroll: false,
    });
  return (
    <div className="timeline-page">
      <header className="timeline-page-header">
        <div className="container">
          <RecordBreadcrumb timeline />
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <div className="timeline-title-row">
            <h1>
              The Journey
              <br />
              <em>Through Time</em>
            </h1>
            <div>
              <p>
                A shared history, carefully documented. Bringing together the dates, records, and
                recollections that will trace the journey of Groupe Scolaire des Parents.
              </p>
              <span className="timeline-header-status">
                <ShieldCheck size={15} /> Guided by sources. Preserved with care.
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="container timeline-workspace" aria-label="Historical timeline">
        <div className="filter-bar timeline-filters">
          <label className="search-field">
            <Search size={17} />
            <input
              aria-label="Search timeline by year or keyword"
              placeholder="Search by year or keyword…"
              value={query}
              onChange={(e) => update({ q: e.target.value })}
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Clear timeline search"
                onClick={() => update({ q: "" })}
              >
                <X size={14} />
              </Button>
            )}
          </label>
          <label className="filter-select">
            <SlidersHorizontal size={15} />
            <select
              aria-label="Filter timeline by category"
              value={category}
              onChange={(e) => update({ category: e.target.value })}
            >
              <option value="all">All categories</option>
              {timelineCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <select
            className="period-select"
            aria-label="Chronological order"
            value={order}
            onChange={(e) => update({ order: e.target.value })}
          >
            <option value="oldest">Oldest to newest</option>
            <option value="newest">Newest to oldest</option>
          </select>
        </div>
        <div className="results-bar" aria-live="polite">
          <span>
            {results.length} collection {results.length === 1 ? "preview" : "previews"} · 0 verified
            events
          </span>
          {hasFilters && (
            <Button variant="link" size="sm" onClick={reset}>
              Reset filters <X size={12} />
            </Button>
          )}
          <span>Undated previews are not placed in historical order</span>
        </div>
        <div className="timeline-main-layout">
          <aside className="timeline-context">
            <span className="eyebrow">THE HISTORICAL RECORD</span>
            <h2>
              Every date
              <br /> needs a source.
            </h2>
            <p>
              Verified dates and events are not yet available. These collection topics show where
              future records may belong; they are not historical milestones.
            </p>
            <dl>
              <div>
                <dt>Verified events</dt>
                <dd>00</dd>
              </div>
              <div>
                <dt>Collection previews</dt>
                <dd>06</dd>
              </div>
            </dl>
            <Link to="/our-history" className="text-link">
              Explore our stories <ArrowRight size={14} />
            </Link>
          </aside>
          <div>
            <div className="timeline-awaiting">
              <Archive size={23} strokeWidth={1.3} />
              <div>
                <h2>The timeline is taking shape.</h2>
                <p>
                  Historical records are being collected and verified. No founding year, event date,
                  or leadership period is confirmed here.
                </p>
              </div>
            </div>
            {results.length ? (
              <ol className="vertical-timeline">
                {results.map((entry, index) => (
                  <li className="chronicle-entry" key={entry.slug}>
                    <div className="chronicle-period">
                      <span>UNDATED</span>
                      <small>To be verified</small>
                    </div>
                    <article className="chronicle-content">
                      <div className="chronicle-meta">
                        <span>{entry.category}</span>
                        <span>PREVIEW {String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h2>{entry.title}</h2>
                      <p>{entry.description}</p>
                      <Link
                        className="text-link"
                        to="/timeline/$year"
                        params={{ year: entry.slug }}
                      >
                        Explore Details <ArrowRight size={14} />
                      </Link>
                    </article>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="empty-state">
                <CalendarDays size={30} strokeWidth={1.2} />
                <h2>No matching collection previews</h2>
                <p>
                  No verified events are available for this search. Try a different keyword or
                  category.
                </p>
                <Button variant="editorial" onClick={reset}>
                  Clear filters <X size={14} />
                </Button>
              </div>
            )}
          </div>
        </div>
        <nav className="timeline-bottom-nav" aria-label="Timeline navigation">
          <Link to="/" className="text-link">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <Link
            to="/archive/$collection"
            params={{ collection: "leadership" }}
            className="text-link"
          >
            Leadership History <ArrowRight size={14} />
          </Link>
        </nav>
      </section>
    </div>
  );
}
