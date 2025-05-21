import { NextResponse } from "next/server";

interface OrderData {
  productCode: string;
  contact: string;
  email: string;
  name1: string;
  solarLunar1: string;
  birthYear1: string;
  birthMonth1: string;
  birthDay1: string;
  birthHour1: string;
  birthMinute1: string;
  gender1: string;
  name2?: string;
  solarLunar2?: string;
  birthYear2?: string;
  birthMonth2?: string;
  birthDay2?: string;
  birthHour2?: string;
  birthMinute2?: string;
  gender2?: string;
}

export async function POST(request: Request) {
  try {
    const data: OrderData = await request.json();

    // Google Apps Script 웹 앱 URL
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!SCRIPT_URL) {
      throw new Error("Google Script URL is not configured");
    }

    // Google Apps Script로 데이터 전송
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save order data");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json(
      { error: "주문 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
