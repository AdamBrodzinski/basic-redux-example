import React from 'react';
import { connect } from 'react-redux';
import {updateName} from '../actions/app'
import {dispatch} from '../store'

const Greeter = React.createClass({
  handleSubmit(e) {
   e.preventDefault();
   //const value = $(e.target).find('input').val(); syntax if jQuery is avail.
   //const value = this.refs.nameInput.getDOMNode().value;  0.13 syntax
   const value = this.refs.nameInput.value;  // 0.14 syntax
   console.log("Submit Value:", value)

   dispatch(updateName({name: value}))
  },

  render(props=this.props) {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input ref="nameInput" placeholder="type in new name" />
          <button type="submit">Change</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {name: state.app.name};
}
export default connect(mapStateToProps)(Greeter);
