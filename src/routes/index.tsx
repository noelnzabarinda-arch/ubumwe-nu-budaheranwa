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
import { archiveLogoUrl, siteUrl } from "@/lib/seo";
import { useLanguage } from "@/i18n/useLanguage";
export const Route = createFileRoute("/")({
  head: () => {
    const homeHead = archiveHead(
      "Home",
      "Explore the shared heritage of Groupe Scolaire des Parents in Huye, Rwanda. A digital archive preserving history, memories, and records for future generations.",
    );

    return {
      ...homeHead,
      meta: [
        ...homeHead.meta,
        ...(archiveLogoUrl
          ? [
              { property: "og:image", content: archiveLogoUrl },
              { name: "twitter:image", content: archiveLogoUrl },
            ]
          : []),
      ],
      links: siteUrl ? [{ rel: "canonical", href: `${siteUrl}/` }] : [],
    };
  },
  component: Home,
});
function Home() {
  const { t } = useLanguage();
  const collections = [
    {
      title: t("schoolHistoryTitle"),
      text: t("schoolHistoryText"),
      icon: BookOpen,
      slug: "history",
    },
    { title: t("leadershipTitle"), text: t("leadershipText"), icon: Landmark, slug: "leadership" },
    { title: t("alumniTitle"), text: t("alumniText"), icon: Users, slug: "alumni" },
    { title: t("documentsTitle"), text: t("documentsText"), icon: FileText, slug: "documents" },
    { title: t("eventsTitle"), text: t("eventsText"), icon: CalendarDays, slug: "events" },
  ];
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src={archiveImages.hero}
          alt="School history building"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow">
            <span className="gold-rule" />
            {t("preservingHeritage")}
          </span>
          <h1>
            {t("heroTitleLine1")}
            <br />
            {t("heroTitleLine2")}
            <br />
            <em>{t("heroTitleEmphasis")}</em>
          </h1>
          <p>
            {t("heroDescription1")}
            <br className="desktop-break" /> {t("heroDescription2")}
            <br className="desktop-break" /> {t("heroDescription3")}
          </p>
          <div className="hero-actions">
            <Button asChild variant="heritage">
              <Link to="/our-history">
                {t("exploreOurHistory")} <ArrowRight size={15} />
              </Link>
            </Button>
            <Button asChild variant="inverse">
              <Link to="/about-archive">
                {t("discoverArchive")} <ArrowUpRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>
            <MapPinLabel /> {t("huyeRwanda")}
          </span>
          <span className="hero-image-caption">{t("schoolHistoryCollection")}</span>
          <a href="#introduction" aria-label={t("scrollToIntroduction")}>
            <MoveDown size={16} />
          </a>
        </div>
        <span className="hero-side">{t("sharedHeritageLastingRecord")}</span>
      </section>
      <div className="heritage-strip">
        <div className="container">
          <span>GROUPE SCOLAIRE DES PARENTS</span>
          <span className="strip-diamond">◆</span>
          <span>{t("heritagePast")}</span>
          <span className="strip-est">
            <ShieldCheck size={15} /> {t("heritageMemory")}
          </span>
        </div>
      </div>
      <section id="introduction" className="container introduction section-space">
        <div className="intro-image">
          <img
            src={archiveImages.schoolCourtyard}
            alt="School campus and courtyard"
            loading="lazy"
          />
          <span className="photo-caption">School history · Campus view</span>
          <div className="image-corner-mark">
            <BookOpen size={25} strokeWidth={1} />
          </div>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">
            <span className="gold-rule" />
            {t("welcomeDigitalArchive")}
          </span>
          <h2>
            {t("introTitle1")}
            <br />
            <em>{t("introTitleEmphasis")}</em>
          </h2>
          <p>{t("introText1")}</p>
          <p>{t("introText2")}</p>
          <Link className="text-link" to="/about-archive">
            {t("archivePurposeLink")} <ArrowRight size={15} />
          </Link>
          <div className="intro-footnote">
            <ShieldCheck size={18} />
            <span>{t("preservingIntegrity")}</span>
          </div>
        </div>
      </section>
      <section className="featured-section section-space">
        <div className="container">
          <SectionHeading eyebrow={t("storiesEyebrow")} title={t("storiesTitle")}>
            <Link className="text-link" to="/our-history">
              {t("viewAllStories")} <ArrowUpRight size={15} />
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
        <SectionHeading eyebrow={t("journeyEyebrow")} title={t("journeyTitle")}>
          <Link className="text-link" to="/archive/$collection" params={{ collection: "timeline" }}>
            {t("exploreFullTimeline")} <ArrowUpRight size={15} />
          </Link>
        </SectionHeading>
        <div className="timeline-grid">
          {[
            { n: "01", title: t("beginningTitle"), text: t("beginningText") },
            {
              n: "02",
              title: t("growingTitle"),
              text: t("growingText"),
            },
            {
              n: "03",
              title: t("continuingTitle"),
              text: t("continuingText"),
            },
          ].map((item) => (
            <div className="timeline-item" key={item.n}>
              <span className="timeline-label">{t("periodToBeVerified")}</span>
              <span className="timeline-dot" />
              <span className="timeline-number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="quiet-note">{t("datesVerifiedNote")}</p>
      </section>
      <section className="collections-section section-space">
        <div className="container">
          <SectionHeading eyebrow={t("collectionsEyebrow")} title={t("collectionsTitle")} />
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
            <span className="gold-rule" />
            {t("windowEyebrow")}
          </span>
          <h2>{t("memoriesTitle")}</h2>
          <p>{t("memoriesText")}</p>
          <Link to="/archive/$collection" params={{ collection: "gallery" }} className="text-link">
            {t("exploreGallery")} <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="media-placeholder">
          <img src={archiveImages.museumHall} alt="Museum collection hall" loading="lazy" />
          <div className="media-overlay">
            <span className="play-outline">
              <Play size={22} strokeWidth={1.2} />
            </span>
            <h3>{t("movingMemories")}</h3>
            <span>{t("videoForthcoming")}</span>
          </div>
          <span className="image-note">{t("museumCollection")}</span>
        </div>
      </section>
      <Contribution />
    </>
  );
}
function MapPinLabel() {
  return <span className="location-dot" />;
}
