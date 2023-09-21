import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Aside } from "../Aside"

function ProductDetail() {

    const { productToShow } = useContext(ShoppingCartContext)

    return(
        <Aside asideTitle='Detail'>
            <main className="h-full w-full flex flex-col p-2 justify-evenly items-center"> 
                <h2 className="font-semibold text-lg">{ productToShow.title }</h2>
                <div className="rounded-sm overflow-hidden my-8">
                    <img src={ productToShow.image } alt={ productToShow.title } className="w-[200px] h-[200px] object-cover" />
                </div>
                <p className="text-lg mb-8">{ productToShow.description }</p>
                <p className="text-lg mb-4">Price: $<span className="text-lg font-bold">{ productToShow.price }</span> </p>
            </main>
        </Aside>
    )
}

export { ProductDetail }