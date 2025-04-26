import React from "react";

interface SidebarItemProps {
  text: string;
  active?: boolean;
  badge?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, active, badge }) => {
  return (
    <div
      className={`flex items-center justify-between py-3 pl-4 text-sm relative ${
        active
          ? "bg-[#0a374e] text-white border-l-4 border-[#38bdf8]"
          : "text-gray-300 hover:bg-[#15597a] border-l-4 border-transparent"
      }`}
    >
      <span>{text}</span>
      {badge && (
        <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#15597a] text-xs text-white">
          {badge}
        </span>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-[220px] bg-[#0a374e] text-white">
      {" "}
      {/* Changed from w-[121px] to w-[220px] */}
      <div className="p-4 pt-11">
        <SidebarItem text="Home" active />
        <SidebarItem text="Stages & Checklist" />
        <SidebarItem text="Upload Docs" />
        <SidebarItem text="Preferred Vendors" />
        <SidebarItem text="Tech Stack" />
        <SidebarItem text="Targets" />
        <SidebarItem text="Zee Sales Targets" />
        <SidebarItem text="M&I Settings" />
        <SidebarItem text="Pending Questions" badge={2} />
      </div>
      <div className="absolute bottom-4 left-4 text-sm text-gray-300">
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
