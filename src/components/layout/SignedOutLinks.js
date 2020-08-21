import React from 'react';
import {Link} from 'react-router-dom';


const SignedOutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to='/signin'> Signup </NavLink></li>
        <li><NavLink to='/signup'> Login </NavLink></li>
    </ul>
    )
}

export default SignedOutLinks;