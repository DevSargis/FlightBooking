import React, { useEffect }   from 'react'
import loungeImage from '../Assets/Lounge.png'

// import AOS Animation for site
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = ()=>{
    useEffect(()=>{
        Aos.init({duration:3000})
    }, [])

    return (
        <div className='lounge container section'>
            <div className='sectionContainer grid'>
                <div data-aos='fade-left' data-aos-duration='4500' className='imgDiv'>
                    {/* Add some image here would be desirable grids image  */}
                    <img src={loungeImage} alt="" />
                </div>
                <div className='textDiv'>
                    <h2 data-aos='fade-down' data-aos-duration='4500'>Unaccompanied Minor Lounge</h2>
                    <div className='grids grid'>

                        <div  data-aos='fade-down' data-aos-duration='4500' className='singleGrid'>
                            <span className='gridTitle'> Help through the airpot</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='4500' className='singleGrid'>
                            <span className='gridTitle'> Chauffeur-drive service</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='4500' className='singleGrid'>
                            <span className='gridTitle'>Care on the filght</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='4500' className='singleGrid'>
                            <span className='gridTitle'>Priority Boarding</span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Lounge