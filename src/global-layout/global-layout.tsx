import Header from "@/components/Header";
import StoreProvider from "@/provider/StoreProvider";
import { ReactNode } from "react";

export default function GlobalLayOut({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <Header />
      <main className="px-4 h-full">{children}</main>
    </StoreProvider>
  );
}
