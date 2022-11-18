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
            <button onClick= {isNormal}>Normal</button>
            <button onClick = {isHard}>Hard</button>
            {normal ? <Normal /> : <Rule/>}
            {hard ? <Hard /> : ""}
        </div>
        
    );     
}
export default App;