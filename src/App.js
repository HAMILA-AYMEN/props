import './App.css';
import React from "react";
import FullName from "./Profile/Components/FullName";
import Bio from "./Profile/Components/Bio";
import Profession from "./Profile/Components/Profession";


function App() {
  const handleEvent = (name) => {
    alert(name);
  };
  return (
    <>
    
    <div className='Body'>
   
      <FullName   firstName="Mohamed Aymen" lastName="Hmila" handleEvent={handleEvent}>
      
      </FullName>
      <br/>
      <div  id="about">
      <Bio FullName="Mohamed Aymen Hmila" Age={34}  Interests="Support ESS, Watching TV , Eating and Sleeping"  />
      </div>
      <br/>
  <div id="profession"><Profession/></div>
      
    </div>
    

    </>
  );
}


export default App;
