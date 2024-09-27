import React from 'react';


const Navbar = () => {
    return (
        <div>
          <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="nav-item bold">Brainwave.io</a>
                <a href="/demos" className="nav-item">Demos</a>
                <a href="/pages" className="nav-item">Pages</a>
                <a href="/support" className="nav-item">Support</a>
                <a href="/contact" className="nav-item">Contact</a>
            </div>
            <div className="navbar-center"></div>
            <div className="navbar-right">
                <button className="get-started-button">Get started a project</button>
            </div>
          </nav>
          <div className='main-head'>
            <div className='left-main'>
                <h3 className='left-h3'>Let’s shift your business</h3>
                <h1 className='left-h1'>Shift your business <br></br>fast with Shade Pro.</h1>
                <p>With lots of unique blocks, you can easily build a page<br></br> without coding. Build your next consultancy website within <br></br>few minutes.</p>
                <button className='left-btn'>Get started a project</button>
            </div>
            <div className='right-main'>
                <img src='../Assets/image1.png' alt='image1' width="320px" height="400px"/>
            </div>
              
          </div>
        </div>  
    );  
};

export default Navbar;