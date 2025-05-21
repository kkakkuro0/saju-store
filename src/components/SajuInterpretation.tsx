import React from "react";

const SajuInterpretation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          사주 해석의 기본
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 음양오행 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md">
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                음양오행의 이해
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>음양오행은 사주 해석의 기본이 되는 원리입니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>음양: 상호보완적 에너지</li>
                  <li>목(木): 생명력, 성장</li>
                  <li>화(火): 열정, 확장</li>
                  <li>토(土): 안정, 중심</li>
                  <li>금(金): 결실, 완성</li>
                  <li>수(水): 지혜, 적응</li>
                </ul>
              </div>
            </div>

            {/* 십이운성 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                십이운성의 의미
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>십이운성은 각 시기의 운의 흐름을 나타냅니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>장생: 시작과 성장</li>
                  <li>목욕: 정화와 준비</li>
                  <li>관대: 성취와 영광</li>
                  <li>건록: 안정과 풍요</li>
                  <li>제왕: 최고의 전성기</li>
                  <li>쇠: 변화의 시기</li>
                </ul>
              </div>
            </div>

            {/* 육친관계 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                육친관계의 해석
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>육친은 사주에서 인간관계를 나타내는 지표입니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>비견: 동료, 경쟁자</li>
                  <li>식신: 학문, 기술</li>
                  <li>재성: 재물, 배우자</li>
                  <li>관성: 권위, 직장</li>
                  <li>인성: 연인, 자식</li>
                  <li>상관: 변화, 혁신</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              사주 해석의 핵심 포인트
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-indigo-700">
                  기본 해석 방법
                </h4>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>일주(日柱)를 중심으로 해석</li>
                  <li>천간과 지지의 조화 관계 파악</li>
                  <li>음양의 균형 상태 확인</li>
                  <li>계절과 시기의 영향 고려</li>
                  <li>오행의 상생상극 관계 분석</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-indigo-700">
                  현대적 적용
                </h4>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>개인의 성격과 적성 파악</li>
                  <li>진로와 직업 선택의 지표</li>
                  <li>대인관계의 특성 이해</li>
                  <li>시기별 운세 변화 예측</li>
                  <li>개인 발전의 방향성 제시</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuInterpretation;
