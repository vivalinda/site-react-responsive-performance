import React, { Suspense } from 'react';
import NavBarVivalinda from './ components/NavBarVivalinda' 
import logPhotos from './instagram'
const AppPhoto = React.lazy( () => import( './AppPhoto' ))
const Footer = React.lazy( () => import( './ components/Footer' ))

const App = () => {

  return(
    <>
      <NavBarVivalinda/>
      <Suspense fallback={<div>...</div>} >
         <AppPhoto promise={logPhotos(10)} />
      </Suspense>
      <Suspense fallback={<div>...</div>} >
        <Footer />
      </Suspense>
    </>
  )
}

export default App;
