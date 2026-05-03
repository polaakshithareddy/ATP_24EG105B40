import { useState, useEffect } from "react";
import { get } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  const gotoEmployee = (empObj) =>{
    //navigate to employee
    navigate("/Employee",{state:empObj});
  }
  const gotoEditEmployee = (empObj)=>{
    //navigate to employee along with selected emp obj
    navigate("/edit-emp",{state:empObj})

  }
  const deleteEmpByID = async(id)=>{
    let res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/emp-api/employees/${id}`)
    if(res.status ===200){
      //get latest emps data
      getEmps();
    }
  }
//get all emps
async function getEmps() {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/emp-api/employees`);
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }
    //get all emps on component loading
  useEffect(() => { 
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-2xl shadow-2xl">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/*3 buttons */}
            <div className="flex justify-around">
              <button  onClick={()=>gotoEmployee(empObj)} className="bg-green-600 p-2 rounded-2xl text-white">View</button>
               <button onClick={()=>gotoEditEmployee(empObj)}className="bg-yellow-600 p-2 rounded-2xl text-white">Edit</button>
                <button  onClick={()=>deleteEmpByID(empObj._id)}className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;