import { CategoryCatalog } from "@/components/category-catalog";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export default function MaterialsPage() {
  const category = getCategoryBySlug("materials");
  if (!category) return null;

  return (
    <CategoryCatalog
      category={category}
      products={getProductsByCategory("materials")}
    />
  );
}
