/* eslint-disable react/prop-types */

import { useState, useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Card({ categoryName, imageURL, title, price, description }) {

    const { setCartCounter, setIsProductDetailOpen, setProductToShow, setIsCheckoutOpen, setCheckoutProducts } = useContext(ShoppingCartContext)
    const [isAdded, setIsAdded] = useState(false)

    return(
        <div className='bg-white cursor-pointer w-56 h-60 shadow-2xl rounded-lg overflow-hidden'>
            <figure className='relative mb-2 w-full h-4/5 overflow-hidden'>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10">{ categoryName }</span>
                <img className='h-full w-full object-cover hover:scale-110 transition-transform duration-100' src={imageURL} alt={title} onClick={() => (
                    setIsProductDetailOpen(true),
                    setProductToShow({
                        title: title,
                        price: price,
                        description: description,
                        image: imageURL
                    })
                )}/>
                <div className="absolute flex top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full font-bold text-black m-2 p-4 hover:bg-neutral-400 transtition-colors duration-100 text-2xl select-none" onClick={() => {
                    !isAdded && (setCartCounter(prevCounter => prevCounter + 1), setIsAdded(true), setIsCheckoutOpen(true), setCheckoutProducts(prevProducts => {
                        const newCheckoutProducts = {products: [...prevProducts.products], totalPrice: prevProducts.totalPrice}
                        const newProduct = {
                            title: title,
                            price: price,
                            image: imageURL
                        }
                        newCheckoutProducts.products.push(newProduct)
                        newCheckoutProducts.totalPrice = newCheckoutProducts.products.reduce((total, acc) => total + acc.price, 0)
                        return newCheckoutProducts
                    }))
                }}>+</div>    
            </figure>
            <p className="flex justify-between items-center px-1">
                <span className="text-sm font-light">{ title }</span>
                <span className="text-lg font-medium">${ price }</span>
            </p>
        </div>
    )
}

export { Card }