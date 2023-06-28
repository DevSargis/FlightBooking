import React, { useState } from 'react'

//Imported Icons from React Icons ===>
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

import '../../main.css'

// Import images
import Logo from '../Assets/logo.png'



const NavBar = ()=>{

    //let us remove the NavBar in the small width screens
    const [active, setActive] = useState('navBarMenu')
    const [noBg, addBg] = useState('navBarTwo')

    const showNavBar = ()=>{
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = ()=>{
        setActive('navBarMenu')
    }

    const addBgColor = ()=>{
        console.log("asdasdasdas")
        if(window.scrollY >= 10){
            addBg('navBarTwo navBar_With_Bg')
        }else{
            addBg('navBarTwo')
        }
    }
    window.addEventListener('scroll', addBgColor)


    return (
       <div className='navBar flex'> 
            <div className='navBarOne flex'>
                    <div className='icon'>
                        <SiConsul/>
                    </div>
                    <div className='none flex'>
                        <li className='flex'> <BsPhoneVibrate className='icon' /> Support</li>
                        <li className='flex'><AiOutlineGlobal className='icon'/> Language</li>
                    </div>
                    <div className='atb flex'>
                        <span> Sign In</span>
                        <span> Sign Out</span>
                    </div>
            </div>

            <div className= {noBg}>
                <div className='logoDiv'>
                    <img src={Logo} className='logo'/>
                </div>
                <div className={active}>
                <ul className='menu flex'>
                    <li onClick={removeNavBar} className='listItem'>Home</li>   
                    <li onClick={removeNavBar} className='listItem'>About</li>   
                    <li onClick={removeNavBar} className='listItem'>Offers</li>   
                    <li onClick={removeNavBar} className='listItem'>Seats</li>   
                </ul>
                <button onClick={removeNavBar} className='btn flex btnOne'>Contact</button>
            </div>
            <button className='btn flex btnTwo'>Contact</button>
            <div onClick={showNavBar}className='toggleIcon'>
                <CgMenuGridO className='icon'/>
            </div>
            </div>
       </div>
    )
}

export default NavBar