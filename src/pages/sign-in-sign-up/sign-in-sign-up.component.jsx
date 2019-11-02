import './sign-in-sign-up.component.scss';
import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

class SignInSignUpPage extends React.Component {
  render() {
    return (
      <div className="sign-in-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
    );
  }
}
export default SignInSignUpPage;
