import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productReducers from './store/redcucers/productReducers'
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productReducers,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}
