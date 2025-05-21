import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="mb-3 text-xl font-bold text-indigo-700">
              명리학도 사주박사
            </h3>
            <p className="text-gray-700">
              40년 경력의 전문가가 운영하는 정통 사주풀이 서비스
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:space-x-8 sm:gap-0">
            <Link
              href="/products"
              className="text-gray-700 hover:text-indigo-700"
            >
              상품 보기
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-indigo-700"
            >
              개인정보 처리방침
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-indigo-700">
              이용약관
            </Link>
          </div>

          <div className="w-full max-w-md border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>문의: info@sajumaster.com | 010-1234-5678</p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} 명리학도 사주박사. 모든 권리
              보유.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
