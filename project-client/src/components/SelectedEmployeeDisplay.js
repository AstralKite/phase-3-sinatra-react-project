import React from "react";


function SelectedEmployeeDisplay( {
    first_name,
    last_name,
    projects,
    salary,
    title,
    employee_id,
    setdisplayCreateEmployeeForm,
    handleUpdateEmployee,
    selectedEmployee
}) {

    
    function onHandleEditChoice(id){
        console.log(`Employee id of ${first_name} ${last_name} is: ${id}`)
        setdisplayCreateEmployeeForm(false)
    }


    function handleDelete(project){
        console.log(project)
        fetch(`http://localhost:9292/projects/${project.id}`, {
            method: "DELETE",
          });
          handleUpdateEmployee(selectedEmployee);
    }



    function Display()
    {
        return(
            <div className="employee_info_container">
                
                <div className="employee_info_container_child">
                    <h3>{`NAME:   ${first_name} ${last_name}`}</h3>

                    <h3>{`EMPLOYEE TITLE:  ${title}`}</h3>

                    <h3>{`EMPLOYEE SALARY:  ${salary}`}</h3>

                    <button onClick={ ()=> onHandleEditChoice(employee_id)}>Edit Employee Details</button>
                </div>

                <div className="employee_info_container_child">
                    <h3>{`${first_name}\'s Projects`}</h3>
                    <div className="projectList">
                        <ul>
                            {projects.map ( (project) =>
                                <div className="listed-project">
                                    <button className="listed-project-btn"  onClick={ ()=> handleDelete(project)}>❌</button>
                                    <li key={project.id}>{
                                        `${project.name}`
                                    }
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
             </div>
        )
    }


    function NoDisplay()
    {
        return(
            <div>
                <h3>Select Employee</h3>
             </div>
        )
    }



    return(
        <div>
            { (!first_name) ? <NoDisplay></NoDisplay> : <Display></Display>}
        </div>
    )
}

export default SelectedEmployeeDisplay;