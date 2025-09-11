import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import NavBar from "@/components/NavBar/navbar";

export const metadata: Metadata = {
  title: "Home Page",
  description: "",
};

const Layout = ({ children }: {children: React.ReactNode }) => {
  return (
      <div className={""}>
          <NavBar/>
        {children}
      </div>
  );
}

export default Layout;
