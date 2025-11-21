import { useEffect, useState } from "react";
import "./welcome-splash-screen.css";


const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-screen" onClick={() => setVisible(false)}>
      <img
        src="https://static.igem.wiki/teams/5684/wikipics/welcome-screen.webp"
        alt="Splash"
        className="splash-image"
      />
    </div>
  );
};

export default SplashScreen;

