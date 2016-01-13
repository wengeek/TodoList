import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import AppRoute from './router/approute.jsx';
import Tasks from './handlers/tasks.jsx';
import Task from './handlers/task.jsx';
import FontAwesome from './css/font-awesome.min.css';
import Normalize from './css/normalize.css';
import Index from './css/index.css';

const history = createHashHistory({queryKey: false});
/**
 * render UIs
 */
ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={AppRoute}>
      <IndexRoute component={Tasks}/>
      <Route path="/tasks(/:type)" component={Tasks} />
      <Route path="/task/:id" component={Task} />
    </Route>
  </Router>,
  document.getElementById('app')
);
