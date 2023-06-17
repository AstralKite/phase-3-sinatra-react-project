import React, { useEffect, useState} from "react";
import './App.css';



//import components
import EmployeeList from "./components/EmployeeList.js";
import NewEmployee from "./components/NewEmployee.js";
import EditEmployee from "./components/EditEmployee.js";


function App() {
  //create array of employees
  const [employees, setEmployees] = useState([]);
  const [displayCreateEmployeeForm, setdisplayCreateEmployeeForm] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  //fetch employess from database
  useEffect(() => {
    fetch("http://localhost:9292/employees")
      .then((r) => r.json())
      .then((employees) => setEmployees(employees));
  }, []);

  function handleAddEmployee(newEmployee) {
    setEmployees([...employees, newEmployee]);
    setSelectedEmployee([])
  }

  function handleUpdateEmployee(updatedEmployeeObj) {
    const updatedEmployees = employees.map( (employee)=>{
      if(employee.id === updatedEmployeeObj.id) {
        return updatedEmployeeObj;
      } else{
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  }

  //delete employee
  function handleDeleteEmployee(id) {
    const updatedEmployee = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployee);
  }



  //-----------------components to render
  return (
    <div className="App">

      <div className="form_display">
        {displayCreateEmployeeForm ? <NewEmployee handleAddEmployee={handleAddEmployee}/> :
              <EditEmployee
              setdisplayCreateEmployeeForm={setdisplayCreateEmployeeForm}
              handleUpdateEmployee={handleUpdateEmployee}
              selectedEmployee={selectedEmployee}
              />}
      </div>

      <EmployeeList
        employees={employees}
        handleDeleteEmployee={handleDeleteEmployee}
        setdisplayCreateEmployeeForm={setdisplayCreateEmployeeForm}
        setSelectedEmployee={setSelectedEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
      />
    </div>
  );
}

export default App;
