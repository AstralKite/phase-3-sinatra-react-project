import React, { useState } from "react";



function NewEmployee( {handleAddEmployee} ){

    const [first, setFirstName] = useState("");
    const [last, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [project, setProject] = useState("");


    function handleSubmit(e){
        console.log(first);
        console.log(last);
        e.preventDefault();
        
            fetch("http://localhost:9292/add_employee_with_project", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstname: first,
                lastname: last,
                title: title,
                salary: salary,
                name: project,
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
            fetch("http://localhost:9292/projects_rand", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: project,
              }),
            })
              .then((r) => r.json())
              .then(() => {
                resetValues()
            });
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