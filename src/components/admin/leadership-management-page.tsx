import { useMemo, useState, type ChangeEvent } from "react";
import {
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Eye,
  Pencil,
  Plus,
  Search,
  Trash2,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AdminDashboardPage } from "@/components/admin/dashboard-page";

type VerificationStatus = "Draft" | "Pending Verification" | "Verified" | "Needs Correction";
type PublicationStatus = "Draft" | "Unpublished" | "Published";

type LeaderRecord = {
  id: number;
  name: string;
  position: string;
  startYear: string;
  endYear: string;
  current: boolean;
  shortBiography: string;
  fullBiography: string;
  contributions: string;
  achievements: string;
  events: string;
  stories: string;
  reference: string;
  sourceTitle: string;
  sourceUrl: string;
  verificationNotes: string;
  verification: VerificationStatus;
  publication: PublicationStatus;
  portrait: string;
  updated: string;
};

const initialLeaders: LeaderRecord[] = [
  {
    id: 1,
    name: "Demonstration — Current Leader",
    position: "Headmaster (awaiting verified name)",
    startYear: "",
    endYear: "",
    current: false,
    shortBiography: "Placeholder for verified public leadership information.",
    fullBiography: "",
    contributions: "",
    achievements: "",
    events: "",
    stories: "",
    reference: "",
    sourceTitle: "",
    sourceUrl: "",
    verificationNotes: "",
    verification: "Draft",
    publication: "Draft",
    portrait: "",
    updated: "Nov 26, 2026",
  },
  {
    id: 2,
    name: "Demonstration — Former Leader 01",
    position: "Headmaster (role to be verified)",
    startYear: "",
    endYear: "",
    current: false,
    shortBiography: "Placeholder record — no historical details have been invented.",
    fullBiography: "",
    contributions: "",
    achievements: "",
    events: "",
    stories: "",
    reference: "",
    sourceTitle: "",
    sourceUrl: "",
    verificationNotes: "Portrait and service period require an authorized source.",
    verification: "Needs Correction",
    publication: "Unpublished",
    portrait: "",
    updated: "Nov 24, 2026",
  },
  {
    id: 3,
    name: "Demonstration — Former Leader 02",
    position: "Headmaster (role to be verified)",
    startYear: "",
    endYear: "",
    current: false,
    shortBiography: "Placeholder record pending source review.",
    fullBiography: "",
    contributions: "",
    achievements: "",
    events: "",
    stories: "",
    reference: "",
    sourceTitle: "",
    sourceUrl: "",
    verificationNotes: "",
    verification: "Pending Verification",
    publication: "Draft",
    portrait: "",
    updated: "Nov 20, 2026",
  },
];

const emptyLeader = (): LeaderRecord => ({
  id: 0,
  name: "",
  position: "",
  startYear: "",
  endYear: "",
  current: false,
  shortBiography: "",
  fullBiography: "",
  contributions: "",
  achievements: "",
  events: "",
  stories: "",
  reference: "",
  sourceTitle: "",
  sourceUrl: "",
  verificationNotes: "",
  verification: "Draft",
  publication: "Draft",
  portrait: "",
  updated: "Nov 26, 2026",
});

function statusClass(status: string) {
  const value = status.toLowerCase();
  if (value.includes("published") || value === "verified") return "is-published";
  if (value.includes("pending") || value.includes("draft") || value === "unpublished")
    return "is-pending";
  return "is-draft";
}

export function LeadershipManagementPage() {
  const [leaders, setLeaders] = useState(initialLeaders);
  const [query, setQuery] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");
  const [leaderStatus, setLeaderStatus] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [publicationFilter, setPublicationFilter] = useState("all");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewLeader, setPreviewLeader] = useState<LeaderRecord | null>(null);
  const [editing, setEditing] = useState<LeaderRecord>(emptyLeader());
  const [isEditing, setIsEditing] = useState(false);
  const [notice, setNotice] = useState("");

  const positions = useMemo(
    () => Array.from(new Set(leaders.map((leader) => leader.position))),
    [leaders],
  );

  const filteredLeaders = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = leaders.filter((leader) => {
      if (term && !`${leader.name} ${leader.position}`.toLowerCase().includes(term)) return false;
      if (positionFilter !== "all" && leader.position !== positionFilter) return false;
      if (leaderStatus !== "all" && (leaderStatus === "current") !== leader.current) return false;
      if (verificationFilter !== "all" && leader.verification !== verificationFilter) return false;
      if (publicationFilter !== "all" && leader.publication !== publicationFilter) return false;
      if (periodFilter === "unverified" && (leader.startYear || leader.endYear)) return false;
      if (periodFilter === "verified" && (!leader.startYear || leader.startYear === ""))
        return false;
      return true;
    });
    return [...result].sort((a, b) => {
      if (sort === "startYear") {
        const aYear = Number(a.startYear) || 9999;
        const bYear = Number(b.startYear) || 9999;
        return aYear - bYear;
      }
      return a.name.localeCompare(b.name);
    });
  }, [
    leaders,
    query,
    positionFilter,
    leaderStatus,
    verificationFilter,
    publicationFilter,
    periodFilter,
    sort,
  ]);

  const pageSize = 5;
  const pageCount = Math.max(1, Math.ceil(filteredLeaders.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visibleLeaders = filteredLeaders.slice((safePage - 1) * pageSize, safePage * pageSize);

  const openNew = () => {
    setEditing(emptyLeader());
    setIsEditing(false);
    setFormOpen(true);
  };

  const openEdit = (leader: LeaderRecord) => {
    setEditing({ ...leader });
    setIsEditing(true);
    setFormOpen(true);
  };

  const openPreview = (leader: LeaderRecord) => {
    setPreviewLeader(leader);
    setPreviewOpen(true);
  };

  const updateEditing = (field: keyof LeaderRecord, value: string | boolean) => {
    setEditing((current) => ({ ...current, [field]: value }));
  };

  const handlePortrait = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateEditing("portrait", String(reader.result ?? ""));
    reader.readAsDataURL(file);
  };

  const saveLeader = (publication: PublicationStatus, submitVerification = false) => {
    if (!editing.name.trim() || !editing.position.trim()) {
      setNotice("Full Name and Position / Leadership Role are required.");
      return;
    }
    if (editing.current && editing.verification !== "Verified") {
      setNotice("A leader can be marked current only after the record is verified.");
      return;
    }
    if (
      editing.startYear &&
      editing.endYear &&
      Number(editing.endYear) < Number(editing.startYear)
    ) {
      setNotice("The leadership end year cannot be earlier than the start year.");
      return;
    }
    if (publication === "Published" && editing.verification !== "Verified") {
      setNotice("Only a verified leadership record can be published.");
      return;
    }
    const overlapping = leaders.find(
      (leader) => leader.id !== editing.id && leader.current && editing.current,
    );
    if (overlapping) {
      setNotice("There is already a current leader record. Review it before changing leadership.");
      return;
    }

    const verification: VerificationStatus = submitVerification
      ? "Pending Verification"
      : editing.verification;
    const saved: LeaderRecord = {
      ...editing,
      id: isEditing ? editing.id : Date.now(),
      verification,
      publication,
      updated: "Nov 26, 2026",
    };
    setLeaders((current) =>
      isEditing
        ? current.map((leader) => (leader.id === saved.id ? saved : leader))
        : [saved, ...current],
    );
    setFormOpen(false);
    setNotice(
      isEditing
        ? "Leadership record updated in this frontend session."
        : "New leadership record added to this frontend session.",
    );
  };

  const deleteLeader = (leader: LeaderRecord) => {
    if (!window.confirm(`Delete "${leader.name}"? This action cannot be undone in this preview.`))
      return;
    setLeaders((current) => current.filter((item) => item.id !== leader.id));
    setNotice("Leadership record deleted from this frontend session.");
  };

  const togglePublication = (leader: LeaderRecord) => {
    if (leader.verification !== "Verified" && leader.publication !== "Published") {
      setNotice("Only a verified leadership record can be published.");
      return;
    }
    setLeaders((current) =>
      current.map((item) =>
        item.id === leader.id
          ? {
              ...item,
              publication: item.publication === "Published" ? "Unpublished" : "Published",
              updated: "Nov 26, 2026",
            }
          : item,
      ),
    );
  };

  const clearFilters = () => {
    setQuery("");
    setPositionFilter("all");
    setPeriodFilter("all");
    setLeaderStatus("all");
    setVerificationFilter("all");
    setPublicationFilter("all");
    setSort("name");
    setPage(1);
  };

  const totalLeaders = leaders.length;
  const currentCount = leaders.filter((leader) => leader.current).length;
  const formerCount = leaders.filter((leader) => !leader.current).length;
  const pendingCount = leaders.filter(
    (leader) => leader.verification === "Pending Verification",
  ).length;

  return (
    <AdminDashboardPage
      pageTitle="Leadership Management"
      activePage="Leadership Management"
      showGlobalSearch={false}
    >
      <div className="leadership-admin-heading">
        <div>
          <span className="admin-page-kicker">ADMIN / LEADERSHIP MANAGEMENT</span>
          <h2>Leadership Management</h2>
          <p>Manage and preserve the history of GSP school leadership.</p>
        </div>
        <button type="button" className="admin-primary-button" onClick={openNew}>
          <Plus size={16} /> Add New Leader
        </button>
      </div>

      {notice && (
        <div className="admin-action-notice leadership-admin-notice" role="status">
          <span>{notice}</span>
          <button type="button" aria-label="Dismiss message" onClick={() => setNotice("")}>
            <X size={15} />
          </button>
        </div>
      )}

      <section className="leadership-admin-stats" aria-label="Leadership statistics">
        {[
          { label: "Total Leaders", value: totalLeaders, icon: UsersRound },
          { label: "Current Leadership Records", value: currentCount, icon: BadgeCheck },
          { label: "Former Leaders", value: formerCount, icon: UserRound },
          { label: "Pending Verification", value: pendingCount, icon: CalendarDays },
        ].map(({ label, value, icon: Icon }) => (
          <article className="admin-stat-card" key={label}>
            <div className="admin-stat-top">
              <span className="admin-stat-icon">
                <Icon size={17} />
              </span>
            </div>
            <span className="admin-stat-label">{label}</span>
            <div className="admin-stat-bottom">
              <strong>{value}</strong>
              <span>Demonstration</span>
            </div>
          </article>
        ))}
      </section>

      <section className="admin-panel leadership-directory">
        <div className="leadership-directory-toolbar">
          <label className="leadership-search">
            <Search size={16} />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by full name..."
              aria-label="Search leaders by full name"
            />
          </label>
          <div className="leadership-filters">
            <select
              value={positionFilter}
              onChange={(event) => setPositionFilter(event.target.value)}
              aria-label="Filter by position"
            >
              <option value="all">All positions</option>
              {positions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
            <select
              value={periodFilter}
              onChange={(event) => setPeriodFilter(event.target.value)}
              aria-label="Filter by leadership period"
            >
              <option value="all">All periods</option>
              <option value="verified">Period provided</option>
              <option value="unverified">Period unverified</option>
            </select>
            <select
              value={leaderStatus}
              onChange={(event) => setLeaderStatus(event.target.value)}
              aria-label="Filter current or former"
            >
              <option value="all">Current & former</option>
              <option value="current">Current</option>
              <option value="former">Former</option>
            </select>
            <select
              value={verificationFilter}
              onChange={(event) => setVerificationFilter(event.target.value)}
              aria-label="Filter verification status"
            >
              <option value="all">All verification</option>
              <option>Draft</option>
              <option>Pending Verification</option>
              <option>Verified</option>
              <option>Needs Correction</option>
            </select>
            <select
              value={publicationFilter}
              onChange={(event) => setPublicationFilter(event.target.value)}
              aria-label="Filter publication status"
            >
              <option value="all">All publication</option>
              <option>Draft</option>
              <option>Unpublished</option>
              <option>Published</option>
            </select>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort leaders"
            >
              <option value="name">Sort alphabetically</option>
              <option value="startYear">Leadership start year</option>
            </select>
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>

        <div className="admin-table-scroll">
          <table className="admin-records-table leadership-directory-table">
            <thead>
              <tr>
                <th>Portrait</th>
                <th>Full Name</th>
                <th>Position</th>
                <th>Leadership Period</th>
                <th>Biography</th>
                <th>Verification</th>
                <th>Publication</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleLeaders.map((leader) => (
                <tr key={leader.id}>
                  <td>
                    <div className="leadership-table-portrait">
                      {leader.portrait ? (
                        <img src={leader.portrait} alt="" />
                      ) : (
                        <UserRound size={20} />
                      )}
                    </div>
                  </td>
                  <td>
                    <strong>{leader.name}</strong>
                    <small>{leader.current ? "Current leader" : "Former leader"}</small>
                  </td>
                  <td>{leader.position}</td>
                  <td>
                    {leader.startYear
                      ? `${leader.startYear}${leader.endYear ? ` – ${leader.endYear}` : " – Present"}`
                      : "Dates unverified"}
                  </td>
                  <td>
                    <span
                      className={`admin-status ${leader.fullBiography ? "is-published" : "is-draft"}`}
                    >
                      {leader.fullBiography ? "Complete" : "Incomplete"}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-status ${statusClass(leader.verification)}`}>
                      {leader.verification}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-status ${statusClass(leader.publication)}`}>
                      {leader.publication}
                    </span>
                  </td>
                  <td>{leader.updated}</td>
                  <td>
                    <div className="leadership-row-actions">
                      <button
                        type="button"
                        aria-label={`View ${leader.name}`}
                        title="View profile"
                        onClick={() => openPreview(leader)}
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        type="button"
                        aria-label={`Edit ${leader.name}`}
                        title="Edit"
                        onClick={() => openEdit(leader)}
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        type="button"
                        aria-label={`Delete ${leader.name}`}
                        title="Delete"
                        onClick={() => deleteLeader(leader)}
                      >
                        <Trash2 size={15} />
                      </button>
                      <button
                        type="button"
                        className="publish-action"
                        onClick={() => togglePublication(leader)}
                      >
                        {leader.publication === "Published" ? "Unpublish" : "Publish"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleLeaders.length === 0 && (
            <div className="leadership-empty">
              <UserRound size={24} />
              <strong>No leadership records match these filters</strong>
            </div>
          )}
        </div>

        <div className="leadership-pagination">
          <span>
            Showing {filteredLeaders.length ? (safePage - 1) * pageSize + 1 : 0}–
            {Math.min(safePage * pageSize, filteredLeaders.length)} of {filteredLeaders.length}{" "}
            records
          </span>
          <div>
            <button type="button" disabled={safePage === 1} onClick={() => setPage(safePage - 1)}>
              Previous
            </button>
            <span>
              {safePage} / {pageCount}
            </span>
            <button
              type="button"
              disabled={safePage === pageCount}
              onClick={() => setPage(safePage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="leadership-form-dialog">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Leader" : "Add New Leader"}</DialogTitle>
            <DialogDescription>
              Use only verified, permission-cleared information. Demonstration fields are not
              populated with invented history.
            </DialogDescription>
          </DialogHeader>
          <div className="leadership-form-layout">
            <div className="leadership-form-fields">
              <section>
                <h3>Personal Information</h3>
                <div className="leadership-form-grid">
                  <label className="leadership-field">
                    <span>Full Name *</span>
                    <input
                      value={editing.name}
                      onChange={(event) => updateEditing("name", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Position / Leadership Role *</span>
                    <input
                      value={editing.position}
                      onChange={(event) => updateEditing("position", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field leadership-field-wide">
                    <span>Portrait Upload</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handlePortrait}
                    />
                  </label>
                  <label className="leadership-field leadership-field-wide">
                    <span>Short Biography</span>
                    <textarea
                      rows={3}
                      value={editing.shortBiography}
                      onChange={(event) => updateEditing("shortBiography", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field leadership-field-wide">
                    <span>Full Biography</span>
                    <textarea
                      rows={5}
                      value={editing.fullBiography}
                      onChange={(event) => updateEditing("fullBiography", event.target.value)}
                    />
                  </label>
                </div>
              </section>
              <section>
                <h3>Leadership Information</h3>
                <div className="leadership-form-grid">
                  <label className="leadership-field">
                    <span>Leadership Start Year</span>
                    <input
                      type="number"
                      min="1900"
                      max="2100"
                      value={editing.startYear}
                      onChange={(event) => updateEditing("startYear", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Leadership End Year</span>
                    <input
                      type="number"
                      min="1900"
                      max="2100"
                      disabled={editing.current}
                      value={editing.endYear}
                      onChange={(event) => updateEditing("endYear", event.target.value)}
                    />
                  </label>
                  <label className="leadership-checkbox">
                    <input
                      type="checkbox"
                      checked={editing.current}
                      disabled={editing.verification !== "Verified"}
                      onChange={(event) => updateEditing("current", event.target.checked)}
                    />{" "}
                    Current Leader <small>Available only after verification</small>
                  </label>
                  <label className="leadership-field leadership-field-wide">
                    <span>Leadership Contributions</span>
                    <textarea
                      rows={3}
                      value={editing.contributions}
                      onChange={(event) => updateEditing("contributions", event.target.value)}
                    />
                  </label>
                  {editing.verification === "Verified" && (
                    <label className="leadership-field leadership-field-wide">
                      <span>Major Achievements</span>
                      <textarea
                        rows={3}
                        value={editing.achievements}
                        onChange={(event) => updateEditing("achievements", event.target.value)}
                      />
                    </label>
                  )}
                  <label className="leadership-field">
                    <span>Related Historical Events</span>
                    <input
                      value={editing.events}
                      onChange={(event) => updateEditing("events", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Related Historical Stories</span>
                    <input
                      value={editing.stories}
                      onChange={(event) => updateEditing("stories", event.target.value)}
                    />
                  </label>
                </div>
              </section>
              <section>
                <h3>Sources and Verification</h3>
                <div className="leadership-form-grid">
                  <label className="leadership-field leadership-field-wide">
                    <span>Historical References</span>
                    <textarea
                      rows={2}
                      value={editing.reference}
                      onChange={(event) => updateEditing("reference", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Source Title</span>
                    <input
                      value={editing.sourceTitle}
                      onChange={(event) => updateEditing("sourceTitle", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Source URL or Document Reference</span>
                    <input
                      value={editing.sourceUrl}
                      onChange={(event) => updateEditing("sourceUrl", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field leadership-field-wide">
                    <span>Verification Notes</span>
                    <textarea
                      rows={3}
                      value={editing.verificationNotes}
                      onChange={(event) => updateEditing("verificationNotes", event.target.value)}
                    />
                  </label>
                  <label className="leadership-field">
                    <span>Verification Status</span>
                    <select
                      value={editing.verification}
                      onChange={(event) =>
                        updateEditing("verification", event.target.value as VerificationStatus)
                      }
                    >
                      <option>Draft</option>
                      <option>Pending Verification</option>
                      <option>Verified</option>
                      <option>Needs Correction</option>
                    </select>
                  </label>
                  <label className="leadership-field">
                    <span>Publication Status</span>
                    <select
                      value={editing.publication}
                      onChange={(event) =>
                        updateEditing("publication", event.target.value as PublicationStatus)
                      }
                    >
                      <option>Draft</option>
                      <option>Unpublished</option>
                      <option>Published</option>
                    </select>
                  </label>
                </div>
              </section>
            </div>

            <aside className="leadership-live-preview">
              <span className="admin-page-kicker">PUBLIC ARCHIVE PREVIEW</span>
              <div className="leadership-preview-card">
                <div className="leadership-preview-portrait">
                  {editing.portrait ? (
                    <img src={editing.portrait} alt="" />
                  ) : (
                    <UserRound size={48} strokeWidth={1} />
                  )}
                </div>
                <span className="eyebrow">
                  {editing.current ? "CURRENT LEADER" : "FORMER LEADER"}
                </span>
                <h3>{editing.name || "Leader name awaiting verification"}</h3>
                <p className="leadership-preview-position">
                  {editing.position || "Position awaiting verification"}
                </p>
                <div className="leadership-preview-period">
                  <CalendarDays size={14} />{" "}
                  {editing.startYear
                    ? `${editing.startYear}${editing.endYear ? ` – ${editing.endYear}` : " – Present"}`
                    : "Leadership period awaiting verification"}
                </div>
                <p>
                  {editing.shortBiography ||
                    editing.fullBiography ||
                    "Biography information is not yet verified."}
                </p>
                {editing.contributions && (
                  <>
                    <h4>Contributions</h4>
                    <p>{editing.contributions}</p>
                  </>
                )}
                {editing.achievements && editing.verification === "Verified" && (
                  <>
                    <h4>Major Achievements</h4>
                    <p>{editing.achievements}</p>
                  </>
                )}
                {(editing.events || editing.stories) && <h4>Related Archive Records</h4>}
                {editing.events && <p>{editing.events}</p>}
                {editing.stories && <p>{editing.stories}</p>}
                {(editing.reference || editing.sourceTitle || editing.sourceUrl) && (
                  <>
                    <h4>Sources and References</h4>
                    <p>{editing.reference || editing.sourceTitle || editing.sourceUrl}</p>
                  </>
                )}
              </div>
            </aside>
          </div>
          <DialogFooter className="leadership-form-actions">
            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => setFormOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => saveLeader("Draft")}
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="admin-secondary-button"
              onClick={() => saveLeader("Unpublished", true)}
            >
              Submit for Verification
            </button>
            <button
              type="button"
              className="admin-primary-button"
              onClick={() => saveLeader("Published")}
            >
              Publish
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="leadership-profile-dialog">
          <DialogHeader>
            <DialogTitle>Public Leadership Profile Preview</DialogTitle>
            <DialogDescription>Historical archive presentation</DialogDescription>
          </DialogHeader>
          {previewLeader && (
            <div className="leadership-profile-preview">
              <div className="leadership-preview-portrait">
                {previewLeader.portrait ? (
                  <img src={previewLeader.portrait} alt="" />
                ) : (
                  <UserRound size={58} strokeWidth={1} />
                )}
              </div>
              <span className="eyebrow">
                {previewLeader.current ? "CURRENT LEADER" : "FORMER LEADER"}
              </span>
              <h2>{previewLeader.name}</h2>
              <p className="leadership-preview-position">{previewLeader.position}</p>
              <div className="leadership-preview-period">
                <CalendarDays size={14} />{" "}
                {previewLeader.startYear
                  ? `${previewLeader.startYear}${previewLeader.endYear ? ` – ${previewLeader.endYear}` : " – Present"}`
                  : "Leadership period awaiting verification"}
              </div>
              <h3>Biography</h3>
              <p>
                {previewLeader.fullBiography ||
                  previewLeader.shortBiography ||
                  "Biography information is not yet verified."}
              </p>
              <h3>Leadership Contributions</h3>
              <p>
                {previewLeader.contributions ||
                  "Contributions are awaiting verified documentation."}
              </p>
              {previewLeader.verification === "Verified" && (
                <>
                  <h3>Major Achievements</h3>
                  <p>{previewLeader.achievements || "No achievements have been provided."}</p>
                </>
              )}
              <h3>Related Historical Events</h3>
              <p>{previewLeader.events || "No related events have been supplied."}</p>
              <h3>Sources and References</h3>
              <p>
                {previewLeader.reference ||
                  previewLeader.sourceTitle ||
                  previewLeader.sourceUrl ||
                  "Historical sources are awaiting verification."}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminDashboardPage>
  );
}
