import { ChangeEvent } from "react";

export default function Search({
  onChange,
  onKeyDown,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: () => void;
}) {
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        className="px-3 py-2 rounded-3xl border-solid border-2 border-slate-900 w-full bg-slate-100 text-late-500"
        onChange={change}
        onKeyDown={(e) => {
          if (e.key === "Enter") onKeyDown();
        }}
      />
    </div>
  );
}
