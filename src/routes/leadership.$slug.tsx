import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BiographySection,
  LeaderNavigation,
  LeaderProfileHeader,
  LeadershipContributions,
  LeadershipSources,
  LeadershipTimeline,
  RelatedEvents,
} from "@/components/archive/leadership";
import { archiveHead } from "@/lib/archive-data";
import { getLeaderNeighbours, leaders } from "@/lib/leadership-data";

export const Route = createFileRoute("/leadership/$slug")({
  head: ({ params }) =>
    archiveHead(
      leaders.find((leader) => leader.slug === params.slug)?.name ?? "Leader profile unavailable",
      "A GSP leadership profile prepared for verified biographical and institutional records.",
    ),
  component: LeaderDetails,
});

function LeaderDetails() {
  const { slug } = Route.useParams();
  const leader = leaders.find((item) => item.slug === slug);
  const neighbours = getLeaderNeighbours(slug);

  if (!leader || !neighbours.exists) {
    return (
      <section className="container placeholder-page">
        <span className="eyebrow">GSP HISTORICAL ARCHIVE</span>
        <h1>Leader profile not found</h1>
        <p>This profile is not part of the leadership archive.</p>
        <Button asChild variant="editorial">
          <Link to="/leadership">
            <ArrowLeft size={14} /> Back to Leadership History
          </Link>
        </Button>
      </section>
    );
  }

  return (
    <article className="container leader-detail-page">
      <LeaderProfileHeader leader={leader} />
      <div className="leader-detail-body">
        <div className="leader-verification-note">
          <span className="eyebrow">RECORD STATUS</span>
          <p>
            This is a profile placeholder. The leader’s identity, appointment, service period, and
            biography are awaiting verification and are not presented as established facts.
          </p>
        </div>
        <BiographySection leader={leader} />
        <LeadershipContributions />
        <LeadershipTimeline leader={leader} />
        <RelatedEvents />
        <LeadershipSources />
        <LeaderNavigation
          previous={neighbours.previous}
          next={neighbours.next}
          related={neighbours.related}
        />
      </div>
      <nav className="leader-return-nav" aria-label="Profile navigation">
        <Button asChild variant="editorial">
          <Link to="/leadership">
            <ArrowLeft size={14} /> Back to Leadership History
          </Link>
        </Button>
        <Link to="/timeline" className="text-link">
          Explore Historical Timeline <ArrowRight size={14} />
        </Link>
      </nav>
    </article>
  );
}
