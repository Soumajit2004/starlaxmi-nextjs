import Link from "next/link";

export default function Navbar() {
  return (
    <div className={"bg-neutral lg:border-b-2"}>
      <div className="navbar container mx-auto h-20">
        <div className="flex-1">
          <Link
            className="text-2xl font-display tracking-wider uppercase text-white"
            href={"/"}
          >
            Starlaxmi
          </Link>
        </div>
        <div className="flex-none font-sans">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/search"} className={"btn btn-secondary"}>
                <span className="material-symbols-rounded">
                    search
                </span>
                <h3>Search</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}