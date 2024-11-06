import React from 'react';
import Image from 'next/image';
import CommonHeading from '../CommonHeading/CommonHeading';
import ChooseDocImg from '../../public/images/choose-doctel-img.png';
import ChooseDocImg2 from '../../public/images/choose-doctel-img-2.png';
import ChooseDocImg3 from '../../public/images/choose-doctel-img-3.png';
import classes from '../../styles/Home.module.css';

const ChooseDoctel = () => {
    return (
        <div className={`${classes['choose-doctel-sec-wrap']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading'>
                            <h5>Care That Fits Your Lifestyle</h5>
                            <h2>Why Choose DocTel</h2>
                            <p>DocTel brings expert medical advice to your fingertips. With video and audio calls, chat options, and easy document uploads, getting the <br></br> healthcare you need has never been more convenient. Say goodbye to waiting rooms and hello to instant, secure consultations—anytime, <br></br> anywhere</p>
                        </div>
                    </div>
                    <div className={`${classes['choose-doctel-wrap']}`}>
                        <ul className='clearfix reset-list'>
                            <li>
                                <div className={`${classes['choose-doctel-grid']}`}>
                                    <h4>Video & Audio <br></br> Call</h4>
                                    <div className={`${classes['choose-doctel-dsc']}`}>
                                        <a href='#'>Read More</a>
                                        <Image src={ChooseDocImg} alt='Choose Doc Img' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`${classes['choose-doctel-grid']}`}>
                                    <h4>E-Prescription on the <br></br> go</h4>
                                    <div className={`${classes['choose-doctel-dsc']}`}>
                                        <a href='#'>Read More</a>
                                        <Image src={ChooseDocImg2} alt='Choose Doc Img' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`${classes['choose-doctel-grid']}`}>
                                    <h4>instant Chat with <br></br> Doctor</h4>
                                    <div className={`${classes['choose-doctel-dsc']}`}>
                                        <a href='#'>Read More</a>
                                        <Image src={ChooseDocImg3} alt='Choose Doc Img' />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseDoctel;