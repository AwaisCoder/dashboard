import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp } from "lucide-react"; // Import an arrow icon (assuming lucide-react)
import AnimatedNumber from "./AnimatedNumber";

// Define the interface for stage details
interface StageDetail {
  name: string;
  count: number; // Use number for calculations
  color: string; // Add color for dot and bar segment
}

// Define the total number of franchisees
const totalFranchiseesCount = 14;

// Define stage data with colors
const stages: StageDetail[] = [
  { name: "Stage 1 (Initial Inquiry)", count: 2, color: "bg-sky-600" }, // Darker blue
  { name: "Stage 2 (Document Submission)", count: 7, color: "bg-sky-500" }, // Medium blue
  { name: "Stage 3 (Training)", count: 5, color: "bg-sky-400" }, // Lighter blue
];

// Verify counts add up (optional but good practice)
const sumOfStages = stages.reduce((acc, stage) => acc + stage.count, 0);
if (sumOfStages !== totalFranchiseesCount) {
  console.warn(
    `Warning: Stage counts (${sumOfStages}) do not sum up to the total (${totalFranchiseesCount}). Adjusting total for calculation.`
  );
  // You might want to handle this discrepancy, e.g., use sumOfStages for percentage calculation
}

const TotalFranchisees: React.FC = () => {
  return (
    <Card className="shadow-sm w-full h-full">
      {" "}
      {/* Added max-width for better demo */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">
          Total Franchisees Onboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Top section: Total count and percentage */}
        <div className="flex items-start justify-between mb-3">
          {" "}
          {/* Use items-start */}
          <div className="flex items-center">
            {" "}
            {/* Group count and percentage */}
            <div className="text-3xl font-bold mr-3">
              <AnimatedNumber value={totalFranchiseesCount} />
            </div>
            <div className="flex items-center rounded-full border border-green-500 px-2 py-0.5 text-xs text-green-500 font-medium">
              <ArrowUp size={12} className="mr-1 stroke-current" />{" "}
              {/* Added Arrow Icon */}
              <AnimatedNumber value={7.4} format={(n) => `${n.toFixed(1)}%`} />
            </div>
          </div>
          {/* User Avatars */}
          <div className="flex -space-x-2">
            {" "}
            {/* Use -space-x for overlap */}
            <img
              src="/assets/pfp.jpg" // Replace with actual paths/URLs
              alt="User 1"
              className="h-6 w-6 rounded-full border-2 border-white" // Added border for better separation
              title="User 1 Name" // Add tooltips if desired
            />
            <img
              src="/assets/pfp2.jpg" // Replace with actual paths/URLs
              alt="User 2"
              className="h-6 w-6 rounded-full border-2 border-white"
              title="User 2 Name"
            />
            <img
              src="/assets/pfp3.png" // Replace with actual paths/URLs
              alt="User 3"
              className="h-6 w-6 rounded-full border-2 border-white"
              title="User 3 Name"
            />
            <img
              src="/assets/pfp4.png" // Replace with actual paths/URLs
              alt="User 4"
              className="h-6 w-6 rounded-full border-2 border-white"
              title="User 4 Name"
            />
            {/* "+N" indicator */}
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600 font-medium border-2 border-white">
              +7 {/* Updated Number */}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="my-4 flex h-2 w-full rounded-full overflow-hidden bg-gray-200">
          {stages.map((stage, index) => {
            const percentage = (stage.count / totalFranchiseesCount) * 100;
            return (
              <div
                key={`bar-${index}`}
                className={`${stage.color}`} // Use color defined in stage data
                style={{ width: `${percentage}%` }}
                title={`${stage.name}: ${stage.count} (${percentage.toFixed(
                  1
                )}%)`} // Add tooltip
              ></div>
            );
          })}
        </div>

        {/* Stage Details List */}
        <div className="mt-4 space-y-3">
          {stages.map((stage, index) => (
            <div
              key={`list-${index}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                {/* Use stage color for the dot */}
                <div
                  className={`mr-2 h-2 w-2 rounded-full ${stage.color}`}
                ></div>
                <span className="text-sm text-gray-600">{stage.name}</span>{" "}
                {/* Slightly muted text */}
              </div>
              {/* Format count with leading zero */}
              <span className="font-bold text-sm">
                {stage.count.toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalFranchisees;
