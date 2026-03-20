import "./App.css"
import navbar from './components/navbar'
import footer from './components/footer'
import Userlist from "./components/userlist"
function App(){
//return a react element
return(
    <div>
        <navbar/>
        <div className="m-16 min-h-screen">
            <UsersList/>
    </div>
    <Footer />
    </div>
) 
}
export default App;