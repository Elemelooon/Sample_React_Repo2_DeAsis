import { useState } from "react";

const FunctionalState = () => {
    let [sampleContent, changeElement] = useState("Hello Hakdog");
    let [color, changeColor] = useState("red");

    function changeSomething(){
        changeElement("Nabago ulit");
        color == "red" ? changeColor("yellow"): changeColor("red");
        
    }
    return ( 
        <>
            <h1 style={{background: color}}>{sampleContent}</h1>
            <button onClick={() => changeSomething()}>Change Content</button>
        </>
     );
}
 
export default FunctionalState;