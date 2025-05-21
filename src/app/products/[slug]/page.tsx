"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProductStore } from "../../../store/productStore";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { submitOrder, OrderFormData } from "@/lib/api";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = useProductStore((state) => state.getProductBySlug(slug));
  const [quantity, setQuantity] = useState(1);
  const [isOrdering, setIsOrdering] = useState(false);

  // 주문 폼 상태 관리
  const [orderForm, setOrderForm] = useState({
    name: "",
    birthdate: "",
    birthtime: "",
    calendar: "양력",
    gender: "",
    phone: "",
    email: "",
    name2: "",
    birthdate2: "",
    birthtime2: "",
    calendar2: "양력",
    gender2: "",
  });

  // 폼 입력 처리
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // 전화번호 포맷팅 처리
    if (name === "phone") {
      // 숫자만 추출
      const numbersOnly = value.replace(/[^0-9]/g, "");

      // 한국 전화번호 포맷에 맞게 하이픈 추가
      let formattedPhone = "";
      if (numbersOnly.length <= 3) {
        formattedPhone = numbersOnly;
      } else if (numbersOnly.length <= 7) {
        formattedPhone = `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
      } else {
        formattedPhone = `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(
          3,
          7
        )}-${numbersOnly.slice(7, 11)}`;
      }

      setOrderForm({
        ...orderForm,
        [name]: formattedPhone,
      });
    } else {
      setOrderForm({
        ...orderForm,
        [name]: value,
      });
    }
  };

  // 주문 처리
  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) return;

    try {
      // 주문 데이터 형식 변환
      const orderData: OrderFormData = {
        productCode: product.slug,
        contact: orderForm.phone,
        email: orderForm.email,
        name1: orderForm.name,
        solarLunar1: orderForm.calendar,
        birthYear1: orderForm.birthdate.split("-")[0],
        birthMonth1: orderForm.birthdate.split("-")[1],
        birthDay1: orderForm.birthdate.split("-")[2],
        birthHour1: orderForm.birthtime
          ? orderForm.birthtime.split(":")[0]
          : "",
        birthMinute1: orderForm.birthtime
          ? orderForm.birthtime.split(":")[1]
          : "",
        gender1: orderForm.gender,
      };

      // 궁합사주일 경우 두 번째 사람 정보 추가
      if (product.slug === "compatibility-saju" && orderForm.name2) {
        orderData.name2 = orderForm.name2;
        orderData.solarLunar2 = orderForm.calendar2;
        orderData.birthYear2 = orderForm.birthdate2.split("-")[0];
        orderData.birthMonth2 = orderForm.birthdate2.split("-")[1];
        orderData.birthDay2 = orderForm.birthdate2.split("-")[2];
        orderData.birthHour2 = orderForm.birthtime2
          ? orderForm.birthtime2.split(":")[0]
          : "";
        orderData.birthMinute2 = orderForm.birthtime2
          ? orderForm.birthtime2.split(":")[1]
          : "";
        orderData.gender2 = orderForm.gender2;
      }

      await submitOrder(orderData);
      alert(
        "주문이 완료되었습니다. 입력하신 연락처로 상담 일정을 안내해 드리겠습니다."
      );
      setIsOrdering(false);
    } catch (error) {
      console.error("Order submission error:", error);
      alert("주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  // 수량 변경 처리
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // 상품을 찾을 수 없는 경우
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-md">
              <h1 className="mb-4 text-2xl font-bold text-gray-900">
                상품을 찾을 수 없습니다
              </h1>
              <p className="mb-8 text-gray-700">
                요청하신 상품을 찾을 수 없습니다. 삭제되었거나 잘못된 URL입니다.
              </p>
              <Link
                href="/products"
                className="inline-block rounded-lg bg-indigo-700 px-6 py-3 text-white shadow-sm transition-all hover:bg-indigo-800 hover:shadow-md"
              >
                모든 상품 보기
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* 상품 상세 정보 */}
          <div className="mb-12 overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {/* 상품 이미지 */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                  {Math.round(
                    (1 - product.discountPrice / product.price) * 100
                  )}
                  % 할인
                </div>
              </div>

              {/* 상품 정보 */}
              <div className="flex flex-col p-8">
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-800">
                    {product.category}
                  </span>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <div className="mb-6 flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {product.discountPrice.toLocaleString()}원
                  </span>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    {product.price.toLocaleString()}원
                  </span>
                </div>
                <div className="mb-6 h-px w-full bg-gray-100"></div>
                <p className="mb-6 leading-relaxed text-gray-700">
                  {product.description}
                </p>

                {/* 수량 선택 */}
                <div className="mb-6">
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    상담 횟수
                  </label>
                  <div className="flex max-w-[150px] items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                      }
                      className="h-12 w-12 rounded-l-lg border border-gray-300 bg-gray-50 text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="h-12 w-16 border-y border-gray-300 bg-white px-2 text-center text-gray-900"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="h-12 w-12 rounded-r-lg border border-gray-300 bg-gray-50 text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 합계 금액 */}
                <div className="mb-8 rounded-xl bg-gray-50 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      총 금액
                    </span>
                    <span className="text-2xl font-bold text-indigo-700">
                      {(product.discountPrice * quantity).toLocaleString()}원
                    </span>
                  </div>
                </div>

                {/* 외부 링크 버튼 */}
                {(product.slug === "compatibility-saju" ||
                  product.slug === "traditional-saju") && (
                  <div className="mb-8">
                    <a
                      href={
                        product.slug === "compatibility-saju"
                          ? "https://sajubacksa1.dbcart.net/"
                          : "https://sajubacksa3.dbcart.net/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-lg border-2 border-indigo-700 bg-white px-6 py-4 text-center font-medium text-indigo-700 shadow-sm transition-all hover:bg-indigo-50 hover:shadow-md active:scale-[0.98]"
                    >
                      자세히 보기
                    </a>
                  </div>
                )}

                {/* 액션 버튼 */}
                <div className="mt-auto">
                  <button
                    onClick={() => setIsOrdering(true)}
                    className="w-full rounded-lg bg-indigo-700 px-6 py-4 text-center font-medium text-white shadow-sm transition-all hover:bg-indigo-800 hover:shadow-md active:scale-[0.98]"
                  >
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 주문 폼 모달 */}
          {isOrdering && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    주문 정보 입력
                  </h2>
                  <button
                    onClick={() => setIsOrdering(false)}
                    className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleOrder}>
                  <div className="mb-8 rounded-xl bg-indigo-50 p-4">
                    <p className="text-sm text-indigo-800">
                      정확한 사주풀이를 위해 모든 정보를 정확하게 입력해주세요.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-4 text-lg font-medium text-gray-900">
                      {product.slug === "compatibility-saju"
                        ? "첫 번째 사람 정보"
                        : "신청자 정보"}
                    </h3>

                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={orderForm.name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                        placeholder="이름을 입력하세요"
                        required
                      />
                    </div>

                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="birthdate"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          생년월일 (예: 1990-01-01) *
                        </label>
                        <input
                          type="date"
                          id="birthdate"
                          name="birthdate"
                          value={orderForm.birthdate}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="birthtime"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          태어난 시간 (예: 08:30)
                        </label>
                        <input
                          type="time"
                          id="birthtime"
                          name="birthtime"
                          value={orderForm.birthtime}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          음/양력 *
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="calendar"
                              value="양력"
                              checked={orderForm.calendar === "양력"}
                              onChange={handleInputChange}
                              className="mr-2"
                              required
                            />
                            <span className="font-medium text-gray-800">
                              양력
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="calendar"
                              value="음력"
                              checked={orderForm.calendar === "음력"}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span className="font-medium text-gray-800">
                              음력
                            </span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          성별 *
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="남자"
                              checked={orderForm.gender === "남자"}
                              onChange={handleInputChange}
                              className="mr-2"
                              required
                            />
                            <span className="font-medium text-gray-800">
                              남자
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="여자"
                              checked={orderForm.gender === "여자"}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span className="font-medium text-gray-800">
                              여자
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 두 번째 사람 정보 섹션 (궁합사주일 경우에만 표시) */}
                  {product.slug === "compatibility-saju" && (
                    <div className="mb-6">
                      <h3 className="mb-4 text-lg font-medium text-gray-900">
                        두 번째 사람 정보
                      </h3>

                      <div className="mb-4">
                        <label
                          htmlFor="name2"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          이름 *
                        </label>
                        <input
                          type="text"
                          id="name2"
                          name="name2"
                          value={orderForm.name2}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                          placeholder="이름을 입력하세요"
                          required
                        />
                      </div>

                      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="birthdate2"
                            className="mb-2 block text-sm font-medium text-gray-900"
                          >
                            생년월일 (예: 1990-01-01) *
                          </label>
                          <input
                            type="date"
                            id="birthdate2"
                            name="birthdate2"
                            value={orderForm.birthdate2}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="birthtime2"
                            className="mb-2 block text-sm font-medium text-gray-900"
                          >
                            태어난 시간 (예: 08:30)
                          </label>
                          <input
                            type="time"
                            id="birthtime2"
                            name="birthtime2"
                            value={orderForm.birthtime2}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">
                            음/양력 *
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="calendar2"
                                value="양력"
                                checked={orderForm.calendar2 === "양력"}
                                onChange={handleInputChange}
                                className="mr-2"
                                required
                              />
                              <span className="font-medium text-gray-800">
                                양력
                              </span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="calendar2"
                                value="음력"
                                checked={orderForm.calendar2 === "음력"}
                                onChange={handleInputChange}
                                className="mr-2"
                              />
                              <span className="font-medium text-gray-800">
                                음력
                              </span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">
                            성별 *
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="gender2"
                                value="남자"
                                checked={orderForm.gender2 === "남자"}
                                onChange={handleInputChange}
                                className="mr-2"
                                required
                              />
                              <span className="font-medium text-gray-800">
                                남자
                              </span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="gender2"
                                value="여자"
                                checked={orderForm.gender2 === "여자"}
                                onChange={handleInputChange}
                                className="mr-2"
                              />
                              <span className="font-medium text-gray-800">
                                여자
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 연락처 정보 섹션 */}
                  <div className="mb-6">
                    <h3 className="mb-4 text-lg font-medium text-gray-900">
                      연락처 정보
                    </h3>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        전화번호 *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={orderForm.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                        placeholder="010-0000-0000"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={orderForm.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* 주문 정보 요약 */}
                  <div className="mb-6 rounded-xl bg-gray-50 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900">
                        주문 상품
                      </span>
                      <span className="font-medium text-gray-900">
                        {product.name} (수량: {quantity})
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900">
                        총 결제금액
                      </span>
                      <span className="text-xl font-bold text-indigo-700">
                        {(product.discountPrice * quantity).toLocaleString()}원
                      </span>
                    </div>
                  </div>

                  {/* 버튼 */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsOrdering(false)}
                      className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-4 text-center font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-lg bg-indigo-700 px-6 py-4 text-center font-medium text-white shadow-sm transition-all hover:bg-indigo-800 hover:shadow-md active:scale-[0.98]"
                    >
                      주문 완료
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* 상품 설명 탭 */}
          <div className="mb-16 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex">
                <button className="border-b-2 border-indigo-700 px-8 py-4 font-medium text-indigo-700">
                  상세 정보
                </button>
              </div>
            </div>
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {product.name} 안내
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                {product.description}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-medium text-gray-900">
                    상담 과정
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 inline-block rounded-full bg-indigo-700 px-2 py-0.5 text-xs font-bold text-white">
                        1
                      </span>
                      생년월일과 태어난 시간을 통해 사주를 분석합니다.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 inline-block rounded-full bg-indigo-700 px-2 py-0.5 text-xs font-bold text-white">
                        2
                      </span>
                      전문 상담사가 개인의 운세와 미래에 대해 상세히 풀이합니다.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 inline-block rounded-full bg-indigo-700 px-2 py-0.5 text-xs font-bold text-white">
                        3
                      </span>
                      질문 사항에 대한 답변과 조언을 제공합니다.
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-medium text-gray-900">
                    서비스 특징
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-700">•</span>
                      40년 경력의 전문가가 직접 상담
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-700">•</span>
                      정확한 사주 분석을 통한 깊이 있는 풀이
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-700">•</span>
                      온라인으로 편리하게 받아보는 상담 결과
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 관련 상품 */}
          <div className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              관련 서비스
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {useProductStore
                .getState()
                .products.filter(
                  (p) => p.category === product.category && p.id !== product.id
                )
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-3 text-lg font-medium text-gray-900">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-900">
                          {relatedProduct.discountPrice.toLocaleString()}원
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {relatedProduct.price.toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
