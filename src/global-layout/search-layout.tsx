import Button from "@/components/Button";
import Search from "@/components/Search";
import { ReactNode, useState } from "react";

export default function SearchLayOut({ children }: { children: ReactNode }) {
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    console.log(searchValue);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
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
