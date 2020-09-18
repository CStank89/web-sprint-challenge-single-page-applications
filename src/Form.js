import React from 'react'

// import {Link} from 'react-router-dom'


const Form = (props) => {
    const { formValues, change, } = props

  
    return (
        <div>
            
            <h1>Build Your Pizza</h1>
            <form>
            
            
                <select>
                    <option value={formValues.size}>Small</option>
                    <option value={formValues.size}>Medium</option>
                    <option value={formValues.size}>Large</option>
                </select>
                <label>
                    <button>Submit</button>
                </label>
             
            
              
            <label htmlFor='sauce'><b>Choice of Sauce</b> </label> <br/>
            <label>Marinara Sause</label>
            <input 
            type='radio' 
            name='sauce' 
            onChange={change} > 
            </input> <br/>
            <label>Garlic Ranch</label>
            <input 
            type='radio' 
            name='sauce' 
            onChange={change}>
            </input> <br/>
            <label>BBQ Sauce</label>
            <input 
            type='radio' 
            name='sauce' 
            onChange={change}>
            </input> <br/>
            <label>Spinage Alfredo</label>
            <input 
            type='radio' 
            name='sauce' 
            onChange={change}>
                </input> <br/>
           
            
           
            <label htmlFor='sauce'><b>Choice of Toppings</b> </label> <br/>
            <label>Pepperoni</label>
            <input 
            type='checkBox' 
            name='sauce' 
            onChange={change}
            value={formValues.toppings}/> <br/>
            <label>Cheese</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings}
            onChange={change} /> <br/>
            <label>Olives</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Green Peppers</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Onions</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Ham</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Pineapple</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings}
            onChange={change}/> <br/>
            <label>Bacon</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Roasted Garlic</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Chicken</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            <label>Sausage</label>
            <input 
            type='checkBox' 
            name='sauce' 
            value={formValues.toppings} 
            onChange={change}/> <br/>
            

           
            <label> <b>Special Instructions</b> </label> <br/>
            <input 
            type='text' 
            placeholder='Anything else you would like to add'/> <br/>
            <button>ADD TO ORDER</button>
           
    
           

     </form>
        
        </div>
    )
}

export default Form
