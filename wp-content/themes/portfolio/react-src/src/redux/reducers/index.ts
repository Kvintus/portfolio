import { createStore, Action, compose, combineReducers } from "redux";
import { ReducerAction } from "react";

const initialState = {
  articles: ['']
}

function rootReducer(state = initialState, action: any) {
  if (action.type === 'ADD_ARTICLE') {
    state.articles.push(action.payload);
  }
  return state;
}

declare global {
  interface Window { devToolsExtension?: any; }
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension : (f:any) => f
)

const re = combineReducers([rootReducer])

const store = createStore(re, enhancers);

export default store;