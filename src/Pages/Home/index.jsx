/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { Checkout } from "../../Components/Checkout"
import { useEffect, useContext } from "react"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {

    const { isProductDetailOpen, items, setItems, searchValue, isCheckoutOpen } = useContext(ShoppingCartContext)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(res => setItems(res))
        .catch()    
    }, [])

    useEffect(() => {
        console.log(items);
    }, [items])

    const searchedProducts = items?.filter(product => product.title.includes(searchValue))

    return(
        <>
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

export default Home
