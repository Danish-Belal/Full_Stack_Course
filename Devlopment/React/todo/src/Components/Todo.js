import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Revise JS", "Revise DSA", "Operating System"],
      currentTask: "",
    };
  }

  handleTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.currentTask]
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      currentTask: e.target.value
    })


  }
  render() {
    return (
      // <div>Todo</div>
      <div>
        <input type="text" placeholder='Enter Your Task' onChange={this.handleChange} />
        <button onClick={this.handleTask}> Add</button>
        {
          this.state.tasks.map(task => {
            return (
              <li>
                <p>{task}</p>
                <button>Delete</button>
              </li>
            )
          })

        }
      </div>

    )
  }
}
