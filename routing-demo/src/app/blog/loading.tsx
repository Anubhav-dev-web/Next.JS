import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-pulse w-full max-w-sm rounded-md bg-gray-200 p-4 shadow-sm">
        <div className="h-2 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <p className="text-xs text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
