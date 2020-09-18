import React, { useState } from 'react'
import Pizza from './Pizza'
import {Link} from 'react-router-dom'


const Form = (props) => {
    const { formValues, change } = props



    return (
        <div>
            
            <h1>Build Your Pizza</h1>
            <form>
                <select>
                    <option value={formValues}>Small</option>
                    <option value={formValues}>Medium</option>
                    <option value={formValues}>Large</option>
                </select>
                <label>
                    <button>Submit</button>
                </label>
            <form>
            <label htmlFor='sauce'><b>Choice of Sauce</b> </label> <br/>
            <label>Marinara Sause</label>
            <input type='radio' name='sauce' /> <br/>
            <label>Garlic Ranch</label>
            <input type='radio' name='sauce' /> <br/>
            <label>BBQ Sauce</label>
            <input type='radio' name='sauce' /> <br/>
            <label>Spinage Alfredo</label>
            <input type='radio' name='sauce' /> <br/>
            </form>
            <form>
            <label htmlFor='sauce'><b>Choice of Toppings</b> </label> <br/>
            <label>Pepperoni</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Cheese</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Olives</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Green Peppers</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Onions</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Ham</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Pineapple</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Bacon</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Roasted Garlic</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Chicken</label>
            <input type='checkBox' name='sauce' /> <br/>
            <label>Sausage</label>
            <input type='checkBox' name='sauce' /> <br/>
            </form>
            <form>
                <label> <b>Special Instructions</b> </label> <br/>
                <input 
                type='text' 
                placeholder='Anything else you would like to add'/>
                
            </form>
            </form>
        
        </div>
    )
}

export default Form
