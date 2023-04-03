import { ContextProvider } from "@/context/context";
import "./globals.css";
import NavBar from "./components/layout/Navbar";
import SidebarLeft from "./components/layout/SidebarLeft";
import SidebarRight from "./components/layout/SidebarRight";

export const metadata = {
  title: "Portfolio | Johann Ranudd",
  description: "This is a web developer portfolio website",
  keywords: "web developer, next.js, typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className="bg-primary text-secondary">
          {/* <NavBar />
          <SidebarLeft />
          <SidebarRight /> */}
          <main>{children}</main>
        </body>
      </ContextProvider>
    </html>
  );
}
