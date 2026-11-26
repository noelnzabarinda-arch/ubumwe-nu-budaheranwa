import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveHead, stories } from "@/lib/archive-data";
export const Route = createFileRoute("/our-history/$slug")({
  head: ({ params }) =>
    archiveHead(
      stories.find((s) => s.slug === params.slug)?.title ?? "Story unavailable",
      "A historical story collection awaiting verified GSP records and source material.",
    ),
  component: StoryPlaceholder,
});
function StoryPlaceholder() {
  const { slug } = Route.useParams();
  const story = stories.find((item) => item.slug === slug);
  return (
    <section className="container placeholder-page">
      <span className="placeholder-icon">
        <BookOpen size={34} strokeWidth={1.2} />
      </span>
      <span className="eyebrow">{story?.category ?? "GSP HISTORICAL ARCHIVE"}</span>
      <h1>{story?.title ?? "Story not found"}</h1>
      <p>
        {story
          ? "This is a sample collection preview, not a verified historical account. Verified historical information will appear here once records have been reviewed."
          : "This story is not part of the collection. Explore the available previews instead."}
      </p>
      {story && (
        <span className="placeholder-status">Story details forthcoming · Period unconfirmed</span>
      )}
      <Button asChild variant="editorial">
        <Link to="/our-history">
          <ArrowLeft size={15} /> Back to Our History
        </Link>
      </Button>
    </section>
  );
}
