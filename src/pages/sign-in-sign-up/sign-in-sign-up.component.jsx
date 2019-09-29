import './sign-in-sign-up.component.scss';
import React from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

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
          <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required />
          <FormInput type="pasword" name="password" label="Password" value={password} handleChange={this.handleChange} />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignInSignUpPage;
