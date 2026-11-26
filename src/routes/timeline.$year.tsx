import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MissingRecord,
  RecordBreadcrumb,
  VerificationSection,
} from "@/components/archive/record-details";
import { archiveHead } from "@/lib/archive-data";
import { timelineEntries } from "@/lib/timeline-data";

export const Route = createFileRoute("/timeline/$year")({
  head: ({ params }) =>
    archiveHead(
      `${timelineEntries.find((entry) => entry.slug === params.year)?.title ?? "Entry unavailable"} — Timeline`,
      "A text-only GSP timeline collection preview. Historical dates, events, leadership, and references await verification.",
    ),
  component: TimelineDetails,
});

function TimelineDetails() {
  const { year } = Route.useParams();
  const entry = timelineEntries.find((item) => item.slug === year);
  if (!entry) return <MissingRecord timeline />;
  return (
    <article className="container timeline-detail history-record">
      <RecordBreadcrumb timeline>{entry.title}</RecordBreadcrumb>
      <header className="record-header">
        <span className="eyebrow">
          <span className="gold-rule" />
          {entry.category}
        </span>
        <h1>{entry.title}</h1>
        <p className="record-deck">{entry.description}</p>
        <div className="record-metadata">
          <span>
            <CalendarDays size={14} /> Period unconfirmed
          </span>
          <span>
            <ShieldCheck size={14} /> Undated collection preview
          </span>
        </div>
      </header>
      <div className="timeline-detail-prose record-prose">
        <div className="verification-note">
          <ShieldCheck size={19} />
          <p>
            <strong>Not a verified historical event.</strong> This is a collection topic reserved
            for future records. No year or period has been assigned.
          </p>
        </div>
        <section>
          <span className="eyebrow">THE HISTORICAL CONTEXT</span>
          <h2>What the record can tell us</h2>
          <p>
            No verified explanation of events at GSP during a particular period has been supplied
            for this collection. Historical context and a detailed account will be added only when
            supporting records have been reviewed.
          </p>
        </section>
        <section>
          <h2>School developments & leadership</h2>
          <p>
            No school development or leader has been confirmed for this preview. Names, dates, and
            leadership periods are intentionally omitted rather than inferred.
          </p>
        </section>
        <VerificationSection />
        <section>
          <span className="eyebrow">RELATED COLLECTION</span>
          <h2>Continue with the story</h2>
          <p>
            The related history collection provides space for future source material, context, and
            verified recollections.
          </p>
          <Link to="/our-history/$slug" params={{ slug: entry.storySlug }} className="text-link">
            Read history collection preview <ArrowRight size={14} />
          </Link>
        </section>
      </div>
      <nav className="timeline-bottom-nav" aria-label="Timeline entry navigation">
        <Button asChild variant="editorial">
          <Link to="/timeline">
            <ArrowLeft size={14} /> Back to Timeline
          </Link>
        </Button>
        <Link to="/archive/$collection" params={{ collection: "leadership" }} className="text-link">
          Leadership History <ArrowRight size={14} />
        </Link>
      </nav>
    </article>
  );
}
