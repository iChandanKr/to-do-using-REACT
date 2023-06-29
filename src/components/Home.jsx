import React,{useState} from 'react'

const Home = () => {
  const [inputValue,setInputValue] = useState(0);

//  const changeHnadler = (e)=>{
//   inputValue =  e.target.value;
//   console.log(inputValue);
//  };

 const btsStyle = {
  padding:20,
  margin:10,
  border:"none",
  backgroundColor: "#f1f1f1"  

 };
 const increment = ()=>{
  setInputValue(inputValue+1);
 };
 const decrement = ()=>{
  setInputValue(inputValue-1)
 };
  return (
   <div>
   <input type = "text" style={{padding:20,border:"1px solid rgba(0,0,0,0.4"}}
   placeholder='Enter somthing'
  //  onChange= {changeHnadler}
  value = {inputValue}
  readOnly
  
    />
    <button style={btsStyle} onClick={increment}>+</button>
    <button style={btsStyle} onClick={decrement}>-</button>
   </div>
   
  )
}

export default Home;  