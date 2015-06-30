import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute} from 'react-router';
import AppRoute from './router/approute.jsx';
import All from './handlers/all.jsx';
import Completed from './handlers/completed.jsx';
import UnCompleted from './handlers/uncompleted.jsx';
import Task from './handlers/task.jsx';
import FontAwesome from './css/font-awesome.min.css';
import Normalize from './css/normalize.css';
import Index from './css/index.css';

var routes = (
    <Route handler={AppRoute}>
      <DefaultRoute name="all" handler={All}/>
      <Route name="completed" handler={Completed}/>
      <Route name="uncompleted" handler={UnCompleted}/>
      <Route name="task/:id" handler={Task}/>
    </Route>
);

/**
 * 应用入口
 */
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
