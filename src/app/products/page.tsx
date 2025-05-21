"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProductStore } from "../../store/productStore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const products = useProductStore((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 카테고리별로 필터링된 상품
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // 모든 카테고리 목록 (중복 제거)
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-4xl font-bold text-gray-900">
              사주풀이 서비스
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">
              개인 맞춤형 사주풀이로 당신의 내일을 밝혀드립니다
            </p>
          </div>

          {/* 개선된 카테고리 필터 */}
          <div className="mb-12">
            <div className="mx-auto mb-8 max-w-3xl rounded-xl bg-white p-2 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full px-6 py-2.5 font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-indigo-700 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  전체
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-6 py-2.5 font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-indigo-700 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 개선된 상품 목록 */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                    {Math.round(
                      (1 - product.discountPrice / product.price) * 100
                    )}
                    % 할인
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {product.category}
                    </span>
                  </div>
                  <div className="mb-3 flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      {product.discountPrice.toLocaleString()}원
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                  <p className="mb-5 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <button className="w-full rounded-lg bg-indigo-700 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-800 hover:shadow-md active:scale-95">
                    상세보기
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* 결과가 없을 때 */}
          {filteredProducts.length === 0 && (
            <div className="mt-16 rounded-lg bg-white p-8 text-center shadow-sm">
              <p className="text-lg text-gray-700">
                해당 카테고리의 상품이 없습니다.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 rounded-md bg-indigo-700 px-6 py-2 text-white hover:bg-indigo-800"
              >
                모든 상품 보기
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
