import React, { Component } from "react";
import "./Todo.css"
class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todo
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleDelete() {
        this.props.delete(this.props.id);
    }
    handleEdit() {
        this.setState({ isEditing: true });
    }
    handleClick() {
        this.props.done(this.props.id);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.todo);
        this.setState({ isEditing: false });
        
    }
    render() { 
        let renderScreen;
        if (this.state.isEditing) {
            renderScreen = (
                <div className="Todo">
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input
                            type='text'
                            name='todo'
                            value={this.state.todo}
                            onChange={this.handleChange}
                        ></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            renderScreen = (
                <div className="Todo">
                    <li
                        onClick={this.handleClick}
                        className={this.props.isDone ? 'Todo-task completed' : 'Todo-task'}
                        style={{ cursor: 'pointer' }}
                    >{this.props.todo}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit}><span className="material-symbols-outlined">edit</span></button>
                        <button onClick={this.handleDelete}><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            )
        }
        return renderScreen;
    }
}
export default Todo;