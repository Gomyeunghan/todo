import Button from "@/components/Button";
import CheckList from "@/components/Check-list/Check-list";

export default function todo() {
  return (
    <div className="w-full h-lvh flex flex-col gap-6 overflow-auto mb-32">
      <CheckList list={"벌집먹기"} Active={false} id={1} />
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
        <Button variant="delete" handleClick={() => {}} className="flex-1">
          삭제하기
        </Button>
      </div>
    </div>
  );
}
