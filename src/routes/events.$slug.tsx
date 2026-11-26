import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArchiveCollectionLinks,
  EventHeader,
  EventInformation,
  EventMediaGallery,
  EventSources,
  EventStory,
  RelatedDocuments,
  RelatedEvents,
} from "@/components/archive/events";
import { MissingRecord } from "@/components/archive/record-details";
import { archiveHead } from "@/lib/archive-data";
import { eventNeighbours, eventRecords } from "@/lib/events-data";
import { archiveImages } from "@/components/archive/images";

export const Route = createFileRoute("/events/$slug")({
  head: ({ params }) =>
    archiveHead(
      eventRecords.find((event) => event.slug === params.slug)?.title ?? "Event unavailable",
      "A GSP event collection topic awaiting verified historical records and source material.",
    ),
  component: EventDetails,
});

function EventDetails() {
  const { slug } = Route.useParams();
  const event = eventRecords.find((item) => item.slug === slug);
  if (!event) return <MissingEvent />;
  const { previous, next } = eventNeighbours(slug);

  return (
    <>
      <article className="container event-detail-page">
        <EventHeader event={event} />
        <figure className="event-detail-cover">
          <div className="event-detail-cover-placeholder">
            <img src={archiveImages.museumHall} alt="Museum exhibition hall" loading="lazy" />
            <span>MUSEUM COLLECTION · CONTEXT IMAGE</span>
          </div>
          <figcaption>
            <span>No event photograph has been supplied for this topic.</span>
            <span>Illustrative imagery is not used as historical evidence.</span>
          </figcaption>
        </figure>

        <div className="event-detail-layout">
          <aside className="record-aside event-detail-aside">
            <span className="eyebrow">ON THIS PAGE</span>
            <a href="#event-background">Event background</a>
            <a href="#historical-context">Historical context</a>
            <a href="#what-happened">What happened</a>
            <a href="#importance-to-gsp">Importance to GSP</a>
            <a href="#related-media">Related media</a>
            <a href="#related-documents">Related documents</a>
            <a href="#sources">Sources & references</a>
            <div className="aside-note">
              <ShieldCheck size={22} strokeWidth={1.3} />
              <p>Historical accounts belong beside the sources that support them.</p>
            </div>
          </aside>
          <div className="event-detail-content">
            <EventInformation event={event} />
            <EventStory event={event} />
            <EventMediaGallery />
            <RelatedDocuments />
            <EventSources />
          </div>
        </div>

        <nav className="event-navigation" aria-label="Event topic navigation">
          <div className="event-navigation-neighbor">
            {previous ? (
              <Link to="/events/$slug" params={{ slug: previous.slug }}>
                <span>
                  <ArrowLeft size={14} /> Previous topic
                </span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <span className="quiet-note">First collection topic</span>
            )}
          </div>
          <div className="event-navigation-actions">
            <Button asChild variant="editorial">
              <Link to="/events">
                <ArrowLeft size={14} /> Back to Important Events
              </Link>
            </Button>
            <Link to="/timeline" className="text-link">
              View Historical Timeline <ArrowRight size={14} />
            </Link>
          </div>
          <div className="event-navigation-neighbor event-navigation-next">
            {next ? (
              <Link to="/events/$slug" params={{ slug: next.slug }}>
                <span>
                  Next topic <ArrowRight size={14} />
                </span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <span className="quiet-note">Last collection topic</span>
            )}
          </div>
        </nav>
      </article>
      <RelatedEvents />
      <ArchiveCollectionLinks />
    </>
  );
}

function MissingEvent() {
  return (
    <section className="container placeholder-page">
      <CalendarDays size={34} className="text-primary" />
      <span className="eyebrow">GSP HISTORICAL ARCHIVE</span>
      <h1>Event record not found</h1>
      <p>This event is not part of the current collection topics. No event has been inferred.</p>
      <Button asChild variant="editorial">
        <Link to="/events">
          <ArrowLeft size={15} /> Back to Important Events
        </Link>
      </Button>
    </section>
  );
}
