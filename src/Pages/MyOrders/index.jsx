import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import MyOrder from "../MyOrder"

let date = new Date()
date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`

function MyOrders() {

    const { orders, setOrderToShow, setIsOrderToShowOpen, setIsOrdersOpen, isOrdersOpen, isOrderToShowOpen } = useContext(ShoppingCartContext)

    return(
        <Layout className="text-green-700 text-3xl">
            { isOrdersOpen && 
            <div className="flex text-center flex-col"><h2 className="text-3xl font-bold mt-12 tracking-widest">My Orders</h2>
            <div className="flex flex-col w-82 h-fit jusfity-center items-center">
                { orders?.map(order => {
                    return(
                        <div className='w-full h-fit mt-12 border-2 border-solid border-black flex justify-center items-center gap-x-24 cursor-pointer px-6 py-2 text-2xl rounded-lg hover:shadow-2xl select-none' key={order.title} onClick={() => {
                            setOrderToShow(order.products)
                            setIsOrderToShowOpen(true)
                            setIsOrdersOpen(false)
                        }}>
                            <div className="flex flex-col gap-y-2">
                                <p>{ date }</p>
                                <p>Products: { order.products.length }</p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <p className="font-semibold">${order.totalPrice}</p>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                </div>
                            </div>
                        </div>)})}
                </div>
                </div>}
                
            { isOrderToShowOpen && <MyOrder /> } 
        </ Layout>
    )
}

export default MyOrders