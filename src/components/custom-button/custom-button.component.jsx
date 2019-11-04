import React from 'react';
import './custom-button.component.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}`}  {...otherProps}>
        {children}
    </button>
);

export default CustomButton;