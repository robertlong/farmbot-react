import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { login } from '../../actions/FarmbotActions';
import { navigateNextPathOrDashboard } from '../../actions/RouterActions';

const formOptions = {
  form: 'login',
  fields: ['username', 'password'],
  onSubmit: ({ username, password }, dispatch) => {
    console.log('onSubmit');
    return dispatch(login(username, password))
      .then(() => {
        console.log('navigateNextPathOrDashboard');
        dispatch(navigateNextPathOrDashboard())
      });
  },
};

@reduxForm(formOptions)
export default class Login extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  render() {
    const {
      fields: {username, password},
      handleSubmit,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" {...username}/>
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="password" placeholder="Password" {...password}/>
          </div>
          {password.touched && password.error && <div>{password.error}</div>}
        </div>
        <div>
          <button onClick={handleSubmit}>
            {!submitting && <i/> /* key icon */}
            {submitting && <i/> /* spinning cog icon */} Log In
          </button>
        </div>
      </form>
    );
  }
}
