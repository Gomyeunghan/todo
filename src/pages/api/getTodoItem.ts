interface Items {
  name: string;
  imageUrl?: string;
  isCompleted: boolean;
  memo?: string;
  tenanId: string;
  id: number;
}

export default async function getTodo(id: number): Promise<Items | null> {
  const url = `https://assignment-todolist-api.vercel.app/api/Han/items/${id}/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json", // JSON 응답을 명시적으로 요청
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch:", response.status, response.statusText);
      return null;
    }

    const result: Items = await response.json(); // 응답 데이터를 Items 타입으로 변환
    return result;
  } catch (error) {
    console.error("Error occurred while fetching:", error);
    return null;
  }
}
