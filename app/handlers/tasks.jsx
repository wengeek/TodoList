import React from 'react/addons';
import Item from '../components/item.jsx';

const {CSSTransitionGroup} = React.addons;

/**
 *  Show all tasks 
 */
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.types = {'uncompleted': 0, 'completed': 1, 'all': 2};
  }

  render() {
    let type = this.types[this.props.params.type] === undefined ? 2 : this.types[this.props.params.type];

    let taskList = this.props.tasks;

    if (type !== 2) {
      taskList = this.props.tasks.filter(function(task) {
        return task.state === type;
      }.bind(this));
    }

    let tasks = taskList.map(function(task) {
      return (
        <Item task={task}/>
      );
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

export default Tasks;