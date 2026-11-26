import { Link } from "@tanstack/react-router";

export function AdminBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className={`admin-brand${compact ? " admin-brand-compact" : ""}`}
      aria-label="GSP Historical Archive home"
    >
      <img src="/logo.png" alt="" />
      <span>
        <strong>GSP</strong>
        <small>Historical Archive</small>
      </span>
    </Link>
  );
}
