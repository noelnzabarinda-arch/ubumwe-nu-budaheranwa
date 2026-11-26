import { useMemo, useState, type ChangeEvent } from "react";
import {
  Award,
  Eye,
  Pencil,
  Plus,
  Search,
  Trash2,
  UserRound,
  UsersRound,
  X,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
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

type Category = "Former Student" | "Former Teacher" | "Former Staff";
type VerificationStatus = "Draft" | "Pending Verification" | "Verified" | "Needs Correction";
type PublicationStatus = "Draft" | "Unpublished" | "Published";

type RecordItem = {
  id: number;
  name: string;
  category: Category;
  portrait: string;
  shortBiography: string;
  fullBiography: string;
  gspConnection: string;
  contributions: string;
  relatedEvents: string;
  sources: string;
  verificationNotes: string;
  verification: VerificationStatus;
  publication: PublicationStatus;
  graduationYear: string;
  classProgram: string;
  educationalJourney: string;
  achievements: string;
  schoolContributions: string;
  subjects: string;
  department: string;
  serviceStart: string;
  serviceEnd: string;
  teachingContributions: string;
  formerPosition: string;
  responsibilities: string;
  updated: string;
};

const initialRecords: RecordItem[] = [
  {
    id: 1,
    name: "Demonstration — Former Student 01",
    category: "Former Student",
    portrait: "",
    shortBiography:
      "Placeholder alumni record; verified historical information has not been supplied.",
    fullBiography: "",
    gspConnection: "",
    contributions: "",
    relatedEvents: "",
    sources: "",
    verificationNotes: "Requires documentary evidence and portrait permission.",
    verification: "Pending Verification",
    publication: "Draft",
    graduationYear: "",
    classProgram: "",
    educationalJourney: "",
    achievements: "",
    schoolContributions: "",
    subjects: "",
    department: "",
    serviceStart: "",
    serviceEnd: "",
    teachingContributions: "",
    formerPosition: "",
    responsibilities: "",
    updated: "Nov 26, 2026",
  },
  {
    id: 2,
    name: "Demonstration — Former Teacher 01",
    category: "Former Teacher",
    portrait: "",
    shortBiography: "Placeholder teacher record; no historical name or service claim is confirmed.",
    fullBiography: "",
    gspConnection: "",
    contributions: "",
    relatedEvents: "",
    sources: "",
    verificationNotes: "",
    verification: "Draft",
    publication: "Draft",
    graduationYear: "",
    classProgram: "",
    educationalJourney: "",
    achievements: "",
    schoolContributions: "",
    subjects: "",
    department: "",
    serviceStart: "",
    serviceEnd: "",
    teachingContributions: "",
    formerPosition: "",
    responsibilities: "",
    updated: "Nov 24, 2026",
  },
  {
    id: 3,
    name: "Demonstration — Former Staff 01",
    category: "Former Staff",
    portrait: "",
    shortBiography: "Placeholder staff record pending authorized historical sources.",
    fullBiography: "",
    gspConnection: "",
    contributions: "",
    relatedEvents: "",
    sources: "",
    verificationNotes: "Personal information must remain restricted.",
    verification: "Needs Correction",
    publication: "Unpublished",
    graduationYear: "",
    classProgram: "",
    educationalJourney: "",
    achievements: "",
    schoolContributions: "",
    subjects: "",
    department: "",
    serviceStart: "",
    serviceEnd: "",
    teachingContributions: "",
    formerPosition: "",
    responsibilities: "",
    updated: "Nov 20, 2026",
  },
];

const emptyRecord = (category: Category): RecordItem => ({
  id: 0,
  name: "",
  category,
  portrait: "",
  shortBiography: "",
  fullBiography: "",
  gspConnection: "",
  contributions: "",
  relatedEvents: "",
  sources: "",
  verificationNotes: "",
  verification: "Draft",
  publication: "Draft",
  graduationYear: "",
  classProgram: "",
  educationalJourney: "",
  achievements: "",
  schoolContributions: "",
  subjects: "",
  department: "",
  serviceStart: "",
  serviceEnd: "",
  teachingContributions: "",
  formerPosition: "",
  responsibilities: "",
  updated: "Nov 26, 2026",
});

function statusClass(status: string) {
  if (status === "Verified" || status === "Published") return "is-published";
  if (status === "Draft" || status === "Pending Verification" || status === "Unpublished")
    return "is-pending";
  return "is-draft";
}

function recordPeriod(record: RecordItem) {
  if (record.category === "Former Student")
    return record.graduationYear ? `Graduated ${record.graduationYear}` : "Year unverified";
  if (record.serviceStart || record.serviceEnd)
    return `${record.serviceStart || "Unknown"} – ${record.serviceEnd || "Present"}`;
  return "Period unverified";
}

export function AlumniStaffManagementPage() {
  const [records, setRecords] = useState(initialRecords);
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [publicationFilter, setPublicationFilter] = useState("all");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [editing, setEditing] = useState<RecordItem>(emptyRecord("Former Student"));
  const [preview, setPreview] = useState<RecordItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [notice, setNotice] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = records.filter((record) => {
      if (
        term &&
        !`${record.name} ${record.department} ${record.formerPosition}`.toLowerCase().includes(term)
      )
        return false;
      if (categoryFilter !== "all" && record.category !== categoryFilter) return false;
      if (activeCategory !== "All" && record.category !== activeCategory) return false;
      if (yearFilter !== "all" && record.graduationYear !== yearFilter) return false;
      if (periodFilter === "provided" && !record.serviceStart && !record.serviceEnd) return false;
      if (periodFilter === "unverified" && (record.serviceStart || record.serviceEnd)) return false;
      if (departmentFilter !== "all" && record.department !== departmentFilter) return false;
      if (verificationFilter !== "all" && record.verification !== verificationFilter) return false;
      if (publicationFilter !== "all" && record.publication !== publicationFilter) return false;
      return true;
    });
    return [...result].sort((a, b) => {
      if (sort === "year") {
        const ay = Number(a.graduationYear || a.serviceStart) || 9999;
        const by = Number(b.graduationYear || b.serviceStart) || 9999;
        return ay - by;
      }
      return a.name.localeCompare(b.name);
    });
  }, [
    records,
    query,
    categoryFilter,
    activeCategory,
    yearFilter,
    periodFilter,
    departmentFilter,
    verificationFilter,
    publicationFilter,
    sort,
  ]);

  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);
  const departments = useMemo(
    () => Array.from(new Set(records.map((record) => record.department).filter(Boolean))),
    [records],
  );
  const graduationYears = useMemo(
    () =>
      Array.from(new Set(records.map((record) => record.graduationYear).filter(Boolean))).sort(),
    [records],
  );

  const openNew = (category: Category = "Former Student") => {
    setEditing(emptyRecord(category));
    setIsEditing(false);
    setFormOpen(true);
  };
  const openEdit = (record: RecordItem) => {
    setEditing({ ...record });
    setIsEditing(true);
    setFormOpen(true);
  };
  const handlePortrait = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setEditing((current) => ({ ...current, portrait: String(reader.result ?? "") }));
    reader.readAsDataURL(file);
  };
  const update = (field: keyof RecordItem, value: string) =>
    setEditing((current) => ({ ...current, [field]: value }));

  const save = (publication: PublicationStatus, submitVerification = false) => {
    if (!editing.name.trim()) {
      setNotice("Full Name is required.");
      return;
    }
    if (publication === "Published" && editing.verification !== "Verified") {
      setNotice("Only a verified record with reliable sources can be published.");
      return;
    }
    if (
      editing.category === "Former Student" &&
      editing.graduationYear &&
      !/^\d{4}$/.test(editing.graduationYear)
    ) {
      setNotice("Enter a valid four-digit graduation year.");
      return;
    }
    const verification: VerificationStatus = submitVerification
      ? "Pending Verification"
      : editing.verification;
    const saved: RecordItem = {
      ...editing,
      id: isEditing ? editing.id : Date.now(),
      verification,
      publication,
      updated: "Nov 26, 2026",
    };
    setRecords((current) =>
      isEditing
        ? current.map((item) => (item.id === saved.id ? saved : item))
        : [saved, ...current],
    );
    setFormOpen(false);
    setNotice(
      isEditing
        ? "Alumni or staff record updated in this frontend session."
        : "New record added to this frontend session.",
    );
  };

  const deleteRecord = (record: RecordItem) => {
    if (!window.confirm(`Delete "${record.name}"? This action cannot be undone in this preview.`))
      return;
    setRecords((current) => current.filter((item) => item.id !== record.id));
    setNotice("Record deleted from this frontend session.");
  };

  const togglePublication = (record: RecordItem) => {
    if (record.verification !== "Verified" && record.publication !== "Published") {
      setNotice("Only a verified record can be published.");
      return;
    }
    setRecords((current) =>
      current.map((item) =>
        item.id === record.id
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
    setCategoryFilter("all");
    setYearFilter("all");
    setPeriodFilter("all");
    setDepartmentFilter("all");
    setVerificationFilter("all");
    setPublicationFilter("all");
    setSort("name");
    setActiveCategory("All");
    setPage(1);
  };

  const alumniCount = records.filter((record) => record.category === "Former Student").length;
  const teacherCount = records.filter((record) => record.category === "Former Teacher").length;
  const staffCount = records.filter((record) => record.category === "Former Staff").length;
  const pendingCount = records.filter(
    (record) => record.verification === "Pending Verification",
  ).length;

  return (
    <AdminDashboardPage
      pageTitle="Alumni & Staff Management"
      activePage="Alumni & Staff Management"
      showGlobalSearch={false}
    >
      <div className="alumni-admin-heading">
        <div>
          <span className="admin-page-kicker">ADMIN / ALUMNI & STAFF MANAGEMENT</span>
          <h2>Alumni & Staff Management</h2>
          <p>Preserve the stories and contributions of GSP former students, teachers and staff.</p>
        </div>
        <button
          type="button"
          className="admin-primary-button"
          onClick={() => openNew(activeCategory === "All" ? "Former Student" : activeCategory)}
        >
          <Plus size={16} /> Add New Record
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

      <section className="alumni-admin-stats" aria-label="Alumni and staff statistics">
        {[
          { label: "Total Alumni Records", value: alumniCount, icon: GraduationCap },
          { label: "Former Teachers", value: teacherCount, icon: UserRound },
          { label: "Former Staff", value: staffCount, icon: BriefcaseBusiness },
          { label: "Pending Verification", value: pendingCount, icon: ShieldCheck },
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

      <section className="admin-panel alumni-directory">
        <div className="alumni-category-tabs" role="tablist" aria-label="Record categories">
          {(["All", "Former Student", "Former Teacher", "Former Staff"] as const).map(
            (category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => {
                  setActiveCategory(category);
                  setPage(1);
                }}
              >
                {category === "All"
                  ? "All Records"
                  : category === "Former Student"
                    ? "Former Students"
                    : category}
              </button>
            ),
          )}
        </div>

        <div className="alumni-directory-toolbar">
          <label className="alumni-search">
            <Search size={16} />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by full name..."
              aria-label="Search by full name"
            />
          </label>
          <div className="alumni-filters">
            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value as Category | "all")}
              aria-label="Filter record category"
            >
              <option value="all">All categories</option>
              <option>Former Student</option>
              <option>Former Teacher</option>
              <option>Former Staff</option>
            </select>
            <select
              value={yearFilter}
              onChange={(event) => setYearFilter(event.target.value)}
              aria-label="Filter graduation year"
            >
              <option value="all">All graduation years</option>
              {graduationYears.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
            <select
              value={periodFilter}
              onChange={(event) => setPeriodFilter(event.target.value)}
              aria-label="Filter service period"
            >
              <option value="all">All service periods</option>
              <option value="provided">Period provided</option>
              <option value="unverified">Period unverified</option>
            </select>
            <select
              value={departmentFilter}
              onChange={(event) => setDepartmentFilter(event.target.value)}
              aria-label="Filter department"
            >
              <option value="all">All departments</option>
              {departments.map((department) => (
                <option key={department}>{department}</option>
              ))}
            </select>
            <select
              value={verificationFilter}
              onChange={(event) => setVerificationFilter(event.target.value)}
              aria-label="Filter verification"
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
              aria-label="Filter publication"
            >
              <option value="all">All publication</option>
              <option>Draft</option>
              <option>Unpublished</option>
              <option>Published</option>
            </select>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort records"
            >
              <option value="name">Sort alphabetically</option>
              <option value="year">Sort by year</option>
            </select>
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>

        <div className="admin-table-scroll">
          <table className="admin-records-table alumni-directory-table">
            <thead>
              <tr>
                <th>Portrait</th>
                <th>Full Name</th>
                <th>Record Category</th>
                <th>Year / Service Period</th>
                <th>Class / Department</th>
                <th>Biography</th>
                <th>Verification</th>
                <th>Publication</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((record) => (
                <tr key={record.id}>
                  <td>
                    <div className="alumni-table-portrait">
                      {record.portrait ? (
                        <img src={record.portrait} alt="" />
                      ) : (
                        <UserRound size={20} />
                      )}
                    </div>
                  </td>
                  <td>
                    <strong>{record.name}</strong>
                  </td>
                  <td>{record.category}</td>
                  <td>{recordPeriod(record)}</td>
                  <td>
                    {record.category === "Former Student"
                      ? record.classProgram || "Class unverified"
                      : record.department || "Department unverified"}
                  </td>
                  <td>
                    <span
                      className={`admin-status ${record.fullBiography ? "is-published" : "is-draft"}`}
                    >
                      {record.fullBiography ? "Complete" : "Incomplete"}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-status ${statusClass(record.verification)}`}>
                      {record.verification}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-status ${statusClass(record.publication)}`}>
                      {record.publication}
                    </span>
                  </td>
                  <td>{record.updated}</td>
                  <td>
                    <div className="alumni-row-actions">
                      <button
                        type="button"
                        title="View profile"
                        aria-label={`View ${record.name}`}
                        onClick={() => {
                          setPreview(record);
                          setPreviewOpen(true);
                        }}
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        type="button"
                        title="Edit"
                        aria-label={`Edit ${record.name}`}
                        onClick={() => openEdit(record)}
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        type="button"
                        title="Delete"
                        aria-label={`Delete ${record.name}`}
                        onClick={() => deleteRecord(record)}
                      >
                        <Trash2 size={15} />
                      </button>
                      <button
                        type="button"
                        className="publish-action"
                        onClick={() => togglePublication(record)}
                      >
                        {record.publication === "Published" ? "Unpublish" : "Publish"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {visible.length === 0 && (
            <div className="alumni-empty">
              <UsersRound size={24} />
              <strong>No alumni or staff records match these filters</strong>
            </div>
          )}
        </div>

        <div className="alumni-pagination">
          <span>
            Showing {filtered.length ? (safePage - 1) * pageSize + 1 : 0}–
            {Math.min(safePage * pageSize, filtered.length)} of {filtered.length} records
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
        <DialogContent className="alumni-form-dialog">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Record" : "Add New Record"}</DialogTitle>
            <DialogDescription>
              Use only verified, permission-cleared information. Personal contact details must not
              be stored or published.
            </DialogDescription>
          </DialogHeader>
          <div className="alumni-form-layout">
            <div className="alumni-form-fields">
              <section>
                <h3>Common Information</h3>
                <div className="alumni-form-grid">
                  <label>
                    <span>Full Name *</span>
                    <input
                      value={editing.name}
                      onChange={(event) => update("name", event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Record Category</span>
                    <select
                      value={editing.category}
                      onChange={(event) => update("category", event.target.value)}
                      disabled={isEditing}
                    >
                      <option>Former Student</option>
                      <option>Former Teacher</option>
                      <option>Former Staff</option>
                    </select>
                  </label>
                  <label className="wide">
                    <span>Portrait Upload</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handlePortrait}
                    />
                  </label>
                  <label className="wide">
                    <span>Short Biography</span>
                    <textarea
                      rows={3}
                      value={editing.shortBiography}
                      onChange={(event) => update("shortBiography", event.target.value)}
                    />
                  </label>
                  <label className="wide">
                    <span>Full Biography</span>
                    <textarea
                      rows={5}
                      value={editing.fullBiography}
                      onChange={(event) => update("fullBiography", event.target.value)}
                    />
                  </label>
                  <label className="wide">
                    <span>GSP Connection</span>
                    <textarea
                      rows={2}
                      value={editing.gspConnection}
                      onChange={(event) => update("gspConnection", event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Historical Contributions</span>
                    <textarea
                      rows={3}
                      value={editing.contributions}
                      onChange={(event) => update("contributions", event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Related Historical Events</span>
                    <textarea
                      rows={3}
                      value={editing.relatedEvents}
                      onChange={(event) => update("relatedEvents", event.target.value)}
                    />
                  </label>
                  <label className="wide">
                    <span>Historical Sources and References</span>
                    <textarea
                      rows={3}
                      value={editing.sources}
                      onChange={(event) => update("sources", event.target.value)}
                    />
                  </label>
                  <label className="wide">
                    <span>Verification Notes</span>
                    <textarea
                      rows={3}
                      value={editing.verificationNotes}
                      onChange={(event) => update("verificationNotes", event.target.value)}
                    />
                  </label>
                </div>
              </section>

              {editing.category === "Former Student" && (
                <section>
                  <h3>Former Student Information</h3>
                  <div className="alumni-form-grid">
                    <label>
                      <span>Graduation Year</span>
                      <input
                        type="number"
                        min="1900"
                        max="2100"
                        value={editing.graduationYear}
                        onChange={(event) => update("graduationYear", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Class or Program</span>
                      <input
                        value={editing.classProgram}
                        onChange={(event) => update("classProgram", event.target.value)}
                      />
                    </label>
                    <label className="wide">
                      <span>Educational Journey at GSP</span>
                      <textarea
                        rows={3}
                        value={editing.educationalJourney}
                        onChange={(event) => update("educationalJourney", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Achievements</span>
                      <textarea
                        rows={3}
                        value={editing.achievements}
                        onChange={(event) => update("achievements", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>School or Community Contributions</span>
                      <textarea
                        rows={3}
                        value={editing.schoolContributions}
                        onChange={(event) => update("schoolContributions", event.target.value)}
                      />
                    </label>
                  </div>
                </section>
              )}

              {editing.category === "Former Teacher" && (
                <section>
                  <h3>Former Teacher Information</h3>
                  <div className="alumni-form-grid">
                    <label>
                      <span>Teaching Subjects</span>
                      <input
                        value={editing.subjects}
                        onChange={(event) => update("subjects", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Department</span>
                      <input
                        value={editing.department}
                        onChange={(event) => update("department", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Service Start Year</span>
                      <input
                        type="number"
                        min="1900"
                        max="2100"
                        value={editing.serviceStart}
                        onChange={(event) => update("serviceStart", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Service End Year</span>
                      <input
                        type="number"
                        min="1900"
                        max="2100"
                        value={editing.serviceEnd}
                        onChange={(event) => update("serviceEnd", event.target.value)}
                      />
                    </label>
                    <label className="wide">
                      <span>Teaching Contributions</span>
                      <textarea
                        rows={3}
                        value={editing.teachingContributions}
                        onChange={(event) => update("teachingContributions", event.target.value)}
                      />
                    </label>
                  </div>
                </section>
              )}

              {editing.category === "Former Staff" && (
                <section>
                  <h3>Former Staff Information</h3>
                  <div className="alumni-form-grid">
                    <label>
                      <span>Former Position</span>
                      <input
                        value={editing.formerPosition}
                        onChange={(event) => update("formerPosition", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Department</span>
                      <input
                        value={editing.department}
                        onChange={(event) => update("department", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Service Start Year</span>
                      <input
                        type="number"
                        min="1900"
                        max="2100"
                        value={editing.serviceStart}
                        onChange={(event) => update("serviceStart", event.target.value)}
                      />
                    </label>
                    <label>
                      <span>Service End Year</span>
                      <input
                        type="number"
                        min="1900"
                        max="2100"
                        value={editing.serviceEnd}
                        onChange={(event) => update("serviceEnd", event.target.value)}
                      />
                    </label>
                    <label className="wide">
                      <span>Responsibilities and Contributions</span>
                      <textarea
                        rows={4}
                        value={editing.responsibilities}
                        onChange={(event) => update("responsibilities", event.target.value)}
                      />
                    </label>
                  </div>
                </section>
              )}

              <section>
                <h3>Verification and Publication</h3>
                <div className="alumni-form-grid">
                  <label>
                    <span>Verification Status</span>
                    <select
                      value={editing.verification}
                      onChange={(event) => update("verification", event.target.value)}
                    >
                      <option>Draft</option>
                      <option>Pending Verification</option>
                      <option>Verified</option>
                      <option>Needs Correction</option>
                    </select>
                  </label>
                  <label>
                    <span>Publication Status</span>
                    <select
                      value={editing.publication}
                      onChange={(event) => update("publication", event.target.value)}
                    >
                      <option>Draft</option>
                      <option>Unpublished</option>
                      <option>Published</option>
                    </select>
                  </label>
                </div>
              </section>
            </div>
          </div>
          <DialogFooter className="alumni-form-actions">
            <button
              type="button"
              className="alumni-button-outline"
              onClick={() => setFormOpen(false)}
            >
              Cancel
            </button>
            <button type="button" className="alumni-button-secondary" onClick={() => save("Draft")}>
              Save as Draft
            </button>
            <button
              type="button"
              className="alumni-button-secondary"
              onClick={() => save("Draft", true)}
            >
              Submit for Verification
            </button>
            <button
              type="button"
              className="alumni-button-primary"
              onClick={() => save("Published")}
            >
              Publish
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="alumni-preview-dialog">
          {preview && (
            <>
              <DialogHeader>
                <DialogTitle>Public Profile Preview</DialogTitle>
                <DialogDescription>
                  Preview of how this record could appear on the public Alumni History page.
                </DialogDescription>
              </DialogHeader>
              <article className="alumni-profile-preview">
                <div className="alumni-preview-portrait">
                  {preview.portrait ? (
                    <img src={preview.portrait} alt="" />
                  ) : (
                    <UserRound size={48} />
                  )}
                </div>
                <div className="alumni-preview-copy">
                  <span className="eyebrow">{preview.category.toUpperCase()}</span>
                  <h2>{preview.name}</h2>
                  <p className="alumni-preview-period">{recordPeriod(preview)}</p>
                  <p>{preview.shortBiography || "Biography awaiting verification."}</p>
                  {preview.fullBiography && <p>{preview.fullBiography}</p>}
                  {preview.gspConnection && (
                    <>
                      <h3>GSP Connection</h3>
                      <p>{preview.gspConnection}</p>
                    </>
                  )}
                  {(preview.achievements ||
                    preview.contributions ||
                    preview.teachingContributions ||
                    preview.responsibilities) && (
                    <>
                      <h3>Achievements or Contributions</h3>
                      <p>
                        {preview.achievements ||
                          preview.contributions ||
                          preview.teachingContributions ||
                          preview.responsibilities}
                      </p>
                    </>
                  )}
                  {(preview.relatedEvents || preview.sources) && (
                    <>
                      <h3>Historical Records and Sources</h3>
                      <p>{preview.relatedEvents}</p>
                      <p>{preview.sources || "Reliable sources pending."}</p>
                    </>
                  )}
                  <span className="alumni-preview-demo">
                    <Award size={14} /> Demonstration record — public release requires verification
                  </span>
                </div>
              </article>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AdminDashboardPage>
  );
}
