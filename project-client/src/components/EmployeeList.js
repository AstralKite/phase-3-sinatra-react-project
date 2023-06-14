import React, { useEffect, useState } from "react";

import SelectedEmployeeDisplay from "./SelectedEmployeeDisplay";

function EmployeeList(
    {employees, handleDeleteEmployee, setdisplayCreateEmployeeForm, setSelectedEmployee}
) {

    const employeeInfo = employees;
    let showInfo = false;

    //employee to show, state
    const [showEmployee, setShowEmployee] = useState([]);
    const [showProject, setshowProject] = useState([]);
    const [showClient, setShowClient] = useState([]);
    
    const missingProject = "Project: NA"
    const missingClient = "Client: NA"

    function handleEmployeeclick(employee) {
        setSelectedEmployee(employee)
        console.log(employee)
        //run fetch using id
        fetch(`http://localhost:9292/employees/${employee.id}`)
        .then(response => response.json())
        .then((emp) => setShowEmployee(emp))

        //run fetch of project name
        fetch(`http://localhost:9292/employees/find_project/${employee.id}`)
        .then(response => response.json())
        .then((proj) => setshowProject(proj))
        .catch(err => setshowProject(missingProject))

        //run fetch for client info
        fetch(`http://localhost:9292/employees/find_client/${employee.id}`)
        .then(response => response.json())
        .then((client) => setShowClient(client))
        .catch(err => console.log(missingClient))
      }


      function handleDelete(id){
        fetch(`http://localhost:9292/employees/${id}`, {
            method: "DELETE",
          });
          handleDeleteEmployee(id);
      }


    return(
        <div className="employeeListMain">
            <h3>List of Employees</h3>
            <div className="employeeList">
            
                <ul >
                    {employeeInfo.map ( (employee) =>
                    <div className="listed-employee">
                        <button className="listed-employee-btn"  onClick={ ()=> handleDelete(employee.id)}>❌</button>
                        <li onClick={ ()=> handleEmployeeclick(employee)} key={employee.id}>{
                            `${employee.firstname}
                            ${employee.lastname}`
                        }
                        </li>
                    </div>
                    )}
                    
                </ul>
            </div>

            <div className="employeeInfo">
                <SelectedEmployeeDisplay
                    first_name={showEmployee.firstname}
                    last_name={showEmployee.lastname}
                    project_name={showProject.name}
                    client_name={showClient.name}
                    title={showEmployee.title}
                    salary={showEmployee.salary}
                    employee_id={showEmployee.id}
                    setdisplayCreateEmployeeForm={setdisplayCreateEmployeeForm}
                />
            </div>
        </div>
);
}

export default EmployeeList;