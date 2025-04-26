import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Updated Interface to match target data
interface QuestionData {
  image: string;
  name: string;
  username: string; // Changed from location
  time: string;
  question: string;
  isNew?: boolean; // Optional flag for the blue dot
  isOnline?: boolean; // Optional flag for the green status indicator
}

// Updated sample data to match target image (replace URLs/names as needed)
const questions: QuestionData[] = [
  {
    image: "/assets/pfp.jpg", // Replace with actual path/URL from target
    name: "Phoenix Baker", // Updated name
    username: "@phoenix", // Added username
    time: "5min ago", // Updated time
    question: "What are the requirements for opening a new store?",
    isNew: true, // Flag for blue dot
    isOnline: true, // Flag for green status dot
  },
  {
    image: "/assets/pfp2.jpg", // Replace with actual path/URL from target
    name: "Koray Okumus", // Updated name
    username: "@koray", // Added username
    time: "4hr ago", // Updated time
    question: "How do I manage inventory effectively?",
    isNew: true, // Flag for blue dot
    isOnline: true, // Flag for green status dot
  },
  // Add more questions if needed
];

const pendingCount = questions.filter((q) => q.isNew).length; // Calculate count based on data

const PendingQuestions: React.FC = () => {
  return (
    // Added w-full and potentially h-full for grid layout
    <Card className="shadow-sm w-full flex flex-col">
      {" "}
      {/* Added flex flex-col for content scrolling if needed */}
      <CardHeader className="flex flex-row items-center justify-between pb-3 border-b px-4 pt-4">
        {" "}
        {/* Added border, padding */}
        <CardTitle className="text-base font-semibold">
          Pending Questions
        </CardTitle>{" "}
        {/* Adjusted size/weight */}
        {/* Updated badge style */}
        <div className="rounded bg-sky-500 px-2 py-0.5 text-xs font-medium text-white">
          {pendingCount.toString().padStart(2, "0")}{" "}
          {/* Dynamic count with padding */}
        </div>
      </CardHeader>
      {/* Removed default padding from CardContent, manage spacing internally */}
      {/* Added overflow-y-auto if content might exceed card height */}
      <CardContent className="flex-1 space-y-0 p-0 overflow-y-auto">
        {questions.map((question, index) => (
          // Item container with border *between* items
          <div
            key={index}
            className={`flex items-start space-x-3 p-4 ${
              index < questions.length - 1 ? "border-b" : ""
            }`} // Use padding, border-b except last
          >
            {/* 1. Blue Dot (Conditional) */}
            {question.isNew && (
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500"></div>
            )}
            {/* If no dot, add placeholder for alignment or adjust main content margin */}
            {!question.isNew && (
              <div className="mt-1 h-2 w-2 flex-shrink-0"></div> // Empty div for spacing consistency
            )}

            {/* 2. Image with Online Status */}
            <div className="relative flex-shrink-0">
              <img
                src={question.image}
                alt={question.name}
                className="h-10 w-10 rounded-full" // Slightly larger image
              />
              {question.isOnline && (
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></div> // Status indicator
              )}
            </div>

            {/* 3. Text Content Block */}
            <div className="flex-grow">
              {/* Name, Username & Time Row */}
              <div className="flex items-baseline justify-between">
                {/* Name & Username */}
                <div>
                  <div className="text-sm font-medium">{question.name}</div>
                  <div className="text-xs text-slate-500">
                    {question.username}
                  </div>
                </div>
                {/* Time */}
                <div className="ml-2 flex-shrink-0 text-xs text-slate-400">
                  {question.time}
                </div>
              </div>
              {/* Question Text */}
              <div className="mt-1 text-sm text-slate-600">
                {question.question}
              </div>
            </div>
          </div>
        ))}
        {/* Optional: Add message if no questions */}
        {questions.length === 0 && (
          <div className="p-4 text-center text-sm text-slate-500">
            No pending questions.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingQuestions;
