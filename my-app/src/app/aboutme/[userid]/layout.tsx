import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Page",
  description: "",
};

const Layout = ({ children }: {children: React.ReactNode }) => {
  return (
      <div className={""}>
        {children}
      </div>
  );
}

export default Layout;
