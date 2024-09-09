import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main/Main'
import SideNav from './Components/SideNav/SideNav'

function App() {
  const [show, setShow] = useState(false)
  const handleSideNav = () => {
    setShow(!show)
  }

  return (
    <div className='flex gap-2'>
      <div className='lg:w-1/5'>
        <SideNav
          show={show}
          setShow={setShow}
        ></SideNav>
      </div>
      <div style={{ height: '100vh' }} className='lg:w-4/5 overflow-scroll overflow-x-hidden bg-gray-900'>
        <Main handleSideNav={handleSideNav}></Main>
      </div>
    </div>
  )
}

export default App
