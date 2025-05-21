"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 - 왼쪽 정렬 */}
          <div className="flex flex-1 items-start justify-start">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-700">
                명리학도 사주박사
              </span>
            </Link>
          </div>

          {/* 데스크탑 메뉴 - 중앙 정렬 */}
          <nav className="hidden flex-1 justify-center space-x-8 md:flex">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-indigo-700"
            >
              홈
            </Link>
            <Link
              href="/products"
              className="font-medium text-gray-700 hover:text-indigo-700"
            >
              상품
            </Link>
          </nav>

          {/* 유틸리티 아이콘 - 오른쪽 정렬 */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <button className="text-gray-700 hover:text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link href="/login" className="text-gray-700 hover:text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="ml-2 rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="space-y-1 pb-3 pt-2 md:hidden">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
            >
              홈
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
            >
              상품
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
