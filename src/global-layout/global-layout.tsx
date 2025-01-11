import Header from "@/components/Header";
import { ReactNode } from "react";

export default function GlobalLayOut({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="px-4">{children}</main>
    </div>
  );
}
