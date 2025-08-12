import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { format } from "date-fns";
import { de } from "date-fns/locale";

const ConfirmationStep = ({ trainInfo, reportData }) => {
  const handleNewReport = () => {
    window.location.reload();
  };

  const handleClose = () => {
    window.close();
  };

  const reportNumber = `CR-${Date.now().toString().slice(-6)}`;

  return (
    <div className="p-6">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-accent to-green-600 rounded-full flex items-center justify-center mx-auto animate-checkmark">
          <ApperIcon name="Check" size={40} className="text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Vielen Dank!
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            Ihre Meldung wurde erfolgreich übermittelt. 
            Das Reinigungsteam wird schnellstmöglich informiert.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Meldungsnummer:</span>
              <span className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border">
                {reportNumber}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Zeit:</span>
              <span className="text-sm text-gray-600">
                {format(new Date(), "dd.MM.yyyy, HH:mm", { locale: de })} Uhr
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Fahrzeug:</span>
              <span className="text-sm text-gray-600">
                {trainInfo?.line} - Zug {trainInfo?.trainId}, Wagen {trainInfo?.wagonId}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Kategorie:</span>
              <span className="text-sm text-gray-600">
                {reportData.category === "priority" ? "Priorität" : "Standard"}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <ApperIcon name="Clock" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-blue-800 font-body">
                <strong>Nächste Schritte:</strong> Bei Prioritätsmeldungen wird das Fahrzeug 
                zur nächsten Wendestelle geleitet. Standard-Meldungen werden an das 
                mobile Reinigungsteam weitergeleitet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Button 
            onClick={handleNewReport}
            className="w-full"
          >
            <ApperIcon name="Plus" size={18} className="mr-2" />
            Weitere Meldung
          </Button>
          
          <Button 
            onClick={handleClose}
            variant="outline"
            className="w-full"
          >
            <ApperIcon name="X" size={18} className="mr-2" />
            Schließen
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 font-body">
            Bei Fragen wenden Sie sich an die HOCHBAHN-Servicehotline
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;