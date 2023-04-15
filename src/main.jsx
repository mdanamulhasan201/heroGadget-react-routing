import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartData } from './Loaders/getCart&ProductData'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage> , 
        loader : productsAndCartData,      
         children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'shop',
                element: <Shop></Shop>,
                loader : () => fetch('products.json')

            },
            {
                path : '/cart',
                element: <Cart></Cart>,
                loader : productsAndCartData,
            },
            {
                path : '/about',
                element: <About></About>
            },
          
        ]
    },

   

])

ReactDOM.createRoot(document.getElementById('root')).render(<>
<Toaster/>
<RouterProvider router={router}/>
</>)
