import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";

const NotesStep = ({ onSubmit, onBack, reportData, onFinalSubmit, submitting }) => {
  const [notes, setNotes] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    onSubmit(notes, contact);
    await onFinalSubmit();
  };

  const getSummaryText = () => {
    const categoryText = reportData.category === "priority" 
      ? "Priorität (Sofortige Reinigung)" 
      : "Standard-Verschmutzung";
    
    return `${categoryText} in Zug ${reportData.trainId}, Wagen ${reportData.wagonId}`;
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">
            Zusätzliche Angaben
          </h2>
          <p className="text-gray-600 font-body">
            Optional: Weitere Details zur Meldung
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Ihre Meldung:</h3>
          <p className="text-sm text-gray-700 font-body">{getSummaryText()}</p>
          {reportData.photoUrl && (
            <div className="mt-2 flex items-center space-x-2">
              <ApperIcon name="Camera" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">Foto hinzugefügt</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weitere Beschreibung
            </label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="z.B. Standort im Wagen, Größe der Verschmutzung..."
              maxLength={500}
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-1">
              {notes.length}/500 Zeichen
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kontakt für Rückfragen (optional)
            </label>
            <Input
              type="email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="ihre.email@beispiel.de"
            />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <ApperIcon name="Shield" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-green-800 font-body">
                <strong>Datenschutz:</strong> Ihre Angaben werden nur zur Bearbeitung 
                der Meldung verwendet und nicht weitergegeben.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Button 
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full"
            size="lg"
          >
            {submitting ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                Wird gesendet...
              </>
            ) : (
              <>
                <ApperIcon name="Send" size={18} className="mr-2" />
                Meldung senden
              </>
            )}
          </Button>
          
          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full"
            disabled={submitting}
          >
            <ApperIcon name="ArrowLeft" size={18} className="mr-2" />
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesStep;