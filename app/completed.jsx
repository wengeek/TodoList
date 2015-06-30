import React from 'react/addons';

var { CSSTransitionGroup } = React.addons;

class Completed extends React.Component {


  render() {
    var taskList = this.props.tasks.filter(function(task) {
      return task.state === 1;
    });

    var tasks = taskList.map(function(task) {
      var link = '#/task/' + task.id;

      return (
        <li>
          <p className="task-name">{task.name}<span>{task.created}</span></p>
          <p><i className="fa fa-check-square-o finished"></i></p>
          <a href={link}></a>
        </li>
      );
    });

    return (
      <div className="wrap tasks">
        <CSSTransitionGroup component="ul" transitionName="task">
        {tasks}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Completed;