import React, {Component} from 'react';
import ListUp from './Components/ListUp';
import ListDown from './Components/ListDown'



class App extends Component {

  state = {
    tasks : [
      {name : 'mohamed'},
      {name : "ahmed"}
    ] , 
    current: ''  
  }

  updateitem = (e) => {
    this.setState({
      current : e.target.value
    })
  }

  deleteTask = (index) => {
    let tasks = this.state.tasks
    console.log(index)
    tasks.splice(index , 1)
    this.setState({tasks})
  }

  addTask = (e) => {
    e.preventDefault();
    let tasks = this.state.tasks
    let current = this.state.current
    tasks.push({name: current})
    this.setState({
      tasks,
      current: ''})
  }

  updateTask = (index, value) => {
    let tasks = this.state.tasks
    let task = tasks[index]
    task.name= value
    this.setState({tasks})
  }

  render() {
    let tasks = this.state.tasks
    let list = tasks.map((item, index) => {
      return (
        <ListDown key={index} 
        index={index} item={item}
        deleteTask={this.deleteTask}
        updateTask = {this.updateTask}/>
      )
    })
   
    return (
      <div className="App container">
        <ListUp updateitem={this.updateitem}
        addTask={this.addTask} current = {this.state.current}/>
      <ul className="list-group">
        {list}
      </ul>
      </div>
    )
  }
    
    }

export default App;
