import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import hmAudioCall from '../../public/images/hm-audio-call.png';
import VideoCall from '../../public/images/video-call.png';
import FloatingChat from '../../public/images/floating-chat.png';
import VideoIcon from '../../public/images/video-icon.png';
import BannerImg from '../../public/images/banner-img.png';
import classes from '../../styles/Home.module.css';

const Banner = () => {
    return (
        <div className={`${classes.hmBannerSecWrap}`}>
            <div className={`${classes['hm-audio-call']}`}>
                <Image src={hmAudioCall} alt='hm Audio Call' />
            </div>
            <div className={`${classes['video-call']}`}>
                <Image src={VideoCall} alt='Video Call' />
            </div>
            <div className={`${classes['floating-chat']}`}>
                <Image src={FloatingChat} alt='Floating Chat' />
            </div>
            <div className={`${classes['video-icon']}`}>
                <Image src={VideoIcon} alt='Video Icon' />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className={`${classes['hm-Banner-Innr']}`}>
                            <div className={`${classes['logo']}`}>
                                <Link href='/'><Image src={Logo} alt='Logo' /></Link>
                            </div>
                            <div className={`${classes['hm-banner-dsc']}`}>
                                <h2>Connect with Doctors </h2>
                                <h3>anytime, anywhere !</h3>
                                <p>DocTel offers fast, reliable, and secure access to professional <br></br>
                                medical care—right from your phone. </p>
                                <Link href='/'>Download</Link>
                            </div>
                            <div className={`${classes['hm-banner-img']}`}>
                                <Image src={BannerImg} alt='Banner Img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;