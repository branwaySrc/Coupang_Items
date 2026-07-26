import Link from "next/link";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { CoupangSearchHero } from "@/components/coupang-search-hero";
import type { Category } from "@/data/categories";
import type { ProductItem } from "@/data/products";
import { ProductCard } from "./product-card";

type CategoryCatalogProps = {
  category: Category;
  products: ProductItem[];
};

export function CategoryCatalog({ category, products }: CategoryCatalogProps) {
  return (
    <main className="site-shell">
      <AffiliateBanner />
      <CoupangSearchHero />
      <div className="page-container">
        <section className="catalog-section">
          <div className="catalog-header">
            <div>
              <p className="section-kicker">All items</p>
              <h1>{category.title}</h1>
              <p className="catalog-description">{category.description}</p>
            </div>
            <Link className="back-link" href="/">
              메인으로 돌아가기
            </Link>
          </div>

          <div className="catalog-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
