import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal, ArrowRight, BookOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveImages } from "@/components/archive/images";
import { StoryCard, Contribution, SampleNotice } from "@/components/archive/shared";
import { archiveHead, categories, filterStories, stories } from "@/lib/archive-data";
export const Route = createFileRoute("/our-history/")({
  head: () =>
    archiveHead(
      "Our History",
      "Discover the story collections of Groupe Scolaire des Parents: its beginnings, educational journey, school community, and shared heritage.",
    ),
  component: OurHistory,
});
function OurHistory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [period, setPeriod] = useState("all");
  const results = filterStories(stories, query, category, period);
  const reset = () => {
    setQuery("");
    setCategory("all");
    setPeriod("all");
  };
  return (
    <>
      <section className="page-hero">
        <img
          className="hero-image"
          src={archiveImages.museumExterior}
          alt="Museum exterior"
        />
        <div className="hero-shade" />
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={12} />
            <span>Our History</span>
          </div>
          <span className="eyebrow">THE JOURNEY THAT CONNECTS US</span>
          <h1>Our History</h1>
          <p>A shared past. Many voices. One story worth preserving.</p>
          <span className="banner-caption">Museum and archive collection</span>
        </div>
      </section>
      <section className="container history-introduction section-space">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" />
            OUR PAST, THOUGHTFULLY PRESERVED
          </span>
          <h2>
            Understanding where we began.
            <br />
            <em>Remembering who we are.</em>
          </h2>
        </div>
        <div>
          <p>
            The history of Groupe Scolaire des Parents belongs to its whole community. This
            collection is being created to bring its records, memories, and stories together with
            care.
          </p>
          <p>
            Each account will be grounded in verified sources. Until those materials are available,
            the collections below offer a preview of the stories the archive hopes to preserve.
          </p>
        </div>
        <img
          src={archiveImages.books}
          alt="Illustrative bound books awaiting archival care"
          loading="lazy"
        />
      </section>
      <section className="history-stories section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" />
                EXPLORE OUR SHARED PAST
              </span>
              <h2>The story collection</h2>
            </div>
            <span className="collection-status">
              <span className="location-dot" /> An archive in the making
            </span>
          </div>
          <div className="filter-bar">
            <label className="search-field">
              <Search size={17} />
              <input
                aria-label="Search historical stories"
                placeholder="Search stories, memories, keywords…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                >
                  <X size={14} />
                </Button>
              )}
            </label>
            <div className="filter-select">
              <SlidersHorizontal size={15} />
              <select
                aria-label="Filter by category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <select
              className="period-select"
              aria-label="Filter by period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="all">All periods</option>
              <option value="unconfirmed">Period unconfirmed</option>
            </select>
          </div>
          <div className="results-bar">
            <span>
              {results.length} collection {results.length === 1 ? "preview" : "previews"}
            </span>
            {(query || category !== "all" || period !== "all") && (
              <Button variant="link" size="sm" onClick={reset}>
                Reset filters <X size={12} />
              </Button>
            )}
            <span>Verified dates coming as sources are confirmed</span>
          </div>
          {results.length ? (
            <div className="story-grid history-grid">
              {results.map((story) => (
                <StoryCard story={story} full key={story.slug} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <BookOpen size={32} strokeWidth={1.2} />
              <h3>No stories found</h3>
              <p>No collection previews match your search. Try another word or category.</p>
              <Button variant="editorial" onClick={reset}>
                Clear filters <ArrowRight size={14} />
              </Button>
            </div>
          )}
          <SampleNotice />
        </div>
      </section>
      <Contribution />
    </>
  );
}
