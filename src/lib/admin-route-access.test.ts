import { describe, expect, it } from "vitest";
import { isAdminRoutePath } from "./admin-route-access";

describe("admin route availability", () => {
  it("blocks the admin root and nested paths regardless of case", () => {
    expect(isAdminRoutePath("/admin")).toBe(true);
    expect(isAdminRoutePath("/admin/dashboard")).toBe(true);
    expect(isAdminRoutePath("/ADMIN/login")).toBe(true);
  });

  it("does not block similarly prefixed public routes", () => {
    expect(isAdminRoutePath("/")).toBe(false);
    expect(isAdminRoutePath("/administrator")).toBe(false);
  });
});
