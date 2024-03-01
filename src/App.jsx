import { About, Login, Orders, Cart, Checkout, Error, Home, Landing, Products, Register, SingleProduct } from './Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorElement } from './components';
import { loader as landingLoader } from './Pages/Landing'
import { loader as singleProductLoader } from './Pages/SingleProduct'
import { loader as allProducts } from './Pages/Products';

import { store } from './store';
import { action as registerAction } from './Pages/Register';
import { action as loginAction } from './Pages/Login';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: allProducts,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      }
    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App;