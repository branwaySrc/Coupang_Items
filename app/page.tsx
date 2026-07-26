const COUPANG_LINK = "https://link.coupang.com/a/fHJNoeLjvU";

const heroProducts = [
  {
    name: "수박",
    label: "여름 음료 베이스",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "연유",
    label: "라떼와 빙수 토핑",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "서랍형 정리함",
    label: "카운터 수납",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = [
  {
    id: "consumables",
    eyebrow: "Consumables",
    title: "카페에서 사용하기 좋은 쿠팡 아이템",
    description:
      "음료 제조, 토핑, 시즌 메뉴에 바로 활용하기 좋은 소비재 중심으로 묶었습니다.",
    products: [
      {
        name: "수박",
        use: "수박주스, 시즌 컵과일, 빙수 토핑",
        tag: "시즌 메뉴",
        image:
          "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "연유",
        use: "돌체라떼, 베트남 커피, 빙수 베이스",
        tag: "음료 베이스",
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "말차 파우더",
        use: "말차라떼, 크림 라떼, 디저트 데코",
        tag: "파우더",
        image:
          "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "바닐라 시럽",
        use: "아이스라떼, 플랫화이트, 시그니처 메뉴",
        tag: "시럽",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "space",
    eyebrow: "Cafe space",
    title: "카페 공간을 위한 최적 쿠팡 아이템",
    description:
      "카운터, 바 테이블, 재고 선반처럼 매일 보는 공간을 정돈하는 아이템입니다.",
    products: [
      {
        name: "서랍형 정리함",
        use: "빨대, 냅킨, 영수증, 소형 비품 분류",
        tag: "수납",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "원두 밀폐 용기",
        use: "원두 향 보존, 로스팅 날짜별 관리",
        tag: "보관",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "컵 디스펜서",
        use: "테이크아웃 컵 동선 정리",
        tag: "카운터",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "트레이",
        use: "픽업존, 디저트 진열, 테이블 세팅",
        tag: "진열",
        image:
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "operations",
    eyebrow: "Operations",
    title: "매장 운영에 필요한 소모품",
    description:
      "재고가 떨어지면 바로 불편해지는 필수 소모품을 운영 관점으로 정리했습니다.",
    products: [
      {
        name: "테이크아웃 컵",
        use: "아이스 음료, 시즌 컵, 배달 포장",
        tag: "포장",
        image:
          "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "컵 캐리어",
        use: "단체 주문, 배달, 픽업 안정성",
        tag: "배달",
        image:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "냅킨",
        use: "셀프바, 테이블, 포장 세트",
        tag: "셀프바",
        image:
          "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "위생장갑",
        use: "디저트 포장, 과일 손질, 마감 청소",
        tag: "위생",
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const quickFilters = ["소비재", "공간 정리", "운영 소모품", "시즌 메뉴"];

export default function Home() {
  return (
    <main className="commerce-shell">
      <header className="store-header" aria-label="Cafe Shelf navigation">
        <a className="brand" href="#">
          <span className="brand-mark">CS</span>
          <span>Cafe Shelf</span>
        </a>
        <nav className="nav-links" aria-label="Main menu">
          <a href="#consumables">소비재</a>
          <a href="#space">공간</a>
          <a href="#operations">운영</a>
        </nav>
        <a className="header-button" href={COUPANG_LINK}>
          쿠팡 링크
        </a>
      </header>

      <section className="hero-store">
        <div className="hero-copy">
          <p className="eyebrow">Cafe commerce curation</p>
          <h1>카페에서 쓰기 좋은 쿠팡 아이템을 한눈에</h1>
          <p>
            소비재부터 공간 정리, 운영 소모품까지 카페 운영자가 자주 찾는
            아이템을 카테고리별로 빠르게 둘러볼 수 있게 구성했습니다.
          </p>
          <div className="filter-row" aria-label="추천 카테고리">
            {quickFilters.map((filter) => (
              <a key={filter} href={COUPANG_LINK}>
                {filter}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-product-grid" aria-label="대표 추천 아이템">
          {heroProducts.map((product) => (
            <a className="hero-product" href={COUPANG_LINK} key={product.name}>
              <img src={product.image} alt="" />
              <span>{product.label}</span>
              <strong>{product.name}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-strip" aria-label="빠른 구매 포인트">
        <div>
          <span>Today pick</span>
          <strong>수박, 연유, 서랍형 정리함</strong>
        </div>
        <div>
          <span>Best use</span>
          <strong>시즌 메뉴와 카운터 정돈</strong>
        </div>
        <a href={COUPANG_LINK}>쿠팡에서 전체 보기</a>
      </section>

      {categories.map((category) => (
        <section className="category-section" id={category.id} key={category.id}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{category.eyebrow}</p>
              <h2>{category.title}</h2>
            </div>
            <p>{category.description}</p>
          </div>
          <div className="product-grid">
            {category.products.map((product) => (
              <article className="product-card" key={product.name}>
                <a className="product-image" href={COUPANG_LINK}>
                  <img src={product.image} alt="" />
                  <span>{product.tag}</span>
                </a>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.use}</p>
                  <div className="product-actions">
                    <a href={COUPANG_LINK}>쿠팡에서 보기</a>
                    <span>추천 아이템</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
