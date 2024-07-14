import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.scss";
import Navbar from "./Components/Navbar/navbar";
import SideBare from "./Components/sideBar/SideBar";
import Footer from "./Components/Footer/Footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="main">
        <Navbar />
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="menuContainer">
                <SideBare />
              </div>
            </div>

            <div className="col-10">
              <div className="contentContainer">{children}</div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
