import React from 'react';

function Navbar() {
    return (
        <nav class='navbar navbar-dark sticky-top navbar-expand-lg navbar-custom p-2'>
            <div class='container-fluid'>
                <a class='navbar-brand' href='#home'>Taylor Morgan</a>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <a class='nav-link active' aria-current='page' href='#home'>Home</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#about'>About</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>TODO</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#'>TODO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;