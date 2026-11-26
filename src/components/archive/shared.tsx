import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Archive, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Story } from "@/lib/archive-data";
import { archiveImages } from "./images";
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span className="gold-rule" />
          {eyebrow}
        </span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function StoryCard({ story, full = false }: { story: Story; full?: boolean }) {
  return (
    <Link to="/our-history/$slug" params={{ slug: story.slug }} className="story-card">
      <div className="story-image">
        <img
          src={archiveImages[story.image]}
          alt="Illustrative archival still life; not a GSP historical photograph"
          loading="lazy"
        />
        <span className="image-note">ILLUSTRATIVE IMAGE</span>
        <span className="story-image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="story-meta">
        <span>{story.category}</span>
        <span>Period unconfirmed</span>
      </div>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
      <span className="text-link">
        {full ? "Read Full Story" : "Read Story"} <ArrowRight size={14} />
      </span>
    </Link>
  );
}
export function Contribution() {
  return (
    <section className="contribution">
      <div className="container contribution-inner">
        <div className="contribution-icon">
          <HandHeart size={34} strokeWidth={1.2} />
        </div>
        <div>
          <span className="eyebrow">EVERY MEMORY MATTERS</span>
          <h2>Our history is a story we share.</h2>
          <p>
            Have a photograph, document, or memory of GSP? Help preserve it for the next generation.
          </p>
        </div>
        <Button asChild variant="heritage">
          <Link to="/archive/$collection" params={{ collection: "contribute" }}>
            Contribute to the Archive <ArrowUpRight size={15} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function SampleNotice() {
  return (
    <p className="sample-notice">
      <Archive size={14} />
      <span>
        Collection previews only. Verified historical information will appear here. Images are
        illustrative, not GSP historical photographs.
      </span>
    </p>
  );
}
