import React from 'react/addons';

var { CSSTransitionGroup } = React.addons;

class All extends React.Component {

  handleClick(index) {
    console.log(this.props.tasks[index]);
  }

  render() {
    var tasks = this.props.tasks.map(function(task, index) {
      return (
        <li onClick={this.handleClick.bind(this, index)}>
          <p className="task-name">{task.name}<span>{task.created}</span></p>
          <p><i className="fa fa-circle unfinished"></i></p>
        </li>
      );
    }.bind(this));

    return (
      <div className="wrap tasks">
        <CSSTransitionGroup component="ul" transitionName="task">
        {tasks}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default All;