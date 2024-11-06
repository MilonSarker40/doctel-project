import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import classes from '../../styles/Home.module.css';
import ClientSliderImg1 from '../../public/images/client-slider-img-1.png';


const ClientSays = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className={`${classes['client-says-sec-wrap']}`} style={{display:'none'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading'>
                            <h5>User Reviews</h5>
                            <h2>What clients says</h2>
                            <p>DocTel offers fast, reliable, and secure access to professional medical care—right from your phone. Whether it's a quick <br></br> consultation or ongoing health advice, DocTel connects you with qualified doctors anytime, anywhere, ensuring your health is <br></br> always a priority.</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='client-says-slider-cntlr'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='client-says-slide-item'>
                                        <div className='client-says-slide-item-dsc'>
                                            <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                            <h6>Lora Smith, creative director, <br></br> New York</h6>
                                            <p>It is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                    <div className='client-says-slide-item'>
                                        <div className='client-says-slide-item-dsc'>
                                            <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                            <h6>Lora Smith, creative director, <br></br> New York</h6>
                                            <p>It is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                    <div className='client-says-slide-item'>
                                        <div className='client-says-slide-item-dsc'>
                                            <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                            <h6>Lora Smith, creative director, <br></br> New York</h6>
                                            <p>It is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                    <div className='client-says-slide-item'>
                                        <div className='client-says-slide-item-dsc'>
                                            <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                            <h6>Lora Smith, creative director, <br></br> New York</h6>
                                            <p>It is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                    <div className='client-says-slide-item'>
                                        <div className='client-says-slide-item-dsc'>
                                            <Image src={ClientSliderImg1} alt='Client Slider Img' />
                                            <h6>Lora Smith, creative director, <br></br> New York</h6>
                                            <p>It is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout.</p>
                                        </div>
                                    </div>
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