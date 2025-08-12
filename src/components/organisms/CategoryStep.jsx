import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import CategoryButton from "@/components/molecules/CategoryButton";

const CategoryStep = ({ onCategorySelect, onBack }) => {
  const categories = [
    {
      id: "priority",
      title: "Priorität - Sofortige Reinigung",
      description: "Erbrochenes, Kot, Urin",
      icon: "AlertTriangle",
      color: "priority"
    },
    {
      id: "standard", 
      title: "Standard-Verschmutzung",
      description: "Müll, Becher, Papier, verschüttete Getränke",
      icon: "Trash2",
      color: "standard"
    }
  ];

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">
            Art der Verschmutzung
          </h2>
          <p className="text-gray-600 font-body">
            Bitte wählen Sie die passende Kategorie aus
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              onClick={() => onCategorySelect(category.id)}
            />
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full"
          >
            <ApperIcon name="ArrowLeft" size={18} className="mr-2" />
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryStep;