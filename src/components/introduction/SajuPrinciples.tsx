import React from "react";

const SajuPrinciples = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            사주명리학의 기본 원리
          </h2>

          {/* 핵심 개념 설명 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <span className="inline-block p-3 bg-indigo-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                음양의 조화
              </h3>
              <p className="text-gray-600">
                우주의 모든 것은 음과 양의 상호작용으로 이루어져 있습니다. 이 두
                기운의 균형과 조화가 사주 해석의 기본이 됩니다.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>양: 활동성, 외향성, 발산</li>
                <li>음: 안정성, 내향성, 수렴</li>
                <li>상호보완적 관계</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <span className="inline-block p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                오행의 순환
              </h3>
              <p className="text-gray-600">
                목, 화, 토, 금, 수의 다섯 가지 기운이 서로 영향을 주고받으며
                순환하는 원리입니다.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>상생: 서로 돕는 관계</li>
                <li>상극: 서로 제약하는 관계</li>
                <li>균형과 순환의 법칙</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <span className="inline-block p-3 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                사주팔자
              </h3>
              <p className="text-gray-600">
                년, 월, 일, 시의 네 기둥으로 구성된 사주는 각각 고유한 의미를
                가지고 있습니다.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>년주: 선천적 성향</li>
                <li>월주: 성장 환경</li>
                <li>일주: 개인의 본질</li>
                <li>시주: 후천적 발전</li>
              </ul>
            </div>
          </div>

          {/* 상세 설명 */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  오행의 상생 관계
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    오행은 서로 돕고 생성하는 관계를 가지고 있습니다.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>목생화: 나무가 불을 일으킴</li>
                    <li>화생토: 불이 재가 되어 흙이 됨</li>
                    <li>토생금: 흙에서 금속이 생성됨</li>
                    <li>금생수: 금속이 녹아 물이 됨</li>
                    <li>수생목: 물이 나무를 기르음</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  오행의 상극 관계
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    오행은 서로 제약하고 통제하는 관계도 가지고 있습니다.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>목극토: 나무가 흙을 뚫음</li>
                    <li>토극수: 흙이 물을 막음</li>
                    <li>수극화: 물이 불을 끔</li>
                    <li>화극금: 불이 금속을 녹임</li>
                    <li>금극목: 금속이 나무를 자름</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  사주의 구성 요소
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      천간 (하늘의 기운)
                    </h4>
                    <p className="text-gray-600">
                      갑을병정무기경신임계의 10개 기운으로, 하늘의 영향력을
                      나타냅니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      지지 (땅의 기운)
                    </h4>
                    <p className="text-gray-600">
                      자축인묘진사오미신유술해의 12개 기운으로, 땅의 영향력을
                      나타냅니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      납음 (숨은 기운)
                    </h4>
                    <p className="text-gray-600">
                      천간과 지지의 조합에서 나타나는 이면의 기운을 의미합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  사주 해석의 기본 원칙
                </h3>
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>일주를 중심으로 해석</li>
                    <li>천간과 지지의 조화 관계 파악</li>
                    <li>음양의 균형 상태 확인</li>
                    <li>오행의 상생상극 관계 분석</li>
                    <li>시기별 운의 변화 고려</li>
                    <li>전체적인 기운의 흐름 파악</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuPrinciples;
