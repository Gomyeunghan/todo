import DoneZone from "@/components/DoneZone/DoneZone";
import TodoZone from "@/components/TodoZone/TodoZone";
import SearchLayOut from "@/global-layout/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-7 gap-12">
      <TodoZone />
      <DoneZone />
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayOut>{page}</SearchLayOut>;
};
