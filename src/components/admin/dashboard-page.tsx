import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Image,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontal,
  Search,
  Settings,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { AdminBrand } from "@/components/admin/brand";

type RecordStatus = "Draft" | "Published" | "Pending review";

type ArchiveRecord = {
  title: string;
  type: string;
  date: string;
  status: RecordStatus;
};

const navigation: { label: string; icon: LucideIcon }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "History Management", icon: BookOpen },
  { label: "Timeline Management", icon: CalendarDays },
  { label: "Leadership Management", icon: UsersRound },
  { label: "Events Management", icon: CalendarDays },
  { label: "Alumni & Staff Management", icon: UserRound },
  { label: "Gallery & Media Management", icon: Image },
  { label: "Documents Management", icon: FileText },
  { label: "Sources & Verification", icon: ShieldCheck },
  { label: "Settings", icon: Settings },
];

const statistics: {
  label: string;
  value: string;
  icon: LucideIcon;
  change: string;
  positive: boolean;
}[] = [
  { label: "Historical Stories", value: "38", icon: BookOpen, change: "6 drafts", positive: true },
  {
    label: "Timeline Events",
    value: "24",
    icon: CalendarDays,
    change: "4 this month",
    positive: true,
  },
  { label: "Leaders", value: "12", icon: UserRound, change: "2 pending", positive: true },
  { label: "Important Events", value: "16", icon: Archive, change: "3 drafts", positive: true },
  {
    label: "Alumni & Staff Records",
    value: "86",
    icon: UsersRound,
    change: "8 pending",
    positive: true,
  },
  { label: "Gallery Media", value: "142", icon: Image, change: "12 new", positive: true },
  { label: "Documents", value: "53", icon: FileText, change: "5 drafts", positive: true },
  {
    label: "Pending Verification",
    value: "25",
    icon: ShieldCheck,
    change: "Needs attention",
    positive: false,
  },
];

const demoRecords: ArchiveRecord[] = [
  {
    title: "Demonstration: School archive collection",
    type: "Historical story",
    date: "May 16, 2025",
    status: "Draft",
  },
  {
    title: "Demonstration: Community gathering record",
    type: "Important event",
    date: "May 14, 2025",
    status: "Pending review",
  },
  {
    title: "Demonstration: Campus photograph set",
    type: "Gallery media",
    date: "May 12, 2025",
    status: "Published",
  },
  {
    title: "Demonstration: Staff profile record",
    type: "Alumni & staff",
    date: "May 09, 2025",
    status: "Pending review",
  },
  {
    title: "Demonstration: Archive source note",
    type: "Document",
    date: "May 06, 2025",
    status: "Published",
  },
];

const activityItems = [
  {
    title: "Demonstration story record",
    action: "Updated draft",
    date: "Today, 10:42 AM",
    status: "Draft" as RecordStatus,
  },
  {
    title: "Demonstration photo collection",
    action: "Submitted for review",
    date: "Yesterday, 3:18 PM",
    status: "Pending review" as RecordStatus,
  },
  {
    title: "Demonstration archive document",
    action: "Published record",
    date: "May 14, 2025",
    status: "Published" as RecordStatus,
  },
  {
    title: "Demonstration timeline entry",
    action: "Added as draft",
    date: "May 12, 2025",
    status: "Draft" as RecordStatus,
  },
];

const contentCategories = [
  { label: "Historical stories", draft: 6, published: 24, pending: 8, total: 38 },
  { label: "Timeline events", draft: 4, published: 16, pending: 4, total: 24 },
  { label: "Leaders & staff", draft: 3, published: 13, pending: 8, total: 24 },
  { label: "Events & documents", draft: 7, published: 20, pending: 5, total: 32 },
];

const quickActions: { label: string; icon: LucideIcon; target: string }[] = [
  { label: "Add Historical Story", icon: BookOpen, target: "History Management" },
  { label: "Add Timeline Event", icon: CalendarDays, target: "Timeline Management" },
  { label: "Add Leader", icon: UserRound, target: "Leadership Management" },
  { label: "Add Important Event", icon: Archive, target: "Events Management" },
  { label: "Upload Media", icon: Image, target: "Gallery & Media Management" },
  { label: "Add Document", icon: FileText, target: "Documents Management" },
];

function StatusBadge({ status }: { status: RecordStatus }) {
  const className =
    status === "Published" ? "is-published" : status === "Draft" ? "is-draft" : "is-pending";
  return <span className={`admin-status ${className}`}>{status}</span>;
}

export function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [notice, setNotice] = useState("");
  const [demoNoticeVisible, setDemoNoticeVisible] = useState(true);

  const filteredRecords = demoRecords.filter((record) => {
    const matchesSearch = `${record.title} ${record.type}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const openPlaceholder = (destination: string) => {
    setNotice(`${destination} is not available yet. This dashboard preview is frontend-only.`);
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
          {navigation.map(({ label, icon: Icon }) =>
            label === "Dashboard" ? (
              <Link
                key={label}
                to="/admin/dashboard"
                className="admin-nav-link is-active"
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={17} /> <span>{label}</span>
              </Link>
            ) : (
              <button
                type="button"
                key={label}
                className="admin-nav-link"
                onClick={() => openPlaceholder(label)}
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
              Need help?<small>Admin tools are in preview.</small>
            </span>
          </div>
          <Link to="/admin/login" className="admin-nav-link admin-logout-link">
            <LogOut size={17} /> <span>Logout</span>
          </Link>
          <div className="admin-sidebar-version">GSP ARCHIVE · ADMIN PREVIEW</div>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-heading">
            <button
              type="button"
              className="admin-mobile-menu"
              aria-label="Open admin navigation"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div>
              <span className="admin-breadcrumb">
                Administration <span>/</span> Overview
              </span>
              <h1>Dashboard Overview</h1>
            </div>
          </div>
          <div className="admin-topbar-actions">
            <label className="admin-global-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                aria-label="Search admin records"
                placeholder="Search records..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={14} />
                </button>
              )}
            </label>
            <div className="admin-profile-wrap">
              <button
                type="button"
                className="admin-profile-button"
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen(!profileOpen)}
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
                    onClick={() => openPlaceholder("Profile settings")}
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

        <div className="admin-dashboard-content">
          {demoNoticeVisible && (
            <div className="admin-demo-banner">
              <ShieldCheck size={17} />
              <span>
                <strong>Demonstration data</strong> — all counts and records below are sample
                content, not live archive statistics.
              </span>
              <button
                type="button"
                aria-label="Dismiss demonstration data notice"
                onClick={() => setDemoNoticeVisible(false)}
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

          <section className="admin-stats-grid" aria-label="Demonstration overview statistics">
            {statistics.map(({ label, value, icon: Icon, change, positive }) => (
              <article className="admin-stat-card" key={label}>
                <div className="admin-stat-top">
                  <span className="admin-stat-icon">
                    <Icon size={17} />
                  </span>
                  <MoreHorizontal size={17} className="admin-stat-more" />
                </div>
                <span className="admin-stat-label">{label}</span>
                <div className="admin-stat-bottom">
                  <strong>{value}</strong>
                  <span className={positive ? "admin-stat-change" : "admin-stat-change is-alert"}>
                    {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />} {change}
                  </span>
                </div>
              </article>
            ))}
          </section>

          <div className="admin-overview-grid">
            <section className="admin-panel admin-activity-panel">
              <div className="admin-panel-heading">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest actions across sample records</p>
                </div>
                <button
                  type="button"
                  className="admin-text-button"
                  onClick={() => openPlaceholder("Activity history")}
                >
                  View all
                </button>
              </div>
              <div className="admin-activity-list">
                {activityItems.map((item) => (
                  <article className="admin-activity-item" key={item.title}>
                    <span className="admin-activity-mark">
                      <Clock3 size={15} />
                    </span>
                    <div className="admin-activity-copy">
                      <strong>{item.title}</strong>
                      <span>{item.action}</span>
                    </div>
                    <time>{item.date}</time>
                    <StatusBadge status={item.status} />
                  </article>
                ))}
              </div>
            </section>

            <section className="admin-panel admin-verification-panel">
              <div className="admin-panel-heading">
                <div>
                  <h2>Verification Summary</h2>
                  <p>Sample records by review state</p>
                </div>
                <ShieldCheck size={18} className="admin-panel-heading-icon" />
              </div>
              <div className="admin-verification-total">
                <strong>100</strong>
                <span>demonstration records</span>
              </div>
              <div className="admin-verification-row">
                <span>
                  <i className="verification-dot pending" /> Pending review
                </span>
                <strong>25</strong>
              </div>
              <div className="admin-verification-row">
                <span>
                  <i className="verification-dot verified" /> Verified
                </span>
                <strong>73</strong>
              </div>
              <div className="admin-verification-row">
                <span>
                  <i className="verification-dot correction" /> Needs correction
                </span>
                <strong>2</strong>
              </div>
              <button
                type="button"
                className="admin-review-button"
                onClick={() => openPlaceholder("Sources & Verification")}
              >
                Review records <ArrowUpRight size={14} />
              </button>
            </section>
          </div>

          <div className="admin-overview-grid admin-lower-grid">
            <section className="admin-panel admin-content-panel">
              <div className="admin-panel-heading">
                <div>
                  <h2>Content Overview</h2>
                  <p>Sample status breakdown by category</p>
                </div>
                <span className="admin-demo-mini-tag">DEMO</span>
              </div>
              <div className="admin-content-legend">
                <span>
                  <i className="content-dot published" /> Published
                </span>
                <span>
                  <i className="content-dot draft" /> Draft
                </span>
                <span>
                  <i className="content-dot pending" /> Pending review
                </span>
              </div>
              <div className="admin-category-list">
                {contentCategories.map((category) => (
                  <div className="admin-category-row" key={category.label}>
                    <div className="admin-category-info">
                      <strong>{category.label}</strong>
                      <span>{category.total} sample records</span>
                    </div>
                    <div
                      className="admin-category-bars"
                      aria-label={`${category.published} published, ${category.draft} drafts, ${category.pending} pending review`}
                    >
                      <span
                        className="published"
                        style={{ width: `${(category.published / category.total) * 100}%` }}
                      />
                      <span
                        className="draft"
                        style={{ width: `${(category.draft / category.total) * 100}%` }}
                      />
                      <span
                        className="pending"
                        style={{ width: `${(category.pending / category.total) * 100}%` }}
                      />
                    </div>
                    <span className="admin-category-count">{category.total}</span>
                  </div>
                ))}
              </div>
              <div className="admin-content-totals">
                <span>
                  <strong>20</strong> Draft records
                </span>
                <span>
                  <strong>73</strong> Published records
                </span>
                <span>
                  <strong>25</strong> Pending verification
                </span>
              </div>
            </section>

            <section className="admin-panel admin-quick-actions-panel">
              <div className="admin-panel-heading">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Management pages are future placeholders</p>
                </div>
              </div>
              <div className="admin-quick-actions">
                {quickActions.map(({ label, icon: Icon, target }) => (
                  <button type="button" key={label} onClick={() => openPlaceholder(target)}>
                    <span>
                      <Icon size={17} />
                    </span>
                    <strong>{label}</strong>
                    <ArrowUpRight size={14} className="admin-quick-arrow" />
                  </button>
                ))}
              </div>
            </section>
          </div>

          <section className="admin-panel admin-records-panel">
            <div className="admin-panel-heading admin-records-heading">
              <div>
                <h2>Recently Added Records</h2>
                <p>Example records for interface preview only</p>
              </div>
              <label className="admin-status-filter">
                <span className="sr-only">Filter records by status</span>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                >
                  <option value="all">All statuses</option>
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Pending review">Pending review</option>
                </select>
                <ChevronDown size={14} />
              </label>
            </div>
            <div className="admin-table-scroll">
              <table className="admin-records-table">
                <thead>
                  <tr>
                    <th>Record title</th>
                    <th>Content type</th>
                    <th>Date created</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.title}>
                      <td>
                        <strong>{record.title}</strong>
                      </td>
                      <td>{record.type}</td>
                      <td>{record.date}</td>
                      <td>
                        <StatusBadge status={record.status} />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="admin-record-action"
                          onClick={() => openPlaceholder(`View/edit: ${record.title}`)}
                        >
                          View / edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredRecords.length === 0 && (
                <div className="admin-records-empty">
                  <Search size={19} />
                  <strong>No matching demonstration records</strong>
                  <span>Try another search or status filter.</span>
                </div>
              )}
            </div>
            <div className="admin-records-footer">
              Showing {filteredRecords.length} of {demoRecords.length} sample records
              <Link to="/" className="admin-public-link">
                View public archive <ArrowUpRight size={13} />
              </Link>
            </div>
          </section>

          <footer className="admin-dashboard-footer">
            <span>GSP Historical Archive · Administration preview</span>
            <span>
              <Check size={13} /> Frontend demonstration only
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
