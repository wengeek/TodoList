import React from 'react';
import {RouteHandler, Link } from 'react-router';
import AddItem from '../components/additem.jsx';
import Storage from '../lib/localstorage';

class AppRoute extends React.Component {
  constructor() {
    super();
    this.state = {showAddPop: false, items: []};
    this.storage = Storage();
  }

  componentDidMount() {
    var items = this.storage.get('tasks') || [];
    this.setState({items: items});
  }

  handClick() {
    this.setState({showAddPop: true});
  }

  hidePop() {
    this.setState({showAddPop: false});
  }

  addTask(name, desc) {
    var current = new Date(),
      taskId = this.state.items[0] ? this.state.items[0].id + 1 : 1,
      created = (current.getMonth() + 1) + '月' + current.getDate() + '日 ' + current.getHours() + ':' + (current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes()),
      item = {
        id: taskId,
        name: name,
        desc: desc,
        created: created,
        state: 0,
        finished: 0,
        thought: ''
      };
    this.state.items.unshift(item);
    this.setState({items: this.state.items});
    this.storage.set('tasks', this.state.items);
  }

  finishTask(id, thought) {
    var current = new Date(),
      finished = (current.getMonth() + 1) + '月' + current.getDate() + '日 ' + current.getHours() + ':' + (current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes()),
      task = null;
    
    this.state.items.forEach(function(val) {
      if (val.id === id) {
        task = val;
      }
    });
    
    if (!task) {
      return;
    }

    task.state = 1;
    task.finished = finished;
    task.thought = thought;

    this.state.items.forEach(function(val, index) {
      if (val.id === id) {
        this.state.items[index] = task;
      }
    }.bind(this));

    this.setState({items: this.state.items});
    this.storage.set('tasks', this.state.items);    
  }

  render() {
    return (
      <div>
        <header className="header">
          <h2>Todo</h2>
          <div className="fa fa-plus" onClick={this.handClick.bind(this)}></div>
        </header>
        <RouteHandler tasks={this.state.items} finishTask={this.finishTask.bind(this)}/>
        <AddItem needShow={this.state.showAddPop} hidePop={this.hidePop.bind(this)} addTask={this.addTask.bind(this)}></AddItem>
        <nav className="menu">
          <ul>
            <li><Link to="all" className="fa fa-tasks"></Link></li>          
            <li><Link to="completed" className="fa fa-check-circle"></Link></li>
            <li><Link to="uncompleted" className="fa fa-clock-o"></Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AppRoute;