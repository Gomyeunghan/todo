import Button from "@/components/Button";
import Search from "@/components/Search";
import { ReactNode } from "react";

export default function SearchLayOut({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center ml-10">
        <Search />
        <Button variant="add">추가하기</Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
