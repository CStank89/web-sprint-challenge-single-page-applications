import React, { useState } from "react";
import Home from './Home'
import Form from './Form'
import { Router, Switch, Route } from 'react-router-dom'

 const defaultValues = {
  name: '',
  size: '',
  toppings: '',
  speicalInstructions: '',
 }



const App = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const [savedFormInfo, setSavedFormInfo] = useState([])

  const change = (evt) => {
    const {name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const submit = (evt) => {
    //Prevents the default behavious of submit which is reloading the page
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
        <Form formValues={formValues} change={change}/> 
        </Route>
  </Switch>
    </div>
  );
};
export default App;
