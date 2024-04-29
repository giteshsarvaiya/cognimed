
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-zinc-900 flex min-h-screen w-full h-screeen flex-col items-center justify-center p-24">
      <div className=" w-full items-center justify-center font-mono text-sm lg:flex">
          <Link href="/messages"><button className="bg-violet-900 rounded-2xl p-4">Go to Messages</button></Link>
      </div>
    </main>
  );
}
