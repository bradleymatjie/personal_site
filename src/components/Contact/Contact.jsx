import './Contact.scss';
import React from 'react';

import phone from '../../media/phone-call.png';
import fb from '../../media/facebook.png';
import twitter from '../../media/twitter.png';

export const Contact = React.memo(() => {
    return (
        <section className='contact' id='contact'>
            <h1>LET'S TALK</h1>
            <p>Lets collaborate or just say hi...</p>
            <div className="contact_container">
                <div>
                    <img src={phone} alt="phone icon" />
                    <h2>CALL/WHATSAPP</h2>
                    <a href='tel:+27715538950'>071 553 8950</a>
                </div>
                <div>
                    <img src={fb} alt="facebook icon" />
                    <h2>FACEBOOK</h2>
                    <a href='https://www.facebook.com/bradley.mashile/'>Bradley Saint</a>
                </div>
                <div>
                    <img src={twitter} alt="twitter icon" />
                    <h2>TWITTER</h2>
                    <a href='https://twitter.com/DeREAL_BrAdLeyM'>Dereal_BradleyM</a>
                </div>
            </div>
        </section>
    );
})