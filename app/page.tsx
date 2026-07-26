const heroImage =
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=85";

const buyingGuides = [
  {
    category: "홈카페 스타터",
    title: "처음 사도 오래 쓰는 핸드드립 기본 세트",
    summary:
      "드리퍼, 서버, 필터, 저울까지 과하지 않은 구성으로 시작하는 데일리 브루잉 가이드.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    search: "핸드드립 세트",
    meta: "5분 읽기",
  },
  {
    category: "정리 아이템",
    title: "작은 주방을 카페 바처럼 정돈하는 수납 리스트",
    summary:
      "컵 홀더, 시럽 펌프, 원두 보관 용기처럼 동선과 분위기를 함께 바꾸는 제품만 모았습니다.",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    search: "카페 수납 정리",
    meta: "7분 읽기",
  },
  {
    category: "콜드브루",
    title: "여름 매출을 만드는 콜드브루 병입 루틴",
    summary:
      "추출 용기, 유리병, 라벨링 소품까지 홈카페와 소형 매장 모두에 맞는 체크리스트.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    search: "콜드브루 메이커",
    meta: "6분 읽기",
  },
];

const essentials = [
  "전동 그라인더",
  "스테인리스 탬퍼",
  "원두 밀폐 용기",
  "컵 디스펜서",
  "시럽 펌프",
  "드립포트",
];

const notes = [
  {
    title: "구매 전 체크",
    body: "용량, 세척 난이도, 보관 공간을 먼저 보고 브랜드는 그 다음에 비교합니다.",
  },
  {
    title: "콘텐츠 톤",
    body: "제품 나열보다 실제 사용 장면, 설치 전후, 맛의 변화처럼 결정에 도움이 되는 글을 우선합니다.",
  },
  {
    title: "쿠팡 연결",
    body: "각 글의 구매 버튼은 상품명 중심의 쿠팡 검색으로 이어지도록 구성했습니다.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Cafe Shelf navigation">
        <a className="brand" href="#">
          <span className="brand-mark">CS</span>
          <span>Cafe Shelf</span>
        </a>
        <nav className="nav-links" aria-label="Main menu">
          <a href="#guides">가이드</a>
          <a href="#essentials">아이템</a>
          <a href="#journal">저널</a>
        </nav>
        <a
          className="nav-action"
          href="https://www.coupang.com/np/search?q=%EC%B9%B4%ED%8E%98%EC%9A%A9%ED%92%88"
        >
          쿠팡에서 찾기
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Cafe goods buying journal</p>
          <h1>집에서도, 작은 매장에서도 카페답게 고르는 법</h1>
          <p className="hero-text">
            Cafe Shelf는 카페 관련 아이템을 과하게 소개하지 않고, 실제로
            쓰임이 좋은 제품군과 구매 기준을 정리하는 심플한 블로그입니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#guides">
              추천 글 보기
            </a>
            <a
              className="secondary-button"
              href="https://www.coupang.com/np/search?q=%ED%99%88%EC%B9%B4%ED%8E%98"
            >
              홈카페 검색
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="커피 추출 도구가 놓인 카페 테이블" />
          <div className="hero-panel">
            <span>이번 주 큐레이션</span>
            <strong>핸드드립, 보관, 콜드브루</strong>
          </div>
        </div>
      </section>

      <section id="guides" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Buying guides</p>
          <h2>카페 아이템 구매 가이드</h2>
        </div>
        <div className="guide-grid">
          {buyingGuides.map((guide) => (
            <article className="guide-card" key={guide.title}>
              <img src={guide.image} alt="" />
              <div className="guide-content">
                <div className="card-meta">
                  <span>{guide.category}</span>
                  <span>{guide.meta}</span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <a
                  href={`https://www.coupang.com/np/search?q=${encodeURIComponent(
                    guide.search,
                  )}`}
                >
                  쿠팡에서 비교하기
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="essentials" className="essentials-section">
        <div>
          <p className="eyebrow">Essentials</p>
          <h2>글감이 되는 카페 필수 아이템</h2>
          <p>
            블로그 운영 초반에는 검색 의도가 분명한 아이템부터 다루면 좋습니다.
            제품명보다 문제 해결 중심으로 제목을 잡아 구매 전환까지 자연스럽게
            이어지도록 구성했습니다.
          </p>
        </div>
        <div className="tag-grid" aria-label="추천 아이템 키워드">
          {essentials.map((item) => (
            <a
              key={item}
              href={`https://www.coupang.com/np/search?q=${encodeURIComponent(
                item,
              )}`}
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <section id="journal" className="journal-section">
        {notes.map((note) => (
          <article key={note.title}>
            <span>{note.title}</span>
            <p>{note.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
