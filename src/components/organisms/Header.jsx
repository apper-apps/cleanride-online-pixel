import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../App";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
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
          
          {isAuthenticated && (
            <Button
              onClick={logout}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <ApperIcon name="LogOut" size={16} className="mr-2" />
              Abmelden
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
