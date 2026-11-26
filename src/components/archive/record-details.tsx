import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight, FileText, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function RecordBreadcrumb({
  children,
  timeline = false,
}: {
  children?: ReactNode;
  timeline?: boolean;
}) {
  return (
    <nav className="breadcrumb record-breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <ChevronRight size={12} />
      {timeline ? <Link to="/timeline">Timeline</Link> : <Link to="/our-history">Our History</Link>}
      {children && (
        <>
          <ChevronRight size={12} />
          <span aria-current="page">{children}</span>
        </>
      )}
    </nav>
  );
}

export function VerificationSection() {
  return (
    <section className="record-sources" id="sources" aria-labelledby="sources-heading">
      <span className="eyebrow">
        <ShieldCheck size={16} /> SOURCES & VERIFICATION
      </span>
      <h2 id="sources-heading">The record behind the story</h2>
      <p>
        No historical sources have been supplied for this collection preview. It must not be used as
        a factual account of GSP history.
      </p>
      <dl className="source-register">
        <div>
          <dt>Source title</dt>
          <dd>Not yet supplied</dd>
        </div>
        <div>
          <dt>Source type</dt>
          <dd>Not yet established</dd>
        </div>
        <div>
          <dt>Contributor / institution</dt>
          <dd>Not yet identified</dd>
        </div>
        <div>
          <dt>Verification status</dt>
          <dd>Awaiting source review</dd>
        </div>
        <div>
          <dt>Document reference</dt>
          <dd>No reference available</dd>
        </div>
      </dl>
      <p className="source-footnote">
        <FileText size={15} /> Source links will appear only when genuine records are available.
      </p>
    </section>
  );
}

export function MissingRecord({ timeline = false }: { timeline?: boolean }) {
  return (
    <section className="container placeholder-page">
      <FileText size={34} className="text-primary" />
      <span className="eyebrow">GSP HISTORICAL ARCHIVE</span>
      <h1>{timeline ? "Timeline entry not found" : "Story not found"}</h1>
      <p>
        This record is not part of the archive. Browse the available collection previews instead.
      </p>
      <Button asChild variant="editorial">
        {timeline ? (
          <Link to="/timeline">
            <ArrowLeft size={15} /> Back to Timeline
          </Link>
        ) : (
          <Link to="/our-history">
            <ArrowLeft size={15} /> Back to Our History
          </Link>
        )}
      </Button>
    </section>
  );
}

export function TimelineTextLink({ slug }: { slug: string }) {
  return (
    <Link to="/timeline/$year" params={{ year: slug }} className="text-link">
      View timeline preview <ArrowRight size={15} />
    </Link>
  );
}
