import "../../styles/globals.css";
import { Inter } from "next/font/google";
import GlassPane from "@/components/GlassPane";
// import { Sidebar } from "react-feather";
import Card from "@/components/Card";
import { links } from "@/components/Sidebar";
import SidebarLink from "@/components/SidebarLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin-ext"],
});


export default function DashboardRootLayout({children}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane
          className="w-full h-full flex items-center justify-center">
            {/* <Sidebar /> */}
            <Card className="h-full w-40 flex items-center justify-between flex-wrap">
              {links.map((link) => (
                  <SidebarLink key={link.label} link={link} />
              ))}
            </Card>  
            {children}
        </GlassPane>
      </body>
    </html>
  )
}