import React from 'react';
import Greeter from '../components/Greeter';
import UpdateName from '../components/UpdateName';

// router needs `creatClass` for hot reloading
const Login = React.createClass({
  render() {
    return (
      <div>
        Login Page <br/><br/>
        <Greeter />
        <UpdateName />
      </div>
    );
  }
});
export default Login;
