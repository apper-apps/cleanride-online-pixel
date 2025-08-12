import React from "react";
import ApperIcon from "@/components/ApperIcon";

const CategoryButton = ({ category, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`category-button w-full p-4 rounded-lg border-2 text-left transition-all duration-150 ${category.color}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          category.color === "priority" ? "bg-red-100" : "bg-blue-100"
        }`}>
          <ApperIcon 
            name={category.icon} 
            size={24} 
            className={category.color === "priority" ? "text-red-600" : "text-blue-600"} 
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-gray-900 mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-gray-600 font-body">
            {category.description}
          </p>
          {category.color === "priority" && (
            <div className="flex items-center space-x-1 mt-2">
              <ApperIcon name="Zap" size={14} className="text-red-600" />
              <span className="text-xs text-red-700 font-medium">
                Fahrzeug wird außer Betrieb genommen
              </span>
            </div>
          )}
        </div>
        <ApperIcon name="ChevronRight" size={20} className="text-gray-400 mt-1" />
      </div>
    </button>
  );
};

export default CategoryButton;