import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./ControlledCarousel.css";
import Platforms from '../Platforms/Platforms';
import AnimationCarousel from '../AnimationCarousel/AnimationCarousel';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return <>
        <h1 className='heading'>Why should you choose Hexnode?</h1>
        <div className='carousel-container'>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='carousel-comp'>
                        <div className='carousel-cont'>
                            <Carousel.Caption>
                                <h3>"Hexnode is great value.Works great with android and ios!"</h3>
                                <h5>Justin Modrak</h5>
                                <p className='pclss'>Technology Coordinator</p>
                            </Carousel.Caption>
                        </div>
                        <div className='carousel-image'>
                            <img
                                className='carousel-img'
                                src='https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80'
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-comp'>
                        <div className='carousel-cont'>
                            <Carousel.Caption>
                                <h3>"It seemed to be in-line everything we were looking at"</h3>
                                <h5>Chris Robinson</h5>
                                <p className='pclss'>Executive Account Manger,NCS</p>

                            </Carousel.Caption>
                        </div>
                        <div className='carousel-image'>
                            <img
                                className='carousel-img'
                                src='https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80'
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
        <AnimationCarousel />
        <Platforms />


    </>
}

export default ControlledCarousel;
