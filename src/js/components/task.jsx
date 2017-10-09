import React, { Component, PureComponent } from 'react';
import Subtask from "./subtask";
import PropTypes from 'prop-types';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSubtaskName: '',
            newSubtaskStatus: 'NEW',
        };

        this.onClickAddSubtask = this.onClickAddSubtask.bind(this);
        this.onChangeNewSubtaskStatus = this.onChangeNewSubtaskStatus.bind(this);
        this.onChangeNewSubtaskName = this.onChangeNewSubtaskName.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.name !== nextProps.name) {
    //         return true;
    //     } else if (this.props.author !== nextProps.author) {
    //         return true;
    //     } else if (this.props.deadline !== nextProps.deadline) {
    //         return true;
    //     } else if (this.props.subtasks !== nextProps.subtasks) {
    //         return true;
    //     } else if (this.state.newSubtaskName !== nextState.newSubtaskName) {
    //         return true;
    //     }
    //
    //     return false;
    // }

    onChangeNewSubtaskName(ev) {
        this.setState({
            newSubtaskName: ev.target.value,
        });
    }

    onChangeNewSubtaskStatus(ev) {
        this.setState({
            newSubtaskStatus: ev.target.value,
        });
    }

    onClickAddSubtask() {
        if (this.state.newSubtaskName) {
            let subtask = {name: this.state.newSubtaskName, status: this.state.newSubtaskStatus};
            this.props.addSubtaskToTask(this.props.index, subtask);
        }
    }

    render() {
        let index = 0;

        let subtasksHtml = this.props.subtasks.map(subtask => <Subtask
            key={index}
            name={subtask.name}
            status={subtask.status}
            index={index++}
        />);

        return <div className="card border-primary" style={{marginBottom: 20}}>
            <div className="card-body">
                <h4 className="card-title">
                    {this.props.index + 1}. {this.props.name}
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">
                    {this.props.author}
                </h6>
                <div className="card-text">
                    {subtasksHtml}
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <input onChange={this.onChangeNewSubtaskName} value={this.state.newSubtaskName} type="text" className="form-control input-sm" />
                        </div>
                        <div className="col-md-6">
                            <select value={this.state.newSubtaskStatus} onChange={this.onChangeNewSubtaskStatus} className="form-control">
                                <option>NEW</option>
                                <option>IN_PROGRESS</option>
                                <option>DONE</option>
                            </select>
                        </div>
                    </div>
                    <button style={{marginTop: 10}} onClick={this.onClickAddSubtask} className="btn btn-primary btn-sm">Pridať novú úlohu</button>
                </div>
            </div>
        </div>;
    }
}

Task.propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    deadline: PropTypes.string,
    subtasks: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    addSubtaskToTask: PropTypes.func,
    index: PropTypes.number,
};

Task.defaultProps = {
    name: '',
    status: "WAITING",
    subtasks: [],
    addSubtaskToTask: () => {}
};

export default Task;
