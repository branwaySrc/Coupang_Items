import { AffiliateBanner } from "@/components/affiliate-banner";
import { CoupangSearchHero } from "@/components/coupang-search-hero";
import { ProductSearch } from "@/components/product-search";
import { ProductSection } from "@/components/product-section";
import { SiteFooter } from "@/components/site-footer";
import { CATEGORIES } from "@/data/categories";
import { getProductsByCategory, PRODUCTS } from "@/data/products";

export default function Home() {
	return (
		<main className="site-shell">
			<AffiliateBanner />
			<ProductSearch products={PRODUCTS} />
			<CoupangSearchHero />

			<div className="page-container section-stack">
				{CATEGORIES.map(category => (
					<ProductSection category={category} key={category.slug} products={getProductsByCategory(category.slug)} />
				))}
			</div>
			<SiteFooter />
		</main>
	);
}
