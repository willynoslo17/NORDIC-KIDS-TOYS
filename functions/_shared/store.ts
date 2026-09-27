/** Per-store identity. This is the only checkout/webhook file that differs between the NORDIC-* repos. */
export const STORE = {
  slug: "nordic-kids-toys",
  brand: "Ludispel",
  domain: "ludispel.no",
  siteUrl: "https://ludispel.no/",
  /** Catalog sector used by the Gelato/Printful endpoints (never taken from the query string). */
  sector: "toys",
} as const;
