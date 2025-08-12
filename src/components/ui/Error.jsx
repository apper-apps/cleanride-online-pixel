import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center animate-shake">
        <ApperIcon name="AlertTriangle" size={32} className="text-white" />
      </div>
      
      <div className="text-center space-y-3 max-w-sm">
        <h3 className="text-lg font-display font-semibold text-gray-900">
          Fehler aufgetreten
        </h3>
        <p className="text-gray-600 font-body">
          {message || "Die Fahrzeugdaten konnten nicht geladen werden. Bitte versuchen Sie es erneut."}
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <ApperIcon name="Info" size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
          <div className="text-left">
            <p className="text-sm text-red-800 font-body">
              <strong>Hinweis:</strong> Stellen Sie sicher, dass Sie den QR-Code 
              aus dem Fahrzeug gescannt haben und eine Internetverbindung besteht.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3 w-full max-w-xs">
        <Button 
          onClick={onRetry}
          className="w-full"
        >
          <ApperIcon name="RotateCcw" size={18} className="mr-2" />
          Erneut versuchen
        </Button>
        
        <Button 
          onClick={() => window.close()}
          variant="outline"
          className="w-full"
        >
          <ApperIcon name="X" size={18} className="mr-2" />
          Schließen
        </Button>
      </div>
    </div>
  );
};

export default Error;