import { useContext } from 'react'
import { Aside } from '../../Components/Aside'
import { CheckoutProduct } from '../CheckoutProduct'
import { ShoppingCartContext } from '../../Context'

function Checkout() {

    const { checkoutProducts, setCheckoutProducts } = useContext(ShoppingCartContext)

    return(
        <Aside asideTitle='Checkout'>
            <main className="h-full w-full flex flex-col p-2 justify-evenly items-center gap-y-6">
                {checkoutProducts?.products?.map(product => (
                    <CheckoutProduct 
                        key = { product.title }
                        title = { product.title }
                        imageURL = { product.imageURL }
                        price = { product.price }
                    />
                ))}
                <div className='w-full flex justify-between items-center text-2xl font-bold'>
                    <p>Total:</p>
                    <p>${ checkoutProducts?.totalPrice }</p>
                </div>
                <button className='px-8 py-2 rounded-lg bg-black text-white text-2xl hover:bg-neutral-900 transition-colors duration-100' onClick={() => setCheckoutProducts({
                    products: [],
                    totalPrice: 0
                })}>Checkout</button>
            </main>
        </Aside>
    )
}

export { Checkout }