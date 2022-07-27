import React from 'react';
import Slider from '../components/Slider.js'

class Home extends React.Component{
    render() {
        return (
            <>
            
            <Slider />

            <h1 className="newly-released">NEW RELEASES</h1>
            
            <div className="product-list">
            <li className="list-item">
            <img className="item-image" src="../images/product2.avif" alt="headphones" />
            <div className='item-wrapper'>
                <p className="item-name">EKB-7298W3</p>
                <p className="item-description">Wireless noise canceling over-ear headphones with microphone.</p>
                <p className="item-price">Price: $499.00</p>
                <button className="item-btn btn">Add To Cart</button>
            </div>
            </li>

            <li className="list-item">
            <img className="item-image" src="../images/product3.avif" alt="headphones" />
            <div className='item-wrapper'>
                <p className="item-name">2Q-30000X</p>
                <p className="item-description">Steampunk style wireless noise canceling over-ear headphones with microphone.</p>
                <p className="item-price">Price: $579.00</p>
                <button className="item-btn btn">Add To Cart</button>
            </div>
            </li>

            <li className="list-item">
            <img className="item-image" src="../images/product5.avif" alt="headphones" />
            <div className='item-wrapper'>
                <p className="item-name">NC-392WQ21</p>
                <p className="item-description">Wireless noise canceling over-ear headphones.</p>
                <p className="item-price">Price: $149.00</p>
                <button className="item-btn btn">Add To Cart</button>
            </div>
        </li>
        </div>
</>
        )
    }
}

export default Home;