import React, { Suspense } from 'react';
import NavBarVivalinda from './ components/NavBarVivalinda' 
import logPhotos from './instagram'
const AppPhoto = React.lazy( () => import( './AppPhoto' ))
const Footer = React.lazy( () => import( './ components/Footer' ))

const App = () => {

  return(
    <>
      <NavBarVivalinda/>
      <Suspense fallback={<div>Buscando Fotos...</div>} >
        <AppPhoto promise={logPhotos()} />
        </Suspense>
      <Suspense fallback={<div>Contatos...</div>} >
        <Footer />
      </Suspense>
    </>
  )
}

export default App;
