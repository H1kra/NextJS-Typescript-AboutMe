import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AboutMe | Login",
  description: "",
};

const Layout = ({ children }: {children: React.ReactNode }) => {
  return (
      <div
          className={"min-h-screen bg-gradient-to-tl from-grey-100 to-blue-200  flex items-center justify-center p-4"}
      >
        {children}
      </div>
  );
}

export default Layout;