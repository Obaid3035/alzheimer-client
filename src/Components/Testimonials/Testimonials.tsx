import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap";
import CustomerImg from "../../Assets/lekin.png";
import RatingStar from "../RatingStar/RatingStar";
import './Testimonials.scss';

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container>
            <div className={'testimonials_main'}>
                <h1>Our Customers Says</h1>
                <Slider {...settings}>
                    <div className={'customer_reviews'}>
                        <p>“It took a while to get through the project because I am very picky about details.
                            The design Henge team was very patient and delivered changes as new challenges came up.
                            Hope to work together in future!
                        </p>
                        <div className={'text-center'}>
                            <img src={CustomerImg} alt={'customer_img'} />
                        </div>
                        <div>
                            <RatingStar rating={3}/>
                        </div>
                        <h6>John Linda</h6>
                    </div>
                    {/*------------------*/}

                    <div className={'customer_reviews'}>
                        <p>“It took a while to get through the project because I am very picky about details.
                            The design Henge team was very patient and delivered changes as new challenges came up.
                            Hope to work together in future!
                        </p>
                        <img src={CustomerImg} alt={'customer_img'} />
                        <div>
                            <RatingStar rating={3}/>
                        </div>
                        <h6>John Linda</h6>
                    </div>
                </Slider>
            </div>
        </Container>
    );
};

export default Testimonials;
