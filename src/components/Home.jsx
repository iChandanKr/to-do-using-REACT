import React, { useEffect, useState } from 'react'
import Task from './Task';

const Home = () => {
  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
   
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
   
    console.log(tasks);
  }

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((item, i) => {
      return i !== index;
    });
   
  setTasks(filteredArr);
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  



  return (
    <div className='Container'>
      <form onSubmit={submitHandeler}>
        <h1>- - - Daily Goals  - - -</h1>
        <input type="text" placeholder='Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} />
        <textarea placeholder='Description' value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }} required>

        </textarea>
        <button type="submit">ADD</button>
      </form>
      {
        tasks.map((item, index) => (<Task key={index} title={item.title} description={item.description} 
          deleteTask = {deleteTask} index = {index}/>))
      }
    </div>

  )
}

export default Home;  