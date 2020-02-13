import React, {Component} from 'react'
import Box from './Square'

class Button extends Component {
    constructor(props){
        super(props)
            this.state ={
                boxes : [<Box/>]
            }
    }

addBox = () =>{
    let {boxes} = this.state
    boxes.push(<Box/>)
    this.setState({boxes:boxes})
}
remBox = () =>{
    let {boxes} = this.state
    boxes.pop()
    this.setState({boxes:boxes})
}
render(){
    return (
        <div className="container-box">
            <p className = "boxes-contain">{this.state.boxes}</p>
            <button className = "buttons" onClick={this.addBox}>Add Box</button>
            <button className = "buttons"onClick={this.remBox}>Remove Box</button>
        </div>
    )
}
}
export default Button
