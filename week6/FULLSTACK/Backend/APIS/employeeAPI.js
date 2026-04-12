import exp from "express";
import {config} from "dotenv"
config();
import { EmpModel } from "../models/employee.js";
export const empRoute = exp.Router();

//Create emp
empRoute.post("/employees", async (req, res) => {
  //get new user from req
  const newEmp = req.body;
  //create new employee document
  const empDoc = new EmpModel(newEmp);
  //save the result
  await empDoc.save();
  res.status(201).json({ message: "Emp created" });
});
//Read all emps
empRoute.get("/employees", async (req, res) => {
  let empList = await EmpModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
});
//Update emp id
empRoute.put("/employees/:id", async (req, res) => {
  //get modified emp from req
  const modifiedEmp = req.body;
  const eid = req.params.id;
  //find and update
  let updatedEmp = await EmpModel.findByIdAndUpdate(
    eid,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

//Delete emp by id
empRoute.delete("/employees/:id", async (req, res) => {
  const eid = req.params.id;
  let deletedEmp = await EmpModel.findByIdAndDelete(eid);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});