import * as React from 'react'
import { Link } from 'react-router-dom'

const NavBox = (props) => {
    const navLinkObj = [
        {
            name : 'Home',
            to : '/'
        },
        {
            name : 'Categories',
            to : '/categories'
        },
        {
            name : 'Contact',
            to : '/contact'
        }
    ]
    return ( 
    <div className = "nav-box">
        {navLinkObj.map(item => {
            return (
                <div className = 'nav-link-container'>
                    <Link className = 'nav-link'
                    onClick={() => {
                        props.setBackdrop("")
                        props.setNavBox("")
                        props.setNavBoxBool((bool) => {
                            return !bool
                        })
                    }} to = {item.to}>
                        <p>{item.name}</p>
                    </Link>
                </div>
            )
        })}
    </div>
    )
}

export default NavBox