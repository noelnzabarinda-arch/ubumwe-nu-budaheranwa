import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";
import { archiveHead } from "@/lib/archive-data";
import {
  ArchiveMission,
  ArchivePrinciples,
  ArchiveScope,
  ContributionSection,
  VerificationMethodology,
} from "@/components/archive/about-archive";

export const Route = createFileRoute("/about-archive")({
  head: () =>
    archiveHead(
      "About This Archive",
      "Learn how the GSP Historical Archive preserves, verifies, and shares the institution’s heritage responsibly.",
    ),
  component: AboutArchive,
});

function AboutArchive() {
  return (
    <div className="about-archive-page">
      <header className="archive-page-header">
        <div className="container">
          <nav className="archive-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About This Archive</span>
          </nav>
          <span className="eyebrow">
            <span className="gold-rule" /> A SHARED HERITAGE
          </span>
          <div className="archive-page-title-row">
            <h1>Preserving Our Past, Inspiring Future Generations</h1>
            <p>
              The GSP Historical Archive brings together verified institutional history and shared
              memory, preserving the past with care and making it accessible for generations to
              come.
            </p>
          </div>
        </div>
      </header>

      <section
        className="container about-purpose-section section-space"
        aria-labelledby="archive-purpose-title"
      >
        <div className="about-purpose-mark" aria-hidden="true">
          <Heart size={30} strokeWidth={1.2} />
        </div>
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> OUR PURPOSE
          </span>
          <h2 id="archive-purpose-title">A considered home for GSP’s history.</h2>
          <p>
            This archive exists to preserve, organize, and make GSP’s verified institutional history
            accessible. It brings records and perspectives together while making clear what is
            documented, what is remembered, and what remains to be verified.
          </p>
          <span className="about-purpose-note">
            <ShieldCheck size={15} /> Historical claims are grounded in reviewed sources.
          </span>
        </div>
      </section>

      <ArchiveMission />
      <ArchiveScope />
      <VerificationMethodology />

      <section className="about-remembrance-section">
        <div className="container about-remembrance-inner">
          <span className="eyebrow">
            <span className="gold-rule" /> REMEMBRANCE & RESPONSIBILITY
          </span>
          <h2>Remembering with dignity and care.</h2>
          <p>
            Documenting difficult periods is part of an honest historical record. The 1994 Genocide
            against the Tutsi must be approached with verified sources, respectful context, and
            dignified language. This archive will not use graphic imagery or sensational
            presentation; accounts will be included only when their sourcing and permissions have
            been carefully considered.
          </p>
        </div>
      </section>

      <ArchivePrinciples />
      <ContributionSection />
    </div>
  );
}
