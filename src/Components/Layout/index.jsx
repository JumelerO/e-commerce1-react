/* eslint-disable react/prop-types */

function Layout({ children }) {
    return(
        <div className="flex flex-col mt-12 items-center">
            { children }
        </div>
    )
}

export { Layout }