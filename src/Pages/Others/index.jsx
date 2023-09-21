/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import ProductDetail  from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { useEffect, useContext } from "react"

function Others() {

    const { isProductDetailOpen, items, setItems } = useContext(ShoppingCartContext)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/5/products')
        .then(res => res.json())
        .then(res => setItems(res))
    }, [])

    return(
        <>
            <Layout>
                <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                        {
                            items?.map(item => (
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
            </Layout>
        </>
    )
}

export { Others }