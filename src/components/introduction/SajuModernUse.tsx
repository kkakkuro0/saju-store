import React from "react";

const SajuModernUse = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            현대 사회에서의 사주 활용
          </h2>

          {/* 현대적 활용 분야 */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  심리 상담과의 결합
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    현대 심리학과 사주명리학을 결합하여 더 깊이 있는 상담이
                    가능해졌습니다. 개인의 성격과 잠재력을 다각도로 분석하여
                    보다 효과적인 해결책을 제시합니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>성격 유형 분석</li>
                    <li>대인관계 패턴 파악</li>
                    <li>스트레스 대처 방식 이해</li>
                    <li>자아 발견과 성장</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  진로 및 경력 상담
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    개인의 타고난 재능과 적성을 사주를 통해 분석하여, 최적의
                    진로와 경력 방향을 제시합니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>적성 분석 및 진로 제안</li>
                    <li>경력 전환 시점 파악</li>
                    <li>업종별 궁합도 분석</li>
                    <li>창업 시기 상담</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  현대적 해석 방법
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    전통적인 사주 해석에 현대적 분석 방법을 접목하여 보다
                    객관적이고 실용적인 상담을 제공합니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>통계적 데이터 활용</li>
                    <li>심리 검사와의 연계</li>
                    <li>과학적 검증 방법 적용</li>
                    <li>현대적 상황 해석</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  생활 속의 활용
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    일상생활에서 마주하는 다양한 선택과 결정에 사주의 지혜를
                    활용할 수 있습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>중요 선택의 시점 결정</li>
                    <li>대인관계 개선 방안</li>
                    <li>건강 관리 방향</li>
                    <li>자기계발 방향 설정</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 활용 사례 */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              사주 상담의 실제 활용 사례
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  경력 전환 상담
                </h4>
                <p className="text-gray-600">
                  30대 직장인의 새로운 진로 모색. 사주 분석을 통해 적성에 맞는
                  새로운 분야를 발견하고 성공적인 전환을 이룬 사례
                </p>
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  관계 개선 상담
                </h4>
                <p className="text-gray-600">
                  부부 관계 개선을 위한 상담. 각자의 사주 특성을 이해하고 상호
                  보완점을 발견하여 관계가 개선된 사례
                </p>
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  자기계발 상담
                </h4>
                <p className="text-gray-600">
                  20대 후반 직장인의 자기계발 방향 설정. 사주를 통해 숨겨진
                  재능을 발견하고 새로운 도전을 시작한 사례
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuModernUse;
