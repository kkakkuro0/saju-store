"use client";

import Link from "next/link";
import Image from "next/image";
import { useCategoryStore } from "../store/categoryStore";
import type { Category } from "../store/categoryStore";

export default function CategorySection() {
  // 직접 상태 값을 가져옵니다.
  const categories = useCategoryStore((state) => state.categories);
  const getProductCountByCategory = useCategoryStore(
    (state) => state.getProductCountByCategory
  );

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            서비스 카테고리
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            다양한 서비스 카테고리에서 당신에게 필요한 운세를 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category: Category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-gray-900"
            >
              <div className="aspect-video w-full relative">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    {getProductCountByCategory(category.name)}개
                  </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <div className="mt-4 text-primary group-hover:underline">
                  자세히 보기 →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/categories"
            className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90"
          >
            모든 카테고리 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
