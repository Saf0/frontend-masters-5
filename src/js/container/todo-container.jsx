import React, {Component} from 'react';

import Task from '../components/task';
import {List} from 'immutable';
import loremIpsum from 'lorem-ipsum';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTaskName: ''
        };

        this.onChangeNewTaskName = this.onChangeNewTaskName.bind(this);
        this.addSubtaskToTask = this.addSubtaskToTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    onChangeNewTaskName(ev) {
        this.setState({
            newTaskName: ev.target.value
        });
    }

    addTask(ev) {
        let tasks = this.state.tasks;

        tasks.push({
            name: this.state.newTaskName,
            deadline: '2017-10-10 15:50:00',
            author: 'Safo',
            subtasks: [],
            // subtasks: List(),
        });

        this.setState({tasks: tasks});
    }

    addSubtaskToTask(taskIndex, subtask) {
        let tasks = this.state.tasks;
        let task = tasks[taskIndex];

        task.subtasks.push(subtask);
        // task.subtasks = task.subtasks.push(subtask);

        this.setState({tasks: tasks});
    }

    generateTasks(n = 1) {
        let tasks = this.state.tasks;

        for (let i = 0; i < n; i++) {
            let subtasksCount = Math.floor((Math.random() * 5) + 5);

            let subtasks = [];
            // let subtasks = List();

            for (let j = 0; j < subtasksCount; j++) {
                let rand = Math.floor(Math.random() * 3);
                let status = null;

                if (rand === 0) {
                    status = "NEW";
                } else if (rand === 1) {
                    status = "IN_PROGRESS";
                } else {
                    status = "DONE";
                }

                let subtask = {
                    name: loremIpsum({count: 6, units: 'word'}),
                    status: status
                };

                subtasks.push(subtask);
                // subtasks = subtasks.push(subtask);
            }

            tasks.push({
                name: loremIpsum({count: 3, units: 'word'}),
                deadline: '2017-10-10 15:50:00',
                author: 'Safo',
                subtasks: subtasks,
            });
        }

        this.setState({
            tasks: tasks
        });
    }

    render() {
        let index = 0;

        let tasksHtml = this.state.tasks.map(task => <Task
            key={index}
            name={task.name}
            author={task.author}
            subtasks={task.subtasks}
            deadline={task.deadline}
            addSubtaskToTask={this.addSubtaskToTask}
            index={index++}
        />);

        return <div className="todo-container">
            <div className="container">
                <br />
                <h2>Pridať nový task</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="new-task-name">Názov tasku</label>
                        <input onChange={this.onChangeNewTaskName} value={this.state.newTaskName} type="text" className="form-control" id="new-task-name" />
                    </div>
                    <button type="button" onClick={this.addTask} className="btn btn-primary">Pridať task</button>
                    <div className="float-right">
                        <span style={{verticalAlign: "middle"}}>Vygenerovať: </span>
                        <button onClick={this.generateTasks.bind(this, 1)} style={{margin: "0 0 0 15px"}} type="submit" className="btn btn-outline-secondary">1 task</button>
                        <button onClick={this.generateTasks.bind(this, 10)} style={{margin: "0 0 0 15px"}} type="submit" className="btn btn-outline-secondary">10 taskov</button>
                        <button onClick={this.generateTasks.bind(this, 100)} style={{margin: "0 0 0 15px"}} type="submit" className="btn btn-outline-secondary">100 taskov</button>
                    </div>
                </div>

                <br />
                <h2>Zoznam taskov</h2>
                {tasksHtml}
            </div>
        </div>;
    }
}

export default TodoContainer;
