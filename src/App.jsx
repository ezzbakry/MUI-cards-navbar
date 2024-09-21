import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Products from './pages/Products/Products'
import { Provider } from 'react-redux'
import store from './Store/store'

function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([{
    path: '/', element: <Applayout></Applayout>, children: [
      { index: true, element: <Products></Products> }
    ]
  }

  ]

  )


  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>

      </Provider>


    </>
  )
}

export default App
