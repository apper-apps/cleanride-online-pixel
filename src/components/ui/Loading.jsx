import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-pulse">
          <ApperIcon name="Train" size={32} className="text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-display font-semibold text-gray-900">
          Fahrzeugdaten werden geladen...
        </h3>
        <p className="text-gray-600 font-body">
          Bitte warten Sie einen Moment
        </p>
      </div>

      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;