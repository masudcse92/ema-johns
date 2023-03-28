import React from 'react';
import './Product.css';


const Products = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;

    const handleAddToCart = props.handleAddToCart;

    // console.log(props.product)


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6> {name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart </button>

        </div>
    );

};

export default Products;