import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Eye,
  FileText,
  Image,
  LayoutDashboard,
  LogOut,
  Menu,
  Pencil,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Trash2,
  UserRound,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { AdminBrand } from "@/components/admin/brand";

type VerificationStatus = "Draft" | "Pending Verification" | "Verified" | "Needs Correction";
type PublicationStatus = "Draft" | "Published";

type TimelineEvent = {
  id: number;
  title: string;
  slug: string;
  year: string;
  month: string;
  day: string;
  description: string;
  fullDescription: string;
  category: string;
  relatedStory: string;
  sources: string;
  verificationNotes: string;
  verificationStatus: VerificationStatus;
  publicationStatus: PublicationStatus;
  updatedAt: string;
};

type EventDraft = Omit<TimelineEvent, "id" | "updatedAt">;

const navigation: { label: string; icon: LucideIcon; to?: string }[] = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin/dashboard" },
  { label: "History Management", icon: BookOpen },
  { label: "Timeline Management", icon: CalendarDays, to: "/admin/timeline" },
  { label: "Leadership Management", icon: UsersRound },
  { label: "Events Management", icon: CalendarDays },
  { label: "Alumni & Staff Management", icon: UserRound },
  { label: "Gallery & Media Management", icon: Image },
  { label: "Documents Management", icon: FileText },
  { label: "Sources & Verification", icon: ShieldCheck },
  { label: "Settings", icon: Settings },
];

const categories = [
  "School Foundation",
  "Institutional Development",
  "Educational Milestones",
  "Leadership Changes",
  "School Events",
  "Community Activities",
  "Historical Remembrance",
  "Anniversaries",
];

const demoEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "[Demonstration] Archive collection placeholder",
    slug: "demo-archive-collection",
    year: "2025",
    month: "May",
    day: "16",
    description: "A placeholder record used to demonstrate timeline presentation.",
    fullDescription: "Demonstration only. Replace with a sourced historical record.",
    category: "Institutional Development",
    relatedStory: "[Demo] Historical story record",
    sources: "[Demo] Source or reference to be supplied",
    verificationNotes: "No source has been confirmed.",
    verificationStatus: "Needs Correction",
    publicationStatus: "Draft",
    updatedAt: "May 16, 2025",
  },
  {
    id: 2,
    title: "[Demonstration] Community archive milestone",
    slug: "demo-community-milestone",
    year: "2024",
    month: "",
    day: "",
    description: "Text-only preview of a possible community-related timeline entry.",
    fullDescription: "Demonstration only. This entry does not assert a historical fact.",
    category: "Community Activities",
    relatedStory: "[Demo] Community story record",
    sources: "[Demo] Source register entry",
    verificationNotes: "Reference details require review.",
    verificationStatus: "Pending Verification",
    publicationStatus: "Draft",
    updatedAt: "May 14, 2025",
  },
  {
    id: 3,
    title: "[Demonstration] Educational record preview",
    slug: "demo-educational-record",
    year: "2023",
    month: "September",
    day: "",
    description: "A demonstration record for the educational milestones category.",
    fullDescription: "Demonstration only. Historical claims must remain unconfirmed until sourced.",
    category: "Educational Milestones",
    relatedStory: "[Demo] Educational history record",
    sources: "Source: [to be verified]",
    verificationNotes: "Awaiting independent source confirmation.",
    verificationStatus: "Verified",
    publicationStatus: "Published",
    updatedAt: "May 12, 2025",
  },
  {
    id: 4,
    title: "[Demonstration] Leadership archive entry",
    slug: "demo-leadership-entry",
    year: "2022",
    month: "",
    day: "",
    description: "A placeholder for a future sourced leadership-related record.",
    fullDescription: "Demonstration only. No real person or historical period is represented.",
    category: "Leadership Changes",
    relatedStory: "[Demo] Leadership history record",
    sources: "[Demo] Leadership reference file",
    verificationNotes: "Verified in demonstration workflow.",
    verificationStatus: "Verified",
    publicationStatus: "Published",
    updatedAt: "May 09, 2025",
  },
  {
    id: 5,
    title: "[Demonstration] School event record",
    slug: "demo-school-event",
    year: "2021",
    month: "November",
    day: "20",
    description: "An example used to test year, category and status filters.",
    fullDescription: "Demonstration only and not a claim about an actual GSP event.",
    category: "School Events",
    relatedStory: "[Demo] School event story",
    sources: "",
    verificationNotes: "Draft source details are incomplete.",
    verificationStatus: "Draft",
    publicationStatus: "Draft",
    updatedAt: "May 06, 2025",
  },
];

const emptyDraft: EventDraft = {
  title: "",
  slug: "",
  year: "",
  month: "",
  day: "",
  description: "",
  fullDescription: "",
  category: "",
  relatedStory: "",
  sources: "",
  verificationNotes: "",
  verificationStatus: "Draft",
  publicationStatus: "Draft",
};

function StatusBadge({
  status,
  publication = false,
}: {
  status: VerificationStatus | PublicationStatus;
  publication?: boolean;
}) {
  const normalized = status.toLowerCase().replaceAll(" ", "-");
  return (
    <span className={`admin-status ${publication ? "publication-" : ""}${normalized}`}>
      {status}
    </span>
  );
}

export function AdminTimelinePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [events, setEvents] = useState<TimelineEvent[]>(demoEvents);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [publicationFilter, setPublicationFilter] = useState("all");
  const [sort, setSort] = useState("oldest");
  const [page, setPage] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draft, setDraft] = useState<EventDraft>(emptyDraft);
  const [viewEvent, setViewEvent] = useState<TimelineEvent | null>(null);
  const [notice, setNotice] = useState("");
  const [demoVisible, setDemoVisible] = useState(true);

  const years = useMemo(
    () => Array.from(new Set(events.map((event) => event.year).filter(Boolean))).sort(),
    [events],
  );

  const filteredEvents = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    const result = events.filter((event) => {
      const matchesSearch =
        !normalized ||
        `${event.title} ${event.description} ${event.relatedStory}`
          .toLowerCase()
          .includes(normalized);
      return (
        matchesSearch &&
        (yearFilter === "all" || event.year === yearFilter) &&
        (categoryFilter === "all" || event.category === categoryFilter) &&
        (verificationFilter === "all" || event.verificationStatus === verificationFilter) &&
        (publicationFilter === "all" || event.publicationStatus === publicationFilter)
      );
    });
    return [...result].sort((a, b) => {
      if (sort === "alphabetical") return a.title.localeCompare(b.title);
      const yearDifference = Number(a.year) - Number(b.year);
      if (Number.isNaN(yearDifference)) return a.title.localeCompare(b.title);
      return sort === "newest" ? -yearDifference : yearDifference;
    });
  }, [events, search, yearFilter, categoryFilter, verificationFilter, publicationFilter, sort]);

  const pageSize = 5;
  const pageCount = Math.max(1, Math.ceil(filteredEvents.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const pagedEvents = filteredEvents.slice((safePage - 1) * pageSize, safePage * pageSize);

  const previewEvents = [...events]
    .filter((event) => event.publicationStatus === "Published")
    .sort((a, b) => Number(a.year) - Number(b.year));

  const publishedCount = events.filter((event) => event.publicationStatus === "Published").length;
  const draftCount = events.filter((event) => event.verificationStatus === "Draft").length;
  const pendingCount = events.filter(
    (event) => event.verificationStatus === "Pending Verification",
  ).length;

  const openAdd = () => {
    setEditingId(null);
    setDraft(emptyDraft);
    setFormOpen(true);
  };

  const openEdit = (event: TimelineEvent) => {
    setEditingId(event.id);
    setDraft({
      title: event.title,
      slug: event.slug,
      year: event.year,
      month: event.month,
      day: event.day,
      description: event.description,
      fullDescription: event.fullDescription,
      category: event.category,
      relatedStory: event.relatedStory,
      sources: event.sources,
      verificationNotes: event.verificationNotes,
      verificationStatus: event.verificationStatus,
      publicationStatus: event.publicationStatus,
    });
    setFormOpen(true);
  };

  const setDraftField = (field: keyof EventDraft, value: string) =>
    setDraft((current) => ({ ...current, [field]: value }));

  const saveDraft = (action: "draft" | "verification" | "publish") => {
    if (!draft.title.trim()) {
      setNotice("Event title is required.");
      return;
    }
    if (!draft.year.trim()) {
      setNotice("Historical year is required.");
      return;
    }
    if (action === "verification" && !draft.sources.trim()) {
      setNotice("Historical sources are required before submitting for verification.");
      return;
    }
    if (action === "publish") {
      if (!draft.sources.trim()) {
        setNotice("Historical sources are required before publishing.");
        return;
      }
      if (draft.verificationStatus !== "Verified") {
        setNotice("Only a verified event can be published.");
        return;
      }
    }

    const nextStatus: VerificationStatus =
      action === "draft"
        ? "Draft"
        : action === "verification"
          ? "Pending Verification"
          : "Verified";
    const nextPublication: PublicationStatus = action === "publish" ? "Published" : "Draft";
    const slug =
      draft.slug.trim() ||
      draft.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    if (editingId !== null) {
      setEvents((current) =>
        current.map((event) =>
          event.id === editingId
            ? {
                ...event,
                ...draft,
                slug,
                verificationStatus: nextStatus,
                publicationStatus: nextPublication,
                updatedAt: "Just now",
              }
            : event,
        ),
      );
      setNotice("Demonstration timeline event updated.");
    } else {
      setEvents((current) => [
        ...current,
        {
          ...draft,
          id: Math.max(0, ...current.map((event) => event.id)) + 1,
          slug,
          verificationStatus: nextStatus,
          publicationStatus: nextPublication,
          updatedAt: "Just now",
        },
      ]);
      setNotice("Demonstration timeline event saved.");
    }
    setFormOpen(false);
  };

  const deleteEvent = (event: TimelineEvent) => {
    if (
      window.confirm(
        `Delete "${event.title}"? This removes the timeline event only; related history stories are not deleted.`,
      )
    ) {
      setEvents((current) => current.filter((item) => item.id !== event.id));
      setNotice("Timeline event deleted. Related historical stories were left unchanged.");
    }
  };

  const togglePublication = (event: TimelineEvent) => {
    if (event.publicationStatus === "Draft") {
      if (!event.sources.trim()) {
        setNotice("Add historical sources before publishing this event.");
        return;
      }
      if (event.verificationStatus !== "Verified") {
        setNotice("Only verified events can be published.");
        return;
      }
      setEvents((current) =>
        current.map((item) =>
          item.id === event.id
            ? { ...item, publicationStatus: "Published", updatedAt: "Just now" }
            : item,
        ),
      );
      setNotice("Demonstration event published.");
    } else {
      setEvents((current) =>
        current.map((item) =>
          item.id === event.id
            ? { ...item, publicationStatus: "Draft", updatedAt: "Just now" }
            : item,
        ),
      );
      setNotice("Demonstration event unpublished.");
    }
  };

  const clearFilters = () => {
    setSearch("");
    setYearFilter("all");
    setCategoryFilter("all");
    setVerificationFilter("all");
    setPublicationFilter("all");
    setSort("oldest");
    setPage(1);
  };

  const placeholderNavigation = (label: string) => {
    setNotice(`${label} is not available on this page yet.`);
    setSidebarOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {sidebarOpen && (
        <button
          type="button"
          className="admin-sidebar-backdrop"
          aria-label="Close admin navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`admin-sidebar${sidebarOpen ? " is-open" : ""}`}
        aria-label="Admin navigation"
      >
        <div className="admin-sidebar-brand">
          <AdminBrand compact />
          <button
            type="button"
            className="admin-mobile-close"
            aria-label="Close navigation"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={19} />
          </button>
        </div>
        <span className="admin-sidebar-label">WORKSPACE</span>
        <nav className="admin-nav">
          {navigation.map(({ label, icon: Icon, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                className={`admin-nav-link${label === "Timeline Management" ? " is-active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={17} /> <span>{label}</span>
              </Link>
            ) : (
              <button
                type="button"
                key={label}
                className="admin-nav-link"
                onClick={() => placeholderNavigation(label)}
              >
                <Icon size={17} /> <span>{label}</span>
              </button>
            ),
          )}
        </nav>
        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <CircleHelp size={17} />
            <span>
              Need help?<small>Timeline tools are in preview.</small>
            </span>
          </div>
          <Link to="/admin/login" className="admin-nav-link admin-logout-link">
            <LogOut size={17} /> <span>Logout</span>
          </Link>
          <div className="admin-sidebar-version">GSP ARCHIVE · ADMIN PREVIEW</div>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar admin-timeline-topbar">
          <div className="admin-topbar-heading">
            <button
              type="button"
              className="admin-mobile-menu"
              aria-label="Open admin navigation"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div>
              <span className="admin-breadcrumb">
                Admin <span>/</span> Timeline Management
              </span>
              <h1>Timeline Management</h1>
            </div>
          </div>
          <div className="admin-topbar-actions">
            <label className="admin-global-search">
              <Search size={16} />
              <input
                type="search"
                aria-label="Search timeline events"
                placeholder="Search timeline events..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
              />
              {search && (
                <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={14} />
                </button>
              )}
            </label>
            <button type="button" className="admin-add-button" onClick={openAdd}>
              <Plus size={15} /> Add Timeline Event
            </button>
            <div className="admin-profile-wrap">
              <button
                type="button"
                className="admin-profile-button"
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen((current) => !current)}
              >
                <span className="admin-avatar">GA</span>
                <span className="admin-profile-copy">
                  <strong>Archive Admin</strong>
                  <small>Administrator</small>
                </span>
                <ChevronDown size={15} />
              </button>
              {profileOpen && (
                <div className="admin-profile-menu" role="menu">
                  <span className="admin-profile-menu-label">DEMO PROFILE</span>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => setNotice("Profile settings are not available yet.")}
                  >
                    <UserRound size={15} /> Profile settings
                  </button>
                  <Link to="/admin/login" role="menuitem" onClick={() => setProfileOpen(false)}>
                    <LogOut size={15} /> Return to sign in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="admin-dashboard-content admin-timeline-content">
          {demoVisible && (
            <div className="admin-demo-banner">
              <ShieldCheck size={17} />
              <span>
                <strong>Demonstration data</strong> — placeholder records only. No historical fact
                or date is confirmed.
              </span>
              <button
                type="button"
                aria-label="Dismiss demonstration notice"
                onClick={() => setDemoVisible(false)}
              >
                <X size={15} />
              </button>
            </div>
          )}
          {notice && (
            <div className="admin-action-notice" role="status">
              <span>{notice}</span>
              <button type="button" aria-label="Dismiss message" onClick={() => setNotice("")}>
                <X size={15} />
              </button>
            </div>
          )}

          <section className="admin-timeline-page-intro">
            <div>
              <h2>Timeline Management</h2>
              <p>Organize and manage important moments in GSP history.</p>
            </div>
          </section>

          <section
            className="admin-stats-grid admin-timeline-stats"
            aria-label="Timeline statistics"
          >
            {[
              { label: "Total Timeline Events", value: events.length, icon: CalendarDays },
              { label: "Published Events", value: publishedCount, icon: Check },
              { label: "Draft Events", value: draftCount, icon: FileText },
              { label: "Pending Verification", value: pendingCount, icon: ShieldCheck },
            ].map(({ label, value, icon: Icon }) => (
              <article className="admin-stat-card" key={label}>
                <div className="admin-stat-top">
                  <span className="admin-stat-icon">
                    <Icon size={17} />
                  </span>
                  <span className="admin-demo-mini-tag">DEMO</span>
                </div>
                <span className="admin-stat-label">{label}</span>
                <div className="admin-stat-bottom">
                  <strong>{value}</strong>
                </div>
              </article>
            ))}
          </section>

          <section className="admin-panel admin-timeline-table-panel">
            <div className="admin-timeline-filterbar">
              <div className="admin-timeline-filter-grid">
                <label>
                  <span>Year</span>
                  <select
                    value={yearFilter}
                    onChange={(event) => {
                      setYearFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Category</span>
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
                </label>
                <label>
                  <span>Verification</span>
                  <select
                    value={verificationFilter}
                    onChange={(event) => {
                      setVerificationFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All statuses</option>
                    {["Draft", "Pending Verification", "Verified", "Needs Correction"].map(
                      (status) => (
                        <option key={status}>{status}</option>
                      ),
                    )}
                  </select>
                </label>
                <label>
                  <span>Publication</span>
                  <select
                    value={publicationFilter}
                    onChange={(event) => {
                      setPublicationFilter(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="all">All statuses</option>
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </label>
                <label>
                  <span>Sort</span>
                  <select
                    value={sort}
                    onChange={(event) => {
                      setSort(event.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="oldest">Oldest to newest</option>
                    <option value="newest">Newest to oldest</option>
                    <option value="alphabetical">Alphabetically</option>
                  </select>
                </label>
                <button type="button" className="admin-clear-button" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            </div>

            <div className="admin-table-scroll">
              <table className="admin-records-table admin-timeline-table">
                <thead>
                  <tr>
                    <th>Event Title</th>
                    <th>Historical Year</th>
                    <th>Category</th>
                    <th>Short Description</th>
                    <th>Related Story</th>
                    <th>Verification</th>
                    <th>Publication</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedEvents.map((event) => (
                    <tr key={event.id}>
                      <td>
                        <strong>{event.title}</strong>
                      </td>
                      <td>{event.year || "Undated"}</td>
                      <td>{event.category || "Uncategorized"}</td>
                      <td className="admin-timeline-description">{event.description}</td>
                      <td>{event.relatedStory || "None"}</td>
                      <td>
                        <StatusBadge status={event.verificationStatus} />
                      </td>
                      <td>
                        <StatusBadge status={event.publicationStatus} publication />
                      </td>
                      <td>{event.updatedAt}</td>
                      <td>
                        <div className="admin-timeline-actions">
                          <button
                            type="button"
                            aria-label={`View ${event.title}`}
                            title="View"
                            onClick={() => setViewEvent(event)}
                          >
                            <Eye size={15} />
                          </button>
                          <button
                            type="button"
                            aria-label={`Edit ${event.title}`}
                            title="Edit"
                            onClick={() => openEdit(event)}
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            type="button"
                            aria-label={`Delete ${event.title}`}
                            title="Delete"
                            onClick={() => deleteEvent(event)}
                          >
                            <Trash2 size={15} />
                          </button>
                          <button
                            type="button"
                            className="admin-publish-action"
                            onClick={() => togglePublication(event)}
                          >
                            {event.publicationStatus === "Published" ? "Unpublish" : "Publish"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!pagedEvents.length && (
                <div className="admin-records-empty">
                  <Archive size={24} />
                  <strong>No timeline events match these filters</strong>
                  <span>Clear filters or add a demonstration event.</span>
                </div>
              )}
            </div>
            <div className="admin-records-footer">
              <span>
                Showing {filteredEvents.length ? (safePage - 1) * pageSize + 1 : 0}–
                {Math.min(safePage * pageSize, filteredEvents.length)} of {filteredEvents.length}{" "}
                events
              </span>
              <div className="admin-pagination">
                <button
                  type="button"
                  disabled={safePage === 1}
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                >
                  <ArrowLeft size={14} />
                </button>
                <span>
                  {safePage} / {pageCount}
                </span>
                <button
                  type="button"
                  disabled={safePage === pageCount}
                  onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </section>

          <section className="admin-panel admin-timeline-preview">
            <div className="admin-panel-heading">
              <div>
                <h2>Public Timeline Preview</h2>
                <p>Chronological, text-only preview of published demonstration events</p>
              </div>
              <Link to="/timeline" className="admin-public-link">
                Open public timeline <ArrowRight size={13} />
              </Link>
            </div>
            {previewEvents.length ? (
              <ol className="admin-vertical-timeline">
                {previewEvents.map((event) => (
                  <li key={event.id}>
                    <div className="admin-timeline-year">{event.year || "Undated"}</div>
                    <article>
                      <span>{event.category}</span>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </article>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="admin-records-empty">
                <CalendarDays size={24} />
                <strong>No published events to preview</strong>
                <span>Publish a verified event to show it here.</span>
              </div>
            )}
          </section>
        </main>
      </div>

      {formOpen && (
        <div
          className="admin-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setFormOpen(false);
          }}
        >
          <section
            className="admin-timeline-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-form-title"
          >
            <div className="admin-modal-heading">
              <div>
                <span className="admin-breadcrumb">Admin / Timeline Management</span>
                <h2 id="timeline-form-title">
                  {editingId !== null ? "Edit Timeline Event" : "Add Timeline Event"}
                </h2>
              </div>
              <button type="button" aria-label="Close form" onClick={() => setFormOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-timeline-form">
              <div className="admin-form-grid">
                <label className="admin-form-field admin-form-span-2">
                  <span>Event Title *</span>
                  <input
                    value={draft.title}
                    onChange={(event) => setDraftField("title", event.target.value)}
                    placeholder="[Demonstration] Enter an event title"
                  />
                </label>
                <label className="admin-form-field">
                  <span>URL Slug</span>
                  <input
                    value={draft.slug}
                    onChange={(event) => setDraftField("slug", event.target.value)}
                    placeholder="demo-event-title"
                  />
                </label>
                <label className="admin-form-field">
                  <span>Historical Year *</span>
                  <input
                    value={draft.year}
                    onChange={(event) => setDraftField("year", event.target.value)}
                    placeholder="Enter a verified year"
                  />
                </label>
                <label className="admin-form-field">
                  <span>Optional Month</span>
                  <input
                    value={draft.month}
                    onChange={(event) => setDraftField("month", event.target.value)}
                    placeholder="Month"
                  />
                </label>
                <label className="admin-form-field">
                  <span>Optional Day</span>
                  <input
                    value={draft.day}
                    onChange={(event) => setDraftField("day", event.target.value)}
                    placeholder="Day"
                  />
                </label>
                <label className="admin-form-field admin-form-span-2">
                  <span>Short Description</span>
                  <textarea
                    rows={3}
                    value={draft.description}
                    onChange={(event) => setDraftField("description", event.target.value)}
                    placeholder="Brief, text-only summary"
                  />
                </label>
                <label className="admin-form-field admin-form-span-2">
                  <span>Full Event Description</span>
                  <textarea
                    rows={5}
                    value={draft.fullDescription}
                    onChange={(event) => setDraftField("fullDescription", event.target.value)}
                    placeholder="Describe only what can be supported by verified sources"
                  />
                </label>
                <label className="admin-form-field">
                  <span>Historical Category</span>
                  <select
                    value={draft.category}
                    onChange={(event) => setDraftField("category", event.target.value)}
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </label>
                <label className="admin-form-field">
                  <span>Related Historical Story</span>
                  <input
                    value={draft.relatedStory}
                    onChange={(event) => setDraftField("relatedStory", event.target.value)}
                    placeholder="[Optional demonstration story]"
                  />
                </label>
                <label className="admin-form-field admin-form-span-2">
                  <span>Historical Sources and References *</span>
                  <textarea
                    rows={3}
                    value={draft.sources}
                    onChange={(event) => setDraftField("sources", event.target.value)}
                    placeholder="Add reliable source titles, references or archive records"
                  />
                </label>
                <label className="admin-form-field admin-form-span-2">
                  <span>Verification Notes</span>
                  <textarea
                    rows={3}
                    value={draft.verificationNotes}
                    onChange={(event) => setDraftField("verificationNotes", event.target.value)}
                    placeholder="Record verification findings and unresolved concerns"
                  />
                </label>
                <label className="admin-form-field">
                  <span>Verification Status</span>
                  <select
                    value={draft.verificationStatus}
                    onChange={(event) => setDraftField("verificationStatus", event.target.value)}
                  >
                    {["Draft", "Pending Verification", "Verified", "Needs Correction"].map(
                      (status) => (
                        <option key={status}>{status}</option>
                      ),
                    )}
                  </select>
                </label>
                <label className="admin-form-field">
                  <span>Publication Status</span>
                  <select
                    value={draft.publicationStatus}
                    onChange={(event) => setDraftField("publicationStatus", event.target.value)}
                  >
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </label>
              </div>
              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-cancel-button"
                  onClick={() => setFormOpen(false)}
                >
                  Cancel
                </button>
                <div>
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={() => saveDraft("draft")}
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={() => saveDraft("verification")}
                  >
                    Submit for Verification
                  </button>
                  <button
                    type="button"
                    className="admin-publish-button"
                    onClick={() => saveDraft("publish")}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {viewEvent && (
        <div
          className="admin-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setViewEvent(null);
          }}
        >
          <section
            className="admin-timeline-modal admin-timeline-view"
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-view-title"
          >
            <div className="admin-modal-heading">
              <div>
                <span className="admin-breadcrumb">Timeline Event Preview</span>
                <h2 id="timeline-view-title">{viewEvent.title}</h2>
              </div>
              <button type="button" aria-label="Close preview" onClick={() => setViewEvent(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-timeline-view-content">
              <div className="admin-timeline-view-year">{viewEvent.year || "Undated"}</div>
              <dl>
                <div>
                  <dt>Category</dt>
                  <dd>{viewEvent.category || "Uncategorized"}</dd>
                </div>
                <div>
                  <dt>Related Story</dt>
                  <dd>{viewEvent.relatedStory || "None"}</dd>
                </div>
                <div>
                  <dt>Verification</dt>
                  <dd>
                    <StatusBadge status={viewEvent.verificationStatus} />
                  </dd>
                </div>
                <div>
                  <dt>Publication</dt>
                  <dd>
                    <StatusBadge status={viewEvent.publicationStatus} publication />
                  </dd>
                </div>
              </dl>
              <h3>Short Description</h3>
              <p>{viewEvent.description || "No short description supplied."}</p>
              <h3>Full Event Description</h3>
              <p>{viewEvent.fullDescription || "No full description supplied."}</p>
              <h3>Sources and References</h3>
              <p>{viewEvent.sources || "No source has been supplied."}</p>
              <h3>Verification Notes</h3>
              <p>{viewEvent.verificationNotes || "No verification notes supplied."}</p>
              <button
                type="button"
                className="admin-publish-button"
                onClick={() => {
                  setViewEvent(null);
                  openEdit(viewEvent);
                }}
              >
                <Pencil size={14} /> Edit Event
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
