import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the cafe commerce curation home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Cafe Shelf/);
  assert.match(html, /쿠팡 카페 아이템 큐레이션/);
  assert.match(html, /카페에서 쓰기 좋은 쿠팡 아이템을 한눈에/);
  assert.match(html, /카페에서 사용하기 좋은 쿠팡 아이템/);
  assert.match(html, /카페 공간을 위한 최적 쿠팡 아이템/);
  assert.match(html, /수박/);
  assert.match(html, /연유/);
  assert.match(html, /서랍형 정리함/);
  assert.match(html, /https:\/\/link\.coupang\.com\/a\/fHJNoeLjvU/);
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|SkeletonPreview|signin-with-chatgpt/i,
  );
});

test("removes starter preview surface", async () => {
  const [css, page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /hero-store/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
