import React, { useState } from "react";
import Home from './Home'
import Form from './Form'
import { Router, Switch, Route } from 'react-router-dom'

// const defaultValues = {
  
// }



const App = () => {
  // const [formValues, setFormValues] = useState()
  // const [savedFormInfo, setSavedFormInfo] = useState([])
  return (
    <div className='app'> 
  <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Form' component={Form} />
       
  </Switch>
    </div>
  );
};
export default App;
