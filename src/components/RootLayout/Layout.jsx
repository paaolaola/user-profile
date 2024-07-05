"use client";

import { Inter } from "next/font/google";
import styles from "@/styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Prueba Técnica",
    description: "Prueba técnica para desarrollador frontend",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
