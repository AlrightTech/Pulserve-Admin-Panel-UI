import React from 'react';
import { Plus } from 'lucide-react';
import WelcomeHeader from '@/app/(user-dashboard)/components/dashboard/WelcomeHeader';
import Button from '@/app/components/ui/Button'; 

const UserManagementHeader = () => {
  return (
    <WelcomeHeader 
      title="User Management"
      subtitle="View and manage client accounts and subscription status"
      primaryButton={
        <Button variant="filled" className=" ">
          <Plus size={14} /> Add New Client
        </Button>
      }
      showSecondaryBtn={false}
    />
  );
};

export default UserManagementHeader;