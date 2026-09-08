type Market = "NO" | "EU" | "PE";
type Offer = {
  supplier: "cj" | "germandrop" | "kdropshipping";
  sku: string; market: Market; inStock: boolean; compliant: boolean; tracked: boolean;
  productCost: number; shippingCost: number; salePrice: number; deliveryDaysMax: number;
  currency: "NOK" | "EUR" | "PEN";
};

const validMarkets = new Set<Market>(["NO", "EU", "PE"]);

function chooseOffer(market: Market, offers: Offer[]) {
  return offers
    .filter((offer) => offer.market === market && offer.inStock && offer.compliant && offer.tracked && offer.salePrice > offer.productCost + offer.shippingCost)
    .map((offer) => ({ ...offer, margin: offer.salePrice - offer.productCost - offer.shippingCost, score: Math.max(0, 20 - offer.deliveryDaysMax) + ((offer.salePrice - offer.productCost - offer.shippingCost) / offer.salePrice) * 50 }))
    .sort((a, b) => b.score - a.score)[0] ?? null;
}

export default async (request: Request) => {
  if (request.method === "GET") return Response.json({ ok: true, service: "Nordic Kids supplier router", sector: "kids", markets: ["NO", "EU", "PE"], configured: { cj: Boolean(Netlify.env.get("CJ_API_KEY")) } });
  if (request.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405 });
  let body: { market?: Market; offers?: Offer[] };
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }
  if (!body.market || !validMarkets.has(body.market) || !Array.isArray(body.offers)) return Response.json({ error: "market and offers are required" }, { status: 400 });
  return Response.json({ selected: chooseOffer(body.market, body.offers), evaluated: body.offers.length });
};

export const config = { path: "/api/supplier-route" };
