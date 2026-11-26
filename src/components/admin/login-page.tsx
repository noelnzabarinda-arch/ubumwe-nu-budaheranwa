import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { AdminBrand } from "@/components/admin/brand";

export function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setNotice("");

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Enter your password to continue.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setError("Sign-in is not connected yet. Authentication requires a secure backend.");
    }, 550);
  };

  return (
    <div className="admin-login-page">
      <header className="admin-login-header">
        <AdminBrand />
        <Link to="/" className="admin-return-link">
          <ArrowLeft size={15} /> Return to public archive
        </Link>
      </header>

      <div className="admin-login-main">
        <section className="admin-login-card" aria-labelledby="admin-login-title">
          <div className="admin-login-emblem" aria-hidden="true">
            <LockKeyhole size={21} strokeWidth={1.6} />
          </div>
          <span className="admin-login-eyebrow">ARCHIVE ADMINISTRATION</span>
          <h1 id="admin-login-title">Welcome back</h1>
          <p className="admin-login-intro">Sign in to manage the GSP Historical Archive.</p>

          <form className="admin-login-form" onSubmit={submit} noValidate>
            <label htmlFor="admin-email">Email address</label>
            <input
              autoComplete="username"
              id="admin-email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              aria-invalid={Boolean(
                error && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())),
              )}
            />

            <div className="admin-password-label">
              <label htmlFor="admin-password">Password</label>
              <button
                type="button"
                className="admin-forgot-link"
                onClick={() => {
                  setError("");
                  setNotice(
                    "Password recovery will be available when backend authentication is connected.",
                  );
                }}
              >
                Forgot password?
              </button>
            </div>
            <div className="admin-password-field">
              <input
                autoComplete="current-password"
                id="admin-password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                aria-invalid={Boolean(error && !password)}
              />
              <button
                type="button"
                className="admin-password-toggle"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                aria-pressed={passwordVisible}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            <label className="admin-remember-option">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              <span>Remember me</span>
            </label>

            {(error || notice) && (
              <p
                className={error ? "admin-form-message admin-form-error" : "admin-form-message"}
                role="status"
              >
                {error || notice}
              </p>
            )}

            <button type="submit" className="admin-sign-in-button" disabled={loading}>
              {loading ? (
                <>
                  <span className="admin-spinner" aria-hidden="true" /> Checking…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="admin-login-security">
            <ShieldCheck size={17} strokeWidth={1.6} />
            <p>
              Authentication is not yet configured. This interface does not verify credentials or
              protect admin routes.
            </p>
          </div>
        </section>
      </div>

      <footer className="admin-login-footer">
        <span>GSP Historical Archive</span>
        <span>Preserving our shared heritage</span>
      </footer>
    </div>
  );
}
