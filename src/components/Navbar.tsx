import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import './Navbar.css'

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id={`page-${pageIndex}`}
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (/*added custom navbar*/
    <BootstrapNavbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
        {/*image instead of title*/}
          <img
            src="https://static.igem.wiki/teams/5684/wikipics/name.webp"
            alt={import.meta.env.VITE_TEAM_NAME}
            height="100"
            className="d-inline-block align-top"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
