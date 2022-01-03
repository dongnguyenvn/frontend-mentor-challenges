import {
    findLast,
    isOperator,
    findLastOperator,
    calculate,
    format,
  } from "../libs/calculator";
  import { useReducer, useMemo } from "react";
  
  const initialState = ["0"];


  enum CountActionKind {
    RESET = 'RESET',
    PUSH = 'PUSH',
    REMOVE = 'REMOVE',
    OPERATE = 'OPERATE',
    ENTER = 'ENTER',
  }

  type Action = {
    type: CountActionKind,
    value?: string
  }
  
  function reducer(state:string[], action : Action){
    if (action.type === "RESET") {
      return initialState;
    }
  
    if (action.type === CountActionKind.PUSH) {
      const last = findLast(state);
  
      if (isOperator(last)) {
        return [...state, action.value];
      }
  
      if (action.value === "." && last.includes(action.value)) {
        return state;
      }
  
      if (action.value === ".") {
        return [...state.slice(0, -1), last + action.value];
      }
  
      return [...state.slice(0, -1), last + action.value];
    }
  
    if (action.type === CountActionKind.REMOVE) {
      const last = findLast(state);
  
      if (isOperator(last)) {
        return state.slice(0, -1);
      }
  
      return [...state.slice(0, -1), String(last).slice(0, -1)];
    }
  
    if (action.type === CountActionKind.OPERATE) {
      const last = findLast(state);
  
      if (isOperator(last)) {
        return [...state.slice(0, -1), action.value];
      }
  
      if (findLastOperator(state) === action.value) {
        return [...calculate(state), action.value];
      }
  
      return [...state, action.value];
    }
  
    if (action.type === CountActionKind.ENTER) {
      return calculate(state);
    }
  
    return state;
  }
  
  export function useCalculator() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const actions = useMemo(
        const action : {
            reset : () => () => void,
            push : (value: string) => () => void,
          remove : () => () => void,
          operate : (value: string) => () => void,
          enter :() => () => void
        } = {
            reset: () => () => dispatch({ type: CountActionKind.RESET }),
            push: (value:string) => () => dispatch({ type: PUSH, value }),
            remove: () => () => dispatch({ type: REMOVE }),
            operate: (value:string) => () => dispatch({ type: OPERATE, value }),
            enter: () => () => dispatch({ type: ENTER }),
          }
      () => (action),
      [dispatch]
    );
  
    //  compute
    const operator = findLastOperator(state);
    const last = findLast(state);
    const output = format(isOperator(last) ? state[state.length - 2] : last);
  
    return { operator, output, actions };
  }