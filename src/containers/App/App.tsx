import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import ChatBot from "../../components/ChatBot";
import AccessibilityToolbar from "../../components/AccessibilityToolbar"
import '../../contents/styles.css';
import ScrollToTop from "../../utils/ScrollToTop";
import { useLocation } from "react-router-dom";


function App()  {
  const location = useLocation();
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title = currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  const name = currentPath in pathMapping ? pathMapping[currentPath].name : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);
  

  const bg = currentPath in pathMapping ? pathMapping[currentPath].source_bg : "";



  return (
    <>
    <AccessibilityToolbar id={ name } />
    <div className="app-wrapper" id={ name } style={{backgroundImage: currentPath in pathMapping ? `url(${bg})` : "", backgroundSize: "cover", backgroundColor: "#d8f3dc", backgroundPosition: "center"}}>
      {/* Navigation */}
      <Navbar />

      <ScrollToTop />

      {/* Header and PageContent */}
      <Routes>
        
        {Object.entries(pathMapping).map(
          ([path, { title, lead, component: Component, source_header }]) => (
            <Route
              key={path}
              path={path}
              element={
                <>{/*removed header from home and entrepreneurship page*/}
                  {path !== "/entrepreneurship" && path !== "/" && path !== "/human-practices" && (<Header title={title || ""} lead={lead || ""} source_header={source_header || ""} />)}
                  
                    {<><Component /></>}
                </>
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              <Header
                title="Not Found"
                lead="The requested URL was not found on this server."
                source_header="https://static.igem.wiki/teams/5684/wikipics/404.webp"
              />
              <NotFound />
            </>
          }
        />
      </Routes>
      
      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      {name != "Home" && <Footer/>}
      {/*Under Footer Container*/}
      {/*<div className="footer-bottom-fill"></div>*/}
      {/* ChatBot */}
      <ChatBot/>
    </div>
    </>
  );
};

export default App;
