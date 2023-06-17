import React, { useEffect, useState } from "react";



function ClientList({clientInfo}){

    return(
        <div className="clientListMain">
            <h3>List of Employees</h3>
            <div className="clientList">
            
                <ul >
                    {employeeInfo.map ( (employee) =>
                    <div className="listed-client">
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
        </div>
    )
}