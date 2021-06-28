// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
// Imports: Screens
import Counter from './src/screens/CalculationScreen';
// Imports: Redux Store
import { store } from './src/redux/store';
// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}