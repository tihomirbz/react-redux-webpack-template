import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <span id='title'>Template</span>
            <Link to='/home'><span className='nav-button'>Home</span></Link>
            <Link to='/redux'><span className='nav-button'>Redux</span></Link>
        </div>
    );
};

export default Header;
