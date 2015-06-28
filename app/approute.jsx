import React from 'react';
import { Router, Route, DefaultRoute, RouteHandler, Link } from 'react-router';
import AddItem from './additem.jsx';

class AppRoute extends React.Component {
  constructor() {
    super();
    this.state = {showAddPop: false};
  }

  handClick() {
    this.setState({showAddPop: true});
  }

  render() {
    return (
      <div>
        <header className="header">
          <h2>ToDo</h2>
          <div className="fa fa-plus" onClick={this.handClick.bind(this)}></div>
        </header>
        <RouteHandler/>
        <AddItem needShow={this.state.showAddPop}></AddItem>
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