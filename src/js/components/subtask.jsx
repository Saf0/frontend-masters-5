import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Subtask extends Component {
    render() {
        let statusClassName = "";

        if (this.props.status === 'NEW') {
            statusClassName = "text-danger";
        } else if (this.props.status === 'DONE') {
            statusClassName = "text-success";
        } else {
            statusClassName = "text-warning";
        }

        return <div className="subtask row">
            <div className="name col-md-6">{this.props.index + 1} {this.props.name}</div>
            <div className={cx("col-md-6", statusClassName)}>{this.props.status}</div>
        </div>;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.name !== nextProps.name) {
    //         return true;
    //     } else if (this.props.status !== nextProps.status) {
    //         return true;
    //     }
    //
    //     return false;
    // }
}

Subtask.propTypes = {
    name: PropTypes.string,
    status: PropTypes.oneOf(['DONE', 'NEW', 'IN_PROGRESS']),
    index: PropTypes.number,
};

Subtask.defaultProps = {
    name: '',
    status: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
};

export default Subtask;
