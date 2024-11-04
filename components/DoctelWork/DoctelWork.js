import React from 'react';
import Image from '../../node_modules/next/image.d.ts';
import CommonHeading from '../CommonHeading/CommonHeading';
import DoctelWorkImg from '../../public/images/doctel-work-img.png';
import DoctelWorkRgtImg1 from '../../public/images/doctel-work-rgt-img-1.png';
import WorkVideoCall from '../../public/images/work-video-call.png';
import PrescriptionImg from '../../public/images/prescription.png';
import classes from '../../styles/Home.module.css';



const DoctelWork = () => {
    return (
        <div className={`${classes['doctel-work-sec-wrap']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <CommonHeading title1='Your Health, Your Way' title='How Does DocTel Work' title2='DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice DocTel connects you with qualified doctors anytime anywhere ensuring your health is always a priority />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                       <div className={`${classes['doctel-work-wrap']}`}>
                          <ul className='clearfix reset-list'>
                            <li>
                                <div className={`${classes['doctel-work-grid']}`}>
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
                                </div>
                                <div className={`${classes['doctel-work-grid']}`}>
                                    <div className={`${classes['doctel-work-lft-innr']}`}>
                                        <div className={`${classes['doctel-work-dsc']}`}>
                                            <h6>Step - 02</h6>
                                            <h5>Open DocTel App</h5>
                                            <p>DocTel brings expert medical advice to your fingertips. With video and audio calls, chat options, and easy document uploads, getting the healthcare you need has never been more convenient. Say goodbye to waiting rooms and hello to instant, secure consultations—anytime, anywhere</p>
                                        </div>
                                    </div>
                                    <div className={`${classes['doctel-work-rgt-img']}`}>
                                        <Image src={DoctelWorkRgtImg1} alt='Doctel Work Img 1' />
                                    </div>
                                </div>
                                <div className={`${classes['doctel-work-grid']}`}>
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
                                </div>
                                <div className={`${classes['doctel-work-grid']}`}>
                                    <div className={`${classes['doctel-work-lft-innr']}`}>
                                        <div className={`${classes['doctel-work-dsc']}`}>
                                            <h6>Step - 04</h6>
                                            <h5>Download e-prescription</h5>
                                            <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice, DocTel connects you with qualified doctors anytime, anywhere, ensuring your health is always a priority.</p>
                                        </div>
                                    </div>
                                    <div className={`${classes['doctel-work-rgt-img']}`}>
                                        <Image src={PrescriptionImg} alt='Doctel Work Img 1' />
                                    </div>
                                </div>
                            </li>
                          </ul>
                       </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctelWork;