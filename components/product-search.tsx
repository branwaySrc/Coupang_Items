"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { ProductItem } from "@/data/products";
import { chosungSearch } from "@/lib/chosung";

const CATEGORY_LABELS: Record<ProductItem["category"], string> = {
	goods: "카페 잡화",
	kitchen: "카페 주방",
	materials: "카페 재료",
};

type ProductSearchProps = {
	limit?: number;
	products: ProductItem[];
};

function getProductSearchText(product: ProductItem) {
	return [product.name, product.tag, product.description].filter(Boolean).join(" ");
}

function getSearchImageSrc(image: string) {
	return image === "need image" ? undefined : image;
}

export function ProductSearch({ limit = 8, products }: ProductSearchProps) {
	const [query, setQuery] = useState("");
	const trimmedQuery = query.trim();
	const results = useMemo(
		() =>
			chosungSearch(
				{
					getText: getProductSearchText,
					limit,
					query,
				},
				products,
			),
		[limit, products, query],
	);
	const hasQuery = trimmedQuery.length > 0;

	return (
		<section className="product-search-shell">
			<div className="page-container">
				<div className="product-search">
					<label className="product-search-label" htmlFor="registered-product-search">
						등록제품 검색
					</label>
					<div className="product-search-input-wrap">
						<Search aria-hidden="true" className="product-search-icon" size={20} strokeWidth={2.2} />
						<input
							autoComplete="off"
							className="product-search-input"
							id="registered-product-search"
							onChange={event => setQuery(event.target.value)}
							placeholder="등록제품 검색"
							type="search"
							value={query}
						/>
						{hasQuery ? (
							<button
								aria-label="검색어 지우기"
								className="product-search-clear"
								onClick={() => setQuery("")}
								type="button"
							>
								<X aria-hidden="true" size={18} strokeWidth={2.4} />
							</button>
						) : null}
					</div>

					{hasQuery ? (
						<div className="product-search-results">
							{results.length > 0 ? (
								results.map(product => {
									const hasReadyLink = product.link !== "need link";
									const imageSrc = getSearchImageSrc(product.image);
									const content = (
										<>
											<span className="product-search-result-image">
												{imageSrc ? <img alt={`${product.name} 이미지`} src={imageSrc} /> : <span>IMG</span>}
											</span>
											<span className="product-search-result-copy">
												<span className="product-search-result-top">
													<strong>{product.name}</strong>
													<span>{CATEGORY_LABELS[product.category]}</span>
												</span>
												<span className="product-search-result-description">{product.description}</span>
											</span>
										</>
									);

									if (!hasReadyLink) {
										return (
											<span aria-disabled="true" className="product-search-result is-disabled" key={product.id}>
												{content}
											</span>
										);
									}

									return (
										<a
											className="product-search-result"
											href={product.link}
											key={product.id}
											rel="noopener noreferrer"
											target="_blank"
										>
											{content}
										</a>
									);
								})
							) : (
								<p className="product-search-empty">검색 결과가 없습니다.</p>
							)}
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
