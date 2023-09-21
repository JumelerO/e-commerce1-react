/* eslint-disable react/prop-types */

function CheckoutProduct({ title, imageURL, price }) {
    return(
        <article className="w-full h-fit py-4 border border-black rounded-lg flex justify-center items-center">
            <div className="h-12 w-12 rounded-lg object-cover">
                <img src={imageURL} alt={title} />
            </div>
            <p className="text-lg">{ title }</p>
            <p>Price: $<span className="font-bold text-lg">{ price }</span></p>
            <div className="cursor-pointer hover:text-red-600 transition-colors duration-200 rounded-full p-1">    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
        </article>
    )
}

export { CheckoutProduct }