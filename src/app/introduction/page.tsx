import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SajuHistory from "../../components/introduction/SajuHistory";
import SajuModernUse from "@/components/introduction/SajuModernUse";
import SajuPrinciples from "@/components/introduction/SajuPrinciples";

export default function IntroductionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* 페이지 헤더 섹션 */}
        <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                사주명리학의 세계
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                수천 년의 역사를 가진 동양철학의 정수, 사주명리학을 통해 당신의
                삶을 더 깊이 이해하고 더 나은 선택을 할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <SajuHistory />
        <SajuPrinciples />
        <SajuModernUse />
      </main>
      <Footer />
    </div>
  );
}
