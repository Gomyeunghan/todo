import Button from "@/components/Button";
import CheckList from "@/components/Check-list/Check-list";
import getTodo from "../api/getTodoItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import deleteTodoItem from "../api/deleteTodoItem";
import { useStore } from "@/provider/StoreProvider";
import { ChangeEvent, MouseEvent, useState } from "react";
import updateTodo from "../api/patchTodoItem";
import ImageUpload from "@/components/ImageUpload/ImgageUpload";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query!.id;
  console.log(id);

  const todo = await getTodo(Number(id));

  if (!todo) {
    return { notFound: true };
  }

  return {
    props: { todo, id },
  };
};

export default function Todo({
  todo,
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const setTodoList = useStore((state) => state.setTodoList);
  const todoList = useStore((state) => state.todoList);
  const [updatedData, setUpdatedData] = useState({
    name: todo.name,
    isCompleted: todo.isCompleted,
    imageUrl: todo.imageUrl,
    memo: todo.memo ?? "",
  });

  const router = useRouter();
  console.log(todo);

  const handleDelete = async () => {
    const result = await deleteTodoItem(todo.id);
    if (result === null) {
      console.error("삭제실패");
    } else {
      setTodoList(todoList.filter((item) => item.id !== Number(id)));
      router.push("/");
    }
  };

  const handleUpdate = async () => {
    try {
      // updateTodo 함수를 호출하여 데이터 업데이트
      await updateTodo(todo.id, updatedData);
      // 성공적인 업데이트 후, 필요한 후속 작업 (예: UI 업데이트)
      alert("Todo updated successfully");
      router.push("/");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  const onChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      memo: value,
    }));
    console.log(value);
  };
  const onChangetitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      name: value,
    }));
    console.log(value);
  };
  const handleCompleted = async (e: MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof HTMLInputElement) {
      return; // input인 경우 이벤트 처리를 멈춤
    }

    try {
      // 새로운 완료 상태
      const newIsCompleted = !updatedData.isCompleted;

      // 먼저 로컬 상태 업데이트
      setUpdatedData((prev) => ({
        ...prev,
        isCompleted: newIsCompleted,
      }));
    } catch (error) {
      // 에러가 발생하면 로컬 상태를 원래대로 되돌림
      setUpdatedData((prev) => ({
        ...prev,
        isCompleted: !updatedData.isCompleted,
      }));
      console.error("완료 상태 토글 중 오류 발생:", error);
    }
  };

  const handleUploadSuccess = async (imageUrl: string) => {
    setUpdatedData((prev) => ({
      ...prev,
      imageUrl: imageUrl,
    }));
  };

  return (
    <div className="w-full h-lvh flex flex-col gap-6 overflow-auto mb-32 ">
      <CheckList
        list={todo.name}
        Active={updatedData.isCompleted}
        id={todo.id}
        detail={true}
        onChange={onChangetitle}
        onClick={handleCompleted}
      />
      <div className="lg:flex w-full h-1/2 gap-6">
        <ImageUpload
          onUploadSuccess={handleUploadSuccess}
          initialImageUrl={updatedData.imageUrl}
        />
        <textarea
          name="memo"
          id=""
          className="w-full h-full flex-1"
          style={{ backgroundImage: "url(/memo.svg)" }}
          onChange={onChangeMemo}
          value={updatedData.memo}
        ></textarea>
      </div>
      <div className="flex gap-2 lg:justify-end">
        <Button
          variant="correction"
          handleClick={handleUpdate}
          className="flex-1"
        >
          수정하기
        </Button>
        <Button variant="delete" handleClick={handleDelete} className="flex-1">
          삭제하기
        </Button>
      </div>
    </div>
  );
}
