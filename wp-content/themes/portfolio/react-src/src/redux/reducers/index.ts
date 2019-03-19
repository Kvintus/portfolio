import { createStore, Action } from "redux";
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

const store = createStore(rootReducer);

export default store;