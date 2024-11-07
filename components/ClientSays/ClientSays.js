import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import ClientSliderImg1 from '../../public/images/client-slider-img-1.png';
import ClientSliderImg2 from '../../public/images/client-slider-img-2.png';
import ClientSliderImg3 from '../../public/images/client-slider-img-3.png';
import ClientSliderImg4 from '../../public/images/client-slider-img-4.png';
import ClientSliderImg5 from '../../public/images/client-slider-img-5.png';
import styles from '../../styles/Home.module.css';

const slideItems = [
    {
        itemImg: ClientSliderImg1,
        title: 'Lora Smith, creative director, New York',
        dsce: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        itemImg: ClientSliderImg2,
        title: 'John Doe, product manager, California',
        dsce: 'DocTel is a life-saver! It makes medical advice accessible to everyone at any time.',
    },
    {
        itemImg: ClientSliderImg3,
        title: 'Emma Brown, software engineer, Texas',
        dsce: 'Highly recommend DocTel for its ease and convenience in getting consultations!',
    },
    {
        itemImg: ClientSliderImg4,
        title: 'Liam Wilson, entrepreneur, Florida',
        dsce: 'DocTel’s quick response times and reliable doctors have been a huge help.',
    },
    {
        itemImg: ClientSliderImg5,
        title: 'Sophia Taylor, HR manager, Colorado',
        dsce: 'Fantastic service that connects you to great healthcare professionals instantly.',
    },
];

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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    };

    return (
        <div className={styles['client-says-sec-wrap']}>
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
                                    {slideItems.map((item, index) => {
                                        const isMiddleActive = index === (activeIndex + 2) % slideItems.length;

                                        return (
                                            <div
                                                className={`${styles['client-says-slide-item']} ${isMiddleActive ? styles['active'] : ''}`}
                                                key={index}
                                            >
                                                <div className={`${styles['client-says-slide-item-dsc']} ${isMiddleActive ? styles['show-content'] : styles['hide-content']}`}>
                                                    <Image src={item.itemImg} alt='Client Slider Img' />
                                                    <h6>{item.title}</h6>
                                                    <p>{item.dsce}</p>
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
