import { useEffect, useMemo, useState, type ChangeEvent, type DragEvent } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Eye,
  FolderPlus,
  Grid2X2,
  Image as ImageIcon,
  Layers3,
  List,
  Plus,
  Search,
  ShieldCheck,
  SquarePen,
  Trash2,
  Upload,
  Video,
  X,
} from "lucide-react";
import { AdminLayout } from "@/components/admin/dashboard-page";

const categories = [
  "School History",
  "Students & School Life",
  "Teachers & Staff",
  "Former Leaders",
  "Events & Celebrations",
  "Remembrance & Memorial",
  "Alumni & Reunions",
  "Historical Documents",
  "Videos & Documentaries",
] as const;

type MediaCategory = (typeof categories)[number];
type VerificationStatus = "Draft" | "Pending Verification" | "Verified" | "Needs Correction";
type PublicationStatus = "Draft" | "Published";
type SortOrder = "newest" | "oldest" | "title";
type ViewMode = "grid" | "list";

type MediaRecord = {
  id: string;
  title: string;
  description: string;
  type: "Photo" | "Video";
  category: MediaCategory;
  period: string;
  uploadDate: string;
  verificationStatus: VerificationStatus;
  publicationStatus: PublicationStatus;
  caption: string;
  creator: string;
  source: string;
  permission: string;
  relatedStory: string;
  relatedEvent: string;
  verificationNotes: string;
  previewUrl: string;
};

type CollectionRecord = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: MediaCategory;
  period: string;
  sources: string;
  verificationStatus: VerificationStatus;
  publicationStatus: PublicationStatus;
  mediaIds: string[];
  coverImage: string;
};

const demoMedia: MediaRecord[] = [
  {
    id: "media-1",
    title: "Demonstration — School archive photograph",
    description:
      "Sample record; the original historical photograph and metadata have not been supplied.",
    type: "Photo",
    category: "School History",
    period: "Period not yet verified",
    uploadDate: "2026-11-24",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    caption: "[Demonstration caption]",
    creator: "[Creator not recorded]",
    source: "[Source not recorded]",
    permission: "[Permission status not recorded]",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "",
    previewUrl: "",
  },
  {
    id: "media-2",
    title: "Demonstration — Student life image",
    description: "Placeholder media record for frontend demonstration only.",
    type: "Photo",
    category: "Students & School Life",
    period: "Period not yet verified",
    uploadDate: "2026-11-21",
    verificationStatus: "Verified",
    publicationStatus: "Published",
    caption: "[Caption pending source review]",
    creator: "[Creator not recorded]",
    source: "[Original source pending]",
    permission: "[Permission confirmed only with a real record]",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "[Demonstration verification note]",
    previewUrl: "",
  },
  {
    id: "media-3",
    title: "Demonstration — Historical staff record",
    description: "Sample record. No real person or historical claim is represented.",
    type: "Photo",
    category: "Teachers & Staff",
    period: "Period not yet verified",
    uploadDate: "2026-11-18",
    verificationStatus: "Needs Correction",
    publicationStatus: "Draft",
    caption: "[Caption pending]",
    creator: "[Photographer unknown]",
    source: "[Source pending]",
    permission: "[Permission pending]",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "[Metadata requires review]",
    previewUrl: "",
  },
  {
    id: "media-4",
    title: "Demonstration — Memorial documentary",
    description:
      "Placeholder video metadata. Add an actual local file only when properly authorized.",
    type: "Video",
    category: "Remembrance & Memorial",
    period: "Period not yet verified",
    uploadDate: "2026-11-13",
    verificationStatus: "Draft",
    publicationStatus: "Draft",
    caption: "[Respectful caption pending]",
    creator: "[Creator not recorded]",
    source: "[Source not recorded]",
    permission: "[Permission not recorded]",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "",
    previewUrl: "",
  },
  {
    id: "media-5",
    title: "Demonstration — Event programme scan",
    description: "Sample historical document image. Replace with a verified archival record.",
    type: "Photo",
    category: "Historical Documents",
    period: "Period not yet verified",
    uploadDate: "2026-11-08",
    verificationStatus: "Verified",
    publicationStatus: "Draft",
    caption: "[Document caption pending]",
    creator: "[Creator not recorded]",
    source: "[Source pending]",
    permission: "[Permission pending]",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "[Demonstration verification]",
    previewUrl: "",
  },
];

const demoCollections: CollectionRecord[] = [
  {
    id: "collection-1",
    title: "Demonstration — School Archive",
    slug: "demonstration-school-archive",
    description: "A placeholder collection for future sourced GSP media.",
    category: "School History",
    period: "Period not yet verified",
    sources: "[References pending]",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    mediaIds: ["media-1"],
    coverImage: "",
  },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(`${value}T12:00:00`),
  );
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function StatusBadge({ status, kind }: { status: string; kind: "verification" | "publication" }) {
  return (
    <span className={`gallery-status ${kind} ${status.toLowerCase().replaceAll(" ", "-")}`}>
      {status}
    </span>
  );
}

function emptyMedia(): Omit<MediaRecord, "id" | "uploadDate" | "previewUrl" | "type"> {
  return {
    title: "",
    description: "",
    category: "School History",
    period: "",
    verificationStatus: "Draft",
    publicationStatus: "Draft",
    caption: "",
    creator: "",
    source: "",
    permission: "",
    relatedStory: "",
    relatedEvent: "",
    verificationNotes: "",
  };
}

function MediaDetailsModal({
  record,
  mode,
  onClose,
  onSave,
}: {
  record: MediaRecord;
  mode: "create" | "edit" | "preview";
  onClose: () => void;
  onSave: (record: MediaRecord) => void;
}) {
  const [values, setValues] = useState<MediaRecord>(record);
  const [errors, setErrors] = useState<string[]>([]);
  const readOnly = mode === "preview";
  const update = (key: keyof MediaRecord, value: string) =>
    setValues((current) => ({ ...current, [key]: value }));

  const save = () => {
    const missing = [
      ["Media title", values.title],
      ["Historical year or period", values.period],
      ["Description", values.description],
    ]
      .filter(([, value]) => !value.trim())
      .map(([label]) => label);
    if (missing.length) {
      setErrors(missing);
      return;
    }
    onSave(values);
  };

  return (
    <div
      className="gallery-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-modal gallery-details-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Media details"
      >
        <div className="gallery-modal-heading">
          <div>
            <span>Admin / Gallery &amp; Media Management</span>
            <h2>
              {mode === "create"
                ? "New Media Details"
                : mode === "edit"
                  ? "Edit Media Details"
                  : "Media Details"}
            </h2>
          </div>
          <button type="button" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        {errors.length > 0 && (
          <div className="gallery-validation" role="alert">
            Complete: {errors.join(", ")}
          </div>
        )}
        <div className="gallery-details-grid">
          {values.previewUrl && (
            <div className="gallery-details-preview">
              {values.type === "Video" ? (
                <video src={values.previewUrl} controls />
              ) : (
                <img src={values.previewUrl} alt={values.caption || values.title} />
              )}
            </div>
          )}
          <label>
            <span>Media Title *</span>
            <input
              disabled={readOnly}
              value={values.title}
              onChange={(event) => update("title", event.target.value)}
            />
          </label>
          <label>
            <span>Media Category *</span>
            <select
              disabled={readOnly}
              value={values.category}
              onChange={(event) => update("category", event.target.value)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Historical Year or Period *</span>
            <input
              disabled={readOnly}
              value={values.period}
              placeholder="Enter a verified period"
              onChange={(event) => update("period", event.target.value)}
            />
          </label>
          <label>
            <span>Photographer / Creator</span>
            <input
              disabled={readOnly}
              value={values.creator}
              onChange={(event) => update("creator", event.target.value)}
              placeholder="[Not recorded]"
            />
          </label>
          <label className="gallery-span-2">
            <span>Description *</span>
            <textarea
              disabled={readOnly}
              rows={3}
              value={values.description}
              onChange={(event) => update("description", event.target.value)}
            />
          </label>
          <label className="gallery-span-2">
            <span>Caption</span>
            <textarea
              disabled={readOnly}
              rows={2}
              value={values.caption}
              onChange={(event) => update("caption", event.target.value)}
            />
          </label>
          <label>
            <span>Original Source</span>
            <input
              disabled={readOnly}
              value={values.source}
              onChange={(event) => update("source", event.target.value)}
              placeholder="[Source pending]"
            />
          </label>
          <label>
            <span>Copyright / Permission</span>
            <input
              disabled={readOnly}
              value={values.permission}
              onChange={(event) => update("permission", event.target.value)}
              placeholder="[Permission pending]"
            />
          </label>
          <label>
            <span>Related Historical Story</span>
            <input
              disabled={readOnly}
              value={values.relatedStory}
              onChange={(event) => update("relatedStory", event.target.value)}
            />
          </label>
          <label>
            <span>Related Event</span>
            <input
              disabled={readOnly}
              value={values.relatedEvent}
              onChange={(event) => update("relatedEvent", event.target.value)}
            />
          </label>
          <label>
            <span>Verification Status</span>
            <select
              disabled={readOnly}
              value={values.verificationStatus}
              onChange={(event) => update("verificationStatus", event.target.value)}
            >
              {["Draft", "Pending Verification", "Verified", "Needs Correction"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Publication Status</span>
            <select
              disabled={readOnly}
              value={values.publicationStatus}
              onChange={(event) => update("publicationStatus", event.target.value)}
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </label>
          <label className="gallery-span-2">
            <span>Verification Notes</span>
            <textarea
              disabled={readOnly}
              rows={3}
              value={values.verificationNotes}
              onChange={(event) => update("verificationNotes", event.target.value)}
            />
          </label>
        </div>
        <div className="gallery-modal-footer">
          <button type="button" className="gallery-button secondary" onClick={onClose}>
            {readOnly ? "Close" : "Cancel"}
          </button>
          {!readOnly && (
            <button type="button" className="gallery-button primary" onClick={save}>
              <Check size={15} /> Save Details
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function CollectionModal({
  collection,
  media,
  mode,
  onClose,
  onSave,
}: {
  collection: CollectionRecord;
  media: MediaRecord[];
  mode: "create" | "edit" | "preview";
  onClose: () => void;
  onSave: (record: CollectionRecord) => void;
}) {
  const [values, setValues] = useState<CollectionRecord>(collection);
  const [errors, setErrors] = useState<string[]>([]);
  const readOnly = mode === "preview";
  const update = (key: keyof CollectionRecord, value: string) =>
    setValues((current) => ({ ...current, [key]: value }));
  const toggleMedia = (id: string) =>
    setValues((current) => ({
      ...current,
      mediaIds: current.mediaIds.includes(id)
        ? current.mediaIds.filter((item) => item !== id)
        : [...current.mediaIds, id],
    }));
  const save = () => {
    const missing = [
      ["Collection title", values.title],
      ["Description", values.description],
      ["Historical period", values.period],
      ["Sources and references", values.sources],
    ]
      .filter(([, value]) => !value.trim())
      .map(([label]) => label);
    if (missing.length) {
      setErrors(missing);
      return;
    }
    onSave(values);
  };

  return (
    <div
      className="gallery-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-modal gallery-collection-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Collection editor"
      >
        <div className="gallery-modal-heading">
          <div>
            <span>Admin / Gallery &amp; Media Management</span>
            <h2>
              {mode === "create"
                ? "Create Collection"
                : mode === "edit"
                  ? "Edit Collection"
                  : "Collection Preview"}
            </h2>
          </div>
          <button type="button" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        {errors.length > 0 && (
          <div className="gallery-validation" role="alert">
            Complete: {errors.join(", ")}
          </div>
        )}
        <div className="gallery-details-grid">
          <label>
            <span>Collection Title *</span>
            <input
              disabled={readOnly}
              value={values.title}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  title: event.target.value,
                  slug: current.id ? current.slug : slugify(event.target.value),
                }))
              }
            />
          </label>
          <label>
            <span>URL Slug *</span>
            <input
              disabled={readOnly}
              value={values.slug}
              onChange={(event) => update("slug", slugify(event.target.value))}
            />
          </label>
          <label className="gallery-span-2">
            <span>Description *</span>
            <textarea
              disabled={readOnly}
              rows={3}
              value={values.description}
              onChange={(event) => update("description", event.target.value)}
            />
          </label>
          <label>
            <span>Category</span>
            <select
              disabled={readOnly}
              value={values.category}
              onChange={(event) => update("category", event.target.value)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Historical Period *</span>
            <input
              disabled={readOnly}
              value={values.period}
              onChange={(event) => update("period", event.target.value)}
            />
          </label>
          <label className="gallery-span-2">
            <span>Sources and References *</span>
            <textarea
              disabled={readOnly}
              rows={3}
              value={values.sources}
              onChange={(event) => update("sources", event.target.value)}
            />
          </label>
          <label className="gallery-span-2">
            <span>Cover Image</span>
            {values.coverImage ? (
              <img
                className="gallery-collection-cover-preview"
                src={values.coverImage}
                alt="Collection cover preview"
              />
            ) : (
              <span className="gallery-collection-cover-empty">No cover image selected</span>
            )}
            {!readOnly && (
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  if (
                    !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
                    file.size > 10 * 1024 * 1024
                  )
                    return;
                  const reader = new FileReader();
                  reader.onload = () =>
                    setValues((current) => ({
                      ...current,
                      coverImage: typeof reader.result === "string" ? reader.result : "",
                    }));
                  reader.readAsDataURL(file);
                }}
              />
            )}
          </label>
          <label>
            <span>Verification Status</span>
            <select
              disabled={readOnly}
              value={values.verificationStatus}
              onChange={(event) => update("verificationStatus", event.target.value)}
            >
              {["Draft", "Pending Verification", "Verified", "Needs Correction"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Publication Status</span>
            <select
              disabled={readOnly}
              value={values.publicationStatus}
              onChange={(event) => update("publicationStatus", event.target.value)}
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </label>
          <div className="gallery-media-selector gallery-span-2">
            <span>Select Media Items</span>
            <div>
              {media.map((item) => (
                <label
                  key={item.id}
                  className={values.mediaIds.includes(item.id) ? "is-selected" : ""}
                >
                  <input
                    type="checkbox"
                    disabled={readOnly}
                    checked={values.mediaIds.includes(item.id)}
                    onChange={() => toggleMedia(item.id)}
                  />
                  <span className="gallery-selector-thumb">
                    {item.type === "Video" ? <Video size={16} /> : <ImageIcon size={16} />}
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.category}</small>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="gallery-modal-footer">
          <button type="button" className="gallery-button secondary" onClick={onClose}>
            {readOnly ? "Close" : "Cancel"}
          </button>
          {!readOnly && (
            <button type="button" className="gallery-button primary" onClick={save}>
              <Check size={15} /> Save Collection
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export function GalleryManagementPage() {
  const [media, setMedia] = useState<MediaRecord[]>(demoMedia);
  const [collections, setCollections] = useState<CollectionRecord[]>(demoCollections);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [mediaType, setMediaType] = useState("all");
  const [period, setPeriod] = useState("all");
  const [verification, setVerification] = useState("all");
  const [publication, setPublication] = useState("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);
  const [uploadType, setUploadType] = useState<"Photo" | "Video">("Photo");
  const [detailsRecord, setDetailsRecord] = useState<MediaRecord | null>(null);
  const [detailsMode, setDetailsMode] = useState<"create" | "edit" | "preview" | null>(null);
  const [previewRecord, setPreviewRecord] = useState<MediaRecord | null>(null);
  const [collectionRecord, setCollectionRecord] = useState<CollectionRecord | null>(null);
  const [collectionMode, setCollectionMode] = useState<"create" | "edit" | "preview" | null>(null);
  const pageSize = 6;

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const periods = useMemo(
    () => Array.from(new Set(media.map((item) => item.period))).filter(Boolean),
    [media],
  );

  const filteredMedia = useMemo(() => {
    const filtered = media.filter(
      (item) =>
        item.title.toLowerCase().includes(search.trim().toLowerCase()) &&
        (category === "all" || item.category === category) &&
        (mediaType === "all" || item.type === mediaType) &&
        (period === "all" || item.period === period) &&
        (verification === "all" || item.verificationStatus === verification) &&
        (publication === "all" || item.publicationStatus === publication),
    );
    return [...filtered].sort((left, right) => {
      if (sortOrder === "title") return left.title.localeCompare(right.title);
      return sortOrder === "newest"
        ? right.uploadDate.localeCompare(left.uploadDate)
        : left.uploadDate.localeCompare(right.uploadDate);
    });
  }, [media, search, category, mediaType, period, verification, publication, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredMedia.length / pageSize));
  const visibleMedia = filteredMedia.slice((page - 1) * pageSize, page * pageSize);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setMediaType("all");
    setPeriod("all");
    setVerification("all");
    setPublication("all");
    setSortOrder("newest");
    setPage(1);
  };

  const handleFile = (file?: File) => {
    if (!file) return;
    const allowedImages = ["image/jpeg", "image/png", "image/webp"];
    const allowedTypes = [...allowedImages, "video/mp4"];
    const maxSize = 100 * 1024 * 1024;
    const errors: string[] = [];
    if (!allowedTypes.includes(file.type))
      errors.push("Only JPG, JPEG, PNG, WEBP and MP4 files are supported.");
    if (file.size > maxSize)
      errors.push("The selected file exceeds the 100 MB frontend demo limit.");
    setUploadErrors(errors);
    if (errors.length) {
      setSelectedFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
      setUploadProgress(0);
      return;
    }
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(url);
    setUploadType(allowedImages.includes(file.type) ? "Photo" : "Video");
    setUploadProgress(0);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files?.[0]);
  };

  const removeSelectedFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadErrors([]);
  };

  const closeUpload = () => {
    removeSelectedFile();
    setUploadOpen(false);
  };

  const startUploadDemo = () => {
    if (!selectedFile) {
      setUploadErrors(["Select a valid photo or MP4 file before continuing."]);
      return;
    }
    setUploadErrors([]);
    setUploadProgress(8);
    const timer = window.setInterval(() => {
      setUploadProgress((current) => {
        const next = Math.min(100, current + 13);
        if (next === 100) window.clearInterval(timer);
        return next;
      });
    }, 180);
  };

  const continueToDetails = () => {
    if (!selectedFile || uploadProgress !== 100) {
      setUploadErrors(["Run the frontend upload simulation until it reaches 100% first."]);
      return;
    }
    setDetailsRecord({
      ...emptyMedia(),
      id: "",
      title: selectedFile.name.replace(/\.[^.]+$/, ""),
      type: uploadType,
      uploadDate: new Date().toISOString().slice(0, 10),
      previewUrl,
    } as MediaRecord);
    setDetailsMode("create");
    setUploadOpen(false);
  };

  const saveMediaDetails = (record: MediaRecord) => {
    const next = {
      ...record,
      id: record.id || `media-${Date.now()}`,
      previewUrl: record.previewUrl || previewUrl,
    };
    setMedia((current) =>
      record.id ? current.map((item) => (item.id === record.id ? next : item)) : [next, ...current],
    );
    setFeedback(
      record.id
        ? "Media details updated in this frontend preview."
        : "Media record created in this frontend preview.",
    );
    setDetailsMode(null);
    setDetailsRecord(null);
  };

  const deleteMedia = (record: MediaRecord) => {
    if (!window.confirm(`Delete "${record.title}" from this frontend preview?`)) return;
    setMedia((current) => current.filter((item) => item.id !== record.id));
    setCollections((current) =>
      current.map((collection) => ({
        ...collection,
        mediaIds: collection.mediaIds.filter((id) => id !== record.id),
      })),
    );
    setFeedback("Media deleted from this frontend preview.");
  };

  const togglePublication = (record: MediaRecord) => {
    if (record.verificationStatus !== "Verified") {
      setFeedback("This media must be verified before it can be published.");
      return;
    }
    const next = record.publicationStatus === "Published" ? "Draft" : "Published";
    if (!window.confirm(`${next === "Published" ? "Publish" : "Unpublish"} "${record.title}"?`))
      return;
    setMedia((current) =>
      current.map((item) => (item.id === record.id ? { ...item, publicationStatus: next } : item)),
    );
    setFeedback(
      `Media ${next === "Published" ? "published" : "unpublished"} in this frontend preview.`,
    );
  };

  const saveCollection = (record: CollectionRecord) => {
    const next = {
      ...record,
      id: record.id || `collection-${Date.now()}`,
      slug: slugify(record.slug || record.title),
    };
    setCollections((current) =>
      record.id ? current.map((item) => (item.id === record.id ? next : item)) : [next, ...current],
    );
    setFeedback(
      record.id
        ? "Collection updated in this frontend preview."
        : "Collection created in this frontend preview.",
    );
    setCollectionMode(null);
    setCollectionRecord(null);
  };

  const deleteCollection = (record: CollectionRecord) => {
    if (!window.confirm(`Delete collection "${record.title}"?`)) return;
    setCollections((current) => current.filter((item) => item.id !== record.id));
    setFeedback("Collection deleted from this frontend preview.");
  };

  return (
    <AdminLayout
      pageTitle="Gallery & Media Management"
      activePage="Gallery & Media Management"
      showGlobalSearch={false}
    >
      <div className="gallery-page">
        <div className="gallery-page-heading">
          <div>
            <p className="gallery-eyebrow">GSP HISTORICAL ARCHIVE</p>
            <h2>Gallery &amp; Media Management</h2>
            <p>Organize and preserve GSP historical photographs, videos and media collections.</p>
          </div>
          <div className="gallery-heading-actions">
            <button
              type="button"
              className="gallery-button secondary"
              onClick={() => setUploadOpen(true)}
            >
              <Upload size={15} /> Upload Media
            </button>
            <button
              type="button"
              className="gallery-button primary"
              onClick={() => {
                setCollectionRecord({
                  id: "",
                  title: "",
                  slug: "",
                  description: "",
                  category: "School History",
                  period: "",
                  sources: "",
                  verificationStatus: "Draft",
                  publicationStatus: "Draft",
                  mediaIds: [],
                  coverImage: "",
                });
                setCollectionMode("create");
              }}
            >
              <FolderPlus size={15} /> Create Collection
            </button>
          </div>
        </div>

        <div className="gallery-demo-note">
          <ShieldCheck size={16} />
          <span>
            <strong>Demonstration data</strong> — sample placeholders only. Actual publication
            requires reviewed metadata and appropriate permission.
          </span>
        </div>
        {feedback && (
          <div className="gallery-feedback" role="status">
            {feedback}
            <button type="button" aria-label="Dismiss message" onClick={() => setFeedback("")}>
              <X size={15} />
            </button>
          </div>
        )}

        <section className="gallery-stat-grid" aria-label="Media statistics">
          <article>
            <span>Total Photos</span>
            <strong>{media.filter((item) => item.type === "Photo").length}</strong>
            <ImageIcon size={18} />
          </article>
          <article>
            <span>Total Videos</span>
            <strong>{media.filter((item) => item.type === "Video").length}</strong>
            <Video size={18} />
          </article>
          <article>
            <span>Total Collections</span>
            <strong>{collections.length}</strong>
            <Layers3 size={18} />
          </article>
          <article>
            <span>Pending Verification</span>
            <strong>
              {media.filter((item) => item.verificationStatus === "Pending Verification").length}
            </strong>
            <ShieldCheck size={18} />
          </article>
        </section>

        <div className="gallery-category-strip" aria-label="Media category filters">
          <button
            type="button"
            className={category === "all" ? "is-active" : ""}
            onClick={() => {
              setCategory("all");
              setPage(1);
            }}
          >
            All Media
          </button>
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "is-active" : ""}
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="admin-panel gallery-library">
          <div className="gallery-list-heading">
            <div>
              <h3>Media Library</h3>
              <p>Manage image and video records, verification and publication.</p>
            </div>
            <div className="gallery-view-toggle" aria-label="Library view">
              <button
                type="button"
                className={viewMode === "grid" ? "is-active" : ""}
                aria-label="Grid view"
                onClick={() => setViewMode("grid")}
              >
                <Grid2X2 size={16} />
              </button>
              <button
                type="button"
                className={viewMode === "list" ? "is-active" : ""}
                aria-label="List view"
                onClick={() => setViewMode("list")}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          <div className="gallery-filters">
            <label className="gallery-search">
              <Search size={15} />
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
                placeholder="Search media titles..."
              />
              {search && (
                <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={13} />
                </button>
              )}
            </label>
            <label>
              <span className="sr-only">Media type</span>
              <select
                value={mediaType}
                onChange={(event) => {
                  setMediaType(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All types</option>
                <option>Photo</option>
                <option>Video</option>
              </select>
              <ChevronDown size={13} />
            </label>
            <label>
              <span className="sr-only">Historical year</span>
              <select
                value={period}
                onChange={(event) => {
                  setPeriod(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All periods</option>
                {periods.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown size={13} />
            </label>
            <label>
              <span className="sr-only">Verification</span>
              <select
                value={verification}
                onChange={(event) => {
                  setVerification(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All verification</option>
                {["Draft", "Pending Verification", "Verified", "Needs Correction"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown size={13} />
            </label>
            <label>
              <span className="sr-only">Publication</span>
              <select
                value={publication}
                onChange={(event) => {
                  setPublication(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All publication</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
              <ChevronDown size={13} />
            </label>
            <label>
              <span className="sr-only">Sort</span>
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
              <ChevronDown size={13} />
            </label>
            <button type="button" className="gallery-clear" onClick={clearFilters}>
              Clear filters
            </button>
          </div>

          {visibleMedia.length === 0 ? (
            <div className="gallery-empty">
              <Search size={22} />
              <strong>No media matches these filters</strong>
              <span>Try other keywords or clear the filters.</span>
            </div>
          ) : viewMode === "grid" ? (
            <div className="gallery-media-grid">
              {visibleMedia.map((item) => (
                <article className="gallery-media-card" key={item.id}>
                  <button
                    type="button"
                    className="gallery-media-preview"
                    onClick={() => setPreviewRecord(item)}
                    aria-label={`Preview ${item.title}`}
                  >
                    {item.previewUrl ? (
                      item.type === "Video" ? (
                        <video src={item.previewUrl} muted />
                      ) : (
                        <img src={item.previewUrl} alt={item.caption || item.title} />
                      )
                    ) : (
                      <span className="gallery-placeholder">
                        <span>
                          {item.type === "Video" ? <Video size={28} /> : <ImageIcon size={28} />}
                        </span>
                        <small>[Demonstration placeholder]</small>
                      </span>
                    )}
                    <span className="gallery-type-tag">{item.type}</span>
                  </button>
                  <div className="gallery-media-card-body">
                    <h4>{item.title}</h4>
                    <p>
                      {item.category} · {item.period}
                    </p>
                    <div className="gallery-card-badges">
                      <StatusBadge status={item.verificationStatus} kind="verification" />
                      <StatusBadge status={item.publicationStatus} kind="publication" />
                    </div>
                    <small>Uploaded {formatDate(item.uploadDate)}</small>
                    <div className="gallery-card-actions">
                      <button
                        type="button"
                        aria-label="Preview"
                        title="Preview"
                        onClick={() => setPreviewRecord(item)}
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        type="button"
                        aria-label="Edit details"
                        title="Edit Details"
                        onClick={() => {
                          setDetailsRecord(item);
                          setDetailsMode("edit");
                        }}
                      >
                        <SquarePen size={14} />
                      </button>
                      <button
                        type="button"
                        aria-label={
                          item.publicationStatus === "Published" ? "Unpublish" : "Publish"
                        }
                        title={item.publicationStatus === "Published" ? "Unpublish" : "Publish"}
                        onClick={() => togglePublication(item)}
                      >
                        <Check size={14} />
                      </button>
                      <button
                        type="button"
                        aria-label="Delete"
                        title="Delete"
                        onClick={() => deleteMedia(item)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="gallery-table-scroll">
              <table className="gallery-table">
                <thead>
                  <tr>
                    <th>Media</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Period</th>
                    <th>Uploaded</th>
                    <th>Verification</th>
                    <th>Publication</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleMedia.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button
                          type="button"
                          className="gallery-table-thumb"
                          onClick={() => setPreviewRecord(item)}
                        >
                          {item.previewUrl ? (
                            item.type === "Video" ? (
                              <video src={item.previewUrl} muted />
                            ) : (
                              <img src={item.previewUrl} alt="" />
                            )
                          ) : item.type === "Video" ? (
                            <Video size={16} />
                          ) : (
                            <ImageIcon size={16} />
                          )}
                        </button>
                      </td>
                      <td>
                        <strong>{item.title}</strong>
                      </td>
                      <td>{item.type}</td>
                      <td>{item.category}</td>
                      <td>{item.period}</td>
                      <td>{formatDate(item.uploadDate)}</td>
                      <td>
                        <StatusBadge status={item.verificationStatus} kind="verification" />
                      </td>
                      <td>
                        <StatusBadge status={item.publicationStatus} kind="publication" />
                      </td>
                      <td>
                        <div className="gallery-row-actions">
                          <button
                            type="button"
                            title="Preview"
                            onClick={() => setPreviewRecord(item)}
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            type="button"
                            title="Edit Details"
                            onClick={() => {
                              setDetailsRecord(item);
                              setDetailsMode("edit");
                            }}
                          >
                            <SquarePen size={14} />
                          </button>
                          <button
                            type="button"
                            title="Change Publication"
                            onClick={() => togglePublication(item)}
                          >
                            <Check size={14} />
                          </button>
                          <button type="button" title="Delete" onClick={() => deleteMedia(item)}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="gallery-table-footer">
            <span>
              Showing {visibleMedia.length ? (page - 1) * pageSize + 1 : 0}–
              {Math.min(page * pageSize, filteredMedia.length)} of {filteredMedia.length} media
              records
            </span>
            <div>
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
              >
                Previous
              </button>
              <strong>{page}</strong>
              <button
                type="button"
                disabled={page === pageCount}
                onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="admin-panel gallery-collections">
          <div className="gallery-list-heading">
            <div>
              <h3>Media Collections</h3>
              <p>Create themed galleries and organize selected media.</p>
            </div>
            <button
              type="button"
              className="gallery-button primary"
              onClick={() => {
                setCollectionRecord({
                  id: "",
                  title: "",
                  slug: "",
                  description: "",
                  category: "School History",
                  period: "",
                  sources: "",
                  verificationStatus: "Draft",
                  publicationStatus: "Draft",
                  mediaIds: [],
                  coverImage: "",
                });
                setCollectionMode("create");
              }}
            >
              <Plus size={15} /> New Collection
            </button>
          </div>
          <div className="gallery-collection-grid">
            {collections.map((collection) => (
              <article key={collection.id}>
                <div className="gallery-collection-cover">
                  {collection.coverImage ? (
                    <img src={collection.coverImage} alt="" />
                  ) : (
                    <Layers3 size={24} />
                  )}
                  <span>{collection.mediaIds.length} media</span>
                </div>
                <div className="gallery-collection-body">
                  <h4>{collection.title}</h4>
                  <p>
                    {collection.category} · {collection.period}
                  </p>
                  <div className="gallery-card-badges">
                    <StatusBadge status={collection.verificationStatus} kind="verification" />
                    <StatusBadge status={collection.publicationStatus} kind="publication" />
                  </div>
                  <div className="gallery-card-actions">
                    <button
                      type="button"
                      title="Preview"
                      onClick={() => {
                        setCollectionRecord(collection);
                        setCollectionMode("preview");
                      }}
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      type="button"
                      title="Edit Collection"
                      onClick={() => {
                        setCollectionRecord(collection);
                        setCollectionMode("edit");
                      }}
                    >
                      <SquarePen size={14} />
                    </button>
                    <button
                      type="button"
                      title="Delete Collection"
                      onClick={() => deleteCollection(collection)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      {uploadOpen && (
        <div
          className="gallery-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeUpload();
          }}
        >
          <section
            className="gallery-modal gallery-upload-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Upload media"
          >
            <div className="gallery-modal-heading">
              <div>
                <span>Admin / Gallery &amp; Media Management</span>
                <h2>Upload Media</h2>
              </div>
              <button type="button" aria-label="Close" onClick={closeUpload}>
                <X size={18} />
              </button>
            </div>
            {uploadErrors.length > 0 && (
              <div className="gallery-validation" role="alert">
                {uploadErrors.join(" ")}
              </div>
            )}
            <label
              className={`gallery-dropzone${selectedFile ? " has-file" : ""}`}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                uploadType === "Video" ? (
                  <video src={previewUrl} controls />
                ) : (
                  <img src={previewUrl} alt="Selected file preview" />
                )
              ) : (
                <>
                  <Upload size={28} />
                  <strong>Drag and drop a photo or MP4 here</strong>
                  <span>JPG, JPEG, PNG, WEBP or MP4 · Maximum 100 MB</span>
                  <b>Browse Files</b>
                </>
              )}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.mp4,image/jpeg,image/png,image/webp,video/mp4"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleFile(event.target.files?.[0])
                }
              />
            </label>
            {selectedFile && (
              <div className="gallery-selected-file">
                <div>
                  {uploadType === "Video" ? <Video size={18} /> : <ImageIcon size={18} />}
                  <span>
                    <strong>{selectedFile.name}</strong>
                    <small>
                      {selectedFile.type || "Unknown type"} ·{" "}
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </small>
                  </span>
                </div>
                <button type="button" onClick={removeSelectedFile}>
                  <Trash2 size={14} /> Remove
                </button>
              </div>
            )}
            {uploadProgress > 0 && (
              <div className="gallery-upload-progress">
                <div>
                  <span>Frontend demo progress</span>
                  <strong>{uploadProgress}%</strong>
                </div>
                <div className="gallery-progress-track">
                  <span style={{ width: `${uploadProgress}%` }} />
                </div>
                <small>No file is permanently uploaded to a server.</small>
              </div>
            )}
            <div className="gallery-modal-footer">
              <button type="button" className="gallery-button secondary" onClick={closeUpload}>
                Cancel
              </button>
              {uploadProgress < 100 ? (
                <button type="button" className="gallery-button primary" onClick={startUploadDemo}>
                  <Upload size={15} /> Simulate Upload
                </button>
              ) : (
                <button
                  type="button"
                  className="gallery-button primary"
                  onClick={continueToDetails}
                >
                  Continue to Details
                </button>
              )}
            </div>
          </section>
        </div>
      )}
      {detailsRecord && detailsMode && (
        <MediaDetailsModal
          record={detailsRecord}
          mode={detailsMode}
          onClose={() => {
            setDetailsRecord(null);
            setDetailsMode(null);
          }}
          onSave={saveMediaDetails}
        />
      )}
      {collectionRecord && collectionMode && (
        <CollectionModal
          collection={collectionRecord}
          media={media}
          mode={collectionMode}
          onClose={() => {
            setCollectionRecord(null);
            setCollectionMode(null);
          }}
          onSave={saveCollection}
        />
      )}
      {previewRecord && (
        <div
          className="gallery-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreviewRecord(null);
          }}
        >
          <section
            className="gallery-modal gallery-preview-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Media preview"
          >
            <div className="gallery-modal-heading">
              <div>
                <span>Media Preview</span>
                <h2>{previewRecord.title}</h2>
              </div>
              <button type="button" aria-label="Close" onClick={() => setPreviewRecord(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="gallery-preview-content">
              <div className="gallery-preview-media">
                {previewRecord.previewUrl ? (
                  previewRecord.type === "Video" ? (
                    <video src={previewRecord.previewUrl} controls />
                  ) : (
                    <img
                      src={previewRecord.previewUrl}
                      alt={previewRecord.caption || previewRecord.title}
                    />
                  )
                ) : (
                  <div className="gallery-placeholder large">
                    <span>
                      {previewRecord.type === "Video" ? (
                        <Video size={36} />
                      ) : (
                        <ImageIcon size={36} />
                      )}
                    </span>
                    <small>
                      [Demonstration media placeholder — no authentic archive image supplied]
                    </small>
                  </div>
                )}
              </div>
              <div className="gallery-preview-meta">
                <div>
                  <span>Type</span>
                  <strong>{previewRecord.type}</strong>
                </div>
                <div>
                  <span>Category</span>
                  <strong>{previewRecord.category}</strong>
                </div>
                <div>
                  <span>Historical Period</span>
                  <strong>{previewRecord.period}</strong>
                </div>
                <div>
                  <span>Creator</span>
                  <strong>{previewRecord.creator || "[Not recorded]"}</strong>
                </div>
                <div>
                  <span>Source</span>
                  <strong>{previewRecord.source || "[Not recorded]"}</strong>
                </div>
                <div>
                  <span>Permission</span>
                  <strong>{previewRecord.permission || "[Not recorded]"}</strong>
                </div>
              </div>
            </div>
            <div className="gallery-preview-description">
              <span>Caption &amp; Description</span>
              <p>{previewRecord.caption || "[Caption pending]"}</p>
              <p>{previewRecord.description}</p>
            </div>
          </section>
        </div>
      )}
    </AdminLayout>
  );
}
