import { create } from "zustand";
import { useProductStore } from "./productStore";

export type Category = {
  id: number;
  name: string;
  description: string;
  imagePlaceholder: string;
  imageUrl: string;
  slug: string;
};

type CategoryStore = {
  categories: Category[];
  getCategoryById: (id: number) => Category | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getProductCountByCategory: (categoryName: string) => number;
};

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [
    {
      id: 1,
      name: "사주풀이",
      description: "생년월일시를 바탕으로 타고난 사주와 운명을 분석해드립니다.",
      imagePlaceholder: "사주풀이 이미지",
      imageUrl: "/imgs/jungtong_thumbnail.png",
      slug: "saju",
    },
    {
      id: 2,
      name: "운세",
      description: "다양한 운세 서비스로 미래를 준비하는 지혜를 드립니다.",
      imagePlaceholder: "운세 이미지",
      imageUrl: "/imgs/newYear_thumbnail.png",
      slug: "fortune",
    },
    {
      id: 3,
      name: "궁합",
      description: "두 사람의 관계를 분석하여 최적의 조화를 찾아드립니다.",
      imagePlaceholder: "궁합 이미지",
      imageUrl: "/imgs/lover_thumbnail.png",
      slug: "compatibility",
    },
    {
      id: 4,
      name: "타로",
      description: "타로카드를 통해 현재와 미래에 대한 통찰력을 제공합니다.",
      imagePlaceholder: "타로 이미지",
      imageUrl: "/imgs/love_thumbnail.png",
      slug: "tarot",
    },
  ],

  getCategoryById: (id) => {
    return get().categories.find((category) => category.id === id);
  },

  getCategoryBySlug: (slug) => {
    return get().categories.find((category) => category.slug === slug);
  },

  getProductCountByCategory: (categoryName) => {
    const products = useProductStore.getState().products;
    return products.filter((product) => product.category === categoryName)
      .length;
  },
}));
