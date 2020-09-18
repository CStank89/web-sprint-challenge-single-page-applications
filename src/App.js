import React, { useState } from "react";
import Home from './Home'
import Form from './Form'
import { Router, Switch, Route } from 'react-router-dom'
import * as yup from 'yup'
import schema from './Validation/formSchema'

 const defaultValues = {
  name: '',
  size: '',
  pepperoni: false,
  cheese: false,
  greenpeppers: false,
  onions: false,
  ham: false,
  pineapple: false,
  bacon: false,
  roastedgarlic: false,
  chicken: false,
  sausage: false,
  speicalInstructions: '',
 }
 const initialFormErrors = {
  name: ''


}


const App = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const [savedFormInfo, setSavedFormInfo] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const change = (evt) => {
    const {name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
     
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  }
  const inputChange = (name, value) => {
    
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }



  const submit = (evt) => {
    
    evt.preventDefault();
  

const newData = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: formValues.toppings.trim(),
    speicalInstructions: formValues.speicalInstructions.trim(),
    }
    setSavedFormInfo([...savedFormInfo, newData])
    setFormValues(defaultValues)
};

  return (
    <div className='app'> 
  <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Form'>
        <Form formValues={formValues} change={change} submit={submit}/> 
        </Route>
  </Switch>
    </div>
  );
};
export default App;
