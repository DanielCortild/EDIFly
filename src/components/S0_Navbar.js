import React from "react";

import $ from 'jquery';
import cx from "classnames";

import {Collapse, Navbar, NavItem, NavLink, Nav, Container} from "reactstrap";

const NavbarItems = ['description', 'team', 'download', 'clients'];

export default () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('header');

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const activeStyle = (sectionID) => { return {
    textDecoration: activeSection === sectionID ? 'underline' : 'none'
  }};

  React.useEffect(() => {
    $(document).removeClass("nav-open");
    console.log("WTF")
    setNavbarColor(window.location.pathname === "/" ? 'navbar-transparent' : '');
    $('html').css('scroll-behavior', 'smooth');

    const updateNavbarColor = () => {
      let scrollTop = $(document).scrollTop();
      let top = scrollTop < window.innerHeight - 100;
      let home_page = window.location.pathname === "/";
      let color = top && home_page ? "navbar-transparent" : "";
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
          <NavLink><a href="#" style={linkStyle(navbarColor)}>EDIfly</a></NavLink>
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
                  <a href={`#${key}`} style={{...linkStyle(navbarColor), ...activeStyle(key)}}>
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

const linkStyle = (navbarColor) => {return {
  color: navbarColor === "" ? '#66615B' : '#FFFFFF',
  fontWeight: '600'
}};