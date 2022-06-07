import { Addition, Decrement, Divide, Increment, Multiply, Reset, Set_input, Subtract } from "./action.types"

let initialState={
    count:0,
    input:1,
}

export const reducer = ( state = initialState,action )=>{
    console.log(state,action)
    switch(action.type){
        case Increment:{ state.count++; return {...state}}
        case Decrement: {state.count-- ; return {...state}}
        case Set_input:{state.input = action.payload; return {...state}}
        case Addition : {state.count += action.payload; return {...state}}
        case  Subtract : {state.count -= action.payload; return {...state}}
        case  Multiply : {state.count *= action.payload; return {...state}}
        case  Divide : {state.count /= action.payload; return {...state}}
        case  Reset : {state.count=0; return {...state}}
        default : return {...state}
        
    }
}