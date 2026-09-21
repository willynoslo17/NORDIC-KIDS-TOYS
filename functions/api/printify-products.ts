const BASE = "https://api.printify.com/v1";

const SELECTED: any[] = [
  {
    "id": "printify-toys-1",
    "sku": "PFY-KIDS-POSTER-ABC",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "ABC Adventure Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-2",
    "sku": "PFY-KIDS-POSTER-SPACE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Solar System Kids Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 22.9,
    "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-3",
    "sku": "PFY-KIDS-POSTER-ANIMALS",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Animals Wall Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 20.9,
    "image": "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-4",
    "sku": "PFY-KIDS-POSTER-COUNT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Counting Forest Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 19.9,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-5",
    "sku": "PFY-KIDS-TEE-EXPLORE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Little Explorer Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 24.9,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-6",
    "sku": "PFY-KIDS-TEE-PLAY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Play Mode On T-Shirt",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 23.9,
    "image": "https://images.unsplash.com/photo-1503919545889-aef636e10ad0?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-7",
    "sku": "PFY-KIDS-TEE-STORY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Storytime Hero Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 22.9,
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-8",
    "sku": "PFY-KIDS-TEE-RAINBOW",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Rainbow Crew Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-9",
    "sku": "PFY-KIDS-POSTER-BUILD",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Build & Learn Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 18.9,
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d745b?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-10",
    "sku": "PFY-KIDS-POSTER-DINO",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Dinosaurs Dino Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 21.5,
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-11",
    "sku": "PFY-KIDS-TEE-MAKER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Future Maker Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 25.9,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-12",
    "sku": "PFY-KIDS-POSTER-DREAM",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Bedtime Dreams Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 19.5,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-13",
    "sku": "PFY-KIDS-POSTER-OCEAN",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Ocean Friends Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 20.5,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-14",
    "sku": "PFY-KIDS-TEE-SCIENCE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Little Scientist Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 24.5,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-15",
    "sku": "PFY-KIDS-POSTER-SHAPES",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Shapes & Colors Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 19.5,
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d745b?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-16",
    "sku": "PFY-KIDS-POSTER-ROCKET",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Rocket Launch Kids Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 21.5,
    "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-17",
    "sku": "PFY-KIDS-TEE-CHEF",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Little Chef Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 23.5,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-18",
    "sku": "PFY-KIDS-POSTER-ZOO",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Alphabet Zoo Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 20.5,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-19",
    "sku": "PFY-KIDS-TEE-PLAYGROUND",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Playground Hero Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 22.5,
    "image": "https://images.unsplash.com/photo-1503919545889-aef636e10ad0?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-20",
    "sku": "PFY-KIDS-POSTER-FAIRY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Nordic Fairy Tale Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 22.9,
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-21",
    "sku": "PFY-KIDS-TEE-INVENTOR",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Junior Inventor Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 24.5,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-22",
    "sku": "PFY-KIDS-POSTER-WEATHER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Weather Watch Kids Poster",
    "category": "Educational",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 19.9,
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-23",
    "sku": "PFY-KIDS-TEE-KIND",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Super Kind Soft Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  },
  {
    "id": "printify-toys-24",
    "sku": "PFY-KIDS-POSTER-VIKING",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Viking Adventure Poster",
    "category": "Kids Decor",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 23.9,
    "image": "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "toys"
  },
  {
    "id": "printify-toys-25",
    "sku": "PFY-KIDS-TEE-TRAVELER",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Tiny Traveler Kids Tee",
    "category": "Kids Apparel",
    "supplierPriceUsd": 8.2,
    "suggestedRetailUsd": 25.5,
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    "matchType": "tee",
    "sector": "toys"
  }
];

const SECTOR_ALIASES: Record<string, string> = {
  "beauty": "beauty",
  "perfume": "beauty",
  "perfumes": "beauty",
  "skincare": "beauty",
  "toys": "toys",
  "kids": "toys",
  "kid": "toys",
  "children": "toys",
  "electronics": "electronics",
  "tech": "electronics",
  "technology": "electronics",
  "pet supplies": "pet supplies",
  "pets": "pet supplies",
  "pet": "pet supplies",
  "home living": "home living",
  "home": "home living",
  "living": "home living",
  "fitness": "fitness",
  "outdoor": "fitness",
  "sports": "fitness",
  "solar energy": "solar energy",
  "energy": "solar energy",
  "solar": "solar energy",
  "car accessories": "car accessories",
  "car": "car accessories",
  "auto": "car accessories",
  "automotive": "car accessories"
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? Math.round(amount * 100) / 100 : 0;
}

function resolveSector(raw: string) {
  const key = String(raw || "").toLowerCase().trim();
  if (!key) return SELECTED[0]?.sector || "beauty";
  if (SECTOR_ALIASES[key]) return SECTOR_ALIASES[key];
  for (const [alias, sector] of Object.entries(SECTOR_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return sector;
  }
  return key;
}

function curated(sector: string) {
  return SELECTED
    .filter((p) => !p.sector || String(p.sector).toLowerCase() === sector)
    .map((p, i) => ({
      id: String(p.id || `printify-selected-${i}`),
      sku: String(p.sku || ""),
      supplier: "Printify",
      provider: "printify",
      printifyProductId: String(p.printifyProductId || ""),
      printifyVariantId: String(p.printifyVariantId || ""),
      name: String(p.name || "Printify product"),
      category: String(p.category || sector),
      supplierPriceUsd: money(p.supplierPriceUsd) || money(p.suggestedRetailUsd),
      suggestedRetailUsd: money(p.suggestedRetailUsd) || money(p.supplierPriceUsd),
      image: String(p.image || ""),
      matchType: String(p.matchType || ""),
      sector: String(p.sector || sector),
    }))
    .filter((p) => p.suggestedRetailUsd > 0 && p.name);
}

function haystack(p: any) {
  return [p.name, p.title, p.category, ...(Array.isArray(p.tags) ? p.tags : []), p.sku].join(" ").toLowerCase();
}

async function enrichFromLive(token: string, shopId: string, curatedProducts: any[]) {
  try {
    const apiUrl = new URL(BASE + `/shops/${shopId}/products.json`);
    apiUrl.searchParams.set("limit", "50");
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, "User-Agent": "NordicStore/1.0" },
    });
    if (!response.ok) return curatedProducts;
    const result: any = await response.json();
    const list = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    if (!list.length) return curatedProducts;
    const typeWords: Record<string, string[]> = {
      tote: ["tote", "bag"], tee: ["t-shirt", "tshirt", "tee", "shirt"], mug: ["mug", "cup", "coffee"],
      crewneck: ["crewneck", "crew neck", "sweatshirt"], hoodie: ["hoodie", "zip"],
      poster: ["poster", "print"], case: ["case", "phone", "tough"], cap: ["cap", "hat"],
    };
    return curatedProducts.map((item) => {
      const words = typeWords[String(item.matchType || "").toLowerCase()] || [];
      const match = list.find((live: any) => {
        const id = String(live?.id || "");
        if (item.printifyProductId && id && id === item.printifyProductId) return true;
        if (!words.length) return false;
        const text = haystack({ name: live?.title, tags: live?.tags, sku: "" });
        return words.some((w) => text.includes(w));
      });
      if (!match) return item;
      const variants = Array.isArray(match.variants) ? match.variants : [];
      const enabled = variants.find((v: any) => v?.is_enabled !== false) || variants[0] || {};
      const images = Array.isArray(match.images) ? match.images : [];
      const image = images.find((img: any) => img?.is_default)?.src || images[0]?.src || item.image;
      const cost = money(enabled.cost);
      const retail = money(enabled.price) || (cost > 0 ? Math.round(cost * 2.2 * 100) / 100 : 0);
      return {
        ...item,
        printifyProductId: String(match.id || item.printifyProductId || ""),
        printifyVariantId: String(enabled.id || item.printifyVariantId || ""),
        sku: String(enabled.sku || item.sku || ""),
        supplierPriceUsd: cost || item.supplierPriceUsd,
        suggestedRetailUsd: retail || item.suggestedRetailUsd,
        image: image || item.image,
        enriched: true,
      };
    });
  } catch (_) {
    return curatedProducts;
  }
}

export async function onRequestGet(context: any) {
  const url = new URL(context.request.url);
  const wanted = url.searchParams.get("q") || url.searchParams.get("sector") || "";
  const defaultSector = String(SELECTED[0]?.sector || "beauty");
  const sector = resolveSector(wanted || defaultSector);
  const headers = { "access-control-allow-origin": "*", "cache-control": "public, max-age=60" };
  let products = curated(sector).slice(0, 30);
  const token = context.env.PRINTIFY_API_TOKEN;
  const shopId = context.env.PRINTIFY_SHOP_ID || "28847802";
  if (token && products.length) {
    products = await enrichFromLive(String(token), String(shopId), products);
  }
  return Response.json(
    { ok: true, supplier: "printify", sector, query: sector, products, count: products.length, source: "printify-selected-primary", markets: ["NO", "EU", "PE"] },
    { status: products.length ? 200 : 503, headers }
  );
}
