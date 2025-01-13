"use client";

import { ChangeEvent, useState } from "react";
import CheckIcon from "../CheckIcon";
import Link from "next/link";

export default function CheckList({
  list,
  Active,
  id,
  detail,
  onClick,
  onChange,
}: {
  list: string;
  Active: boolean;
  id: number;
  detail?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [inputValue, setInputValue] = useState(list);

  const onChagneInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange!(e);
  };

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
  ) : detail ? (
    <div
      className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2"
      onClick={onClick}
    >
      <CheckIcon isActive={Active} />
      <input
        type="text"
        value={inputValue}
        className="underline decoration-1"
        onChange={onChagneInput}
      />
    </div>
  ) : (
    <Link href={`/item/${id}`}>
      <div className="rounded-3xl border-solid border-2 border-slate-900 flex items-center gap-4 p-2">
        <CheckIcon isActive={Active} />
        <span>{list}</span>
      </div>
    </Link>
  );
}
