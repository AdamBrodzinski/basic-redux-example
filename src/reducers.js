// app reducer handles general app UI state, you could
// also have one single reducer for everything if that's
// easier

const appInitialState = {
  name: "N/A",
};

export function appReducer(state = appInitialState, action) {
  switch (action.type) {

  case 'CHANGE_NAME':
    // make copy of state and merge name into copied state
    //return _.extend({}, state, {name: action.name})
    // or this es6 syntax does the same as above
    return {...state, name: action.name};

  default:
    return state;
  }
};



// doesn't do anything in the UI but illustrates using combineReducers in index.js
export function formReducer(state = {}, action) {
  switch (action.type) {
  case 'UPDATE_FIELD':
    return {...state, formData: action.payload};

  default:
    return state;
  }
};
