import DoneZone from "@/components/DoneZone/DoneZone";
import TodoZone from "@/components/TodoZone/TodoZone";
import SearchLayOut from "@/global-layout/search-layout";
import { useStore } from "@/provider/StoreProvider";
import { ReactNode } from "react";
import getTodoList from "./api/getTodoList";

interface todolistType {
  id?: number;
  isCompleted: boolean;
  name: string;
}

export const getServerSideProps = async (): Promise<{
  props: { todoLists: todolistType[] };
}> => {
  const todoLists: todolistType[] =
    (await getTodoList())?.map((todo) => ({
      id: todo.id!,
      name: todo.name,
      isCompleted: false, // 기본값으로 isCompleted 추가
    })) || []; // null일 경우 빈 배열로 초기화

  return {
    props: {
      todoLists,
    },
  };
};

interface HomeProps {
  todoLists: todolistType[];
}

export default function Home({ todoLists }: HomeProps) {
  console.log(todoLists);

  const todoList = useStore((state) => state.todoList as todolistType[]);
  const doneList = useStore((state) => state.doneList);
  const setTodoList = useStore((state) => state.setTodoList);

  setTodoList(todoLists);

  return (
    <div className="flex flex-col items-center mt-7 gap-12">
      <TodoZone checkList={todoList} />
      <DoneZone doneLists={doneList} />
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayOut>{page}</SearchLayOut>;
};
