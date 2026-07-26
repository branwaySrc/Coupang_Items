import { getProductUrl, type ProductItem } from "@/data/products";

type ProductCardProps = {
  className?: string;
  product: ProductItem;
};

export function ProductCard({ className, product }: ProductCardProps) {
  return (
    <a
      className={["product-card", className].filter(Boolean).join(" ")}
      href={getProductUrl(product)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="product-image">
        <img alt={product.name} src={product.image} />
      </span>
      <span className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </span>
    </a>
  );
}
