import './About.scss';

import saint from '../../media/ssaint.png';

export const About = () => {

    return (
        <section className='about' id='about'>
            <div 
                className='about_image'
                style={{backgroundImage: `url(${saint})`}}
            ></div>
            <div className='about_content'>
                <h1>Bradley Matjie</h1>
                <p className='about_content_subtitle'>Web Developer</p>

                <p className='about_content-paragraph'>Currently in Johannesburg, South Africa. I specialise in creating dynamic web apps using some of the most popular tech stacks in Web develompent</p>
                <div className="skillset">
                    <h2>My Skillset</h2>
                    <div className='skillset_items'>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>SASS</div>
                        <div>JS</div>
                        <div>TS</div>
                        <div>REACT</div>
                        <div>NPM</div>
                        <div>GIT</div>
                    </div>
                </div>
            </div>
        </section>
    );
}