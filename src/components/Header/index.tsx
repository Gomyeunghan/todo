import Link from "next/link";

export default function Header() {
  return (
    <div className="border-solid border-2 border-slate-200 p-2 lg:px-80">
      <Link href="/">
        <img src="/Group 33684.svg" alt="logo" className="lg:hidden" />
        <img src="/Size=Large.svg" alt="logo" className="lg:block hidden" />
      </Link>
    </div>
  );
}
