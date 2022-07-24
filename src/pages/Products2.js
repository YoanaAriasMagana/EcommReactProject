import Header from "./components/Header";
import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios';

export const Products = () => {
    const [productList, setProductList] = useState([])
    useEffect(()=> {
        Axios.get('http://localhost:3001/productsdb').then((result) => {
            setProductList(result.data)
        })
    })
    return(
        <div>
            {productList.map((value) => {
                console.log(value.image)
                return(
                    <>
                    <img src = {value.image} />
                    </>
                )
            })}
        </div>
    )
}
