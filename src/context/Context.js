import React, { createContext, useReducer } from 'react'
import { Reducer } from './Reducer'


export const Context = createContext()

function SimpleContext({children}) {

    const initialvale = {
        count : 1
    }

    const [ state , dispatch ] = useReducer( Reducer , initialvale )


  return (
    <>
    
    <Context.Provider value={{state , dispatch}}>
        {children}
    </Context.Provider>
    
    </>
  )
}

export default SimpleContext