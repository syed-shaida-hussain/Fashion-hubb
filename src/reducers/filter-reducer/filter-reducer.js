function filterReducer(state, action) {
    switch (action.type) {
      case "CATEGORY_MEN":
        return (state = {
          ...state,
          showCategoryMen: !state.showCategoryMen
        });
        case "CATEGORY_WOMEN":
          return (state = {
            ...state,
            showCategoryWomen: !state.showCategoryWomen
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
      default:
        return state;
    }
  }

export {filterReducer}
