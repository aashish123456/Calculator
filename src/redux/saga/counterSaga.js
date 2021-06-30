// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* Addition() {
  try {
    
    // Dispatch Action To Redux Store
    yield put({
      type: 'Addition',
      value: 1,
      initialNumber:'',
      finalNumber:''
    });
  }
  catch (error) {
    console.log(error);
  }
};

// Watcher: Add Counter Async
export function* watchAddCounter() {
  // Take Last Action Only
  yield takeLatest( Addition);
};

// Worker: Substract Counter
function* substraction() {
  try {
  
    yield put({
      type: 'Substraction',
      value: 1,
      initialNumber:'',
      finalNumber:''
      
    });
  }
  catch (error) {
    console.log(error);
  }
};

// Watcher: Decrease Counter
export function* watchsubstracteCounter() {
  // Take Last Action Only
  yield takeLatest('DECREASE_COUNTER', substraction);
};

function* Multiply() {
    try {
      // Dispatch Action To Redux Store
      yield put({
        type: 'Multiply',
        value: 1,
        initialNumber:'',
        finalNumber:''
        
      });
    }
    catch (error) {
      console.log(error);
    }
};

  // Watcher: Multiply Counter
  export function* watchMultiplyCounter() {
    // Take Last Action Only
    yield takeLatest( Multiply);
  };
  function* Divide() {
    try {
      // Dispatch Action To Redux Store
      yield put({
        type: 'Divide',
        value: 1,
        initialNumber:'',
        finalNumber:''
        
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Watcher: Divide Counter
  export function* watchDivideCounter() {
    // Take Last Action Only
    yield takeLatest( Divide);
  };
  function* clearData() {
    try {
      // Dispatch Action To Redux Store
      yield put({
        type: 'Clear',
        value: 1,
        initialNumber:'',
        finalNumber:''
        
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Watcher: Divide Counter
  export function* watchclearDataCounter() {
    // Take Last Action Only
    yield takeLatest( clearData);
  };