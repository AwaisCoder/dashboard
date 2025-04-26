import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AccountProgress from "@/components/AccountProgress";
import TotalFranchisees from "@/components/TotalFranchisees";
import KeyInsights from "@/components/KeyInsights";
import FinancialWellbeing from "@/components/FinancialWellbeing";
import ProspectLeads from "@/components/ProspectLeads";
import PendingQuestions from "@/components/PendingQuestions";
import ChatAssistant from "@/components/ChatAssistant";

const Index: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="w-full border-b border-gray-200"></div>
        <div className="flex-1 overflow-y-auto p-4">
          {/* Top section with a flex layout */}
          <div className="flex gap-4">
            {/* Left column - Account Progress */}
            <div className="w-1/3">
              <AccountProgress />
            </div>

            {/* Right column - contains 2 rows of components */}
            <div className="flex flex-col w-2/3 gap-4">
              {/* Top row in right column */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <TotalFranchisees />
                </div>
                <div className="flex-1">
                  <KeyInsights />
                </div>
              </div>

              {/* Bottom row in right column */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <FinancialWellbeing />
                </div>
                <div className="flex-1">
                  <ProspectLeads />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-4 flex gap-4">
            <div className="flex-1">
              <div className="w-full">
                <PendingQuestions />
              </div>
            </div>
            <div className="flex-1">
              <ChatAssistant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
