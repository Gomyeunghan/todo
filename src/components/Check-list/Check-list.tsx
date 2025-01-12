"use client";

import { useEffect } from "react";
import CheckIcon from "../CheckIcon";
import { useStore } from "@/provider/StoreProvider";
import Link from "next/link";

export default function CheckList({
  list,
  Active,
  id,
}: {
  list: string;
  Active: boolean;
  id: number;
}) {
  const todoList = useStore((state) => state.todoList);
  const setTodoList = useStore((state) => state.setTodoList);
  const setDoneList = useStore((state) => state.setDoneList);
  const doneList = useStore((state) => state.doneList);

  const onClick = () => {
    if (Active) {
      const updatedDoneList = doneList.filter((item) => item !== list);
      const updatedList = [...todoList, list];
      setTodoList(updatedList);
      setDoneList(updatedDoneList);
    } else {
      const updatedList = todoList.filter((item) => item !== list);
      const updatedDoneList = [...doneList, list];
      setTodoList(updatedList);
      setDoneList(updatedDoneList);
    }
  };

  useEffect(() => {}, [Active]);

  return Active ? (
    <div>
      <div
        className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2 bg-violet-100"
        onClick={onClick}
      >
        <CheckIcon isActive={Active} />
        <span className="line-through">{list}</span>
      </div>
    </div>
  ) : (
    <Link href={`/item/${id}`}>
      <div
        className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2"
        onClick={onClick}
      >
        <CheckIcon isActive={Active} />
        {list}
      </div>
    </Link>
  );
}
