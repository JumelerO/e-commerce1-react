import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {

    const {  orderToShow, setIsOrdersOpen, setIsOrderToShowOpen } = useContext(ShoppingCartContext)

    return(
        <Layout>
            <div className="flex mb-16">
                <div className="mr-12 cursor-pointer rounded-full" onClick={() => (setIsOrdersOpen(true), setIsOrderToShowOpen(false))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg>
                </div>
                <h2 className="text-3xl font-semibold mr-24">My Order</h2>
            </div>
            <div className="h-fit w-[600px] rounded-lg flex flex-col gap-y-8 border-2 border-solid border-black p-8 text-lg mb-8">
                { orderToShow?.map(item => {
                    return(
                        <div key={item.title} className="flex">
                            <div className="flex gap-x-4 items-center">
                                <div className="h-24 w-24 rounded-lg overflow-hidden mr-auto object-cover">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <p className="mx-8">{item.title}</p>
                            </div>
                            <div className="ml-auto mr-2 font-semibold flex items-center">
                                <p>${item.price}</p>
                            </div> 
                        </div>
                    )
                }) }
            </div>
        </Layout>
    )
}

export default MyOrder