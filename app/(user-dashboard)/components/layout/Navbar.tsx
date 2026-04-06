"use client";
import React, { useState } from 'react';
import { Menu, Search, X } from "lucide-react"; 
import Image from 'next/image';

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 lg:h-20 bg-white border-b border-[#0000001A] flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      
      {/* Left Section: Menu + Search */}
      <div className="flex items-center gap-3 flex-1">
        
        {/* Menu Button: Sirf Mobile par hide hoga jab search khulegi */}
        <button 
          onClick={onMenuClick}
          className={`lg:hidden p-2 bg-custom-dark-blue text-white rounded-md shrink-0 active:scale-95 ${
            isSearchOpen ? "hidden sm:block" : "block"
          }`}
        >
          <Menu size={20} />
        </button>

        {/* Search Logic */}
        <div className={`relative flex items-center transition-all duration-300 ${
          isSearchOpen ? "w-full" : "w-auto md:w-full md:max-w-[300px] lg:max-w-[355px]"
        }`}>
          
          {/* Mobile Search Toggle: Sirf 'sm' (640px) se niche nazar aayega */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-full text-gray-500"
          >
            {isSearchOpen ? <X size={20} className="text-custom-dark-blue" /> : <Search size={22} />}
          </button>

          {/* Input Field: Mobile par conditional, Tab (sm) aur Desktop (lg) par hamesha 'block' */}
          <div className={`relative w-full transition-all duration-300 ${
            isSearchOpen ? "block" : "hidden sm:block"
          }`}>
            <span className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-10">
              <Image 
                src="/images/svg-icons/search-icon.svg" 
                alt="Search" 
                width={16}
                height={16}
                className="opacity-60"
              />
            </span>
            <input
              type="text"
              placeholder="Search"
              autoFocus={isSearchOpen}
              className="w-full border border-gray-200 rounded-lg py-2 lg:py-3 pl-10 lg:pl-12 pr-4 text-sm focus:ring-1 focus:ring-custom-dark-blue outline-none bg-gray-50/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Icons & Profile */}
      {/* 'isSearchOpen' par hide sirf mobile (under 640px) par hoga */}
      <div className={`items-center gap-3 lg:gap-6 ml-3 ${
        isSearchOpen ? "hidden sm:flex" : "flex"
      }`}>
        <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors group">
          <Image 
            src="/images/svg-icons/notification-icon.svg" 
            alt="Notifications" 
            width={24} 
            height={24}
            className="lg:w-[28px] lg:h-[28px]"
          />
          <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
        </button>

        <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden border border-gray-100 relative cursor-pointer hover:border-custom-dark-blue transition-all">
          <Image 
            src="/images/profile-img.png" 
            alt="Profile" 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;