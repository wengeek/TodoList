import React from 'react';
import { Router, Route, DefaultRoute, RouteHandler, Link } from 'react-router';
import AddItem from './additem.jsx';
import Storage from './localstorage';

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
      created = (current.getMonth() + 1) + '月' + current.getDate() + '日 ' + current.getHours() + ':' + current.getMinutes(),
      item = {
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

  render() {
    return (
      <div>
        <header className="header">
          <h2>ToDo</h2>
          <div className="fa fa-plus" onClick={this.handClick.bind(this)}></div>
        </header>
        <RouteHandler tasks={this.state.items}/>
        <AddItem needShow={this.state.showAddPop} hidePop={this.hidePop.bind(this)} addTask={this.addTask.bind(this)}></AddItem>
        <nav className="menu">
          <ul>
            <li><Link to="all" className="fa fa-tasks"></Link></li>          
            <li><Link to="completed" className="fa fa-check-circle"></Link></li>
            <li><Link to="uncompleted" className="fa fa-times-circle"></Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AppRoute;