import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Users,
  FileText,
  CalendarDays,
  Landmark,
  MoveDown,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveImages } from "@/components/archive/images";
import { SectionHeading, StoryCard, Contribution, SampleNotice } from "@/components/archive/shared";
import { archiveHead, stories } from "@/lib/archive-data";
export const Route = createFileRoute("/")({
  head: () =>
    archiveHead(
      "Home",
      "Explore the shared heritage of Groupe Scolaire des Parents in Huye, Rwanda. A digital archive preserving history, memories, and records for future generations.",
    ),
  component: Home,
});
const collections = [
  {
    title: "School History",
    text: "The roots of our shared journey.",
    icon: BookOpen,
    slug: "history",
  },
  {
    title: "Leadership",
    text: "The people who helped guide GSP.",
    icon: Landmark,
    slug: "leadership",
  },
  { title: "Alumni", text: "A community beyond the classroom.", icon: Users, slug: "alumni" },
  {
    title: "Historical Documents",
    text: "The records that hold our history.",
    icon: FileText,
    slug: "documents",
  },
  {
    title: "Important Events",
    text: "Moments to be remembered.",
    icon: CalendarDays,
    slug: "events",
  },
];
function Home() {
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src={archiveImages.hero}
          alt="Illustrative archive of books and papers on a reading table"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow">
            <span className="gold-rule" />
            PRESERVING OUR HERITAGE
          </span>
          <h1>
            The Story of GSP,
            <br />
            Preserved for
            <br />
            <em>Generations.</em>
          </h1>
          <p>
            A school’s history is more than a collection of dates.
            <br className="desktop-break" /> It is the people, the memories, and the journey we
            share.
            <br className="desktop-break" /> Welcome to the GSP Historical Archive.
          </p>
          <div className="hero-actions">
            <Button asChild variant="heritage">
              <Link to="/our-history">
                Explore Our History <ArrowRight size={15} />
              </Link>
            </Button>
            <Button asChild variant="inverse">
              <Link to="/archive/$collection" params={{ collection: "about" }}>
                Discover the Archive <ArrowUpRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>
            <MapPinLabel /> HUYE, RWANDA
          </span>
          <span className="hero-image-caption">Illustrative archival still life</span>
          <a href="#introduction" aria-label="Scroll to archive introduction">
            <MoveDown size={16} />
          </a>
        </div>
        <span className="hero-side">A SHARED HERITAGE. A LASTING RECORD.</span>
      </section>
      <div className="heritage-strip">
        <div className="container">
          <span>GROUPE SCOLAIRE DES PARENTS</span>
          <span className="strip-diamond">◆</span>
          <span>Honouring our past. Connecting our generations.</span>
          <span className="strip-est">
            <ShieldCheck size={15} /> Rooted in memory. Guided by truth.
          </span>
        </div>
      </div>
      <section id="introduction" className="container introduction section-space">
        <div className="intro-image">
          <img
            src={archiveImages.books}
            alt="Illustrative books and papers prepared for preservation"
            loading="lazy"
          />
          <span className="photo-caption">Objects of memory · Illustrative image</span>
          <div className="image-corner-mark">
            <BookOpen size={25} strokeWidth={1} />
          </div>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">
            <span className="gold-rule" />
            WELCOME TO OUR DIGITAL ARCHIVE
          </span>
          <h2>
            Some stories deserve
            <br />
            to be <em>remembered.</em>
          </h2>
          <p>
            Every school leaves a mark. At Groupe Scolaire des Parents, that story belongs to the
            students, educators, families, and community who have been part of its journey.
          </p>
          <p>
            This archive is a home for that shared memory — a place to collect, safeguard, and share
            the verified history of GSP, in Huye, Rwanda.
          </p>
          <Link className="text-link" to="/archive/$collection" params={{ collection: "about" }}>
            The purpose behind the archive <ArrowRight size={15} />
          </Link>
          <div className="intro-footnote">
            <ShieldCheck size={18} />
            <span>Preserving with care. Documenting with integrity.</span>
          </div>
        </div>
      </section>
      <section className="featured-section section-space">
        <div className="container">
          <SectionHeading
            eyebrow="STORIES FROM THE ARCHIVE"
            title="A history made of many stories."
          >
            <Link className="text-link" to="/our-history">
              View all stories <ArrowUpRight size={15} />
            </Link>
          </SectionHeading>
          <div className="story-grid">
            {stories.slice(0, 3).map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
          <SampleNotice />
        </div>
      </section>
      <section className="container timeline-section section-space">
        <SectionHeading eyebrow="OUR JOURNEY THROUGH TIME" title="Looking back. Moving forward.">
          <Link className="text-link" to="/archive/$collection" params={{ collection: "timeline" }}>
            Explore Full Timeline <ArrowUpRight size={15} />
          </Link>
        </SectionHeading>
        <div className="timeline-grid">
          {[
            { n: "01", title: "Our beginnings", text: "The foundation of a shared vision." },
            {
              n: "02",
              title: "Growing together",
              text: "The development of our school community.",
            },
            {
              n: "03",
              title: "A continuing journey",
              text: "Preserving our heritage for those to come.",
            },
          ].map((item) => (
            <div className="timeline-item" key={item.n}>
              <span className="timeline-label">PERIOD TO BE VERIFIED</span>
              <span className="timeline-dot" />
              <span className="timeline-number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="quiet-note">
          Dates and milestones will be added after historical verification.
        </p>
      </section>
      <section className="collections-section section-space">
        <div className="container">
          <SectionHeading eyebrow="EXPLORE THE COLLECTIONS" title="Many windows into our past." />
          <div className="collection-grid">
            {collections.map(({ icon: Icon, ...item }) =>
              item.slug === "history" ? (
                <Link to="/our-history" className="collection-card" key={item.slug}>
                  <Icon size={25} strokeWidth={1.3} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowUpRight size={17} />
                </Link>
              ) : (
                <Link
                  to="/archive/$collection"
                  params={{ collection: item.slug }}
                  className="collection-card"
                  key={item.slug}
                >
                  <Icon size={25} strokeWidth={1.3} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowUpRight size={17} />
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="container media-section section-space">
        <div className="media-copy">
          <span className="eyebrow">
            <span className="gold-rule" />A WINDOW INTO THE ARCHIVE
          </span>
          <h2>Memories, in focus.</h2>
          <p>
            Photographs and moving images can bring a shared past closer. This space is reserved for
            verified visual records of GSP.
          </p>
          <Link to="/archive/$collection" params={{ collection: "gallery" }} className="text-link">
            Explore the gallery <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="media-placeholder">
          <img
            src={archiveImages.pages}
            alt="Illustrative blank archival notebook"
            loading="lazy"
          />
          <div className="media-overlay">
            <span className="play-outline">
              <Play size={22} strokeWidth={1.2} />
            </span>
            <h3>A space for our moving memories.</h3>
            <span>Video collection forthcoming · No video available yet</span>
          </div>
          <span className="image-note">ILLUSTRATIVE IMAGE</span>
        </div>
      </section>
      <Contribution />
    </>
  );
}
function MapPinLabel() {
  return <span className="location-dot" />;
}
