import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return(
    <>
    <h1>Salom, bu bosh sahifa</h1>
    <Link to="/contact" >
    <button>Aloqa sahifasiga otish</button>
    </Link>
    <Link to="/about" >
    <button>Biz haqimizda sahifaga otish</button>
    </Link>
    </>
  )
}

export default Home
