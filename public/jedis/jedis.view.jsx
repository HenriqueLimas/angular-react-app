let React = require('react');
let angular = require('angular');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      jedis: []
    };
  },
  componentDidMount: function() {
    angular.module('app')
      .controller('JediController', (JediService) => {
        JediService
          .getList()
          .then((jedis) => {
            this.setState({
              jedis: jedis
            })
          });
      });
  },
  render: function() {
    let jedisNode = this.state.jedis.map(function(jedi, key) {
      return <li key={key}>{jedi.name}</li>
    });

    return (
      <div data-ng-controller="JediController">
        <h3>Jedis list</h3>
        <ul>
          {jedisNode}
        </ul>
      </div>
    );
  }
});