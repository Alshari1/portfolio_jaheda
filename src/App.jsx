import './App.css'
import Main from './Components/Main/Main/Main'
import SideNav from './Components/SideNav/SideNav'

function App() {

  return (
    <div className='flex gap-5'>
      <SideNav></SideNav>
      <Main></Main>
    </div>
  )
}

export default App
