import Link from "next/link";
import { AffiliateBanner } from "@/components/affiliate-banner";
import type { Category } from "@/data/categories";
import type { ProductItem } from "@/data/products";
import { ProductCard } from "./product-card";
import { SiteFooter } from "./site-footer";

type CategoryCatalogProps = {
  category: Category;
  products: ProductItem[];
};

export function CategoryCatalog({ category, products }: CategoryCatalogProps) {
  return (
    <main className="site-shell">
      <AffiliateBanner />
      <header className="catalog-topbar">
        <div className="page-container catalog-topbar-inner">
          <Link aria-label="메인으로 돌아가기" className="back-arrow" href="/">
            ←
          </Link>
          <h1>{category.title}</h1>
        </div>
      </header>

      <div className="page-container">
        <section className="catalog-section">
          <div className="catalog-header">
            <div>
              <p className="section-kicker">All items</p>
              <h2>{category.title}</h2>
              <p className="catalog-description">{category.description}</p>
            </div>
          </div>

          <div className="catalog-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
