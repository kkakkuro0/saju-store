"use client";

import Link from "next/link";
import Image from "next/image";
import { useProductStore } from "../store/productStore";
import { useMemo } from "react";

export default function FeaturedProducts() {
  // 직접적으로 상태 자체를 가져옵니다.
  const products = useProductStore((state) => state.products);
  const featuredProductIds = useProductStore((state) => state.featuredProducts);

  // useMemo를 사용하여 계산된 값을 메모이제이션합니다.
  const featuredProducts = useMemo(() => {
    return products.filter((product) =>
      featuredProductIds.includes(product.id)
    );
  }, [products, featuredProductIds]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            인기 사주풀이 서비스
          </h2>
          <p className="mt-4 text-gray-800">
            가장 많은 분들이 선택한 인기 사주풀이 서비스를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden bg-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                  {Math.round(
                    (1 - product.discountPrice / product.price) * 100
                  )}
                  % 할인
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-sm text-gray-700">
                    {product.category}
                  </span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {product.discountPrice.toLocaleString()}원
                  </span>
                  <span className="ml-2 text-sm text-gray-700 line-through">
                    {product.price.toLocaleString()}원
                  </span>
                </div>
                <p className="mt-2 mb-4 flex-grow text-sm text-gray-800 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-md bg-indigo-700 py-2 text-sm font-medium text-white transition hover:bg-indigo-800">
                    상세보기
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            모든 서비스 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
