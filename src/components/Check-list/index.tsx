import { useState } from "react";
import CheckIcon from "../CheckIcon";

export default function CheckList({ list }: { list: string }) {
  const [isActive, setActive] = useState(false);

  const onClick = () => {
    setActive(!isActive);
  };

  return !isActive ? (
    <div
      className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2"
      onClick={onClick}
    >
      <CheckIcon isActive={isActive} />
      {list}
    </div>
  ) : (
    <div>
      <div
        className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2 bg-violet-100"
        onClick={onClick}
      >
        <CheckIcon isActive={isActive} />
        <span className="line-through">{list}</span>
      </div>
    </div>
  );
}
