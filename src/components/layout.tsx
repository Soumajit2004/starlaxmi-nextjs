import Navbar from "./navbar";
import { ReactNode } from "react";
import Footer from "./footer";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}