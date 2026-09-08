const BASE = "https://developers.cjdropshipping.com/api2.0/v1";
const TERMS = new Set(["toys", "educational toys", "montessori toys", "stem toys", "baby toys"]);

async function token(key: string) {
  const response = await fetch(`${BASE}/authentication/getAccessToken`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ apiKey: key }),
  });
  const payload = await response.json();
  if (!response.ok || !payload?.data?.accessToken) throw new Error(payload?.message || "CJ authentication failed");
  return payload.data.accessToken as string;
}

export default async (request: Request) => {
  if (request.method !== "GET") return Response.json({ error: "Method not allowed" }, { status: 405 });
  const key = Netlify.env.get("CJ_API_KEY");
  if (!key) return Response.json({ error: "CJ is not configured" }, { status: 503 });
  const url = new URL(request.url);
  const wanted = (url.searchParams.get("q") || "educational toys").toLowerCase();
  const query = TERMS.has(wanted) ? wanted : "educational toys";
  try {
    const accessToken = await token(key);
    const endpoint = new URL(`${BASE}/product/listV2`);
    endpoint.searchParams.set("page", "1");
    endpoint.searchParams.set("size", "20");
    endpoint.searchParams.set("keyWord", query);
    const response = await fetch(endpoint, { headers: { "CJ-Access-Token": accessToken } });
    const payload = await response.json();
    if (!response.ok || payload?.success === false) return Response.json({ error: payload?.message || "CJ product request failed" }, { status: 502 });
    return Response.json({ ok: true, supplier: "cj", sector: "kids", query, markets: ["NO", "EU", "PE"], notice: "Candidates require age, safety and destination compliance review before publication.", data: payload.data });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "CJ request failed" }, { status: 502 });
  }
};

export const config = { path: "/api/cj-products" };
