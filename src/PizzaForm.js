import {React, useState, useEffect} from 'react'
import * as yup from "yup";
import formSchema from './formSchema'
import axios from 'axios';

export default function OrderPizza (props) {
    
    const [form, setForm] = useState({
        select: '',
        size: '', 
        sauce: '', 
        toppings: false, 
        instructions: '',
        name: ''
    })

    const initialErrorValues = {
        select: '',
        size: '', 
        sauce: '', 
        toppings: '',
        instructions: '',
        name: ''
      }


    
    const [formValues, setFormValues] = useState(form)
    const [formErrors, setFormErrors] = useState(initialErrorValues)
    const [initialForm, setinitialForm] = useState([])



    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    

    // Onchange event
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        validate(name, valueToUse);
        setForm({...form, [name]: valueToUse})
      }

      const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
        }

    // onSubmit event
    const Submit = e => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, form)
        .then(res => {
            setinitialForm([res.data, ...initialForm])
            // console.log(res.data)
        })
        .catch(err => console.log(err))
      };


    
    return( 
    <div className='form-container'>
        <form id='pizza-form' onSubmit={Submit}>
            <div>
                <input type='text' name='name' id='name-input' minLength="2" placeholder='Enter a Name' onChange={onChange}></input>
                <p>{formErrors.name}</p>
            </div>
            <div>
                <h2> Choice of Size </h2>
                <p>Required</p>
            </div>
            <div>
                <label>
                    <select onChange={onChange} value={form.select} name='select' id='size-dropdown'>
                        <option value="">Select</option>
                        <option value="1">12"</option>
                        <option value="2">14"</option>
                    </select>
                </label>
            </div>
            <div>
                <h2> Choice of Sauce </h2>
                <p>Required</p>
            </div>
            <div className='select-sauce'>
                    <label> Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='Original Red'
                            checked={form.sauce === 'Original Red'}
                            onChange={onChange}
                        />
                    </label>
                    <label> Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='Garlic Ranch'
                            checked={form.sauce === 'Garlic Ranch'}
                            onChange={onChange}
                        />
                    </label>
                    <label> BBQ Sauce
                        <input
                            type='radio'
                            name='sauce'
                            value='BBQ Sauce'
                            checked={form.sauce ==='BBQ Sauce'}
                            onChange={onChange}
                        />
                    </label>
                    <label> Spinach Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='Spinach Alfredo'
                            checked={form.sauce === 'Spinach Alfredo'}
                            onChange={onChange}
                        />
                    </label>
                </div>
            <div>
                <h2> Add Toppings </h2>
                <p>Required</p>
            </div>
            <div className='select-toppings'>
                    <label> Pepperoni
                        <input
                            type='checkbox'
                            name='Pepperoni'
                            checked={form.Pepperoni}
                            onChange={onChange}
                            value={form.toppings}
                        />
                    </label>
                    <label> Sausage
                        <input
                            type='checkbox'
                            name='Sausage'
                            checked={form.Sausage}
                            onChange={onChange}
                            value={form.toppings}
                        />
                    </label>
                    <label> Canadian Bacon
                        <input
                            type='checkbox'
                            name='Canadian_Bacon'
                            checked={form.Canadian_Bacon}
                            onChange={onChange}
                            value={form.toppings}
                        />
                    </label>
                    <label> Spicy Italian Sausage
                        <input
                            type='checkbox'
                            name='Spicy_Italian_Sausage'
                            checked={form.Spicy_Italian_Sausage}
                            onChange={onChange}
                            value={form.toppings}
                        />
                    </label>
            </div>
            <div id='special-text'>
                <h2> Special Instructions </h2>
            </div>
            <div>
                <label id='special-text'>
                <input
                    type='text'
                    placeholder='More Information'
                    maxLength="150"
                    name='instructions'
                    value='Here are the special instructions'
                    onChange={onChange}
                />
            </label>
            </div>
            
            <input type='submit' id='order-button'/>
        </form>
    </div>)
}