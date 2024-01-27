import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'; 
import Team from './team';
import Users from './users';
import Friends from './friends';
function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked ');
  }
  const handleClick4 = () => {
    alert('practice button clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>    
      <h3> React Core Concepts 2</h3> 
      <Friends></Friends>
      <Users></Users> 
<Team></Team>
      <Counter></Counter>
       {/*button onclick="handleClick()">click me</button>  */}
      <button onClick={handleClick}>Click me</button>   
      <button onClick={handleClick2}>Click me 2</button>   
      <button onClick={handleClick4}>click me 4</button>
      <button onClick={() =>{alert('5th button clicked me')}}> click me 5</button>
      <button onClick={() =>{alert('third clicked')}}>Click me Third</button>   
{/* vajaila */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
