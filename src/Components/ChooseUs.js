import React from 'react'

function ChooseUs() {
  return (
    <div>
        <div className='choose-container'>
            <div className='choose-heading'>
                <h6>WHY CHOOSE US</h6>
                <h2>People choose us because we <br></br> serve the best for everyone</h2>
                <img src='../Assets/Group.png' alt='group' className='group'  />
            </div>
            <div className='choose-images'>
               <img src='../Assets/img1.png' alt='img1' className='img1'  />
               <img src='../Assets/2.png' alt='img2' className='img2'  />
               <img src='../Assets/1copy.png' alt='img3' className='img3'  />
               <img src='../Assets/2copy.png' alt='img4' className='img4'  />

            </div>
            <div className='choose-line'>
            <img src='../Assets/Line2.png' alt='line2' className='line2'  />
            </div>
            <div className='choose-title'>
               <img src='../Assets/Title.png' alt='title' className='title'  /> 
                <div className='choose-button'>
                   <button className='choose-btn'>Get started a project</button>
                </div>  
            </div>
        </div>
        <div className='choose-works'>
           <img src='../Assets/Works.png' alt='works' className='works' width="700px" height="900pxs"  /> 
        </div>
    </div>
  )
}

export default ChooseUs;
