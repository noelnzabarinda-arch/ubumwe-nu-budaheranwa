import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArchiveCollectionLinks,
  EventCategoryCard,
  EventFilters,
  EventGrid,
  EventsPageHeader,
  FeaturedEvent,
} from "@/components/archive/events";
import { archiveHead } from "@/lib/archive-data";
import { eventCategories, eventRecords, filterEventRecords } from "@/lib/events-data";

type EventSearch = {
  q?: string;
  category?: string;
  year?: string;
  order?: "newest" | "oldest";
  page?: number;
};

const pageSize = 4;

export const Route = createFileRoute("/events/")({
  validateSearch: (search: Record<string, unknown>): EventSearch => ({
    ...(typeof search["q"] === "string" && search["q"] ? { q: search["q"] } : {}),
    ...(typeof search["category"] === "string" && search["category"]
      ? { category: search["category"] }
      : {}),
    ...(typeof search["year"] === "string" && search["year"] ? { year: search["year"] } : {}),
    ...(search["order"] === "oldest" ? { order: "oldest" } : {}),
    ...(typeof search["page"] === "number" && search["page"] > 1
      ? { page: Math.floor(search["page"]) }
      : {}),
  }),
  head: () =>
    archiveHead(
      "Important Events",
      "Explore GSP event collection topics. Historical dates and event accounts appear only when supported by verified records.",
    ),
  component: ImportantEvents,
});

function ImportantEvents() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const query = search.q ?? "";
  const category = search.category ?? "all";
  const year = search.year ?? "all";
  const order = search.order ?? "newest";
  const page = search.page ?? 1;
  const results = useMemo(
    () => filterEventRecords(eventRecords, query, category, year, order),
    [query, category, year, order],
  );
  const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const hasFilters = Boolean(query || category !== "all" || year !== "all" || order !== "newest");
  const update = (value: EventSearch) =>
    void navigate({
      to: ".",
      search: (previous) => {
        const next = { ...previous, ...value };
        delete next.page;
        return next;
      },
      replace: true,
      resetScroll: false,
    });
  const selectCategory = (value: string) => {
    void navigate({
      to: ".",
      search: (previous) => {
        const next = { ...previous };
        delete next.page;
        if (value === "all") delete next.category;
        else next.category = value;
        return next;
      },
      replace: true,
      resetScroll: false,
    });
    document.getElementById("event-records")?.scrollIntoView({ behavior: "smooth" });
  };
  const reset = () => void navigate({ to: ".", search: {}, replace: true, resetScroll: false });

  return (
    <>
      <EventsPageHeader />
      <section className="container events-feature-section">
        <FeaturedEvent />
      </section>

      <section
        className="event-categories-section section-space"
        aria-labelledby="event-categories-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" />
                BROWSE BY SUBJECT
              </span>
              <h2 id="event-categories-title">Explore event categories</h2>
            </div>
            <span className="collection-status">
              <ShieldCheck size={14} /> Categories are not event records
            </span>
          </div>
          <div className="event-category-grid">
            {eventCategories.map((item, index) => (
              <EventCategoryCard
                category={item}
                index={index}
                selected={category === item.slug}
                onSelect={selectCategory}
                key={item.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="events-collection-section section-space" id="event-records">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" />
                THE COLLECTION
              </span>
              <h2>Events and collection topics</h2>
            </div>
            <span className="collection-status">
              <ShieldCheck size={14} /> No confirmed event records available
            </span>
          </div>
          <EventFilters
            query={query}
            category={category}
            year={year}
            order={order}
            onChange={update}
          />
          <div className="results-bar" aria-live="polite">
            <span>
              {results.length} collection{" "}
              {results.length === 1 ? "topic preview" : "topic previews"} ·{" "}
              {results.filter((item) => item.verified).length} verified events
            </span>
            {hasFilters && (
              <Button variant="link" size="sm" onClick={reset}>
                Clear filters
              </Button>
            )}
            <span>Undated topics are not presented as historical events</span>
          </div>
          <EventGrid
            events={results}
            page={currentPage}
            pageSize={pageSize}
            onPageChange={(nextPage) =>
              void navigate({
                to: ".",
                search: (previous) => {
                  const next = { ...previous };
                  if (nextPage > 1) next.page = nextPage;
                  else delete next.page;
                  return next;
                },
                replace: true,
                resetScroll: false,
              })
            }
          />
        </div>
      </section>

      <section className="container events-overview section-space">
        <div className="events-overview-mark">
          <BookOpen size={26} strokeWidth={1.2} />
        </div>
        <div>
          <span className="eyebrow">A CAREFULLY DOCUMENTED HISTORY</span>
          <h2>Events are organized around evidence.</h2>
          <p>
            This collection is prepared to group records by subject, date, and documented context.
            Topics shown here are placeholders, not evidence that an event took place. Dates,
            accounts, and connections will be added only when reliable sources have been reviewed.
          </p>
          <Link to="/timeline" className="text-link">
            Explore the Historical Timeline <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <ArchiveCollectionLinks />
    </>
  );
}
