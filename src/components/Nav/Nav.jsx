import './Nav.scss';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import homeIcon from '../../media/home.PNG';
import aboutIcon from '../../media/about.PNG';
import portfolioIcon from '../../media/portfolio.PNG';
import contactIcon from '../../media/contactIcon.PNG';
import servicesIcon from '../../media/services.PNG';

export const Nav = React.memo(({ setComponentFunction, currentComponent }) => {

    return (
      <AnimatePresence>
        <motion.nav className="nav"
          initial={{ y: "50px" }}
          animate={{ y: 0 }}
          exit={{ y: "50px" }}
        >
          <ul className='nav_container'>
            <a href='#home'>
              <li
                className={`link ${(currentComponent === 'Home') ? 'activeLink': ''}`}
                style={{backgroundImage: `url(${homeIcon})`}}
                onClick={() => {
                    setComponentFunction('Home')
                }}
              >
              </li>
            </a>
            
            <a href='#about'>
              <li
                className={`link ${(currentComponent === 'About') ? 'activeLink': ''}`}
                style={{backgroundImage: `url(${aboutIcon})`}}
                onClick={() => {
                    setComponentFunction('About')
                }}
              ></li>
            </a>

            <a href='#services'> 
              <li
                className={`link ${(currentComponent === 'Services') ? 'activeLink': ''}`}
                style={{backgroundImage: `url(${servicesIcon})`}}
                onClick={() => {
                    setComponentFunction('Services')
                }}
              ></li>
            </a>

            <a href='#portfolio'>  
              <li
                className={`link ${(currentComponent === 'Portfolio') ? 'activeLink': ''}`}
                style={{backgroundImage: `url(${portfolioIcon})`}}
                onClick={() => {
                    setComponentFunction('Portfolio')
                }}
              ></li>
            </a>

            <a href='#contact'>
              <li
                className={`link ${(currentComponent === 'Contact') ? 'activeLink': ''}`}
                style={{backgroundImage: `url(${contactIcon})`}}
                onClick={() => {
                    setComponentFunction('Contact')
                }}
              ></li>
            </a>
          </ul>
        </motion.nav>
        </AnimatePresence>
    );
})