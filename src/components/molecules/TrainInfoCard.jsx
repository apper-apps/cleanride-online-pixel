import React from "react";
import ApperIcon from "@/components/ApperIcon";

const TrainInfoCard = ({ trainInfo }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <ApperIcon name="Train" size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white">
{trainInfo.line_c}
            </span>
            <span className="text-sm font-medium text-gray-900">
              Zug {trainInfo.train_id_c}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
<span>Wagen {trainInfo.wagon_id_c}</span>
            <div className="flex items-center space-x-1">
              <ApperIcon name="MapPin" size={14} />
              <span>{trainInfo.current_location_c}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainInfoCard;