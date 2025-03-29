import { useState } from "react";
import Card from "./Card.jsx"
function Value() {
  const [text, setText] = useState(""); // State to store input value

  const handleChange = (event) => {
    setText(event.target.value); // Update state when user types
  };

  return (
    <div>
      <input
        type="text" 
        
        onChange={handleChange} 
        placeholder="Enter something..." 
    
        className="bg-white rounded-3xl w-64 h-10 px-4 text-black overflow-hidden">
        </input>
      
     {/*<h1>Your name is <div className="bg-white rounded-3xl mt-4 w-72 h-12  text-black  p-2 overflow-hidden">{text}</div> </h1>*/}
     
     <Card username={text}/> 
      
    </div>
  );
}

export default Value;
