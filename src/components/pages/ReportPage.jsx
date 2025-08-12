import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import WelcomeStep from "@/components/organisms/WelcomeStep";
import CategoryStep from "@/components/organisms/CategoryStep";
import PhotoStep from "@/components/organisms/PhotoStep";
import NotesStep from "@/components/organisms/NotesStep";
import ConfirmationStep from "@/components/organisms/ConfirmationStep";
import ProgressIndicator from "@/components/molecules/ProgressIndicator";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { reportService } from "@/services/api/reportService";

const STEPS = {
  WELCOME: "welcome",
  CATEGORY: "category", 
  PHOTO: "photo",
  NOTES: "notes",
  CONFIRMATION: "confirmation"
};

const ReportPage = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(STEPS.WELCOME);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [trainInfo, setTrainInfo] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  
  const [reportData, setReportData] = useState({
    trainId: "",
    wagonId: "",
    category: "",
    priority: false,
    description: "",
    photoUrl: "",
    reporterContact: ""
  });

  // Parse QR code parameters from URL
  useEffect(() => {
    const loadTrainInfo = async () => {
      setError("");
      setLoading(true);
      
      try {
        const trainId = searchParams.get("train") || "U1-401";
        const wagonId = searchParams.get("wagon") || "W1";
        
        const info = await reportService.getTrainInfo(trainId, wagonId);
        setTrainInfo(info);
        setReportData(prev => ({
          ...prev,
          trainId: info.trainId,
          wagonId: info.wagonId
        }));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTrainInfo();
  }, [searchParams]);

  const handleNext = () => {
    const steps = Object.values(STEPS);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps = Object.values(STEPS);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleCategorySelect = (category) => {
    const priority = category === "priority";
    setReportData(prev => ({
      ...prev,
      category,
      priority
    }));
    handleNext();
  };

  const handlePhotoUpload = async (file) => {
    try {
      const photoData = await reportService.uploadPhoto(file);
      setReportData(prev => ({
        ...prev,
        photoUrl: photoData.photoUrl
      }));
      toast.success("Foto erfolgreich hochgeladen");
    } catch (error) {
      toast.error("Fehler beim Hochladen des Fotos");
    }
  };

  const handleNotesSubmit = (notes, contact) => {
    setReportData(prev => ({
      ...prev,
      description: notes,
      reporterContact: contact
    }));
    handleNext();
  };

  const handleSubmitReport = async () => {
    setSubmitting(true);
    
    try {
      await reportService.submitReport(reportData);
      setCurrentStep(STEPS.CONFIRMATION);
      toast.success("Meldung erfolgreich übermittelt!");
    } catch (error) {
      toast.error("Fehler beim Senden der Meldung");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={handleRetry} />;

  const getStepNumber = () => {
    const steps = Object.values(STEPS);
    return steps.indexOf(currentStep) + 1;
  };

  const getTotalSteps = () => {
    return Object.values(STEPS).length;
  };

  return (
    <div className="space-y-6">
      {currentStep !== STEPS.CONFIRMATION && (
        <ProgressIndicator 
          currentStep={getStepNumber()} 
          totalSteps={getTotalSteps()}
        />
      )}

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {currentStep === STEPS.WELCOME && (
          <WelcomeStep 
            trainInfo={trainInfo}
            onNext={handleNext}
          />
        )}

        {currentStep === STEPS.CATEGORY && (
          <CategoryStep 
            onCategorySelect={handleCategorySelect}
            onBack={handleBack}
          />
        )}

        {currentStep === STEPS.PHOTO && (
          <PhotoStep 
            onPhotoUpload={handlePhotoUpload}
            onNext={handleNext}
            onBack={handleBack}
            currentPhoto={reportData.photoUrl}
          />
        )}

        {currentStep === STEPS.NOTES && (
          <NotesStep 
            onSubmit={handleNotesSubmit}
            onBack={handleBack}
            reportData={reportData}
            onFinalSubmit={handleSubmitReport}
            submitting={submitting}
          />
        )}

        {currentStep === STEPS.CONFIRMATION && (
          <ConfirmationStep 
            trainInfo={trainInfo}
            reportData={reportData}
          />
        )}
      </div>
    </div>
  );
};

export default ReportPage;