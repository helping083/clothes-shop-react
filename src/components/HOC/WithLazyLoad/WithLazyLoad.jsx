import React, { Suspense } from 'react'

const WithLazyLoad = ({WrappedComponent, ...props}) => (
  <>
    <Suspense>
      <WrappedComponent {...props}/>
    </Suspense>
  </>
)

export default WithLazyLoad;