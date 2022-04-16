import * as React from "react";
import "./app.scss";

interface State {
  count:number
}
interface Props {
  name:string
}
export default class App extends React.Component <Props,State>{
    constructor(props:Props){
      super(props);
        this.state = {count:1}
        console.log(props.name)
    }
    ahmed() {
      this.setState((a,e) => {
        console.log(e)
      })
    }
  render() {
    return (
      <div>app {this.state.count} {this.props.name}
      <button className="text-blueAhmed hover:text-red-800 text-4xl 3xl:hidden sm:block" onClick={() => {this.ahmed();this.setState({count:this.state.count+1})}}>click here</button>
      <i className="fa-solid fa-user"></i>
      </div>
    )
  }
}


