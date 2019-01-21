import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from "./todos.json";
import FormTareas from "./components/FormTareas.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleTask=this.handleTask.bind(this); //para enalazar la funcion y no pierda el this su scope.
  }
  handleTask(todo){
    this.setState({
        todos: [...this.state.todos, todo]
    })
}
removeTask(index){
  if(window.confirm("Estas seguro de querer eliminar?")){this.setState({
    todos: this.state.todos.filter((e,i)=>{
      return i!==index;
    })
  })
}
}
  render() {

    const todos = this.state.todos.map((todos, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todos.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todos.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todos.description}</p>
              <p><mark>{todos.responsible}</mark></p>
            </div>
            <div className="card-fooder">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this,i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-black bg-black">
          <div className="text-white">
            tasks
            <span className="badge badge-light ml-2">
              {this.state.todos.length}
            </span>
          </div>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <FormTareas onAddtodo={this.handleTask}></FormTareas>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
