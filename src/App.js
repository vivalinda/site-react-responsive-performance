import React, { Suspense } from 'react';
import NavBarVivalinda from './ components/NavBarVivalinda' 
import logPhotos from './instagram'
import AppPrePhoto from './AppPrePhoto'
const AppPhoto = React.lazy( () => import( './AppPhoto' ))
const Footer = React.lazy( () => import( './ components/Footer' ))

const App = () => {

  return(
    <>
      <NavBarVivalinda/>
      <AppPrePhoto promise={logPhotos(2)} />
      <Suspense fallback={<div>...</div>} >
        <AppPhoto promise={logPhotos(12)} />
        </Suspense>
      <Suspense fallback={<div>...</div>} >
        <Footer />
      </Suspense>
    </>
  )
}

export default App;
