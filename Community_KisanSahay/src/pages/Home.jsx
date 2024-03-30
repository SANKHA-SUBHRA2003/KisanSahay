import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
const Home = () => {
  return (
    <div>
       {/* <nav>
        <a href="http://127.0.0.1:5501/proj_FINAL_VER/index.html">Home</a>
        <a href="http://127.0.0.1:5501/proj_FINAL_VER/expenses.html">Expenses Tracker</a>
        <a href="#">Community</a>
        <a href="http://127.0.0.1:5501/proj_FINAL_VER/news.html">News</a>
      </nav> */}
      <h1>Press BACK to return</h1>
    
      <div className='home'>
      <div className='container'>
      <Sidebar/>
        <Chat/>
      </div>
    </div>
  </div>
  )
}

export default Home
