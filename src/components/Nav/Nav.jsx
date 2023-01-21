import './Nav.scss';

import homeIcon from '../../media/home.PNG';
import aboutIcon from '../../media/about.PNG';
import portfolioIcon from '../../media/portfolio.PNG';
import contactIcon from '../../media/contactIcon.PNG';
import servicesIcon from '../../media/services.PNG';

export const Nav = ({ setComponentFunction }) => {

    return (
        <nav className="nav">
          <ul className='nav_container'>
            <a href='#home'>
              <li
                style={{backgroundImage: `url(${homeIcon})`}}
                onClick={() => {
                    setComponentFunction('Home')
                }}
              >
              </li>
            </a>
            
            <a href='#about'>
              <li
                style={{backgroundImage: `url(${aboutIcon})`}}
                onClick={() => {
                    setComponentFunction('About')
                }}
              ></li>
            </a>

            <a href='#services'> 
              <li
                style={{backgroundImage: `url(${servicesIcon})`}}
                onClick={() => {
                    setComponentFunction('Services')
                }}
              ></li>
            </a>

            <a href='#portfolio'>  
              <li
                style={{backgroundImage: `url(${portfolioIcon})`}}
                onClick={() => {
                    setComponentFunction('Portfolio')
                }}
              ></li>
            </a>

            <a href='#contact'>
              <li
                style={{backgroundImage: `url(${contactIcon})`}}
                onClick={() => {
                    setComponentFunction('Contact')
                }}
              ></li>
            </a>
          </ul>
        </nav>
    );
}