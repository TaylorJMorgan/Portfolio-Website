import React from 'react';


function Carousel(props) {

    return (
        <div id='projectsCarousel' className='carousel slide col-12 col-lg-10 carousel-container' data-bs-ride='false'>
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#projectsCarousel' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                {/* <button type='button' data-bs-target='#projectsCarousel' data-bs-slide-to='1' aria-label='Slide 2'></button> */}
                {/* <button type='button' data-bs-target='#projectsCarousel' data-bs-slide-to='2' aria-label='Slide 3'></button> */}
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={props.img1} className='d-block w-100' alt='...' />
                    <div className='carousel-caption dark-div'>
                        <h5>{props.label1}</h5>
                        <p>{props.description1}</p>
                    </div>
                </div>
                {/* <div className='carousel-item'> */}
                {/* <img src={props.img2} className='d-block w-100' alt='...' /> */}
                {/* <div className='carousel-caption dark-div d-none d-md-block'> */}
                {/* <h5>{props.label2}</h5> */}
                {/* <p>{props.description2}</p> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className='carousel-item'> */}
                {/* <img src={props.img3} className='d-block w-100' alt='...' /> */}
                {/* <div className='carousel-caption dark-div d-none d-md-block'> */}
                {/* <h5>{props.label3}</h5> */}
                {/* <p>{props.description3}</p> */}
                {/* </div> */}
                {/* </div> */}
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#projectsCarousel' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#projectsCarousel' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
}

export default Carousel;