import React from 'react';
import { connect } from 'react-redux';

const Foo = React.createClass({
  render(props=this.props) {
    return (
      <div>
        Foo Component:<br/>
        Hello, {props.name}
      </div>
    );
  }
});

function mapStateToProps(state) {
  //console.log("state in mapStateToProps func:", state)
  return {name: state.app.name };
}
export default connect(mapStateToProps)(Foo);
