import React from 'react';
import './menu-item.component.scss';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({
  title, imageUrl, size, linkUrl, match,
}) => (
    <NavLink to={`${match.url}${linkUrl}`} className={`menu-item ${size !== undefined ? size : ''}`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span title="subtitle">
          SHOP NOW
        </span>
      </div>
    </NavLink>
  );

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
};
MenuItem.defaultProps = {
  size: '',
};

export default withRouter(MenuItem);
