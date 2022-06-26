import {useReducer , createContext , useContext} from "react"
import {filterReducer} from "../../reducers/filter-reducer/filter-reducer"

const FilterContext = createContext()

const FilterProvider = ({children}) => {
    const [
        {  sortBy , rateBy , filterBy , showCodOnly , showFastDeliveryOnly , showCategoryMen , showCategoryWomen , price  },
        dispatch
      ] = useReducer(filterReducer, {
        showCodOnly : false ,
        showFastDeliveryOnly : false,
        showCategoryMen : false ,
        showCategoryWomen : false ,
        sortBy: null,
        rateBy: null,
        filterBy : null,
        price:4000
      });
    return (
        <FilterContext.Provider value = {{sortBy , rateBy , filterBy , showCodOnly , showFastDeliveryOnly , showCategoryMen , showCategoryWomen , price , dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilters = () => useContext(FilterContext)

export { FilterProvider , useFilters}