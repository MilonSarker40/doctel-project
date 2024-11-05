import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterLogo from '../../public/images/footer-logo.png';
import Linkdin from '../../public/images/linkdin.png';
import Facebook from '../../public/images/facebook.png';
import Instagram from '../../public/images/instagram.png';
import Youtube from '../../public/images/youtube.png';

const Footer = () => {
    return (
        <div className='footer-sec-wrap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='footer-wrap'>
                            <div className='footer-logo'>
                                <a href='#'><Image src={FooterLogo} alt='Footer Logo' /></a>
                            </div>
                            <div className='footer-menu'>
                                <ul className='clearfix reset-list'>
                                    <li><Link href='#'>Terms & Condition</Link></li>
                                    <li><Link href='#'>Privacy Policy</Link></li>
                                    <li><Link href='#'>Sitemap</Link></li>
                                </ul>
                            </div>
                            <div className='footer-socail-icon'>
                                <a href='#'><Image src={Linkdin} alt='Linkdin'/></a>
                                <a href='#'><Image src={Facebook} alt='Facebook'/></a>
                                <a href='#'><Image src={Instagram} alt='Instagram'/></a>
                                <a href='#'><Image src={Youtube} alt='Youtube'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;