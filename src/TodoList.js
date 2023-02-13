import React, { Component } from "react";
import Todo from './Todo'
import TodoForm from './TodoForm'
import './TodoList.css'
class TodoList extends Component{
    constructor(props) { 
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.done = this.done.bind(this);
    }
    create(todo) {
        this.setState({ todos: [...this.state.todos, todo ] })
    }
    delete(id) {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
    }
    update(id, updatedTodo) {
        const updatedTodos = this.state.todos.map(t => {
            if (t.id === id) {
                return {...t, todo: updatedTodo}
            } 
            return t;
        })
        this.setState({ todos: updatedTodos });
    }
    done(id) {
        const completedTodos = this.state.todos.map(t => {
            if (t.id === id) { 
                return {...t, isDone: !t.isDone}
            }
            return t;
        })
        this.setState({ todos: completedTodos });
    }
    render() { 
        const todos = this.state.todos.map(t =>
            <Todo
                todo={t.todo}
                id={t.id}
                key={t.id}
                isDone={t.isDone}
                delete={this.delete}
                edit={this.update}
                done={this.done}
                
            />)
        return (
            <div className="TodoList">
                <h1>Todo List!<span>Simple React Todo List</span></h1>
                <ul>{todos}</ul>
                <TodoForm create={this.create} />
            </div>
        )
    }
}
export default TodoList;