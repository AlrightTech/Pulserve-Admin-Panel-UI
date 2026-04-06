import React from 'react';
import { Plus } from 'lucide-react';
import WelcomeHeader from '@/app/(user-dashboard)/components/dashboard/WelcomeHeader';

const UserManagementHeader = () => {
  return (
    <WelcomeHeader 
      title="User Management"
      subtitle="View and manage client accounts and subscription status"
      // Primary Button (Blue wala jo image mein hai)
      primaryBtnText="Add New Client"
      PrimaryIcon={Plus}
      // Agar aapko yahan 'Export' button nahi chahiye toh niche wala prop false kar dein
      showSecondaryBtn={false} 
      // Custom class for the blue button color in your image
      primaryBtnClass="bg-[#001F3F] hover:bg-[#00152b] text-white"
    />
  );
};

export default UserManagementHeader;