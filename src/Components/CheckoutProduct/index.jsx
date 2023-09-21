/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function CheckoutProduct({ title, imageURL, price }) {

    const { setCheckoutProducts, setCartCounter } = useContext(ShoppingCartContext)

    return(
        <article className="w-full h-fit py-6 border border-black rounded-lg flex justify-center items-center">
            <div className="h-12 w-12 rounded-lg object-cover ml-4 overflow-hidden">
                <img src={imageURL} alt={title} className="className='h-full w-full object-cover hover:scale-110 transition-transform duration-100'"/>
            </div>
            <div className="mx-auto flex gap-x-6 justify-center items-center">
                <p className="text-xs mx-4 w-8">{ title }</p>
                <p>Price: $<span className="font-bold text-lg">{ price }</span></p>
            </div>
            <div className="cursor-pointer hover:text-red-600 transition-colors duration-200 rounded-full p-1 ml-auto" onClick={() => {
                setCheckoutProducts(prevProducts => {
                    const newProducts = {products: [...prevProducts.products], totalPrice: prevProducts.totalPrice}
                    const idx = newProducts.products.findIndex(item => item.title === title)
                    newProducts.products.splice(idx, 1)
                    newProducts.totalPrice = newProducts.products.reduce((total, acc) => total + acc.price, 0)
                    setCartCounter(prev => prev - 1)
                    return newProducts
                })
            }}>    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
        </article>
    )
}

export { CheckoutProduct }