import { useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationKey } from "./translations";
import { LanguageContext } from "./language-context";

const wordTranslations: Record<Language, Record<string, string>> = {
  en: {},
  rw: {
    the: "ih", a: "imwe", an: "imwe", and: "na", or: "cyangwa", of: "by'",
    to: "kuri", for: "kugira", from: "uva", with: "hamwe na", in: "mu",
    at: "i", our: "byacu", your: "byawe", we: "twebwe", they: "bo",
    is: "ni", are: "ni", was: "yari", were: "wari", has: "ifite",
    have: "bifite", be: "kuba", been: "byabaye", will: "bizaba",
    can: "ishobora", not: "ntabwo", no: "oya", all: "byose", only: "gusa",
    more: "birenze", after: "nyuma ya", before: "imbere ya", every: "buri",
    history: "amateka", historical: "by'amateka", story: "inkuru",
    stories: "inkuru", school: "ishuri", archive: "ububiko", archives: "ububiko",
    record: "inyandiko", records: "inyandiko", collection: "icyegeranyo",
    collections: "ibyegeranyo", document: "inyandiko", documents: "inyandiko",
    search: "shakisha", view: "reba", read: "soma", explore: "shakisha",
    home: "ahabanza", page: "paji", about: "ibyerekeye",
    people: "abantu", memory: "icyibutso", memories: "ibyo twibuka",
    community: "umuryango", shared: "dusangiye", past: "amateka",
    present: "iki gihe", future: "ejo hazaza", generations: "ibisekuruza",
    year: "umwaka", years: "imyaka", date: "itariki", dates: "amatariki",
    name: "izina", title: "umutwe", description: "ibasobanuro",
    verified: "yemejwe", verification: "igenzura", unconfirmed: "nticyemejwe",
    available: "ihari", unavailable: "ntihari", public: "rusange",
    private: "bwite", internal: "imbere", restricted: "iburenganzira",
    clear: "kuraho", reset: "gusubizaho", filters: "amatoranya",
    category: "icyiciro", categories: "ibyiciro", period: "igihe",
    newest: "bishya", oldest: "bishaje", relevance: "ubusabane",
    next: "ikurikira", previous: "ibibanziriza", back: "inyuma",
    continue: "komeza", close: "funga", open: "fungura",
    language: "ururimi", english: "Icyongereza", french: "Igifaransa",
    kinyarwanda: "Ikinyarwanda", leadership: "ubuyobozi", leader: "umuyobozi",
    alumni: "abanyeshuri bahize", events: "ibikorwa", event: "igikorwa",
    important: "by'ingenzi", gallery: "amafoto", photo: "ifoto",
    photos: "amafoto", video: "amashusho", media: "ibitangira",
    welcome: "murakaza neza", preserving: "kurinda",
    heritage: "umurage", preserve: "gusigasira", care: "ubwitondo",
    true: "ukuri", truth: "ukuri", purpose: "intumbero",
    contact: "itumanaho", details: "amakuru", contribute: "utange",
    contribution: "umusanzu",
    featured: "bishyizwe mbere", click: "kanda", enter: "injiza",
    loading: "biratunganywa", error: "ikosa", success: "byagenze neza",
  },
  fr: {
    the: "le", a: "un", an: "un", and: "et", or: "ou", of: "de",
    to: "à", for: "pour", from: "de", with: "avec", in: "dans",
    at: "à", our: "notre", your: "votre", we: "nous", they: "ils",
    is: "est", are: "sont", was: "était", were: "étaient",
    has: "a", have: "avoir", be: "être", been: "été", will: "sera",
    can: "peut", not: "pas", no: "non", all: "tout", only: "seul",
    more: "plus", after: "après", before: "avant", every: "chaque",
    history: "histoire", historical: "historique", story: "histoire",
    stories: "histoires", school: "école", archive: "archive", archives: "archives",
    record: "notice", records: "notices", collection: "collection",
    collections: "collections", document: "document", documents: "documents",
    search: "rechercher", view: "voir", read: "lire", explore: "explorer",
    home: "accueil", page: "page", about: "à propos",
    people: "personnes", memory: "souvenir", memories: "souvenirs",
    community: "communauté", shared: "partagé", past: "passé",
    present: "présent", future: "avenir", generations: "générations",
    year: "année", years: "années", date: "date", dates: "dates",
    name: "nom", title: "titre", description: "description",
    verified: "vérifié", verification: "vérification", unconfirmed: "non confirmé",
    available: "disponible", unavailable: "indisponible", public: "public",
    private: "privé", internal: "interne", restricted: "restreint",
    clear: "effacer", reset: "réinitialiser", filters: "filtres",
    category: "catégorie", categories: "catégories", period: "période",
    newest: "plus récent", oldest: "plus ancien", relevance: "pertinence",
    next: "suivant", previous: "précédent", back: "retour",
    continue: "continuer", close: "fermer", open: "ouvrir",
    language: "langue", english: "anglais", french: "français",
    kinyarwanda: "kinyarwanda", leadership: "direction", leader: "dirigeant",
    alumni: "anciens élèves", events: "événements", event: "événement",
    important: "important", gallery: "galerie", photo: "photo",
    photos: "photos", video: "vidéo", media: "médias",
    welcome: "bienvenue", preserving: "préservation",
    heritage: "patrimoine", preserve: "préserver", care: "soin",
    true: "vrai", truth: "vérité", purpose: "objectif",
    contact: "contact", details: "détails", contribute: "contribuer",
    contribution: "contribution", featured: "à la une",
    click: "cliquer", enter: "entrer", loading: "chargement",
    error: "erreur", success: "succès",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const originalTextNodes = useState(() => new WeakMap<Text, string>())[0];
  const originalAttributes = useState(() => new WeakMap<Element, Map<string, string>>())[0];

  const translateText = (text: string, targetLanguage: Language) => {
    if (!text.trim() || /^[\d\s\p{P}]+$/u.test(text)) return text;

    const exact = translations[targetLanguage];
    const matchingKey = (Object.keys(translations.en) as TranslationKey[]).find(
      (key) => translations.en[key] === text,
    );
    if (matchingKey) return exact[matchingKey];

    if (targetLanguage === "en") return text;

    return text.replace(/\b[\p{L}'’-]+\b/gu, (word) => {
      const lower = word.toLocaleLowerCase();
      const translated = wordTranslations[targetLanguage][lower];
      if (!translated) return word;
      return translated;
    });
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("gsp-language");
    if (saved === "en" || saved === "rw" || saved === "fr") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;

    const translateHead = () => {
      const exactText = (text: string) =>
        translateText(text, language);

      const title = document.querySelector("title");
      if (title) {
        if (!title.dataset.gspOriginalText) {
          title.dataset.gspOriginalText = title.textContent ?? "";
        }
        title.textContent = exactText(title.dataset.gspOriginalText);
      }

      document.querySelectorAll<HTMLMetaElement>(
        'meta[name="description"], meta[property="og:description"], meta[property="og:title"]',
      ).forEach((meta) => {
        const current = meta.getAttribute("content");
        if (!current) return;
        if (!meta.dataset.gspOriginalContent) {
          meta.dataset.gspOriginalContent = current;
        }
        meta.setAttribute("content", exactText(meta.dataset.gspOriginalContent));
      });
    };

    translateHead();

    const translateAttributes = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(
        "[placeholder], [aria-label], [title], [alt]",
      ).forEach((element) => {
        let values = originalAttributes.get(element);
        if (!values) {
          values = new Map();
          originalAttributes.set(element, values);
        }
        ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
          const current = element.getAttribute(attribute);
          if (!current) return;
          if (!values.has(attribute)) values.set(attribute, current);
          element.setAttribute(attribute, translateText(values.get(attribute)!, language));
        });
      });
    };

    const translateNode = (node: Node) => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const textNode = node as Text;
      const parent = textNode.parentElement;
      if (
        !parent ||
        parent.closest("script, style, code, pre, [aria-hidden='true']")
      ) return;

      if (!originalTextNodes.has(textNode)) {
        originalTextNodes.set(textNode, textNode.nodeValue ?? "");
      }
      const original = originalTextNodes.get(textNode) ?? "";
      const translated = translateText(original, language);
      if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
    };

    const translateTree = (root: ParentNode) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        translateNode(node);
        node = walker.nextNode();
      }
      translateAttributes(root);
    };

    translateTree(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target instanceof HTMLHeadElement || mutation.target.closest?.("head")) {
          translateHead();
        }
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            translateTree(addedNode as ParentNode);
          } else {
            translateNode(addedNode);
          }
        });
        if (mutation.type === "characterData") translateNode(mutation.target);
        if (mutation.type === "attributes") {
          const element = mutation.target as HTMLElement;
          if (element instanceof HTMLMetaElement) translateHead();
          translateAttributes(element.parentElement ?? document.body);
        }
      });
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "aria-label", "title", "alt", "content"],
    });

    return () => observer.disconnect();
  }, [language, originalAttributes, originalTextNodes]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("gsp-language", nextLanguage);
  };

  const t = (key: TranslationKey) => translations[language][key] ?? translations.en[key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
