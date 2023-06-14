import React, { useState } from "react";



function NewEmployee( {handleAddEmployee} ){

    const [first, setFirstName] = useState("");
    const [last, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [project, setProject] = useState("");

    const [client_name, setClient_name] = useState("");
    const [employee_id, setEmployee_id] = useState("");
    const [client_id, setClient_id] = useState("");


    function handleSubmit(e){
        console.log(first);
        console.log(last);
        e.preventDefault();
        
            //create new EMplyee
            fetch("http://localhost:9292/employees", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstname: first,
                lastname: last,
                title: title,
                salary: salary,
              }),
            })
              .then((r) => r.json())
              .then((newEmployee) => {
                handleAddEmployee(newEmployee);
                AddNewProject()
                resetValues()
            });            
        }

        function AddNewProject(){
            //create new Project
            fetch("http://localhost:9292/projects_rand", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: project,
                employee_id: employee_id,
                client_id: client_id,
              }),
            })
              .then((r) => r.json())
              .then(() => {
                resetValues()
            });
        }


        function handleSubmitTEST(){

        }


        function resetValues(){
            setFirstName("")
            setLastName("")
            setTitle("")
            setSalary("")
            setProject("")
        }

    return(
        <form className="new-employee" onSubmit={handleSubmit}>
            <h3>Add New Employee</h3>
            <div>
                <label>First Name </label>
                <input
                    type="text"
                    name="first"
                    value={first}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label>Last Name </label>
                <input
                    type="text"
                    name="last"
                    value={last}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label>Title </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Salary </label>
                <input
                    type="text"
                    name="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </div>
            <div>
                <label>Project </label>
                <input
                    type="text"
                    name="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                />
            </div>
            
            <button type="submit">Add Employee</button>
        </form>
    )
}


export default NewEmployee;