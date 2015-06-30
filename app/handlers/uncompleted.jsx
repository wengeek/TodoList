import React from 'react/addons';
import {Link} from 'react-router';

var { CSSTransitionGroup } = React.addons;

/**
 * 未完成任务处理句柄
 */
class UnCompleted extends React.Component {
  render() {
    var taskList = this.props.tasks.filter(function(task) {
      return task.state === 0;
    });

    var tasks = taskList.map(function(task) {
      var link = '#/task/' + task.id;

      return (
        <li>
          <p className="task-name">{task.name}<span>{task.created}</span></p>
          <p><i className="fa fa-clock-o unfinished"></i></p>
          <Link to={`/task/${task.id}`}></Link>
        </li>
      );
    });

    if (tasks.length === 0) { //empty
      tasks = (<h2>You have no uncompleted tasks. You can <i className="fa fa-plus"></i> the task first!</h2>);
    }

    return (
      <div className="wrap tasks">
        <CSSTransitionGroup component="ul" transitionName="task">
        {tasks}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default UnCompleted;