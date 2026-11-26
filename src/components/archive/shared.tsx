import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Archive, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Story } from "@/lib/archive-data";
import { archiveImages } from "./images";
import { useLanguage } from "@/i18n/useLanguage";
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
  const { t } = useLanguage();
  return (
    <Link to="/our-history/$slug" params={{ slug: story.slug }} className="story-card">
      <div className="story-image">
        <img
          src={archiveImages[story.image]}
          alt="GSP school history or historical document"
          loading="lazy"
        />
        <span className="image-note">{t("archiveCollection")}</span>
        <span className="story-image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="story-meta">
        <span>{story.category}</span>
        <span>{t("periodUnconfirmed")}</span>
      </div>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
      <span className="text-link">
        {full ? t("readFullStory") : t("readStory")} <ArrowRight size={14} />
      </span>
    </Link>
  );
}
export function Contribution() {
  const { t } = useLanguage();
  return (
    <section className="contribution">
      <div className="container contribution-inner">
        <div className="contribution-icon">
          <HandHeart size={34} strokeWidth={1.2} />
        </div>
        <div>
          <span className="eyebrow">{t("everyMemoryMatters")}</span>
          <h2>{t("sharedHistoryTitle")}</h2>
          <p>{t("sharedHistoryText")}</p>
        </div>
        <Button asChild variant="heritage">
          <Link to="/archive/$collection" params={{ collection: "contribute" }}>
            {t("contributeArchive")} <ArrowUpRight size={15} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function SampleNotice() {
  const { t } = useLanguage();
  return (
    <p className="sample-notice">
      <Archive size={14} />
      <span>{t("sampleNotice")}</span>
    </p>
  );
}
