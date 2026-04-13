"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Users, CreditCard, BarChart3, 
  Settings, X, ChevronLeft, ChevronRight 
} from "lucide-react";

const Sidebar = ({ isMobileOpen, setIsMobileOpen }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { 
      name: "Dashboard", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.23583 1.5812C8.63221 1.53449 9.03161 1.6392 9.35409 1.87437C9.67657 2.10955 9.89834 2.45784 9.975 2.84953L9.99583 2.9887L10 3.07537V8.9087C10 9.11281 10.075 9.30981 10.2106 9.46234C10.3462 9.61487 10.5331 9.71232 10.7358 9.7362L10.8333 9.74203H16.5C16.942 9.74203 17.3659 9.91763 17.6785 10.2302C17.9911 10.5427 18.1667 11.4087 18.1667 11.4087C18.1666 11.4721 18.1594 11.5353 18.145 11.597C17.8115 13.0359 17.1016 14.3603 16.0879 15.4346C15.0742 16.5089 13.7932 17.2944 12.3761 17.7108C10.959 18.1272 9.45667 18.1595 8.02298 17.8043C6.5893 17.4491 5.27577 16.7193 4.21691 15.6895C3.15806 14.6597 2.39193 13.367 1.99697 11.9438C1.60202 10.5205 1.59244 9.0179 1.96921 7.58973C2.34598 6.16157 3.09557 4.85921 4.14121 3.81602C5.18684 2.77283 6.49096 2.02629 7.92 1.65287L8.145 1.59703L8.23583 1.5812Z" fill="white"/>
          <path d="M11.6667 2.6587V7.24203C11.6667 7.46304 11.7545 7.675 11.9107 7.83129C12.067 7.98757 12.279 8.07536 12.5 8.07536H17.0833C17.2165 8.07533 17.3478 8.04336 17.4661 7.98215C17.5844 7.92093 17.6863 7.83225 17.7632 7.72354C17.8402 7.61483 17.89 7.48925 17.9084 7.35734C17.9269 7.22542 17.9134 7.09101 17.8692 6.96536C17.4553 5.78981 16.783 4.72206 15.9018 3.84073C15.0206 2.9594 13.953 2.28694 12.7775 1.87286C12.6518 1.82848 12.5173 1.81489 12.3853 1.83324C12.2533 1.85159 12.1276 1.90134 12.0187 1.97832C11.9099 2.05531 11.8211 2.15727 11.7599 2.27566C11.6986 2.39404 11.6667 2.5254 11.6667 2.6587Z" fill="white"/>
        </svg>
      ), 
      path: "/" 
    },
    { name: "User Management", icon: <Users size={17} />, path: "/user-management" },
    { name: "Subscriptions", icon: <CreditCard size={17} />, path: "/subscriptions" },
    { name: "Analytics", icon: <BarChart3 size={17} />, path: "/analytics" },
    { name: "Settings", icon: <Settings size={17} />, path: "/settings" },
  ];

  const handleLogout = () => {
    router.push('/login'); 
  };

  return (
    <>
      <aside className={`
        fixed left-0 top-0 h-screen bg-custom-dark-blue flex flex-col text-custom-white z-40 transition-all duration-300
        ${isOpen ? "w-64" : "w-20"} 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:relative lg:translate-x-0
      `}>
        
        {/* Top Row with Close Icon for Mobile */}
        <div className="flex justify-end px-4 pt-4 lg:hidden">
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Desktop Collapse Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden lg:flex absolute -right-3 top-10 bg-custom-coral text-white rounded-full p-1 border-2 border-custom-dark-blue z-50 cursor-pointer transition-all"
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Logo Section */}
        <div className="p-4 lg:p-6 flex justify-center items-center h-20 lg:h-24">
          <div className="relative w-24 lg:w-32 h-5 text-center">
            {isOpen ? (
              <Image src="/images/pulserv-logo.png" alt="Logo" fill className="object-contain" priority />
            ) : (
              <Image src="/images/pulservy-icon.png" alt="Icon" width={32} height={32} className="mx-auto" priority />
            )}
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 lg:px-5 space-y-1 mt-4">
          {menuItems.map((item) => {
            // Updated active logic for nested routes
            const isActive = item.path === "/" 
              ? pathname === "/" 
              : pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 lg:gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                  isOpen ? "justify-start px-4" : "justify-center"
                } ${isActive ? "bg-custom-coral text-white" : "hover:bg-white/10 text-white/80"}`}
              >
                <div className="shrink-0">{item.icon}</div>
                {isOpen && <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Log Out Section */}
        <div className="p-4 border-t border-white/10 mb-4">
          <div 
            onClick={handleLogout}
            className={`flex items-center gap-4 p-3 text-white/70 hover:text-white cursor-pointer transition-colors ${
              isOpen ? "justify-start px-4" : "justify-center"
            }`}
          >
            <div className="shrink-0">
              <svg width="16" height="15" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.352 12.6953H13.9789C13.8852 12.6953 13.7973 12.7364 13.7387 12.8086C13.602 12.9746 13.4555 13.1348 13.3012 13.2871C12.6702 13.9189 11.9227 14.4223 11.1 14.7696C10.2478 15.1295 9.33182 15.3142 8.40668 15.3125C7.47114 15.3125 6.56489 15.1289 5.71333 14.7696C4.89072 14.4223 4.14321 13.9189 3.51215 13.2871C2.87996 12.6576 2.37587 11.9114 2.02778 11.0899C1.66645 10.2383 1.48481 9.33401 1.48481 8.39847C1.48481 7.46292 1.6684 6.55862 2.02778 5.70706C2.37543 4.8848 2.87543 4.14456 3.51215 3.5098C4.14887 2.87503 4.88911 2.37503 5.71333 2.02737C6.56489 1.668 7.47114 1.4844 8.40668 1.4844C9.34223 1.4844 10.2485 1.66605 11.1 2.02737C11.9243 2.37503 12.6645 2.87503 13.3012 3.5098C13.4555 3.66409 13.6 3.82425 13.7387 3.98831C13.7973 4.06058 13.8872 4.10159 13.9789 4.10159H15.352C15.475 4.10159 15.5512 3.96487 15.4829 3.86136C13.9848 1.53323 11.3637 -0.00778293 8.3852 2.95677e-05C3.70551 0.0117483 -0.0464405 3.81058 0.000434481 8.48441C0.0473095 13.084 3.7934 16.7969 8.40668 16.7969C11.3774 16.7969 13.9868 15.2578 15.4829 12.9356C15.5493 12.8321 15.475 12.6953 15.352 12.6953ZM17.0883 8.27542L14.3168 6.08792C14.2133 6.00589 14.0629 6.08011 14.0629 6.21097V7.69534H7.93012C7.84418 7.69534 7.77387 7.76565 7.77387 7.85159V8.94534C7.77387 9.03128 7.84418 9.10159 7.93012 9.10159H14.0629V10.586C14.0629 10.7168 14.2153 10.791 14.3168 10.709L17.0883 8.52151C17.107 8.5069 17.1221 8.48822 17.1325 8.4669C17.1429 8.44559 17.1483 8.42218 17.1483 8.39847C17.1483 8.37475 17.1429 8.35135 17.1325 8.33003C17.1221 8.30871 17.107 8.29004 17.0883 8.27542Z" fill="white"/>
              </svg>
            </div>
            {isOpen && <span className="text-sm font-medium">Log Out</span>}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
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