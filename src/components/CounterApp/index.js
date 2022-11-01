import { Component } from "react"
import "./index.css"

class CounterApp extends Component{
    state={count:0}

    onIncreaseBtn = () =>{
      
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    onDecreaseBtn = () =>{
        this.setState(prevState=>({count:prevState.count - 1}))
    }

    render(){
        const {count} =this.state
        return(
            <div className="app-container">
            <div className="main-app-container">
            <h1 className="heading">COUNTER APPLICATION</h1>
            <p className="count">COUNT : {count}</p>
            <div className="button-container">
                <button type="button" className="button" onClick={this.onDecreaseBtn}>DECREASE</button>
                <button type="button" className="button" onClick={this.onIncreaseBtn}>INCREASE</button>
            </div>
            </div>
          
            </div>
        )
    }
}

export default CounterApp