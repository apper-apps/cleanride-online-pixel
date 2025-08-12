import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "Keine Daten vorhanden",
  description = "Es wurden keine Einträge gefunden.",
  actionText = "Neu laden",
  onAction
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
        <ApperIcon name="Search" size={32} className="text-gray-400" />
      </div>
      
      <div className="text-center space-y-3 max-w-sm">
        <h3 className="text-lg font-display font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 font-body">
          {description}
        </p>
      </div>

      {onAction && (
        <Button 
          onClick={onAction}
          variant="outline"
          className="mt-4"
        >
          <ApperIcon name="RotateCcw" size={18} className="mr-2" />
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default Empty;