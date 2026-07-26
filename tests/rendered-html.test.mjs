import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage contains the cafe commerce curation content", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Cafe Shelf/);
  assert.match(page, /카페에서 쓰기 좋은 쿠팡 아이템을 한눈에/);
  assert.match(page, /카페에서 사용하기 좋은 쿠팡 아이템/);
  assert.match(page, /카페 공간을 위한 최적 쿠팡 아이템/);
  assert.match(page, /수박/);
  assert.match(page, /연유/);
  assert.match(page, /서랍형 정리함/);
  assert.match(page, /https:\/\/link\.coupang\.com\/a\/fHJNoeLjvU/);
  assert.doesNotMatch(
    page,
    /codex-preview|react-loading-skeleton|SkeletonPreview|signin-with-chatgpt/i,
  );
});

test("package scripts are Vercel-compatible while preserving Sites commands", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.scripts["sites:build"], "vinext build");
  assert.doesNotMatch(packageJson.scripts.build, /vinext/);
});

test("metadata is specific to the ecommerce curation site", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(layout, /쿠팡 카페 아이템 큐레이션/);
  assert.match(css, /hero-store/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
});
