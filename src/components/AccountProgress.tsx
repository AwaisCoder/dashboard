import React from "react";
import CircularProgress from "./CircularProgress"; // Assuming this component is correct
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react"; // Import a suitable checkmark icon

// Interface and data remain the same
interface StepItem {
  title: string;
  completed: boolean;
}

const completedSteps: StepItem[] = [
  { title: "Profile Setup", completed: true },
  { title: "Initial Training", completed: true },
  { title: "Legal Documents", completed: true },
];

const remainingSteps: StepItem[] = [
  { title: "Financial Integration", completed: false },
  { title: "Final Review", completed: false },
];

// Helper component for individual step items for cleaner code
const StepDisplay: React.FC<{ step: StepItem }> = ({ step }) => (
  <div className="flex items-center justify-between">
    {" "}
    {/* Use justify-between */}
    {/* Left side: Dot and Title */}
    <div className="flex items-center space-x-2.5">
      {" "}
      {/* Group dot and title */}
      <div className="h-2 w-2 flex-shrink-0 rounded-full bg-slate-300"></div>{" "}
      {/* Simple grey dot */}
      <span className="text-sm text-slate-700">{step.title}</span>
    </div>
    {/* Right side: Checkmark Icon (styled based on completion) */}
    <CheckCircle2
      size={18}
      // Use solid green for completed, lighter/faded green for remaining as per target
      className={
        step.completed ? "text-green-500" : "text-green-500 opacity-50"
      } // Or text-green-300
    />
  </div>
);

const AccountProgress: React.FC = () => {
  // Calculate percentage based on actual data for better accuracy
  const totalSteps = completedSteps.length + remainingSteps.length;
  const currentProgress = 85;

  return (
    // Added flex flex-col to allow content spacing/stretching
    <Card className="h-full shadow-sm w-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">
          Account Progress
        </CardTitle>{" "}
        {/* Adjusted style */}
      </CardHeader>
      {/* Make content area flexible and add overall padding/spacing */}
      <CardContent className="flex-1 flex flex-col items-center pt-2 pb-4 px-4 space-y-4">
        {/* Progress Circle */}
        <div className="py-2">
          {" "}
          {/* Added padding around circle */}
          <CircularProgress percentage={currentProgress} />{" "}
          {/* Use calculated percentage */}
        </div>
        <hr className="w-full border-t border-gray-200" />
        {/* Steps Completed Block */}
        {/* Replaced nested Card with a styled div */}
        <div className="w-full rounded-lg bg-slate-50 p-4">
          <div className="mb-3 text-sm font-semibold text-slate-800">
            {" "}
            {/* Adjusted title style */}
            Steps Completed
          </div>
          <div className="space-y-2.5">
            {" "}
            {/* Adjust spacing between items */}
            {completedSteps.map((step, index) => (
              <StepDisplay key={`comp-${index}`} step={step} />
            ))}
            {completedSteps.length === 0 && (
              <p className="text-sm text-slate-500 italic">
                No steps completed yet.
              </p>
            )}
          </div>
        </div>

        {/* Steps Remaining Block */}
        {/* Replaced nested Card with a styled div */}
        <div className="w-full rounded-lg bg-slate-50 p-4">
          <div className="mb-3 text-sm font-semibold text-slate-800">
            {" "}
            {/* Adjusted title style */}
            Steps Remaining
          </div>
          <div className="space-y-2.5">
            {" "}
            {/* Adjust spacing between items */}
            {remainingSteps.map((step, index) => (
              <StepDisplay key={`rem-${index}`} step={step} />
            ))}
            {remainingSteps.length === 0 && (
              <p className="text-sm text-slate-500 italic">
                All steps completed!
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountProgress;
