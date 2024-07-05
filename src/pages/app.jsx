"use client";

import React from "react";
import { UserProvider } from "@/context/UserContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />;
        </UserProvider>
    );
}

export default App;
