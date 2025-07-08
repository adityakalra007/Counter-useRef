import React from 'react'
import { useReducer } from 'react'

const initialState = {count:0};

function reducer(state,action){
  switch(action.type){
    case "increment":
      return { count: state.count + 1};

    case "decrement":
      return {count : state.count -1};
    
    case "reset":
      return { count :0};
    default:
      return state;
  }
}


const App = () => {


  const[state,dispatch] = useReducer(reducer,initialState);

  return (

    <div>
      <div className="text-center space-y-4 h-screen w-screen flex-col flex justify-center items-center">
      <h1 className="text-4xl p-5  ">Count: {state.count}</h1>
      <div className='text-center p-0 flex justify-center items-center gap-5'>
      <button className="px-4 py-5 text-center cursor-pointer text-xl  bg-green-500 transition hover:bg-green-800 text-white rounded-xl shadow-xl" onClick={() => dispatch({ type: "increment" })}>+</button>
      <button className="px-4 py-5 text-center cursor-pointer text-xl bg-green-500 transition hover:bg-green-800 text-white rounded-xl shadow-xl" onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button className="px-4 py-5 text-center cursor-pointer text-xl bg-green-500 transition hover:bg-green-800 text-white rounded-xl shadow-xl" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      
    </div>
    </div>
  )
}

export default App
