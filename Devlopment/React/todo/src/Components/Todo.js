import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Revise DSA" },
        { id: 2, task: "Revise JS" },

      ],
      currentTask: "",
    };
  }

  handleTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, task: this.state.currentTask }]
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      currentTask: e.target.value
    })

  }


  handleDelete = (id) => {
    let narr = this.state.tasks.filter(taskObj => taskObj.id !== id)
    this.setState({
      tasks: [...narr]
    })
  }

  render() {
    return (
      // <div>Todo</div>
      <div>
        <input type="text" placeholder='Enter Your Task' onChange={this.handleChange} />
        <button onClick={this.handleTask}> Add</button>
        {
          this.state.tasks.map((taskObj , idx) => {
            return (
              <li className='list' key={taskObj.id}>
                <p>{`${idx+1}. ${taskObj.task}`}</p>
                <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
              </li>
            )
          })

        }
      </div>

    )
  }
}
