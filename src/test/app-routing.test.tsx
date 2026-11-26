import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([
    ["/our-history", "/our-history/"],
    ["/our-history/the-beginning", "/our-history/$slug"],
    ["/archive/timeline", "/archive/$collection"],
    ["/archive/contribute", "/archive/$collection"],
    ["/timeline", "/timeline/"],
    ["/timeline/the-beginning", "/timeline/$year"],
    ["/events", "/events/"],
    ["/events/the-beginning", "/events/$slug"],
    ["/leadership", "/leadership/"],
    ["/leadership/current-leadership", "/leadership/$slug"],
    ["/alumni", "/alumni/"],
    ["/alumni/profile-verification-pending", "/alumni/$slug"],
    ["/gallery", "/gallery/"],
    ["/gallery/school-history", "/gallery/$categorySlug"],
    ["/gallery/videos-documentaries", "/gallery/$categorySlug"],
    ["/documents", "/documents"],
    ["/about-archive", "/about-archive"],
    ["/search", "/search"],
    ["/admin/login", "/admin/login"],
    ["/admin/dashboard", "/admin/dashboard"],
  ])("matches the archive destination %s", (path, routeId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(routeId);
  });
});
