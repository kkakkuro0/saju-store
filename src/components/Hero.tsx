import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center py-12 md:flex-row md:py-24">
          {/* 텍스트 콘텐츠 */}
          <div className="mt-10 flex-1 md:mt-0 md:pr-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              <span className="block text-indigo-700">사주(四柱)로</span>
              <span className="block">당신의 삶을 이해하세요</span>
            </h1>
            <p className="mt-6 text-lg text-gray-800">
              데이터분석 전문가가 운영하는 정통사주 정보를 전달드립니다. <br />
              사주를 보는 방법부터 개인에 맞는 사주까지 정보를 알고 싶다면
              연락주세요.
            </p>
            <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/products"
                className="rounded-md bg-indigo-700 px-8 py-3 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-800"
              >
                사주 정보 받아보기
              </Link>
              <Link
                href="/introduction"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-center text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
              >
                자세히 알아보기
              </Link>
            </div>
          </div>

          {/* 이미지 */}
          <div className="relative flex-1 h-64 w-full md:h-96">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/10 to-purple-600/10" />
              <div className="h-full w-full p-8">
                <div className="flex h-full flex-col items-center justify-center text-gray-700">
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-indigo-100 p-3">
                        <svg
                          className="h-8 w-8 text-indigo-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="text-2xl font-bold">사주팔자 분석</div>
                    <div className="mt-2 text-gray-600">
                      년(年) · 월(月) · 일(日) · 시(時)
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      당신의 생년월일시로 보는
                      <br />
                      인생의 흐름과 방향
                    </div>
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                전문가 상담
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                맞춤형 해석
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 md:text-base">
                정기 상담
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
