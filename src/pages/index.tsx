import SearchLayOut from "@/global-layout/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return <div>main</div>;
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayOut>{page}</SearchLayOut>;
};
