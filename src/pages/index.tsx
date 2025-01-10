import Button from "@/components/Button";
import CheckList from "@/components/Check-list";
import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div>
      <CheckList />
      <Search />
      <Header />
      <Button bgColor="bg-slate-200" iconType="add" textColor="slate-900">
        추가하기
      </Button>
      <Button bgColor="bg-rose" iconType="x" textColor="white">
        삭제하기
      </Button>
      <Button
        bgColor="bg-yellowGreen"
        iconType="correction"
        textColor="slate-900"
      >
        수정완료
      </Button>
      <Button
        bgColor="bg-slate-200"
        iconType="correction"
        textColor="slate-900"
      >
        수정하기
      </Button>
      <Button bgColor="bg-primary" iconType="add" textColor="white">
        추가하기
      </Button>
    </div>
  );
}
