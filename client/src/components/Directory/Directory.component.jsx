import React from 'react';
import MenuItem from '../MenuItem/';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../store/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
import {DirectoryContainer} from './directory.styles';

const Directory = ({sections})=> {
    return (
      <DirectoryContainer>
        {sections.map(({id, ...props}) => (
          <MenuItem 
            key={id} 
            {...props}
          />
        ))}
      </DirectoryContainer>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);