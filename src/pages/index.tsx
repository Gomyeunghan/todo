import TodoZone from "@/components/TodoZone/TodoZone";
import SearchLayOut from "@/global-layout/search-layout";
import { useStore } from "@/provider/StoreProvider";
import { ReactNode, useEffect } from "react";
import getTodoList from "./api/getTodoList";
import { TodolistType } from "@/type/dataType";

export const getServerSideProps = async (): Promise<{
  props: { todoLists: TodolistType[] };
}> => {
  const todoLists: TodolistType[] =
    (await getTodoList())?.map((todo) => ({
      id: todo.id!,
      name: todo.name,
      isCompleted: todo.isCompleted,
    })) || []; // null일 경우 빈 배열로 초기화

  return {
    props: {
      todoLists,
    },
  };
};

interface HomeProps {
  todoLists: TodolistType[];
}

export default function Home({ todoLists }: HomeProps) {
  const todoList = useStore((state) => state.todoList as TodolistType[]);
  const setTodoList = useStore((state) => state.setTodoList);

  console.log(todoList);

  useEffect(() => {
    setTodoList(todoLists);
  }, [setTodoList, todoLists]);

  return (
    <div>
      <TodoZone checkList={todoList} />
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayOut>{page}</SearchLayOut>;
};
