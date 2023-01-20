import './Portfolio.scss';

import myBike from '../../media/myBike.png';
import todoApp from '../../media/todoApp.png';

export const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
           <h2>My work</h2>
           <div className='portfolio_container'>
            <div
              className='portfolio_mybike'
              style={{backgroundImage: `url(${myBike})`}}    
            >
              <a href="https://bradleymatjie.github.io/layout_miami/">DEMO</a>
              <a href="https://github.com/bradleymatjie/layout_miami">CODE</a>
            </div>

            <div
              className='portfolio_todo-app'
              style={{backgroundImage: `url(${todoApp})`}}
            >
              
              <a href="https://bradleymatjie.github.io/react_todo-app/">DEMO</a>
              <a href="https://github.com/bradleymatjie/react_todo-app">CODE</a>
            </div>

            <div className='portfolio_WEATHER-APP'>
                <a href="https://bradleymatjie.github.io/WEATHER-APP/">DEMO</a>
                <a href="https://github.com/bradleymatjie/WEATHER-APP">CODE</a>
            </div>
           </div>
        </section>
    );
}