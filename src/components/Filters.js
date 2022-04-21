import {useFilters } from "../contexts/filter-context/filter-context"
 
const Filters = () => {

    const {sortBy , rateBy , showFastDeliveryOnly , showCodOnly , dispatch } = useFilters()

    return (
        <aside className="filters">
        <div className="filter flex ">
            <p className="filter-heading margin-left margin-bottom margin-top">Filters</p>
            <a className="clear-link margin-right margin-bottom margin-top" onClick = {() => dispatch({type : "CLEAR"})}>Clear</a>
        </div>
        <div className="filter">
            <p className="filter-heading-text margin-left">Services : </p>
            <div className="flex">
                <input className="margin-left margin-top margin-bottom" id="category-checkbox1" name = "category"
                    type="checkbox" checked={showCodOnly}
                    onChange={() => dispatch({ type: "COD" })}/>
               <label className="input-label1 margin-bottom margin-top" for="category-checkbox1">
                    COD Available
                </label>
            </div>
            <div className="flex">
                <input className="margin-left margin-bottom" id="category-checkbox2" name = "category"
                    type="checkbox" checked = {showFastDeliveryOnly}
                    onChange={() => dispatch({ type: "TOGGLE_DELIVERY"  })}  />
                <label className="input-label2 margin-right margin-bottom" for="category-checkbox2">Fast
                    Delivery 🚚</label>
            </div>
        </div>

        <p className="filter-heading-text margin-left">Rating</p>
        <div className="rating margin-top">
            <input id="rating1" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "4_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "4_STARS_AND_ABOVE"} />
            <label for="rating1"> 4 stars and above </label>
        </div>
        <div className="rating">
            <input id="rating2" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "3_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "3_STARS_AND_ABOVE"}  />
            <label for="rating2"> 3 stars and above</label>
        </div>
        <div className="rating">
            <input id="rating3" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "2_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "2_STARS_AND_ABOVE"}  />
            <label for="rating3"> 2 stars and above</label>
        </div>
        <div className="rating">
            <input id="rating4" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "1_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "1_STARS_AND_ABOVE"} />
            <label for="rating4"> 1 stars and above</label>
        </div>
        <p className="filter-heading-text margin-left">Sort by</p>
        <div className="rating">
            <input id="price-filter1" className="margin-left" name="sort" type="radio" onChange={() =>
          dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
        }
        checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}/>
            <label for="price-filter1"> Price-Low to High</label>
        </div>
        <div className="rating">
            <input id="price-filter2" className="margin-left" name="sort" type="radio"  onChange={() =>
          dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
        }
        checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}/>
            <label for="price-filter2"> Price-High to Low</label>
        </div>
    </aside>
    )
}

export {Filters}