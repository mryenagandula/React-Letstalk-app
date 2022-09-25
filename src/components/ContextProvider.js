import React from 'react';
import { useState } from 'react';
import AppContext from '../AppContext';

export default function ContextProvider({children}) {
  const setThemeMode = (value)=>{
    setState({...state,themeMode:value})
  }
  const initialState ={
    themeMode: 'light',
    setThemeMode : setThemeMode
  }
  const [state, setState] = useState(initialState);
  
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}
