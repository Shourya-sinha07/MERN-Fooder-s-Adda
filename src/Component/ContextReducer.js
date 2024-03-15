import React, { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";


//creating two different context 
const CartStateContext = createContext();
const CartDispatchContext = createContext();



//it is the reducer function which will take two parameter a action and state and according to the action the state  was changed
const reducer = (state, action) => {
  switch(action.type){
    case "ADD":
      return [...state, {  //basically here we add new item to the existing state by '...'
        id: action.id,
        name: action.name,
        qty: action.qty,
        size: action.size,
        price: action.price,
        img: action.img
      }];
      case "REMOVE":
        let newarray=[...state]
        newarray.splice(action.index,1)
        return newarray;

        case "UPDATE":
          let arr = state.map((food) => {
            if (food.id === action.id) {
              console.log(food.qty, parseInt(action.qty), action.price + food.price);
              return { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
            }
            return food;
          });
          
          return arr;
         case "DROP":
          let empArray=[] 
          return empArray
    default:
      console.log("Error in Reducer");
      return state; // Return the current state in the default case
  }
};


export const CartProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(reducer,[]);  //here we use useReducer hook which will return state and dispatch which means current state and action and on basis of that action we use reducer function to update the given state. Empty array represent that no action is performed nothing is added in cart.
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useCart=()=>useContext(CartStateContext)
export const useDispatchCart=()=>useContext(CartDispatchContext)