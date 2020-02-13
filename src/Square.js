import React,{Component} from 'react'

class Box extends Component{
    constructor(props){
        super(props)
        this.state = {
            boxCount : 0,
            color: "white",
            phrase:""
        }
    }


setColorName = () =>{
    let randomColor = Math.floor(Math.random()*5)
    let color= ["green","blue", "yellow","purple","orange"]
    switch (randomColor) {
        case 0: this.setState({phrase: color[0]})
            this.setState({color:color[0]})
            break;
            case 1: this.setState({phrase: color[1]})
            this.setState({color:color[1]})
            break;
            case 2: this.setState({phrase: color[2]})
            this.setState({color:color[2]})
            break;
            case 3: this.setState({phrase: color[3]})
            this.setState({color:color[3]})
            break;
            case 4: this.setState({phrase: color[4]})
            this.setState({color:color[4]})
            break;
    }
}

    render() {
        return(
            <div className="container">
                <div className = "box" style={{backgroundColor:this.state.color}} onClick={this.setColorName}>
                    <p>{this.state.phrase}</p>
                </div>
            </div>
        )
    }

}

export default Box
