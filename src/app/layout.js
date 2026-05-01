import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toast } from "@heroui/react";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});
export const metadata = {
  title: "eBook Borrow",
  description: "Best Book Borrowing Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Toast.Provider placement="top" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
