"use client";
import React, { useState } from 'react';
import { Bell, Check, Trash2, MoreVertical, Filter } from 'lucide-react';

const initialNotifications = [
  { id: 1, title: "New subscription activated", desc: "Guy Hawkins just activated Premium plan.", time: "2 min ago", unread: true, category: "Subscription" },
  { id: 2, title: "Payment received",           desc: "Bernard Lane paid $299 for Standard plan.", time: "1 hr ago",  unread: true, category: "Payment" },
  { id: 3, title: "Trial expiring soon",         desc: "Calvin's trial expires in 2 days.",         time: "3 hr ago",  unread: false, category: "Alert" },
  { id: 4, title: "Subscription cancelled",      desc: "Arlene McCoy cancelled her plan.",           time: "1 day ago", unread: false, category: "Subscription" },
  { id: 5, title: "New Login Detected",          desc: "Your account was accessed from a new device.", time: "2 days ago", unread: false, category: "Security" },
];

const NotificationsPage = () => {
  const [notifs, setNotifs] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifs(notifs.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const deleteNotif = (id: number) => {
    setNotifs(notifs.filter(n => n.id !== id));
  };

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-custom-charcoal">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your alerts and system updates</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-custom-dark-blue bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Check size={16} /> Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        {notifs.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {notifs.map((n) => (
              <div 
                key={n.id} 
                className={`group flex items-start gap-4 p-4 lg:p-6 transition-all hover:bg-gray-50/80 ${
                  n.unread ? "bg-blue-50/30 border-l-4 border-l-custom-dark-blue" : "border-l-4 border-l-transparent"
                }`}
              >
                {/* Icon Wrapper */}
                <div className={`p-2.5 rounded-full shrink-0 ${n.unread ? "bg-white shadow-sm" : "bg-gray-100"}`}>
                  <Bell size={20} className={n.unread ? "text-custom-dark-blue" : "text-gray-400"} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{n.category}</span>
                    <span className="text-xs text-gray-400">{n.time}</span>
                  </div>
                  <h3 className={`text-sm lg:text-base mt-1 ${n.unread ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                    {n.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {n.desc}
                  </p>

                  {/* Actions (Visible on Hover) */}
                  <div className="flex items-center gap-4 mt-3">
                    {n.unread && (
                      <button 
                        onClick={() => markAsRead(n.id)}
                        className="text-xs font-semibold text-custom-dark-blue hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotif(n.id)}
                      className="text-xs font-semibold text-red-500 hover:underline flex items-center gap-1"
                    >
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>

                {/* Options Menu Button */}
                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell size={32} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">All caught up!</h3>
            <p className="text-gray-500">No new notifications at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;