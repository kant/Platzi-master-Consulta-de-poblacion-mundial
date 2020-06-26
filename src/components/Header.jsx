import React from 'react';
import '../assets/Globals.scss';
import '../assets/styles/components/Header.scss';
import {
  AiFillSignal,
  AiFillTrophy,
  AiOutlineDotChart,
  AiFillEnvironment,
  AiFillMail,
  AiOutlineHome,
} from 'react-icons/ai';
import logo from '../assets/static/populApp.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__menuCSS3">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#popul">
              <AiOutlineHome />
              Menu
            </a>
            <ul>
              <li>
                <a href="#statistics">
                  <AiFillSignal /> Statistics
                </a>
              </li>
              <li>
                <a href="#topten">
                  <AiFillTrophy /> Top 10
                </a>
              </li>
              <li>
                <a href="#wstats">
                  <AiOutlineDotChart /> World Statistics
                </a>
              </li>
              <li>
                <a href="#map">
                  <AiFillEnvironment /> Map
                </a>
              </li>
              <li>
                <a href="#contact">
                  <AiFillMail /> Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
