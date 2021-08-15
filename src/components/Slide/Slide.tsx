import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { slides } from '../../constants/slides';
import { useSpring, animated } from 'react-spring';
const Slide = () => {
    const [slideSeleted, setSlideSeleted] = useState(slides[0]);
    const [buttonTransition, setButtonTransition] = useState(false);
    const fade = useSpring({
        from: {
            opacity: 0,
            transform: `translate(100px,0)`
        },
        to: {
            opacity: 1,
            transform:  `translate(0,0)`
        },
        delay: 500
    })
    const getSlide = (position: string) => {
        const currentSlides = slides.findIndex((values) => values === slideSeleted);
        if (currentSlides !== -1) {
            if (position === 'prev'){
                setSlideSeleted(currentSlides === 0 ? slides[slides.length - 1] : slides[currentSlides - 1]);
                setButtonTransition(true);
            }
               
            else{
                setSlideSeleted(currentSlides === (slides.length - 1) ? slides[0] : slides[currentSlides + 1]);
                setButtonTransition(true);
            }
                
        }
        setButtonTransition(false);
    }
    console.log(buttonTransition)
    return (
        <div className="slide-wrapper">
            {slides.map((values, key) => {
                return (
                    <div key={key} className={`${values === slideSeleted ? 'slide slide-active' : 'slide'}`}>
                        {values === slideSeleted && <div className="slide-image" style={{ backgroundImage: `url(${slideSeleted})` }} >
                            <div className="slide-content">
                                <div className="container">
                                    <p className='slide-main-title-green'>{slideSeleted === slides[0] ? `Hello it's tea time` : `Want to stay healthy`} </p>
                                    <p className="slide-main-title">drink matcha.</p>
                                    <p className="slide_sub-title">Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore et dolore magna aliqua.</p>
                                     <animated.div style={ fade } className="slide-button"><Link className="slide-button_link" to="/">Shop Now</Link></animated.div>
                                </div>
                            </div>

                        </div>}
                    </div>
                )
            })}


            <div className="sildes-control">
                <div className="slides-control-prev" onClick={() => getSlide('prev')}>
                    <i className="slides-icon ti ti-angle-left"></i>
                </div>
                <div className="slides-control-next" onClick={() => getSlide('next')}>
                    <i className="slides-icon ti ti-angle-right"></i>
                </div>
            </div>

        </div>
    )
}

export default Slide
