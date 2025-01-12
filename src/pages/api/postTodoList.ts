interface Items {
  name: string;
}

export default async function postTodo(todo: Items): Promise<Items | null> {
  const url = "https://assignment-todolist-api.vercel.app/api/Han/items";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo), // 데이터를 JSON으로 직렬화
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
