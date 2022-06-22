function filterReducer(state, action) {
  switch (action.type) {
    case "PRICE":
      return (state = {
        ...state,
        price : action.payload,
      });
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
    case "CATEGORY_MEN":
       return (state = {
        ...state,
         showCategoryMen : !state.showCategoryMen
     });
    case "CATEGORY_WOMEN":
      return (state = {
       ...state,
        showCategoryWomen : !state.showCategoryWomen
    });
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    case "RATE":
      return {
        ...state, 
        rateBy: action.payload,
      };
    case "CLEAR":
      return {
        ...state , sortBy : null , rateBy : null , showCodOnly : false , showFastDeliveryOnly : false , showCategoryMen : false, showCategoryWomen : false , price : 4000
      }
    default:
      return state;
  }
}

export {filterReducer}
