import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom'



export class Nav extends Component {

    render() {
        return (
            <>

                <nav style={{ display: 'inline' }}>

                    <ul className='sideNav' >
                        <h3 >News-Hub</h3>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>

                        <h4 style={{ marginTop: "16px", height: "40px", textDecoration: "underline" }}>Category:</h4>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/science">Science</Link></li>
                    </ul>


                </nav >
            </>


        )
    }
}

export default Nav