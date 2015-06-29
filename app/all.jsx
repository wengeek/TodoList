import React from 'react/addons';

var { CSSTransitionGroup } = React.addons;

class All extends React.Component {
  render() {

    var tasks = this.props.tasks.map(function(task) {
      var link = '#/task/' + task.id;
      if (task.state === 0) {
        return (
          <li>
            <p className="task-name">{task.name}<span>{task.created}</span></p>
            <p><i className="fa fa-clock-o unfinished"></i></p>
            <a href={link}></a>
          </li>
        );
      } else {
        return (
          <li>
            <p className="task-name">{task.name}<span>{task.created}</span></p>
            <p><i className="fa fa-check-square-o finished"></i></p>
            <a href={link}></a>
          </li>
        );        
      }

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

export default All;