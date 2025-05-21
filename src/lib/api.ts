export interface OrderFormData {
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

export async function submitOrder(orderData: OrderFormData) {
  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("주문 처리 중 오류가 발생했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order submission error:", error);
    throw error;
  }
}
