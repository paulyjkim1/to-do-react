import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'



class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem:''
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return({
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem:''
      })
    })
  }


  render(){
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index}/>
    })
    console.log(todoItems)
    return(
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={this.handleChange}
            value={this.state.newitem}
          />
          <button type="submit">Add</button>

        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the List</button>
      </div>
    )
  }
}


export default MyList