import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'
class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todo:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const todo = {...this.state, id: uuidv4(), isDone: false}
        this.props.create(todo);
        this.setState({ todo: '' });
    }

    render() { 
        return (
            <form className="TodoForm">
                <div>
                    <label htmlFor="todo">New Todo: </label>
                    <input
                        type="text"
                        id="todo"
                        name="todo"
                        placeholder="New Todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    ></input>
                    <button onClick={this.handleSubmit}>Add Todo</button>
                </div>
            </form>
        )
    }
}
export default TodoForm;