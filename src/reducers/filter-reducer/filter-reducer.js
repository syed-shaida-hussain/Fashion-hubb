function filterReducer(state, action) {
  switch (action.type) {
    case "COD":
      return (state = {
        ...state,
        showCodOnly : !state.showCodOnly
      });
    case "TOGGLE_DELIVERY":
       return (state = {
        ...state,
        showFastDeliveryOnly : !state.showFastDeliveryOnly
      });
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    case "RATE":
      return {
        ...state, 
        rateBy: action.payload
      };
    case "CLEAR":
      return {
        ...state , sortBy : null , rateBy : null , showCodOnly : false , showFastDeliveryOnly : false
      }
    default:
      return state;
  }
}

export {filterReducer}
