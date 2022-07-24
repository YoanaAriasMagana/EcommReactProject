import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header>
            <article class="header-text">
            <img class="logo" src="./images/EchosLogo2.png" alt="logo" width="100px" height="100px"></img>
                {/* <h1>Echos</h1> */}
            </article>
            <nav>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="product.html">SHOP</a></li>
                    <li><a href="contact.html">CONTACT US </a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;