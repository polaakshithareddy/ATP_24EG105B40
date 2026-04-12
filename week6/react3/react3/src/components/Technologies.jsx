import { NavLink, Outlet } from "react-router"


function Technologies() {
  return (
    <div className="text-center text-5xl">
        <nav className="p-5">
            <ul className="flex justify-center gap-5 text-2xl">
                <li>
                    <NavLink to="java" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Java</NavLink>
                </li>
                <li>
                    <NavLink to="nodejs" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Node.js</NavLink>
                </li>
                <li>
                    <NavLink to="vue" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Vue.js</NavLink>
                </li>

            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Technologies