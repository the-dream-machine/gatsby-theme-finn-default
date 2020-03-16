import React, { useEffect } from "react";

// Import components
import { Toast, useToast } from "./index";

const ErrorToast = ({ text, emoji }) => {
  // Destructure hooks
  const [isOpen, toggleToast] = useToast(false);

  // Toggle toast on load
  useEffect(() => {
    toggleToast();
  }, []);

  return (
    <Toast isOpen={isOpen} toggleToast={toggleToast} emoji={emoji}>
      {text}
    </Toast>
  );
};

export default ErrorToast;
