import { useState } from "react";
import {
  Archive,
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import type { ArchiveDocument, DocumentAccess, DocumentCategory } from "@/lib/documents-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DocumentCategoryCard({
  category,
  count,
  selected,
  onSelect,
}: {
  category: DocumentCategory;
  count: number | null;
  selected: boolean;
  onSelect: (slug: string) => void;
}) {
  const Icon = category.icon;
  return (
    <button
      type="button"
      className={`document-category-card${selected ? " is-selected" : ""}`}
      onClick={() => onSelect(category.slug)}
      aria-pressed={selected}
    >
      <span className="document-category-icon">
        <Icon size={20} strokeWidth={1.5} />
      </span>
      <span className="document-category-title">{category.name}</span>
      <span className="document-category-description">{category.description}</span>
      <span className="document-category-bottom">
        <span>{count === null ? "Count not available" : `${count} documents`}</span>
        <span className="text-link">
          Explore collection <ArrowRight size={13} />
        </span>
      </span>
    </button>
  );
}

export function AccessLevelBadge({ access }: { access: DocumentAccess }) {
  const label = access === "internal" ? "Internal archive" : access;
  return (
    <span className={`access-badge access-${access}`}>
      {access === "public" ? <ShieldCheck size={12} /> : <LockKeyhole size={12} />}
      {label}
    </span>
  );
}

export function DocumentCard({
  document,
  onPreview,
}: {
  document: ArchiveDocument;
  onPreview: (document: ArchiveDocument) => void;
}) {
  if (document.access !== "public") return null;
  return (
    <article className="document-card">
      <div className="document-card-cover" aria-hidden="true">
        <FileText size={28} strokeWidth={1.2} />
        <span>{document.format ?? "DOCUMENT"}</span>
      </div>
      <div className="document-card-copy">
        <div className="document-card-meta">
          <span>{document.type}</span>
          <span>{document.year ?? "Date not verified"}</span>
        </div>
        <h3>{document.title}</h3>
        <p>{document.description}</p>
        <div className="document-card-source">
          <span>Source: {document.source ?? "Not verified"}</span>
          <AccessLevelBadge access={document.access} />
        </div>
        <div className="document-card-actions">
          <Button variant="link" size="sm" onClick={() => onPreview(document)}>
            View document <ArrowRight size={14} />
          </Button>
          {document.fileUrl && (
            <a className="document-download-link" href={document.fileUrl} download>
              <ArrowDownToLine size={14} /> Download {document.format ?? "file"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedDocument({ onPreview }: { onPreview: () => void }) {
  return (
    <article className="featured-document">
      <div className="featured-document-cover" aria-hidden="true">
        <Archive size={34} strokeWidth={1.1} />
        <span>COLLECTION PREVIEW</span>
      </div>
      <div className="featured-document-copy">
        <span className="eyebrow">
          <span className="gold-rule" /> FEATURED DOCUMENT
        </span>
        <h2>No verified document is featured yet</h2>
        <p>
          Authentic documents are still being gathered and reviewed. No title, date, author, or
          source has been supplied for a featured item.
        </p>
        <Button variant="editorial" onClick={onPreview}>
          View document <ArrowRight size={14} />
        </Button>
        <span className="featured-document-caption">Preview status: no file available</span>
      </div>
    </article>
  );
}

export function DocumentFilters({
  query,
  category,
  year,
  type,
  order,
  categories,
  years,
  types,
  onChange,
  onClear,
  hasFilters,
}: {
  query: string;
  category: string;
  year: string;
  type: string;
  order: "newest" | "oldest";
  categories: DocumentCategory[];
  years: string[];
  types: string[];
  onChange: (field: "query" | "category" | "year" | "type" | "order", value: string) => void;
  onClear: () => void;
  hasFilters: boolean;
}) {
  return (
    <div className="documents-filter-wrap">
      <div className="documents-filter-bar">
        <label className="documents-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search documents by title or keyword</span>
          <input
            value={query}
            onChange={(event) => onChange("query", event.target.value)}
            placeholder="Search title or keyword"
          />
          {query && (
            <button type="button" aria-label="Clear search" onClick={() => onChange("query", "")}>
              <X size={14} />
            </button>
          )}
        </label>
        <label>
          <span className="sr-only">Filter by category</span>
          <select value={category} onChange={(event) => onChange("category", event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option value={item.slug} key={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by year</span>
          <select value={year} onChange={(event) => onChange("year", event.target.value)}>
            <option value="all">All years</option>
            {years.map((item) => (
              <option value={item} key={item}>
                {item === "undated" ? "Date not verified" : item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by document type</span>
          <select value={type} onChange={(event) => onChange("type", event.target.value)}>
            <option value="all">All document types</option>
            {types.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Sort documents</span>
          <select value={order} onChange={(event) => onChange("order", event.target.value)}>
            <option value="newest">Newest to oldest</option>
            <option value="oldest">Oldest to newest</option>
          </select>
        </label>
      </div>
      {hasFilters && (
        <Button variant="link" size="sm" onClick={onClear}>
          Clear filters <X size={13} />
        </Button>
      )}
    </div>
  );
}

export function DocumentPreview({
  document,
  open,
  onOpenChange,
}: {
  document: ArchiveDocument | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [failedPreview, setFailedPreview] = useState(false);
  const publicFile = document?.access === "public" && document.fileUrl && !failedPreview;
  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) setFailedPreview(false);
        onOpenChange(nextOpen);
      }}
    >
      <DialogContent className="document-preview-dialog">
        <DialogHeader className="document-preview-header">
          <span className="eyebrow">DOCUMENT PREVIEW</span>
          <DialogTitle>{document?.title ?? "Document preview unavailable"}</DialogTitle>
          <DialogDescription>
            {document?.description ??
              "No verified document or file has been supplied to the archive."}
          </DialogDescription>
        </DialogHeader>
        {publicFile ? (
          <iframe
            className="document-preview-frame"
            title={`Preview of ${document.title}`}
            src={document.fileUrl!}
            onError={() => setFailedPreview(true)}
          />
        ) : (
          <div className="document-preview-placeholder">
            <BookOpen size={34} strokeWidth={1.2} />
            <strong>No public preview is available</strong>
            <span>
              {document?.access !== "public"
                ? "This material is not available for public access."
                : "A verified file has not been deposited for this item."}
            </span>
          </div>
        )}
        <dl className="document-preview-details">
          <div>
            <dt>Source</dt>
            <dd>{document?.source ?? "Not verified"}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{document?.year ?? "Not verified"}</dd>
          </div>
          {document && (
            <div>
              <dt>Access</dt>
              <dd>
                <AccessLevelBadge access={document.access} />
              </dd>
            </div>
          )}
        </dl>
        {document?.access === "public" && document.fileUrl && !failedPreview && (
          <a className="document-preview-download" href={document.fileUrl} download>
            <ArrowDownToLine size={15} /> Download approved public document
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}
