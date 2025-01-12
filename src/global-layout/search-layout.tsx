"use client";

import Button from "@/components/Button";
import Search from "@/components/Search";
import postTodo from "@/pages/api/postTodoList";
import { useStore } from "@/provider/StoreProvider";
import { ChangeEvent, ReactNode, useState } from "react";

export default function SearchLayOut({ children }: { children: ReactNode }) {
  const [todo, setTodo] = useState("");
  const todoList = useStore((state) => state.todoList);
  const setTodoList = useStore((state) => state.setTodoList);

  const handleClick = () => {
    if (todo.trim()) {
      // 빈 문자열 체크
      setTodoList([...todoList, { name: todo }]);
      setTodo(""); // 입력 초기화
    }
    handleSubmit();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async () => {
    const todotitle = { name: todo };

    const result = await postTodo(todotitle);
    if (result) {
      console.log("Task added:", result);
    } else {
      console.error("Failed to add task.");
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <Search onChange={onChange} />
        <Button
          variant="add"
          handleClick={handleClick}
          textClassName="text-white hidden md:block whitespace-nowrap"
        >
          추가하기
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
