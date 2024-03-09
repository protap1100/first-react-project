import Counter from './counter';
import './App.css'
import Team from './team';
import Practice from './practice';
import Fetch from './fetch';
import Friends from './Friends';


function App() {

  // function handleClick(){
  //   alert('Hello world');
  // }

  // const handleClick2 = () =>{
  //   alert('Arrow Function');
  // }
  // const handleClick3 = (num) =>{
  //   alert(num + 10)
  // }

  return (
    <>
      <h1>React Core Concept</h1>

      <Friends></Friends>
      
      {/* <Fetch></Fetch> */}

      {/* <Practice></Practice> */}

      {/* <Team></Team> */}

      {/* <Counter></Counter> */}
      {/* <button style={{
        marginRight :'10px',
      }} onClick={handleClick}>Click Me</button>
      <button style={{
        marginRight :'10px',
      }} onMouseOver={handleClick2} >Mouse Over Me</button>
      <button style={{
        marginRight :'10px',
      }} onClick={() =>{alert('Inside Btn')}} >Click Me</button>
      <button style={{
        marginRight :'10px',
      }} onClick={() => handleClick3(10)}>Click Me</button> */}
    </>
  )
}

export default App
