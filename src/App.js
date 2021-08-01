import React from 'react';
import Slot from './Slot'
import Slot1 from './Slot1'
import './index.css';



function Spin(props){
  if (props.value) {
    return <Slot />
  }
   return <Slot1 />
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:true}
  }

  handleClick = () => {
    this.setState({
      value : !this.state.value
    });
  }

  render(){
    return(
          <div className="container">
          <h1 className="heading">Spin and Try your luck !!!</h1>
            <button className="btn" onClick={this.handleClick}>Spin</button>
            <Spin value={this.state.value} />
          </div>
        );
  }
}



export default App;
