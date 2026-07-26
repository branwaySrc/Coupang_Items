import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("product cards are full-card outbound links without badges or CTA buttons", async () => {
  const card = await readFile(
    new URL("../components/product-card.tsx", import.meta.url),
    "utf8",
  );
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(card, /className=\{\["product-card"/);
  assert.match(card, /target="_blank"/);
  assert.match(card, /rel="noopener noreferrer"/);
  assert.doesNotMatch(card, /product-action|product-tag|쿠팡에서 보기/);
  assert.doesNotMatch(css, /\.product-action|\.product-tag|\.back-link/);
});

test("category pages have a top back header with the category title", async () => {
  const catalog = await readFile(
    new URL("../components/category-catalog.tsx", import.meta.url),
    "utf8",
  );

  assert.match(catalog, /catalog-topbar/);
  assert.match(catalog, /back-arrow/);
  assert.match(catalog, /from "lucide-react"/);
  assert.match(catalog, /<ArrowLeft/);
  assert.match(catalog, /\{category\.title\}/);
  assert.doesNotMatch(catalog, /CoupangSearchHero|back-link/);
});

test("home page includes footer and section more links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const section = await readFile(
    new URL("../components/product-section.tsx", import.meta.url),
    "utf8",
  );
  const footer = await readFile(
    new URL("../components/site-footer.tsx", import.meta.url),
    "utf8",
  );
  const hero = await readFile(
    new URL("../components/coupang-search-hero.tsx", import.meta.url),
    "utf8",
  );
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /SiteFooter/);
  assert.match(section, /section-more/);
  assert.match(section, /추천 아이템 모두보기/);
  assert.match(footer, /김프로/);
  assert.match(footer, /김민기/);
  assert.match(footer, /millimceo@gmail\.com/);
  assert.match(css, /\.site-footer\s*\{[\s\S]*background:\s*#0f172a/);
  assert.match(css, /\.footer-inner\s*\{[\s\S]*color:\s*#ffffff/);
  assert.match(hero, /target="_blank"/);
  assert.match(hero, /https:\/\/coupa\.ng\/cokQWt/);
});

test("layout and routes remain Vercel-compatible", async () => {
  const [materials, kitchen, goods, css, layout, products] = await Promise.all([
    readFile(new URL("../app/materials/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/kitchen/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/goods/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/products.ts", import.meta.url), "utf8"),
  ]);

  assert.match(materials, /getProductsByCategory\("materials"\)/);
  assert.match(kitchen, /getProductsByCategory\("kitchen"\)/);
  assert.match(goods, /getProductsByCategory\("goods"\)/);
  assert.match(css, /max-width:\s*1280px/);
  assert.match(css, /justify-content:\s*space-between/);
  assert.match(css, /font-family:\s*var\(--font-inter\)/);
  assert.match(css, /\.hero h1\s*\{[\s\S]*font-weight:\s*700/);
  assert.match(css, /\.section-header h2,[\s\S]*font-weight:\s*700/);
  assert.match(css, /\.product-title\s*\{[\s\S]*font-weight:\s*700/);
  assert.match(layout, /import \{ Inter \} from "next\/font\/google"/);
  assert.match(layout, /variable:\s*"--font-inter"/);
  assert.match(layout, /김프로 \| 쿠팡 카페 아이템 추천/);
  assert.match(products, /DEFAULT_COUPANG_URL = "https:\/\/link\.coupang\.com\/a\/fH4sry2mJM"/);
  assert.doesNotMatch(layout + products, /Cafe Shelf|Starter Project|codex-preview|Geist/);
});
