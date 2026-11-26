import { useState, type FormEvent } from "react";
import { Eye, FileText, Filter, Pencil, Plus, Search, Trash2, Upload, X } from "lucide-react";
import { AdminLayout } from "@/components/admin/dashboard-page";

type DocumentRecord = {
  id: number;
  title: string;
  category: string;
  type: string;
  creator: string;
  year: string;
  access: "Public" | "Restricted" | "Internal";
  verification: "Pending" | "Verified" | "Needs Correction";
  published: boolean;
};

const demoDocuments: DocumentRecord[] = [
  {
    id: 1,
    title: "Demonstration — Historical register scan",
    category: "Historical Records",
    type: "PDF",
    creator: "Creator not supplied",
    year: "Year pending",
    access: "Public",
    verification: "Verified",
    published: true,
  },
  {
    id: 2,
    title: "Demonstration — School report record",
    category: "Old School Reports",
    type: "Image",
    creator: "Source pending",
    year: "Year pending",
    access: "Restricted",
    verification: "Pending",
    published: false,
  },
  {
    id: 3,
    title: "Demonstration — Official certificate scan",
    category: "Certificates & Official Records",
    type: "Image",
    creator: "Source pending",
    year: "Year pending",
    access: "Internal",
    verification: "Needs Correction",
    published: false,
  },
];

export function DocumentsManagementPage() {
  const [records, setRecords] = useState(demoDocuments);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [access, setAccess] = useState("All");
  const [modal, setModal] = useState<"add" | "edit" | "preview" | null>(null);
  const [selected, setSelected] = useState<DocumentRecord | null>(null);
  const [notice, setNotice] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filtered = records.filter(
    (record) =>
      `${record.title} ${record.category} ${record.creator}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "All" || record.category === category) &&
      (access === "All" || record.access === access),
  );

  const openEdit = (record: DocumentRecord) => {
    setSelected(record);
    setModal("edit");
  };
  const openPreview = (record: DocumentRecord) => {
    setSelected(record);
    setModal("preview");
  };

  function saveRecord(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    if (!title) return;
    const next: DocumentRecord = {
      id: selected?.id ?? Date.now(),
      title,
      category: String(form.get("category")),
      type: String(form.get("type")),
      creator: String(form.get("creator") || "Creator not supplied"),
      year: String(form.get("year") || "Year pending"),
      access: String(form.get("access")) as DocumentRecord["access"],
      verification: String(form.get("verification")) as DocumentRecord["verification"],
      published: selected?.published ?? false,
    };
    setRecords((current) =>
      selected
        ? current.map((item) => (item.id === selected.id ? next : item))
        : [next, ...current],
    );
    setModal(null);
    setSelected(null);
    setSelectedFile(null);
    setNotice(
      selected
        ? "Document updated in local frontend state."
        : "Document added to local frontend state.",
    );
  }

  return (
    <AdminLayout pageTitle="Documents Management" activePage="Documents Management">
      <div className="admin-module-heading">
        <div>
          <h2>Documents Management</h2>
          <p>Manage and preserve GSP historical documents.</p>
        </div>
        <button
          className="admin-primary-button"
          onClick={() => {
            setSelected(null);
            setModal("add");
          }}
        >
          <Plus size={16} /> Add New Document
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
        <article className="admin-stat-card">
          <span className="admin-stat-icon">
            <FileText size={17} />
          </span>
          <span className="admin-stat-label">Total Documents</span>
          <strong>{records.length}</strong>
        </article>
        <article className="admin-stat-card">
          <span className="admin-stat-icon">
            <FileText size={17} />
          </span>
          <span className="admin-stat-label">Public Documents</span>
          <strong>{records.filter((item) => item.access === "Public").length}</strong>
        </article>
        <article className="admin-stat-card">
          <span className="admin-stat-icon">
            <FileText size={17} />
          </span>
          <span className="admin-stat-label">Restricted Documents</span>
          <strong>{records.filter((item) => item.access !== "Public").length}</strong>
        </article>
        <article className="admin-stat-card">
          <span className="admin-stat-icon">
            <Filter size={17} />
          </span>
          <span className="admin-stat-label">Pending Verification</span>
          <strong>{records.filter((item) => item.verification !== "Verified").length}</strong>
        </article>
      </section>
      <section className="admin-panel admin-management-panel">
        <div className="admin-records-heading">
          <label className="admin-inline-search">
            <Search size={15} />
            <input
              aria-label="Search documents"
              placeholder="Search documents..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <div className="admin-filter-row">
            <select
              aria-label="Filter document category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>All</option>
              {[
                "Historical Records",
                "Old School Reports",
                "Certificates & Official Records",
                "Historical Letters",
                "Meeting Records",
                "Publications & Newsletters",
                "Research & Testimonies",
              ].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              aria-label="Filter access level"
              value={access}
              onChange={(event) => setAccess(event.target.value)}
            >
              <option>All</option>
              <option>Public</option>
              <option>Restricted</option>
              <option>Internal</option>
            </select>
          </div>
        </div>
        <div className="admin-table-scroll">
          <table className="admin-records-table admin-management-table">
            <thead>
              <tr>
                <th>Document Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Creator</th>
                <th>Year</th>
                <th>Access</th>
                <th>Verification</th>
                <th>Publication</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((record) => (
                <tr key={record.id}>
                  <td>
                    <strong>{record.title}</strong>
                  </td>
                  <td>{record.category}</td>
                  <td>{record.type}</td>
                  <td>{record.creator}</td>
                  <td>{record.year}</td>
                  <td>
                    <span
                      className={`admin-status ${record.access === "Public" ? "is-published" : "is-pending"}`}
                    >
                      {record.access}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`admin-status ${record.verification === "Verified" ? "is-published" : record.verification === "Pending" ? "is-pending" : "is-draft"}`}
                    >
                      {record.verification}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`admin-status ${record.published ? "is-published" : "is-draft"}`}
                    >
                      {record.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>
                    <div className="admin-row-actions">
                      <button title="Preview" onClick={() => openPreview(record)}>
                        <Eye size={15} />
                      </button>
                      <button title="Edit" onClick={() => openEdit(record)}>
                        <Pencil size={15} />
                      </button>
                      <button
                        title={record.published ? "Unpublish" : "Publish"}
                        onClick={() =>
                          setRecords((current) =>
                            current.map((item) =>
                              item.id === record.id
                                ? { ...item, published: !item.published }
                                : item,
                            ),
                          )
                        }
                      >
                        <Upload size={15} />
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
        <div className="admin-modal-backdrop" role="presentation">
          <section
            className="admin-modal"
            role="dialog"
            aria-modal="true"
            aria-label={modal === "preview" ? "Document preview" : "Document form"}
          >
            <div className="admin-modal-heading">
              <div>
                <span className="eyebrow">DOCUMENT RECORD</span>
                <h3>
                  {modal === "preview"
                    ? selected?.title
                    : modal === "edit"
                      ? "Edit Document"
                      : "Add New Document"}
                </h3>
              </div>
              <button onClick={() => setModal(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>
            {modal === "preview" && selected ? (
              <div className="admin-preview-panel">
                <p>{selected.title}</p>
                <dl>
                  <div>
                    <dt>Category</dt>
                    <dd>{selected.category}</dd>
                  </div>
                  <div>
                    <dt>Historical Year</dt>
                    <dd>{selected.year}</dd>
                  </div>
                  <div>
                    <dt>Source</dt>
                    <dd>Source not supplied</dd>
                  </div>
                  <div>
                    <dt>Access</dt>
                    <dd>{selected.access}</dd>
                  </div>
                  <div>
                    <dt>Verification</dt>
                    <dd>{selected.verification}</dd>
                  </div>
                </dl>
                <div className="admin-file-preview">
                  {selectedFile ? (
                    <span>{selectedFile.name}</span>
                  ) : (
                    <span>No valid file selected</span>
                  )}
                </div>
              </div>
            ) : (
              <form className="admin-form-grid" onSubmit={saveRecord}>
                <label className="admin-full">
                  Document Title
                  <input name="title" required defaultValue={selected?.title} />
                </label>
                <label className="admin-full">
                  Short Description
                  <textarea
                    name="description"
                    placeholder="Describe this record without making historical claims."
                  />
                </label>
                <label>
                  Category
                  <select name="category" defaultValue={selected?.category ?? "Historical Records"}>
                    {[
                      "Historical Records",
                      "Old School Reports",
                      "Certificates & Official Records",
                      "Historical Letters",
                      "Meeting Records",
                      "Publications & Newsletters",
                      "Research & Testimonies",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Document Type
                  <select name="type" defaultValue={selected?.type ?? "PDF"}>
                    <option>PDF</option>
                    <option>Image</option>
                    <option>Scanned Record</option>
                  </select>
                </label>
                <label>
                  Historical Year
                  <input name="year" defaultValue={selected?.year} placeholder="Year pending" />
                </label>
                <label>
                  Author / Creator
                  <input name="creator" defaultValue={selected?.creator} />
                </label>
                <label>
                  Original Source
                  <input name="source" placeholder="Original source or institution" />
                </label>
                <label>
                  Copyright Information
                  <input name="copyright" />
                </label>
                <label>
                  Access Level
                  <select name="access" defaultValue={selected?.access ?? "Public"}>
                    <option>Public</option>
                    <option>Restricted</option>
                    <option>Internal</option>
                  </select>
                </label>
                <label>
                  Verification Status
                  <select name="verification" defaultValue={selected?.verification ?? "Pending"}>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Needs Correction</option>
                  </select>
                </label>
                <label className="admin-full">
                  Full Description
                  <textarea name="fullDescription" />
                </label>
                <label className="admin-full">
                  Verification Notes
                  <textarea name="notes" />
                </label>
                <label className="admin-full">
                  File Upload
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
                  />
                </label>
                <label className="admin-full">
                  Cover Image
                  <input type="file" accept="image/*" />
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
                    Save Document
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
