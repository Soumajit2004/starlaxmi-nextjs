import type { ReactNode } from "react";
import AdminNavbar from "./adminNavbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}
