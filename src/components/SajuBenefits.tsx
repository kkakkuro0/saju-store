import React from "react";

const SajuBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          사주 상담의 효과
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 왼쪽 섹션 - 주요 효과 */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 inline-block p-3 bg-indigo-100 rounded-full">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      자기 이해 증진
                    </h3>
                    <p className="text-gray-600">
                      타고난 성격과 기질을 이해하고, 자신의 강점과 약점을
                      객관적으로 파악할 수 있습니다. 이를 통해 더 나은 자기
                      발전의 방향을 찾을 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 inline-block p-3 bg-purple-100 rounded-full">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      진로 및 경력 설계
                    </h3>
                    <p className="text-gray-600">
                      개인의 타고난 재능과 적성을 파악하여, 가장 적합한 직업과
                      경력 경로를 선택하는 데 도움을 받을 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 inline-block p-3 bg-blue-100 rounded-full">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      대인관계 개선
                    </h3>
                    <p className="text-gray-600">
                      자신과 타인의 기질적 특성을 이해함으로써, 더 원활한
                      대인관계를 형성하고 갈등을 효과적으로 해결할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 섹션 - 상담 효과 통계 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                상담 효과 분석
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      자기이해 증진
                    </span>
                    <span className="text-indigo-600 font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      진로 방향성 수립
                    </span>
                    <span className="text-indigo-600 font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      대인관계 개선
                    </span>
                    <span className="text-indigo-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      의사결정 도움
                    </span>
                    <span className="text-indigo-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  상담 만족도
                </h4>
                <p className="text-gray-600">
                  2023년 기준, 1,000명 이상의 내담자를 대상으로 한 만족도 조사
                  결과입니다. 90% 이상의 내담자가 상담 후 긍정적인 변화를
                  경험했다고 응답했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuBenefits;
