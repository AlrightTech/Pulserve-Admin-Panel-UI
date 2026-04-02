"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  LayoutDashboard, Users, CreditCard, BarChart3, 
  Settings, LogOut, X, ChevronLeft, ChevronRight 
} from "lucide-react";

const Sidebar = ({ isMobileOpen, setIsMobileOpen }: any) => {
  const [isOpen, setIsOpen] = useState(true); // Desktop toggle logic

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={17} />, active: true },
    { name: "User Management", icon: <Users size={17} />, active: false },
    { name: "Subscriptions", icon: <CreditCard size={17} />, active: false },
    { name: "Analytics", icon: <BarChart3 size={17} />, active: false },
    { name: "Settings", icon: <Settings size={17} />, active: false },
  ];

  return (
    <>
      <aside className={`
        fixed left-0 top-0 h-screen bg-custom-dark-blue flex flex-col text-custom-white z-40 transition-all duration-300
        ${isOpen ? "w-64" : "w-20"} 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:relative lg:translate-x-0
      `}>
        
        {/* Close Button for Mobile Sidebar */}
        <button 
          className="lg:hidden absolute top-5 right-5 text-white/70 hover:text-white"
          onClick={() => setIsMobileOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Desktop Collapse Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden lg:flex absolute -right-3 top-10 bg-custom-coral text-white rounded-full p-1 border-2 border-custom-dark-blue z-50 cursor-pointer transition-all"
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Logo Section */}
        <div className="p-4 lg:p-6 flex justify-center items-center h-20 lg:h-24">
          <div className="relative w-24 lg:w-32 h-5">
            {isOpen ? (
              <Image src="/images/pulserv-logo.png" alt="Logo" fill className="object-contain" priority />
            ) : (
              <Image src="/images/pulservy-icon.png" alt="Icon" width={32} height={32} className="mx-auto" priority />
            )}
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 lg:px-5 space-y-1 mt-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 lg:gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                isOpen ? "justify-start px-4" : "justify-center"
              } ${item.active ? "bg-custom-coral text-white" : "hover:bg-white/10 text-white/80"}`}
            >
              <div className="shrink-0">{item.icon}</div>
              {isOpen && <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>}
            </div>
          ))}
        </nav>

        {/* Log Out */}
        <div className="p-4 border-t border-white/10 mb-4">
          <div className={`flex items-center gap-4 p-3 text-white/70 hover:text-white cursor-pointer ${isOpen ? "justify-start px-4" : "justify-center"}`}>
            <LogOut size={18} />
            {isOpen && <span className="text-sm">Log Out</span>}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay (Background click to close) */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;