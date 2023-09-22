/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({ children }) {
    
    // States
    const [cartCounter, setCartCounter] = useState(0)
    const [items, setItems] = useState(null)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const [isCheckoutClicked, setIsCheckoutClicked] = useState(false)
    const [orders, setOrders] = useState([])
    const [orderToShow, setOrderToShow] = useState(null)
    const [isOrderToShowOpen, setIsOrderToShowOpen] = useState(false)
    const [isOrdersOpen, setIsOrdersOpen] = useState(true)
    const [checkoutProducts, setCheckoutProducts] = useState({
        products: [],
        totalPrice: 0
    })
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    })

    return(
        <ShoppingCartContext.Provider value={{
            cartCounter,
            setCartCounter,
            isProductDetailOpen,
            setIsProductDetailOpen,
            productToShow,
            setProductToShow,
            items,
            setItems,
            searchValue,
            setSearchValue,
            checkoutProducts,
            setCheckoutProducts,
            isCheckoutOpen,
            setIsCheckoutOpen,
            isCheckoutClicked,
            setIsCheckoutClicked,
            orders,
            setOrders,
            orderToShow,
            setOrderToShow,
            isOrderToShowOpen,
            setIsOrderToShowOpen,
            isOrdersOpen,
            setIsOrdersOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }