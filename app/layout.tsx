export const revalidate = 0;
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "ResideWell | Premier House Rental Solutions",
   description:
      "Welcome to ResideWell, your trusted source for premium house rentals. We provide a wide range of expert solutions to help you find the perfect house for your needs. Discover a diverse selection of rental properties and let us guide you in making the right choice for your new home. At ResideWell, we prioritize your comfort and satisfaction, making house hunting a hassle-free experience.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ReactQueryProvider>
               <Navbar />
               {children}
            </ReactQueryProvider>
         </body>
      </html>
   );
}
