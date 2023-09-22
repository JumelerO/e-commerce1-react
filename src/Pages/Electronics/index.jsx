/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import {ProductDetail}  from "../../Components/ProductDetail"
import { SearchInput } from '../../Components/SearchInput'
import { ShoppingCartContext } from "../../Context"
import { useEffect, useContext } from "react"
import { Checkout } from "../../Components/Checkout"

function Electronics() {

    const { isProductDetailOpen, items, setItems, searchValue, isCheckoutOpen } = useContext(ShoppingCartContext)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
        .then(res => res.json())
        .then(res => setItems(res))
    }, [])

    const searchedProducts = items?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <>
            <SearchInput />
            <Layout>
                <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                        {
                            searchedProducts?.map(item => (
                            <Card 
                                key = { item.id }
                                categoryName = { item.category?.name }
                                imageURL = { item.images[0] }
                                title = { item.title }
                                price = { item.price }
                                description = { item.description }
                            />
                            ))
                        }
                    </div>
                    { isProductDetailOpen && <ProductDetail />}
                    { isCheckoutOpen && <Checkout /> }
            </Layout>
        </>
    )
}

export { Electronics }