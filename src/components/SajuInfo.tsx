import React from "react";

const SajuInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          사주(四柱)란?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                사주의 의미
              </h3>
              <p className="text-gray-600 leading-relaxed">
                사주는 태어난 년, 월, 일, 시를 나타내는 네 개의 기둥을
                의미합니다. 이는 음양오행의 원리를 바탕으로 개인의 타고난 성격과
                운명을 해석하는 동양철학의 핵심 개념입니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                사주의 구성
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>년주(年柱): 선천적 성격과 부모와의 관계</li>
                <li>월주(月柱): 직업운과 형제자매 관계</li>
                <li>일주(日柱): 개인의 본질과 배우자 관계</li>
                <li>시주(時柱): 자녀운과 노년의 운세</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                사주의 활용
              </h3>
              <p className="text-gray-600 leading-relaxed">
                사주는 개인의 성격, 적성, 대인관계, 진로 등 다양한 영역에서
                참고할 수 있는 지표가 됩니다. 특히 중요한 선택의 순간에 도움이
                되는 통찰을 제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                현대적 해석
              </h3>
              <p className="text-gray-600 leading-relaxed">
                현대에는 사주를 절대적인 운명으로 보기보다는, 자신을 이해하고 더
                나은 선택을 하기 위한 참고 도구로 활용합니다. 과학적 접근과 함께
                보완적으로 활용하면 더욱 의미있는 통찰을 얻을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SajuInfo;
