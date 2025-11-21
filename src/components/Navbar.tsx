// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import './Navbar.css'

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder && item.navbar) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
            
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
            >
              <div className="dropdown-item-content">
                <img src={subpage.source_navbar} alt={subpage.name} className="subpage-icon"/>
                <p className="dropdown-item-text">{subpage.name}</p>
              </div>
              
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id={`page-${pageIndex}`}
          className="custom-nav-link"
          align={"end"}
          renderMenuOnMount={true}
          rootCloseEvent="click"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path && item.name != "Home") {
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path} className="custom-nav-link">
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <>
    <div className="navbar-container">
      <BootstrapNavbar expand="xl" className="custom-navbar" collapseOnSelect>
        {/* <Container> */}
          <BootstrapNavbar.Brand as={Link} to="/">
          {/*image instead of title*/}
            <img
              src="https://static.igem.wiki/teams/5684/wikipics/name.webp"
              alt={import.meta.env.VITE_TEAM_NAME}
              height="100"
              className="d-inline-block align-top brand-image"
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links">{pages}</Nav>
          </BootstrapNavbar.Collapse>
        {/* </Container> */}
        
      </BootstrapNavbar>
      {/* <img src="https://static.igem.wiki/teams/5684/wikipics/navbar-bulge2.webp" alt="IGEM Logo" className="navbar-bulge"/> */}
    </div>
    
    
    </>
  );
}
