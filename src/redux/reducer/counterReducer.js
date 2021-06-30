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
    case 'ADDITION': {
      return {
        ...state,
        counter: action.payload.reduce(addreducer)
      };
    }
    case 'SUBSTRACTION': {
      return {
        ...state,
        counter: action.payload.reduce(substractreducer),
      };
    }
    case 'MULTIPLY': {
      return {
        ...state,
        counter: action.payload.reduce(mutilpyreducer)
      };
    }
    case 'DIVIDE': {
      return {
        ...state,
        counter: action.payload.reduce(dividereducer)
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        counter: 0
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default counterReducer;