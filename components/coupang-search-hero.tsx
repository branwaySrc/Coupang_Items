import { DEFAULT_COUPANG_URL } from "@/data/products";

const iframeAttributes = { browsingtopics: "" } as Record<string, string>;

export function CoupangSearchHero() {
  return (
    <section className="hero">
      <div className="page-container">
        <div className="hero-card">
          <div className="hero-top">
            <a className="brand-lockup" href="/">
              <span className="brand-mark">김</span>
              <span>
                <span className="brand-name">김프로</span>
                <span className="brand-subtitle">쿠팡 카페 아이템 추천</span>
              </span>
            </a>
            <a className="coupang-link" href={DEFAULT_COUPANG_URL}>
              쿠팡 바로가기
            </a>
          </div>

          <h1>카페 운영에 필요한 쿠팡 아이템을 빠르게 찾아보세요</h1>
          <p className="hero-copy">
            카페 재료, 카페 주방, 카페 잡화까지 필요한 아이템을 심플하게
            정리했습니다. 아래 검색창에서 바로 쿠팡 상품을 찾아볼 수 있습니다.
          </p>

          <div className="search-frame">
            <iframe
              frameBorder="0"
              height="44"
              referrerPolicy="unsafe-url"
              scrolling="no"
              src="https://coupa.ng/cokQWt"
              title="쿠팡 상품 검색"
              width="100%"
              {...iframeAttributes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
