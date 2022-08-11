import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import Overlay from "./UI/Overlay";
import Button from "./UI/Button";

import classes from "./Nav.module.css";
import OpenMenu from "../assets/menu.svg";
import CloseMenu from "../assets/close.svg";
import OpenExpand from "../assets/downarrow.svg";
import CloseExpand from "../assets/uparrow.svg";
import Todo from "../assets/todo.svg";
import Calendar from "../assets/calendar.svg";
import Reminders from "../assets/reminders.svg";
import Planning from "../assets/planning.svg";

const Nav = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const [companyInfoExpanded, setCompanyInfoExpanded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 700px)");

  const toggleNavbarHandler = () => {
    setNavbarIsOpen((prevState) => !prevState);
    setFeaturesExpanded(false);
    setCompanyInfoExpanded(false);
  };

  const toggleFeaturesExpand = () => {
    setFeaturesExpanded((prevState) => !prevState);
  };

  const toggleCompanyInfoExpand = () => {
    setCompanyInfoExpanded((prevState) => !prevState);
  };

  let featuresContent = (
    <div className={`${classes.expandedList} ${classes.featuresExpanded}`}>
      <ul>
        <li>
          <span>
            <img src={Todo} alt="" />
          </span>
          Todo List
        </li>
        <li>
          <span>
            <img src={Calendar} alt="" />
          </span>
          Calendar
        </li>
        <li>
          <span>
            <img src={Reminders} alt="" />
          </span>
          Reminders
        </li>
        <li>
          <span>
            <img src={Planning} alt="" />
          </span>
          Planning
        </li>
      </ul>
    </div>
  );

  let companyContent = (
    <div className={`${classes.expandedList} ${classes.companyExpanded}`}>
      <ul>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
  );

  let navbarOpenedContent = (
    <nav className={classes.nav}>
      {!isDesktop && (
        <div onClick={toggleNavbarHandler}>
          <img src={CloseMenu} alt="Close navbar" />
        </div>
      )}
      <div className={classes.navList}>
        <ul>
          <li onClick={toggleFeaturesExpand}>
            Features
            <span>
              <img
                src={!featuresExpanded ? OpenExpand : CloseExpand}
                alt="Expand features"
              />
            </span>
          </li>
          {featuresExpanded && featuresContent}
          <li onClick={toggleCompanyInfoExpand}>
            Company
            <span>
              <img
                src={!companyInfoExpanded ? OpenExpand : CloseExpand}
                alt="Expand company info"
              />
            </span>
          </li>
          {companyInfoExpanded && companyContent}
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className={classes.navButtons}>
        <p>Login</p>
        <Button
          text="Register"
          bgColor="hsl(0, 0%, 98%)"
          color="hsl(0, 0%, 41%)"
        />
      </div>
    </nav>
  );

  if (isDesktop) {
    return navbarOpenedContent;
  }

  return (
    <>
      {!navbarIsOpen && (
        <div onClick={toggleNavbarHandler}>
          <img src={OpenMenu} alt="Open navbar" />
        </div>
      )}

      {navbarIsOpen && (
        <>
          <Overlay />
          {navbarOpenedContent}
        </>
      )}
    </>
  );
};

export default Nav;
