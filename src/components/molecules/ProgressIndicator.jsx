import React from "react";

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="progress-dots">
      {Array.from({ length: totalSteps - 1 }, (_, index) => {
        const stepNumber = index + 1;
        let className = "progress-dot";
        
        if (stepNumber < currentStep) {
          className += " completed";
        } else if (stepNumber === currentStep) {
          className += " active";
        }
        
        return <div key={stepNumber} className={className} />;
      })}
    </div>
  );
};

export default ProgressIndicator;