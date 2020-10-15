import React from 'react';
import MenuItem from '../MenuItem/';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../store/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
import './directory.styles.scss';

const Directory = ({sections})=> {
    return (
      <div className="directory-menu">
        {sections.map(({id, ...props}) => (
          <MenuItem 
            key={id} 
            {...props}
          />
        ))}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);