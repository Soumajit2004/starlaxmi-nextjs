import Navbar from "./navbar";
import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}