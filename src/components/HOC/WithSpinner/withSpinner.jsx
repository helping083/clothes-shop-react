import React from 'react'

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const WithSpiner = WrappedComponent => {
  const Spinner = ({isLoading, ...props}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ): (
      <WrappedComponent {...props}/>
    )
  }
  return Spinner;
}

export default WithSpiner;