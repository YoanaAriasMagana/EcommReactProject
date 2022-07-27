import ProductCard from "../components/ProductCard.js"

import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://ecommreactproject.herokuapp.com/")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <>
        <section className="search-bar">
        <h1 className="prod-page-title">All Products</h1>
        <input type="text" placeholder="Search for product..."/>
        </section>
        
        <section className="main-section product-main">
            <ul className="product-list">
                {products.map(product => {
                    return <ProductCard key={product.id} products={product} />
                }
                )}
            </ul>
        </section>
        </>
    )
}