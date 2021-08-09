import React, { useState } from 'react'
import bg1 from '../../assets/images/s42.jpg';
import bg2 from '../../assets/images/s43.jpg';
const slides = [bg1, bg2];
const Slide = () => {
    const [slideSeleted, setSlideSeleted] = useState(slides[0]);

    const getSlide = (position: string) => {
        const currentSlides = slides.findIndex((values) => values === slideSeleted);
        if (currentSlides !== -1) {
            if (position === 'prev')
                setSlideSeleted(currentSlides === 0 ? slides[slides.length - 1] : slides[currentSlides - 1]);
            else
                setSlideSeleted(currentSlides === (slides.length - 1) ? slides[0] : slides[currentSlides + 1]);
        }
    }

    return (
        <div className="slide-wrapper">
            {slides.map((values, key) => {
                return (
                    <div key={key} className={`${values === slideSeleted ? 'slide slide-active' : 'slide'}`}>
                        {values === slideSeleted && <div className="slide-image" style={{ backgroundImage: `url(${slideSeleted})` }} ></div>}
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
