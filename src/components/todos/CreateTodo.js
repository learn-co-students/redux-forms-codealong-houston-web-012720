import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state)
    this.setState({text: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        <ul>
          {this.props.todos.map(todo => <li>{todo.text}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addToDo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateTodo);
