import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Menu, X, ArrowUpRight, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";
import { languageNames, type Language } from "@/i18n/translations";
import { GlobalSearchButton } from "@/components/archive/search";
const nav = [
  { key: "timeline" as const, to: "/timeline" },
  { key: "leadership" as const, to: "/leadership" },
  { key: "importantEvents" as const, to: "/events" },
  { key: "alumni" as const, to: "/alumni" },
  { key: "gallery" as const, to: "/gallery" },
  { key: "documents" as const, to: "/documents" },
  { key: "aboutArchive" as const, to: "/about-archive" },
];
export function Wordmark() {
  const { t } = useLanguage();
  return (
    <Link to="/" className="wordmark" aria-label={`GSP Historical Archive ${t("home")}`}>
      <img className="brand-logo" src="/logo.png" alt="" />
      <span>
        <strong>
          GSP <span>Historical Archive</span>
        </strong>
        <small>GROUPE SCOLAIRE DES PARENTS</small>
      </span>
    </Link>
  );
}
export function ArchiveHeader() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const chooseLanguage = (next: Language) => {
    setLanguage(next);
    setLanguageOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav aria-label="Main navigation" className="main-nav">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
              {t("home")}
            </Link>
            <Link to="/our-history" activeProps={{ className: "active" }}>
              {t("ourHistory")}
            </Link>
            {nav.map((item) => (
              <Link key={item.key} to={item.to} activeProps={{ className: "active" }}>
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <GlobalSearchButton />
            <div className="language-switcher">
              <button
                type="button"
                className="language-button"
                aria-haspopup="listbox"
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={13} />
              </button>
              {languageOpen && (
                <div className="language-menu" role="listbox" aria-label={t("language")}>
                  {(["en", "rw", "fr"] as Language[]).map((item) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected={language === item}
                      key={item}
                      onClick={() => chooseLanguage(item)}
                    >
                      <b>{item.toUpperCase()}</b>
                      <span>{languageNames[item]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label={open ? t("closeNavigation") : t("openNavigation")}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      {open && (
        <div className="mobile-nav-backdrop" onClick={() => setOpen(false)}>
          <nav
            className="mobile-nav-drawer"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-drawer-heading">
              <span>{t("categories")}</span>
              <button
                type="button"
                aria-label={t("closeNavigation")}
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>
              {t("home")}
            </Link>
            <Link to="/our-history" onClick={() => setOpen(false)}>
              {t("ourHistory")}
            </Link>
            {nav.map((item) => (
              <Link key={item.key} to={item.to} onClick={() => setOpen(false)}>
                {t(item.key)}
              </Link>
            ))}
            <div className="mobile-language">
              <span>{t("language")}</span>
              {(["en", "rw", "fr"] as Language[]).map((item) => (
                <button
                  type="button"
                  className={language === item ? "active" : ""}
                  key={item}
                  onClick={() => chooseLanguage(item)}
                >
                  {item.toUpperCase()} <span>{languageNames[item]}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
export function ArchiveFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Wordmark />
          <p>
            {t("footerTagline")}
            <br />
            {t("footerDescription")}
          </p>
          <span className="location">
            <MapPin size={13} /> Huye, Rwanda
          </span>
        </div>
        <div className="footer-links">
          <span className="eyebrow">{t("exploreArchive").toUpperCase()}</span>
          <Link to="/our-history">{t("ourHistory")}</Link>
          <Link to="/timeline">{t("historicalTimeline")}</Link>
          <Link to="/alumni">{t("alumniHistory")}</Link>
          <Link to="/gallery">{t("photoGallery")}</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">{t("keepStoryAlive").toUpperCase()}</span>
          <Link to="/about-archive">{t("aboutArchive")}</Link>
          <Link to="/archive/$collection" params={{ collection: "contribute" }}>
            {t("contributeMemory")} <ArrowUpRight size={13} />
          </Link>
          <span className="footer-note">{t("contributionNote")}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {t("footerRights")}
        </span>
        <span>
          {t("footerPurpose")} <Heart size={11} />
        </span>
      </div>
    </footer>
  );
}
