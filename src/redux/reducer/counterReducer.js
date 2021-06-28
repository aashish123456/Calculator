// Initial State
const initialState = {
    counter: 0,
  };
  // Redux: Counter Reducer
  const counterReducer = (state = initialState, action) => {
      //console.log(action,"refducer m hai")
      const addreducer = (accumulator, currentValue) => accumulator + currentValue;
      const mutilpyreducer = (accumulator, currentValue) => accumulator * currentValue;
      const substractreducer = (accumulator, currentValue) => accumulator - currentValue;
      const dividereducer = (accumulator, currentValue) => accumulator / currentValue;
      
    switch (action.type) {
      case 'Addition': {
        return {
          ...state,
          counter: action.initialNumber.reduce(addreducer)
        };
      }
      case 'Substraction': {
        return {
          ...state,
          counter: action.initialNumber.reduce(substractreducer),
        };
      }
      case 'Multiply': {
        return {
          ...state,
          counter: action.initialNumber.reduce(mutilpyreducer)
        };
      }
      case 'Divide': {
        return {
          ...state,
          counter: action.initialNumber.reduce(dividereducer)
        };
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default counterReducer;