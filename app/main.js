import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute} from 'react-router';
import AppRoute from './approute.jsx';
import All from './all.jsx';
import Completed from './completed.jsx';
import UnCompleted from './uncompleted.jsx';

var routes = (
    <Route handler={AppRoute}>
      <DefaultRoute handler={All}/>
      <Route name="all" handler={All}/>
      <Route name="completed" handler={Completed}/>
      <Route name="uncompleted" handler={UnCompleted}/>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
