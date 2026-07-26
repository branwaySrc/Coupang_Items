import type { CategorySlug } from "./products";

export type Category = {
	slug: CategorySlug;
	label: string;
	title: string;
	description: string;
};

export const CATEGORIES: Category[] = [
	{
		slug: "materials",
		label: "카페 재료",
		title: "카페 재료",
		description: "맛 보장, 가격은 보다 더 합리적인 카페 재료!",
	},
	{
		slug: "kitchen",
		label: "카페 주방",
		title: "카페 주방",
		description: "카페 수납 및 정리에 탁월한 가성비 주방용품!",
	},
	{
		slug: "goods",
		label: "카페 잡화",
		title: "카페 잡화",
		description: "포장 등, 매장 운영에 필요한 가성비 소모템!",
	},
];

export function getCategoryBySlug(slug: CategorySlug) {
	return CATEGORIES.find(category => category.slug === slug);
}
