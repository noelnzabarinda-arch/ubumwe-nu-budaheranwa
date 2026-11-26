import { useEffect, useState, type FormEvent } from "react";
import { Check, Save, Upload } from "lucide-react";
import { AdminLayout } from "@/components/admin/dashboard-page";

type SettingsState = {
  archiveName: string;
  institutionName: string;
  description: string;
  contactEmail: string;
  language: "English" | "Kinyarwanda" | "French";
  timeZone: string;
  theme: "Light" | "System";
  density: "Comfortable" | "Compact";
  publicVisibility: "Visible" | "Hidden";
  workflow: "Draft then review" | "Direct publish";
  verification: "Required" | "Optional";
  mediaDisplay: "Standard" | "Compact";
  displayName: string;
  profileEmail: string;
};

const defaults: SettingsState = {
  archiveName: "GSP Historical Archive",
  institutionName: "Groupe Scolaire des Parents, Huye",
  description: "A digital historical archive preserving GSP history.",
  contactEmail: "",
  language: "English",
  timeZone: "Africa/Kigali",
  theme: "Light",
  density: "Comfortable",
  publicVisibility: "Visible",
  workflow: "Draft then review",
  verification: "Required",
  mediaDisplay: "Standard",
  displayName: "Archive Admin",
  profileEmail: "",
};

export function SettingsPage() {
  const [settings, setSettings] = useState<SettingsState>(() => {
    if (typeof window === "undefined") return defaults;
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem("gsp-admin-settings") || "{}") };
    } catch {
      return defaults;
    }
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.adminDensity = settings.density.toLowerCase();
  }, [settings.density]);

  function update<K extends keyof SettingsState>(key: K, value: SettingsState[K]) {
    setSettings((current) => ({ ...current, [key]: value }));
  }

  function save(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem("gsp-admin-settings", JSON.stringify(settings));
    setSaved(true);
  }

  return (
    <AdminLayout pageTitle="Settings" activePage="Settings">
      <form onSubmit={save}>
        <div className="admin-module-heading">
          <div>
            <h2>Administration Settings</h2>
            <p>Configure frontend preferences for this workspace.</p>
          </div>
          <button type="submit" className="admin-primary-button">
            <Save size={16} /> Save Preferences
          </button>
        </div>
        {saved && (
          <div className="admin-action-notice" role="status">
            <Check size={16} />
            <span>Preferences saved locally in this browser.</span>
          </div>
        )}
        <div className="admin-settings-grid">
          <section className="admin-panel admin-settings-section">
            <h3>General Settings</h3>
            <div className="admin-form-grid">
              <label className="admin-full">
                Archive Name
                <input
                  value={settings.archiveName}
                  onChange={(event) => update("archiveName", event.target.value)}
                />
              </label>
              <label className="admin-full">
                Institution Name
                <input
                  value={settings.institutionName}
                  onChange={(event) => update("institutionName", event.target.value)}
                />
              </label>
              <label className="admin-full">
                Archive Description
                <textarea
                  value={settings.description}
                  onChange={(event) => update("description", event.target.value)}
                />
              </label>
              <label>
                Contact Email
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(event) => update("contactEmail", event.target.value)}
                />
              </label>
              <label>
                Default Language
                <select
                  value={settings.language}
                  onChange={(event) =>
                    update("language", event.target.value as SettingsState["language"])
                  }
                >
                  <option>English</option>
                  <option>Kinyarwanda</option>
                  <option>French</option>
                </select>
              </label>
              <label>
                Time Zone
                <select
                  value={settings.timeZone}
                  onChange={(event) => update("timeZone", event.target.value)}
                >
                  <option>Africa/Kigali</option>
                  <option>UTC</option>
                </select>
              </label>
            </div>
          </section>
          <section className="admin-panel admin-settings-section">
            <h3>Appearance</h3>
            <div className="admin-form-grid">
              <label>
                Admin interface theme
                <select
                  value={settings.theme}
                  onChange={(event) =>
                    update("theme", event.target.value as SettingsState["theme"])
                  }
                >
                  <option>Light</option>
                  <option>System</option>
                </select>
              </label>
              <label>
                Table density
                <select
                  value={settings.density}
                  onChange={(event) =>
                    update("density", event.target.value as SettingsState["density"])
                  }
                >
                  <option>Comfortable</option>
                  <option>Compact</option>
                </select>
              </label>
            </div>
          </section>
          <section className="admin-panel admin-settings-section">
            <h3>Archive Configuration</h3>
            <div className="admin-form-grid">
              <label>
                Public archive visibility
                <select
                  value={settings.publicVisibility}
                  onChange={(event) =>
                    update(
                      "publicVisibility",
                      event.target.value as SettingsState["publicVisibility"],
                    )
                  }
                >
                  <option>Visible</option>
                  <option>Hidden</option>
                </select>
              </label>
              <label>
                Default publication workflow
                <select
                  value={settings.workflow}
                  onChange={(event) =>
                    update("workflow", event.target.value as SettingsState["workflow"])
                  }
                >
                  <option>Draft then review</option>
                  <option>Direct publish</option>
                </select>
              </label>
              <label>
                Default verification requirement
                <select
                  value={settings.verification}
                  onChange={(event) =>
                    update("verification", event.target.value as SettingsState["verification"])
                  }
                >
                  <option>Required</option>
                  <option>Optional</option>
                </select>
              </label>
              <label>
                Media display
                <select
                  value={settings.mediaDisplay}
                  onChange={(event) =>
                    update("mediaDisplay", event.target.value as SettingsState["mediaDisplay"])
                  }
                >
                  <option>Standard</option>
                  <option>Compact</option>
                </select>
              </label>
            </div>
          </section>
          <section className="admin-panel admin-settings-section">
            <h3>Account Profile</h3>
            <div className="admin-profile-editor">
              <span className="admin-avatar admin-avatar-large">GA</span>
              <button type="button" className="admin-secondary-button">
                <Upload size={15} /> Profile Image
              </button>
            </div>
            <div className="admin-form-grid">
              <label>
                Administrator Display Name
                <input
                  value={settings.displayName}
                  onChange={(event) => update("displayName", event.target.value)}
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  value={settings.profileEmail}
                  onChange={(event) => update("profileEmail", event.target.value)}
                />
              </label>
            </div>
            <p className="admin-settings-note">
              Authentication and profile security require backend implementation. This interface
              only saves preferences in localStorage.
            </p>
          </section>
        </div>
      </form>
    </AdminLayout>
  );
}
