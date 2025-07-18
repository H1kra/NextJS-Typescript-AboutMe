import type { Metadata } from "next";
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
    title: "AboutMe | Home page",
    description: "",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={""}>
            {children}
            </body>
        </html>
    );
}