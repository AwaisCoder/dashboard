import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedNumber from "./AnimatedNumber";

const KeyInsights: React.FC = () => {
  return (
    // Add w-full h-full if needed for grid layout consistency
    <Card className="shadow-sm w-full h-full">
      <CardHeader className="pb-3">
        {" "}
        {/* Slightly adjusted padding */}
        <CardTitle className="text-base font-semibold">
          {" "}
          {/* Adjusted size/weight */}
          Key Insights & Feedback
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {" "}
        {/* Add vertical space between sections */}
        {/* Top Section: Sales Growth & Performer Badge */}
        <div className="flex items-start justify-between gap-4">
          {" "}
          {/* Use items-start for top alignment */}
          {/* Left: Percentage and Label */}
          <div>
            <div className="text-3xl font-bold">
              <AnimatedNumber value={10} format={(n) => `${n.toFixed(0)}%`} />
            </div>
            <div className="text-sm text-slate-500">Sales Growth</div>{" "}
            {/* Adjusted size/color */}
          </div>
          {/* Right: Logo and Badge */}
          <div className="flex flex-col items-end gap-2">
            {" "}
            {/* Stack logo and badge vertically, align right */}
            {/* Placeholder for the Logo */}
            <img
              src="/assets/pfp2.jpg" // <-- **** REPLACE with your actual logo path ****
              alt="Top Performer Logo"
              className="h-10 w-10 rounded-full object-contain" // Adjust size as needed
            />
            {/* Top Performer Badge */}
            <div className="whitespace-nowrap rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600">
              {" "}
              {/* Badge Styling */}
              Top Performer
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t border-gray-200" />
        {/* Bottom Section: Feedback Block */}
        <div className="rounded-lg bg-slate-50 p-4">
          {" "}
          {/* Added background, padding, rounding */}
          <div className="mb-2 text-sm font-semibold">Feedback</div>{" "}
          {/* Adjusted size/weight */}
          {/* Feedback item with dot */}
          <div className="flex items-center">
            <div className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400"></div>{" "}
            {/* Grey dot */}
            <div className="text-sm text-slate-600">
              {" "}
              {/* Adjusted color */}
              Franchisees are requesting more detailed training materials.
            </div>
          </div>
          {/* "Last updated" removed as per target image */}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyInsights;
