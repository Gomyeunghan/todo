import DoneZone from "@/components/DoneZone/DoneZone";
import TodoZone from "@/components/TodoZone/TodoZone";
import SearchLayOut from "@/global-layout/search-layout";
import { useStore } from "@/provider/StoreProvider";
import { ReactNode } from "react";

export default function Home() {
  const todoList = useStore((state) => state.todoList);
  const doneList = useStore((state) => state.doneList);

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
