export const DEFAULT_COUPANG_URL = "https://link.coupang.com/a/fH4sry2mJM";

export type CategorySlug = "materials" | "kitchen" | "goods";

export type ProductItem = {
	id: string;
	category: CategorySlug;
	name: string;
	description: string;
	image: string;
	link: string;
	tag?: string;
};

export const PRODUCTS: ProductItem[] = [
	{
		id: "condensed-milk-n01",
		category: "materials",
		name: "소분하기 편한 연유",
		description: "작으니깐, 깨끗하게 관리할 수 있는 연유! 가격은 최고!",
		image:
			"https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/e37242d5-1720-4703-a864-e0266ff555c05163095470842979723.png",
		link: "https://link.coupang.com/a/fH9XtIUrFQ",
		tag: "연유",
	},
	{
		id: "condensed-milk-n02",
		category: "materials",
		name: "대용량 가성비 연유",
		description: "대용량, 최고의 가성비 연유! 매출 최적화에 탁월!",
		image:
			"https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/stage/manual/4d431fcf5515896f91efb0f6747dacfc3602af4bbdbbfaee599a8981c258_1761295431149.png",
		link: "https://link.coupang.com/a/fH9YKcIjnM",
		tag: "연유",
	},
	{
		id: "water-melon",
		category: "materials",
		name: "일정한 맛 보장! 수박",
		description: "여름 최고의 베스트 셀러, 수박주스! 이걸로 만듭니다!",
		image:
			"https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2652915367047300-d878e306-add0-44bc-bf12-f3354fc1a741.png",
		link: "https://link.coupang.com/a/fH94CAgWKy",
		tag: "수박",
	},
	{
		id: "ref-tray-n01",
		category: "kitchen",
		name: "베이커리 냉동고 트레이 끝판왕!",
		description: "이걸로, 베이커리 정리는 끝났다! 튼튼한 내구성은 덤!",
		image:
			"//thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b722/a4cbab5345db6b6842591f3f3c01f980481d80a057b74afb611d73103ade.jpg",
		link: "https://link.coupang.com/a/fIauAOLPz2",
		tag: "소분통",
	},
];

export function getProductsByCategory(category: CategorySlug) {
	return PRODUCTS.filter(product => product.category === category);
}

export function getProductUrl(product: ProductItem) {
	return product.link;
}
