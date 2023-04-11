import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AdminNavbar() {
  const { data: session } = useSession();


  const handleSighOut = () => {
     void signOut()
  }

  return (
    <div className={"bg-neutral"}>
      <div className="container navbar mx-auto h-20">
        <div className="flex-1">
          <Link
            className="font-display text-2xl uppercase tracking-wider text-white"
            href={"/"}
          >
            Starlaxmi <span className="font-sans">Admin</span>
          </Link>
        </div>
        {session ? (
          <div className="flex-none gap-10
          ">
            <button className={"btn btn-error font-sans"}
                    onClick={handleSighOut}
                    >
            <span className="material-symbols-rounded mr-2">
              logout
            </span>
              Logout
            </button>
          </div>
        ) : <div />
        }
      </div>
    </div>
  );
}
