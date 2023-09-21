import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { Clothes } from '../Clothes'
import { Electronics } from '../Electronics'
import { Furniture } from '../Furniture'
import { Others } from '../Others'
import { NavBar } from '../../Components/NavBar'
import { SearchInput } from '../../Components/SearchInput'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/clothes', element: <Clothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/furnitures', element: <Furniture /> },
    { paht: '/others', element: <Others /> },
    { path: '*', element: <NotFound /> }
  ])

  return routes
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <SearchInput />
        <AppRoutes />
        <NavBar /> 
      </BrowserRouter>
    </ShoppingCartProvider>
  )

}

export default App
