import React from 'react'

// import {Link} from 'react-router-dom'


const Form = (props) => {
    const { formValues, change,  } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
  
    return (
        <div>
            
            <h1>Build Your Pizza</h1>
            <form>
            <input 
            type='text'
            placeholder='name'/> <br/>
            
                <select>
                    <option value={formValues.small}>Small</option>
                    <option value={formValues.medium}>Medium</option>
                    <option value={formValues.large}>Large</option>
                </select>
                <label>
                    <button  id='button' onChange={onChange}>Submit</button><br/>
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
            name='pepperoni' 
            onChange={change}
            value={formValues.pepperoni}/> <br/>
            <label>Cheese</label>
            <input 
            type='checkBox' 
            name='cheese' 
            value={formValues.cheese}
            onChange={change} /> <br/>
            <label>Olives</label>
            <input 
            type='checkBox' 
            name='olives' 
            value={formValues.olives} 
            onChange={change}/> <br/>
            <label>Green Peppers</label>
            <input 
            type='checkBox' 
            name='Green Peppers' 
            value={formValues.greenpeppers} 
            onChange={change}/> <br/>
            <label>Onions</label>
            <input 
            type='checkBox' 
            name='onions' 
            value={formValues.onions} 
            onChange={change}/> <br/>
            <label>Ham</label>
            <input 
            type='checkBox' 
            name='ham' 
            value={formValues.ham} 
            onChange={change}/> <br/>
            <label>Pineapple</label>
            <input 
            type='checkBox' 
            name='pineapple' 
            value={formValues.pineapple}
            onChange={change}/> <br/>
            <label>Bacon</label>
            <input 
            type='checkBox' 
            name='bacon' 
            value={formValues.bacon} 
            onChange={change}/> <br/>
            <label>Roasted Garlic</label>
            <input 
            type='checkBox' 
            name='roastedgarlic' 
            value={formValues.roastedgarlic} 
            onChange={change}/> <br/>
            <label>Chicken</label>
            <input 
            type='checkBox' 
            name='chicken' 
            value={formValues.chicken} 
            onChange={change}/> <br/>
            <label>Sausage</label>
            <input 
            type='checkBox' 
            name='sausage' 
            value={formValues.sausage} 
            onChange={change}/> <br/>
            

           
            <label> <b>Special Instructions</b> </label> <br/>
            <input 
            type='text' 
            placeholder='Anything else you would like to add'/> <br/>
            
           
    
           

     </form>
        
        </div>
    )
}

export default Form
