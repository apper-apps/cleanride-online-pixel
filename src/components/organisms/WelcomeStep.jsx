import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import TrainInfoCard from "@/components/molecules/TrainInfoCard";

const WelcomeStep = ({ trainInfo, onNext }) => {
  return (
    <div className="p-6">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
          <ApperIcon name="Sparkles" size={40} className="text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Sauberkeit verbessern
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            Helfen Sie uns dabei, die Züge sauber zu halten. 
            Ihre Meldung ermöglicht eine schnelle Reinigung.
          </p>
        </div>

        {trainInfo && (
          <TrainInfoCard trainInfo={trainInfo} />
        )}

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <ApperIcon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-gray-700 font-body">
                <strong>So funktioniert's:</strong> Wählen Sie die Art der Verschmutzung aus, 
                fügen Sie optional ein Foto hinzu und senden Sie die Meldung ab.
              </p>
            </div>
          </div>
        </div>

        <Button 
          onClick={onNext}
          className="w-full"
          size="lg"
        >
          <ApperIcon name="ArrowRight" size={20} className="ml-2" />
          Meldung starten
        </Button>
      </div>
    </div>
  );
};

export default WelcomeStep;