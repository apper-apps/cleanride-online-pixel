import React, { useRef } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import PhotoUpload from "@/components/molecules/PhotoUpload";

const PhotoStep = ({ onPhotoUpload, onNext, onBack, currentPhoto }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onPhotoUpload(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">
            Foto hinzufügen
          </h2>
          <p className="text-gray-600 font-body">
            Optional: Dokumentieren Sie die Verschmutzung
          </p>
        </div>

        <PhotoUpload 
          onCameraClick={handleCameraClick}
          currentPhoto={currentPhoto}
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <ApperIcon name="Camera" size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-yellow-800 font-body">
                <strong>Tipp:</strong> Ein Foto hilft dem Reinigungsteam dabei, 
                die passenden Materialien und Werkzeuge bereitzustellen.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Button 
            onClick={onNext}
            className="w-full"
          >
            <ApperIcon name="ArrowRight" size={18} className="ml-2" />
            Weiter
          </Button>
          
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

export default PhotoStep;