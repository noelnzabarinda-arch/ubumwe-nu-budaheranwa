import { describe, expect, it } from "vitest";
import { addSecurityHeaders } from "./security-headers";

describe("security response headers", () => {
  it("adds protective headers without changing the response body or status", async () => {
    const response = addSecurityHeaders(
      new Response("Not found", {
        status: 404,
        headers: { "content-type": "text/plain" },
      }),
    );

    expect(response.status).toBe(404);
    expect(response.headers.get("content-security-policy")).toBe("frame-ancestors 'none'");
    expect(response.headers.get("strict-transport-security")).toBe("max-age=31536000");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(response.headers.get("x-frame-options")).toBe("DENY");
    expect(response.headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
    expect(response.headers.get("permissions-policy")).toBe(
      "camera=(), geolocation=(), microphone=()",
    );
    expect(await response.text()).toBe("Not found");
  });

  it("preserves security headers already set by the hosting platform", () => {
    const response = addSecurityHeaders(
      new Response(null, {
        headers: { "content-security-policy": "default-src 'self'" },
      }),
    );

    expect(response.headers.get("content-security-policy")).toBe("default-src 'self'");
  });
});
