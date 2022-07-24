import React from 'react';

class Home extends React.Component{
    render() {
        return (
            
            <><figure class="hero-image">
            </figure><div>

                    <h1 class="h1-text">New Releases</h1>
                    <div class="new">
                        <section class="product">
                            <img class="product-image" src="pinkheadphones.avif" alt="Headphones"></img>
                            <section class="product-name">
                                <p>
                                    EKB-7298W3
                                </p>
                            </section>
                            <div class="product-price">
                                <p>$499.00</p>
                            </div>

                        </section>
                        <section class="product">
                            <img class="product-image" src="moniaheadphones.avif" alt="Headphones"></img>
                            <div class="product-name">
                                <p>
                                    ZQ-30000X
                                </p>
                            </div>
                            <div class="product-price">
                                <p>$579.00</p>
                            </div>
                        </section>
                        <section class="product">
                            <img class="product-image" src="yellowheadphones.avif" alt="Headphones"></img>
                            <div class="product-name">
                                <p>
                                    NC-392WQ21
                                </p>
                            </div>
                            <div class="product-price">
                                <p>$149.00</p>
                            </div>
                        </section>
                    </div>

                </div></>
               

        )
    }
}

export default Home;