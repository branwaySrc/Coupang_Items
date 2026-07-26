import Link from "next/link";
import type { Category } from "@/data/categories";
import type { ProductItem } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductSectionProps = {
  category: Category;
  products: ProductItem[];
};

export function ProductSection({ category, products }: ProductSectionProps) {
  const previewProducts = products.slice(0, 10);

  return (
    <section className="product-section" id={category.slug}>
      <div className="section-header">
        <div>
          <p className="section-kicker">Kimpro pick</p>
          <h2>{category.title}</h2>
          <p className="section-description">{category.description}</p>
        </div>
        <Link className="section-more" href={`/${category.slug}`}>
          추천 아이템 모두보기
        </Link>
      </div>

      <div className="product-grid">
        {previewProducts.map((product, index) => (
          <ProductCard
            className={index >= 5 ? "mobile-extra-card" : undefined}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
