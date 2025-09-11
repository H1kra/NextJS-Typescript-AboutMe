import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
    title: "AboutMe | Home page",
    description: "",
};

export default function Layout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    );
}