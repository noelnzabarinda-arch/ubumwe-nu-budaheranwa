import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DocumentCard,
  DocumentCategoryCard,
  DocumentFilters,
  DocumentPreview,
  FeaturedDocument,
} from "@/components/archive/documents";
import { archiveHead } from "@/lib/archive-data";
import { documentCategories, documentRecords, filterDocuments } from "@/lib/documents-data";

const documentTypes = [
  "Official record",
  "Report",
  "Certificate",
  "Letter",
  "Meeting record",
  "Publication",
  "Research",
];

export const Route = createFileRoute("/documents")({
  head: () =>
    archiveHead(
      "Documents Archive",
      "Explore the GSP Historical Archive document collections. Documents will be listed only after verification and access review.",
    ),
  component: DocumentsArchive,
});

function DocumentsArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [order, setOrder] = useState<"newest" | "oldest">("newest");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewDocument, setPreviewDocument] = useState<(typeof documentRecords)[number] | null>(
    null,
  );

  const results = useMemo(
    () => filterDocuments(documentRecords, { query, category, year, type, order }),
    [query, category, year, type, order],
  );
  const hasFilters = Boolean(
    query || category !== "all" || year !== "all" || type !== "all" || order !== "newest",
  );
  const changeFilter = (field: "query" | "category" | "year" | "type" | "order", value: string) => {
    if (field === "query") setQuery(value);
    if (field === "category") setCategory(value);
    if (field === "year") setYear(value);
    if (field === "type") setType(value);
    if (field === "order") setOrder(value === "oldest" ? "oldest" : "newest");
  };
  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setYear("all");
    setType("all");
    setOrder("newest");
  };
  const showPreview = (document: (typeof documentRecords)[number] | null = null) => {
    setPreviewDocument(document);
    setPreviewOpen(true);
  };
  const years = Array.from(
    new Set(documentRecords.map((record) => record.year?.toString() ?? "undated")),
  ).sort((a, b) => {
    if (a === "undated") return 1;
    if (b === "undated") return -1;
    return Number(b) - Number(a);
  });

  return (
    <div className="documents-page">
      <header className="archive-page-header">
        <div className="container">
          <nav className="archive-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Documents Archive</span>
          </nav>
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <div className="archive-page-title-row">
            <h1>The Records That Preserve Our History</h1>
            <p>
              A careful home for the documents and institutional records that illuminate GSP’s
              history. Each item will be reviewed for provenance, accuracy, permissions, and access
              before it is shared.
            </p>
          </div>
        </div>
      </header>

      <section className="container documents-feature-section" aria-label="Featured document">
        <FeaturedDocument onPreview={() => showPreview()} />
      </section>

      <section
        className="documents-categories-section section-space"
        aria-labelledby="document-categories-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" /> BROWSE THE COLLECTION
              </span>
              <h2 id="document-categories-title">Document categories</h2>
            </div>
            <span className="collection-status">
              <ShieldCheck size={14} /> Counts reflect documents listed here
            </span>
          </div>
          <div className="document-category-grid">
            {documentCategories.map((item) => (
              <DocumentCategoryCard
                category={item}
                count={
                  documentRecords.filter(
                    (record) => record.category === item.slug && record.access === "public",
                  ).length
                }
                selected={category === item.slug}
                onSelect={(slug) => {
                  setCategory((current) => (current === slug ? "all" : slug));
                  document
                    .getElementById("document-collection")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                key={item.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="documents-collection-section section-space" id="document-collection">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="gold-rule" /> THE COLLECTION
              </span>
              <h2>Search the documents</h2>
            </div>
            <span className="collection-status">
              <ShieldCheck size={14} /> Publicly approved material only
            </span>
          </div>
          <DocumentFilters
            query={query}
            category={category}
            year={year}
            type={type}
            order={order}
            categories={documentCategories}
            years={years}
            types={documentTypes}
            onChange={changeFilter}
            onClear={clearFilters}
            hasFilters={hasFilters}
          />
          <div className="documents-results-bar" aria-live="polite">
            <span>
              {results.length} publicly available {results.length === 1 ? "document" : "documents"}
            </span>
            {hasFilters && (
              <Button variant="link" size="sm" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
            <span>Restricted and internal records are not listed</span>
          </div>
          {results.length ? (
            <div className="document-list">
              {results.map((record) => (
                <DocumentCard document={record} onPreview={showPreview} key={record.id} />
              ))}
            </div>
          ) : (
            <div className="documents-empty-state" role="status">
              <div className="documents-empty-icon">
                <ShieldCheck size={24} strokeWidth={1.3} />
              </div>
              <span className="eyebrow">VERIFIED COLLECTION</span>
              <h3>
                {hasFilters
                  ? "No documents match these filters"
                  : "No verified documents are available yet"}
              </h3>
              <p>
                No public documents have been supplied and approved for this collection. We will
                publish records only when their source, description, and access permissions have
                been reviewed.
              </p>
              {hasFilters && (
                <Button variant="editorial" onClick={clearFilters}>
                  Clear filters <ArrowRight size={14} />
                </Button>
              )}
            </div>
          )}
          <div className="documents-access-note">
            <span className="access-badge access-public">
              <ShieldCheck size={12} /> Public
            </span>
            <p>
              Approved for general visitors. Download links appear only when a public file is
              available.
            </p>
            <span className="access-badge access-restricted">Restricted</span>
            <span className="access-badge access-internal">Internal archive</span>
            <p>
              Restricted and internal materials are withheld and cannot be previewed or downloaded
              here.
            </p>
          </div>
        </div>
      </section>

      <section className="container documents-contribute section-space">
        <div>
          <span className="eyebrow">
            <span className="gold-rule" /> HELP PRESERVE THE RECORD
          </span>
          <h2>Have a document to share?</h2>
          <p>
            Read the archive’s contribution guidance before sharing materials or personal
            information.
          </p>
        </div>
        <Link className="text-link" to="/archive/$collection" params={{ collection: "contribute" }}>
          Contribution guidance <ArrowRight size={14} />
        </Link>
      </section>

      <DocumentPreview
        document={previewDocument}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </div>
  );
}
