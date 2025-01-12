import { createTodoStore, TodoListState } from "@/store/TodoListStore";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { createStore, StoreApi, useStore as zustandUseStore } from "zustand";

const StoreContext = createContext<StoreApi<TodoListState> | null>(null);

export const useStore = <T,>(selector: (state: TodoListState) => T): T => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("provider 가 없습니다");
  return zustandUseStore(store, selector);
};

// storeRef 타입 수정
export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<StoreApi<TodoListState>>(null);

  if (!storeRef.current) {
    storeRef.current = createStore(createTodoStore);
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}
