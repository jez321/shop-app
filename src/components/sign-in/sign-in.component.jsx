import React from 'react';
import './sign-in.component.scss';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password:''
    };
  }

  handleSubmit = async ($event) => {
    $event.preventDefault();
    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' });
    }
    catch(error) {
      console.error(error);
    }
  }

  handleChange = ($event) => {
    const { value, name } = $event.target 
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required />
          <FormInput type="password" name="password" label="Password" value={password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;