import * as React from 'react'
import '../css/navbar.css'
import Backdrop from './Backdrop'
import NavBox from './NavBox'

const {useState} = React

const Navbar = () => {
    const [ navBoxBool, setNavBoxBool] = useState(true)
    const [navbox, setNavBox] = useState("")
    const [backdrop, setBackdrop] = useState("")

    const toggleNav = () => {
        setNavBoxBool(!navBoxBool)
        if(navBoxBool === true){
            setNavBox(<NavBox />)
            setBackdrop(<Backdrop setBackdrop={setBackdrop} setNavBox={setNavBox} setNavBoxBool={setNavBoxBool}  />)
        }
        else{
            setNavBox("")
            setBackdrop("")
        }
    }
    return(
        <div className = "navbar">
            <h1 className = "nav-header">Centexus.</h1>
            <i onClick={toggleNav} className="fas fa-bars"></i>
            {navbox}
            {backdrop}
        </div>
    )
}

export default Navbar