import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signup } from '../../actions/FarmbotActions';
import { navigateDashboard } from '../../actions/RouterActions';

const formOptions = {
  form: 'signup',
  fields: ['username', 'email', 'password', 'passwordConfirmation'],
  onSubmit: ({ email, username, password, passwordConfirmation }, dispatch) => {
    return dispatch(signup(email, username, password, passwordConfirmation))
      .then(dispatch(navigateDashboard()));
  },
};

@reduxForm(formOptions)
export default class Signup extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  render() {
    const {
      fields: {email, username, password, passwordConfirmation},
      handleSubmit,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <div>
            <input type="text" placeholder="Email" {...email}/>
          </div>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>
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
          <label>Confirm Password</label>
          <div>
            <input type="password" placeholder="Confirm Password" {...passwordConfirmation}/>
          </div>
          {passwordConfirmation.touched && passwordConfirmation.error &&
            <div>{passwordConfirmation.error}</div>}
        </div>
        <div>
          <button onClick={handleSubmit}>
            {!submitting && <i/> /* key icon */}
            {submitting && <i/> /* spinning cog icon */} Signup
          </button>
        </div>
      </form>
    );
  }
}
