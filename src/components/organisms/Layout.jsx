import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "@/components/organisms/Header";

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-md">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;