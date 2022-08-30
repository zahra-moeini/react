import React ,{useEffect, useState} from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Time';
import TimeList from './TimeList'



const App=()=>{
  const [title,setTitle]=useState("Hello my dear friend ")

  const [isLight , setIsLight] = useState(false);

  const [timeArr,setTimeArr]=useState(["00:05:12" ,'00:05:13',"00:05:14","00:05:15", "00:05:16" ,"00:05:17"]);

  useEffect(()=>{
    console.log('useEffect');
    return()=>{

    }
  },[isLight])

  const handleSetIsLight=()=>{
    setIsLight(!isLight)
  }

  return(
    <div className='main' style={{background:isLight ? "white" : "black"}}>
      <Hello title={title}/>
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
      <TimeList>
        {timeArr}
      </TimeList>
    </div>
  )
}

  export default App;

