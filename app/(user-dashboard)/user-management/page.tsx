"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import FilterBar from './components/FilterBar';
import UserTable from './components/UserTable';
import AddClientModal from './components/AddClientModal';
import EditClientModal from './components/EditClientModal'; 
import PrivacyNotice from './components/PrivacyNotice';

const dummyClients = [
  { name: "Randall", email: "emily@innovationlabs.com", plan: "Professional", subStatus: "Suspended", activeSurveys: 5, totalResponses: "1,234", accountStatus: "Active" },
  { name: "Bernard", email: "sarah.j@techstart.io", plan: "Professional", subStatus: "Active", activeSurveys: 8, totalResponses: "2,145", accountStatus: "Active" },
  { name: "Floyd", email: "john.smith@acme.com", plan: "Enterprise", subStatus: "Active", activeSurveys: 12, totalResponses: "4,532", accountStatus: "Active" },
  { name: "Harold", email: "r.wilson@datadrive.com", plan: "Enterprise", subStatus: "Active", activeSurveys: 15, totalResponses: "6,789", accountStatus: "Disabled" },
  { name: "Ronald", email: "m.chen@globalsolutions.com", plan: "Basic", subStatus: "Expired", activeSurveys: 0, totalResponses: "856", accountStatus: "Active" },
];

export default function UserManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Edit modal ki state
  const [selectedClient, setSelectedClient] = useState(null); // Select kiya gaya client

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("All Plans");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  // Edit button click handler
  const handleEditClick = (client: any) => {
    setSelectedClient(client);
    setIsEditModalOpen(true);
  };

  const filteredClients = dummyClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = selectedPlan === "All Plans" || client.plan === selectedPlan;
    const matchesStatus = selectedStatus === "All Statuses" || client.subStatus === selectedStatus;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader 
        title="User Management" 
        subtitle="View and manage client accounts and subscription status"
        primaryBtnText="Add New Client"
        PrimaryIcon={Plus}
        onPrimaryClick={() => setIsModalOpen(true)}
        showSecondaryBtn={false}
        primaryBtnClass="bg-[#001F3F] text-white"
      />

      <FilterBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan} 
        selectedStatus={selectedStatus} 
        setSelectedStatus={setSelectedStatus} 
      />

      {/* UserTable ko onEdit prop pass kiya hai */}
      <UserTable 
        clients={filteredClients} 
        onEdit={handleEditClick} 
      />

      <PrivacyNotice />

      {/* Add Client Modal */}
      <AddClientModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Edit Client Modal */}
      <EditClientModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        clientData={selectedClient} 
      />
    </div>
  );
}