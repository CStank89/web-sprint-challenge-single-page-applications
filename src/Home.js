import React from 'react'
import { Route, Link } from 'react-router-dom'
 
const Home = () => {
    return (
        <div>
            <Link to='/Form'>
            <img src='/Assets/Pizza.jpg'></img>
            <button>Order Pizza </button>
            </Link>
        </div>
    )
}

export default Home
