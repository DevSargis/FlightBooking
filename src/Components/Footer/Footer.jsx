import React, { useEffect }  from 'react'

import {TiSocialFacebook} from 'react-icons/ti'
import Logo from '../Assets/logo.png'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
// import AOS Animation for site
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = ()=>{


    useEffect(()=>{
        Aos.init({duration:3000})
    }, [])

    return (
        <div className='footer'>
            <div className='sectionContainer container grid'>
                <div data-aos='fade-up' data-aos-duration='3500' className='gridOne'>
                    <div className='logoDiv'>
                         <img src={Logo} alt="" className='Logo'/>
                    </div>
                    <p>Your mind should be stronger then your feelings, fly!</p>
                    <div className='socialIcon flex'>
                            <TiSocialFacebook className='icon flex'/>
                            <AiOutlineTwitter className='icon flex'/>
                            <AiFillYoutube className='icon flex'/>
                            <FaPinterestP className='icon flex'/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='3500' className='footerLinks'>
                    <span className='linkTitle'>Information </span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                </div>
                <div data-aos='fade-up' data-aos-duration='3500' className='footerLinks'>
                    <span className='linkTitle'>Quick Guide </span>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Route map</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                </div>
                <div data-aos='fade-up' data-aos-duration='3500' className='footerLinks'>
                    <span className='linkTitle'>Information </span>
                    <li>
                        <a href="">Chauffuer</a>
                    </li>
                    <li>
                        <a href="">Our partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Program Rules</a>
                    </li>
                </div>
        

            </div>

            <div className='copyRightDiv flex'>
                <p>Courtesy Design | Developed by <a href ="https://emailto-isratech8@outlook.com">IsraTech</a> 
                </p>
            </div>

        </div>
    )
}

export default Footer