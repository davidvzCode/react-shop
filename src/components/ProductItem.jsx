import React from 'react'
import '@styles/ProductItem.scss'
import AppContext from '../context/AppContext'
import add from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
    const { addToCart } = React.useContext(AppContext)

    const handleClick = (item) => {
        addToCart(item)
    }
    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt="" />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={add} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default ProductItem
