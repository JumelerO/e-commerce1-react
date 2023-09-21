/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Aside({ children, asideTitle }) {

    const { setIsCheckoutOpen } = useContext(ShoppingCartContext)

    return(
        <aside className='w-[360px] flex flex-col fixed bg-white right-0 top-24 border border-black rounded-lg max-h-[calc(100%-100px)] mr-2 items-center z-20 overflow-hidden'>
            <header className="flex justify-between w-full items-center px-6 py-4 bg-white z-20">
                <h2 className="font-bold text-xl tracking-widest">{ asideTitle }</h2>
                <div className="cursor-pointer hover:bg-neutral-300 transition-colors duration-100 rounded-full p-1" onClick={() => setIsCheckoutOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
            </header>
            <hr className="w-11/12 mb-4"/>
            <div className="overflow-y-auto max-h-[calc(100%-10px)]">
                { children }
            </div>
            
        </aside>
    )
}

export { Aside }