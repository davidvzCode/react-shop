import React from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([])

    async function allProducts() {
        const response = await axios(API)
        setProducts(response.data)
    }

    React.useEffect(() => {
        allProducts()
    }, [])

    return products
}

export default useGetProducts
