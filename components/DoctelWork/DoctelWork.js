import React from 'react';
import Image from '../../node_modules/next/image.d.ts';
import DoctelWorkImg from '../../public/images/doctel-work-img.png';
import DoctelWorkRgtImg1 from '../../public/images/doctel-work-rgt-img-1.png';
import WorkVideoCall from '../../public/images/work-video-call.png';
import PrescriptionImg from '../../public/images/prescription.png';
import classes from '../../styles/Home.module.css';
import DoctelWorkGridImg1 from '../../public/images/doctel-work-grid-img-1.png';
import DoctelWorkGridImg2 from '../../public/images/doctel-work-grid-img-2.png';
import DoctelWorkGridImg3 from '../../public/images/doctel-work-grid-img-3.png';
import DoctelWorkGridbg from '../../public/images/doctel-work-grid-bg.png';



const DoctelWork = () => {
    return (
        <div className={`${classes['doctel-work-sec-wrap']}`}>
            <div className='doctel-work-grid-bg'>
                <Image src={DoctelWorkGridbg} alt='Doctel Work Grid Bg' />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading'>
                            <h5>Your Health, Your Way</h5>
                            <h2>How Does DocTel Work</h2>
                            <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice DocTel connects you with qualified doctors anytime anywhere ensuring your health is always a priority</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                       <div className={`${classes['doctel-work-wrap']}`}>
                            <div className={`${classes['doctel-work-grid']}`} id='DoctelWorkGridImg1'>
                                <div className={`${classes['doctel-work-img']}`}>
                                    <Image src={DoctelWorkImg} alt='Doctel Work Img' />
                                </div>
                                <div className={`${classes['doctel-work-dsc-innr']}`}>
                                    <div className={`${classes['doctel-work-dsc']}`}>
                                        <h6>Step - 01</h6>
                                        <h5>Download App </h5>
                                        <p>DocTel brings expert medical advice to your fingertips. With video and audio calls, chat options, and easy document uploads, getting the healthcare you need has never been more convenient. Say goodbye to waiting rooms and hello to instant, secure consultations—anytime, anywhere</p>
                                    </div>
                                </div>
                                <Image src={DoctelWorkGridImg1} alt='Doctel Work Grid Img1' />
                            </div>
                            <div className={`${classes['doctel-work-grid']}`} id='DoctelWorkGridImg2'>
                                <div className='doctel-work-rgt-img order-2'>
                                    <Image src={DoctelWorkRgtImg1} alt='Doctel Work Img 1' />
                                </div>
                                <div className='doctel-work-lft-innr order-1'>
                                    <div className={`${classes['doctel-work-dsc']}`}>
                                        <h6>Step - 02</h6>
                                        <h5>Open DocTel App</h5>
                                        <p>DocTel brings expert medical advice to your fingertips. With video and audio calls, chat options, and easy document uploads, getting the healthcare you need has never been more convenient. Say goodbye to waiting rooms and hello to instant, secure consultations—anytime, anywhere</p>
                                    </div>
                                </div>
                                <Image src={DoctelWorkGridImg2} alt='Doctel Work Grid Img2' />
                            </div>
                            <div className={`${classes['doctel-work-grid']}`} id='DoctelWorkGridImg3'>
                                <div className={`${classes['doctel-work-img']}`}>
                                    <Image src={WorkVideoCall} alt='Work Video Call' />
                                </div>
                                <div className={`${classes['doctel-work-dsc-innr']}`}>
                                    <div className={`${classes['doctel-work-dsc']}`}>
                                        <h6>Step -03</h6>
                                        <h5>Audio or Video call a doctor</h5>
                                        <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice, DocTel connects you with qualified doctors anytime, anywhere, ensuring your health is always a priority.</p>
                                    </div>
                                </div>
                                <Image src={DoctelWorkGridImg3} alt='Doctel Work Grid Img3' />
                            </div>
                            <div className={`${classes['doctel-work-grid']}`}>
                                <div className='doctel-work-rgt-img order-2'>
                                    <Image src={PrescriptionImg} alt='Doctel Work Img 1' />
                                </div>
                                <div className='doctel-work-lft-innr order-1'>
                                    <div className={`${classes['doctel-work-dsc']}`}>
                                        <h6>Step - 04</h6>
                                        <h5>Download e-prescription</h5>
                                        <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice, DocTel connects you with qualified doctors anytime, anywhere, ensuring your health is always a priority.</p>
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

export default DoctelWork;