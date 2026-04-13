"use client";
import React, { useState, useRef } from "react";
import Button from "@/app/components/ui/Button";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    fullName: "System Administrator",
    email: "admin@pulsurv.com",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  // Hidden input file ka reference
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image upload handle karne ka function
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Preview set kar rahe hain
    }
  };

  // Edit Photo click par hidden input trigger karna
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    console.log("Saving Data:", { ...formData, profileImage });
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({ fullName: "System Administrator", email: "admin@pulsurv.com" });
    setProfileImage(null);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      <h3 className="text-xl font-semibold text-custom-charcoal">Profile Information</h3>

      <div className="space-y-4">
        <p className="text-sm font-semibold text-custom-charcoal">Profile Photo</p>
        <div className="flex flex-col gap-5">      
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            className="hidden" 
            accept="image/*"
          />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-custom-dark-blue border-4 border-[#ED714D] flex items-center justify-center text-white text-xl font-bold overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              "SA"
            )}
          </div>     
          <button 
            type="button"
            onClick={triggerFileInput} 
            className="cursor-pointer text-custom-coral text-left text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-all"
          >
            Edit Photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 w-full p-3 rounded-lg border border-custom-border text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-4 rounded-lg border border-custom-border font-normal text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-50">
        <Button variant="soft" onClick={handleCancel} className="px-5 !py-4 text-sm">
          Cancel
        </Button>

        <Button variant="filled" onClick={handleSave} className="px-5 !py-4 text-sm">
          Save Changes
        </Button>
      </div>
    </div>
  );
}