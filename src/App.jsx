import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import PostContext from './contexts/PostContext'

function App() {
  const [count, setCount] = useState(0)
  const url = 'http://localhost:3001/postsList'
  const [postList, setPostList] = useState([])
  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPostList(data);

      })
      .catch(err => console.error(err))
  }
  console.log(postList);

  useEffect(() => {
    fetchData(url)
  }, [])

  return (
    <>
      <PostContext.Provider value={{ postList }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chi-siamo' element={<About />} />
          <Route path='/posts' element={<PostPage />} />
          <Route path='/posts/:slug' element={<ProductPage />} />
        </Routes>
      </PostContext.Provider>
    </>

  )
}

export default App
