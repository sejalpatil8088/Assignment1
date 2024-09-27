import React from 'react';

const Services = () => {
    return (
        <div className="services-container">
            <h5 className="services-heading">OUR SERVICES</h5>
            <h3 className='sevices-h3'>We provide great services for our <br></br> customers based on needs</h3>
            <div className="services-cards">
                <div className="service-card1">
                    <img src='../Assets/img1.jpg' alt="Web Designer" className="service-image" width="80px" height="100px" />
                    <h2 className="service-title">Web Designer</h2>
                    <p className='services-paragrap'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <a href="/learn-more" className="learn-more-link">Learn More &rarr;</a>
                </div>
                <div className="service-card2">
                    <img src='../Assets/img2.jpg' alt="App Development" className="service-image" width="90px" height="110px"  />
                    <h2 className="service-title">App Development</h2>
                    <p className='services-paragrap'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <a href="/learn-more" className="learn-more-link">Learn More &rarr;</a>
                </div>
                <div className="service-card3">
                    <img src='../Assets/img3.jpg' alt="SEO Services" className="service-image"  width="80px" height="100px" />
                    <h2 className="service-title">SEO Services</h2>
                    <p className='services-paragrap'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <a href="/learn-more" className="learn-more-link">Learn More &rarr;</a>
                </div>
            </div>
            <div>
                <img src='../Assets/Testimonial.png' alt='testimonial' className='services-testimonial' />
            </div>
        </div>
    );
};

export default Services;