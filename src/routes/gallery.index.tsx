import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Film,
  Image,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { archiveImages } from "@/components/archive/images";
import { GalleryCover } from "@/components/archive/gallery-cover";
import { Contribution } from "@/components/archive/shared";
import { archiveHead } from "@/lib/archive-data";
import { galleryCategories, galleryMedia, type GalleryCategory } from "@/lib/gallery-data";

export const Route = createFileRoute("/gallery/")({
  head: () =>
    archiveHead(
      "Gallery",
      "Explore GSP's historical photo and video collections. Archive media is published only when verified and appropriately contributed.",
    ),
  component: GalleryPage,
});

function ArchivePlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`gallery-placeholder${compact ? " is-compact" : ""}`}
      aria-label="Archive media placeholder"
    >
      <span className="gallery-placeholder-mark">
        <Image size={compact ? 23 : 34} strokeWidth={1.1} />
      </span>
      <span>HISTORICAL MEDIA AWAITING VERIFICATION</span>
    </div>
  );
}

function CategoryCard({ category }: { category: GalleryCategory }) {
  const itemCount = galleryMedia.filter(
    (item) => item.categorySlug === category.slug && item.verified,
  ).length;
  return (
    <article className="gallery-category-card">
      <Link
        to="/gallery/$categorySlug"
        params={{ categorySlug: category.slug }}
        className="gallery-category-link"
      >
        {category.coverImage ? (
          <GalleryCover imageUrl={category.coverImage} />
        ) : (
          <ArchivePlaceholder />
        )}
        <div className="gallery-category-copy">
          <span className="gallery-category-meta">
            {itemCount > 0
              ? `${itemCount} verified ${itemCount === 1 ? "item" : "items"}`
              : "Collection in preparation"}
          </span>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
          <span className="text-link">
            Explore Collection <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}

function GalleryPage() {
  const [query, setQuery] = useState("");
  const filteredCategories = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return galleryCategories.filter(
      (category) =>
        !term ||
        `${category.title} ${category.description}`.toLocaleLowerCase().includes(term) ||
        galleryMedia.some(
          (item) =>
            item.verified &&
            item.categorySlug === category.slug &&
            `${item.title} ${item.description} ${item.caption} ${item.year ?? ""}`
              .toLocaleLowerCase()
              .includes(term),
        ),
    );
  }, [query]);
  const featuredCategory = galleryCategories[0];
  const recentMedia = galleryMedia.filter((item) => item.verified).slice(0, 4);

  return (
    <div className="gallery-page">
      <header className="gallery-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={12} />
            <span aria-current="page">Gallery</span>
          </nav>
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <div className="gallery-hero-content">
            <div>
              <h1>Explore Our Historical Collections</h1>
              <p>
                Photographs and films can hold a community's shared memory. Browse GSP's archive by
                collection, with every historical item published only when its source and context
                are verified.
              </p>
            </div>
            <div className="gallery-hero-seal" aria-hidden="true">
              <Camera size={31} strokeWidth={1.1} />
              <span>
                MEMORIES
                <br />
                PRESERVED
              </span>
            </div>
          </div>
          <span className="gallery-hero-note">
            <ShieldCheck size={14} /> No unverified archive media is presented as historical
            evidence.
          </span>
        </div>
      </header>

      <section className="container gallery-featured-section">
        <div className="gallery-featured">
          <div className="gallery-featured-cover">
            <GalleryCover imageUrl={archiveImages.schoolCampus} />
          </div>
          <div className="gallery-featured-copy">
            <span className="eyebrow">
              <span className="gold-rule" /> FEATURED COLLECTION
            </span>
            <h2>GSP: A shared history</h2>
            <p>
              Begin with the School History collection. Verified photographs and their historical
              context will be added as materials are reviewed and permission is confirmed.
            </p>
            <span className="gallery-featured-count">
              Collection being documented · no verified media yet
            </span>
            <Link
              className="text-link"
              to="/gallery/$categorySlug"
              params={{ categorySlug: featuredCategory.slug }}
            >
              Explore Collection <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="gallery-categories-section section-space"
        aria-labelledby="gallery-categories-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" /> BROWSE THE ARCHIVE
              </span>
              <h2 id="gallery-categories-title">Choose a collection</h2>
            </div>
            <span className="collection-status">
              <ShieldCheck size={14} /> Nine collections · verified materials only
            </span>
          </div>
          <label className="gallery-search">
            <Search size={17} />
            <input
              aria-label="Search gallery collections"
              placeholder="Search collections by category or keyword"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <Button
                size="icon"
                variant="ghost"
                aria-label="Clear collection search"
                onClick={() => setQuery("")}
              >
                <X size={14} />
              </Button>
            )}
          </label>
          <p className="gallery-search-hint">
            Search category, title, year, or keyword. Results include verified archive records only.
          </p>
          <div className="gallery-category-grid" aria-live="polite">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          {filteredCategories.length === 0 && (
            <div className="empty-state gallery-empty-state" role="status">
              <Search size={28} strokeWidth={1.2} />
              <h3>No matching collections</h3>
              <p>Try a different title or keyword.</p>
            </div>
          )}
        </div>
      </section>

      <section className="container gallery-recent-section section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" /> RECENTLY ADDED
            </span>
            <h2>Newly documented media</h2>
          </div>
          <span className="collection-status">
            <Film size={14} /> Verified items only
          </span>
        </div>
        {recentMedia.length ? (
          <div className="gallery-recent-grid">
            {recentMedia.map((item) => (
              <Link
                to="/gallery/$categorySlug"
                params={{ categorySlug: item.categorySlug }}
                key={item.id}
                className="gallery-recent-card"
              >
                <ArchivePlaceholder compact />
                <span>
                  {item.type === "video" ? "VIDEO" : "PHOTOGRAPH"} ·{" "}
                  {item.year ?? "Date unconfirmed"}
                </span>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="gallery-recent-empty" role="status">
            <Camera size={22} strokeWidth={1.2} />
            <p>
              No verified photographs or videos have been added yet. This space will show archive
              items when they have been reviewed and catalogued.
            </p>
          </div>
        )}
      </section>

      <Contribution />

      <nav className="container gallery-bottom-nav" aria-label="Related archive sections">
        <Link to="/our-history">
          Related Historical Stories <ArrowUpRight size={14} />
        </Link>
        <Link to="/events">
          Related Events <ArrowUpRight size={14} />
        </Link>
        <Link to="/timeline">
          Historical Timeline <ArrowUpRight size={14} />
        </Link>
      </nav>
    </div>
  );
}
