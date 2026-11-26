import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";
import {
  SearchEmptyState,
  SearchFilters,
  SearchInput,
  SearchResultGroup,
} from "@/components/archive/search";
import { searchTypeTranslationKeys } from "@/i18n/search-translation-keys";
import { archiveHead } from "@/lib/archive-data";
import {
  filterArchiveSearch,
  isSearchType,
  searchArchive,
  archiveSearchYears,
  type SearchType,
} from "@/lib/search-data";

type SearchParams = {
  q?: string | undefined;
  type?: SearchType | undefined;
  year?: string | undefined;
  sort?: "newest" | undefined;
};

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    ...(typeof search["q"] === "string" && search["q"].trim() ? { q: search["q"].trim() } : {}),
    ...(isSearchType(search["type"]) ? { type: search["type"] } : {}),
    ...(typeof search["year"] === "string" && /^\d{4}$/.test(search["year"])
      ? { year: search["year"] }
      : {}),
    ...(search["sort"] === "newest" ? { sort: "newest" } : {}),
  }),
  head: () =>
    archiveHead(
      "Search the Archive",
      "Search the GSP Historical Archive's stories, timeline previews, leadership records, and important events.",
    ),
  component: ArchiveSearchPage,
});

function ArchiveSearchPage() {
  const { t } = useLanguage();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const query = search.q ?? "";
  const type = search.type ?? "all";
  const year = search.year ?? "all";
  const sort = search.sort === "newest" ? "newest" : "relevance";
  const [draft, setDraft] = useState(query);
  const matchingItems = useMemo(() => searchArchive(query), [query]);
  const years = useMemo(() => archiveSearchYears(matchingItems), [matchingItems]);
  const results = useMemo(
    () => filterArchiveSearch(matchingItems, type, year, sort, query),
    [matchingItems, type, year, sort, query],
  );
  const hasFilters = type !== "all" || year !== "all" || sort !== "relevance";

  useEffect(() => setDraft(query), [query]);

  const update = (patch: Partial<SearchParams>) =>
    void navigate({
      to: ".",
      search: (previous) => ({ ...previous, ...patch }),
      replace: true,
      resetScroll: false,
    });
  const resetFilters = () =>
    void navigate({
      to: ".",
      search: (previous) => ({ q: previous.q }),
      replace: true,
      resetScroll: false,
    });
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void navigate({
      to: ".",
      search: (previous) => ({
        ...previous,
        q: draft.trim() || undefined,
      }),
      replace: false,
    });
  };
  const groupedTypes: SearchType[] = [
    "stories",
    "timeline",
    "leadership",
    "events",
    "alumni",
    "gallery",
    "documents",
  ];

  return (
    <div className="archive-search-page">
      <header className="archive-search-header">
        <div className="container">
          <nav className="breadcrumb archive-search-breadcrumb" aria-label={t("breadcrumb")}>
            <Link to="/">{t("home")}</Link>
            <ArrowRight size={12} />
            <span aria-current="page">{t("searchResults")}</span>
          </nav>
          <span className="eyebrow">
            <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
          </span>
          <h1>{t("searchPageTitle")}</h1>
          <p>
            {query ? (
              <>
                {t("resultsFor")} <strong>“{query}”</strong>
              </>
            ) : (
              t("searchPageDescription")
            )}
          </p>
          <form className="archive-search-page-form" onSubmit={submitSearch}>
            <SearchInput value={draft} onChange={setDraft} />
            <Button type="submit" variant="heritage">
              {t("search")} <ArrowRight size={15} />
            </Button>
          </form>
        </div>
      </header>

      <section className="container archive-search-content" aria-label={t("searchResults")}>
        <div className="archive-search-summary" aria-live="polite">
          <span>
            {query
              ? `${matchingItems.length} ${t(matchingItems.length === 1 ? "matchingRecord" : "matchingRecords")}`
              : t("enterKeyword")}
          </span>
          {query && hasFilters && (
            <span>
              {results.length} {t("matchingRecordsShown")}
            </span>
          )}
        </div>
        <SearchFilters
          type={type}
          year={year}
          sort={sort}
          years={years}
          onTypeChange={(value) => update({ type: value === "all" ? undefined : value })}
          onYearChange={(value) => update({ year: value === "all" ? undefined : value })}
          onSortChange={(value) => update({ sort: value === "relevance" ? undefined : value })}
          onClear={resetFilters}
          hasFilters={hasFilters}
        />
        {results.length ? (
          <div className="archive-search-groups">
            {groupedTypes.map((groupType) => (
              <SearchResultGroup
                key={groupType}
                label={t(searchTypeTranslationKeys[groupType])}
                items={results.filter((item) => item.type === groupType)}
                query={query}
              />
            ))}
          </div>
        ) : (
          <SearchEmptyState hasQuery={Boolean(query)} />
        )}
      </section>
    </div>
  );
}
