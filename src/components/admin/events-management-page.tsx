import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileImage,
  ImagePlus,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { AdminDashboardPage } from "@/components/admin/dashboard-page";
import "./events-management.css";

const categories = [
  "School Foundation",
  "Historical Milestones",
  "School Development",
  "Educational Achievements",
  "Anniversaries",
  "Community Activities",
  "Institutional Activities",
  "Historical Remembrance",
] as const;

type VerificationStatus = "Pending verification" | "Verified" | "Needs correction";
type PublicationStatus = "Draft" | "Published";
type EventImage = { src: string; caption: string; source: string };
type ArchiveEvent = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  datePeriod: string;
  location: string;
  locationVerified: boolean;
  organizer: string;
  organizerVerified: boolean;
  people: string;
  peoplePermission: boolean;
  significance: string;
  relatedStory: string;
  relatedTimeline: string;
  coverImage: string;
  images: EventImage[];
  sources: string;
  verificationNotes: string;
  verification: VerificationStatus;
  publication: PublicationStatus;
  documents: string;
  updatedAt: string;
  demo: boolean;
};

const blankEvent = (): ArchiveEvent => ({
  id: "",
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  category: "",
  datePeriod: "",
  location: "",
  locationVerified: false,
  organizer: "",
  organizerVerified: false,
  people: "",
  peoplePermission: false,
  significance: "",
  relatedStory: "",
  relatedTimeline: "",
  coverImage: "",
  images: [],
  sources: "",
  verificationNotes: "",
  verification: "Pending verification",
  publication: "Draft",
  documents: "",
  updatedAt: new Date().toISOString(),
  demo: false,
});

const sampleEvents: ArchiveEvent[] = [
  {
    ...blankEvent(),
    id: "sample-foundation",
    title: "Demonstration record: School foundation topic",
    slug: "demonstration-school-foundation-topic",
    shortDescription: "Sample record only. No foundation event or date is asserted.",
    description:
      "This is a demonstration entry for the administration interface, not a historical account. Add a sourced event narrative only after records have been reviewed.",
    category: "School Foundation",
    verification: "Pending verification",
    updatedAt: "2026-11-25T10:00:00.000Z",
    demo: true,
  },
  {
    ...blankEvent(),
    id: "sample-community",
    title: "Demonstration record: Community activities topic",
    slug: "demonstration-community-activities-topic",
    shortDescription: "Sample record only. Details remain unconfirmed.",
    description:
      "This sample demonstrates a draft event entry. No event, location, participants, date, or outcome is being presented as fact.",
    category: "Community Activities",
    verification: "Needs correction",
    updatedAt: "2026-11-24T10:00:00.000Z",
    demo: true,
  },
  {
    ...blankEvent(),
    id: "sample-remembrance",
    title: "Demonstration record: Historical remembrance topic",
    slug: "demonstration-historical-remembrance-topic",
    shortDescription: "Sample placeholder only; no testimony or event details are included.",
    description:
      "This respectful placeholder is not an account of a specific event. Add remembrance content only with reliable historical references and appropriate permissions. Do not include graphic imagery or unverified personal details.",
    category: "Historical Remembrance",
    verification: "Pending verification",
    updatedAt: "2026-11-23T10:00:00.000Z",
    demo: true,
  },
];

const pageSize = 6;

function getYear(datePeriod: string) {
  return datePeriod.match(/\b\d{3,4}\b/)?.[0] ?? "";
}

function formatUpdated(value: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));
}

function createSlug(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function StatusBadge({ children, kind }: { children: string; kind: string }) {
  return <span className={`events-status is-${kind}`}>{children}</span>;
}

function EventCover({ event }: { event: ArchiveEvent }) {
  return event.coverImage ? (
    <img className="events-cover-image" src={event.coverImage} alt="" />
  ) : (
    <div className="events-cover-placeholder" aria-label="No event image supplied">
      <FileImage size={20} />
      <span>No image</span>
    </div>
  );
}

function EventPreview({ event }: { event: ArchiveEvent }) {
  const sources = event.sources
    .split("\n")
    .map((source) => source.trim())
    .filter(Boolean);
  const documents = event.documents
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="events-preview">
      <div className="events-preview-cover">
        <EventCover event={event} />
        {event.demo && <span className="events-preview-demo">DEMONSTRATION ONLY</span>}
      </div>
      <div className="events-preview-content">
        <span className="events-preview-category">{event.category || "Event category"}</span>
        <h2>{event.title || "Event title preview"}</h2>
        <p className="events-preview-date">{event.datePeriod || "Date or period not confirmed"}</p>
        <p>{event.shortDescription || "A short event description will appear here."}</p>
        <div className="events-preview-story">
          <h3>Event story</h3>
          <p>{event.description || "The full event story will appear here after it is added."}</p>
        </div>
        <dl className="events-preview-info">
          <div>
            <dt>Location</dt>
            <dd>{event.location && event.locationVerified ? event.location : "Not verified"}</dd>
          </div>
          <div>
            <dt>Organizer</dt>
            <dd>{event.organizer && event.organizerVerified ? event.organizer : "Not verified"}</dd>
          </div>
          {event.peoplePermission && event.people && (
            <div>
              <dt>People involved</dt>
              <dd>{event.people}</dd>
            </div>
          )}
          {event.significance && (
            <div>
              <dt>Significance</dt>
              <dd>{event.significance}</dd>
            </div>
          )}
        </dl>
        <section className="events-preview-section">
          <h3>Related photographs</h3>
          {event.images.length ? (
            <div className="events-preview-gallery">
              {event.images.map((image, index) => (
                <figure key={`${image.src}-${index}`}>
                  <img src={image.src} alt={image.caption || "Event photograph preview"} />
                  <figcaption>{image.caption || "Caption not supplied"}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p>No related photographs supplied.</p>
          )}
        </section>
        <section className="events-preview-section">
          <h3>Related documents</h3>
          {documents.length ? (
            <ul>
              {documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No related documents supplied.</p>
          )}
        </section>
        <section className="events-preview-section">
          <h3>Historical references</h3>
          {sources.length ? (
            <ul>
              {sources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Historical references are not yet supplied.</p>
          )}
        </section>
        <p className="events-preview-video-note">
          Related videos will be shown only after a real video source has been reviewed.
        </p>
      </div>
    </article>
  );
}

export function AdminEventsManagementPage() {
  const [events, setEvents] = useState(sampleEvents);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [publicationFilter, setPublicationFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [page, setPage] = useState(1);
  const [formEvent, setFormEvent] = useState<ArchiveEvent | null>(null);
  const [previewEvent, setPreviewEvent] = useState<ArchiveEvent | null>(null);
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);
  const titleWasManuallyChanged = useRef(false);

  const filteredEvents = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return events
      .filter((event) => {
        const matchesQuery =
          !term ||
          `${event.title} ${event.category} ${event.shortDescription}`
            .toLocaleLowerCase()
            .includes(term);
        const matchesCategory = categoryFilter === "all" || event.category === categoryFilter;
        const matchesYear =
          yearFilter === "all" ||
          (yearFilter === "undated"
            ? !getYear(event.datePeriod)
            : getYear(event.datePeriod) === yearFilter);
        const matchesVerification =
          verificationFilter === "all" || event.verification === verificationFilter;
        const matchesPublication =
          publicationFilter === "all" || event.publication === publicationFilter;
        return (
          matchesQuery &&
          matchesCategory &&
          matchesYear &&
          matchesVerification &&
          matchesPublication
        );
      })
      .sort((a, b) => {
        if (sortOrder === "alphabetical") return a.title.localeCompare(b.title);
        const aYear = Number(getYear(a.datePeriod)) || 0;
        const bYear = Number(getYear(b.datePeriod)) || 0;
        if (aYear !== bYear) return sortOrder === "newest" ? bYear - aYear : aYear - bYear;
        return sortOrder === "newest"
          ? b.updatedAt.localeCompare(a.updatedAt)
          : a.updatedAt.localeCompare(b.updatedAt);
      });
  }, [categoryFilter, events, publicationFilter, query, sortOrder, verificationFilter, yearFilter]);
  const pageCount = Math.max(1, Math.ceil(filteredEvents.length / pageSize));
  const visibleEvents = filteredEvents.slice((page - 1) * pageSize, page * pageSize);
  const years = [...new Set(events.map((event) => getYear(event.datePeriod)).filter(Boolean))].sort(
    (a, b) => Number(b) - Number(a),
  );
  const counts = {
    total: events.length,
    published: events.filter((event) => event.publication === "Published").length,
    drafts: events.filter((event) => event.publication === "Draft").length,
    pending: events.filter((event) => event.verification === "Pending verification").length,
  };

  const startNewEvent = () => {
    titleWasManuallyChanged.current = false;
    setFormEvent(blankEvent());
    setNotice("");
  };

  const startEdit = (event: ArchiveEvent) => {
    titleWasManuallyChanged.current = true;
    setFormEvent({ ...event, images: event.images.map((image) => ({ ...image })) });
    setNotice("");
  };

  const updateForm = (updates: Partial<ArchiveEvent>) => {
    setFormEvent((current) => (current ? { ...current, ...updates } : current));
  };

  const updateCover = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !formEvent) return;
    if (!file.type.startsWith("image/")) {
      setNotice("Choose an image file for the event cover.");
      event.target.value = "";
      return;
    }
    if (formEvent.coverImage.startsWith("blob:")) URL.revokeObjectURL(formEvent.coverImage);
    updateForm({ coverImage: URL.createObjectURL(file) });
  };

  const addPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length !== files.length)
      setNotice("Only image files can be added as photographs.");
    if (validFiles.length) {
      updateForm({
        images: [
          ...(formEvent?.images ?? []),
          ...validFiles.map((file) => ({
            src: URL.createObjectURL(file),
            caption: "",
            source: "",
          })),
        ],
      });
    }
    event.target.value = "";
  };

  const removePhoto = (index: number) => {
    if (!formEvent) return;
    const image = formEvent.images[index];
    if (image?.src.startsWith("blob:")) URL.revokeObjectURL(image.src);
    updateForm({ images: formEvent.images.filter((_, photoIndex) => photoIndex !== index) });
  };

  const saveEvent = (intent: "draft" | "verification" | "publish") => {
    if (!formEvent || !formRef.current?.reportValidity()) return;
    const sources = formEvent.sources
      .split("\n")
      .map((source) => source.trim())
      .filter(Boolean);
    if (intent !== "draft" && !sources.length) {
      setNotice("Add at least one historical source or reference before submitting or publishing.");
      return;
    }
    if (intent === "publish" && formEvent.verification !== "Verified") {
      setNotice("Only verified events with historical references can be published.");
      return;
    }

    const nextEvent: ArchiveEvent = {
      ...formEvent,
      slug: formEvent.slug || createSlug(formEvent.title),
      people: formEvent.peoplePermission ? formEvent.people : "",
      updatedAt: new Date().toISOString(),
      publication: intent === "publish" ? "Published" : "Draft",
      verification: intent === "verification" ? "Pending verification" : formEvent.verification,
      demo: false,
    };
    setEvents((current) => {
      const exists = current.some((event) => event.id === nextEvent.id);
      return exists
        ? current.map((event) => (event.id === nextEvent.id ? nextEvent : event))
        : [{ ...nextEvent, id: crypto.randomUUID() }, ...current];
    });
    setPage(1);
    setNotice(
      `${intent === "verification" ? "Submitted for verification" : intent === "publish" ? "Published" : "Saved as draft"} in this browser session only. No permanent storage is connected.`,
    );
    setFormEvent(null);
  };

  const deleteEvent = (event: ArchiveEvent) => {
    if (!window.confirm(`Delete “${event.title}” from this browser session?`)) return;
    setEvents((current) => current.filter((item) => item.id !== event.id));
    if (previewEvent?.id === event.id) setPreviewEvent(null);
    setNotice("The demonstration record was removed from this browser session.");
  };

  const togglePublication = (event: ArchiveEvent) => {
    if (event.publication === "Published") {
      setEvents((current) =>
        current.map((item) =>
          item.id === event.id
            ? { ...item, publication: "Draft", updatedAt: new Date().toISOString() }
            : item,
        ),
      );
      setNotice("Event unpublished and returned to draft.");
      return;
    }
    if (event.verification !== "Verified" || !event.sources.trim()) {
      setNotice("Verify the event and add historical references before publishing.");
      return;
    }
    setEvents((current) =>
      current.map((item) =>
        item.id === event.id
          ? { ...item, publication: "Published", updatedAt: new Date().toISOString() }
          : item,
      ),
    );
    setNotice("Event published in this browser session only.");
  };

  const clearFilters = () => {
    setQuery("");
    setCategoryFilter("all");
    setYearFilter("all");
    setVerificationFilter("all");
    setPublicationFilter("all");
    setSortOrder("newest");
    setPage(1);
  };

  const closeForm = () => {
    if (formEvent?.coverImage.startsWith("blob:")) URL.revokeObjectURL(formEvent.coverImage);
    formEvent?.images.forEach((image) => {
      if (image.src.startsWith("blob:")) URL.revokeObjectURL(image.src);
    });
    setFormEvent(null);
  };

  const formTitleChange = (value: string) => {
    if (!titleWasManuallyChanged.current && formEvent) {
      updateForm({ title: value, slug: createSlug(value) });
    } else {
      updateForm({ title: value });
    }
  };

  const updateImage = (index: number, updates: Partial<EventImage>) => {
    if (!formEvent) return;
    updateForm({
      images: formEvent.images.map((image, imageIndex) =>
        imageIndex === index ? { ...image, ...updates } : image,
      ),
    });
  };

  return (
    <AdminDashboardPage
      pageTitle="Events Management"
      activePage="Events Management"
      showGlobalSearch={false}
    >
      <section className="events-admin-page">
        <header className="events-admin-heading">
          <div>
            <span className="events-admin-eyebrow">ADMIN / EVENTS MANAGEMENT</span>
            <h2>Manage and preserve important events in GSP history.</h2>
            <p>
              Maintain carefully sourced records. Sample entries below are interface demonstrations
              only.
            </p>
          </div>
          <button type="button" className="events-primary-button" onClick={startNewEvent}>
            <Plus size={16} /> Add New Event
          </button>
        </header>

        <div className="events-admin-notice" role="note">
          <ShieldCheck size={17} />
          <span>
            <strong>Frontend demonstration only.</strong> Sample records do not represent verified
            GSP history. Changes and image previews are held in this browser session, not
            permanently saved.
          </span>
        </div>
        {notice && (
          <div className="events-action-notice" role="status">
            <span>{notice}</span>
            <button type="button" aria-label="Dismiss message" onClick={() => setNotice("")}>
              <X size={15} />
            </button>
          </div>
        )}

        <section className="events-stat-grid" aria-label="Event statistics">
          {[
            { label: "Total Events", value: counts.total, icon: CalendarDays },
            { label: "Published Events", value: counts.published, icon: Check },
            { label: "Draft Events", value: counts.drafts, icon: FileImage },
            { label: "Pending Verification", value: counts.pending, icon: ShieldCheck },
          ].map(({ label, value, icon: Icon }) => (
            <article className="events-stat-card" key={label}>
              <span className="events-stat-icon">
                <Icon size={17} />
              </span>
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
              <small>Demo data</small>
            </article>
          ))}
        </section>

        {formEvent && (
          <section className="events-form-panel" aria-labelledby="event-form-title">
            <div className="events-panel-heading">
              <div>
                <span className="events-admin-eyebrow">
                  {formEvent.id ? "EDIT RECORD" : "NEW RECORD"}
                </span>
                <h2 id="event-form-title">{formEvent.id ? "Edit event" : "Add a new event"}</h2>
              </div>
              <button
                type="button"
                className="events-icon-button"
                aria-label="Close event form"
                onClick={closeForm}
              >
                <X size={18} />
              </button>
            </div>
            <div className="events-editor-grid">
              <form
                ref={formRef}
                className="events-form"
                onSubmit={(event: FormEvent) => event.preventDefault()}
              >
                <fieldset>
                  <legend>Basic information</legend>
                  <label>
                    Event title <span aria-hidden="true">*</span>
                    <input
                      required
                      value={formEvent.title}
                      onChange={(event) => formTitleChange(event.target.value)}
                      placeholder="Enter a source-supported event title"
                    />
                  </label>
                  <label>
                    URL slug
                    <input
                      value={formEvent.slug}
                      onChange={(event) => {
                        titleWasManuallyChanged.current = true;
                        updateForm({ slug: createSlug(event.target.value) });
                      }}
                      placeholder="event-url-slug"
                    />
                  </label>
                  <label>
                    Short description
                    <textarea
                      rows={2}
                      value={formEvent.shortDescription}
                      onChange={(event) => updateForm({ shortDescription: event.target.value })}
                      placeholder="A brief, factual summary"
                    />
                  </label>
                  <label>
                    Full event description
                    <textarea
                      rows={5}
                      value={formEvent.description}
                      onChange={(event) => updateForm({ description: event.target.value })}
                      placeholder="Write only what reliable sources support"
                    />
                  </label>
                  <div className="events-form-row">
                    <label>
                      Event category <span aria-hidden="true">*</span>
                      <select
                        required
                        value={formEvent.category}
                        onChange={(event) => updateForm({ category: event.target.value })}
                      >
                        <option value="">Select a category</option>
                        {categories.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Event date or historical period
                      <input
                        value={formEvent.datePeriod}
                        onChange={(event) => updateForm({ datePeriod: event.target.value })}
                        placeholder="Only enter a period supported by sources"
                      />
                    </label>
                  </div>
                  {formEvent.category === "Historical Remembrance" && (
                    <p className="events-remembrance-note">
                      <AlertTriangle size={15} />
                      Remembrance records require reliable references. Use dignified language; never
                      add graphic imagery, unverified names, dates, quotations, or testimony.
                    </p>
                  )}
                </fieldset>

                <fieldset>
                  <legend>Event details</legend>
                  <div className="events-form-row">
                    <label>
                      Event location
                      <input
                        value={formEvent.location}
                        onChange={(event) => updateForm({ location: event.target.value })}
                        placeholder="Not shown publicly until verified"
                      />
                    </label>
                    <label>
                      Event organizer
                      <input
                        value={formEvent.organizer}
                        onChange={(event) => updateForm({ organizer: event.target.value })}
                        placeholder="Only include a verified organizer"
                      />
                    </label>
                  </div>
                  <div className="events-check-row">
                    <label className="events-checkbox">
                      <input
                        type="checkbox"
                        checked={formEvent.locationVerified}
                        onChange={(event) => updateForm({ locationVerified: event.target.checked })}
                      />
                      Location has been verified
                    </label>
                    <label className="events-checkbox">
                      <input
                        type="checkbox"
                        checked={formEvent.organizerVerified}
                        onChange={(event) =>
                          updateForm({ organizerVerified: event.target.checked })
                        }
                      />
                      Organizer has been verified
                    </label>
                  </div>
                  <label className="events-checkbox events-permission-check">
                    <input
                      type="checkbox"
                      checked={formEvent.peoplePermission}
                      onChange={(event) =>
                        updateForm({
                          peoplePermission: event.target.checked,
                          people: event.target.checked ? formEvent.people : "",
                        })
                      }
                    />
                    I have appropriate permission to include people’s names
                  </label>
                  {formEvent.peoplePermission && (
                    <label>
                      People involved (permission confirmed)
                      <textarea
                        rows={2}
                        value={formEvent.people}
                        onChange={(event) => updateForm({ people: event.target.value })}
                        placeholder="Use only verified information with permission"
                      />
                    </label>
                  )}
                  <label>
                    Event significance
                    <textarea
                      rows={3}
                      value={formEvent.significance}
                      onChange={(event) => updateForm({ significance: event.target.value })}
                      placeholder="Describe significance supported by historical evidence"
                    />
                  </label>
                  <div className="events-form-row">
                    <label>
                      Related historical story
                      <input
                        value={formEvent.relatedStory}
                        onChange={(event) => updateForm({ relatedStory: event.target.value })}
                      />
                    </label>
                    <label>
                      Related timeline event
                      <input
                        value={formEvent.relatedTimeline}
                        onChange={(event) => updateForm({ relatedTimeline: event.target.value })}
                      />
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Media</legend>
                  <div className="events-upload-row">
                    <div className="events-upload-preview">
                      {formEvent.coverImage ? (
                        <img src={formEvent.coverImage} alt="Event cover preview" />
                      ) : (
                        <ImagePlus size={22} />
                      )}
                    </div>
                    <div>
                      <strong>Event cover image</strong>
                      <p>Use an authentic event image only when its source is known.</p>
                      <input
                        ref={coverInputRef}
                        className="events-file-input"
                        type="file"
                        accept="image/*"
                        onChange={updateCover}
                        aria-label="Upload event cover image"
                      />
                      <button
                        type="button"
                        className="events-secondary-button"
                        onClick={() => coverInputRef.current?.click()}
                      >
                        <Upload size={14} /> Upload cover
                      </button>
                    </div>
                  </div>
                  <div className="events-upload-row events-additional-upload">
                    <div>
                      <strong>Additional photographs</strong>
                      <p>Attach captions and image sources or credits to every image.</p>
                    </div>
                    <input
                      ref={photosInputRef}
                      className="events-file-input"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={addPhotos}
                      aria-label="Upload additional photographs"
                    />
                    <button
                      type="button"
                      className="events-secondary-button"
                      onClick={() => photosInputRef.current?.click()}
                    >
                      <Plus size={14} /> Add photographs
                    </button>
                  </div>
                  {formEvent.images.map((image, index) => (
                    <div className="events-photo-editor" key={`${image.src}-${index}`}>
                      <img src={image.src} alt={`Additional photograph ${index + 1} preview`} />
                      <label>
                        Image caption
                        <input
                          value={image.caption}
                          onChange={(event) => updateImage(index, { caption: event.target.value })}
                        />
                      </label>
                      <label>
                        Image source / credit
                        <input
                          value={image.source}
                          onChange={(event) => updateImage(index, { source: event.target.value })}
                        />
                      </label>
                      <button
                        type="button"
                        className="events-icon-button is-danger"
                        aria-label={`Remove photograph ${index + 1}`}
                        onClick={() => removePhoto(index)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                  <label>
                    Related documents (one title per line)
                    <textarea
                      rows={2}
                      value={formEvent.documents}
                      onChange={(event) => updateForm({ documents: event.target.value })}
                      placeholder="Add reviewed document titles or references"
                    />
                  </label>
                  <p className="events-video-note">
                    Related videos are not available in this frontend preview. Add them only after a
                    real, valid video source has been reviewed.
                  </p>
                </fieldset>

                <fieldset>
                  <legend>Verification and publication</legend>
                  <label>
                    Historical sources and references <span aria-hidden="true">*</span>
                    <textarea
                      rows={4}
                      value={formEvent.sources}
                      onChange={(event) => updateForm({ sources: event.target.value })}
                      placeholder="Add reliable references, one per line. Required for verification and publication."
                    />
                  </label>
                  <label>
                    Verification notes
                    <textarea
                      rows={3}
                      value={formEvent.verificationNotes}
                      onChange={(event) => updateForm({ verificationNotes: event.target.value })}
                    />
                  </label>
                  <div className="events-form-row">
                    <label>
                      Verification status
                      <select
                        value={formEvent.verification}
                        onChange={(event) =>
                          updateForm({ verification: event.target.value as VerificationStatus })
                        }
                      >
                        <option>Pending verification</option>
                        <option>Verified</option>
                        <option>Needs correction</option>
                      </select>
                    </label>
                    <label>
                      Publication status
                      <select
                        value={formEvent.publication}
                        onChange={(event) =>
                          updateForm({ publication: event.target.value as PublicationStatus })
                        }
                      >
                        <option>Draft</option>
                        <option>Published</option>
                      </select>
                    </label>
                  </div>
                </fieldset>
                <div className="events-form-actions">
                  <button
                    type="button"
                    className="events-secondary-button"
                    onClick={() => saveEvent("draft")}
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    className="events-secondary-button"
                    onClick={() => saveEvent("verification")}
                  >
                    Submit for Verification
                  </button>
                  <button
                    type="button"
                    className="events-primary-button"
                    onClick={() => saveEvent("publish")}
                  >
                    Publish
                  </button>
                  <button type="button" className="events-cancel-button" onClick={closeForm}>
                    Cancel
                  </button>
                </div>
              </form>

              <aside className="events-live-preview">
                <div className="events-live-preview-heading">
                  <Eye size={16} />
                  <span>
                    <strong>Public page preview</strong>
                    <small>Preview only · not published</small>
                  </span>
                </div>
                <EventPreview event={formEvent} />
              </aside>
            </div>
          </section>
        )}

        <section className="events-list-panel" aria-label="Manage event records">
          <div className="events-list-heading">
            <div>
              <h2>Event records</h2>
              <p>Sample records are clearly identified and make no historical claims.</p>
            </div>
            <span className="events-demo-tag">DEMO DATA</span>
          </div>
          <div className="events-filter-grid">
            <label className="events-search">
              <Search size={16} />
              <input
                aria-label="Search events by title"
                placeholder="Search event titles..."
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
              />
            </label>
            <label>
              <span className="sr-only">Filter by category</span>
              <select
                aria-label="Filter by category"
                value={categoryFilter}
                onChange={(event) => {
                  setCategoryFilter(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All categories</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by historical year</span>
              <select
                aria-label="Filter by historical year"
                value={yearFilter}
                onChange={(event) => {
                  setYearFilter(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All years</option>
                <option value="undated">Period unconfirmed</option>
                {years.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by verification status</span>
              <select
                aria-label="Filter by verification status"
                value={verificationFilter}
                onChange={(event) => {
                  setVerificationFilter(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All verification</option>
                <option>Pending verification</option>
                <option>Verified</option>
                <option>Needs correction</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by publication status</span>
              <select
                aria-label="Filter by publication status"
                value={publicationFilter}
                onChange={(event) => {
                  setPublicationFilter(event.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All publication</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Sort event records</span>
              <select
                aria-label="Sort event records"
                value={sortOrder}
                onChange={(event) => {
                  setSortOrder(event.target.value);
                  setPage(1);
                }}
              >
                <option value="newest">Newest to oldest</option>
                <option value="oldest">Oldest to newest</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </label>
            <button type="button" className="events-clear-button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
          <div className="events-table-scroll">
            <table className="events-table">
              <thead>
                <tr>
                  <th scope="col">Cover</th>
                  <th scope="col">Event title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Date / period</th>
                  <th scope="col">Location</th>
                  <th scope="col">Verification</th>
                  <th scope="col">Publication</th>
                  <th scope="col">Last updated</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleEvents.map((event) => (
                  <tr key={event.id}>
                    <td>
                      <EventCover event={event} />
                    </td>
                    <td className="events-title-cell">
                      <strong>{event.title}</strong>
                      {event.demo && <small>Demonstration record · not historical evidence</small>}
                    </td>
                    <td>{event.category || "Uncategorized"}</td>
                    <td>{event.datePeriod || "Unconfirmed"}</td>
                    <td>
                      {event.location && event.locationVerified && event.verification === "Verified"
                        ? event.location
                        : "Not verified"}
                    </td>
                    <td>
                      <StatusBadge
                        kind={
                          event.verification === "Verified"
                            ? "verified"
                            : event.verification === "Needs correction"
                              ? "correction"
                              : "pending"
                        }
                      >
                        {event.verification}
                      </StatusBadge>
                    </td>
                    <td>
                      <StatusBadge kind={event.publication === "Published" ? "published" : "draft"}>
                        {event.publication}
                      </StatusBadge>
                    </td>
                    <td>{formatUpdated(event.updatedAt)}</td>
                    <td>
                      <div className="events-row-actions">
                        <button
                          type="button"
                          aria-label={`View ${event.title}`}
                          title="View"
                          onClick={() => setPreviewEvent(event)}
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label={`Edit ${event.title}`}
                          title="Edit"
                          onClick={() => startEdit(event)}
                        >
                          <span className="events-action-edit">Edit</span>
                        </button>
                        <button
                          type="button"
                          aria-label={`${event.publication === "Published" ? "Unpublish" : "Publish"} ${event.title}`}
                          title={event.publication === "Published" ? "Unpublish" : "Publish"}
                          onClick={() => togglePublication(event)}
                        >
                          {event.publication === "Published" ? (
                            <ArrowDown size={15} />
                          ) : (
                            <ArrowUp size={15} />
                          )}
                        </button>
                        <button
                          type="button"
                          className="is-danger"
                          aria-label={`Delete ${event.title}`}
                          title="Delete"
                          onClick={() => deleteEvent(event)}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!visibleEvents.length && (
                  <tr>
                    <td colSpan={9}>
                      <div className="events-empty-state">
                        <Search size={21} />
                        <strong>No matching events</strong>
                        <span>Adjust your search or filters to see records.</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <footer className="events-table-footer">
            <span>
              Showing {filteredEvents.length ? (page - 1) * pageSize + 1 : 0}–
              {Math.min(page * pageSize, filteredEvents.length)} of {filteredEvents.length} records
            </span>
            <div>
              <button
                type="button"
                aria-label="Previous page"
                disabled={page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
              >
                <ChevronLeft size={15} />
              </button>
              <span>
                Page {page} of {pageCount}
              </span>
              <button
                type="button"
                aria-label="Next page"
                disabled={page >= pageCount}
                onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </footer>
        </section>
      </section>

      {previewEvent && (
        <div
          className="events-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreviewEvent(null);
          }}
        >
          <section
            className="events-preview-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="events-preview-title"
          >
            <div className="events-modal-heading">
              <div>
                <span className="events-admin-eyebrow">EVENT DETAIL PREVIEW</span>
                <h2 id="events-preview-title">Public Events page preview</h2>
              </div>
              <button
                type="button"
                className="events-icon-button"
                aria-label="Close preview"
                onClick={() => setPreviewEvent(null)}
              >
                <X size={18} />
              </button>
            </div>
            <EventPreview event={previewEvent} />
          </section>
        </div>
      )}
    </AdminDashboardPage>
  );
}
