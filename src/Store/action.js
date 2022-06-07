import { Addition, Decrement, Divide, Increment, Multiply, Reset, Set_input, Subtract } from "./action.types";

export const set_val=(val)=>({type:Set_input,payload:Number(val)})
export const inc=(val)=>({type:Increment})
export const dec = (val) => ({ type: Decrement});
export const add = (val) => ({ type: Addition, payload: val });
export const sub = (val) => ({ type: Subtract, payload: val });
export const mult = (val) => ({ type: Multiply, payload: val });
export const divide = (val) => ({ type: Divide, payload: val });
export const reset = (val) => ({ type: Reset});
