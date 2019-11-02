import React from 'react';
import './sign-up.component.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password:'',
      confirmPassword: ''
    }
  }

  handleSubmit = async ($event) => {
    $event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
    }
    catch(error) {
      console.error(error.message);
      return;
    }
  }

  handleChange = ($event) => {
    const { value, name } = $event.target 
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="displayName" name="displayName" label="Display name" value={displayName} handleChange={this.handleChange} required />
          <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required />
          <FormInput type="password" name="password" label="Password" value={password} handleChange={this.handleChange} required />
          <FormInput type="password" name="confirmPassword" label="Confirm password" value={confirmPassword} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default SignUp;