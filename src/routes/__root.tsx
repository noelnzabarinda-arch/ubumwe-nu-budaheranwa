import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { archiveStructuredData } from "../lib/seo";
import { ArchiveHeader, ArchiveFooter } from "@/components/archive/shell";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { useLanguage } from "@/i18n/useLanguage";

function NotFoundComponent() {
  const { t } = useLanguage();
  return (
    <section className="container archive-not-found">
      <nav className="breadcrumb archive-not-found-breadcrumb" aria-label={t("breadcrumb")}>
        <Link to="/">{t("home")}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{t("pageNotFound")}</span>
      </nav>
      <div className="archive-not-found-content">
        <span className="archive-not-found-mark" aria-hidden="true">
          404
        </span>
        <span className="eyebrow">
          <span className="gold-rule" /> GSP HISTORICAL ARCHIVE
        </span>
        <h1>{t("pageNotFound")}</h1>
        <p>{t("notFoundDescription")}</p>
        <Link className="archive-not-found-home" to="/">
          {t("returnHome")} <ArrowUpRight size={15} />
        </Link>
        <nav className="archive-not-found-links" aria-label={t("exploreArchive")}>
          <Link to="/our-history">
            {t("ourHistory")} <ArrowRight size={14} />
          </Link>
          <Link to="/timeline">
            {t("historicalTimeline")} <ArrowRight size={14} />
          </Link>
        </nav>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const { t } = useLanguage();
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("pageDidNotLoad")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("unexpectedError")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "application-name", content: "GSP Historical Archive" },
      { title: "GSP Historical Archive" },
      {
        name: "description",
        content:
          "Preserving the history and shared memory of Groupe Scolaire des Parents, Huye, Rwanda.",
      },
      { property: "og:title", content: "GSP Historical Archive" },
      { property: "og:site_name", content: "GSP Historical Archive" },
      {
        property: "og:description",
        content: "The heritage of Groupe Scolaire des Parents, preserved for generations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { "script:ld+json": archiveStructuredData },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const isAdminRoute = useRouterState({
    select: (state) => state.location.pathname.startsWith("/admin"),
  });

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        {!isAdminRoute && <ArchiveHeader />}
        <main id="main-content">
          <Outlet />
        </main>
        {!isAdminRoute && <ArchiveFooter />}
      </QueryClientProvider>
    </LanguageProvider>
  );
}
