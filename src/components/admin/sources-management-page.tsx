import { useState, type FormEvent } from "react";
import { Plus, Search, ShieldCheck, SquarePen, Trash2, X } from "lucide-react";
import { AdminLayout } from "@/components/admin/dashboard-page";

type SourceRecord = {
  id: number;
  title: string;
  type: string;
  institution: string;
  creator: string;
  year: string;
  reference: string;
  related: string;
  status: "Pending Review" | "Verified" | "Needs Correction" | "Rejected";
  reviewed: string;
  notes: string;
};

const demoSources: SourceRecord[] = [
  {
    id: 1,
    title: "Demonstration — Source awaiting identification",
    type: "Official School Records",
    institution: "Institution not supplied",
    creator: "Creator not supplied",
    year: "Year pending",
    reference: "Reference pending",
    related: "Related record pending",
    status: "Pending Review",
    reviewed: "Not yet reviewed",
    notes: "",
  },
  {
    id: 2,
    title: "Demonstration — Verified source placeholder",
    type: "Institutional References",
    institution: "Institution not supplied",
    creator: "Creator not supplied",
    year: "Year pending",
    reference: "Document reference pending",
    related: "Demonstration record",
    status: "Verified",
    reviewed: "Demo date",
    notes: "Demonstration note; supporting evidence must be supplied.",
  },
];

export function SourcesManagementPage() {
  const [records, setRecords] = useState(demoSources);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [modal, setModal] = useState<"add" | "review" | null>(null);
  const [selected, setSelected] = useState<SourceRecord | null>(null);
  const [notice, setNotice] = useState("");

  const filtered = records.filter(
    (record) =>
      `${record.title} ${record.type} ${record.institution} ${record.creator}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (status === "All" || record.status === status),
  );

  function saveSource(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    if (!title) return;
    const record: SourceRecord = {
      id: selected?.id ?? Date.now(),
      title,
      type: String(form.get("type")),
      institution: String(form.get("institution") || "Institution not supplied"),
      creator: String(form.get("creator") || "Creator not supplied"),
      year: String(form.get("year") || "Year pending"),
      reference: String(form.get("reference") || "Reference pending"),
      related: String(form.get("related") || "Related record pending"),
      status: String(form.get("status")) as SourceRecord["status"],
      reviewed: selected?.reviewed ?? "Not yet reviewed",
      notes: String(form.get("notes") || ""),
    };
    setRecords((current) =>
      selected
        ? current.map((item) => (item.id === selected.id ? record : item))
        : [record, ...current],
    );
    setModal(null);
    setSelected(null);
    setNotice(
      selected
        ? "Source updated in local frontend state."
        : "Source added in local frontend state.",
    );
  }

  function reviewSource(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    const form = new FormData(event.currentTarget);
    setRecords((current) =>
      current.map((item) =>
        item.id === selected.id
          ? {
              ...item,
              status: String(form.get("status")) as SourceRecord["status"],
              notes: String(form.get("notes") || ""),
              reviewed: "Review saved locally",
            }
          : item,
      ),
    );
    setModal(null);
    setSelected(null);
    setNotice("Verification review saved in local frontend state.");
  }

  return (
    <AdminLayout pageTitle="Sources & Verification" activePage="Sources & Verification">
      <div className="admin-module-heading">
        <div>
          <h2>Sources & Verification</h2>
          <p>Maintain accuracy, credibility and transparency across the GSP Historical Archive.</p>
        </div>
        <button
          className="admin-primary-button"
          onClick={() => {
            setSelected(null);
            setModal("add");
          }}
        >
          <Plus size={16} /> Add New Source
        </button>
      </div>
      {notice && (
        <div className="admin-action-notice" role="status">
          <span>{notice}</span>
          <button aria-label="Dismiss" onClick={() => setNotice("")}>
            <X size={14} />
          </button>
        </div>
      )}
      <section className="admin-stats-grid admin-module-stats">
        {[
          ["Total Sources", records.length],
          ["Verified Sources", records.filter((item) => item.status === "Verified").length],
          ["Pending Review", records.filter((item) => item.status === "Pending Review").length],
          [
            "Records Requiring Correction",
            records.filter((item) => item.status === "Needs Correction").length,
          ],
        ].map(([label, value]) => (
          <article className="admin-stat-card" key={String(label)}>
            <span className="admin-stat-icon">
              <ShieldCheck size={17} />
            </span>
            <span className="admin-stat-label">{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>
      <section className="admin-panel admin-management-panel">
        <div className="admin-records-heading">
          <label className="admin-inline-search">
            <Search size={15} />
            <input
              aria-label="Search sources"
              placeholder="Search sources..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <select
            aria-label="Filter verification status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>All</option>
            <option>Pending Review</option>
            <option>Verified</option>
            <option>Needs Correction</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="admin-table-scroll">
          <table className="admin-records-table admin-management-table">
            <thead>
              <tr>
                <th>Source Title</th>
                <th>Source Type</th>
                <th>Institution / Publisher</th>
                <th>Creator</th>
                <th>Year</th>
                <th>Reference</th>
                <th>Related Record</th>
                <th>Status</th>
                <th>Last Reviewed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((record) => (
                <tr key={record.id}>
                  <td>
                    <strong>{record.title}</strong>
                  </td>
                  <td>{record.type}</td>
                  <td>{record.institution}</td>
                  <td>{record.creator}</td>
                  <td>{record.year}</td>
                  <td>{record.reference}</td>
                  <td>{record.related}</td>
                  <td>
                    <span
                      className={`admin-status ${record.status === "Verified" ? "is-published" : record.status === "Pending Review" ? "is-pending" : "is-draft"}`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td>{record.reviewed}</td>
                  <td>
                    <div className="admin-row-actions">
                      <button
                        title="Review"
                        onClick={() => {
                          setSelected(record);
                          setModal("review");
                        }}
                      >
                        <ShieldCheck size={15} />
                      </button>
                      <button
                        title="Edit"
                        onClick={() => {
                          setSelected(record);
                          setModal("add");
                        }}
                      >
                        <SquarePen size={15} />
                      </button>
                      <button
                        title="Delete"
                        onClick={() =>
                          setRecords((current) => current.filter((item) => item.id !== record.id))
                        }
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {modal && (
        <div className="admin-modal-backdrop">
          <section
            className="admin-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Source management"
          >
            <div className="admin-modal-heading">
              <div>
                <span className="eyebrow">SOURCE MANAGEMENT</span>
                <h3>
                  {modal === "review"
                    ? "Verification Detail"
                    : selected
                      ? "Edit Source"
                      : "Add New Source"}
                </h3>
              </div>
              <button aria-label="Close" onClick={() => setModal(null)}>
                <X size={18} />
              </button>
            </div>
            {modal === "review" && selected ? (
              <form className="admin-form-grid" onSubmit={reviewSource}>
                <div className="admin-verification-detail admin-full">
                  <strong>{selected.title}</strong>
                  <p>
                    Associated sources and evidence must be appropriate before marking a record
                    verified.
                  </p>
                </div>
                <label>
                  Review Status
                  <select name="status" defaultValue={selected.status}>
                    <option>Pending Review</option>
                    <option>Verified</option>
                    <option>Needs Correction</option>
                    <option>Rejected</option>
                  </select>
                </label>
                <label>
                  Reviewer
                  <input value="Front-end administrator (demo)" readOnly />
                </label>
                <label className="admin-full">
                  Verification Notes
                  <textarea name="notes" defaultValue={selected.notes} />
                </label>
                <label className="admin-full">
                  Link To
                  <select name="relatedType">
                    <option>Historical story</option>
                    <option>Timeline event</option>
                    <option>Leader</option>
                    <option>Important event</option>
                    <option>Alumni / staff</option>
                    <option>Gallery media</option>
                    <option>Document</option>
                  </select>
                </label>
                <div className="admin-modal-footer admin-full">
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={() => setModal(null)}
                  >
                    Close
                  </button>
                  <button type="submit" className="admin-primary-button">
                    Save Review
                  </button>
                </div>
              </form>
            ) : (
              <form className="admin-form-grid" onSubmit={saveSource}>
                <label className="admin-full">
                  Source Title
                  <input name="title" required defaultValue={selected?.title} />
                </label>
                <label>
                  Source Type
                  <select name="type" defaultValue={selected?.type ?? "Official School Records"}>
                    {[
                      "Official School Records",
                      "Historical Documents",
                      "Books and Publications",
                      "Newspaper Archives",
                      "Photographs and Media",
                      "Oral Histories and Testimonies",
                      "Institutional References",
                      "Research Publications",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Institution / Publisher
                  <input name="institution" defaultValue={selected?.institution} />
                </label>
                <label>
                  Author / Creator
                  <input name="creator" defaultValue={selected?.creator} />
                </label>
                <label>
                  Publication Year
                  <input name="year" defaultValue={selected?.year} />
                </label>
                <label>
                  Source URL
                  <input name="url" type="url" />
                </label>
                <label>
                  Document Reference
                  <input name="reference" defaultValue={selected?.reference} />
                </label>
                <label>
                  Related Historical Record
                  <input name="related" defaultValue={selected?.related} />
                </label>
                <label>
                  Verification Status
                  <select name="status" defaultValue={selected?.status ?? "Pending Review"}>
                    <option>Pending Review</option>
                    <option>Verified</option>
                    <option>Needs Correction</option>
                    <option>Rejected</option>
                  </select>
                </label>
                <label className="admin-full">
                  Description
                  <textarea name="description" />
                </label>
                <label className="admin-full">
                  Verification Notes
                  <textarea name="notes" defaultValue={selected?.notes} />
                </label>
                <div className="admin-modal-footer admin-full">
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={() => setModal(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="admin-primary-button">
                    Save Source
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </AdminLayout>
  );
}
