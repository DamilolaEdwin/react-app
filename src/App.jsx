import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "code/repos/:name",
    element: <Details/>,
    errorElement: <Error/>
  },

  {
    path: "*",
    element: <NotFound/>
  },

 

])

function App() {
  
 
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
