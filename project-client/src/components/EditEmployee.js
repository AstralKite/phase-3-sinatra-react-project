import React, { useState } from "react";



function EditEmployee( {setdisplayCreateEmployeeForm, handleUpdateEmployee, selectedEmployee} ){

    const [title, setTitle] = useState(selectedEmployee.title);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [projectName, setProjectName] = useState("");


    function handleSubmit(e){
        e.preventDefault();

        //create fetch PATCH
        fetch(`http://localhost:9292/employees/${selectedEmployee.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                salary: salary,
            }),
          })
            .then((r) => r.json())
            .then((updatedEmployee) => handleUpdateEmployee(updatedEmployee));

        setdisplayCreateEmployeeForm(true)
    }


    function handleSubmitProject(e){
        e.preventDefault();

            //create new Project
            fetch(`http://localhost:9292/add_project_by_emp_id/${selectedEmployee.id}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: projectName
              }),
            })
              .then((r) => r.json())
              .then((data) => {
                console.log(data)
                handleUpdateEmployee(selectedEmployee);
                // AddNewProject()
                // resetValues()
            });            
        }


    return(
        <div className="employee_info_container">
            <div className="employee_info_container_child">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>{`Editing: ${selectedEmployee.firstname} ${selectedEmployee.lastname}`}</h3>
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
                    <button type="submit">UPDATE</button>
                </form>
            </div>
            

            <div className="employee_info_container_child">
                <form onSubmit={handleSubmitProject}>
                    <div>
                        <h3>{`Add Project for ${selectedEmployee.firstname}`}</h3>
                    </div>

                    <div>
                        <label>New Project </label>
                        <input
                            type="text"
                            name="project"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>
                    <button type="submit">Add Project</button>
                </form>
            </div>
        </div>
    )
}


export default EditEmployee;