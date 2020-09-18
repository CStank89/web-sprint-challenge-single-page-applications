import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Home.css'
 
const Home = () => {
    return (
        <div>
            <Link to='/Form'>
                <div id='button'>
            <img src='/Assets/Pizza.jpg'></img>
            <button>Order Pizza </button>
            </div>
            </Link>
            <div id='cards'>
            <card id="card">
                <h3>McDonalds</h3>
                <p>American Fast Food</p>
                <button></button>
            </card>
            <card id="card">
                <h3>Sweet Green</h3>
                <p>Healthy Alternative</p>
                <button></button>
            </card>
            <card id="card">
                <h3>Starbucks</h3>
                <p>Over Priced Coffee</p>
                <button></button>
            </card>
            </div>
            <div id='cards2'>
            <card id="card">
                <h3>Arbys</h3>
                <p>American Fast Food</p>
                <button></button>
            </card>
            <card id="card">
                <h3>Dunkin Doughnuts</h3>
                <p>Also Over Priced Coffee</p>
                <button></button>
            </card>
            <card id="card">
                <h3>Subway</h3>
                <p>American Fast Food</p>
                <button></button>
            </card>
            </div>
        </div>
    )
}

export default Home
