import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp } from "lucide-react"; // Importing ArrowUp icon
import AnimatedNumber from "./AnimatedNumber";

const FinancialWellbeing: React.FC = () => {
  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">
          Financial Wellbeing
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold">
            <AnimatedNumber value={20} />
          </div>
          <div className="flex items-center rounded-full border border-green-500 px-2 py-0.5 text-xs text-green-500 font-medium">
            <ArrowUp size={12} className="mr-1 stroke-current" />{" "}
            {/* Added Arrow Icon */}
            <AnimatedNumber value={2.1} format={(n) => `${n.toFixed(1)}%`} />
          </div>
        </div>
        <div className="text-xs text-dashboard-grey mb-6">
          Total Franchisees
        </div>

        {/* Mini Cards Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Target Card */}
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
            <span className="text-sm mb-2">Target</span>
            <span className="text-xl font-medium">
              <AnimatedNumber
                value={500000}
                format={(n) => `$${Math.round(n).toLocaleString()}`}
              />
            </span>
          </div>

          {/* Current Card */}
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
            <span className="text-sm mb-2">Current</span>
            <span className="text-xl font-medium">
              <AnimatedNumber
                value={450000}
                format={(n) => `$${Math.round(n).toLocaleString()}`}
              />
            </span>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-4">
          <span className="text-xs text-dashboard-grey">
            +10% from last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialWellbeing;
