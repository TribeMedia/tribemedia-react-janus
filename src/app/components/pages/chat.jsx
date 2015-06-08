var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');

var FullWidthSection = require('../full-width-section.jsx');
var ThemeManager = new mui.Styles.ThemeManager().getCurrentTheme();

var {StylePropable, StyleResizable} = mui.Mixins;
var {Colors, Spacing, Typography} = mui.Styles;

var Chat = React.createClass({

  mixins: [StylePropable, StyleResizable],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    var style = {
      paddingTop: Spacing.desktopKeylineIncrement
    };

    return (
      <div style={style}>
        CHAT
      </div>
    );
  }


});

module.exports = Chat;
