import { useMemo, useState, type ChangeEvent } from "react";
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Eye,
  FileText,
  ImagePlus,
  Plus,
  Search,
  ShieldCheck,
  SquarePen,
  Trash2,
  X,
} from "lucide-react";
import { AdminLayout } from "@/components/admin/dashboard-page";

const categories = [
  "School Foundation",
  "Institutional Development",
  "Education History",
  "School Leadership",
  "Important Milestones",
  "Historical Remembrance",
  "Community History",
] as const;

type Category = (typeof categories)[number];
type VerificationStatus = "Draft" | "Pending Verification" | "Verified" | "Needs Correction";
type PublicationStatus = "Draft" | "Published";
type SortOrder = "newest" | "oldest" | "title";
type Story = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: Category;
  period: string;
  coverImage: string;
  imageCaption: string;
  imageCredit: string;
  contributor: string;
  sources: string;
  verificationStatus: VerificationStatus;
  publicationStatus: PublicationStatus;
  verificationNotes: string;
  verifiedBy: string;
  updatedAt: string;
};

const demoStories: Story[] = [
  {
    id: "demo-1",
    title: "Demonstration story — school foundation",
    slug: "demonstration-school-foundation",
    description: "Placeholder record; verified historical details have not been supplied.",
    content: "",
    category: "School Foundation",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    verificationNotes: "",
    verifiedBy: "",
    updatedAt: "2026-11-24",
  },
  {
    id: "demo-2",
    title: "Demonstration story — institutional development",
    slug: "demonstration-institutional-development",
    description: "Placeholder record; institutional details require documentary sources.",
    content: "",
    category: "Institutional Development",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    verificationNotes: "Demonstration verification note.",
    verifiedBy: "Verifier not recorded",
    updatedAt: "2026-11-20",
  },
  {
    id: "demo-3",
    title: "Demonstration story — education history",
    slug: "demonstration-education-history",
    description:
      "Placeholder record; add a short description when verified information is available.",
    content: "",
    category: "Education History",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Needs Correction",
    publicationStatus: "Draft",
    verificationNotes: "Demonstration note: source details are needed.",
    verifiedBy: "",
    updatedAt: "2026-11-16",
  },
  {
    id: "demo-4",
    title: "Demonstration story — leadership record",
    slug: "demonstration-leadership-record",
    description: "Placeholder record; leadership information has not been verified.",
    content: "",
    category: "School Leadership",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Draft",
    publicationStatus: "Draft",
    verificationNotes: "",
    verifiedBy: "",
    updatedAt: "2026-11-12",
  },
  {
    id: "demo-5",
    title: "Demonstration story — community history",
    slug: "demonstration-community-history",
    description: "Placeholder record for a future, properly sourced community account.",
    content: "",
    category: "Community History",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    verificationNotes: "",
    verifiedBy: "",
    updatedAt: "2026-11-08",
  },
  {
    id: "demo-6",
    title: "Demonstration story — historical remembrance",
    slug: "demonstration-historical-remembrance",
    description: "Placeholder record; details require confirmation from reliable references.",
    content: "",
    category: "Historical Remembrance",
    period: "",
    coverImage: "",
    imageCaption: "",
    imageCredit: "",
    contributor: "",
    sources: "",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    verificationNotes: "",
    verifiedBy: "Verifier not recorded",
    updatedAt: "2026-11-02",
  },
];

const emptyStory = (): Omit<Story, "id" | "updatedAt"> => ({
  title: "",
  slug: "",
  description: "",
  content: "",
  category: "School Foundation",
  period: "",
  coverImage: "",
  imageCaption: "",
  imageCredit: "",
  contributor: "",
  sources: "",
  verificationStatus: "Draft",
  publicationStatus: "Draft",
  verificationNotes: "",
  verifiedBy: "",
});

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatUpdatedAt(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(`${value}T12:00:00`),
  );
}

function hasPublishingRequirements(story: Story) {
  return [
    story.title,
    story.slug,
    story.description,
    story.content,
    story.period,
    story.contributor,
    story.sources,
  ].every((value) => value.trim().length > 0);
}

function VerificationBadge({ status }: { status: VerificationStatus }) {
  const statusClass = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`history-status history-verification ${statusClass}`}>{status}</span>;
}

function PublicationBadge({ status }: { status: PublicationStatus }) {
  return (
    <span className={`history-status history-publication ${status.toLowerCase()}`}>{status}</span>
  );
}

function StoryForm({
  story,
  mode,
  onCancel,
  onSave,
}: {
  story: Story | null;
  mode: "create" | "edit" | "view";
  onCancel: () => void;
  onSave: (value: Story, action: "draft" | "verify" | "publish") => void;
}) {
  const [values, setValues] = useState<Story>(() => ({
    ...emptyStory(),
    ...story,
    id: story?.id ?? "",
    updatedAt: story?.updatedAt ?? "",
  }));
  const [slugEdited, setSlugEdited] = useState(mode !== "create");
  const [errors, setErrors] = useState<string[]>([]);
  const readOnly = mode === "view";
  const canPublish = values.verificationStatus === "Verified" && hasPublishingRequirements(values);

  const update = <K extends keyof Story>(key: K, value: Story[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const updateTitle = (title: string) => {
    setValues((current) => ({
      ...current,
      title,
      ...(!slugEdited ? { slug: slugify(title) } : {}),
    }));
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors(["Choose a valid image file."]);
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      update("coverImage", typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => setErrors(["The selected image could not be read."]);
    reader.readAsDataURL(file);
  };

  const submit = (action: "draft" | "verify" | "publish") => {
    const required: [string, string][] =
      action === "draft"
        ? [
            ["Story title", values.title],
            ["URL slug", values.slug],
          ]
        : [
            ["Story title", values.title],
            ["URL slug", values.slug],
            ["Short description", values.description],
            ["Full historical story", values.content],
            ["Historical period or year", values.period],
            ["Author or contributor", values.contributor],
            ["Historical sources and references", values.sources],
          ];
    const missing = required.filter(([, value]) => !value.trim()).map(([label]) => label);
    if (action === "publish" && values.verificationStatus !== "Verified") {
      missing.push("Verified status");
    }
    if (missing.length) {
      setErrors(missing);
      return;
    }
    setErrors([]);
    onSave(values, action);
  };

  const fieldDisabled = readOnly;

  return (
    <section
      className="admin-panel history-form-panel"
      aria-label={mode === "view" ? "Story details" : "Story editor"}
    >
      <div className="history-form-heading">
        <div>
          <button type="button" className="history-back-link" onClick={onCancel}>
            <ArrowLeft size={15} /> Back to stories
          </button>
          <h2>
            {mode === "create"
              ? "Add New Story"
              : mode === "edit"
                ? "Edit History Story"
                : "Story Details"}
          </h2>
          <p>
            Enter verified information and its supporting references. Changes remain in this
            frontend preview.
          </p>
        </div>
        {mode !== "create" && <VerificationBadge status={values.verificationStatus} />}
      </div>

      {errors.length > 0 && (
        <div className="history-validation" role="alert">
          <strong>Complete or correct these fields:</strong> {errors.join(", ")}
        </div>
      )}

      <div className="history-form-grid">
        <label className="history-field history-field-wide">
          <span>
            Story Title <b>*</b>
          </span>
          <input
            disabled={fieldDisabled}
            value={values.title}
            onChange={(event) => updateTitle(event.target.value)}
          />
        </label>
        <label className="history-field">
          <span>
            URL Slug <b>*</b>
          </span>
          <input
            disabled={fieldDisabled}
            value={values.slug}
            onChange={(event) => {
              setSlugEdited(true);
              update("slug", slugify(event.target.value));
            }}
          />
        </label>
        <label className="history-field">
          <span>
            Historical Category <b>*</b>
          </span>
          <select
            disabled={fieldDisabled}
            value={values.category}
            onChange={(event) => update("category", event.target.value as Category)}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="history-field">
          <span>
            Historical Year or Period <b>*</b>
          </span>
          <input
            disabled={fieldDisabled}
            value={values.period}
            placeholder="e.g. Enter a verified period"
            onChange={(event) => update("period", event.target.value)}
          />
        </label>
        <label className="history-field">
          <span>
            Author or Contributor <b>*</b>
          </span>
          <input
            disabled={fieldDisabled}
            value={values.contributor}
            onChange={(event) => update("contributor", event.target.value)}
          />
        </label>
        <label className="history-field history-field-wide">
          <span>
            Short Description <b>*</b>
          </span>
          <textarea
            disabled={fieldDisabled}
            rows={2}
            value={values.description}
            onChange={(event) => update("description", event.target.value)}
          />
        </label>
        <label className="history-field history-field-wide">
          <span>
            Full Historical Story Content <b>*</b>
          </span>
          <textarea
            disabled={fieldDisabled}
            rows={7}
            value={values.content}
            onChange={(event) => update("content", event.target.value)}
          />
        </label>
        <div className="history-field history-field-wide">
          <span>Cover Image</span>
          <label className={`history-upload${readOnly ? " is-disabled" : ""}`}>
            {values.coverImage ? (
              <img src={values.coverImage} alt={values.imageCaption || "Story cover preview"} />
            ) : (
              <ImagePlus size={23} />
            )}
            <span>{values.coverImage ? "Image selected" : "Choose a cover image"}</span>
            <small>Image preview only; not uploaded to a server.</small>
            {!readOnly && <input type="file" accept="image/*" onChange={handleImage} />}
          </label>
        </div>
        <label className="history-field">
          <span>Image Caption</span>
          <input
            disabled={fieldDisabled}
            value={values.imageCaption}
            onChange={(event) => update("imageCaption", event.target.value)}
          />
        </label>
        <label className="history-field">
          <span>Image Source / Credit</span>
          <input
            disabled={fieldDisabled}
            value={values.imageCredit}
            onChange={(event) => update("imageCredit", event.target.value)}
          />
        </label>
        <label className="history-field history-field-wide">
          <span>
            Historical Sources and References <b>*</b>
          </span>
          <textarea
            disabled={fieldDisabled}
            rows={3}
            value={values.sources}
            onChange={(event) => update("sources", event.target.value)}
            placeholder="List archival references, documents, or oral-history sources."
          />
        </label>
        <label className="history-field">
          <span>Verification Status</span>
          <select
            disabled={fieldDisabled}
            value={values.verificationStatus}
            onChange={(event) =>
              update("verificationStatus", event.target.value as VerificationStatus)
            }
          >
            {(
              [
                "Draft",
                "Pending Verification",
                "Verified",
                "Needs Correction",
              ] as VerificationStatus[]
            ).map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </label>
        <label className="history-field">
          <span>Publication Status</span>
          <input disabled value={values.publicationStatus} />
        </label>
        <label className="history-field">
          <span>Verification Notes</span>
          <textarea
            disabled={fieldDisabled}
            rows={3}
            value={values.verificationNotes}
            onChange={(event) => update("verificationNotes", event.target.value)}
          />
        </label>
        <label className="history-field">
          <span>Verified By (if recorded)</span>
          <input
            disabled={fieldDisabled}
            value={values.verifiedBy}
            onChange={(event) => update("verifiedBy", event.target.value)}
            placeholder="Not recorded"
          />
        </label>
      </div>

      <div className="history-form-actions">
        <button type="button" className="history-button secondary" onClick={onCancel}>
          {readOnly ? "Close" : "Cancel"}
        </button>
        {!readOnly && (
          <>
            <button
              type="button"
              className="history-button secondary"
              onClick={() => submit("draft")}
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="history-button secondary"
              onClick={() => submit("verify")}
            >
              <ShieldCheck size={15} /> Submit for Verification
            </button>
            <button
              type="button"
              className="history-button primary"
              disabled={!canPublish}
              title={
                !canPublish
                  ? "Complete required fields and mark the story verified to publish."
                  : undefined
              }
              onClick={() => submit("publish")}
            >
              <Check size={15} /> Publish
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export function HistoryManagementPage() {
  const [stories, setStories] = useState<Story[]>(demoStories);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [publicationFilter, setPublicationFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [page, setPage] = useState(1);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [formMode, setFormMode] = useState<"create" | "edit" | "view" | null>(null);
  const [feedback, setFeedback] = useState("");
  const pageSize = 5;

  const filteredStories = useMemo(() => {
    const filtered = stories.filter(
      (story) =>
        story.title.toLowerCase().includes(search.trim().toLowerCase()) &&
        (categoryFilter === "all" || story.category === categoryFilter) &&
        (publicationFilter === "all" || story.publicationStatus === publicationFilter) &&
        (verificationFilter === "all" || story.verificationStatus === verificationFilter),
    );
    return filtered.sort((left, right) => {
      if (sortOrder === "title") return left.title.localeCompare(right.title);
      return sortOrder === "newest"
        ? right.updatedAt.localeCompare(left.updatedAt)
        : left.updatedAt.localeCompare(right.updatedAt);
    });
  }, [stories, search, categoryFilter, publicationFilter, verificationFilter, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredStories.length / pageSize));
  const visibleStories = filteredStories.slice((page - 1) * pageSize, page * pageSize);
  const startCreate = () => {
    setActiveStory(null);
    setFormMode("create");
    setFeedback("");
  };
  const startEdit = (story: Story, mode: "edit" | "view") => {
    setActiveStory(story);
    setFormMode(mode);
    setFeedback("");
  };
  const closeForm = () => {
    setFormMode(null);
    setActiveStory(null);
  };

  const saveStory = (value: Story, action: "draft" | "verify" | "publish") => {
    if (action === "publish" && value.verificationStatus !== "Verified") {
      setFeedback("A story must be verified before it can be published.");
      return;
    }
    if (
      value.publicationStatus === "Published" &&
      action !== "publish" &&
      !window.confirm("Save these changes and unpublish this story?")
    ) {
      return;
    }
    if (action === "publish" && !window.confirm("Publish this verified story?")) return;
    const next: Story = {
      ...value,
      id: value.id || `story-${Date.now()}`,
      updatedAt: new Date().toISOString().slice(0, 10),
      verificationStatus: action === "verify" ? "Pending Verification" : value.verificationStatus,
      publicationStatus: action === "publish" ? "Published" : "Draft",
    };
    setStories((current) =>
      value.id
        ? current.map((story) => (story.id === value.id ? next : story))
        : [next, ...current],
    );
    setFeedback(
      action === "publish"
        ? "Story published in this frontend preview."
        : action === "verify"
          ? "Story submitted for verification."
          : "Draft saved in this frontend preview.",
    );
    setPage(1);
    closeForm();
  };

  const deleteStory = (story: Story) => {
    if (!window.confirm(`Delete "${story.title}" from this frontend preview?`)) return;
    setStories((current) => current.filter((item) => item.id !== story.id));
    setFeedback("Story deleted from this frontend preview.");
  };

  const togglePublication = (story: Story) => {
    const nextStatus: PublicationStatus =
      story.publicationStatus === "Published" ? "Draft" : "Published";
    if (
      nextStatus === "Published" &&
      (story.verificationStatus !== "Verified" || !hasPublishingRequirements(story))
    ) {
      setFeedback(
        "A story must be verified and have complete required content and references before it can be published.",
      );
      return;
    }
    const action = nextStatus === "Published" ? "Publish" : "Unpublish";
    if (!window.confirm(`${action} "${story.title}"?`)) return;
    setStories((current) =>
      current.map((item) =>
        item.id === story.id
          ? {
              ...item,
              publicationStatus: nextStatus,
              updatedAt: new Date().toISOString().slice(0, 10),
            }
          : item,
      ),
    );
    setFeedback(
      `Story ${nextStatus === "Published" ? "published" : "unpublished"} in this frontend preview.`,
    );
  };

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("all");
    setPublicationFilter("all");
    setVerificationFilter("all");
    setSortOrder("newest");
    setPage(1);
  };

  return (
    <AdminLayout
      pageTitle="History Management"
      activePage="History Management"
      showGlobalSearch={false}
    >
      <div className="history-page">
        {formMode ? (
          <StoryForm
            key={`${formMode}-${activeStory?.id ?? "new"}`}
            story={activeStory}
            mode={formMode}
            onCancel={closeForm}
            onSave={saveStory}
          />
        ) : (
          <>
            <div className="history-page-heading">
              <div>
                <p className="history-eyebrow">GSP HISTORICAL ARCHIVE</p>
                <h2>History Management</h2>
                <p>Manage and preserve the historical stories of GSP.</p>
              </div>
              <button type="button" className="history-button primary" onClick={startCreate}>
                <Plus size={16} /> Add New Story
              </button>
            </div>

            <div className="history-demo-note">
              <ShieldCheck size={16} />
              <span>
                <strong>Demonstration records</strong> — sample placeholders only; no verified GSP
                historical details are represented or permanently stored.
              </span>
            </div>
            {feedback && (
              <div className="history-feedback" role="status">
                {feedback}
                <button type="button" aria-label="Dismiss message" onClick={() => setFeedback("")}>
                  <X size={15} />
                </button>
              </div>
            )}

            <section className="history-stat-grid" aria-label="History story statistics">
              <article>
                <span>Total Stories</span>
                <strong>{stories.length}</strong>
                <BookOpen size={18} />
              </article>
              <article>
                <span>Published Stories</span>
                <strong>
                  {stories.filter((story) => story.publicationStatus === "Published").length}
                </strong>
                <Check size={18} />
              </article>
              <article>
                <span>Draft Stories</span>
                <strong>
                  {stories.filter((story) => story.publicationStatus === "Draft").length}
                </strong>
                <FileText size={18} />
              </article>
              <article>
                <span>Pending Verification</span>
                <strong>
                  {
                    stories.filter((story) => story.verificationStatus === "Pending Verification")
                      .length
                  }
                </strong>
                <Clock3 size={18} />
              </article>
            </section>

            <section className="admin-panel history-list-panel">
              <div className="history-list-heading">
                <div>
                  <h3>Historical Stories</h3>
                  <p>Review story content, sources, and publication readiness.</p>
                </div>
                <span className="history-demo-tag">FRONTEND PREVIEW</span>
              </div>
              <div className="history-filters">
                <label className="history-search">
                  <Search size={16} />
                  <span className="sr-only">Search by story title</span>
                  <input
                    placeholder="Search story titles..."
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                      setPage(1);
                    }}
                  />
                  {search && (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => {
                        setSearch("");
                        setPage(1);
                      }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </label>
                <label>
                  <span className="sr-only">Filter by category</span>
                  <select
                    value={categoryFilter}
                    onChange={(event) => {
                      setCategoryFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All categories</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} />
                </label>
                <label>
                  <span className="sr-only">Filter by publication status</span>
                  <select
                    value={publicationFilter}
                    onChange={(event) => {
                      setPublicationFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All publication statuses</option>
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                  <ChevronDown size={14} />
                </label>
                <label>
                  <span className="sr-only">Filter by verification status</span>
                  <select
                    value={verificationFilter}
                    onChange={(event) => {
                      setVerificationFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All verification statuses</option>
                    {(
                      [
                        "Draft",
                        "Pending Verification",
                        "Verified",
                        "Needs Correction",
                      ] as VerificationStatus[]
                    ).map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} />
                </label>
                <label>
                  <span className="sr-only">Sort stories</span>
                  <select
                    value={sortOrder}
                    onChange={(event) => {
                      setSortOrder(event.target.value as SortOrder);
                      setPage(1);
                    }}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="title">Title A–Z</option>
                  </select>
                  <ChevronDown size={14} />
                </label>
                <button type="button" className="history-clear-button" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
              <div className="history-table-scroll">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Cover Image</th>
                      <th>Story Title</th>
                      <th>Category</th>
                      <th>Historical Period / Year</th>
                      <th>Author / Contributor</th>
                      <th>Verification</th>
                      <th>Publication</th>
                      <th>Last Updated</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleStories.map((story) => (
                      <tr key={story.id}>
                        <td>
                          {story.coverImage ? (
                            <img
                              className="history-cover"
                              src={story.coverImage}
                              alt={story.imageCaption || "Story cover"}
                            />
                          ) : (
                            <span className="history-cover-placeholder">
                              <ImagePlus size={17} />
                            </span>
                          )}
                        </td>
                        <td>
                          <strong className="history-story-title">{story.title}</strong>
                          <small>/{story.slug}</small>
                        </td>
                        <td>{story.category}</td>
                        <td>{story.period}</td>
                        <td>{story.contributor}</td>
                        <td>
                          <VerificationBadge status={story.verificationStatus} />
                          {story.verifiedBy && (
                            <small className="history-verified-by">By {story.verifiedBy}</small>
                          )}
                        </td>
                        <td>
                          <PublicationBadge status={story.publicationStatus} />
                        </td>
                        <td>{formatUpdatedAt(story.updatedAt)}</td>
                        <td>
                          <div className="history-row-actions">
                            <button
                              type="button"
                              aria-label={`View ${story.title}`}
                              title="View"
                              onClick={() => startEdit(story, "view")}
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              type="button"
                              aria-label={`Edit ${story.title}`}
                              title="Edit"
                              onClick={() => startEdit(story, "edit")}
                            >
                              <SquarePen size={15} />
                            </button>
                            <button
                              type="button"
                              aria-label={`${story.publicationStatus === "Published" ? "Unpublish" : "Publish"} ${story.title}`}
                              title={
                                story.publicationStatus === "Published"
                                  ? "Unpublish"
                                  : story.verificationStatus === "Verified" &&
                                      hasPublishingRequirements(story)
                                    ? "Publish"
                                    : "Complete references and verify before publishing"
                              }
                              disabled={
                                story.publicationStatus !== "Published" &&
                                (story.verificationStatus !== "Verified" ||
                                  !hasPublishingRequirements(story))
                              }
                              onClick={() => togglePublication(story)}
                            >
                              <Check size={15} />
                            </button>
                            <button
                              type="button"
                              aria-label={`Delete ${story.title}`}
                              title="Delete"
                              onClick={() => deleteStory(story)}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {visibleStories.length === 0 && (
                  <div className="history-empty">
                    <Search size={20} />
                    <strong>No stories match these filters</strong>
                    <span>Try different keywords or clear the filters.</span>
                  </div>
                )}
              </div>
              <div className="history-table-footer">
                <span>
                  Showing {filteredStories.length ? (page - 1) * pageSize + 1 : 0}–
                  {Math.min(page * pageSize, filteredStories.length)} of {filteredStories.length}{" "}
                  demonstration stories
                </span>
                <div>
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                  >
                    Previous
                  </button>
                  <span>
                    Page {page} of {pageCount}
                  </span>
                  <button
                    type="button"
                    disabled={page >= pageCount}
                    onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
                  >
                    Next
                  </button>
                </div>
              </div>
            </section>
            <p className="history-storage-note">
              Changes are held in page state for this preview only and are not permanently stored.
            </p>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
