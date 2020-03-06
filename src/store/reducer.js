const initialState = {
  counter:0
};

const reducer = (state = initialState,action) => {
  const newState = { ...state};
  switch (action.type) {
    case 'COUNTER_UP':
      newState.counter+=1;
      break;

    case 'COUNTER_DOWN':
        newState.counter-=1;
    break;
    default:
      return newState;
  }
  return newState;
}

export default reducer;