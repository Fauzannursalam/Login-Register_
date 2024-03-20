import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const NavbarWrapper = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    return navigate("/login");
  };
  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="text-decoration-none text-white text-lg fs-2 fw-semibold"
            >
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Button onClick={() => handleLogout()} variant="secondary">
              Log Out
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

NavbarWrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavbarWrapper;
