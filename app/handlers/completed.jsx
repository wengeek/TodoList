import React from 'react/addons';
import {Link} from 'react-router';

var { CSSTransitionGroup } = React.addons;

/**
 * 完成任务处理句柄
 */
class Completed extends React.Component {

  render() {
    var taskList = this.props.tasks.filter(function(task) {
      return task.state === 1;
    });

    var tasks = taskList.map(function(task) {
      return (
        <li>
          <p className="task-name">{task.name}<span>{task.created}</span></p>
          <p><i className="fa fa-check-square-o finished"></i></p>
          <Link to={`/task/${task.id}`}></Link>
        </li>
      );
    });

    if (tasks.length === 0) { //empty
      tasks = (<h2>You have no completed tasks. You can complete the task or <i className="fa fa-plus"></i> the task first!</h2>);
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

export default Completed;