import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ChatAssistant: React.FC = () => {
  return (
    <Card className="shadow-sm h-full w-full">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full w-full gap-y-6 gap-x-6">
        <div>
          <img
            src="/assets/circle1.png"
            alt="User"
            className="h-16 w-22 rounded-full"
          />
        </div>
        <h3 className="mb-4 text-center text-2xl font-medium">
          Welcome to the AI Chat Assistant
        </h3>
        <div className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-400 flex justify-between items-center">
          <span>Ask your question here...</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B0B0B0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatAssistant;
