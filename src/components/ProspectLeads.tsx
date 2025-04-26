import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui

// Interface remains the same
interface ProspectData {
  image: string;
  name: string;
  stage: string;
}

// Updated data to match the target image (URLs are examples, use your actual ones)
const prospects: ProspectData[] = [
  {
    image: "/assets/pfp.jpg", // Replace with actual path/URL from target
    name: "Wade Warren",
    stage: "Initial Inquiry",
  },
  {
    image: "/assets/pfp2.jpg", // Replace with actual path/URL from target (Seems like Ava Wright?)
    name: "Ava Wright", // Name updated
    stage: "Initial Inquiry",
  },
  {
    image: "/assets/pfp3.png", // Replace with actual path/URL from target
    name: "Cody Fisher",
    stage: "Initial Inquiry",
  },
];

const ProspectLeads: React.FC = () => {
  return (
    // Added w-full and potentially h-full if needed for grid layout
    <Card className="shadow-sm w-full">
      <CardHeader className="pb-4">
        {" "}
        {/* Slightly more padding-bottom */}
        <CardTitle className="text-lg font-semibold">
          Prospect Leads
        </CardTitle>{" "}
        {/* Slightly bolder */}
      </CardHeader>
      <CardContent className="space-y-3">
        {" "}
        {/* Adjust spacing between items */}
        {prospects.map((prospect, index) => (
          // 1. Wrapper for each prospect item with background, padding, rounding
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-slate-50 p-3" // Use bg-gray-50 or bg-slate-50, adjust padding (p-2 or p-3), rounding (rounded-md or rounded-lg)
          >
            {/* 2. Group Image and Name together */}
            <div className="flex items-center space-x-3">
              {" "}
              {/* Add space between image and name */}
              <img
                src={prospect.image}
                alt={prospect.name}
                className="h-10 w-10 rounded-full" // Slightly larger image
              />
              <span className="text-sm font-medium">{prospect.name}</span>{" "}
              {/* Adjusted text size/weight if needed */}
            </div>

            {/* 3. Stage text pushed to the right by justify-between */}
            <div className="text-xs text-slate-500">
              {" "}
              {/* Adjusted text size and color */}
              Stage: {prospect.stage}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProspectLeads;
