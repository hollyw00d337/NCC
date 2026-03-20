import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
