import React, {memo} from 'react';
import CollectionItem from '../CollectionItem/';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './preview-collection.style';

const PreviewCollection = memo(({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {
        items.filter((_,index)=> index<4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
})

export default PreviewCollection;