import React,{useState} from "react";
import Normal from './Normal';
import Hard from './Hard';
import Rule from "./Rule";
function App(){
    const [normal, setNormal] = useState(0);
    const [hard, setHard] = useState(0);

    function isNormal(){
        setNormal(normal+1);
    }
    function isHard(){
        setHard(hard+1);
    }

    return(
        <div>
            <h1>Difficulty</h1>
            <div><button onClick={()=>{window.location.href="https://project2-normal.web.app/"}}>Normal</button></div>
            <div><button onClick ={()=>{window.location.href="https://project2-hard.web.app/"}}>Hard</button></div>
            <h1>Rule</h1>
            <button onClick={()=>{window.location.href="https://project2-rule.web.app/"}}>Rule</button>
        </div>
        
    );     
}
export default App;