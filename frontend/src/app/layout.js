"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";
import { usePathname } from "next/navigation";
import { store, persistor } from "../redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  console.log("asd", pathname);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen h-screen">
        {!pathname.includes("adminpanel") && <Navbar />}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="flex-grow">{children}</div>{" "}
          </PersistGate>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
