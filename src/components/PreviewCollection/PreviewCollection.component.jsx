import React, {memo} from 'react';
import CollectionItem from '../CollectionItem/';
import './collection-preview.styles.scss';

const PreviewCollection = memo(({title, items}) => {
  console.log('render preview collection')
  return (
    <div className="collection-preview">
      <h1 className="titke">{title.toUpperCase()}</h1>
      <div className="preview">
        {
        items.filter((_,index)=> index<4)
        .map(({id, ...props}) => (
          <CollectionItem key={id} {...props}/>
        ))}
      </div>
    </div>
  )
})

export default PreviewCollection;