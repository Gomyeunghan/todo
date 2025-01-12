export default async function deleteTodoItem(id: number): Promise<null> {
  const url = `https://assignment-todolist-api.vercel.app/api/Han/items/${id}`;

  try {
    const todo = { id }; // 추가된 부분
    const response = await fetch(url, {
      method: "DELETE",
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

    const result = await response.json();
    console.log("삭제완료");
    // 응답 데이터를 Items 타입으로 변환
    return result;
  } catch (error) {
    console.error("Error occurred while fetching:", error);
    return null;
  }
}
