import React, { useEffect }  from 'react'
import paris from '../Assets/paris.jpeg'
import london from '../Assets/London.jpeg'
import newYourk from '../Assets/NewYourk.jpeg'
import dubay from '../Assets/dubay.jpeg'

import user1 from '../Assets/user1.jpg'
import user2 from '../Assets/user2.jpg'
import user3 from '../Assets/User3.jpg'
import user4 from '../Assets/User4.png'

// import AOS Animation for site
import Aos from 'aos'
import 'aos/dist/aos.css'
// We are going to use high order array method called map to 
// display all the data

const travelers = [
        {
            id:1,
            destinationImage:paris,
            travelerImage:user1,
            travelerName:"Isratech",
            socialLink:"@isratech8"
        },
        {
            id:2,
            destinationImage:london,
            travelerImage:user2,
            travelerName:"Aro",
            socialLink:"@aro5"
        },
        {
            id:3,
            destinationImage:newYourk,
            travelerImage:user3,
            travelerName:"Gago",
            socialLink:"@gago89"
        },
        {
            id:4,
            destinationImage:dubay,
            travelerImage:user4,
            travelerName:"Ai",
            socialLink:"@Ai789"
        }

]

const Travelers = ()=>{


    useEffect(()=>{
        Aos.init({duration:3000})
    }, [])

    return (
        <div className='travelers container section'>
            <div className='sectionContainer'>
                    <h2  data-aos='fade-down' data-aos-duration='4500'>
                        Top travelers of this month!
                    </h2>
                    <div className='travelersContainer grid'>
                        {/* Single passanger card */}
                        {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                            return (
                                <div  data-aos='fade-up' data-aos-duration='4500' key={id} className='singleTraveler'>
                                    <img src={destinationImage} className='destinationImage' />
                                        <div className='travelerDetails'>
                                                <div className='travelerPicture'>
                                                        <img src={travelerImage} className='travelerImage' />
                                                </div>
                                                <div className='travelerName'>
                                                    <span>{travelerName}</span>
                                                    <p>{socialLink}</p>
                                                </div>
                                        </div>
                                </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default Travelers