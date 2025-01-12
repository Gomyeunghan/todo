export default async function updateTodo(
  todoId: number,
  updatedData: {
    name: string;
    isCompleted: boolean;
    imageUrl?: string;
    memo?: string;
  }
) {
  const url = `https://assignment-todolist-api.vercel.app/api/Han/items/${todoId}`;

  // 요청 데이터 로깅
  console.log("Request URL:", url);
  console.log("Request body:", updatedData);

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedData.name,
        memo: updatedData.memo || "",
        imageUrl: updatedData.imageUrl || "",
        isCompleted: Boolean(updatedData.isCompleted),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedTodo = await response.json();
    console.log("Response data:", updatedTodo);
    return updatedTodo;
  } catch (error) {
    console.error("Update failed:", error);
    throw error;
  }
}
