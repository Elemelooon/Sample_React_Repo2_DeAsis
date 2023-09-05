import React, {Component} from "react";

class ClassState extends Component{

    //initialize an object's state in class
    constructor() {
        super()
        this.state = {
            sampleContent: "Heeewow",
            bgcol: "red"
        };
        this.changeElement = this.changeElement.bind(this);
    }
    changeElement(){
        // document.getElementById("element").innerHTML = "Hakdog";
        this.setState({sampleContent: "STOOOP", bgcol: "yellow"});

        this.state.bgcol == "red" ? this.setState({sampleContent: "STOOOP", bgcol: "yellow"}) : this.setState({bgcol: "red"});
        //Sample conditional statement using ternary operator

    }
    render(){
        const {bgcol, sampleContent} = this.state;
        //for destructuring
        return(
            <>
                <h1 id="element" style={{background: bgcol}}>{sampleContent}</h1>
                <button onClick={this.changeElement}>Change Element</button>
                {/* <button onClick={() => this.changeElement()}>Change Element</button> */}
            </>
        )
    }
}

export default ClassState;