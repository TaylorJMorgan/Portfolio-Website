import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

    $(function () {
        $("nav .nav-link").on("click", function () {
            $("nav").find(".active").removeClass("active");
            $(this).addClass("active");
        });
    });

    return (
        <nav className='navbar navbar-dark sticky-top navbar-expand-lg navbar-custom p-0' id='navbar'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;