import type { ReactNode } from "react";
import AdminNavbar from "./adminNavbar";
import Footer from "../footer";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminNavbar />
      {children}
      <Footer/>
    </>
  );
}
