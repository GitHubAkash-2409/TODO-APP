import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskList = ({ task, setTask, setActivity, setUpdate, setEdit }) =>{

      const handleRemove = (index) => {
        const isConfirm = window.confirm("are you sure you want to remove it")
        if(isConfirm){
          const filteredItems = task.filter((item) => item.id !== index);
        setTask(filteredItems);
        }
        
    };

      const handleEdit = (id) => {
      
        const findItem = task.find((elem)=> {
          return id === elem.id
         });
         setActivity(findItem.title);
         setUpdate(false);
         setEdit(id);
    };

    const handleRemoveAll = () => {
      const isConfirm = window.confirm("Are you sure you want to remove all?");
      if (isConfirm) {
          setTask([]); 
      }
  };
  

      const handleComplete = (id) => {
        setTask(task.map((compItem)=>{
          if(compItem.id === id){
            return{...compItem, complete: !compItem.complete}
          }
          return compItem;
        }))
      };
 
  return (
    <div>
      <ul>
        {task.map((taskList) => (
          <li className={`flex justify-between border-b-2 px-2 py-1 items-center ${taskList.complete ? "line-through" : ""}`} key={taskList.id}>
            <div className="flex gap-3">
              <span className="cursor-pointer">
                <FaCheckSquare size={25} onClick={()=>handleComplete(taskList.id)} />
              </span>
              <span>{taskList.title}</span>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer" onClick={()=>handleEdit(taskList.id)}>
                <FaEdit size={25} />
              </span>
              <span className="cursor-pointer" onClick={()=>handleRemove(taskList.id)}>
                <MdDelete size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {
        task.length>=2 && <button className="bg-[red] text-white px-3 py-2 rounded-md my-5 hover:bg-red-400" onClick={handleRemoveAll}>Remove All</button>
      }
      
    </div>
  );
};

export default TaskList;
