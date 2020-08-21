import React from "react";

import $ from 'jquery';
import cx from "classnames";

import {Collapse, Navbar, NavItem, NavLink, NavbarBrand, Nav, Container} from "reactstrap";

const NavbarItems = [
  ['whyedifly', 'Why EDIfly?'], 
  ['users', 'Users'],
  ['support', 'Support'],
  ['team', 'Team'],
  ['news', 'News'],
  ['blog', 'Blog'],
  ['contact', 'Contact']
];

export default () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('header');

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const linkStyle = (navbarColor, sectionID) => {return {
    color: navbarColor === "" ? 
      (activeSection === sectionID || 
        (activeSection === "testimonials" && sectionID === "users") 
        ? '#000000' : '#66615B') : 
      (window.innerWidth >= 992 ? '#000' : '#000'),
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
          {$(document).scrollTop() > window.innerHeight ?
          <NavbarBrand href="#" className="p-0 pl-2 pl-md-0">
            <img src="./images/logo.png" alt="EDIfly" style={{height: '50px '}}/>
          </NavbarBrand> : ''}
          <button className={cx("navbar-toggle navbar-toggler float-right", {
                    toggled: navbarCollapse,
                  })}
                  onClick={toggleNavbarCollapse}
                  style={{color: '#FFF !important'}}
          >
            <span className="navbar-toggler-bar bar1" style={{background: '#66615B'}}/>
            <span className="navbar-toggler-bar bar2" style={{background: '#66615B'}} />
            <span className="navbar-toggler-bar bar3" style={{background: '#66615B'}} />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            {NavbarItems.map(key => (
              <NavItem>
                <NavLink>
                  <a href={`#${key[0]}`} style={linkStyle(navbarColor, key[0])}>
                    {key[1]}
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