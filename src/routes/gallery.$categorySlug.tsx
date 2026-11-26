import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Film,
  Image,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryCover } from "@/components/archive/gallery-cover";
import { archiveHead } from "@/lib/archive-data";
import {
  filterGalleryMedia,
  galleryCategories,
  getVerifiedCategoryMedia,
  studentIllustrations,
  type GalleryCategory,
  type GalleryMedia,
} from "@/lib/gallery-data";

export const Route = createFileRoute("/gallery/$categorySlug")({
  head: ({ params }) => {
    const category = galleryCategories.find((item) => item.slug === params.categorySlug);
    return archiveHead(
      category?.title ?? "Gallery Collection",
      category?.description ?? "Explore a GSP Historical Archive collection.",
    );
  },
  component: GalleryDetailsPage,
});

function CollectionPlaceholder({ icon = false }: { icon?: boolean }) {
  return (
    <div className="gallery-placeholder gallery-detail-placeholder">
      <span className="gallery-placeholder-mark">
        {icon ? <Film size={35} strokeWidth={1.1} /> : <Image size={35} strokeWidth={1.1} />}
      </span>
      <span>NO VERIFIED MEDIA AVAILABLE</span>
    </div>
  );
}

function CollectionHeader({ category, count }: { category: GalleryCategory; count: number }) {
  return (
    <header className="gallery-detail-header">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ArrowRight size={12} />
          <Link to="/gallery">Gallery</Link>
          <ArrowRight size={12} />
          <span aria-current="page">{category.title}</span>
        </nav>
        <div className="gallery-detail-header-grid">
          <div className="gallery-detail-heading">
            <span className="eyebrow">
              <span className="gold-rule" /> GSP HISTORICAL COLLECTION
            </span>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <span className="gallery-detail-count">
              <ShieldCheck size={14} />{" "}
              {count
                ? `${count} verified ${count === 1 ? "item" : "items"}`
                : "No verified items available yet"}
            </span>
          </div>
          {category.coverImage ? (
            <GalleryCover imageUrl={category.coverImage} />
          ) : (
            <CollectionPlaceholder icon={category.slug === "videos-documentaries"} />
          )}
        </div>
      </div>
    </header>
  );
}

function MediaFilters({
  query,
  year,
  type,
  order,
  years,
  onChange,
}: {
  query: string;
  year: string;
  type: "all" | "photo" | "video";
  order: "newest" | "oldest";
  years: number[];
  onChange: (field: "query" | "year" | "type" | "order", value: string) => void;
}) {
  return (
    <div className="gallery-media-filters">
      <label className="search-field">
        <Search size={17} />
        <input
          aria-label="Search media by title or description"
          placeholder="Search titles or descriptions"
          value={query}
          onChange={(event) => onChange("query", event.target.value)}
        />
        {query && (
          <Button
            size="icon"
            variant="ghost"
            aria-label="Clear media search"
            onClick={() => onChange("query", "")}
          >
            <X size={14} />
          </Button>
        )}
      </label>
      <select
        className="period-select"
        aria-label="Filter media by year"
        value={year}
        onChange={(event) => onChange("year", event.target.value)}
      >
        <option value="all">All years</option>
        <option value="unconfirmed">Year unconfirmed</option>
        {years.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        className="period-select"
        aria-label="Filter by media type"
        value={type}
        onChange={(event) => onChange("type", event.target.value)}
      >
        <option value="all">Photos &amp; videos</option>
        <option value="photo">Photos</option>
        <option value="video">Videos</option>
      </select>
      <select
        className="period-select"
        aria-label="Sort media by date"
        value={order}
        onChange={(event) => onChange("order", event.target.value)}
      >
        <option value="newest">Newest to oldest</option>
        <option value="oldest">Oldest to newest</option>
      </select>
    </div>
  );
}

function MediaInformation({ media }: { media: GalleryMedia }) {
  return (
    <dl className="gallery-media-information">
      <div>
        <dt>Original title</dt>
        <dd>{media.title}</dd>
      </div>
      <div>
        <dt>Historical period</dt>
        <dd>{media.historicalPeriod ?? "Not confirmed"}</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>
          {galleryCategories.find((item) => item.slug === media.categorySlug)?.title ??
            "Not recorded"}
        </dd>
      </div>
      <div>
        <dt>Contributor or source</dt>
        <dd>{media.source ?? "Not identified"}</dd>
      </div>
      <div>
        <dt>Verification</dt>
        <dd>{media.verified ? "Reviewed for archive publication" : "Awaiting review"}</dd>
      </div>
    </dl>
  );
}

function PhotoCard({ media, onOpen }: { media: GalleryMedia; onOpen: () => void }) {
  return (
    <article className="gallery-media-card">
      <button
        className="gallery-photo-button"
        type="button"
        onClick={onOpen}
        aria-label={`View ${media.title}`}
      >
        {media.imageUrl ? (
          <img src={media.imageUrl} alt={media.title} loading="lazy" />
        ) : (
          <CollectionPlaceholder />
        )}
      </button>
      <div className="gallery-media-card-copy">
        <span className="gallery-media-meta">
          <Camera size={13} /> {media.year ?? "Date unconfirmed"}
          {media.source ? ` · ${media.source}` : ""}
        </span>
        <h3>{media.title}</h3>
        <p>{media.caption || media.description}</p>
        <MediaInformation media={media} />
      </div>
    </article>
  );
}

function VideoCard({ media }: { media: GalleryMedia }) {
  return (
    <article className="gallery-video-card">
      {media.videoUrl ? (
        <video
          controls
          preload="metadata"
          poster={media.imageUrl ?? undefined}
          aria-label={media.title}
        >
          <source src={media.videoUrl} />
          Your browser does not support the video element.
        </video>
      ) : (
        <div className="gallery-video-placeholder">
          {media.imageUrl ? (
            <img src={media.imageUrl} alt="" loading="lazy" />
          ) : (
            <CollectionPlaceholder icon />
          )}
          <span>
            <Film size={15} /> Video file not supplied
          </span>
        </div>
      )}
      <div className="gallery-media-card-copy">
        <span className="gallery-media-meta">
          <Film size={13} /> {media.year ?? "Date unconfirmed"}
          {media.duration ? ` · ${media.duration}` : ""}
        </span>
        <h3>{media.title}</h3>
        <p>{media.description}</p>
        <MediaInformation media={media} />
      </div>
    </article>
  );
}

function PhotoLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryMedia[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const media = items[index];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index, items.length, onClose, onNavigate]);

  return (
    <div
      className="gallery-lightbox"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-label={media.title}
      >
        <Button
          className="gallery-lightbox-close"
          size="icon"
          variant="ghost"
          aria-label="Close photo viewer"
          onClick={onClose}
        >
          <X />
        </Button>
        <div className="gallery-lightbox-image">
          {media.imageUrl ? (
            <img src={media.imageUrl} alt={media.title} />
          ) : (
            <CollectionPlaceholder />
          )}
        </div>
        <Button
          className="gallery-lightbox-prev"
          size="icon"
          variant="ghost"
          aria-label="Previous photo"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="gallery-lightbox-next"
          size="icon"
          variant="ghost"
          aria-label="Next photo"
          onClick={() => onNavigate((index + 1) % items.length)}
        >
          <ChevronRight />
        </Button>
        <div className="gallery-lightbox-caption">
          <span className="eyebrow">
            {media.year ?? "Date unconfirmed"}
            {media.source ? ` · ${media.source}` : ""}
          </span>
          <h2>{media.title}</h2>
          <p>{media.caption || media.description}</p>
          <MediaInformation media={media} />
          <span className="gallery-lightbox-position">
            {index + 1} / {items.length}
          </span>
        </div>
      </section>
    </div>
  );
}

function RelatedCollections({ category }: { category: GalleryCategory }) {
  const related = category.related
    .map((slug) => galleryCategories.find((item) => item.slug === slug))
    .filter((item): item is GalleryCategory => Boolean(item))
    .slice(0, 3);
  return (
    <section className="container gallery-related-section section-space">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> CONTINUE EXPLORING
          </span>
          <h2>Related collections</h2>
        </div>
      </div>
      <div className="gallery-related-grid">
        {related.map((item) => (
          <Link key={item.slug} to="/gallery/$categorySlug" params={{ categorySlug: item.slug }}>
            <span>{item.title}</span>
            <ArrowUpRight size={15} />
          </Link>
        ))}
      </div>
    </section>
  );
}

function GalleryDetailsPage() {
  const { categorySlug } = Route.useParams();
  const category = galleryCategories.find((item) => item.slug === categorySlug);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [type, setType] = useState<"all" | "photo" | "video">("all");
  const [order, setOrder] = useState<"newest" | "oldest">("newest");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allItems = getVerifiedCategoryMedia(categorySlug);
  const years = useMemo(
    () =>
      Array.from(
        new Set(
          allItems.map((item) => item.year).filter((value): value is number => value !== null),
        ),
      ).sort((a, b) => b - a),
    [allItems],
  );
  const results = useMemo(
    () => filterGalleryMedia(allItems, query, year, type, order),
    [allItems, query, year, type, order],
  );
  const photos = results.filter((item) => item.type === "photo");
  const videos = results.filter((item) => item.type === "video");
  const resetFilters = () => {
    setQuery("");
    setYear("all");
    setType("all");
    setOrder("newest");
  };
  const updateFilter = (field: "query" | "year" | "type" | "order", value: string) => {
    if (field === "query") setQuery(value);
    if (field === "year") setYear(value);
    if (field === "type" && (value === "all" || value === "photo" || value === "video"))
      setType(value);
    if (field === "order" && (value === "newest" || value === "oldest")) setOrder(value);
  };

  if (!category) {
    return (
      <section className="container gallery-not-found">
        <Image size={32} strokeWidth={1.2} />
        <h1>Collection not found</h1>
        <p>This gallery collection is not available.</p>
        <Button asChild variant="editorial">
          <Link to="/gallery">
            <ArrowLeft size={14} /> Back to Gallery
          </Link>
        </Button>
      </section>
    );
  }

  return (
    <div className="gallery-detail-page">
      <CollectionHeader category={category} count={allItems.length} />
      {category.slug === "students-school-life" && (
        <section className="container gallery-illustrations section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" /> STUDENTS &amp; SCHOOL LIFE
              </span>
              <h2>Illustrative student photos</h2>
            </div>
          </div>
          <p className="gallery-illustrations-note">
            These example images are illustrative only; they are not verified photographs of GSP or
            part of the historical archive.
          </p>
          <div className="gallery-illustration-grid">
            {studentIllustrations.map((imageUrl) => (
              <figure key={imageUrl} className="gallery-illustration-card">
                <img src={imageUrl} alt="" loading="lazy" />
                <figcaption>Illustrative image · not verified GSP archive media</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <section className="container gallery-detail-content section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" /> COLLECTION MEDIA
            </span>
            <h2>Photographs &amp; videos</h2>
          </div>
          <span className="collection-status">
            {results.length} verified {results.length === 1 ? "item" : "items"}
          </span>
        </div>
        <MediaFilters
          query={query}
          year={year}
          type={type}
          order={order}
          years={years}
          onChange={updateFilter}
        />
        {(query || year !== "all" || type !== "all" || order !== "newest") && (
          <div className="gallery-filter-summary">
            <span>
              {results.length} matching verified {results.length === 1 ? "item" : "items"}
            </span>
            <Button variant="link" size="sm" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        )}
        {results.length ? (
          <div className="gallery-media-grid">
            {photos.map((item) => (
              <PhotoCard
                key={item.id}
                media={item}
                onOpen={() => setLightboxIndex(photos.findIndex((photo) => photo.id === item.id))}
              />
            ))}
            {videos.map((item) => (
              <VideoCard key={item.id} media={item} />
            ))}
          </div>
        ) : (
          <div className="gallery-detail-empty" role="status">
            <span className="gallery-empty-icon">
              <Camera size={26} strokeWidth={1.2} />
            </span>
            <span className="eyebrow">COLLECTION IN PREPARATION</span>
            <h2>
              {allItems.length
                ? "No media matches these filters"
                : "Historical materials are being collected"}
            </h2>
            <p>
              {allItems.length
                ? "Try a different title, year, or media type."
                : "There are no verified photographs or videos in this collection yet. Materials will appear here after their source, context, and publication permission have been reviewed."}
            </p>
            {allItems.length > 0 && (
              <Button variant="editorial" onClick={resetFilters}>
                Clear filters
              </Button>
            )}
          </div>
        )}
        {lightboxIndex !== null && photos[lightboxIndex] && (
          <PhotoLightbox
            items={photos}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </section>

      <RelatedCollections category={category} />
      <nav className="container gallery-detail-bottom-nav" aria-label="Related archive sections">
        <Link to="/gallery" className="text-link">
          <ArrowLeft size={14} /> Back to Gallery
        </Link>
        <Link to="/our-history" className="text-link">
          Related Historical Stories <ArrowRight size={14} />
        </Link>
        <Link to="/events" className="text-link">
          Related Events <ArrowRight size={14} />
        </Link>
        <Link to="/timeline" className="text-link">
          Historical Timeline <ArrowRight size={14} />
        </Link>
      </nav>
    </div>
  );
}
