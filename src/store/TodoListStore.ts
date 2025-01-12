import { StateCreator } from "zustand";

export interface TodoListState {
  todoList: string[];
  setTodoList: (value: string[]) => void;
  doneList: string[];
  setDoneList: (value: string[]) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export const createTodoStore: StateCreator<TodoListState> = (set) => ({
  todoList: [] || null,
  setTodoList: (value: string[]) => set({ todoList: value }),
  doneList: [],
  setDoneList: (value: string[]) => set({ doneList: value }),
  isActive: false,
  setIsActive: (value: boolean) => set({ isActive: value }),
});
