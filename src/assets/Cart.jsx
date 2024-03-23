import { useState } from "react";


function Cart({data,setselection,editTask, deleteTask}){

    return(
        <>
            <div className="col-12 col-sm-4 col-lg-3 card-col ms-4 mt-4" >

                <div className="card p-2">
                    <div className="card-header">
                        <strong>Name: </strong>{data.name}
                    </div>
                    <div className="card-body">
                    
                    <div className="mt-3">
                        <strong>Description: </strong>
                        {data.description}
                    </div>
                    
                    <div className="mt-4">
                       <strong>Status:</strong> 
                <select  className="btn dropdown-toggle bg-warning w-75 ms-2" onChange={(e)=>{
                    setselection(e.target.value,data);
                }}>
                    <option className="dropdown-item ">Not Completed</option>

                    <option className="dropdown-item" value="Completed">Completed</option>
                    
                </select>

                <div className="card-footer mt-4 d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-success px-4" onClick={()=>{editTask(data)}}>Edit</button>

                    <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteTask(data)}}>Delete</button>
                </div>
                    </div>
                    
                    </div>
                </div>

            </div>

            
        </>
    )
    
}

export default Cart;