import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage uses the Kimpro structure and Coupang integrations", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const hero = await readFile(
    new URL("../components/coupang-search-hero.tsx", import.meta.url),
    "utf8",
  );
  const products = await readFile(
    new URL("../data/products.ts", import.meta.url),
    "utf8",
  );
  const banner = await readFile(
    new URL("../components/affiliate-banner.tsx", import.meta.url),
    "utf8",
  );

  assert.match(hero, /김프로/);
  assert.match(hero, /DEFAULT_COUPANG_URL/);
  assert.match(products, /https:\/\/link\.coupang\.com\/a\/fH4sry2mJM/);
  assert.match(hero, /https:\/\/coupa\.ng\/cokQWt/);
  assert.match(banner, /쿠팡 파트너스 활동의 일환/);
  assert.match(page, /ProductSection/);
  assert.doesNotMatch(
    page + hero + banner + products,
    /Cafe Shelf|codex-preview|react-loading-skeleton|signin-with-chatgpt/i,
  );
});

test("product constants expose the requested categories and enough items", async () => {
  const categories = await readFile(
    new URL("../data/categories.ts", import.meta.url),
    "utf8",
  );
  const products = await readFile(
    new URL("../data/products.ts", import.meta.url),
    "utf8",
  );

  assert.match(categories, /카페 재료/);
  assert.match(categories, /카페 주방/);
  assert.match(categories, /카페 잡화/);
  assert.match(products, /CategorySlug = "materials" \| "kitchen" \| "goods"/);
  assert.match(products, /DEFAULT_COUPANG_URL = "https:\/\/link\.coupang\.com\/a\/fH4sry2mJM"/);
  assert.ok((products.match(/category: "materials"/g) ?? []).length >= 10);
  assert.ok((products.match(/category: "kitchen"/g) ?? []).length >= 10);
  assert.ok((products.match(/category: "goods"/g) ?? []).length >= 10);
});

test("category routes and responsive layout are present", async () => {
  const [materials, kitchen, goods, css, layout] = await Promise.all([
    readFile(new URL("../app/materials/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/kitchen/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/goods/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(materials, /getProductsByCategory\("materials"\)/);
  assert.match(kitchen, /getProductsByCategory\("kitchen"\)/);
  assert.match(goods, /getProductsByCategory\("goods"\)/);
  assert.match(css, /max-width:\s*1280px/);
  assert.match(css, /grid-template-columns:\s*repeat\(5, minmax\(0, 1fr\)\)/);
  assert.match(css, /grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(layout, /김프로 \| 쿠팡 카페 아이템 추천/);
  assert.doesNotMatch(layout, /Cafe Shelf|Starter Project|codex-preview/);
});
