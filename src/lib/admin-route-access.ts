export function isAdminRoutePath(pathname: string): boolean {
  return /^\/admin(?:\/|$)/i.test(pathname);
}
