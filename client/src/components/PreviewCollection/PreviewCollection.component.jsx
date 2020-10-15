import React, {memo} from 'react';
import CollectionItem from '../CollectionItem/';
import './collection-preview.styles.scss';

const PreviewCollection = memo(({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="titke">{title.toUpperCase()}</h1>
      <div className="preview">
        {
        items.filter((_,index)=> index<4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
})

export default PreviewCollection;