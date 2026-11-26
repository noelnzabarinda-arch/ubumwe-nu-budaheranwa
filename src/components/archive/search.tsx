import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";
import { searchTypeTranslationKeys } from "@/i18n/search-translation-keys";
import {
  archiveSearchYears,
  isSearchType,
  searchTypes,
  type ArchiveSearchItem,
  type SearchType,
} from "@/lib/search-data";

const suggestions = [
  { key: "searchHistorySuggestion", query: "history" },
  { key: "searchTimelineSuggestion", query: "timeline" },
  { key: "searchLeadershipSuggestion", query: "leadership" },
  { key: "searchEventsSuggestion", query: "events" },
  { key: "searchAlumniSuggestion", query: "alumni" },
  { key: "searchGallerySuggestion", query: "gallery" },
  { key: "searchDocumentsSuggestion", query: "documents" },
] as const;

export function GlobalSearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <button
        className="header-search-button"
        type="button"
        aria-label={t("openSearch")}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
      >
        <Search size={20} strokeWidth={1.7} />
      </button>
      {isOpen && (
        <SearchOverlay
          onClose={() => {
            setIsOpen(false);
            window.requestAnimationFrame(() => triggerRef.current?.focus());
          }}
        />
      )}
    </>
  );
}

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const timer = window.setTimeout(() => searchRef.current?.focus(), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keyword = query.trim();
    if (!keyword) return;
    onClose();
    void navigate({ to: "/search", search: { q: keyword } });
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label={t("search")}>
      <button
        className="search-overlay-backdrop"
        type="button"
        aria-label={t("closeSearch")}
        onClick={onClose}
      />
      <div className="search-panel">
        <div className="search-panel-heading">
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <button type="button" aria-label={t("closeSearch")} onClick={onClose}>
            <X size={21} />
          </button>
        </div>
        <form className="global-search-form" onSubmit={submitSearch}>
          <Search size={25} strokeWidth={1.4} />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("search")}
          />
          {query && (
            <button
              type="button"
              className="clear-search"
              aria-label={t("clearSearch")}
              onClick={() => setQuery("")}
            >
              <X size={17} />
            </button>
          )}
          <button
            type="submit"
            className="submit-search"
            aria-label={t("search")}
            disabled={!query.trim()}
          >
            {t("search")}
          </button>
        </form>
        <p className="search-hint">
          {t("searchHint")} · {t("searchKeyboardHint")}
        </p>
        <SearchSuggestions />
      </div>
    </div>
  );
}

export function SearchSuggestions() {
  const { t } = useLanguage();
  return (
    <div className="search-suggestions">
      <span className="eyebrow">{t("exploreCollection").toUpperCase()}</span>
      <div>
        {suggestions.map((item) => (
          <a key={item.key} href={`/search?q=${encodeURIComponent(item.query)}`}>
            {t(item.key)} <ArrowUpRight size={12} />
          </a>
        ))}
      </div>
    </div>
  );
}

export function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const { t } = useLanguage();
  return (
    <label className="archive-search-input">
      <Search size={18} aria-hidden="true" />
      <span className="sr-only">{t("searchArchiveAccessible")}</span>
      <input
        type="search"
        value={value}
        placeholder={placeholder ?? t("searchPlaceholder")}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function SearchFilters({
  type,
  year,
  sort,
  years,
  onTypeChange,
  onYearChange,
  onSortChange,
  onClear,
  hasFilters,
}: {
  type: SearchType | "all";
  year: string;
  sort: "relevance" | "newest";
  years: string[];
  onTypeChange: (value: SearchType | "all") => void;
  onYearChange: (value: string) => void;
  onSortChange: (value: "relevance" | "newest") => void;
  onClear: () => void;
  hasFilters: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="archive-search-filters" aria-label={t("searchResultFilters")}>
      <label>
        <span>{t("contentType")}</span>
        <select
          aria-label={t("filterContentType")}
          value={type}
          onChange={(event) => {
            const value = event.target.value;
            onTypeChange(isSearchType(value) ? value : "all");
          }}
        >
          <option value="all">{t("allContentTypes")}</option>
          {searchTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {t(searchTypeTranslationKeys[item.value])}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>{t("year")}</span>
        <select
          aria-label={t("filterYear")}
          value={year}
          disabled={years.length === 0}
          onChange={(event) => onYearChange(event.target.value)}
        >
          <option value="all">{years.length ? t("allYears") : t("noConfirmedYears")}</option>
          {years.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>{t("sortBy")}</span>
        <select
          aria-label={t("sortSearchResults")}
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value === "newest" ? "newest" : "relevance")
          }
        >
          <option value="relevance">{t("relevance")}</option>
          <option value="newest">{t("newestFirst")}</option>
        </select>
      </label>
      <Button variant="link" size="sm" disabled={!hasFilters} onClick={onClear}>
        {t("clearFilters")}
      </Button>
    </div>
  );
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  if (!terms.length) return text;
  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  return text
    .split(pattern)
    .map((part, index) =>
      terms.some((term) => part.toLocaleLowerCase() === term.toLocaleLowerCase()) ? (
        <mark key={`${part}-${index}`}>{part}</mark>
      ) : (
        part
      ),
    );
}

export function SearchResultCard({ item, query }: { item: ArchiveSearchItem; query: string }) {
  const { t } = useLanguage();
  const label = t(searchTypeTranslationKeys[item.type]);
  return (
    <article className="archive-search-result">
      {item.image && (
        <a
          className="archive-search-result-image"
          href={item.href}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img src={item.image} alt="" loading="lazy" />
        </a>
      )}
      <div className="archive-search-result-copy">
        <div className="archive-search-result-meta">
          <span>{label}</span>
          {item.year !== null && <span>{item.year}</span>}
        </div>
        <h3>
          <a href={item.href}>
            <HighlightedText text={item.title} query={query} />
          </a>
        </h3>
        <p>
          <HighlightedText text={item.description} query={query} />
        </p>
        <span className="archive-search-result-category">{item.category}</span>
        <span className="archive-translation-note">{t("originalLanguageFallback")}</span>
      </div>
      <a
        className="archive-search-result-arrow"
        href={item.href}
        aria-label={`${t("readRecord")}: ${item.title}`}
      >
        <ArrowUpRight size={17} />
      </a>
    </article>
  );
}

export function SearchResultGroup({
  label,
  items,
  query,
}: {
  label: string;
  items: ArchiveSearchItem[];
  query: string;
}) {
  if (!items.length) return null;
  return (
    <section className="archive-search-group" aria-labelledby={`search-group-${items[0]?.type}`}>
      <div className="archive-search-group-heading">
        <h2 id={`search-group-${items[0]?.type}`}>{label}</h2>
        <span>{items.length}</span>
      </div>
      <div className="archive-search-result-list">
        {items.map((item) => (
          <SearchResultCard key={item.id} item={item} query={query} />
        ))}
      </div>
    </section>
  );
}

export function SearchEmptyState({ hasQuery }: { hasQuery: boolean }) {
  const { t } = useLanguage();
  return (
    <section className="archive-search-empty" role="status">
      <span className="archive-search-empty-mark">
        {hasQuery ? (
          <Search size={23} strokeWidth={1.35} />
        ) : (
          <ArrowRight size={23} strokeWidth={1.35} />
        )}
      </span>
      <span className="eyebrow">
        {t(hasQuery ? "noMatchingRecordsEyebrow" : "beginSearchEyebrow").toUpperCase()}
      </span>
      <h2>{t(hasQuery ? "noMatchingRecords" : "beginSearch")}</h2>
      <p>{hasQuery ? t("noMatchHelp") : t("beginSearchHelp")}</p>
      <div className="archive-search-empty-actions">
        {hasQuery && (
          <Button asChild variant="editorial">
            <Link to="/">
              {t("returnToArchive")} <ArrowRight size={14} />
            </Link>
          </Button>
        )}
        {!hasQuery && <SearchSuggestions />}
      </div>
    </section>
  );
}
