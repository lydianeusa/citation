import Citation from "./Citation";
import { useState } from "react";

function App() {

const [isClicked, setIsClicked]=useState(false);

const handleClick= ()=>{setIsClicked(!isClicked)
};



  return (
    <div>
      <button onClick={handleClick}>citation du jour</button>
      {isClicked && <Citation/>}
    </div>
  );
}

export default App;
