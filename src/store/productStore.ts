import { create } from "zustand";

export type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  imagePlaceholder: string;
  imageUrl: string;
  description: string;
  category: string;
  slug: string;
};

type ProductStore = {
  products: Product[];
  featuredProducts: number[];
  getProductById: (id: number) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
  getFeaturedProducts: () => Product[];
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [
    {
      id: 1,
      name: "정통사주",
      price: 39900,
      discountPrice: 35000,
      imagePlaceholder: "정통사주 이미지",
      imageUrl: "/imgs/jungtong_thumbnail.png",
      description:
        "생년월일시를 바탕으로 사주팔자를 정확하게 분석하여 운세, 직업, 재물운, 건강 등을 상세하게 풀이해드립니다.",
      category: "사주풀이",
      slug: "traditional-saju",
    },
    {
      id: 2,
      name: "신년운세",
      price: 29900,
      discountPrice: 19000,
      imagePlaceholder: "신년운세 이미지",
      imageUrl: "/imgs/newYear_thumbnail.png",
      description:
        "새해를 맞이하여 한 해 동안의 운세를 미리 알아보고 미래를 준비할 수 있도록 도와드립니다.",
      category: "운세",
      slug: "new-year-fortune",
    },
    {
      id: 3,
      name: "궁합사주",
      price: 55000,
      discountPrice: 37000,
      imagePlaceholder: "궁합사주 이미지",
      imageUrl: "/imgs/lover_thumbnail.png",
      description:
        "두 사람의 사주를 비교하여 연애, 결혼 궁합을 알아보고 관계의 발전 방향을 제시해드립니다.",
      category: "사주풀이",
      slug: "compatibility-saju",
    },
    {
      id: 4,
      name: "연애운",
      price: 24900,
      discountPrice: 18900,
      imagePlaceholder: "연애운 이미지",
      imageUrl: "/imgs/love_thumbnail.png",
      description:
        "당신의 연애 운세를 분석하여 현재와 미래의 사랑 관계에 대한 통찰력을 제공합니다.",
      category: "운세",
      slug: "love-fortune",
    },
    {
      id: 5,
      name: "월별운세",
      price: 29900,
      discountPrice: 12900,
      imagePlaceholder: "월별운세 이미지",
      imageUrl: "/imgs/monthly_thumbnail.png",
      description:
        "매월 변화하는 운세를 미리 확인하고 중요한 결정과 행동에 참고할 수 있습니다.",
      category: "운세",
      slug: "monthly-fortune",
    },
  ],
  featuredProducts: [1, 2, 3, 4, 5], // 모든 상품이 인기 상품으로 표시

  getProductById: (id) => {
    return get().products.find((product) => product.id === id);
  },

  getProductBySlug: (slug) => {
    return get().products.find((product) => product.slug === slug);
  },

  getFeaturedProducts: () => {
    const { products, featuredProducts } = get();
    return products.filter((product) => featuredProducts.includes(product.id));
  },
}));
