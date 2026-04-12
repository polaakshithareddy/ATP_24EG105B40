import { createBrowserRouter,RouterProvider,Navigate} from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Technologies from "./components/Technologies"
import Java from "./components/Java.jsx"
import Nodejs from "./components/Nodejs.jsx"
import Vue from "./components/Vue.jsx"

function App(){
  //adding routing configuration
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"technologies",
          element:<Technologies/>,
          children:[
            {
              index:true,
              element:<Navigate to="java" replace />
            },
            {
            path:"java",
            element:<java/>
            },
            {
              path:"node",
              element:<nodejs/>
            },
            { 
              path:"vue",
              element:<vue/>
            },
          ]
        }
      
      ]
    }   

  ])
          
    return(
      
      <RouterProvider router={routerObj}/>
      
    )
}
export default App;