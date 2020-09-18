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
