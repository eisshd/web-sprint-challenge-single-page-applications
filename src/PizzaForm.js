import {React, useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import data from "./data"

export default function OrderPizza (props) {
    const {values, change} = props
    const {form, setForm} = useState({
        toppings: false,
        sauce: '',

    })
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
      }
    
    return( 
    <div className='pizzaForm'>
        <form id='pizzaForm'>
            <div>
                <h2> Choice of Size </h2>
                <p>Required</p>
            </div>
            <div className='Size'>
                <label>
                <select>
                   <option>12""</option>
                   <option>14""</option>
                   <option>16""</option>
                   <option>18""</option>
                </select>
            </label>
            </div>
            <div>
                <h2> Choice of Sauce </h2>
                <p>Required</p>
            </div>
            <div className='select-sauce'>
                {data.map((data, idx) => (
                    <label key={data.id}>{data.Sauce[idx]}
                        <input
                            type='radio'
                            name="sauce"
                            value={data.Sauce[idx]}
                            
                        />
                    </label>
                ))}
            </div>
            <div>
                <h2> Add Toppings </h2>
                <p>Required</p>
            </div>
            <div className='select-toppings'>
                {data.map((ele, idx) => (
                    <label key={idx}>
                        {ele.addToppings[idx]}
                        <input
                            type='checkbox'
                            name='toppings'
                            value={ele.addToppings[idx]}          
                        />
                    </label>
                ))}
            </div>
            <div id='special-text'>
                <h2> Special Instructions </h2>
            </div>
            <div>
                <label>
                <input
                    type='text'
                    placeholder='More information?'
                    maxLength="150"
                />
            </label>
            </div>

            <input type='submit'/>
        </form>
    </div>)
}