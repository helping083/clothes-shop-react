import React from 'react';
import {BreadcrumpsContainer} from './withBreadcrumps.style';

const WithBreadCrumps =  WrappedComponent => (props) => {
  return (
    <>
      {console.log('rops', props)}
      <BreadcrumpsContainer>works</BreadcrumpsContainer>
      <WrappedComponent {...props}/>
    </>
  )
}

export default WithBreadCrumps;