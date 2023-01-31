import './Services.scss';
import React from 'react';

export const Services = React.memo(() => {
    return (
        <section className='services' id='services'>
            <h1>My Services</h1>
            <div className='services_container'>
                <div>
                    <h3>Web Development</h3>
                    <p>turn your design into a full functioning responsive website</p>
                </div>
                
                <div>
                    <h3>Web Optimization</h3>
                    <p>provide the most sophisticated web Optimization tools for your website so that it performs faster</p>
                </div>
                
                <div>
                    <h3>Web Design</h3>
                    <p>turn your brilliant idea into a well designed website</p>
                </div>

                <div>
                    <h3>Photography</h3>
                    <p>creative photography and high quality images. click <a href='https://www.instagram.com/saints_gallery' >here</a> for my portfolio</p>
                </div>
            </div>
        </section>
    );
})