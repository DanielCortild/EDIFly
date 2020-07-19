import React from "react";

import $ from 'jquery';
import cx from "classnames";

import {Collapse, Navbar, NavItem, NavLink, NavbarBrand, Nav, Container} from "reactstrap";

const NavbarItems = ['description', 'team', 'download', 'users', 'contact '];

export default () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('header');

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const linkStyle = (navbarColor, sectionID) => {return {
    color: navbarColor === "" ? (activeSection === sectionID ? '#000000' : '#66615B') : (window.innerWidth >= 992 ? '#FFFFFF' : '#000000'),
    fontWeight: '600'
  }};

  React.useEffect(() => {
    const updateNavbarColor = () => {
      let scrollTop = $(document).scrollTop();
      let color = scrollTop < window.innerHeight - 100 ? "navbar-transparent" : "";
      setNavbarColor(color);

      $('section').each(function () {
        let that = $(this);
        if(that.position().top <= scrollTop && (that.position().top + that.outerHeight()) > scrollTop) {
          setActiveSection(that.attr('id'));
        }
      });
    }
    $(document).scroll(updateNavbarColor);
  }, []);

  return (
    <Navbar className={cx("fixed-top", navbarColor)} expand="lg" id="navbar">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand href="#">EDIfly</NavbarBrand>
          <button className={cx("navbar-toggle navbar-toggler float-right", {
                    toggled: navbarCollapse,
                  })}
                  onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            {NavbarItems.map(key => (
              <NavItem>
                <NavLink>
                  <a href={`/#${key}`} style={linkStyle(navbarColor, key)}>
                    {key}
                  </a>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}