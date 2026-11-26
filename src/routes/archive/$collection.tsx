import { createFileRoute, Link } from "@tanstack/react-router";
import { Archive, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveHead, collectionNames } from "@/lib/archive-data";
export const Route = createFileRoute("/archive/$collection")({
  head: ({ params }) =>
    archiveHead(
      collectionNames[params.collection] ?? "Collection unavailable",
      "GSP Historical Archive collections are being prepared with care and historical verification.",
    ),
  component: CollectionPlaceholder,
});
function CollectionPlaceholder() {
  const { collection } = Route.useParams();
  const title = collectionNames[collection];
  const contribute = collection === "contribute";
  return (
    <section className="container placeholder-page">
      <span className="placeholder-icon">
        <Archive size={34} strokeWidth={1.2} />
      </span>
      <span className="eyebrow">GSP HISTORICAL ARCHIVE</span>
      <h1>{title ?? "Collection not found"}</h1>
      <p>
        {contribute
          ? "Your memories belong in our shared story. We welcome verified photographs, documents, and personal recollections from former students, teachers, and community members."
          : collection === "about"
            ? "A dedicated digital archive for the verified history of Groupe Scolaire des Parents, Huye, Rwanda. Our purpose is to preserve records, honour shared memories, and connect generations through carefully sourced history."
            : title
              ? "This collection is being prepared. Verified historical records and materials will appear here as they are reviewed."
              : "This collection is not available. Return home to explore the archive."}
      </p>
      {contribute ? (
        <div className="contribution-guidance">
          <ShieldCheck size={22} />
          <div>
            <h3>Preserve with care</h3>
            <p>
              Only share materials you have permission to contribute. Personal information will not
              be made public without consent.
            </p>
            <p>
              Contribution submissions are not open yet. Verified contact details will be added here
              when available.
            </p>
          </div>
        </div>
      ) : (
        <span className="placeholder-status">Collection in preparation</span>
      )}
      <Button asChild variant="editorial">
        <Link to="/">
          <ArrowLeft size={15} /> Return to the archive
        </Link>
      </Button>
    </section>
  );
}
