import './sign-in-sign-up.component.scss';
import React from 'react';

class SignInSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in-sign-up">
        <form onSubmit={this.handleSubmit}>
          <h2>I already have an account</h2>
          <span>Enter your account details</span>
          <label htmlFor="email">
          Email
            <input id="email" name="email" type="email" value={email} onChange={this.handleChange} required />
          </label>
          <label htmlFor="password">
          Password
            <input id="password" name="password" type="password" value={password} onChange={this.handleChange} required />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default SignInSignUpPage;
