import { useState, useEffect } from "react";
import "./AccessibilityWidget.css";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    if (highContrast) {
      document.body.classList.add("high-contrast-page");
    } else {
      document.body.classList.remove("high-contrast-page");
    }
  }, [fontSize, highContrast]);

  const increaseFont = () => setFontSize(prev => prev + 2);
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 12));
  const toggleContrast = () => setHighContrast(prev => !prev);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={`accessibility-widget-container ${isOpen ? "open" : ""}`}>
      <button className="accessibility-toggle" onClick={toggleOpen}>
        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility-widget.webp" alt="Accessibility" />
      </button>
      {isOpen && (
        <div className="accessibility-widget">
          <h4>Accessibility</h4>
          <div className="controls">
            <button onClick={increaseFont}>A+</button>
            <button onClick={decreaseFont}>A-</button>
            <button onClick={toggleContrast}>
              {highContrast ? "Normal" : "High Contrast"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
