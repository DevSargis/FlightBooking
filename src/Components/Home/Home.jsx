import React, { useEffect } from 'react'
import airPlane from '../Assets/airplane-png-10499.png'
import cloudVideo from '../Assets/cloudVide.mp4'


// import AOS Animation for site
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = ()=>{
    //useEffect to set animation duration
    useEffect(()=>{
        Aos.init({duration:3000})
    }, [])



    return (
        <div className='home flex container'>
            <div className='mainText'>
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories with us</h1>
            </div>
        <div className='homeImages flex'>
            <div className='videoDiv'>
                <video src={cloudVideo} autoPlay muted loop className='video'></video>
            </div>
            <img src={airPlane} className='plane'/>
        </div>

        </div>
    )
}

export default Home