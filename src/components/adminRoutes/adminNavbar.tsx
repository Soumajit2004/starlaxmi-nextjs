import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <div className={"border-b-2 bg-neutral"}>
      <div className="container navbar mx-auto h-20">
        <div className="flex-1">
          <Link
            className="font-display text-2xl uppercase tracking-wider text-white"
            href={"/"}
          >
            Starlaxmi <span className="font-sans">Admin</span>
          </Link>
        </div>
        <div className="flex-none">
          <UserButton
            appearance={{
              variables: {
                fontFamily: "sans-serif",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
