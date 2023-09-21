import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


function SearchInput() {

    const { setSearchValue } = useContext(ShoppingCartContext)

    return(
        <div className="mt-20 w-full flex flex-col justify-end items-center">
            <h2 className="text-3xl font-bold my-4">Exclusive Products</h2>
            <input type="text" className="bg-neutral-200 px-4 rounded-full py-2 placeholder:text-center text-center" placeholder='Search Product' onChange={e => setSearchValue(e.target.value)} spellCheck={false}/>
        </div>
    )
}

export { SearchInput }