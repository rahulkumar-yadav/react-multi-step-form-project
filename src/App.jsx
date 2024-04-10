import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import FirstPage from './components/firstPage'
import SecondPage from './components/secondPage'
import ThirdPage from './components/thirdPage'
import FourthPage from './components/fourthPage'
import FifthPage from './components/fifthPage'
import LastPage from './components/lastPage'

function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='' element={<FirstPage />} />
      <Route path='secondPage' element={<SecondPage />} />
      <Route path='thirdPage' element={<ThirdPage />} />
      <Route path='fourthPage' element={<FourthPage />} />
      <Route path='fifthPage' element={<FifthPage />} />
      <Route path='lastPage' element={<LastPage />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
