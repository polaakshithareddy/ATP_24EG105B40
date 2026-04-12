import { NavLink } from "react-router"

function Header() {
  return (
    <div>
        <nav className="p-5">
            <ul className="flex justify-end gap-5 text-2xl">
                <li>
                    <NavLink to ="/" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/login" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Login</NavLink>
                </li>
                <li>
                    <NavLink to ="/register" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Register</NavLink>
                </li>
                <li>
                    <NavLink to ="/technologies" className={({isActive})=>(isActive)?"bg-blue-200 p-5":""}>Technologies</NavLink>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Header;