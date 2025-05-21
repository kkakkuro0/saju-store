import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center py-12 md:flex-row md:py-24">
          {/* 텍스트 콘텐츠 */}
          <div className="mt-10 flex-1 md:mt-0 md:pr-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              <span className="block text-indigo-700">당신의 운명,</span>
              <span className="block">지금 알아보세요</span>
            </h1>
            <p className="mt-6 text-lg text-gray-800">
              40년 경력의 전문가가 정확하게 분석하는 사주풀이 서비스를
              만나보세요. 당신의 과거, 현재, 미래를 통찰하는 특별한 경험을
              제공합니다.
            </p>
            <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/products"
                className="rounded-md bg-indigo-700 px-8 py-3 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-800"
              >
                사주 보기
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-center text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
              >
                서비스 소개
              </Link>
            </div>
          </div>

          {/* 이미지 */}
          <div className="relative flex-1 h-64 w-full md:h-96">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/20 to-purple-600/20" />
              <div className="h-full w-full bg-gray-200">
                <div className="flex h-full items-center justify-center text-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold">사주팔자 분석</div>
                    <div className="mt-2">생년월일시로 보는 당신의 운명</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 배지/혜택 섹션 */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center space-x-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                합리적인 가격
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                비밀 보장
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                신속한 결과
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                24/7 상담 가능
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
