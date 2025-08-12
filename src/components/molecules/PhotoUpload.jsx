import React from "react";
import ApperIcon from "@/components/ApperIcon";

const PhotoUpload = ({ onCameraClick, currentPhoto }) => {
  return (
    <div className="space-y-4">
      {currentPhoto ? (
        <div className="relative">
          <img 
            src={currentPhoto} 
            alt="Verschmutzung" 
            className="w-full h-48 object-cover rounded-lg border border-gray-200"
          />
          <button
            onClick={onCameraClick}
            className="absolute top-2 right-2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ApperIcon name="Camera" size={20} className="text-gray-700" />
          </button>
        </div>
      ) : (
        <div 
          className="photo-upload-frame cursor-pointer"
          onClick={onCameraClick}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Camera" size={32} className="text-primary" />
            </div>
            <p className="text-lg font-display font-semibold text-gray-900 mb-2">
              Foto aufnehmen
            </p>
            <p className="text-sm text-gray-600 font-body">
              Tippen Sie hier, um die Kamera zu öffnen
            </p>
          </div>
        </div>
      )}
      
      <div className="text-center">
        <p className="text-xs text-gray-500 font-body">
          Das Foto wird automatisch mit Datum, Uhrzeit und Fahrzeugdaten versehen
        </p>
      </div>
    </div>
  );
};

export default PhotoUpload;