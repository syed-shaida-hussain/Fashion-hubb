import {useReducer , createContext , useContext} from "react"
import {filterReducer} from "../../reducers/filter-reducer/filter-reducer"

const FilterContext = createContext()

const FilterProvider = ({children}) => {
    const [
        {  sortBy , rateBy , showCodOnly , showFastDeliveryOnly },
        dispatch
      ] = useReducer(filterReducer, {
        showCodOnly : false ,
        showFastDeliveryOnly : false,
        sortBy: null,
        rateBy: null
      });
    return (
        <FilterContext.Provider value = {{sortBy , rateBy , showCodOnly , showFastDeliveryOnly , dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilters = () => useContext(FilterContext)

export { FilterProvider , useFilters}