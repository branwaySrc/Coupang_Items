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
    description: "음료 베이스, 파우더, 시럽처럼 메뉴 구성에 바로 쓰기 좋은 재료입니다.",
  },
  {
    slug: "kitchen",
    label: "카페 주방",
    title: "카페 주방",
    description: "추출, 계량, 보관, 세척까지 카페 주방 동선을 정돈하는 아이템입니다.",
  },
  {
    slug: "goods",
    label: "카페 잡화",
    title: "카페 잡화",
    description: "포장, 테이블, 셀프바, 매장 운영에 자주 필요한 잡화입니다.",
  },
];

export function getCategoryBySlug(slug: CategorySlug) {
  return CATEGORIES.find((category) => category.slug === slug);
}
