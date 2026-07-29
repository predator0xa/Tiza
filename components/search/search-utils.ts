import { products } from "@/lib/products";

export type Product = (typeof products)[number];
export type SearchResult = Product & { score: number };

export const RECENT_SEARCHES_KEY = "tiza:recent-searches";
export const MAX_RECENT_SEARCHES = 8;

export const featuredCategories = [
  { label: "New arrivals", href: "/collections/new" },
  { label: "Men's tailoring", href: "/collections/men" },
  { label: "Essentials", href: "/collections/essentials" },
  { label: "Accessories", href: "/collections/accessories" },
];

export const quickLinks = [
  { label: "Shop all pieces", href: "/shop" },
  { label: "Explore collections", href: "/collections" },
  { label: "The TIZA story", href: "/about" },
];

export function normalize(value: string) { return value.toLocaleLowerCase().trim().replace(/[^a-z0-9]+/g, " "); }
export function formatLabel(value: string) { return value.replace(/\b\w/g, (letter) => letter.toUpperCase()); }
export function formatPrice(price: number) { return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price); }

function levenshteinDistance(left: string, right: string) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i += 1) {
    let diagonal = row[0]; row[0] = i;
    for (let j = 1; j <= right.length; j += 1) { const above = row[j]; row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (left[i - 1] === right[j - 1] ? 0 : 1)); diagonal = above; }
  }
  return row[right.length];
}

export function searchProducts(query: string): SearchResult[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (!terms.length) return [];
  return products.map((product) => {
    const name = normalize(product.name);
    const text = normalize([product.name, product.category, product.collection, product.description, product.badge, "menswear"].join(" "));
    const score = terms.reduce((total, term) => {
      const fuzzy = text.split(" ").some((word) => levenshteinDistance(term, word) <= Math.max(1, Math.floor(term.length / 3)));
      return total + (name === term ? 30 : name.startsWith(term) ? 18 : name.includes(term) ? 12 : text.includes(term) ? 7 : fuzzy ? 2 : 0);
    }, product.badge === "NEW" ? 1 : 0);
    return { ...product, score };
  }).filter((product) => product.score > 0).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).slice(0, 6);
}
