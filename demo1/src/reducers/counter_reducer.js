const counterReducer = function(state = {count: 1}, action){
  // console.log(action)
  // return state
  switch(action.type){
    case 'COUNTADD':
      return{
        ...state, count: state.count + 1
      }

    case 'COUNT_REDUCE':
      return{
        ...state, count: state.count - 1
      }

    default:
      return state
  }
}

export default counterReducer