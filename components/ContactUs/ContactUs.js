import React from 'react';
import Image from 'next/image';
import classes from '../../styles/Home.module.css';
import Link from 'next/link';
import FaPhone from '../../public/images/fa-phone.png';
import FaBuilding from '../../public/images/fa-building-o.png';
import FaEnvelope from '../../public/images/fa-envelope.png';

const ContactUs = () => {
    return (
        <div className={`${classes['contact-us-sec-wrap']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading contact-heading'>
                            <h5>Contact Us</h5>
                            <h2>Get in Touch with Us</h2>
                            <p>Choose a plan that suits your healthcare needs. With daily, weekly, and monthly options, DocTel offers flexibility and affordability to ensure you always have access to medical care when you need it.</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='contact-us-wrap'>
                            <div className='contact-us-lft'>
                                <div className='contact-us-info'>
                                    <h4>Let’s Keep in Touch</h4>
                                    <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                                    <ul className='clearfix reset-list'>
                                        <li><Link href='#'><Image src={FaPhone} alt='Fa Phone'/>+1 555 505 5050</Link></li>
                                        <li><Link href='#'><Image src={FaEnvelope} alt='Fa Envelope'/>info@designmodo.com</Link></li>
                                        <li><Link href='#'><Image src={FaBuilding} alt='FaBuilding'/>San Francisco, CA560 Bush <br></br> St & 20th Ave, Apt5 San <br></br> Francisco, 230909</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact-us-rgt'>
                                <div className='contact-us-from'>
                                    <div className='contact-us-from-field'>
                                        <label>YOUR NAME</label>
                                        <input type='text' placeholder='First name' />
                                    </div>
                                    <div className='contact-us-from-field'>
                                        <label>Email</label>
                                        <input type='text' placeholder='name@mail.com' />
                                    </div>
                                    <div className='contact-us-from-field'>
                                        <label>YOUR MESSAGE</label>
                                        <textarea placeholder='Message' />
                                    </div>
                                    <div className='contact-us-from-btn'>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;