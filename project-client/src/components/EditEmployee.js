import React, { useState } from "react";



function EditEmployee( {setdisplayCreateEmployeeForm, handleUpdateEmployee, selectedEmployee} ){

    const [title, setTitle] = useState(selectedEmployee.title);
    const [salary, setSalary] = useState(selectedEmployee.salary);



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

    return(
        <form className="edit-employee" onSubmit={handleSubmit}>
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
    )
}


export default EditEmployee;