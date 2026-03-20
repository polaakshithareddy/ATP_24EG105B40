
function user(props){
    let {user} = props;
    //state
    //return react element
    return(
    <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-400">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img src={user.image} alt ="" className="block mx-auto rounded-3xl"/>
    </div>
    )

}
export default user;