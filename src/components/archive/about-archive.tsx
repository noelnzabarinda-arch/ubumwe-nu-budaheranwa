import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  CheckCheck,
  Eye,
  HeartHandshake,
  History,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

const missionItems = [
  {
    icon: History,
    title: "Historical preservation",
    text: "Care for records and memories so they remain available to future generations.",
  },
  {
    icon: BookOpen,
    title: "Institutional heritage",
    text: "Make GSP’s verified institutional history easier to discover and understand.",
  },
  {
    icon: Eye,
    title: "Education and research",
    text: "Support learning through transparent sources and responsible historical context.",
  },
  {
    icon: HeartHandshake,
    title: "Intergenerational sharing",
    text: "Create a thoughtful space where generations can learn from shared heritage.",
  },
];

const scope = [
  "Historical stories",
  "Historical timeline",
  "Leadership history",
  "Important events",
  "Alumni and former staff",
  "Photographs and videos",
  "Historical documents",
];

const methods = [
  "Official institutional records, where available and authorized.",
  "Historical documents reviewed for date, origin, context, and ownership.",
  "Credible publications with traceable references.",
  "Photographs and media cleared for use and publication.",
  "Contributions from the GSP community, reviewed and attributed appropriately.",
];

const principles = [
  {
    icon: CheckCheck,
    title: "Historical accuracy",
    text: "Distinguish verified information from recollection and material still under review.",
  },
  {
    icon: HeartHandshake,
    title: "Respect and dignity",
    text: "Represent people and experiences with care, context, and humanity.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Make sourcing and uncertainty clear wherever possible.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy",
    text: "Protect personal information and honor access restrictions.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible preservation",
    text: "Respect provenance, permissions, and the integrity of original materials.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Present the archive in a clear, inclusive, and usable way.",
  },
];

export function ArchiveMission() {
  return (
    <section
      className="about-mission-section section-space"
      aria-labelledby="archive-mission-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" /> OUR MISSION
            </span>
            <h2 id="archive-mission-title">A living connection to our shared heritage</h2>
          </div>
        </div>
        <div className="archive-mission-grid">
          {missionItems.map(({ icon: Icon, title, text }) => (
            <article className="archive-mission-card" key={title}>
              <Icon size={22} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchiveScope() {
  return (
    <section className="about-scope-section section-space" aria-labelledby="archive-scope-title">
      <div className="container archive-scope-layout">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> SCOPE OF THE ARCHIVE
          </span>
          <h2 id="archive-scope-title">Many threads make a shared history.</h2>
          <p>
            The archive is being developed across these collections. A topic listed here describes
            the archive’s scope; it does not imply that verified material is already available.
          </p>
        </div>
        <ul className="archive-scope-list">
          {scope.map((item) => (
            <li key={item}>
              <span aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VerificationMethodology() {
  return (
    <section className="about-method-section section-space" aria-labelledby="archive-method-title">
      <div className="container archive-method-layout">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> HISTORICAL VERIFICATION
          </span>
          <h2 id="archive-method-title">Evidence before certainty.</h2>
          <p>
            Information is gathered with its origin and context in mind. Dates, identities, and
            accounts are checked against available evidence before they are presented as established
            historical facts.
          </p>
          <p>
            Personal recollections are valuable sources of perspective, but are identified as
            testimony and not treated as independently confirmed fact without corroboration.
          </p>
        </div>
        <div className="verification-card">
          <h3>Sources considered</h3>
          <ul>
            {methods.map((method) => (
              <li key={method}>
                <ShieldCheck size={16} />
                {method}
              </li>
            ))}
          </ul>
          <p className="verification-caution">
            Unverified submissions are not presented as established historical facts.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ArchivePrinciples() {
  return (
    <section
      className="about-principles-section section-space"
      aria-labelledby="archive-principles-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" /> ARCHIVE PRINCIPLES
            </span>
            <h2 id="archive-principles-title">How we care for the record</h2>
          </div>
        </div>
        <div className="archive-principles-grid">
          {principles.map(({ icon: Icon, title, text }) => (
            <article className="archive-principle" key={title}>
              <Icon size={19} strokeWidth={1.5} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContributionSection() {
  return (
    <section className="about-contribution">
      <div className="container about-contribution-inner">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> SOURCES & CONTRIBUTIONS
          </span>
          <h2>Your materials can help complete the picture.</h2>
          <p>
            Former students, teachers, staff, and community members may have photographs, records,
            publications, or memories to share. Please contribute only material you own or have
            permission to share. Items are reviewed before any public use.
          </p>
          <p className="about-contact-note">
            No verified direct contact details or submission process are available yet. The
            archive’s contribution guidance is available here.
          </p>
          <Link
            className="text-link"
            to="/archive/$collection"
            params={{ collection: "contribute" }}
          >
            Contribution guidance <ArrowRight size={14} />
          </Link>
        </div>
        <div className="about-contribution-mark" aria-hidden="true">
          <Scale size={34} strokeWidth={1.1} />
        </div>
      </div>
    </section>
  );
}
