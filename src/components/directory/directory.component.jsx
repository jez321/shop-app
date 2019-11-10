import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, imageUrl, size, title, linkUrl }) => (
      <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} linkUrl={linkUrl} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
