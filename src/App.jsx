import { useEffect, useState } from "react";
import Cart from './assets/Cart'




function App(){

  const [list,setList]=useState([]);
  let [filterOptions,setFilterOptions]=useState("All");

    const [selectedId,setId]=useState('');
    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    const [button,setButton]=useState('Add ToDo')

  useEffect(()=>{
    setList(list);
    setName(name);
    setDesc(desc);
  },[list,name,desc])


  function handleSubmit(e){
    e.preventDefault();

    if(button=='Add ToDo'){

    const newTask={
      id:list.length+1,
      name:name,
      description:desc,
      status:"Not Completed"
    }

    if(name && desc){
        const isItem=list.some(i=>i.name == name && i.description == desc);


        if(!isItem){
        setList((previousState)=>{

              return [...previousState,newTask]

            })
        }else{
          console.log("Already exist..");
        }

  }
  else{
    console.log("Enter Valid To-Do list");
  }
}
  else if(button=='Update ToDo'){
    const updatedCardDetails = list.map((item) =>
        item.id === selectedId ? { ...item, name: name, description: desc } : item
      );
      setList(updatedCardDetails);
      setButton('Add ToDo');




  }
  setName('');
  setDesc('');

  }

  function setselection(val,Id){

      const changeData={...Id,status:val}

      console.log(changeData);

      const it=list.filter(i=>i.id !== Id.id);

      setList([...it,changeData]);

  }

function editTask(item){
      
    setName(item.name);
    setDesc(item.description);

    setButton('Update ToDo');
    setId(item.id);

}

function deleteTask(Id){
    const item=list.filter(i=>i.id !== Id.id);

    setList(item);

    console.log(list);
}

return(
    
  <div className="container-fluid p-5 d-grid justify-content-center">
        <div className="row px-5 text-center">
          <div className="col-12 titlebar">
            <h1 className="h1 text-success">My To-Do-List</h1>
            </div>
        </div>


        
        <div className="row pt-5">


          <form className="container" onSubmit={handleSubmit}>

            <input type="text" name="Name" className="border-0 bg-warning-subtle p-2 rounded-2 m-3" placeholder="Name Of Task"value={name} onChange={(e)=>setName(e.target.value)}/>


            <input type="text" name="Description" className="border-0 bg-warning-subtle p-2 rounded-2 m-3" placeholder="Description Of Task" value={desc} onChange={(e)=>setDesc(e.target.value)}/>

            <button className="btn btn-outline-success">{button}</button>
        </form>



        </div>
          

          <div className="row pt-5">
            <div className="col-12 col-sm-6">
              <h3>My Todos</h3>
            </div>
            <div className="col-12 col-sm-3">
              <h3 className="text-nowrap ">Status Filter:</h3>
            </div>
            <div className="col-12 col-sm-3">
            
                <select  className="btn bg-warning-subtle dropdown-toggle " onChange={(e)=>{
                  setFilterOptions(e.target.value);
                }}>

                    <option className="dropdown-item" value="All" >All</option>
                    <option className="dropdown-item" value="Completed">Completed</option>
                    <option className="dropdown-item" value="Not Completed">Not Completed</option>
                    
                </select>
            </div>
          </div>

          <div className="row pt-4">

            {
              (filterOptions=="All")?(
                
                (list.length<1)?(""):(
                  list.map((item)=>{
                    return <Cart key={item.id} setselection={setselection} setList={setList} data={item} editTask={editTask} deleteTask={deleteTask}/>
                  })
                )
              ):(
                

                list.filter(item=>item.status==filterOptions).map((item)=>{
                  return <Cart key={item.id}  setselection={setselection}  setList={setList} data={item}  editTask={editTask} deleteTask={deleteTask}/>
                })
              )
            }
              
            
          </div>

  </div>
    
  )
}


export default App;
