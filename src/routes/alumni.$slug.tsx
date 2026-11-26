import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlumniDetailSection,
  AlumniMediaGallery,
  AlumniProfileHeader,
  AlumniProfileNavigation,
  AlumniSources,
} from "@/components/archive/alumni";
import { archiveHead } from "@/lib/archive-data";
import { alumniProfiles, getAlumniNeighbours } from "@/lib/alumni-data";

export const Route = createFileRoute("/alumni/$slug")({
  head: ({ params }) =>
    archiveHead(
      alumniProfiles.find((profile) => profile.slug === params.slug)?.name ?? "Alumni profile unavailable",
      "A GSP alumni profile prepared for verified biographical records.",
    ),
  component: AlumniProfile,
});

function AlumniProfile() {
  const { slug } = Route.useParams();
  const profile = alumniProfiles.find((item) => item.slug === slug);
  const neighbours = getAlumniNeighbours(slug);

  if (!profile || !neighbours.exists) {
    return (
      <section className="container placeholder-page">
        <span className="eyebrow">GSP HISTORICAL ARCHIVE</span>
        <h1>Alumni profile not found</h1>
        <p>This profile is not part of the verified alumni archive.</p>
        <Button asChild variant="editorial">
          <Link to="/alumni"><ArrowLeft size={14} /> Back to Alumni History</Link>
        </Button>
      </section>
    );
  }

  return (
    <article className="container alumni-detail-page">
      <AlumniProfileHeader profile={profile} />
      <div className="alumni-detail-body">
        <div className="alumni-verification-note">
          <span className="eyebrow">RECORD STATUS</span>
          <p>This page is a non-personal placeholder. Identity, years, biography, and achievements are awaiting verification and are not presented as facts.</p>
        </div>
        <AlumniDetailSection number="01" eyebrow="BIOGRAPHY" title="Background & GSP journey" paragraphs={[
          "No verified background or educational journey has been provided.",
          "Information is omitted until supported by credible institutional or archival sources.",
        ]} />
        <AlumniDetailSection number="02" eyebrow="ACHIEVEMENTS & CONTRIBUTIONS" title="Milestones and impact" items={profile.achievements} />
        <AlumniDetailSection number="03" eyebrow="CONNECTION TO GSP" title="Relationship with GSP" paragraphs={[
          "The person’s documented relationship with GSP, including studies or service and contribution, cannot be stated until verified.",
        ]} />
        <AlumniDetailSection number="04" eyebrow="PROFESSIONAL JOURNEY" title="Professional and community journey" paragraphs={[
          "No verified professional journey or community contribution is available.",
        ]} />
        <AlumniMediaGallery />
        <AlumniSources />
        <AlumniProfileNavigation previous={neighbours.previous} next={neighbours.next} related={neighbours.related} />
      </div>
      <nav className="alumni-return-nav" aria-label="Alumni profile navigation">
        <Button asChild variant="editorial">
          <Link to="/alumni"><ArrowLeft size={14} /> Back to Alumni History</Link>
        </Button>
        <Link to="/events" className="text-link">Related Historical Events <ArrowRight size={14} /></Link>
      </nav>
    </article>
  );
}
