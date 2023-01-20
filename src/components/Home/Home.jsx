import './Home.scss';

import github from '../../media/github.png';
import linkedin from '../../media/linkedin.png';
import email from '../../media/email.png';

export const Home = () => {
    return (
        <section className='home' id='home'>
            <p>Hello there, i'm</p>
            <h1>Bradley Matjie</h1>
            <p>Web Developer</p>
            <ul className='home_socials-container'>
              <li>
                <a href="https://www.github.com/bradleymatjie">
                  <img src={github} alt="github link" />
                </a>
              </li>
                <li>
                  <a href="https://www.linkedin.com/in/bradleymatjie">
                    <img src={linkedin} alt="linked in link" />
                  </a>
                </li>
                <li>
                  <a href="mailto:bradleymatjie.job@gmail.com">
                    <img src={email} alt="email link" />
                  </a>
                </li>
            </ul>
        </section>
    );
}