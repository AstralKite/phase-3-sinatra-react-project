import React from "react";


function SelectedEmployeeDisplay( {
    first_name,
    last_name,
    project_name,
    client_name,
    salary,
    title,
    employee_id,
    setdisplayCreateEmployeeForm
}) {

    function onHandleEditChoice(id){
        console.log(`Employee id of ${first_name} ${last_name} is: ${id}`)
        setdisplayCreateEmployeeForm(false)
    }


    function Display()
    {
        return(
            <div>
                <h3>{`NAME:   ${first_name} ${last_name}`}</h3>

                <h3>{`PROJ NAME:  ${project_name}`}</h3>

                <h3>{`CLIENT NAME:  ${client_name}`}</h3>

                <h3>{`EMPLOYEE TITLE:  ${title}`}</h3>

                <h3>{`EMPLOYEE SALARY:  ${salary}`}</h3>

                <button onClick={ ()=> onHandleEditChoice(employee_id)}>Edit Employee Details</button>
             </div>
        )
    }


    function NoDisplay()
    {
        return(
            <div>
                {/* Header */}
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