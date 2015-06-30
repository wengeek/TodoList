import React from 'react/addons';
import {Link} from 'react-router';

var { CSSTransitionGroup } = React.addons;

/**
 * 全部任务列表处理句柄
 */
class All extends React.Component {
  render() {

    var tasks = this.props.tasks.map(function(task) {
      if (task.state === 0) {
        return (
          <li>
            <p className="task-name">{task.name}<span>{task.created}</span></p>
            <p><i className="fa fa-clock-o unfinished"></i></p>
            <Link to={`/task/${task.id}`}></Link>
          </li>
        );
      } else {
        return (
          <li>
            <p className="task-name">{task.name}<span>{task.created}</span></p>
            <p><i className="fa fa-check-square-o finished"></i></p>
            <Link to={`/task/${task.id}`}></Link>
          </li>
        );        
      }

    });

    if (tasks.length === 0) { //empty
      tasks = (<h2>You have no tasks. You can <i className="fa fa-plus"></i> the task first!</h2>);
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

export default All;