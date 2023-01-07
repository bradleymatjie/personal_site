import './Nav.scss';

import homeIcon from '../../media/home.PNG';
import aboutIcon from '../../media/about.PNG';
import portfolioIcon from '../../media/portfolio.PNG';
import contactIcon from '../../media/contactIcon.PNG';
import servicesIcon from '../../media/services.PNG';

export const Nav = ({ setComponentFunction }) => {

    return (
        <nav className="nav">
            <li
                style={{backgroundImage: `url(${homeIcon})`}}
                onClick={() => {
                    setComponentFunction('Home')
                }}
            >
            </li>

            <li
                style={{backgroundImage: `url(${aboutIcon})`}}
                onClick={() => {
                    setComponentFunction('About')
                }}
            ></li>

            <li
                style={{backgroundImage: `url(${portfolioIcon})`}}
                onClick={() => {
                    setComponentFunction('Portfolio')
                }}
            ></li>

            <li
                style={{backgroundImage: `url(${servicesIcon})`}}
                onClick={() => {
                    setComponentFunction('Services')
                }}
            ></li>

            <li
                style={{backgroundImage: `url(${contactIcon})`}}
                onClick={() => {
                    setComponentFunction('Contact')
                }}
            ></li>
        </nav>
    );
}