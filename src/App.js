import './styles/styles.css'
import React, {Component} from 'react'
class App extends Component{
  state={
    alignment:"Center-Center",
    leftValue: 'center',
    rightValue: 'center'
  }
  clickHandler = (e) =>{
    this.setState({alignment: e.target.innerText})
  }
  componentDidUpdate(prevProps, preState){
    if(preState.alignment !== this.state.alignment){
      this.checkLeftAlignment()
      this.checkRightAlignment()
    }
  }

  checkLeftAlignment = () =>{
    const {alignment} = this.state
    if(alignment.split('-')[0]==='Top'){
      this.setState({leftValue: 'flex-start'})
    }else if(alignment.split('-')[0]==='Center'){
      this.setState({leftValue: 'center'})
    }else if(alignment.split('-')[0]==='Bottom'){
      this.setState({leftValue: 'flex-end'})
    }
  }

  checkRightAlignment = () =>{
    const {alignment} = this.state
    if(alignment.split('-')[1]==='Left'){
      this.setState({rightValue: 'flex-start'})
    }else if(alignment.split('-')[1]==='Center'){
      this.setState({rightValue: 'center'})
    }else if(alignment.split('-')[1]==='Right'){
      this.setState({rightValue: 'flex-end'})
    }
  }
  render(){
    const {alignment} = this.state
    return (
      <div className="App">
        <nav>
          <ul>
            <li onClick={e=>this.clickHandler(e)}>Top-Left</li>
            <li onClick={e=>this.clickHandler(e)}>Top-Right</li>
            <li onClick={e=>this.clickHandler(e)}>Center-Center</li>
            <li onClick={e=>this.clickHandler(e)}>Bottom-Left</li>
            <li onClick={e=>this.clickHandler(e)}>Bottom-Right</li>
          </ul>
        </nav>
        <h1>{alignment}</h1>
        <div className={alignment} id="body">
          <span></span>
        </div>
        <h1>CSS:</h1>
        <h3>display: flex;</h3>
        <h3>{`align-items: ${this.state.leftValue};`}</h3>
        <h3>{`justify-content: ${this.state.rightValue};`}</h3>
      </div>
    );
  }
}

export default App;
