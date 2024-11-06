import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import classes from '../../styles/Home.module.css';
import ClientSliderImg1 from '../../public/images/client-slider-img-1.png';

const ClientSays = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className={`${classes['client-says-sec-wrap']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading'>
                            <h5>User Reviews</h5>
                            <h2>What clients say</h2>
                            <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick consultation or ongoing health advice, DocTel connects you with qualified doctors anytime, anywhere, ensuring your health is always a priority.</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='client-says-slider-cntlr'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {[...Array(5)].map((_, index) => {
                                        const isMiddleActive = index === activeIndex + 2; // middle (3rd) item in view
                                        return (
                                            <div
                                                className={`${classes['client-says-slide-item']} ${isMiddleActive ? classes['active'] : ''}`}
                                                key={index}
                                            >
                                                <div className={`${classes['client-says-slide-item-dsc']} ${isMiddleActive ? classes['show-content'] : classes['hide-content']}`}>
                                                    <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                                    {isMiddleActive && (
                                                        <>
                                                            <h6>Lora Smith, creative director, New York</h6>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;
