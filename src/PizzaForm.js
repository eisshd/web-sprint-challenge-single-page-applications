import {React, useState, useEffect} from 'react'
import * as yup from "yup";
import formSchema from './formSchema'
import axios from 'axios';

export default function OrderPizza (props) {
    
    const {form, setForm} = useState({
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



    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props


    // const {
    //     select: '',
    //     sauce: '',
    //     toppings: false,
    //     instructions: '',
    //     name: ''
    //   } = props.values

    // Onchange event
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        validate(name, valueToUse)
        setForm({...form, [name]: valueToUse})
      }

    // onSubmit event
    const Submit = e => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, formValues)
        .then(res => {
            setFormValues([res.data, ...form])
        })
        .catch(err => console.log(err))
      };

      const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
        }
    
    return( 
    <div className='form-container'>
        <form id='pizza-form' onSubmit={Submit}>
            <div>
                <h2> Choice of Size </h2>
                <p>Required</p>
            </div>
            <div id='size-dropdown'>
                <label>
                <select onChange={onChange} /*value={form.select}*/ name='select'>
                    <option value="">Select</option>
                    <option value="1">'12""'</option>
                    <option value="2">'14""'</option>
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
                            // checked={false}
                            onChange={onChange}
                        />
                    </label>
                    <label> Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='Garlic Ranch'
                            // checked={false}
                            onChange={onChange}
                        />
                    </label>
                    <label> BBQ Sauce
                        <input
                            type='radio'
                            name='sauce'
                            value='BBQ Sauce'
                            // checked={false}
                            onChange={onChange}
                        />
                    </label>
                    <label> Spinach Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='Spinach Alfredo'
                            // checked= {false}
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
                            // checked={form.toppings}
                            onChange={onChange}
                        />
                    </label>
                    <label> Sausage
                        <input
                            type='checkbox'
                            name='Sausage'
                            // checked={form.toppings}
                            onChange={onChange}
                        />
                    </label>
                    <label> Canadian Bacon
                        <input
                            type='checkbox'
                            name='Canadian Bacon'
                            // checked={form.toppings}
                            onChange={onChange}
                        />
                    </label>
                    <label> Spicy Italian Sausage
                        <input
                            type='checkbox'
                            name='Spicy Italian Sausage'
                            // checked={form.toppings}
                            onChange={onChange}
                        />
                    </label>
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
                    name='instructions'
                />
            </label>
            </div>
            <div>
                <input type='text' name='name' id='name-input' minLength="2" placeholder='Enter a Name'></input>
                <p>{formErrors.name}</p>
            </div>
            
            <input type='submit'/>
        </form>
    </div>)
}