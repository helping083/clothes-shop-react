import React from 'react'

import Spinner from '../../spinner/'

const WithSpiner = WrappedComponent => ({isLoading, ...props}) => {
    return isLoading ? (
      <Spinner/>
    ): (
      <WrappedComponent {...props}/>
    )
}

export default WithSpiner;