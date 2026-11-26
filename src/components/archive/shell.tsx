import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookOpen, MapPin, Menu, X, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const nav = [
  { label: "Timeline", slug: "timeline" },
  { label: "Leadership", slug: "leadership" },
  { label: "Important Events", slug: "events" },
  { label: "Alumni", slug: "alumni" },
  { label: "Gallery", slug: "gallery" },
  { label: "Documents", slug: "documents" },
  { label: "About Archive", slug: "about" },
];
export function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="GSP Historical Archive home">
      <span className="brand-emblem">
        <BookOpen strokeWidth={1.3} />
      </span>
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
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav
            aria-label="Main navigation"
            className={open ? "main-nav is-open" : "main-nav"}
            onClick={() => setOpen(false)}
          >
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
              Home
            </Link>
            <Link to="/our-history" activeProps={{ className: "active" }}>
              Our History
            </Link>
            {nav.map((item) => (
              <Link
                key={item.slug}
                to="/archive/$collection"
                params={{ collection: item.slug }}
                activeProps={{ className: "active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
    </>
  );
}
export function ArchiveFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Wordmark />
          <p>
            A shared heritage. A lasting record.
            <br />
            Preserving GSP’s story for generations to come.
          </p>
          <span className="location">
            <MapPin size={13} /> Huye, Rwanda
          </span>
        </div>
        <div className="footer-links">
          <span className="eyebrow">EXPLORE THE ARCHIVE</span>
          <Link to="/our-history">Our History</Link>
          <Link to="/archive/$collection" params={{ collection: "timeline" }}>
            Historical Timeline
          </Link>
          <Link to="/archive/$collection" params={{ collection: "gallery" }}>
            Photo Gallery
          </Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">KEEP OUR STORY ALIVE</span>
          <Link to="/archive/$collection" params={{ collection: "about" }}>
            About the Archive
          </Link>
          <Link to="/archive/$collection" params={{ collection: "contribute" }}>
            Contribute a memory <ArrowUpRight size={13} />
          </Link>
          <span className="footer-note">Contact details will be added when verified.</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} GSP Historical Archive. All rights reserved.</span>
        <span>
          Preserved with care. Shared with purpose. <Heart size={11} />
        </span>
      </div>
    </footer>
  );
}
