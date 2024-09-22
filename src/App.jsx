import { useState } from 'react'
import NavMenu from './components/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Comments from './components/Comments'
import Counter from './components/Counter'
import { MenuContext } from './context'
import Header from './components/Header'
import Chat1 from './components/Chat1'
import Chat2 from './components/Chat2'
import Profile from './components/Profile'

function App() {
  const savedValue = JSON.parse(localStorage.getItem("isMenuOpen"));
  const [isMenuOpen, setIsMenuOpen] = useState(savedValue ? savedValue : false);

  const openNavMenu = (event) => {
    setIsMenuOpen(true);
    localStorage.setItem("isMenuOpen", true)
    event.stopPropagation();
  }
  const closeNavMenu = () => {
    setIsMenuOpen(false);
    console.log("close");
    
    localStorage.setItem("isMenuOpen", false)

  }

  return (
    <>
      <MenuContext.Provider value={{ isMenuOpen, openNavMenu, closeNavMenu }}>
        <NavMenu />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/chat1' element={<Chat1 />} />
            <Route path='/chat2' element={<Chat2 />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
      </MenuContext.Provider>

    </>
  )
}

export default App
