"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, X, LogOut, Settings, User, ChevronRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Step 1: Router import karein

const notifications = [
  { id: 1, title: "New subscription activated", desc: "Guy Hawkins just activated Premium plan.", time: "2 min ago", unread: true },
  { id: 2, title: "Payment received",           desc: "Bernard Lane paid $299 for Standard plan.", time: "1 hr ago",  unread: true },
  { id: 3, title: "Trial expiring soon",         desc: "Calvin's trial expires in 2 days.",         time: "3 hr ago",  unread: false },
  { id: 4, title: "Subscription cancelled",      desc: "Arlene McCoy cancelled her plan.",           time: "1 day ago", unread: false },
];

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const router = useRouter(); // Step 2: Router initialize karein
  const [isSearchOpen,  setIsSearchOpen]  = useState(false);
  const [isNotiOpen,    setIsNotiOpen]    = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifList,     setNotifList]     = useState(notifications);
  const [isMobile,      setIsMobile]      = useState(false);

  // ... (Baaki saare refs aur effects wahi rahenge)
  const notiButtonRef    = useRef<HTMLButtonElement>(null);
  const profileButtonRef = useRef<HTMLDivElement>(null);
  const notiDropRef      = useRef<HTMLDivElement>(null);
  const profileDropRef   = useRef<HTMLDivElement>(null);

  const [notiPos,    setNotiPos]    = useState({ top: 0, right: 0 });
  const [profilePos, setProfilePos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openNoti = () => {
    if (notiButtonRef.current) {
      const rect = notiButtonRef.current.getBoundingClientRect();
      if (isMobile) {
        setNotiPos({ top: rect.bottom + 8, right: 0 });
      } else {
        setNotiPos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
      }
    }
    setIsNotiOpen(p => !p);
    setIsProfileOpen(false);
  };

  const openProfile = () => {
    if (profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      setProfilePos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
    }
    setIsProfileOpen(p => !p);
    setIsNotiOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        notiDropRef.current && !notiDropRef.current.contains(target) &&
        notiButtonRef.current && !notiButtonRef.current.contains(target)
      ) setIsNotiOpen(false);

      if (
        profileDropRef.current && !profileDropRef.current.contains(target) &&
        profileButtonRef.current && !profileButtonRef.current.contains(target)
      ) setIsProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unreadCount = notifList.filter(n => n.unread).length;
  const markAllRead = () => setNotifList(prev => prev.map(n => ({ ...n, unread: false })));

  // Navigation Handlers
  const handleLogout = () => {
    setIsProfileOpen(false);
    router.push('/login'); // localhost:3000/login par le jayega
  };

  const handleViewAllNotifications = () => {
    setIsNotiOpen(false);
    router.push('/notifications'); // folder structure ke mutabiq route
  };

  return (
    <>
      <header className="h-16 lg:h-20 bg-white border-b border-[#0000001A] flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onMenuClick}
            className={`lg:hidden p-2 bg-custom-dark-blue text-white rounded-md shrink-0 active:scale-95 ${
              isSearchOpen ? "hidden sm:block" : "block"
            }`}
          >
            <Menu size={20} />
          </button>

          <div className={`relative flex items-center transition-all duration-300 ${
            isSearchOpen ? "w-full" : "w-auto md:w-full md:max-w-[300px] lg:max-w-[355px]"
          }`}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="sm:hidden p-2 hover:bg-gray-100 rounded-full text-gray-500"
            >
              {isSearchOpen ? <X size={20} className="text-custom-dark-blue" /> : <Search size={22} />}
            </button>

            <div className={`relative w-full transition-all duration-300 ${
              isSearchOpen ? "block" : "hidden sm:block"
            }`}>
              <span className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-10">
                <Image src="/images/svg-icons/search-icon.svg" alt="Search" width={18} height={18} />
              </span>
              <input
                type="text"
                placeholder="Search"
                autoFocus={isSearchOpen}
                className="w-full font-normal text-custom-medium-gray border border-custom-border rounded-lg py-2 lg:py-3 pl-10 lg:pl-12 pr-4 text-sm focus:ring-1 focus:ring-custom-dark-blue outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className={`items-center gap-3 lg:gap-6 ml-3 ${isSearchOpen ? "hidden sm:flex" : "flex"}`}>
          <button
            ref={notiButtonRef}
            onClick={openNoti}
            className="cursor-pointer relative p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Image
              src="/images/svg-icons/notification-icon.svg"
              alt="Notifications"
              width={24}
              height={24}
              className="lg:w-[28px] lg:h-[28px]"
            />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full border-2 border-white" />
            )}
          </button>

          <div
            ref={profileButtonRef}
            onClick={openProfile}
            className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden border border-gray-100 relative cursor-pointer hover:border-custom-dark-blue transition-all"
          >
            <Image src="/images/profile-img.png" alt="Profile" fill className="object-cover" />
          </div>
        </div>
      </header>

      {/* ── Notification Dropdown ── */}
      {isNotiOpen && (
        <div
          ref={notiDropRef}
          style={
            isMobile
              ? { top: notiPos.top, left: "50%", transform: "translateX(-50%)" }
              : { top: notiPos.top, right: notiPos.right }
          }
          className="fixed w-[90vw] sm:w-80 bg-white rounded-xl border border-gray-100 shadow-xl z-[999] overflow-hidden"
        >
          {/* ... Header & List (Wahi purana UI) */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-custom-charcoal">Notifications</p>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-xs text-custom-coral font-medium hover:underline cursor-pointer"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
            {notifList.map(n => (
              <div
                key={n.id}
                className={`flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                  n.unread ? "bg-blue-50/40" : ""
                }`}
              >
                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.unread ? "bg-blue-500" : "bg-transparent"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-custom-charcoal">{n.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{n.desc}</p>
                  <p className="text-[10px] text-gray-300 mt-1">{n.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer with Router Push */}
          <div className="border-t border-gray-100 px-4 py-2.5">
            <button 
              onClick={handleViewAllNotifications} // Click handle kiya
              className="w-full text-xs text-center text-custom-coral font-medium hover:underline flex items-center justify-center gap-1 cursor-pointer"
            >
              View all notifications <ChevronRight size={12} />
            </button>
          </div>
        </div>
      )}

      {/* ── Profile Dropdown ── */}
      {isProfileOpen && (
        <div
          ref={profileDropRef}
          style={{ top: profilePos.top, right: profilePos.right }}
          className="fixed w-56 bg-white rounded-xl border border-gray-100 shadow-xl z-[999] overflow-hidden"
        >
          {/* ... Top Section */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-bold text-custom-charcoal">System Admin</p>
            <p className="text-xs text-gray-400 mt-0.5">admin@pulserv.com</p>
          </div>

          <div className="py-1">
            <Link href="/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <User size={15} className="text-gray-400" /> My Profile
            </Link>
            <Link href="/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Settings size={15} className="text-gray-400" /> Settings
            </Link>
          </div>

          <div className="border-t border-gray-100 py-1">
            <button 
              onClick={handleLogout} // Click handle kiya
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;