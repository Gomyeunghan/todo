"use client";

import Button from "@/components/Button";
import Search from "@/components/Search";
import { useStore } from "@/provider/StoreProvider";
import { ChangeEvent, ReactNode, useState } from "react";

export default function SearchLayOut({ children }: { children: ReactNode }) {
  const [todo, setTodo] = useState("");
  const todoList = useStore((state) => state.todoList);
  const setTodoList = useStore((state) => state.setTodoList);

  const handleClick = () => {
    if (todo.trim()) {
      // 빈 문자열 체크
      setTodoList([...todoList, todo]);
      setTodo(""); // 입력 초기화
    }
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <Search onChange={onChange} />
        <Button variant="add" handleClick={handleClick}>
          추가하기
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
