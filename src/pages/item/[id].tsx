import Button from "@/components/Button";
import CheckList from "@/components/Check-list/Check-list";
import getTodo from "../api/getTodoItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import deleteTodoItem from "../api/deleteTodoItem";
import { useStore } from "@/provider/StoreProvider";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query!.id;
  console.log(id);

  const todo = await getTodo(Number(id));

  if (!todo) {
    return { notFound: true };
  }

  return {
    props: { todo, id },
  };
};

export default function Todo({
  todo,
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const setTodoList = useStore((state) => state.setTodoList);
  const todoList = useStore((state) => state.todoList);

  const router = useRouter();

  const handleDelete = async () => {
    const result = await deleteTodoItem(todo.id);
    if (result === null) {
      console.error("삭제실패");
    } else {
      setTodoList(todoList.filter((item) => item.id !== Number(id)));
      router.push("/");
    }
  };

  return (
    <div className="w-full h-lvh flex flex-col gap-6 overflow-auto mb-32">
      <CheckList list={todo.name} Active={false} id={todo.id} detail={true} />
      <div className="flex justify-center items-center h-1/2 border-dashed border-2 border-slate-200 rounded-xl relative">
        <img src="/loadingimg.svg" alt="" />
        <Button
          variant="add"
          handleClick={() => {}}
          className="bg-slate-200 border-none bottom-2 right-2 absolute"
          textClassName="hidden"
          IconeColor="text-slate-500"
        >
          추가하기
        </Button>
      </div>
      <textarea
        name="memo"
        id=""
        className="w-full h-2/3"
        style={{ backgroundImage: "url(/memo.svg)" }}
      ></textarea>
      <div className="flex gap-2">
        <Button variant="correction" handleClick={() => {}} className="flex-1">
          수정하기
        </Button>
        <Button variant="delete" handleClick={handleDelete} className="flex-1">
          삭제하기
        </Button>
      </div>
    </div>
  );
}
