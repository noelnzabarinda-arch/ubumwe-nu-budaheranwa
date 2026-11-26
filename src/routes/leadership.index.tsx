import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { CurrentLeaderCard, LeaderFilters, LeaderGrid } from "@/components/archive/leadership";
import { archiveHead } from "@/lib/archive-data";
import { filterLeaders, leaders } from "@/lib/leadership-data";

export const Route = createFileRoute("/leadership/")({
  head: () =>
    archiveHead(
      "Leadership Through Generations",
      "Explore GSP leadership history through records and biographical details published only after verification.",
    ),
  component: LeadershipHistory,
});

function LeadershipHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "current" | "former">("all");
  const [period, setPeriod] = useState("all");
  const [order, setOrder] = useState<"oldest" | "newest">("oldest");
  const currentLeader = leaders.find((leader) => leader.status === "current");
  const results = filterLeaders(leaders, query, status, period, order);
  const currentMatches =
    currentLeader && results.some((leader) => leader.slug === currentLeader.slug);
  const formerLeaders = results.filter((leader) => leader.status === "former");
  const reset = () => {
    setQuery("");
    setStatus("all");
    setPeriod("all");
    setOrder("oldest");
  };

  return (
    <div className="leadership-page">
      <header className="leadership-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={12} />
            <span aria-current="page">Leadership</span>
          </nav>
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <h1>Leadership Through Generations</h1>
          <p>
            Leadership is part of an institution’s story. This archive will honour the people who
            have served GSP by preserving their records with care and historical integrity.
          </p>
          <span className="leadership-hero-caption">
            A record built from verified sources · No unconfirmed names or dates
          </span>
        </div>
      </header>

      <section className="container leadership-current section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" /> CURRENT HEADMASTER
            </span>
            <h2>Meet our current headmaster.</h2>
          </div>
          <span className="collection-status">
            <span className="location-dot" /> Name and service dates not provided
          </span>
        </div>
        {currentLeader && currentMatches ? (
          <CurrentLeaderCard leader={currentLeader} />
        ) : (
          <div className="leadership-empty" role="status">
            <p>
              {currentLeader
                ? "No current leadership record matches these filters."
                : "Current leader information is awaiting verification."}
            </p>
          </div>
        )}
      </section>

      <section className="former-leaders-section section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" /> FORMER LEADERS
              </span>
              <h2>Those who shaped our shared story.</h2>
            </div>
            <span className="collection-status">
              {formerLeaders.length} former {formerLeaders.length === 1 ? "leader" : "leaders"}
            </span>
          </div>
          <LeaderFilters
            query={query}
            status={status}
            period={period}
            order={order}
            onQueryChange={setQuery}
            onStatusChange={(value) => {
              if (value === "all" || value === "current" || value === "former") setStatus(value);
            }}
            onPeriodChange={setPeriod}
            onOrderChange={(value) => {
              if (value === "oldest" || value === "newest") setOrder(value);
            }}
            onReset={reset}
          />
          <div className="results-bar" aria-live="polite">
            <span>
              {formerLeaders.length} matching former{" "}
              {formerLeaders.length === 1 ? "leader" : "leaders"}
            </span>
            {currentMatches && <span>Current profile shown above</span>}
            <span>Undated records are not placed in historical order</span>
          </div>
          <LeaderGrid leaders={formerLeaders} />
        </div>
      </section>

      <section className="container leadership-summary section-space">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> THE LEADERSHIP JOURNEY
          </span>
          <h2>History is recorded, not assumed.</h2>
        </div>
        <div>
          <p>
            Leadership names, roles, and service periods will be added only when supported by
            verifiable institutional records or credible historical sources. Until then, the archive
            leaves the historical sequence open rather than infer a timeline.
          </p>
          <span className="leadership-summary-note">
            <ShieldCheck size={16} /> Former leader names and service dates were not provided.
          </span>
        </div>
      </section>

      <section className="leadership-sources-strip">
        <div className="container">
          <BookOpen size={22} strokeWidth={1.3} />
          <div>
            <h2>Sources & verification</h2>
            <p>
              Staff portraits are shown with role-based descriptions. Names and service periods can
              be added when those details are provided.
            </p>
          </div>
        </div>
      </section>

      <nav className="container leadership-bottom-nav" aria-label="Leadership archive navigation">
        <Link to="/" className="text-link">
          <ArrowRight className="back-arrow" size={14} /> Back to Home
        </Link>
        {currentLeader && (
          <Link to="/leadership/$slug" params={{ slug: currentLeader.slug }} className="text-link">
            View leader profile <ArrowRight size={14} />
          </Link>
        )}
        <Link to="/timeline" className="text-link">
          Historical Timeline <ArrowRight size={14} />
        </Link>
      </nav>
    </div>
  );
}
