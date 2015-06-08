var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./components/master.jsx');
var Conference = require('./components/pages/conference.jsx');
var Chat = require('./components/pages/chat.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="conference" handler={Conference} />
    <Route name="chat" handler={Chat} />

    <DefaultRoute handler={Conference}/>
  </Route>
);

module.exports = AppRoutes;
