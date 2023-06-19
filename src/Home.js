import {React, useState} from 'react'
import OrderPizza from "./PizzaForm"
import { BrowserRouter, Routes, Route, Link, useNavigate  } from 'react-router-dom'
import data from "./data"


export default function Home() {
    const [Data, SetData] = useState(data)
    const navigate = useNavigate()

    const OnButtonClick = (e) => {
        e.preventDefault()
        navigate(`/pizza`)
    }


    return(
    <div className="home-container" >
        <img src="https://thumbs.dreamstime.com/b/laptop-notebook-computer-pizza-icon-sign-vector-illustration-113029243.jpg"/>
        <div className="Pizzaz">
                {data.map(data => (
                <div key={data.id}>
                    <img src={data.imgsrc}></img>
                    <h3>{data.Name}</h3>
                    <button id='order-pizza' onClick={OnButtonClick}>Place Your Order</button>
                    <p className='price'>{data.price}</p>
                </div>
                ))}        
        </div>
    </div>
    
    
    )
}