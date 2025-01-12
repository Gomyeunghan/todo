import { StateCreator } from "zustand";

export interface TodoListState {
  todoList: { id?: number | null; name: string }[];
  setTodoList: (value: { id?: number | null; name: string }[]) => void;
  doneList: string[];
  setDoneList: (value: string[]) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export const createTodoStore: StateCreator<TodoListState> = (set) => ({
  todoList: [] || null,
  setTodoList: (value: { id?: number | null; name: string }[]) =>
    set({ todoList: value }),
  doneList: [],
  setDoneList: (value: string[]) => set({ doneList: value }),
  isActive: false,
  setIsActive: (value: boolean) => set({ isActive: value }),
});
