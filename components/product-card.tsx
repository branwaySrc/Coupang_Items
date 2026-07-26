import { getProductUrl, type ProductItem } from "@/data/products";

type ProductCardProps = {
  className?: string;
  product: ProductItem;
};

export function ProductCard({ className, product }: ProductCardProps) {
  return (
    <article className={["product-card", className].filter(Boolean).join(" ")}>
      <a className="product-image" href={getProductUrl(product)}>
        <img alt={product.name} src={product.image} />
        {product.tag ? <span className="product-tag">{product.tag}</span> : null}
      </a>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <a className="product-action" href={getProductUrl(product)}>
          쿠팡에서 보기
        </a>
      </div>
    </article>
  );
}
