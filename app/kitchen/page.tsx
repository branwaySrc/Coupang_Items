import { CategoryCatalog } from "@/components/category-catalog";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export default function KitchenPage() {
  const category = getCategoryBySlug("kitchen");
  if (!category) return null;

  return (
    <CategoryCatalog
      category={category}
      products={getProductsByCategory("kitchen")}
    />
  );
}
