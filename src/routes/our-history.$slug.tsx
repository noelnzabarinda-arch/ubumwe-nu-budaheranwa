import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveHead, stories } from "@/lib/archive-data";
import { archiveImages } from "@/components/archive/images";
import { SectionHeading, StoryCard } from "@/components/archive/shared";
import {
  MissingRecord,
  RecordBreadcrumb,
  TimelineTextLink,
  VerificationSection,
} from "@/components/archive/record-details";
import { storyNeighbours } from "@/lib/timeline-data";
export const Route = createFileRoute("/our-history/$slug")({
  head: ({ params }) =>
    archiveHead(
      stories.find((s) => s.slug === params.slug)?.title ?? "Story unavailable",
      "A historical story collection awaiting verified GSP records and source material.",
    ),
  component: HistoryDetails,
});
function HistoryDetails() {
  const { slug } = Route.useParams();
  const story = stories.find((item) => item.slug === slug);
  if (!story) return <MissingRecord />;
  const { previous, next, related } = storyNeighbours(slug);
  return (
    <>
      <article className="container history-record">
        <RecordBreadcrumb>{story.title}</RecordBreadcrumb>
        <header className="record-header">
          <span className="eyebrow">
            <span className="gold-rule" />
            {story.category}
          </span>
          <h1>{story.title}</h1>
          <p className="record-deck">{story.description}</p>
          <div className="record-metadata">
            <span>
              <CalendarDays size={14} /> Period unconfirmed
            </span>
            <span>
              <ShieldCheck size={14} /> Collection preview · Not a verified account
            </span>
          </div>
        </header>
        <figure className="record-cover">
          <img
            src={archiveImages[story.image]}
            alt="Illustrative archival books and papers, not a historical GSP photograph"
            fetchPriority="high"
          />
          <figcaption>
            <span>Objects of memory · Illustrative archival still life</span>
            <span>Archive illustration · Not historical evidence</span>
          </figcaption>
        </figure>
        <div className="record-layout">
          <aside className="record-aside">
            <span className="eyebrow">IN THIS COLLECTION</span>
            <a href="#account">The historical account</a>
            <a href="#records">Records & recollections</a>
            <a href="#sources">Sources & verification</a>
            <div className="aside-note">
              <ShieldCheck size={22} strokeWidth={1.3} />
              <p>Shared memory deserves a carefully verified record.</p>
            </div>
          </aside>
          <div className="record-prose">
            <div className="verification-note">
              <ShieldCheck size={19} />
              <p>
                <strong>A collection in preparation.</strong> This page introduces a future
                collection, not confirmed GSP history. Dates, names, and historical accounts are
                awaiting verification.
              </p>
            </div>
            <section id="account">
              <span className="eyebrow">01 / THE HISTORICAL ACCOUNT</span>
              <h2>A story waiting to be documented</h2>
              <p>
                “{story.title}” is a proposed collection within {story.category.toLocaleLowerCase()}
                . It provides a place to bring together relevant records and recollections from the
                Groupe Scolaire des Parents community.
              </p>
              <p>
                No verified historical account has been supplied for this topic. The archive does
                not yet establish what happened, when it happened, or who was involved. Those
                details will be published only after the supporting material has been reviewed.
              </p>
            </section>
            <section id="records">
              <span className="eyebrow">02 / RECORDS & RECOLLECTIONS</span>
              <h2>Preserving context, not assumptions</h2>
              <p>
                School records, dated documents, photographs with known provenance, and consented
                personal recollections may help document this collection. None are currently
                available here as evidence.
              </p>
              <p>
                Quotations, leadership names, school developments, and related historical dates are
                intentionally left unrecorded until reliable sources can support them.
              </p>
              <TimelineTextLink slug={story.slug} />
            </section>
            <VerificationSection />
          </div>
        </div>
        <nav className="article-navigation" aria-label="Story navigation">
          <div>
            {previous ? (
              <Link to="/our-history/$slug" params={{ slug: previous.slug }}>
                <span>
                  <ArrowLeft size={14} /> Previous Story
                </span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <span className="quiet-note">Beginning of the collection</span>
            )}
          </div>
          <Button asChild variant="editorial">
            <Link to="/our-history">
              <ArrowLeft size={14} /> Back to Our History
            </Link>
          </Button>
          <div>
            {next ? (
              <Link to="/our-history/$slug" params={{ slug: next.slug }}>
                <span>
                  Next Story <ArrowRight size={14} />
                </span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <span className="quiet-note">End of the collection</span>
            )}
          </div>
        </nav>
      </article>
      <section className="record-related section-space">
        <div className="container">
          <SectionHeading eyebrow="CONTINUE EXPLORING" title="More from our shared story">
            <Link to="/our-history" className="text-link">
              All stories <ArrowRight size={14} />
            </Link>
          </SectionHeading>
          <div className="story-grid">
            {related.map((item) => (
              <StoryCard story={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
