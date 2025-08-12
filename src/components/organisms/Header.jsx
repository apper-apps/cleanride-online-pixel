import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <ApperIcon name="Train" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold">CleanRide</h1>
            <p className="text-white/90 text-sm font-body">
              HOCHBAHN Sauberkeits-Meldung
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;