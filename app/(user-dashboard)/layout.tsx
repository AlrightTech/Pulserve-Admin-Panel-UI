"use client";
import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mobile sidebar control ke liye state
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    /* 1. 'h-screen' aur 'overflow-hidden' se poora page lock ho jayega */
    <div className="flex h-screen overflow-hidden bg-custom-white">
      
      {/* Sidebar ko state aur close function pass kiya */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} /> 
      
      {/* 2. Main wrapper ko bhi 'h-full' aur 'overflow-hidden' diya taake layout fix rahe */}
      <div className="flex-1 flex flex-col min-w-0 h-full transition-all duration-300">
        
        {/* Navbar (Header): 'shrink-0' zaroori hai taake ye scroll na ho */}
        <Navbar onMenuClick={() => setIsMobileOpen(true)} /> 
        
        {/* 3. Main Content: 'flex-1' aur 'overflow-y-auto' se sirf ye area scroll hoga */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-[1400px] mx-auto">
             {children}
          </div>
        </main>

      </div>
    </div>
  );
}