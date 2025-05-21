import React from "react";

const SajuHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            사주명리학의 역사
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 역사적 발전 과정 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  기원과 발전
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    사주명리학은 고대 중국에서 시작되어 동아시아 전역으로
                    퍼져나간 철학 체계입니다. 음양오행 이론과 천문 관측을
                    결합하여 발전해왔습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>춘추전국시대: 음양오행 이론의 체계화</li>
                    <li>한나라 시대: 사주명리학의 기초 확립</li>
                    <li>당나라 시대: 이론의 완성과 실용화</li>
                    <li>송나라 시대: 학문적 체계의 정립</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  한국에서의 발전
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    한국에서는 삼국시대부터 사주명리학이 전래되어 독자적인
                    발전을 이루었습니다. 특히 조선시대에는 과거제도와 결합하여
                    더욱 체계화되었습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>삼국시대: 초기 도입과 수용</li>
                    <li>고려시대: 관상감의 설치</li>
                    <li>조선시대: 서운관을 통한 체계화</li>
                    <li>현대: 과학적 접근과 재해석</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 주요 인물과 저서 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  주요 고전과 이론서
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    수많은 명리학자들이 저술한 고전들을 통해 사주명리학은 더욱
                    깊이 있는 학문으로 발전했습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>자평진전: 기본 이론의 집대성</li>
                    <li>삼명통회: 명리학의 종합 이론서</li>
                    <li>적천수: 실전 사주 해석의 지침서</li>
                    <li>명리정종: 현대적 해석의 기초</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  현대적 의의
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    현대에는 전통적인 사주명리학에 심리학, 통계학 등 현대 과학을
                    접목하여 더욱 객관적이고 실용적인 해석 방법을 발전시키고
                    있습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>심리 상담과의 결합</li>
                    <li>빅데이터 기반 연구</li>
                    <li>과학적 검증 시도</li>
                    <li>현대적 해석 방법론 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 타임라인 */}
          <div className="mt-16 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              사주명리학의 발전 과정
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              <div className="space-y-12">
                {[
                  {
                    year: "기원전 500년경",
                    title: "음양오행 이론의 탄생",
                    content:
                      "고대 중국에서 우주의 원리를 설명하는 철학 체계로 발전",
                  },
                  {
                    year: "한나라 시대",
                    title: "사주명리학의 기초 확립",
                    content: "천문 관측과 역법의 발전으로 체계적인 이론 정립",
                  },
                  {
                    year: "당나라 시대",
                    title: "이론의 완성",
                    content: "각종 명리서의 출현과 실전 적용 방법의 발전",
                  },
                  {
                    year: "현대",
                    title: "과학적 접근",
                    content:
                      "현대 심리학, 통계학과의 결합으로 새로운 발전 모색",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 text-right pr-8">
                        <div className="font-bold text-indigo-600">
                          {item.year}
                        </div>
                        <div className="font-semibold text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {item.content}
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white"></div>
                      <div className="flex-1 pl-8"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuHistory;
