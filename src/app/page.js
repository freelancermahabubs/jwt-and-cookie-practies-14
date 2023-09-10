import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-8 mx-[50%] text-xl font-semibold gap-x-5 flex">
 
      <Link href={"/login"} replace>Login</Link>
      <Link href={"/dashboard"} replace>Dashboard</Link>
    </div>
  );
}
