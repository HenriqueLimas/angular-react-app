var React = require('react');
var angular = require('angular');

angular.module('app', []);

require('./jedis/jedis.service.js');

var JediView = require('./jedis/jedis.view.jsx');

React.render(<JediView />, document.querySelector('#main'));